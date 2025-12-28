/*
 * language's metadata:
 *     name:    Ecore
 *     version: 1
 *     key:     Ecore
 *     id:      Ecore
 */


import {
    Classifier,
    Concept,
    Containment,
    EnumerationLiteral,
    Language,
    MultiRef,
    Property,
    Reference,
    SingleRef
} from "@lionweb/core";

import {
    LionWebId
} from "@lionweb/json";

import {
    ContainmentValueManager,
    DeltaReceiver,
    ILanguageBase,
    INamed,
    INodeBase,
    LionCore_builtinsBase,
    NodeBase,
    NodeBaseFactory,
    OptionalMultiContainmentValueManager,
    OptionalMultiReferenceValueManager,
    OptionalPropertyValueManager,
    OptionalSingleReferenceValueManager,
    Parentage,
    PropertyValueManager,
    ReferenceValueManager,
    RequiredPropertyValueManager
} from "@lionweb/class-core";


export class EcoreBase implements ILanguageBase {

    private readonly _language: Language = new Language("Ecore", "1", "Ecore", "Ecore");
    get language(): Language {
        this.ensureWiredUp();
        return this._language;
    }

    public readonly _EObject = new Concept(this._language, "EObject", "Ecore-EObject", "Ecore-EObject", false);
    get EObject(): Concept {
        this.ensureWiredUp();
        return this._EObject;
    }
    private readonly _EObject_idXmi = new Property(this._EObject, "idXmi", "Ecore-EObject-idXmi", "Ecore-EObject-idXmi").isOptional();
    get EObject_idXmi(): Property {
        this.ensureWiredUp();
        return this._EObject_idXmi;
    }

    public readonly _EModelElement = new Concept(this._language, "EModelElement", "Ecore-EModelElement", "Ecore-EModelElement", true);
    get EModelElement(): Concept {
        this.ensureWiredUp();
        return this._EModelElement;
    }
    private readonly _EModelElement_eAnnotations = new Containment(this._EModelElement, "eAnnotations", "Ecore-EModelElement-eAnnotations", "Ecore-EModelElement-eAnnotations").isOptional().isMultiple();
    get EModelElement_eAnnotations(): Containment {
        this.ensureWiredUp();
        return this._EModelElement_eAnnotations;
    }

    public readonly _ENamedElement = new Concept(this._language, "ENamedElement", "Ecore-ENamedElement", "Ecore-ENamedElement", true);
    get ENamedElement(): Concept {
        this.ensureWiredUp();
        return this._ENamedElement;
    }

    public readonly _EAnnotation = new Concept(this._language, "EAnnotation", "Ecore-EAnnotation", "Ecore-EAnnotation", false);
    get EAnnotation(): Concept {
        this.ensureWiredUp();
        return this._EAnnotation;
    }
    private readonly _EAnnotation_source = new Property(this._EAnnotation, "source", "Ecore-EAnnotation-source", "Ecore-EAnnotation-source");
    get EAnnotation_source(): Property {
        this.ensureWiredUp();
        return this._EAnnotation_source;
    }
    private readonly _EAnnotation_details = new Containment(this._EAnnotation, "details", "Ecore-EAnnotation-details", "Ecore-EAnnotation-details").isOptional().isMultiple();
    get EAnnotation_details(): Containment {
        this.ensureWiredUp();
        return this._EAnnotation_details;
    }

    public readonly _EPackage = new Concept(this._language, "EPackage", "Ecore-EPackage", "Ecore-EPackage", false);
    get EPackage(): Concept {
        this.ensureWiredUp();
        return this._EPackage;
    }
    private readonly _EPackage_nsURI = new Property(this._EPackage, "nsURI", "Ecore-EPackage-nsURI", "Ecore-EPackage-nsURI");
    get EPackage_nsURI(): Property {
        this.ensureWiredUp();
        return this._EPackage_nsURI;
    }
    private readonly _EPackage_nsPrefix = new Property(this._EPackage, "nsPrefix", "Ecore-EPackage-nsPrefix", "Ecore-EPackage-nsPrefix");
    get EPackage_nsPrefix(): Property {
        this.ensureWiredUp();
        return this._EPackage_nsPrefix;
    }
    private readonly _EPackage_eClassifiers = new Containment(this._EPackage, "eClassifiers", "Ecore-EPackage-eClassifiers", "Ecore-EPackage-eClassifiers").isOptional().isMultiple();
    get EPackage_eClassifiers(): Containment {
        this.ensureWiredUp();
        return this._EPackage_eClassifiers;
    }
    private readonly _EPackage_eSubPackages = new Containment(this._EPackage, "eSubPackages", "Ecore-EPackage-eSubPackages", "Ecore-EPackage-eSubPackages").isOptional().isMultiple();
    get EPackage_eSubPackages(): Containment {
        this.ensureWiredUp();
        return this._EPackage_eSubPackages;
    }

    public readonly _EClassifier = new Concept(this._language, "EClassifier", "Ecore-EClassifier", "Ecore-EClassifier", true);
    get EClassifier(): Concept {
        this.ensureWiredUp();
        return this._EClassifier;
    }

    public readonly _EEnumLiteral = new Concept(this._language, "EEnumLiteral", "Ecore-EEnumLiteral", "Ecore-EEnumLiteral", false);
    get EEnumLiteral(): Concept {
        this.ensureWiredUp();
        return this._EEnumLiteral;
    }
    private readonly _EEnumLiteral_value = new Property(this._EEnumLiteral, "value", "Ecore-EEnumLiteral-value", "Ecore-EEnumLiteral-value");
    get EEnumLiteral_value(): Property {
        this.ensureWiredUp();
        return this._EEnumLiteral_value;
    }

    public readonly _ETypedElement = new Concept(this._language, "ETypedElement", "Ecore-ETypedElement", "Ecore-ETypedElement", true);
    get ETypedElement(): Concept {
        this.ensureWiredUp();
        return this._ETypedElement;
    }
    private readonly _ETypedElement_lowerBound = new Property(this._ETypedElement, "lowerBound", "Ecore-ETypedElement-lowerBound", "Ecore-ETypedElement-lowerBound");
    get ETypedElement_lowerBound(): Property {
        this.ensureWiredUp();
        return this._ETypedElement_lowerBound;
    }
    private readonly _ETypedElement_upperBound = new Property(this._ETypedElement, "upperBound", "Ecore-ETypedElement-upperBound", "Ecore-ETypedElement-upperBound").isOptional();
    get ETypedElement_upperBound(): Property {
        this.ensureWiredUp();
        return this._ETypedElement_upperBound;
    }
    private readonly _ETypedElement_eType = new Reference(this._ETypedElement, "eType", "Ecore-ETypedElement-eType", "Ecore-ETypedElement-eType").isOptional();
    get ETypedElement_eType(): Reference {
        this.ensureWiredUp();
        return this._ETypedElement_eType;
    }

    public readonly _EClass = new Concept(this._language, "EClass", "Ecore-EClass", "Ecore-EClass", false);
    get EClass(): Concept {
        this.ensureWiredUp();
        return this._EClass;
    }
    private readonly _EClass_abstract = new Property(this._EClass, "abstract", "Ecore-EClass-abstract", "Ecore-EClass-abstract");
    get EClass_abstract(): Property {
        this.ensureWiredUp();
        return this._EClass_abstract;
    }
    private readonly _EClass_interface = new Property(this._EClass, "interface", "Ecore-EClass-interface", "Ecore-EClass-interface");
    get EClass_interface(): Property {
        this.ensureWiredUp();
        return this._EClass_interface;
    }
    private readonly _EClass_eStructuralFeatures = new Containment(this._EClass, "eStructuralFeatures", "Ecore-EClass-eStructuralFeatures", "Ecore-EClass-eStructuralFeatures").isOptional().isMultiple();
    get EClass_eStructuralFeatures(): Containment {
        this.ensureWiredUp();
        return this._EClass_eStructuralFeatures;
    }
    private readonly _EClass_eSuperTypes = new Reference(this._EClass, "eSuperTypes", "Ecore-EClass-eSuperTypes", "Ecore-EClass-eSuperTypes").isOptional().isMultiple();
    get EClass_eSuperTypes(): Reference {
        this.ensureWiredUp();
        return this._EClass_eSuperTypes;
    }

    public readonly _EDataType = new Concept(this._language, "EDataType", "Ecore-EDataType", "Ecore-EDataType", false);
    get EDataType(): Concept {
        this.ensureWiredUp();
        return this._EDataType;
    }

    public readonly _EStructuralFeature = new Concept(this._language, "EStructuralFeature", "Ecore-EStructuralFeature", "Ecore-EStructuralFeature", true);
    get EStructuralFeature(): Concept {
        this.ensureWiredUp();
        return this._EStructuralFeature;
    }

    public readonly _EEnum = new Concept(this._language, "EEnum", "Ecore-EEnum", "Ecore-EEnum", false);
    get EEnum(): Concept {
        this.ensureWiredUp();
        return this._EEnum;
    }
    private readonly _EEnum_eLiterals = new Containment(this._EEnum, "eLiterals", "Ecore-EEnum-eLiterals", "Ecore-EEnum-eLiterals").isOptional().isMultiple();
    get EEnum_eLiterals(): Containment {
        this.ensureWiredUp();
        return this._EEnum_eLiterals;
    }

    public readonly _EAttribute = new Concept(this._language, "EAttribute", "Ecore-EAttribute", "Ecore-EAttribute", false);
    get EAttribute(): Concept {
        this.ensureWiredUp();
        return this._EAttribute;
    }

    public readonly _EReference = new Concept(this._language, "EReference", "Ecore-EReference", "Ecore-EReference", false);
    get EReference(): Concept {
        this.ensureWiredUp();
        return this._EReference;
    }
    private readonly _EReference_containmentXsi = new Property(this._EReference, "containmentXsi", "Ecore-EReference-containmentXsi", "Ecore-EReference-containmentXsi");
    get EReference_containmentXsi(): Property {
        this.ensureWiredUp();
        return this._EReference_containmentXsi;
    }

    public readonly _EStringToStringMapEntry = new Concept(this._language, "EStringToStringMapEntry", "Ecore-EStringToStringMapEntry", "Ecore-EStringToStringMapEntry", false);
    get EStringToStringMapEntry(): Concept {
        this.ensureWiredUp();
        return this._EStringToStringMapEntry;
    }
    private readonly _EStringToStringMapEntry_key = new Property(this._EStringToStringMapEntry, "key", "Ecore-EStringToStringMapEntry-key", "Ecore-EStringToStringMapEntry-key");
    get EStringToStringMapEntry_key(): Property {
        this.ensureWiredUp();
        return this._EStringToStringMapEntry_key;
    }
    private readonly _EStringToStringMapEntry_value = new Property(this._EStringToStringMapEntry, "value", "Ecore-EStringToStringMapEntry-value", "Ecore-EStringToStringMapEntry-value");
    get EStringToStringMapEntry_value(): Property {
        this.ensureWiredUp();
        return this._EStringToStringMapEntry_value;
    }

    private _wiredUp: boolean = false;
    private ensureWiredUp() {
        if (this._wiredUp) {
            return;
        }
        this._language.havingEntities(this._EObject, this._EModelElement, this._ENamedElement, this._EAnnotation, this._EPackage, this._EClassifier, this._EEnumLiteral, this._ETypedElement, this._EClass, this._EDataType, this._EStructuralFeature, this._EEnum, this._EAttribute, this._EReference, this._EStringToStringMapEntry);
        this._EObject.havingFeatures(this._EObject_idXmi);
        this._EObject_idXmi.ofType(LionCore_builtinsBase.INSTANCE._String).isOptional();
        this._EModelElement.extends = this._EObject;
        this._EModelElement.havingFeatures(this._EModelElement_eAnnotations);
        this._EModelElement_eAnnotations.ofType(this._EAnnotation);
        this._ENamedElement.extends = this._EModelElement;
        this._ENamedElement.implementing(LionCore_builtinsBase.INSTANCE._INamed);
        this._EAnnotation.extends = this._EModelElement;
        this._EAnnotation.havingFeatures(this._EAnnotation_source, this._EAnnotation_details);
        this._EAnnotation_source.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._EAnnotation_details.ofType(this._EStringToStringMapEntry);
        this._EPackage.extends = this._ENamedElement;
        this._EPackage.havingFeatures(this._EPackage_nsURI, this._EPackage_nsPrefix, this._EPackage_eClassifiers, this._EPackage_eSubPackages);
        this._EPackage_nsURI.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._EPackage_nsPrefix.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._EPackage_eClassifiers.ofType(this._EClassifier);
        this._EPackage_eSubPackages.ofType(this._EPackage);
        this._EClassifier.extends = this._ENamedElement;
        this._EEnumLiteral.extends = this._ENamedElement;
        this._EEnumLiteral.havingFeatures(this._EEnumLiteral_value);
        this._EEnumLiteral_value.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._ETypedElement.extends = this._ENamedElement;
        this._ETypedElement.havingFeatures(this._ETypedElement_lowerBound, this._ETypedElement_upperBound, this._ETypedElement_eType);
        this._ETypedElement_lowerBound.ofType(LionCore_builtinsBase.INSTANCE._Integer);
        this._ETypedElement_upperBound.ofType(LionCore_builtinsBase.INSTANCE._Integer).isOptional();
        this._ETypedElement_eType.ofType(this._EClassifier);
        this._EClass.extends = this._EClassifier;
        this._EClass.havingFeatures(this._EClass_abstract, this._EClass_interface, this._EClass_eStructuralFeatures, this._EClass_eSuperTypes);
        this._EClass_abstract.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._EClass_interface.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._EClass_eStructuralFeatures.ofType(this._EStructuralFeature);
        this._EClass_eSuperTypes.ofType(this._EClass);
        this._EDataType.extends = this._EClassifier;
        this._EStructuralFeature.extends = this._ETypedElement;
        this._EEnum.extends = this._EDataType;
        this._EEnum.havingFeatures(this._EEnum_eLiterals);
        this._EEnum_eLiterals.ofType(this._EEnumLiteral);
        this._EAttribute.extends = this._EStructuralFeature;
        this._EReference.extends = this._EStructuralFeature;
        this._EReference.havingFeatures(this._EReference_containmentXsi);
        this._EReference_containmentXsi.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._EStringToStringMapEntry.havingFeatures(this._EStringToStringMapEntry_key, this._EStringToStringMapEntry_value);
        this._EStringToStringMapEntry_key.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._EStringToStringMapEntry_value.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._wiredUp = true;
    }

    factory(receiveDelta?: DeltaReceiver): NodeBaseFactory {
        return (classifier: Classifier, id: LionWebId) => {
            switch (classifier.key) {
                case this._EObject.key: return EObject.create(id, receiveDelta);
                case this._EAnnotation.key: return EAnnotation.create(id, receiveDelta);
                case this._EPackage.key: return EPackage.create(id, receiveDelta);
                case this._EEnumLiteral.key: return EEnumLiteral.create(id, receiveDelta);
                case this._EClass.key: return EClass.create(id, receiveDelta);
                case this._EDataType.key: return EDataType.create(id, receiveDelta);
                case this._EEnum.key: return EEnum.create(id, receiveDelta);
                case this._EAttribute.key: return EAttribute.create(id, receiveDelta);
                case this._EReference.key: return EReference.create(id, receiveDelta);
                case this._EStringToStringMapEntry.key: return EStringToStringMapEntry.create(id, receiveDelta);
                default: {
                    const {language} = classifier;
                    throw new Error(`can't instantiate ${classifier.name} (key=${classifier.key}): classifier is not known in language ${language.name} (key=${language.key}, version=${language.version})`);
                }
            }
        }
    }

    enumLiteralFrom<EnumType>(enumerationLiteral: EnumerationLiteral): EnumType {
        const {enumeration} = enumerationLiteral;
        const {language} = enumeration;
        throw new Error(`enumeration with key ${enumeration.key} is not known in language ${language.name} (key=${language.key}, version=${language.version})`);
    }

    public static readonly INSTANCE = new EcoreBase();
}


export class EObject extends NodeBase {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EObject {
        return new EObject(EcoreBase.INSTANCE.EObject, id, receiveDelta, parentInfo);
    }

    private readonly _idXmi: OptionalPropertyValueManager<string>;
    get idXmi(): string | undefined {
        return this._idXmi.get();
    }
    set idXmi(newValue: string | undefined) {
        this._idXmi.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._idXmi = new OptionalPropertyValueManager<string>(EcoreBase.INSTANCE.EObject_idXmi, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === EcoreBase.INSTANCE.EObject_idXmi.key) {
            return this._idXmi;
        }
        return super.getPropertyValueManager(property);
    }
}

export abstract class EModelElement extends EObject {

    private readonly _eAnnotations: OptionalMultiContainmentValueManager<EAnnotation>;
    get eAnnotations(): EAnnotation[] {
        return this._eAnnotations.get();
    }
    addEAnnotations(newValue: EAnnotation) {
        this._eAnnotations.add(newValue);
    }
    removeEAnnotations(valueToRemove: EAnnotation) {
        this._eAnnotations.remove(valueToRemove);
    }
    addEAnnotationsAtIndex(newValue: EAnnotation, index: number) {
        this._eAnnotations.insertAtIndex(newValue, index);
    }
    moveEAnnotations(oldIndex: number, newIndex: number) {
        this._eAnnotations.move(oldIndex, newIndex);
    }
    replaceEAnnotationsAtIndex(movedChild: EAnnotation, newIndex: number) {
        this._eAnnotations.replaceAtIndex(movedChild, newIndex);
    }

    protected constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._eAnnotations = new OptionalMultiContainmentValueManager<EAnnotation>(EcoreBase.INSTANCE.EModelElement_eAnnotations, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === EcoreBase.INSTANCE.EModelElement_eAnnotations.key) {
            return this._eAnnotations;
        }
        return super.getContainmentValueManager(containment);
    }
}

export abstract class ENamedElement extends EModelElement implements INamed {

    private readonly _name: RequiredPropertyValueManager<string>;
    get name(): string {
        return this._name.get();
    }
    set name(newValue: string) {
        this._name.set(newValue);
    }

    protected constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._name = new RequiredPropertyValueManager<string>(LionCore_builtinsBase.INSTANCE.INamed_name, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === LionCore_builtinsBase.INSTANCE.INamed_name.key) {
            return this._name;
        }
        return super.getPropertyValueManager(property);
    }
}

export class EAnnotation extends EModelElement {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EAnnotation {
        return new EAnnotation(EcoreBase.INSTANCE.EAnnotation, id, receiveDelta, parentInfo);
    }

    private readonly _source: RequiredPropertyValueManager<string>;
    get source(): string {
        return this._source.get();
    }
    set source(newValue: string) {
        this._source.set(newValue);
    }

    private readonly _details: OptionalMultiContainmentValueManager<EStringToStringMapEntry>;
    get details(): EStringToStringMapEntry[] {
        return this._details.get();
    }
    addDetails(newValue: EStringToStringMapEntry) {
        this._details.add(newValue);
    }
    removeDetails(valueToRemove: EStringToStringMapEntry) {
        this._details.remove(valueToRemove);
    }
    addDetailsAtIndex(newValue: EStringToStringMapEntry, index: number) {
        this._details.insertAtIndex(newValue, index);
    }
    moveDetails(oldIndex: number, newIndex: number) {
        this._details.move(oldIndex, newIndex);
    }
    replaceDetailsAtIndex(movedChild: EStringToStringMapEntry, newIndex: number) {
        this._details.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._source = new RequiredPropertyValueManager<string>(EcoreBase.INSTANCE.EAnnotation_source, this);
        this._details = new OptionalMultiContainmentValueManager<EStringToStringMapEntry>(EcoreBase.INSTANCE.EAnnotation_details, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === EcoreBase.INSTANCE.EAnnotation_source.key) {
            return this._source;
        }
        return super.getPropertyValueManager(property);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === EcoreBase.INSTANCE.EAnnotation_details.key) {
            return this._details;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class EPackage extends ENamedElement {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EPackage {
        return new EPackage(EcoreBase.INSTANCE.EPackage, id, receiveDelta, parentInfo);
    }

    private readonly _nsURI: RequiredPropertyValueManager<string>;
    get nsURI(): string {
        return this._nsURI.get();
    }
    set nsURI(newValue: string) {
        this._nsURI.set(newValue);
    }

    private readonly _nsPrefix: RequiredPropertyValueManager<string>;
    get nsPrefix(): string {
        return this._nsPrefix.get();
    }
    set nsPrefix(newValue: string) {
        this._nsPrefix.set(newValue);
    }

    private readonly _eClassifiers: OptionalMultiContainmentValueManager<EClassifier>;
    get eClassifiers(): EClassifier[] {
        return this._eClassifiers.get();
    }
    addEClassifiers(newValue: EClassifier) {
        this._eClassifiers.add(newValue);
    }
    removeEClassifiers(valueToRemove: EClassifier) {
        this._eClassifiers.remove(valueToRemove);
    }
    addEClassifiersAtIndex(newValue: EClassifier, index: number) {
        this._eClassifiers.insertAtIndex(newValue, index);
    }
    moveEClassifiers(oldIndex: number, newIndex: number) {
        this._eClassifiers.move(oldIndex, newIndex);
    }
    replaceEClassifiersAtIndex(movedChild: EClassifier, newIndex: number) {
        this._eClassifiers.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eSubPackages: OptionalMultiContainmentValueManager<EPackage>;
    get eSubPackages(): EPackage[] {
        return this._eSubPackages.get();
    }
    addESubPackages(newValue: EPackage) {
        this._eSubPackages.add(newValue);
    }
    removeESubPackages(valueToRemove: EPackage) {
        this._eSubPackages.remove(valueToRemove);
    }
    addESubPackagesAtIndex(newValue: EPackage, index: number) {
        this._eSubPackages.insertAtIndex(newValue, index);
    }
    moveESubPackages(oldIndex: number, newIndex: number) {
        this._eSubPackages.move(oldIndex, newIndex);
    }
    replaceESubPackagesAtIndex(movedChild: EPackage, newIndex: number) {
        this._eSubPackages.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._nsURI = new RequiredPropertyValueManager<string>(EcoreBase.INSTANCE.EPackage_nsURI, this);
        this._nsPrefix = new RequiredPropertyValueManager<string>(EcoreBase.INSTANCE.EPackage_nsPrefix, this);
        this._eClassifiers = new OptionalMultiContainmentValueManager<EClassifier>(EcoreBase.INSTANCE.EPackage_eClassifiers, this);
        this._eSubPackages = new OptionalMultiContainmentValueManager<EPackage>(EcoreBase.INSTANCE.EPackage_eSubPackages, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case EcoreBase.INSTANCE.EPackage_nsURI.key: return this._nsURI;
            case EcoreBase.INSTANCE.EPackage_nsPrefix.key: return this._nsPrefix;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case EcoreBase.INSTANCE.EPackage_eClassifiers.key: return this._eClassifiers;
            case EcoreBase.INSTANCE.EPackage_eSubPackages.key: return this._eSubPackages;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export abstract class EClassifier extends ENamedElement {
}

export class EEnumLiteral extends ENamedElement {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EEnumLiteral {
        return new EEnumLiteral(EcoreBase.INSTANCE.EEnumLiteral, id, receiveDelta, parentInfo);
    }

    private readonly _value: RequiredPropertyValueManager<string>;
    get value(): string {
        return this._value.get();
    }
    set value(newValue: string) {
        this._value.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._value = new RequiredPropertyValueManager<string>(EcoreBase.INSTANCE.EEnumLiteral_value, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === EcoreBase.INSTANCE.EEnumLiteral_value.key) {
            return this._value;
        }
        return super.getPropertyValueManager(property);
    }
}

export abstract class ETypedElement extends ENamedElement {

    private readonly _lowerBound: RequiredPropertyValueManager<number>;
    get lowerBound(): number {
        return this._lowerBound.get();
    }
    set lowerBound(newValue: number) {
        this._lowerBound.set(newValue);
    }

    private readonly _upperBound: OptionalPropertyValueManager<number>;
    get upperBound(): number | undefined {
        return this._upperBound.get();
    }
    set upperBound(newValue: number | undefined) {
        this._upperBound.set(newValue);
    }

    private readonly _eType: OptionalSingleReferenceValueManager<EClassifier>;
    get eType(): SingleRef<EClassifier> | undefined {
        return this._eType.get();
    }
    set eType(newValue: SingleRef<EClassifier> | undefined) {
        this._eType.set(newValue);
    }

    protected constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._lowerBound = new RequiredPropertyValueManager<number>(EcoreBase.INSTANCE.ETypedElement_lowerBound, this);
        this._upperBound = new OptionalPropertyValueManager<number>(EcoreBase.INSTANCE.ETypedElement_upperBound, this);
        this._eType = new OptionalSingleReferenceValueManager<EClassifier>(EcoreBase.INSTANCE.ETypedElement_eType, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case EcoreBase.INSTANCE.ETypedElement_lowerBound.key: return this._lowerBound;
            case EcoreBase.INSTANCE.ETypedElement_upperBound.key: return this._upperBound;
            default: return super.getPropertyValueManager(property);
        }
    }

    getReferenceValueManager(reference: Reference): ReferenceValueManager<INodeBase> {
        if (reference.key === EcoreBase.INSTANCE.ETypedElement_eType.key) {
            return this._eType;
        }
        return super.getReferenceValueManager(reference);
    }
}

export class EClass extends EClassifier {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EClass {
        return new EClass(EcoreBase.INSTANCE.EClass, id, receiveDelta, parentInfo);
    }

    private readonly _abstract: RequiredPropertyValueManager<boolean>;
    get abstract(): boolean {
        return this._abstract.get();
    }
    set abstract(newValue: boolean) {
        this._abstract.set(newValue);
    }

    private readonly _interface: RequiredPropertyValueManager<boolean>;
    get interface(): boolean {
        return this._interface.get();
    }
    set interface(newValue: boolean) {
        this._interface.set(newValue);
    }

    private readonly _eStructuralFeatures: OptionalMultiContainmentValueManager<EStructuralFeature>;
    get eStructuralFeatures(): EStructuralFeature[] {
        return this._eStructuralFeatures.get();
    }
    addEStructuralFeatures(newValue: EStructuralFeature) {
        this._eStructuralFeatures.add(newValue);
    }
    removeEStructuralFeatures(valueToRemove: EStructuralFeature) {
        this._eStructuralFeatures.remove(valueToRemove);
    }
    addEStructuralFeaturesAtIndex(newValue: EStructuralFeature, index: number) {
        this._eStructuralFeatures.insertAtIndex(newValue, index);
    }
    moveEStructuralFeatures(oldIndex: number, newIndex: number) {
        this._eStructuralFeatures.move(oldIndex, newIndex);
    }
    replaceEStructuralFeaturesAtIndex(movedChild: EStructuralFeature, newIndex: number) {
        this._eStructuralFeatures.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eSuperTypes: OptionalMultiReferenceValueManager<EClass>;
    get eSuperTypes(): MultiRef<EClass> {
        return this._eSuperTypes.get();
    }
    addESuperTypes(newValue: EClass) {
        this._eSuperTypes.add(newValue);
    }
    removeESuperTypes(valueToRemove: EClass) {
        this._eSuperTypes.remove(valueToRemove);
    }
    addESuperTypesAtIndex(newValue: EClass, index: number) {
        this._eSuperTypes.insertAtIndex(newValue, index);
    }
    moveESuperTypes(oldIndex: number, newIndex: number) {
        this._eSuperTypes.move(oldIndex, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._abstract = new RequiredPropertyValueManager<boolean>(EcoreBase.INSTANCE.EClass_abstract, this);
        this._interface = new RequiredPropertyValueManager<boolean>(EcoreBase.INSTANCE.EClass_interface, this);
        this._eStructuralFeatures = new OptionalMultiContainmentValueManager<EStructuralFeature>(EcoreBase.INSTANCE.EClass_eStructuralFeatures, this);
        this._eSuperTypes = new OptionalMultiReferenceValueManager<EClass>(EcoreBase.INSTANCE.EClass_eSuperTypes, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case EcoreBase.INSTANCE.EClass_abstract.key: return this._abstract;
            case EcoreBase.INSTANCE.EClass_interface.key: return this._interface;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === EcoreBase.INSTANCE.EClass_eStructuralFeatures.key) {
            return this._eStructuralFeatures;
        }
        return super.getContainmentValueManager(containment);
    }

    getReferenceValueManager(reference: Reference): ReferenceValueManager<INodeBase> {
        if (reference.key === EcoreBase.INSTANCE.EClass_eSuperTypes.key) {
            return this._eSuperTypes;
        }
        return super.getReferenceValueManager(reference);
    }
}

export class EDataType extends EClassifier {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EDataType {
        return new EDataType(EcoreBase.INSTANCE.EDataType, id, receiveDelta, parentInfo);
    }
}

export abstract class EStructuralFeature extends ETypedElement {
}

export class EEnum extends EDataType {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EEnum {
        return new EEnum(EcoreBase.INSTANCE.EEnum, id, receiveDelta, parentInfo);
    }

    private readonly _eLiterals: OptionalMultiContainmentValueManager<EEnumLiteral>;
    get eLiterals(): EEnumLiteral[] {
        return this._eLiterals.get();
    }
    addELiterals(newValue: EEnumLiteral) {
        this._eLiterals.add(newValue);
    }
    removeELiterals(valueToRemove: EEnumLiteral) {
        this._eLiterals.remove(valueToRemove);
    }
    addELiteralsAtIndex(newValue: EEnumLiteral, index: number) {
        this._eLiterals.insertAtIndex(newValue, index);
    }
    moveELiterals(oldIndex: number, newIndex: number) {
        this._eLiterals.move(oldIndex, newIndex);
    }
    replaceELiteralsAtIndex(movedChild: EEnumLiteral, newIndex: number) {
        this._eLiterals.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._eLiterals = new OptionalMultiContainmentValueManager<EEnumLiteral>(EcoreBase.INSTANCE.EEnum_eLiterals, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === EcoreBase.INSTANCE.EEnum_eLiterals.key) {
            return this._eLiterals;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class EAttribute extends EStructuralFeature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EAttribute {
        return new EAttribute(EcoreBase.INSTANCE.EAttribute, id, receiveDelta, parentInfo);
    }
}

export class EReference extends EStructuralFeature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EReference {
        return new EReference(EcoreBase.INSTANCE.EReference, id, receiveDelta, parentInfo);
    }

    private readonly _containmentXsi: RequiredPropertyValueManager<boolean>;
    get containmentXsi(): boolean {
        return this._containmentXsi.get();
    }
    set containmentXsi(newValue: boolean) {
        this._containmentXsi.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._containmentXsi = new RequiredPropertyValueManager<boolean>(EcoreBase.INSTANCE.EReference_containmentXsi, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === EcoreBase.INSTANCE.EReference_containmentXsi.key) {
            return this._containmentXsi;
        }
        return super.getPropertyValueManager(property);
    }
}

export class EStringToStringMapEntry extends NodeBase {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EStringToStringMapEntry {
        return new EStringToStringMapEntry(EcoreBase.INSTANCE.EStringToStringMapEntry, id, receiveDelta, parentInfo);
    }

    private readonly _key: RequiredPropertyValueManager<string>;
    get key(): string {
        return this._key.get();
    }
    set key(newValue: string) {
        this._key.set(newValue);
    }

    private readonly _value: RequiredPropertyValueManager<string>;
    get value(): string {
        return this._value.get();
    }
    set value(newValue: string) {
        this._value.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._key = new RequiredPropertyValueManager<string>(EcoreBase.INSTANCE.EStringToStringMapEntry_key, this);
        this._value = new RequiredPropertyValueManager<string>(EcoreBase.INSTANCE.EStringToStringMapEntry_value, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case EcoreBase.INSTANCE.EStringToStringMapEntry_key.key: return this._key;
            case EcoreBase.INSTANCE.EStringToStringMapEntry_value.key: return this._value;
            default: return super.getPropertyValueManager(property);
        }
    }
}

