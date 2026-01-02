import { ETypedElement } from "./gen/ecore.g.js"


export enum RefKind {
    internalId,
    internalPath,
    ecoreStdlib
}

export type ETypeRefToInstall = {
    container: ETypedElement
    targetRef: string
    refKind: RefKind
}


const internalNamePrefix = "#//"
const ecoreDataTypeHrefPrefix = "http://www.eclipse.org/emf/2002/Ecore#//"

export const refFor = (container: ETypedElement, ref: string): ETypeRefToInstall => {
    if (ref.startsWith(internalNamePrefix)) {
        return { container, targetRef: ref.substring(internalNamePrefix.length), refKind: RefKind.internalPath }
    }
    if (ref.startsWith(ecoreDataTypeHrefPrefix)) {
        return { container, targetRef: ref.substring(ecoreDataTypeHrefPrefix.length), refKind: RefKind.ecoreStdlib }
    }
    const match = ref.match(/^ecore:EDataType [A-Za-z.]+?#\/\/(\w+)$/)
    if (match) {
        return { container, targetRef: "E" + match[1], refKind: RefKind.ecoreStdlib }
    }
    return { container, targetRef: ref, refKind: RefKind.internalId }
}


export const verbalizationOf = ({container, targetRef, refKind}: ETypeRefToInstall) =>
    `eType to install on ${container.id} -> (${RefKind[refKind]}) ${targetRef}`

