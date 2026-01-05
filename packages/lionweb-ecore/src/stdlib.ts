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
 * TODO  use an actual reading of `Ecore.ecore`
 */
export const ecoreStdlib = {
    ...Object.fromEntries([
        "EBoolean",
        "EInt",
        "EString",
        // used by KerML and SysML v2:
        "EInteger",
        "EReal"
    ].map(createEDataTypeAsPair)),
    ...Object.fromEntries(["EDataType", "EObject"].map(createEClassAsPair))
} as const

