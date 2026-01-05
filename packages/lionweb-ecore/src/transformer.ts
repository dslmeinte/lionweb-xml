import { Concept, Interface, isRef, Language, LanguageEntity, LanguageFactory, nameOf } from "@lionweb/core"
import { LionWebId } from "@lionweb/json"
import { concatenator } from "@lionweb/ts-utils"

import { EClass, EClassifier, EDataType, EEnum, EPackage } from "./gen/ecore.g.js"
import { log, LogLevel } from "./logging.js"


/**
 * Optional configuration for the {@link asLionWebLanguage `asLionWebLanguage`} function.
 */
export type TransformationOptions = Partial<{
    eDataTypesAsPrimitiveTypes: boolean
}>


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
export const asLionWebLanguage = (ePackage: EPackage, languageVersion: string, options?: TransformationOptions): Language => {
    const factory = new LanguageFactory(ePackage.name, languageVersion, concatenator("-"), concatenator("-"))

    const entitiesBySourceId: Record<LionWebId, LanguageEntity> = {}

    const transformEClassWithoutFeatures = (eClass: EClass) => {
        const {name, abstract} = eClass
        const interfaceSuperTypes = eClass.eSuperTypes.filter((eSuperType) => isRef(eSuperType) && eSuperType.interface) as EClass[]
        const nonInterfaceSuperTypes = eClass.eSuperTypes.filter((eSuperType) => isRef(eSuperType) && !eSuperType.interface) as EClass[]
        if (eClass.interface) {
            if (nonInterfaceSuperTypes.length > 0) {
                log(LogLevel.warning, ` interface EClass "${name}" has super types that are not interfaces: ${nonInterfaceSuperTypes.map(nameOf).join(" ")} — didn’t add the transformed versions of those to Interface.extends`)
            }
            return factory.interface(name).extending(
                ...(interfaceSuperTypes.map(transformEClassifierMemoised) as Interface[])
            )
        }
        if (nonInterfaceSuperTypes.length > 1) {
            log(LogLevel.warning, ` EClass "${name}" is not an interface, but exhibits multiple inheritance — set Concept.extends to the first transformed non-interface, and ignored the others`)
        }
        const concept = factory.concept(name, abstract)
        if (nonInterfaceSuperTypes.length > 0) {
            const extendSuperType = transformEClassifierMemoised(nonInterfaceSuperTypes[0])
            if (extendSuperType !== undefined) {
                concept.extends = extendSuperType as Concept
            }
        }
        concept.implementing(
            ...(interfaceSuperTypes.map(transformEClassifierMemoised) as Interface[])
        )
        return concept
    }

    const transformEClassifierRecursively = (eClassifier: EClassifier): LanguageEntity | undefined => {
        const {name} = eClassifier
        if (eClassifier instanceof EClass) {
            const classifier = transformEClassWithoutFeatures(eClassifier)
            // TODO  features
            return classifier
        }
        if (eClassifier instanceof EEnum) {
            const enum_ = factory.enumeration(name)
            eClassifier.eLiterals.forEach((eEnumLiteral) => {
                factory.enumerationLiteral(enum_, eEnumLiteral.name)
            })
            return enum_
        }
        if (eClassifier instanceof EDataType) {
            if (options?.eDataTypesAsPrimitiveTypes) {
                log(LogLevel.info, ` transformed EDataType "${name}" to a LionWeb PrimitiveType`)
                return factory.primitiveType(name)
            } // else:
            log(LogLevel.warning, ` EDataType "${name}" is not transformed, as there’s no canonical (and instantiable) counterpart in LionWeb`)
            return undefined
        }
        log(LogLevel.warning, ` ${eClassifier.constructor.name} "${name}" is not handled by the transformation (yet?)`)
        return undefined
    }

    const transformEClassifierMemoised = (eClassifier: EClassifier): LanguageEntity | undefined => {
        const {id: sourceId} = eClassifier
        if (sourceId in entitiesBySourceId) {
            return entitiesBySourceId[sourceId]
        }
        const entity = transformEClassifierRecursively(eClassifier)
        if (entity !== undefined) {
            entitiesBySourceId[sourceId] = entity
        }
        return entity
    }

    ePackage.eClassifiers.forEach(transformEClassifierMemoised)
    // TODO  what to do with ePackage.eAnnotations?

    return factory.language
}

