import {
    builtinPrimitives,
    Classifier,
    Concept,
    DataType,
    Interface,
    isRef,
    Language,
    LanguageEntity,
    LanguageFactory,
    nameOf,
    nameSorted,
    PrimitiveType
} from "@lionweb/core"
import { LionWebId } from "@lionweb/json"
import { concatenator } from "@lionweb/ts-utils"

import {
    EAttribute,
    EClass,
    EClassifier,
    EDataType,
    EEnum,
    EPackage,
    EReference,
    EStructuralFeature
} from "./gen/ecore.g.js"
import { log, LogLevel } from "./logging.js"


/**
 * Optional configuration for the {@link asLionWebLanguage `asLionWebLanguage`} function.
 */
export type TransformerOptions = Partial<{
    eDataTypesToPrimitiveTypes: boolean
    eDataTypeToLionWebPrimitiveType: (eDataType: EDataType) => PrimitiveType | undefined
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
    const factory = new LanguageFactory(ePackage.name, languageVersion, concatenator("-"), concatenator("-"))

    const entitiesBySourceId: Record<LionWebId, LanguageEntity> = {}

    const entityBySourceId = (sourceId: LionWebId): LanguageEntity => {
        const entity = entitiesBySourceId[sourceId]
        if (entity === undefined) {
            throw new Error(`no entity with source id "${sourceId}" exists`)
        }
        return entity
    }

    const entityFor = (eClassifier: EClassifier): LanguageEntity =>
        entityBySourceId(eClassifier.id)

    const transformedEClassifier = (eClassifier: EClassifier): LanguageEntity | undefined => {
        const {name} = eClassifier
        if (eClassifier instanceof EClass) {
            const {abstract} = eClassifier
            const genName = (["Classifier"].indexOf(name) === -1
                ? ""
                : ePackage.name) + name
            return eClassifier.interface
                ? factory.interface(genName)
                : factory.concept(genName, abstract)
        }
        if (eClassifier instanceof EEnum) {
            const enum_ = factory.enumeration(name)
            eClassifier.eLiterals.forEach((eEnumLiteral) => {
                factory.enumerationLiteral(enum_, eEnumLiteral.name)
            })
            return enum_
        }
        if (eClassifier instanceof EDataType) {
            if (options?.eDataTypesToPrimitiveTypes) {
                log(LogLevel.info, ` transformed EDataType "${name}" to a LionWeb PrimitiveType`)
                return factory.primitiveType(name)
            } // else:
            log(LogLevel.warning, ` EDataType "${name}" is not transformed, as there’s no canonical (and instantiable) counterpart in LionWeb`)
            return undefined
        }
        log(LogLevel.warning, ` ${eClassifier.constructor.name} "${name}" is not handled by the transformation (yet?)`)
        return undefined
    }

    // 1. instantiate LW language entities
    nameSorted(ePackage.eClassifiers).forEach((eClassifier) => {
        const entity = transformedEClassifier(eClassifier)
        if (entity !== undefined) {
            entitiesBySourceId[eClassifier.id] = entity
        }
    })

    const populateEClass = (eClass: EClass) => {
        const {name} = eClass
        const classifier = entityFor(eClass) as Classifier

        // 2. hook up super types
        const referencedSuperTypes = eClass.eSuperTypes.filter(isRef)
        const interfaceSuperTypes = referencedSuperTypes.filter((eSuperType) => eSuperType.interface) as EClass[]
        const nonInterfaceSuperTypes = referencedSuperTypes.filter((eSuperType) => !eSuperType.interface) as EClass[]
        if (eClass.interface) {
            if (nonInterfaceSuperTypes.length > 0) {
                log(LogLevel.warning, `interface-EClass "${name}" has super types that are not interfaces: ${nonInterfaceSuperTypes.map(nameOf).join(" ")} — didn’t add the transformed versions of those to Interface.extends`)
            }
            (classifier as Interface).extending(
                ...(interfaceSuperTypes.map(entityFor) as Interface[])
            )
        } else {
            const concept = classifier as Concept
            if (nonInterfaceSuperTypes.length > 0) {
                const mappedSuperTypes = nonInterfaceSuperTypes.map(entityFor)
                const mappedSuperConcept = mappedSuperTypes[0] as Concept
                concept.extends = mappedSuperConcept
                if (mappedSuperTypes.length > 1) {
                    log(LogLevel.warning, `non-interface-EClass "${name}" exhibits multiple inheritance — set Concept.extends to first super concept "${mappedSuperConcept.name}", and ignored the remaining ${mappedSuperTypes.length - 1}`)
                }
            }
            concept.implementing(
                ...(interfaceSuperTypes.map(entityFor) as Interface[])
            )
        }

        const dataTypeFor = ({id: sourceId, eType}: EAttribute): DataType => {
            if (isRef(eType)) {
                if (eType instanceof EEnum) {
                    return entityFor(eType)
                }
                if (eType instanceof EDataType) {
                    if (options?.eDataTypeToLionWebPrimitiveType !== undefined) {
                        const primitiveType = options!.eDataTypeToLionWebPrimitiveType!(eType)
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
                    // TODO  probably put an annotation on this if upperBound !== -1
                }
                if (isRef(eType)) {
                    link.ofType(entityFor(eType) as Classifier)
                }
                return
            }

            throw new Error(`can’t transform an EStructuralFeature of class ${eStructuralFeature.constructor.name}`)
        }

        eClass.eStructuralFeatures.forEach((eStructuralFeature) => {
            transformEStructuralFeature(eStructuralFeature)
        })
    }

    ePackage.eClassifiers
        .filter((eClassifier) => eClassifier instanceof EClass)
        .forEach(populateEClass)


    // TODO  what to do with ePackage.eAnnotations?

    return factory.language
}

