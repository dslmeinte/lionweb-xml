import { EClass, EDataType } from "./gen/ecore.g.js"


const createEDataTypeAsPair = (name: string): [name: string, eDataType: EDataType] => {
    const eDataType = EDataType.create(`ecore-eDataType-${name}`)
    eDataType.name = name
    return [name, eDataType]
}

const createEClassAsPair = (name: string): [name: string, eClass: EClass] => {
    const eClass = EClass.create(`ecore-eClass-${name}`)
    eClass.name = name
    return [name, eClass]
}


/**
 * “Stand-in” model elements from the Ecore meta(-meta)-model.
 * Eventually, an actual reading of `Ecore.ecore` should be used.
 */
export const ecoreStdlib = {
    ...Object.fromEntries(["EBoolean", "EInt", "EString"].map(createEDataTypeAsPair)),
    ...Object.fromEntries(["EDataType", "EObject"].map(createEClassAsPair))
} as const

