import { generateLanguage } from "@lionweb/class-core-generator"
import { builtinClassifiers, builtinPrimitives, LanguageFactory, serializeLanguages } from "@lionweb/core"
import { concatenator } from "@lionweb/ts-utils"
import { generatePlantUmlForLanguage, languageAsText, writeJsonAsFile } from "@lionweb/utilities"
import { writeFileSync } from "fs"
import { join } from "path"

const factory = new LanguageFactory("Ecore", "1", concatenator("-"), concatenator("-"))
const { language } = factory

const { inamed } = builtinClassifiers
const { booleanDataType, integerDataType, stringDataType} = builtinPrimitives


// build up hierarchy in order of EcoreHierarchy.gif:

const EObject = factory.concept("EObject", false)
factory.property(EObject, "idXmi").ofType(stringDataType).isOptional()

const EModelElement = factory.concept("EModelElement", true, EObject)

// (skip EFactory: not needed)
const ENamedElement = factory.concept("ENamedElement", true, EModelElement)
const EAnnotation = factory.concept("EAnnotation", false, EModelElement)

const EPackage = factory.concept("EPackage", false, ENamedElement)
const EClassifier = factory.concept("EClassifier", true, ENamedElement)
const EEnumLiteral = factory.concept("EEnumLiteral", false, ENamedElement)
const ETypedElement = factory.concept("ETypedElement", true, ENamedElement)

const EClass = factory.concept("EClass", false, EClassifier)
const EDataType = factory.concept("EDataType", false, EClassifier)
const EStructuralFeature = factory.concept("EStructuralFeature", true, ETypedElement)

const EEnum = factory.concept("EEnum", false, EDataType)
factory.concept("EAttribute", false, EStructuralFeature)
const EReference = factory.concept("EReference", false, EStructuralFeature)

const EStringToStringMapEntry = factory.concept("EStringToStringMapEntry", false)
factory.property(EStringToStringMapEntry, "key").ofType(stringDataType)
factory.property(EStringToStringMapEntry, "value").ofType(stringDataType)


// add properties in order of EcoreRelations.gif:

factory.property(EAnnotation, "source").ofType(stringDataType)
factory.containment(EAnnotation, "details").ofType(EStringToStringMapEntry).isOptional().isMultiple()
ENamedElement.implementing(inamed)

factory.property(ETypedElement, "lowerBound").ofType(integerDataType)
factory.property(ETypedElement, "upperBound").ofType(integerDataType).isOptional()    // default = 1

factory.property(EPackage, "nsURI").ofType(stringDataType)
factory.property(EPackage, "nsPrefix").ofType(stringDataType)

factory.property(EClass, "abstract").ofType(booleanDataType)
factory.property(EClass, "interface").ofType(booleanDataType)

factory.property(EEnumLiteral, "value").ofType(stringDataType)

factory.property(EReference, "containmentXsi").ofType(booleanDataType)


// add links in order of EcoreRelations.gif:

factory.containment(EModelElement, "eAnnotations").isOptional().isMultiple().ofType(EAnnotation)

factory.reference(ETypedElement, "eType").ofType(EClassifier).isOptional()

factory.containment(EPackage, "eClassifiers").ofType(EClassifier).isOptional().isMultiple()
factory.containment(EPackage, "eSubPackages").ofType(EPackage).isOptional().isMultiple()

factory.containment(EClass, "eStructuralFeatures").ofType(EStructuralFeature).isOptional().isMultiple()
factory.reference(EClass, "eSuperTypes").ofType(EClass).isOptional().isMultiple()

factory.containment(EEnum, "eLiterals").ofType(EEnumLiteral).isOptional().isMultiple()


// generate artifacts:

export const generateEcoreArtifacts = () => {
    const ecorePath = join("artifacts", "ecore")
    writeJsonAsFile(join(ecorePath, "Ecore.language.json"), serializeLanguages(language))
    writeFileSync(join(ecorePath, "Ecore.language.txt"), languageAsText(language))
    writeFileSync(join(ecorePath, "Ecore.language.puml"), generatePlantUmlForLanguage(language))
    generateLanguage(language, "../lionweb-ecore/src/gen")
}

