import { isRef, nameOf } from "@lionweb/core"
import { asString } from "littoral-templates"
import { EClass, EPackage } from "./gen/ecore.g.js"


const plantUMLLineFor = (eClass: EClass) => {
    const declaration = `${eClass.interface ? "interface" : (eClass.abstract ? "abstract " : "") + "class"} ${eClass.name}`
    const eSuperTypes = eClass.eSuperTypes.filter((eSuperType) => isRef(eSuperType))
    const extends_ = eSuperTypes.length > 0
        ? ` extends ${eSuperTypes.map(nameOf).join(", ")}`
        : ""
    return declaration + extends_
}

export const inheritanceAsPlantUMLOf = (ePackage: EPackage) => {
    return asString([
        `@startuml`,
        ``,
        ePackage.eClassifiers
            .filter((eClassifier) => eClassifier instanceof EClass)
            .map(plantUMLLineFor),
        ``,
        `@enduml`
    ])
}

