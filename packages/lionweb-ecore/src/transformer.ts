import {
    builtinPrimitives,
    Classifier,
    Concept,
    DataType,
    Enumeration,
    Interface,
    isRef,
    Language,
    LanguageFactory,
    nameOf,
    nameSorted,
    PrimitiveType
} from "@lionweb/core"
import { LionWebId } from "@lionweb/json"
import { concatenator } from "@lionweb/ts-utils"

import { EAttribute, EClass, EDataType, EPackage, EReference, EStructuralFeature } from "./gen/ecore.g.js"
import { isEClass, isEDataType, isEEnum } from "./functions.js"
import { inheritanceInfosFor, verboseInheritanceInfo } from "./inheritance-info.js"
import { log, LogLevel } from "./logging.js"


/**
 * Optional configuration for the {@link asLionWebLanguage `asLionWebLanguage`} function.
 */
export type TransformerOptions = Partial<{
    eDataTypesToPrimitiveTypes: boolean
    customEDataTypeToLionWebPrimitiveType: (eDataType: EDataType) => PrimitiveType | undefined
    rectifyMultipleInheritance: boolean
}>


const eDataTypeToPrimitiveType: Record<string, PrimitiveType> = {
    "EBoolean": builtinPrimitives.booleanDataType,
    "EInt": builtinPrimitives.integerDataType,
    "EString": builtinPrimitives.stringDataType
}


/**
 * @return a LionWeb {@link Language language} that is a transformation of the given {@link EPackage `EPackage`} Ecore meta-model.
 * @param ePackage An Ecore meta-model.
 * @param languageVersion The version of the LionWeb language.
 * @param options Optional configuration for this function.
 *
 * **Note** the following assumptions and limitations:
 *
 * 1. The following namespace prefixes are currently hard-coded:
 *     * `http://www.eclipse.org/emf/2002/Ecore` &rarr; `ecore`
 *     * `http://www.w3.org/2001/XMLSchema-instance` &rarr; `xsi`
 *     * `http://www.omg.org/XMI` &rarr; `xmi`
 * 2. Sub packages are not transformed.
 * 3. Features are not transformed.
 * 4. Multiple inheritance is not dealt with.
 */
export const asLionWebLanguage = (ePackage: EPackage, languageVersion: string, options?: TransformerOptions): Language => {

    const inheritanceInfos = inheritanceInfosFor(ePackage)
    verboseInheritanceInfo(inheritanceInfos, LogLevel.info)
    const inheritanceInfoBySourceId = Object.fromEntries(
        inheritanceInfos.map((inheritanceInfo) => [
            inheritanceInfo.eClass.id,
            inheritanceInfo
        ])
    )

    const factory = new LanguageFactory(ePackage.name, languageVersion, concatenator("-"), concatenator("-"))


    // 1. instantiate LW language entities

    const nonEEnumEDataTypes = ePackage.eClassifiers
        .filter((eClassifier) => isEDataType(eClassifier) && !isEEnum(eClassifier))   // (note: EEnum is an EDataType)
    if (options?.eDataTypesToPrimitiveTypes) {
        nameSorted(nonEEnumEDataTypes)  // (sort names for some stability)
            .forEach(({name}) => {
                factory.primitiveType(name)
            })
    } else {
        if (nonEEnumEDataTypes.length > 0) {
            log(LogLevel.warning, `the following non-EEnum EDataType-s will not be transformed, as there’s no canonical (and instantiable) counterpart in LionWeb: ${nameSorted(nonEEnumEDataTypes).map(nameOf).join(" ")}`)
        }
    }

    const eEnums = ePackage.eClassifiers.filter(isEEnum)
    const enumerationsBySourceId: Record<LionWebId, Enumeration> = Object.fromEntries(
        nameSorted(eEnums)  // (sort names for some stability)
            .map((eEnum) => {
                const {name, eLiterals} = eEnum
                const enum_ = factory.enumeration(name)
                eLiterals.forEach((eEnumLiteral) => {
                    factory.enumerationLiteral(enum_, eEnumLiteral.name)
                })
                return [ eEnum.id, enum_ ]
            })
    )

    const interfaceForEClassBySourceId: Record<LionWebId, Interface> = {}
    const interfaceFor = (eClass: EClass): Interface => {
        const sourceId = eClass.id
        const intface = interfaceForEClassBySourceId[sourceId]
        if (intface === undefined) {
            throw new Error(`no interface for EClass with source id "${sourceId}" exists`)
        }
        return intface
    }
    const directClassifierForEClassBySourceId: Record<LionWebId, Classifier> = {}
    const directClassifierFor = (eClass: EClass): Classifier => {
        const sourceId = eClass.id
        const classifier = directClassifierForEClassBySourceId[sourceId]
        if (classifier === undefined) {
            throw new Error(`no direct(ly-transformed) classifier for EClass with source id "${sourceId}" exists`)
        }
        return classifier
    }
    const eClasses = ePackage.eClassifiers.filter(isEClass)
    nameSorted(eClasses)  // (sort names for some stability)
        .forEach((eClass) => {
            const {name, abstract, id} = eClass

            const genName = (["Classifier"].indexOf(name) === -1
                ? ""
                : ePackage.name) + name
            // TODO  add annotation to transformed classifier to state its original name (in case the genName is different)

            if (options?.rectifyMultipleInheritance) {
                if (eClass.interface) {
                    const intface = factory.interface(genName)
                    interfaceForEClassBySourceId[id] = intface
                    directClassifierForEClassBySourceId[id] = intface
                } else {
                    const intface = factory.interface(`I${name}`)
                    interfaceForEClassBySourceId[id] = intface
                    directClassifierForEClassBySourceId[id] = factory.concept(genName, abstract).implementing(intface)
                }
            } else {
                const classifier = eClass.interface
                    ? factory.interface(genName)
                    : factory.concept(genName, abstract)
                directClassifierForEClassBySourceId[id] = classifier
                if (classifier instanceof Interface) {
                    interfaceForEClassBySourceId[id] = classifier
                }
            }
        })


    // 2. hook up super types
    const installSuperTypesForEClass = (eClass: EClass) => {
        const {name} = eClass
        const {referencedSuperTypes, interfaceSuperTypes, nonInterfaceSuperTypes} = inheritanceInfoBySourceId[eClass.id]
        if (options?.rectifyMultipleInheritance) {
            const intface = interfaceFor(eClass)
            intface.extending(...(referencedSuperTypes.map(interfaceFor)))
        } else {
            const classifier = directClassifierFor(eClass)
            if (classifier instanceof Interface) {
                classifier.extending(...(interfaceSuperTypes.map(interfaceFor)))
                if (nonInterfaceSuperTypes.length > 0) {
                    log(LogLevel.warning, `interface-EClass "${name}" has super types that are not interfaces: ${nonInterfaceSuperTypes.map(nameOf).join(" ")} — didn’t add the transformed versions of those to Interface.extends`)
                }
            }
            if (classifier instanceof Concept) {
                classifier.implementing(...(interfaceSuperTypes.map(interfaceFor)))
                if (nonInterfaceSuperTypes.length > 0) {
                    const mappedSuperTypes = nonInterfaceSuperTypes.map(directClassifierFor)
                    const mappedSuperConcept = mappedSuperTypes[0] as Concept
                    classifier.extends = mappedSuperConcept
                    if (nonInterfaceSuperTypes.length > 1) {
                        log(LogLevel.warning, `non-interface-EClass "${name}" exhibits multiple inheritance — set Concept.extends to first super concept "${mappedSuperConcept.name}", and ignored the remaining ${mappedSuperTypes.length - 1}`)
                    }
                }
            }
        }
    }

    const installFeaturesForEClass = (eClass: EClass) => {
        const classifier = options?.rectifyMultipleInheritance ? interfaceFor(eClass) : directClassifierFor(eClass)

        const dataTypeFor = ({id: sourceId, eType}: EAttribute): DataType => {
            if (isRef(eType)) {
                if (isEEnum(eType)) {
                    return enumerationsBySourceId[eType.id]
                }
                if (isEDataType(eType)) {
                    if (options?.customEDataTypeToLionWebPrimitiveType !== undefined) {
                        const primitiveType = options!.customEDataTypeToLionWebPrimitiveType!(eType)
                        if (primitiveType !== undefined) {
                            return primitiveType
                        }
                    }
                    const type = eDataTypeToPrimitiveType[eType.name]
                    if (type !== undefined) {
                        return type
                    }
                    log(LogLevel.error, `can’t map Ecore data type ${eType.name} (as eType of the EAttribute with source ID "${sourceId}") to a LionWeb primitive type — substituting string type to avoid problems downstream`)
                    return builtinPrimitives.stringDataType
                }
            }
            log(LogLevel.error, `eType reference of EAttribute with source ID "${sourceId}" is not resolved — substituting string type to avoid problems downstream`)
            return builtinPrimitives.stringDataType
        }

        // 3. instantiate and hook up features
        const transformEStructuralFeature = (eStructuralFeature: EStructuralFeature) => {   // (separate function to have non-clashing local names)

            const lowerBound = (): number => {
                try {
                    return eStructuralFeature.lowerBound
                } catch (_) {
                    return 1
                }
            }

            const upperBound = (): number =>
                eStructuralFeature.upperBound ?? 1

            const {name, eType} = eStructuralFeature
            const genName = (["containment"].indexOf(name) === -1
                ? ""
                : ePackage.name) + name
            // TODO  add annotation to transformed feature to state its original name (in case the genName is different)

            if (eStructuralFeature instanceof EAttribute) {
                const property = factory.property(classifier, genName).ofType(dataTypeFor(eStructuralFeature))
                if (lowerBound() === 0) {
                    property.isOptional()
                }
                return
            }

            if (eStructuralFeature instanceof EReference) {
                const link = eStructuralFeature.containment ? factory.containment(classifier, genName) : factory.reference(classifier, genName)
                if (lowerBound() === 0) {
                    link.isOptional()
                }
                if (upperBound() !== 0) {
                    link.isMultiple()
                    // TODO  probably put an annotation on this if upperBound > 1
                }
                if (isRef(eType)) {
                    link.ofType(directClassifierFor(eType as EClass))
                }
                return
            }

            throw new Error(`can’t transform an EStructuralFeature of class ${eStructuralFeature.constructor.name}`)
        }

        eClass.eStructuralFeatures.forEach((eStructuralFeature) => {
            transformEStructuralFeature(eStructuralFeature)
        })
    }

    eClasses
        .forEach((eClass) => {
            installSuperTypesForEClass(eClass)
            installFeaturesForEClass(eClass)
        })


    // TODO  what to do with ePackage.eAnnotations?

    return factory.language
}

