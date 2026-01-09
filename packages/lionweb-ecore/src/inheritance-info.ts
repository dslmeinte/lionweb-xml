import { isRef, nameOf, nameSorted } from "@lionweb/core"
import { EClass, EPackage } from "./gen/ecore.g.js"
import { isEClass } from "./functions.js"
import { log, LogLevel } from "./logging.js"


export type InheritanceInfo = {
    eClass: EClass

    referencedSuperTypes: EClass[]
    interfaceSuperTypes: EClass[]
    nonInterfaceSuperTypes: EClass[]

    /** meaning that eClass is a non-interface inheriting from more than 1 non-interface EClass-es */
    hasMultipleInheritance: boolean

    /** meaning that eClass is an interface inheriting from more than 0 non-interface EClass-es */
    hasIllegalInheritance: boolean
}

export const inheritanceInfosFor = (ePackage: EPackage): InheritanceInfo[] =>
    ePackage.eClassifiers
        .filter(isEClass)
        .map((eClass) => {
            const referencedSuperTypes = eClass.eSuperTypes.filter(isRef)
            const interfaceSuperTypes = referencedSuperTypes.filter((eSuperType) => eSuperType.interface) as EClass[]
            const nonInterfaceSuperTypes = referencedSuperTypes.filter((eSuperType) => !eSuperType.interface) as EClass[]
            const hasMultipleInheritance = !eClass.interface && nonInterfaceSuperTypes.length > 1
            const hasIllegalInheritance = eClass.interface && nonInterfaceSuperTypes.length > 0

            return {
                eClass,
                referencedSuperTypes,
                interfaceSuperTypes,
                nonInterfaceSuperTypes,
                hasMultipleInheritance,
                hasIllegalInheritance
            }
        })

export const verboseInheritanceInfo = (inheritanceInfos: InheritanceInfo[], logLevel: LogLevel) => {
    const eClassFrom = ({eClass}: InheritanceInfo) => eClass
    const havingMultipleInheritance = inheritanceInfos.filter(({hasMultipleInheritance}) => hasMultipleInheritance)
    if (havingMultipleInheritance.length > 0) {
        log(logLevel, `the following non-interface EClass-es exhibit multiple inheritance: ${nameSorted(havingMultipleInheritance.map(eClassFrom)).map(nameOf).join(" ")}`)
    }
    const havingIllegalInheritance = inheritanceInfos.filter(({hasIllegalInheritance}) => hasIllegalInheritance)
    if (havingIllegalInheritance.length > 0) {
        log(logLevel, `the following interface EClass-es have non-interface super types: ${nameSorted(havingIllegalInheritance.map(eClassFrom)).map(nameOf).join(" ")}`)
    }
}

