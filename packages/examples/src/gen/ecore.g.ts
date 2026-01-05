/*
 * language's metadata:
 *     name:    ecore
 *     version: 1
 *     key:     ecore
 *     id:      ecore
 */


import {
    Classifier,
    Concept,
    EnumerationLiteral,
    Language
} from "@lionweb/core";

import {
    LionWebId
} from "@lionweb/json";

import {
    DeltaReceiver,
    ILanguageBase,
    NodeBase,
    NodeBaseFactory,
    Parentage
} from "@lionweb/class-core";


export class ecoreBase implements ILanguageBase {

    private readonly _language: Language = new Language("ecore", "1", "ecore", "ecore");
    get language(): Language {
        this.ensureWiredUp();
        return this._language;
    }

    public readonly _EAnnotation = new Concept(this._language, "EAnnotation", "ecore-EAnnotation", "ecore-EAnnotation", false);
    get EAnnotation(): Concept {
        this.ensureWiredUp();
        return this._EAnnotation;
    }

    public readonly _EAttribute = new Concept(this._language, "EAttribute", "ecore-EAttribute", "ecore-EAttribute", false);
    get EAttribute(): Concept {
        this.ensureWiredUp();
        return this._EAttribute;
    }

    public readonly _EClass = new Concept(this._language, "EClass", "ecore-EClass", "ecore-EClass", false);
    get EClass(): Concept {
        this.ensureWiredUp();
        return this._EClass;
    }

    public readonly _EClassifier = new Concept(this._language, "EClassifier", "ecore-EClassifier", "ecore-EClassifier", true);
    get EClassifier(): Concept {
        this.ensureWiredUp();
        return this._EClassifier;
    }

    public readonly _EDataType = new Concept(this._language, "EDataType", "ecore-EDataType", "ecore-EDataType", false);
    get EDataType(): Concept {
        this.ensureWiredUp();
        return this._EDataType;
    }

    public readonly _EEnum = new Concept(this._language, "EEnum", "ecore-EEnum", "ecore-EEnum", false);
    get EEnum(): Concept {
        this.ensureWiredUp();
        return this._EEnum;
    }

    public readonly _EEnumLiteral = new Concept(this._language, "EEnumLiteral", "ecore-EEnumLiteral", "ecore-EEnumLiteral", false);
    get EEnumLiteral(): Concept {
        this.ensureWiredUp();
        return this._EEnumLiteral;
    }

    public readonly _EFactory = new Concept(this._language, "EFactory", "ecore-EFactory", "ecore-EFactory", false);
    get EFactory(): Concept {
        this.ensureWiredUp();
        return this._EFactory;
    }

    public readonly _EGenericType = new Concept(this._language, "EGenericType", "ecore-EGenericType", "ecore-EGenericType", false);
    get EGenericType(): Concept {
        this.ensureWiredUp();
        return this._EGenericType;
    }

    public readonly _EModelElement = new Concept(this._language, "EModelElement", "ecore-EModelElement", "ecore-EModelElement", true);
    get EModelElement(): Concept {
        this.ensureWiredUp();
        return this._EModelElement;
    }

    public readonly _ENamedElement = new Concept(this._language, "ENamedElement", "ecore-ENamedElement", "ecore-ENamedElement", true);
    get ENamedElement(): Concept {
        this.ensureWiredUp();
        return this._ENamedElement;
    }

    public readonly _EObject = new Concept(this._language, "EObject", "ecore-EObject", "ecore-EObject", false);
    get EObject(): Concept {
        this.ensureWiredUp();
        return this._EObject;
    }

    public readonly _EOperation = new Concept(this._language, "EOperation", "ecore-EOperation", "ecore-EOperation", false);
    get EOperation(): Concept {
        this.ensureWiredUp();
        return this._EOperation;
    }

    public readonly _EPackage = new Concept(this._language, "EPackage", "ecore-EPackage", "ecore-EPackage", false);
    get EPackage(): Concept {
        this.ensureWiredUp();
        return this._EPackage;
    }

    public readonly _EParameter = new Concept(this._language, "EParameter", "ecore-EParameter", "ecore-EParameter", false);
    get EParameter(): Concept {
        this.ensureWiredUp();
        return this._EParameter;
    }

    public readonly _EReference = new Concept(this._language, "EReference", "ecore-EReference", "ecore-EReference", false);
    get EReference(): Concept {
        this.ensureWiredUp();
        return this._EReference;
    }

    public readonly _EStringToStringMapEntry = new Concept(this._language, "EStringToStringMapEntry", "ecore-EStringToStringMapEntry", "ecore-EStringToStringMapEntry", false);
    get EStringToStringMapEntry(): Concept {
        this.ensureWiredUp();
        return this._EStringToStringMapEntry;
    }

    public readonly _EStructuralFeature = new Concept(this._language, "EStructuralFeature", "ecore-EStructuralFeature", "ecore-EStructuralFeature", true);
    get EStructuralFeature(): Concept {
        this.ensureWiredUp();
        return this._EStructuralFeature;
    }

    public readonly _ETypeParameter = new Concept(this._language, "ETypeParameter", "ecore-ETypeParameter", "ecore-ETypeParameter", false);
    get ETypeParameter(): Concept {
        this.ensureWiredUp();
        return this._ETypeParameter;
    }

    public readonly _ETypedElement = new Concept(this._language, "ETypedElement", "ecore-ETypedElement", "ecore-ETypedElement", true);
    get ETypedElement(): Concept {
        this.ensureWiredUp();
        return this._ETypedElement;
    }

    private _wiredUp: boolean = false;
    private ensureWiredUp() {
        if (this._wiredUp) {
            return;
        }
        this._language.havingEntities(this._EAnnotation, this._EAttribute, this._EClass, this._EClassifier, this._EDataType, this._EEnum, this._EEnumLiteral, this._EFactory, this._EGenericType, this._EModelElement, this._ENamedElement, this._EObject, this._EOperation, this._EPackage, this._EParameter, this._EReference, this._EStringToStringMapEntry, this._EStructuralFeature, this._ETypeParameter, this._ETypedElement);
        this._EAnnotation.extends = this._EModelElement;
        this._EAttribute.extends = this._EStructuralFeature;
        this._EClass.extends = this._EClassifier;
        this._EClassifier.extends = this._ENamedElement;
        this._EDataType.extends = this._EClassifier;
        this._EEnum.extends = this._EDataType;
        this._EEnumLiteral.extends = this._ENamedElement;
        this._EFactory.extends = this._EModelElement;
        this._ENamedElement.extends = this._EModelElement;
        this._EOperation.extends = this._ETypedElement;
        this._EPackage.extends = this._ENamedElement;
        this._EParameter.extends = this._ETypedElement;
        this._EReference.extends = this._EStructuralFeature;
        this._EStructuralFeature.extends = this._ETypedElement;
        this._ETypeParameter.extends = this._ENamedElement;
        this._ETypedElement.extends = this._ENamedElement;
        this._wiredUp = true;
    }

    factory(receiveDelta?: DeltaReceiver): NodeBaseFactory {
        return (classifier: Classifier, id: LionWebId) => {
            switch (classifier.key) {
                case this._EAnnotation.key: return EAnnotation.create(id, receiveDelta);
                case this._EAttribute.key: return EAttribute.create(id, receiveDelta);
                case this._EClass.key: return EClass.create(id, receiveDelta);
                case this._EDataType.key: return EDataType.create(id, receiveDelta);
                case this._EEnum.key: return EEnum.create(id, receiveDelta);
                case this._EEnumLiteral.key: return EEnumLiteral.create(id, receiveDelta);
                case this._EFactory.key: return EFactory.create(id, receiveDelta);
                case this._EGenericType.key: return EGenericType.create(id, receiveDelta);
                case this._EObject.key: return EObject.create(id, receiveDelta);
                case this._EOperation.key: return EOperation.create(id, receiveDelta);
                case this._EPackage.key: return EPackage.create(id, receiveDelta);
                case this._EParameter.key: return EParameter.create(id, receiveDelta);
                case this._EReference.key: return EReference.create(id, receiveDelta);
                case this._EStringToStringMapEntry.key: return EStringToStringMapEntry.create(id, receiveDelta);
                case this._ETypeParameter.key: return ETypeParameter.create(id, receiveDelta);
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

    public static readonly INSTANCE = new ecoreBase();
}


export abstract class EModelElement extends NodeBase {
}

export class EAnnotation extends EModelElement {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EAnnotation {
        return new EAnnotation(ecoreBase.INSTANCE.EAnnotation, id, receiveDelta, parentInfo);
    }
}

export abstract class ENamedElement extends EModelElement {
}

export abstract class ETypedElement extends ENamedElement {
}

export abstract class EStructuralFeature extends ETypedElement {
}

export class EAttribute extends EStructuralFeature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EAttribute {
        return new EAttribute(ecoreBase.INSTANCE.EAttribute, id, receiveDelta, parentInfo);
    }
}

export abstract class EClassifier extends ENamedElement {
}

export class EClass extends EClassifier {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EClass {
        return new EClass(ecoreBase.INSTANCE.EClass, id, receiveDelta, parentInfo);
    }
}

export class EDataType extends EClassifier {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EDataType {
        return new EDataType(ecoreBase.INSTANCE.EDataType, id, receiveDelta, parentInfo);
    }
}

export class EEnum extends EDataType {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EEnum {
        return new EEnum(ecoreBase.INSTANCE.EEnum, id, receiveDelta, parentInfo);
    }
}

export class EEnumLiteral extends ENamedElement {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EEnumLiteral {
        return new EEnumLiteral(ecoreBase.INSTANCE.EEnumLiteral, id, receiveDelta, parentInfo);
    }
}

export class EFactory extends EModelElement {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EFactory {
        return new EFactory(ecoreBase.INSTANCE.EFactory, id, receiveDelta, parentInfo);
    }
}

export class EGenericType extends NodeBase {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EGenericType {
        return new EGenericType(ecoreBase.INSTANCE.EGenericType, id, receiveDelta, parentInfo);
    }
}

export class EObject extends NodeBase {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EObject {
        return new EObject(ecoreBase.INSTANCE.EObject, id, receiveDelta, parentInfo);
    }
}

export class EOperation extends ETypedElement {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EOperation {
        return new EOperation(ecoreBase.INSTANCE.EOperation, id, receiveDelta, parentInfo);
    }
}

export class EPackage extends ENamedElement {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EPackage {
        return new EPackage(ecoreBase.INSTANCE.EPackage, id, receiveDelta, parentInfo);
    }
}

export class EParameter extends ETypedElement {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EParameter {
        return new EParameter(ecoreBase.INSTANCE.EParameter, id, receiveDelta, parentInfo);
    }
}

export class EReference extends EStructuralFeature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EReference {
        return new EReference(ecoreBase.INSTANCE.EReference, id, receiveDelta, parentInfo);
    }
}

export class EStringToStringMapEntry extends NodeBase {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EStringToStringMapEntry {
        return new EStringToStringMapEntry(ecoreBase.INSTANCE.EStringToStringMapEntry, id, receiveDelta, parentInfo);
    }
}

export class ETypeParameter extends ENamedElement {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ETypeParameter {
        return new ETypeParameter(ecoreBase.INSTANCE.ETypeParameter, id, receiveDelta, parentInfo);
    }
}

