import { EClass, EClassifier, EDataType, EEnum, EPackage } from "./gen/ecore.g.js"


export const isEClass = (eClassifier: EClassifier): eClassifier is EClass =>
    eClassifier instanceof EClass

export const isEEnum = (eClassifier: EClassifier): eClassifier is EEnum =>
    eClassifier instanceof EEnum

export const isEDataType = (eClassifier: EClassifier): eClassifier is EDataType =>
    eClassifier instanceof EDataType


export const verbalizationOfStatisticsFor = ({name, eClassifiers}: EPackage): string => {
    const eClasses = eClassifiers.filter(isEClass)
    const classifiers = eClassifiers.length
    const classes = eClasses.length
    const interfaces = eClasses.filter((eClass) => eClass.interface).length
    const nonInterfaceClasses = eClasses.length - interfaces
    const enumerations = eClassifiers.filter(isEEnum).length
    const nonEnumDataTypes = eClassifiers.filter(isEDataType).length - enumerations
    return `statistics for Ecore meta-model "${name}":    
\t#classifiers          : ${classifiers}
\t#classes              : ${classes}
\t#interfaces           : ${interfaces}
\t#non-interface classes: ${nonInterfaceClasses}
\t#enumerations         : ${enumerations}
\t#non-enum data types  : ${nonEnumDataTypes}
`
}

