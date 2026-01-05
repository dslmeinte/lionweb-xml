// Representation of the contents of an XMI file parsed by xml2js as TypeScript types.


export type HasOptionalXmiId = {
    "xmi:id"?: string
}

export type EcoreObjectFromXml = {
    $: HasOptionalXmiId
    eAnnotations?: EAnnotationFromXml[]
}


export type EStringToStringMapEntryFromXml = {
    $: {
        key: string
        value: string
    } & HasOptionalXmiId
}

export type EAnnotationFromXml = EcoreObjectFromXml & {
    $: {
        source: string
    }
    details?: EStringToStringMapEntryFromXml[]
}


export type HasName = {
    name: string
}

export type EClassFromXml = EcoreObjectFromXml & {
    $: {
        "xsi:type": "ecore:EClass"
        "abstract"?: string
        "interface"?: string
        eSuperTypes?: string    // space-separated list of references to EClass-es
    } & HasName
    eStructuralFeatures?: EStructuralFeatureFromXml[]
}

export type EDataTypeFromXml = EcoreObjectFromXml & {
    $: {
        "xsi:type": "ecore:EDataType"
    } & HasName
}

export type EEnumFromXml = EcoreObjectFromXml & {
    $: {
        "xsi:type": "ecore:EEnum"
    } & HasName
    eLiterals?: EEnumLiteralFromXml[]
}

export type EClassifierFromXml =
    | EClassFromXml
    | EDataTypeFromXml
    | EEnumFromXml


export type EEnumLiteralFromXml = EcoreObjectFromXml & {
    $: {
        literal: string
    } & HasName
}


export type ExternalDataTypeRefFromXml = {
    $: {
        href: string
    }
}

export type EAttributeFromXml = {
    $: {
        "xsi:type": "ecore:EAttribute"
        lowerBound?: string
        upperBound?: string
        eType?: string   // === internal ID of EDataType
    } & HasOptionalXmiId & HasName
    eType?: ExternalDataTypeRefFromXml[]    // either [empty and $.eType] or [of length 1]
}

export type EReferenceFromXml = {
    $: {
        "xsi:type": "ecore:EReference"
        lowerBound?: string
        upperBound: string
        containment: string
        eType?: string      // === internal path to EClassifier
    } & HasOptionalXmiId & HasName
}

export type EStructuralFeatureFromXml =
    | EAttributeFromXml
    | EReferenceFromXml


export type EcoreFromXml = {
    "ecore:EPackage": {
        $: {
            "xmi:version": "2.0"
            "xmlns:xmi": "http://www.omg.org/XMI"
            "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance"
            "xmlns:ecore": "http://www.eclipse.org/emf/2002/Ecore"
            name: string
            nsURI: string
            nsPrefix: string
        } & HasOptionalXmiId
        eAnnotations?: EAnnotationFromXml[]
        eClassifiers?: EClassifierFromXml[]
    }
}

