import { Classifier, isINamed } from "@lionweb/core"
import { LionWebId } from "@lionweb/json"
import { readFile } from "fs/promises"
import { parseStringPromise } from "xml2js"

import {
    EAnnotationFromXml,
    EAttributeFromXml,
    EClassFromXml,
    EClassifierFromXml,
    EcoreFromXml,
    EcoreObjectFromXml,
    EDataTypeFromXml,
    EEnumFromXml,
    EReferenceFromXml,
    EStructuralFeatureFromXml
} from "./xmi-types.js"
import { ETypeRefToInstall, refFor, RefKind, verbalizationOf } from "./eType-references.js"
import { ecoreStdlib } from "./stdlib.js"
import {
    EAnnotation,
    EAttribute,
    EClass,
    EClassifier,
    EcoreBase,
    EDataType,
    EEnum,
    EEnumLiteral,
    EModelElement,
    ENamedElement,
    EPackage,
    EReference,
    EStringToStringMapEntry,
    EStructuralFeature
} from "./gen/ecore.g.js"
import { ESuperTypeRefToInstall } from "./eSuperType-references.js";


const ecoreBase = EcoreBase.INSTANCE

const deserializeFromEcoreXml = (ecoreFromXml: EcoreFromXml): EPackage => {

    let sequentialId = 0

    const newId = (): LionWebId =>
        `id-${++sequentialId}`

    const eModelElementsByName: Record<string, EModelElement> = {}
    const eModelElementsByIdXmi: Record<string, EModelElement> = {}

    const createEModelElementFrom = ({$, eAnnotations}: EcoreObjectFromXml, metaType: Classifier): EModelElement => {
        const idXmi = $["xmi:id"]
        const eModelElement = ecoreBase.factory()(metaType, newId()) as EModelElement
        if (idXmi !== undefined) {
            eModelElement.idXmi = idXmi
            eModelElementsByIdXmi[idXmi] = eModelElement
        }
        eAnnotations?.forEach((eAnnotationFromXml) => {
            eModelElement.addEAnnotations(deserializeEAnnotationFromXml(eAnnotationFromXml))
        })
        if (isINamed($)) {
            const {name} = $
            eModelElementsByName[name] = eModelElement
            if (eModelElement instanceof ENamedElement) {
                eModelElement.name = name
            }
        }
        return eModelElement
    }

    const deserializeEAnnotationFromXml = (eAnnotationFromXml: EAnnotationFromXml): EAnnotation => {
        const eAnnotation = EAnnotation.create(newId())
        eAnnotation.source = eAnnotationFromXml.$.source
        eAnnotationFromXml.details?.forEach(({$}) => {
            const eStringToStringMapEntry = EStringToStringMapEntry.create(newId())
            eStringToStringMapEntry.key = $.key
            eStringToStringMapEntry.value = $.value
            eAnnotation.addDetails(eStringToStringMapEntry)
        })
        eAnnotationFromXml.eAnnotations?.forEach((innerEAnnotationFromXml) => {
            eAnnotation.addEAnnotations(deserializeEAnnotationFromXml(innerEAnnotationFromXml))
        })
        return eAnnotation
    }

    const eTypeRefsToInstall: ETypeRefToInstall[] = []

    const deserializeEStructuralFeatureFromXml = (eStructuralFeatureFromXml: EStructuralFeatureFromXml): EStructuralFeature => {
        switch (eStructuralFeatureFromXml.$["xsi:type"]) {
            case "ecore:EAttribute": {
                const eAttribute = createEModelElementFrom(eStructuralFeatureFromXml, ecoreBase.EAttribute) as EAttribute
                const {eType} = eStructuralFeatureFromXml.$
                if (eType !== undefined) {
                    eTypeRefsToInstall.push(refFor(eAttribute, eType))
                } else {
                    const {eType: eTypes} = eStructuralFeatureFromXml as EAttributeFromXml
                    if (eTypes === undefined || eTypes.length !== 1) {
                        console.error(`unhandled value of eType in an EAttribute — (eType will not be resolved): ${JSON.stringify(eStructuralFeatureFromXml)}`)
                    } else {
                        eTypeRefsToInstall.push(refFor(eAttribute, eTypes[0].$.href))
                    }
                }
                return eAttribute
            }
            case "ecore:EReference": {
                const eReference = createEModelElementFrom(eStructuralFeatureFromXml, ecoreBase.EReference) as EReference
                const {containment, eType} = (eStructuralFeatureFromXml as EReferenceFromXml).$
                eReference.containmentXsi = (containment === "true")
                if (eType !== undefined) {
                    eTypeRefsToInstall.push(refFor(eReference, eType))
                }
                return eReference
            }
        }
    }

    const eSuperTypeRefsToInstall: ESuperTypeRefToInstall[] = []

    const deserializeEClassFromXml = (eClassFromXml: EClassFromXml): EClass => {
        const eClass = createEModelElementFrom(eClassFromXml, ecoreBase.EClass) as EClass
        const {abstract, interface: intface} = eClassFromXml.$
        eClass.abstract = abstract !== undefined && abstract === "true"
        eClass.interface = intface !== undefined && intface === "true"
        eClassFromXml.$.eSuperTypes?.split(" ").forEach((targetRef) => {
            eSuperTypeRefsToInstall.push({ container: eClass, targetRef })
        })
        eClassFromXml.eStructuralFeatures?.forEach((eStructuralFeatureFromXml) => {
            const eStructuralFeature = deserializeEStructuralFeatureFromXml(eStructuralFeatureFromXml)
            const {lowerBound, upperBound} = eStructuralFeatureFromXml.$
            if (lowerBound !== undefined) {
                eStructuralFeature.lowerBound = parseInt(lowerBound, 10)
            }
            if (upperBound !== undefined) {
                eStructuralFeature.upperBound = parseInt(upperBound, 10)
            }
            eClass.addEStructuralFeatures(eStructuralFeature)
        })
        return eClass
    }

    const deserializeEDataTypeFromXml = (eDataTypeFromXml: EDataTypeFromXml): EDataType =>
        createEModelElementFrom(eDataTypeFromXml, ecoreBase.EDataType) as EDataType

    const deserializeEEnumFromXml = (eEnumFromXml: EEnumFromXml): EEnum => {
        const eEnum = createEModelElementFrom(eEnumFromXml, ecoreBase.EEnum) as EEnum
        eEnumFromXml.eLiterals?.forEach((eEnumLiteralFromXml) => {
            const eEnumLiteral = EEnumLiteral.create(newId())
            eEnumLiteral.name = eEnumLiteralFromXml.$.name
            eEnumLiteral.value = eEnumLiteralFromXml.$.literal
            eEnumLiteralFromXml.eAnnotations?.forEach((eAnnotationFromXml) => {
                eEnumLiteral.addEAnnotations(deserializeEAnnotationFromXml(eAnnotationFromXml))
            })
            eEnum.addELiterals(eEnumLiteral)
        })
        return eEnum
    }

    const deserializeEClassifierFromXml = (eClassifierFromXml: EClassifierFromXml): EClassifier => {
        switch (eClassifierFromXml.$["xsi:type"]) {
            case "ecore:EClass": return deserializeEClassFromXml(eClassifierFromXml as EClassFromXml)
            case "ecore:EDataType": return deserializeEDataTypeFromXml(eClassifierFromXml as EDataTypeFromXml)
            case "ecore:EEnum": return deserializeEEnumFromXml(eClassifierFromXml as EEnumFromXml)
        }
    }

    const deserializeEPackageFromEcoreXml = ({"ecore:EPackage": ePackageFromXml}: EcoreFromXml): EPackage => {
        const ePackage = createEModelElementFrom(ePackageFromXml, ecoreBase.EPackage) as EPackage
        ePackage.nsURI = ePackageFromXml.$.nsURI
        ePackage.nsPrefix = ePackageFromXml.$.nsPrefix
        ePackageFromXml.eClassifiers?.forEach((eClassifierFromXml) => {
            ePackage.addEClassifiers(deserializeEClassifierFromXml(eClassifierFromXml))
        })
        return ePackage
    }

    const ePackage = deserializeEPackageFromEcoreXml(ecoreFromXml)

    const resolveEType = ({targetRef, refKind}: ETypeRefToInstall): ENamedElement | undefined => {
        switch (refKind) {
            case RefKind.ecoreStdlib: return ecoreStdlib[targetRef]
            case RefKind.internalId: return eModelElementsByIdXmi[targetRef] as ENamedElement
            case RefKind.internalPath: return eModelElementsByName[targetRef] as ENamedElement
        }
    }

    eTypeRefsToInstall.forEach((eTypeRefToInstall) => {
        const target = resolveEType(eTypeRefToInstall)
        if (target === undefined) {
            console.error(`can’t resolve ${verbalizationOf(eTypeRefToInstall)}`)
        } else {
            eTypeRefToInstall.container.eType = target
        }
    })

    eSuperTypeRefsToInstall.forEach(({container, targetRef}) => {
        const target = eModelElementsByName[targetRef.substring("#//".length)]
        if (target === undefined) {
            console.error(`can’t resolve eSuperType target "${targetRef}"`)
        } else {
            container.addESuperTypes(target as EClass)
        }
    })

    return ePackage
}


/**
 * @return a {@link EPackage} deserialized (asynchronously) from the file at the given path
 */
export const readEcoreFile = async (path: string): Promise<EPackage> => {
    const xmlAsString = await readFile(path, { encoding: "utf8" })
    const xmlAsJson = await parseStringPromise(xmlAsString)
    return Promise.resolve(deserializeFromEcoreXml(xmlAsJson))
}

