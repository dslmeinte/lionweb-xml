import { Concept, Interface, isRef, Language, LanguageEntity, LanguageFactory, nameOf } from "@lionweb/core"
import { LionWebId } from "@lionweb/json"
import { concatenator } from "@lionweb/ts-utils"

import { EAnnotation, EClass, EClassifier, EDataType, EEnum, EPackage } from "./gen/ecore.g.js"


export const asLionWebLanguage = (ePackage: EPackage, languageVersion: string): Language => {
    const factory = new LanguageFactory(ePackage.name, languageVersion, concatenator("-"), concatenator("-"))

    const entitiesBySourceId: Record<LionWebId, LanguageEntity> = {}

    const transformEClassWithoutFeatures = (eClass: EClass) => {
        const {name, abstract} = eClass
        const interfaceSuperTypes = eClass.eSuperTypes.filter((eSuperType) => isRef(eSuperType) && eSuperType.interface) as EClass[]
        const nonInterfaceSuperTypes = eClass.eSuperTypes.filter((eSuperType) => isRef(eSuperType) && !eSuperType.interface) as EClass[]
        if (eClass.interface) {
            /*
            if (abstract) {
                console.info(`(interface EClass "${name}" is declared as abstract as well)`)
            }
             */
            if (nonInterfaceSuperTypes.length > 0) {
                console.error(`interface EClass "${name}" has super types that are not interfaces: ${nonInterfaceSuperTypes.map(nameOf).join(" ")}`)
            }
            return factory.interface(name).extending(
                ...(interfaceSuperTypes.map(transformEClassifierMemoised) as Interface[])
            )
        }
        if (nonInterfaceSuperTypes.length > 1) {
            console.error(`EClass "${name}" is not an interface, but exhibits multiple inheritance`)
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
        if (eClassifier instanceof EAnnotation) {
            return factory.annotation(name)
        }
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
            console.warn(`EDataType "${name}" is not transformed, as there’s no canonical (and instantiable) counterpart in LionWeb`)
            return undefined
        }
        console.warn(`${eClassifier.constructor.name} "${name}" is not tranformed yet`)
        return undefined
    }

    const transformEClassifierMemoised = (eClassifier: EClassifier): LanguageEntity | undefined => {
        const {id: sourceId} = eClassifier
        if (sourceId in entitiesBySourceId) {
            return entitiesBySourceId[sourceId]
        }
        const entity = transformEClassifierRecursively(eClassifier)
        if (entity !== undefined) {
            entitiesBySourceId[sourceId]
        }
        return entity
    }

    ePackage.eClassifiers.forEach(transformEClassifierMemoised)

    return factory.language
}

