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
    Containment,
    EnumerationLiteral,
    Language,
    Property
} from "@lionweb/core";

import {
    LionWebId
} from "@lionweb/json";

import {
    ContainmentValueManager,
    DeltaReceiver,
    ILanguageBase,
    INodeBase,
    LionCore_builtinsBase,
    NodeBase,
    NodeBaseFactory,
    Parentage,
    PropertyValueManager,
    RequiredMultiContainmentValueManager,
    RequiredPropertyValueManager
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
    private readonly _EAnnotation_source = new Property(this._EAnnotation, "source", "ecore-EAnnotation-source", "ecore-EAnnotation-source");
    get EAnnotation_source(): Property {
        this.ensureWiredUp();
        return this._EAnnotation_source;
    }
    private readonly _EAnnotation_details = new Containment(this._EAnnotation, "details", "ecore-EAnnotation-details", "ecore-EAnnotation-details").isMultiple();
    get EAnnotation_details(): Containment {
        this.ensureWiredUp();
        return this._EAnnotation_details;
    }
    private readonly _EAnnotation_eModelElement = new Containment(this._EAnnotation, "eModelElement", "ecore-EAnnotation-eModelElement", "ecore-EAnnotation-eModelElement").isMultiple();
    get EAnnotation_eModelElement(): Containment {
        this.ensureWiredUp();
        return this._EAnnotation_eModelElement;
    }
    private readonly _EAnnotation_contents = new Containment(this._EAnnotation, "contents", "ecore-EAnnotation-contents", "ecore-EAnnotation-contents").isMultiple();
    get EAnnotation_contents(): Containment {
        this.ensureWiredUp();
        return this._EAnnotation_contents;
    }
    private readonly _EAnnotation_references = new Containment(this._EAnnotation, "references", "ecore-EAnnotation-references", "ecore-EAnnotation-references").isMultiple();
    get EAnnotation_references(): Containment {
        this.ensureWiredUp();
        return this._EAnnotation_references;
    }

    public readonly _EAttribute = new Concept(this._language, "EAttribute", "ecore-EAttribute", "ecore-EAttribute", false);
    get EAttribute(): Concept {
        this.ensureWiredUp();
        return this._EAttribute;
    }
    private readonly _EAttribute_iD = new Property(this._EAttribute, "iD", "ecore-EAttribute-iD", "ecore-EAttribute-iD");
    get EAttribute_iD(): Property {
        this.ensureWiredUp();
        return this._EAttribute_iD;
    }
    private readonly _EAttribute_eAttributeType = new Containment(this._EAttribute, "eAttributeType", "ecore-EAttribute-eAttributeType", "ecore-EAttribute-eAttributeType").isMultiple();
    get EAttribute_eAttributeType(): Containment {
        this.ensureWiredUp();
        return this._EAttribute_eAttributeType;
    }

    public readonly _EClass = new Concept(this._language, "EClass", "ecore-EClass", "ecore-EClass", false);
    get EClass(): Concept {
        this.ensureWiredUp();
        return this._EClass;
    }
    private readonly _EClass_abstract = new Property(this._EClass, "abstract", "ecore-EClass-abstract", "ecore-EClass-abstract");
    get EClass_abstract(): Property {
        this.ensureWiredUp();
        return this._EClass_abstract;
    }
    private readonly _EClass_interface = new Property(this._EClass, "interface", "ecore-EClass-interface", "ecore-EClass-interface");
    get EClass_interface(): Property {
        this.ensureWiredUp();
        return this._EClass_interface;
    }
    private readonly _EClass_eSuperTypes = new Containment(this._EClass, "eSuperTypes", "ecore-EClass-eSuperTypes", "ecore-EClass-eSuperTypes").isMultiple();
    get EClass_eSuperTypes(): Containment {
        this.ensureWiredUp();
        return this._EClass_eSuperTypes;
    }
    private readonly _EClass_eOperations = new Containment(this._EClass, "eOperations", "ecore-EClass-eOperations", "ecore-EClass-eOperations").isMultiple();
    get EClass_eOperations(): Containment {
        this.ensureWiredUp();
        return this._EClass_eOperations;
    }
    private readonly _EClass_eAllAttributes = new Containment(this._EClass, "eAllAttributes", "ecore-EClass-eAllAttributes", "ecore-EClass-eAllAttributes").isMultiple();
    get EClass_eAllAttributes(): Containment {
        this.ensureWiredUp();
        return this._EClass_eAllAttributes;
    }
    private readonly _EClass_eAllReferences = new Containment(this._EClass, "eAllReferences", "ecore-EClass-eAllReferences", "ecore-EClass-eAllReferences").isMultiple();
    get EClass_eAllReferences(): Containment {
        this.ensureWiredUp();
        return this._EClass_eAllReferences;
    }
    private readonly _EClass_eReferences = new Containment(this._EClass, "eReferences", "ecore-EClass-eReferences", "ecore-EClass-eReferences").isMultiple();
    get EClass_eReferences(): Containment {
        this.ensureWiredUp();
        return this._EClass_eReferences;
    }
    private readonly _EClass_eAttributes = new Containment(this._EClass, "eAttributes", "ecore-EClass-eAttributes", "ecore-EClass-eAttributes").isMultiple();
    get EClass_eAttributes(): Containment {
        this.ensureWiredUp();
        return this._EClass_eAttributes;
    }
    private readonly _EClass_eAllContainments = new Containment(this._EClass, "eAllContainments", "ecore-EClass-eAllContainments", "ecore-EClass-eAllContainments").isMultiple();
    get EClass_eAllContainments(): Containment {
        this.ensureWiredUp();
        return this._EClass_eAllContainments;
    }
    private readonly _EClass_eAllOperations = new Containment(this._EClass, "eAllOperations", "ecore-EClass-eAllOperations", "ecore-EClass-eAllOperations").isMultiple();
    get EClass_eAllOperations(): Containment {
        this.ensureWiredUp();
        return this._EClass_eAllOperations;
    }
    private readonly _EClass_eAllStructuralFeatures = new Containment(this._EClass, "eAllStructuralFeatures", "ecore-EClass-eAllStructuralFeatures", "ecore-EClass-eAllStructuralFeatures").isMultiple();
    get EClass_eAllStructuralFeatures(): Containment {
        this.ensureWiredUp();
        return this._EClass_eAllStructuralFeatures;
    }
    private readonly _EClass_eAllSuperTypes = new Containment(this._EClass, "eAllSuperTypes", "ecore-EClass-eAllSuperTypes", "ecore-EClass-eAllSuperTypes").isMultiple();
    get EClass_eAllSuperTypes(): Containment {
        this.ensureWiredUp();
        return this._EClass_eAllSuperTypes;
    }
    private readonly _EClass_eIDAttribute = new Containment(this._EClass, "eIDAttribute", "ecore-EClass-eIDAttribute", "ecore-EClass-eIDAttribute").isMultiple();
    get EClass_eIDAttribute(): Containment {
        this.ensureWiredUp();
        return this._EClass_eIDAttribute;
    }
    private readonly _EClass_eStructuralFeatures = new Containment(this._EClass, "eStructuralFeatures", "ecore-EClass-eStructuralFeatures", "ecore-EClass-eStructuralFeatures").isMultiple();
    get EClass_eStructuralFeatures(): Containment {
        this.ensureWiredUp();
        return this._EClass_eStructuralFeatures;
    }
    private readonly _EClass_eGenericSuperTypes = new Containment(this._EClass, "eGenericSuperTypes", "ecore-EClass-eGenericSuperTypes", "ecore-EClass-eGenericSuperTypes").isMultiple();
    get EClass_eGenericSuperTypes(): Containment {
        this.ensureWiredUp();
        return this._EClass_eGenericSuperTypes;
    }
    private readonly _EClass_eAllGenericSuperTypes = new Containment(this._EClass, "eAllGenericSuperTypes", "ecore-EClass-eAllGenericSuperTypes", "ecore-EClass-eAllGenericSuperTypes").isMultiple();
    get EClass_eAllGenericSuperTypes(): Containment {
        this.ensureWiredUp();
        return this._EClass_eAllGenericSuperTypes;
    }

    public readonly _EClassifier = new Concept(this._language, "EClassifier", "ecore-EClassifier", "ecore-EClassifier", true);
    get EClassifier(): Concept {
        this.ensureWiredUp();
        return this._EClassifier;
    }
    private readonly _EClassifier_instanceClassName = new Property(this._EClassifier, "instanceClassName", "ecore-EClassifier-instanceClassName", "ecore-EClassifier-instanceClassName");
    get EClassifier_instanceClassName(): Property {
        this.ensureWiredUp();
        return this._EClassifier_instanceClassName;
    }
    private readonly _EClassifier_instanceClass = new Property(this._EClassifier, "instanceClass", "ecore-EClassifier-instanceClass", "ecore-EClassifier-instanceClass");
    get EClassifier_instanceClass(): Property {
        this.ensureWiredUp();
        return this._EClassifier_instanceClass;
    }
    private readonly _EClassifier_defaultValue = new Property(this._EClassifier, "defaultValue", "ecore-EClassifier-defaultValue", "ecore-EClassifier-defaultValue");
    get EClassifier_defaultValue(): Property {
        this.ensureWiredUp();
        return this._EClassifier_defaultValue;
    }
    private readonly _EClassifier_instanceTypeName = new Property(this._EClassifier, "instanceTypeName", "ecore-EClassifier-instanceTypeName", "ecore-EClassifier-instanceTypeName");
    get EClassifier_instanceTypeName(): Property {
        this.ensureWiredUp();
        return this._EClassifier_instanceTypeName;
    }
    private readonly _EClassifier_ePackage = new Containment(this._EClassifier, "ePackage", "ecore-EClassifier-ePackage", "ecore-EClassifier-ePackage").isMultiple();
    get EClassifier_ePackage(): Containment {
        this.ensureWiredUp();
        return this._EClassifier_ePackage;
    }
    private readonly _EClassifier_eTypeParameters = new Containment(this._EClassifier, "eTypeParameters", "ecore-EClassifier-eTypeParameters", "ecore-EClassifier-eTypeParameters").isMultiple();
    get EClassifier_eTypeParameters(): Containment {
        this.ensureWiredUp();
        return this._EClassifier_eTypeParameters;
    }

    public readonly _EDataType = new Concept(this._language, "EDataType", "ecore-EDataType", "ecore-EDataType", false);
    get EDataType(): Concept {
        this.ensureWiredUp();
        return this._EDataType;
    }
    private readonly _EDataType_serializable = new Property(this._EDataType, "serializable", "ecore-EDataType-serializable", "ecore-EDataType-serializable");
    get EDataType_serializable(): Property {
        this.ensureWiredUp();
        return this._EDataType_serializable;
    }

    public readonly _EEnum = new Concept(this._language, "EEnum", "ecore-EEnum", "ecore-EEnum", false);
    get EEnum(): Concept {
        this.ensureWiredUp();
        return this._EEnum;
    }
    private readonly _EEnum_eLiterals = new Containment(this._EEnum, "eLiterals", "ecore-EEnum-eLiterals", "ecore-EEnum-eLiterals").isMultiple();
    get EEnum_eLiterals(): Containment {
        this.ensureWiredUp();
        return this._EEnum_eLiterals;
    }

    public readonly _EEnumLiteral = new Concept(this._language, "EEnumLiteral", "ecore-EEnumLiteral", "ecore-EEnumLiteral", false);
    get EEnumLiteral(): Concept {
        this.ensureWiredUp();
        return this._EEnumLiteral;
    }
    private readonly _EEnumLiteral_value = new Property(this._EEnumLiteral, "value", "ecore-EEnumLiteral-value", "ecore-EEnumLiteral-value");
    get EEnumLiteral_value(): Property {
        this.ensureWiredUp();
        return this._EEnumLiteral_value;
    }
    private readonly _EEnumLiteral_instance = new Property(this._EEnumLiteral, "instance", "ecore-EEnumLiteral-instance", "ecore-EEnumLiteral-instance");
    get EEnumLiteral_instance(): Property {
        this.ensureWiredUp();
        return this._EEnumLiteral_instance;
    }
    private readonly _EEnumLiteral_literal = new Property(this._EEnumLiteral, "literal", "ecore-EEnumLiteral-literal", "ecore-EEnumLiteral-literal");
    get EEnumLiteral_literal(): Property {
        this.ensureWiredUp();
        return this._EEnumLiteral_literal;
    }
    private readonly _EEnumLiteral_eEnum = new Containment(this._EEnumLiteral, "eEnum", "ecore-EEnumLiteral-eEnum", "ecore-EEnumLiteral-eEnum").isMultiple();
    get EEnumLiteral_eEnum(): Containment {
        this.ensureWiredUp();
        return this._EEnumLiteral_eEnum;
    }

    public readonly _EFactory = new Concept(this._language, "EFactory", "ecore-EFactory", "ecore-EFactory", false);
    get EFactory(): Concept {
        this.ensureWiredUp();
        return this._EFactory;
    }
    private readonly _EFactory_ePackage = new Containment(this._EFactory, "ePackage", "ecore-EFactory-ePackage", "ecore-EFactory-ePackage").isMultiple();
    get EFactory_ePackage(): Containment {
        this.ensureWiredUp();
        return this._EFactory_ePackage;
    }

    public readonly _EGenericType = new Concept(this._language, "EGenericType", "ecore-EGenericType", "ecore-EGenericType", false);
    get EGenericType(): Concept {
        this.ensureWiredUp();
        return this._EGenericType;
    }
    private readonly _EGenericType_eUpperBound = new Containment(this._EGenericType, "eUpperBound", "ecore-EGenericType-eUpperBound", "ecore-EGenericType-eUpperBound").isMultiple();
    get EGenericType_eUpperBound(): Containment {
        this.ensureWiredUp();
        return this._EGenericType_eUpperBound;
    }
    private readonly _EGenericType_eTypeArguments = new Containment(this._EGenericType, "eTypeArguments", "ecore-EGenericType-eTypeArguments", "ecore-EGenericType-eTypeArguments").isMultiple();
    get EGenericType_eTypeArguments(): Containment {
        this.ensureWiredUp();
        return this._EGenericType_eTypeArguments;
    }
    private readonly _EGenericType_eRawType = new Containment(this._EGenericType, "eRawType", "ecore-EGenericType-eRawType", "ecore-EGenericType-eRawType").isMultiple();
    get EGenericType_eRawType(): Containment {
        this.ensureWiredUp();
        return this._EGenericType_eRawType;
    }
    private readonly _EGenericType_eLowerBound = new Containment(this._EGenericType, "eLowerBound", "ecore-EGenericType-eLowerBound", "ecore-EGenericType-eLowerBound").isMultiple();
    get EGenericType_eLowerBound(): Containment {
        this.ensureWiredUp();
        return this._EGenericType_eLowerBound;
    }
    private readonly _EGenericType_eTypeParameter = new Containment(this._EGenericType, "eTypeParameter", "ecore-EGenericType-eTypeParameter", "ecore-EGenericType-eTypeParameter").isMultiple();
    get EGenericType_eTypeParameter(): Containment {
        this.ensureWiredUp();
        return this._EGenericType_eTypeParameter;
    }
    private readonly _EGenericType_eClassifier = new Containment(this._EGenericType, "eClassifier", "ecore-EGenericType-eClassifier", "ecore-EGenericType-eClassifier").isMultiple();
    get EGenericType_eClassifier(): Containment {
        this.ensureWiredUp();
        return this._EGenericType_eClassifier;
    }

    public readonly _EModelElement = new Concept(this._language, "EModelElement", "ecore-EModelElement", "ecore-EModelElement", true);
    get EModelElement(): Concept {
        this.ensureWiredUp();
        return this._EModelElement;
    }
    private readonly _EModelElement_eAnnotations = new Containment(this._EModelElement, "eAnnotations", "ecore-EModelElement-eAnnotations", "ecore-EModelElement-eAnnotations").isMultiple();
    get EModelElement_eAnnotations(): Containment {
        this.ensureWiredUp();
        return this._EModelElement_eAnnotations;
    }

    public readonly _ENamedElement = new Concept(this._language, "ENamedElement", "ecore-ENamedElement", "ecore-ENamedElement", true);
    get ENamedElement(): Concept {
        this.ensureWiredUp();
        return this._ENamedElement;
    }
    private readonly _ENamedElement_name = new Property(this._ENamedElement, "name", "ecore-ENamedElement-name", "ecore-ENamedElement-name");
    get ENamedElement_name(): Property {
        this.ensureWiredUp();
        return this._ENamedElement_name;
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
    private readonly _EOperation_eContainingClass = new Containment(this._EOperation, "eContainingClass", "ecore-EOperation-eContainingClass", "ecore-EOperation-eContainingClass").isMultiple();
    get EOperation_eContainingClass(): Containment {
        this.ensureWiredUp();
        return this._EOperation_eContainingClass;
    }
    private readonly _EOperation_eTypeParameters = new Containment(this._EOperation, "eTypeParameters", "ecore-EOperation-eTypeParameters", "ecore-EOperation-eTypeParameters").isMultiple();
    get EOperation_eTypeParameters(): Containment {
        this.ensureWiredUp();
        return this._EOperation_eTypeParameters;
    }
    private readonly _EOperation_eParameters = new Containment(this._EOperation, "eParameters", "ecore-EOperation-eParameters", "ecore-EOperation-eParameters").isMultiple();
    get EOperation_eParameters(): Containment {
        this.ensureWiredUp();
        return this._EOperation_eParameters;
    }
    private readonly _EOperation_eExceptions = new Containment(this._EOperation, "eExceptions", "ecore-EOperation-eExceptions", "ecore-EOperation-eExceptions").isMultiple();
    get EOperation_eExceptions(): Containment {
        this.ensureWiredUp();
        return this._EOperation_eExceptions;
    }
    private readonly _EOperation_eGenericExceptions = new Containment(this._EOperation, "eGenericExceptions", "ecore-EOperation-eGenericExceptions", "ecore-EOperation-eGenericExceptions").isMultiple();
    get EOperation_eGenericExceptions(): Containment {
        this.ensureWiredUp();
        return this._EOperation_eGenericExceptions;
    }

    public readonly _EPackage = new Concept(this._language, "EPackage", "ecore-EPackage", "ecore-EPackage", false);
    get EPackage(): Concept {
        this.ensureWiredUp();
        return this._EPackage;
    }
    private readonly _EPackage_nsURI = new Property(this._EPackage, "nsURI", "ecore-EPackage-nsURI", "ecore-EPackage-nsURI");
    get EPackage_nsURI(): Property {
        this.ensureWiredUp();
        return this._EPackage_nsURI;
    }
    private readonly _EPackage_nsPrefix = new Property(this._EPackage, "nsPrefix", "ecore-EPackage-nsPrefix", "ecore-EPackage-nsPrefix");
    get EPackage_nsPrefix(): Property {
        this.ensureWiredUp();
        return this._EPackage_nsPrefix;
    }
    private readonly _EPackage_eFactoryInstance = new Containment(this._EPackage, "eFactoryInstance", "ecore-EPackage-eFactoryInstance", "ecore-EPackage-eFactoryInstance").isMultiple();
    get EPackage_eFactoryInstance(): Containment {
        this.ensureWiredUp();
        return this._EPackage_eFactoryInstance;
    }
    private readonly _EPackage_eClassifiers = new Containment(this._EPackage, "eClassifiers", "ecore-EPackage-eClassifiers", "ecore-EPackage-eClassifiers").isMultiple();
    get EPackage_eClassifiers(): Containment {
        this.ensureWiredUp();
        return this._EPackage_eClassifiers;
    }
    private readonly _EPackage_eSubpackages = new Containment(this._EPackage, "eSubpackages", "ecore-EPackage-eSubpackages", "ecore-EPackage-eSubpackages").isMultiple();
    get EPackage_eSubpackages(): Containment {
        this.ensureWiredUp();
        return this._EPackage_eSubpackages;
    }
    private readonly _EPackage_eSuperPackage = new Containment(this._EPackage, "eSuperPackage", "ecore-EPackage-eSuperPackage", "ecore-EPackage-eSuperPackage").isMultiple();
    get EPackage_eSuperPackage(): Containment {
        this.ensureWiredUp();
        return this._EPackage_eSuperPackage;
    }

    public readonly _EParameter = new Concept(this._language, "EParameter", "ecore-EParameter", "ecore-EParameter", false);
    get EParameter(): Concept {
        this.ensureWiredUp();
        return this._EParameter;
    }
    private readonly _EParameter_eOperation = new Containment(this._EParameter, "eOperation", "ecore-EParameter-eOperation", "ecore-EParameter-eOperation").isMultiple();
    get EParameter_eOperation(): Containment {
        this.ensureWiredUp();
        return this._EParameter_eOperation;
    }

    public readonly _EReference = new Concept(this._language, "EReference", "ecore-EReference", "ecore-EReference", false);
    get EReference(): Concept {
        this.ensureWiredUp();
        return this._EReference;
    }
    private readonly _EReference_ecorecontainment = new Property(this._EReference, "ecorecontainment", "ecore-EReference-ecorecontainment", "ecore-EReference-ecorecontainment");
    get EReference_ecorecontainment(): Property {
        this.ensureWiredUp();
        return this._EReference_ecorecontainment;
    }
    private readonly _EReference_container = new Property(this._EReference, "container", "ecore-EReference-container", "ecore-EReference-container");
    get EReference_container(): Property {
        this.ensureWiredUp();
        return this._EReference_container;
    }
    private readonly _EReference_resolveProxies = new Property(this._EReference, "resolveProxies", "ecore-EReference-resolveProxies", "ecore-EReference-resolveProxies");
    get EReference_resolveProxies(): Property {
        this.ensureWiredUp();
        return this._EReference_resolveProxies;
    }
    private readonly _EReference_eOpposite = new Containment(this._EReference, "eOpposite", "ecore-EReference-eOpposite", "ecore-EReference-eOpposite").isMultiple();
    get EReference_eOpposite(): Containment {
        this.ensureWiredUp();
        return this._EReference_eOpposite;
    }
    private readonly _EReference_eReferenceType = new Containment(this._EReference, "eReferenceType", "ecore-EReference-eReferenceType", "ecore-EReference-eReferenceType").isMultiple();
    get EReference_eReferenceType(): Containment {
        this.ensureWiredUp();
        return this._EReference_eReferenceType;
    }
    private readonly _EReference_eKeys = new Containment(this._EReference, "eKeys", "ecore-EReference-eKeys", "ecore-EReference-eKeys").isMultiple();
    get EReference_eKeys(): Containment {
        this.ensureWiredUp();
        return this._EReference_eKeys;
    }

    public readonly _EStringToStringMapEntry = new Concept(this._language, "EStringToStringMapEntry", "ecore-EStringToStringMapEntry", "ecore-EStringToStringMapEntry", false);
    get EStringToStringMapEntry(): Concept {
        this.ensureWiredUp();
        return this._EStringToStringMapEntry;
    }
    private readonly _EStringToStringMapEntry_key = new Property(this._EStringToStringMapEntry, "key", "ecore-EStringToStringMapEntry-key", "ecore-EStringToStringMapEntry-key");
    get EStringToStringMapEntry_key(): Property {
        this.ensureWiredUp();
        return this._EStringToStringMapEntry_key;
    }
    private readonly _EStringToStringMapEntry_value = new Property(this._EStringToStringMapEntry, "value", "ecore-EStringToStringMapEntry-value", "ecore-EStringToStringMapEntry-value");
    get EStringToStringMapEntry_value(): Property {
        this.ensureWiredUp();
        return this._EStringToStringMapEntry_value;
    }

    public readonly _EStructuralFeature = new Concept(this._language, "EStructuralFeature", "ecore-EStructuralFeature", "ecore-EStructuralFeature", true);
    get EStructuralFeature(): Concept {
        this.ensureWiredUp();
        return this._EStructuralFeature;
    }
    private readonly _EStructuralFeature_changeable = new Property(this._EStructuralFeature, "changeable", "ecore-EStructuralFeature-changeable", "ecore-EStructuralFeature-changeable");
    get EStructuralFeature_changeable(): Property {
        this.ensureWiredUp();
        return this._EStructuralFeature_changeable;
    }
    private readonly _EStructuralFeature_volatile = new Property(this._EStructuralFeature, "volatile", "ecore-EStructuralFeature-volatile", "ecore-EStructuralFeature-volatile");
    get EStructuralFeature_volatile(): Property {
        this.ensureWiredUp();
        return this._EStructuralFeature_volatile;
    }
    private readonly _EStructuralFeature_transient = new Property(this._EStructuralFeature, "transient", "ecore-EStructuralFeature-transient", "ecore-EStructuralFeature-transient");
    get EStructuralFeature_transient(): Property {
        this.ensureWiredUp();
        return this._EStructuralFeature_transient;
    }
    private readonly _EStructuralFeature_defaultValueLiteral = new Property(this._EStructuralFeature, "defaultValueLiteral", "ecore-EStructuralFeature-defaultValueLiteral", "ecore-EStructuralFeature-defaultValueLiteral");
    get EStructuralFeature_defaultValueLiteral(): Property {
        this.ensureWiredUp();
        return this._EStructuralFeature_defaultValueLiteral;
    }
    private readonly _EStructuralFeature_defaultValue = new Property(this._EStructuralFeature, "defaultValue", "ecore-EStructuralFeature-defaultValue", "ecore-EStructuralFeature-defaultValue");
    get EStructuralFeature_defaultValue(): Property {
        this.ensureWiredUp();
        return this._EStructuralFeature_defaultValue;
    }
    private readonly _EStructuralFeature_unsettable = new Property(this._EStructuralFeature, "unsettable", "ecore-EStructuralFeature-unsettable", "ecore-EStructuralFeature-unsettable");
    get EStructuralFeature_unsettable(): Property {
        this.ensureWiredUp();
        return this._EStructuralFeature_unsettable;
    }
    private readonly _EStructuralFeature_derived = new Property(this._EStructuralFeature, "derived", "ecore-EStructuralFeature-derived", "ecore-EStructuralFeature-derived");
    get EStructuralFeature_derived(): Property {
        this.ensureWiredUp();
        return this._EStructuralFeature_derived;
    }
    private readonly _EStructuralFeature_eContainingClass = new Containment(this._EStructuralFeature, "eContainingClass", "ecore-EStructuralFeature-eContainingClass", "ecore-EStructuralFeature-eContainingClass").isMultiple();
    get EStructuralFeature_eContainingClass(): Containment {
        this.ensureWiredUp();
        return this._EStructuralFeature_eContainingClass;
    }

    public readonly _ETypeParameter = new Concept(this._language, "ETypeParameter", "ecore-ETypeParameter", "ecore-ETypeParameter", false);
    get ETypeParameter(): Concept {
        this.ensureWiredUp();
        return this._ETypeParameter;
    }
    private readonly _ETypeParameter_eBounds = new Containment(this._ETypeParameter, "eBounds", "ecore-ETypeParameter-eBounds", "ecore-ETypeParameter-eBounds").isMultiple();
    get ETypeParameter_eBounds(): Containment {
        this.ensureWiredUp();
        return this._ETypeParameter_eBounds;
    }

    public readonly _ETypedElement = new Concept(this._language, "ETypedElement", "ecore-ETypedElement", "ecore-ETypedElement", true);
    get ETypedElement(): Concept {
        this.ensureWiredUp();
        return this._ETypedElement;
    }
    private readonly _ETypedElement_ordered = new Property(this._ETypedElement, "ordered", "ecore-ETypedElement-ordered", "ecore-ETypedElement-ordered");
    get ETypedElement_ordered(): Property {
        this.ensureWiredUp();
        return this._ETypedElement_ordered;
    }
    private readonly _ETypedElement_unique = new Property(this._ETypedElement, "unique", "ecore-ETypedElement-unique", "ecore-ETypedElement-unique");
    get ETypedElement_unique(): Property {
        this.ensureWiredUp();
        return this._ETypedElement_unique;
    }
    private readonly _ETypedElement_lowerBound = new Property(this._ETypedElement, "lowerBound", "ecore-ETypedElement-lowerBound", "ecore-ETypedElement-lowerBound");
    get ETypedElement_lowerBound(): Property {
        this.ensureWiredUp();
        return this._ETypedElement_lowerBound;
    }
    private readonly _ETypedElement_upperBound = new Property(this._ETypedElement, "upperBound", "ecore-ETypedElement-upperBound", "ecore-ETypedElement-upperBound");
    get ETypedElement_upperBound(): Property {
        this.ensureWiredUp();
        return this._ETypedElement_upperBound;
    }
    private readonly _ETypedElement_many = new Property(this._ETypedElement, "many", "ecore-ETypedElement-many", "ecore-ETypedElement-many");
    get ETypedElement_many(): Property {
        this.ensureWiredUp();
        return this._ETypedElement_many;
    }
    private readonly _ETypedElement_required = new Property(this._ETypedElement, "required", "ecore-ETypedElement-required", "ecore-ETypedElement-required");
    get ETypedElement_required(): Property {
        this.ensureWiredUp();
        return this._ETypedElement_required;
    }
    private readonly _ETypedElement_eType = new Containment(this._ETypedElement, "eType", "ecore-ETypedElement-eType", "ecore-ETypedElement-eType").isMultiple();
    get ETypedElement_eType(): Containment {
        this.ensureWiredUp();
        return this._ETypedElement_eType;
    }
    private readonly _ETypedElement_eGenericType = new Containment(this._ETypedElement, "eGenericType", "ecore-ETypedElement-eGenericType", "ecore-ETypedElement-eGenericType").isMultiple();
    get ETypedElement_eGenericType(): Containment {
        this.ensureWiredUp();
        return this._ETypedElement_eGenericType;
    }

    private _wiredUp: boolean = false;
    private ensureWiredUp() {
        if (this._wiredUp) {
            return;
        }
        this._language.havingEntities(this._EAnnotation, this._EAttribute, this._EClass, this._EClassifier, this._EDataType, this._EEnum, this._EEnumLiteral, this._EFactory, this._EGenericType, this._EModelElement, this._ENamedElement, this._EObject, this._EOperation, this._EPackage, this._EParameter, this._EReference, this._EStringToStringMapEntry, this._EStructuralFeature, this._ETypeParameter, this._ETypedElement);
        this._EAnnotation.extends = this._EModelElement;
        this._EAnnotation.havingFeatures(this._EAnnotation_source, this._EAnnotation_details, this._EAnnotation_eModelElement, this._EAnnotation_contents, this._EAnnotation_references);
        this._EAnnotation_source.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._EAnnotation_details.ofType(this._EStringToStringMapEntry);
        this._EAnnotation_eModelElement.ofType(this._EModelElement);
        this._EAnnotation_contents.ofType(this._EObject);
        this._EAnnotation_references.ofType(this._EObject);
        this._EAttribute.extends = this._EStructuralFeature;
        this._EAttribute.havingFeatures(this._EAttribute_iD, this._EAttribute_eAttributeType);
        this._EAttribute_iD.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._EAttribute_eAttributeType.ofType(this._EDataType);
        this._EClass.extends = this._EClassifier;
        this._EClass.havingFeatures(this._EClass_abstract, this._EClass_interface, this._EClass_eSuperTypes, this._EClass_eOperations, this._EClass_eAllAttributes, this._EClass_eAllReferences, this._EClass_eReferences, this._EClass_eAttributes, this._EClass_eAllContainments, this._EClass_eAllOperations, this._EClass_eAllStructuralFeatures, this._EClass_eAllSuperTypes, this._EClass_eIDAttribute, this._EClass_eStructuralFeatures, this._EClass_eGenericSuperTypes, this._EClass_eAllGenericSuperTypes);
        this._EClass_abstract.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._EClass_interface.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._EClass_eSuperTypes.ofType(this._EClass);
        this._EClass_eOperations.ofType(this._EOperation);
        this._EClass_eAllAttributes.ofType(this._EAttribute);
        this._EClass_eAllReferences.ofType(this._EReference);
        this._EClass_eReferences.ofType(this._EReference);
        this._EClass_eAttributes.ofType(this._EAttribute);
        this._EClass_eAllContainments.ofType(this._EReference);
        this._EClass_eAllOperations.ofType(this._EOperation);
        this._EClass_eAllStructuralFeatures.ofType(this._EStructuralFeature);
        this._EClass_eAllSuperTypes.ofType(this._EClass);
        this._EClass_eIDAttribute.ofType(this._EAttribute);
        this._EClass_eStructuralFeatures.ofType(this._EStructuralFeature);
        this._EClass_eGenericSuperTypes.ofType(this._EGenericType);
        this._EClass_eAllGenericSuperTypes.ofType(this._EGenericType);
        this._EClassifier.extends = this._ENamedElement;
        this._EClassifier.havingFeatures(this._EClassifier_instanceClassName, this._EClassifier_instanceClass, this._EClassifier_defaultValue, this._EClassifier_instanceTypeName, this._EClassifier_ePackage, this._EClassifier_eTypeParameters);
        this._EClassifier_instanceClassName.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._EClassifier_instanceClass.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._EClassifier_defaultValue.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._EClassifier_instanceTypeName.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._EClassifier_ePackage.ofType(this._EPackage);
        this._EClassifier_eTypeParameters.ofType(this._ETypeParameter);
        this._EDataType.extends = this._EClassifier;
        this._EDataType.havingFeatures(this._EDataType_serializable);
        this._EDataType_serializable.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._EEnum.extends = this._EDataType;
        this._EEnum.havingFeatures(this._EEnum_eLiterals);
        this._EEnum_eLiterals.ofType(this._EEnumLiteral);
        this._EEnumLiteral.extends = this._ENamedElement;
        this._EEnumLiteral.havingFeatures(this._EEnumLiteral_value, this._EEnumLiteral_instance, this._EEnumLiteral_literal, this._EEnumLiteral_eEnum);
        this._EEnumLiteral_value.ofType(LionCore_builtinsBase.INSTANCE._Integer);
        this._EEnumLiteral_instance.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._EEnumLiteral_literal.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._EEnumLiteral_eEnum.ofType(this._EEnum);
        this._EFactory.extends = this._EModelElement;
        this._EFactory.havingFeatures(this._EFactory_ePackage);
        this._EFactory_ePackage.ofType(this._EPackage);
        this._EGenericType.havingFeatures(this._EGenericType_eUpperBound, this._EGenericType_eTypeArguments, this._EGenericType_eRawType, this._EGenericType_eLowerBound, this._EGenericType_eTypeParameter, this._EGenericType_eClassifier);
        this._EGenericType_eUpperBound.ofType(this._EGenericType);
        this._EGenericType_eTypeArguments.ofType(this._EGenericType);
        this._EGenericType_eRawType.ofType(this._EClassifier);
        this._EGenericType_eLowerBound.ofType(this._EGenericType);
        this._EGenericType_eTypeParameter.ofType(this._ETypeParameter);
        this._EGenericType_eClassifier.ofType(this._EClassifier);
        this._EModelElement.havingFeatures(this._EModelElement_eAnnotations);
        this._EModelElement_eAnnotations.ofType(this._EAnnotation);
        this._ENamedElement.extends = this._EModelElement;
        this._ENamedElement.havingFeatures(this._ENamedElement_name);
        this._ENamedElement_name.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._EOperation.extends = this._ETypedElement;
        this._EOperation.havingFeatures(this._EOperation_eContainingClass, this._EOperation_eTypeParameters, this._EOperation_eParameters, this._EOperation_eExceptions, this._EOperation_eGenericExceptions);
        this._EOperation_eContainingClass.ofType(this._EClass);
        this._EOperation_eTypeParameters.ofType(this._ETypeParameter);
        this._EOperation_eParameters.ofType(this._EParameter);
        this._EOperation_eExceptions.ofType(this._EClassifier);
        this._EOperation_eGenericExceptions.ofType(this._EGenericType);
        this._EPackage.extends = this._ENamedElement;
        this._EPackage.havingFeatures(this._EPackage_nsURI, this._EPackage_nsPrefix, this._EPackage_eFactoryInstance, this._EPackage_eClassifiers, this._EPackage_eSubpackages, this._EPackage_eSuperPackage);
        this._EPackage_nsURI.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._EPackage_nsPrefix.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._EPackage_eFactoryInstance.ofType(this._EFactory);
        this._EPackage_eClassifiers.ofType(this._EClassifier);
        this._EPackage_eSubpackages.ofType(this._EPackage);
        this._EPackage_eSuperPackage.ofType(this._EPackage);
        this._EParameter.extends = this._ETypedElement;
        this._EParameter.havingFeatures(this._EParameter_eOperation);
        this._EParameter_eOperation.ofType(this._EOperation);
        this._EReference.extends = this._EStructuralFeature;
        this._EReference.havingFeatures(this._EReference_ecorecontainment, this._EReference_container, this._EReference_resolveProxies, this._EReference_eOpposite, this._EReference_eReferenceType, this._EReference_eKeys);
        this._EReference_ecorecontainment.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._EReference_container.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._EReference_resolveProxies.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._EReference_eOpposite.ofType(this._EReference);
        this._EReference_eReferenceType.ofType(this._EClass);
        this._EReference_eKeys.ofType(this._EAttribute);
        this._EStringToStringMapEntry.havingFeatures(this._EStringToStringMapEntry_key, this._EStringToStringMapEntry_value);
        this._EStringToStringMapEntry_key.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._EStringToStringMapEntry_value.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._EStructuralFeature.extends = this._ETypedElement;
        this._EStructuralFeature.havingFeatures(this._EStructuralFeature_changeable, this._EStructuralFeature_volatile, this._EStructuralFeature_transient, this._EStructuralFeature_defaultValueLiteral, this._EStructuralFeature_defaultValue, this._EStructuralFeature_unsettable, this._EStructuralFeature_derived, this._EStructuralFeature_eContainingClass);
        this._EStructuralFeature_changeable.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._EStructuralFeature_volatile.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._EStructuralFeature_transient.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._EStructuralFeature_defaultValueLiteral.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._EStructuralFeature_defaultValue.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._EStructuralFeature_unsettable.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._EStructuralFeature_derived.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._EStructuralFeature_eContainingClass.ofType(this._EClass);
        this._ETypeParameter.extends = this._ENamedElement;
        this._ETypeParameter.havingFeatures(this._ETypeParameter_eBounds);
        this._ETypeParameter_eBounds.ofType(this._EGenericType);
        this._ETypedElement.extends = this._ENamedElement;
        this._ETypedElement.havingFeatures(this._ETypedElement_ordered, this._ETypedElement_unique, this._ETypedElement_lowerBound, this._ETypedElement_upperBound, this._ETypedElement_many, this._ETypedElement_required, this._ETypedElement_eType, this._ETypedElement_eGenericType);
        this._ETypedElement_ordered.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._ETypedElement_unique.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._ETypedElement_lowerBound.ofType(LionCore_builtinsBase.INSTANCE._Integer);
        this._ETypedElement_upperBound.ofType(LionCore_builtinsBase.INSTANCE._Integer);
        this._ETypedElement_many.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._ETypedElement_required.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._ETypedElement_eType.ofType(this._EClassifier);
        this._ETypedElement_eGenericType.ofType(this._EGenericType);
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

    private readonly _eAnnotations: RequiredMultiContainmentValueManager<EAnnotation>;
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
        this._eAnnotations = new RequiredMultiContainmentValueManager<EAnnotation>(ecoreBase.INSTANCE.EModelElement_eAnnotations, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === ecoreBase.INSTANCE.EModelElement_eAnnotations.key) {
            return this._eAnnotations;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class EAnnotation extends EModelElement {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EAnnotation {
        return new EAnnotation(ecoreBase.INSTANCE.EAnnotation, id, receiveDelta, parentInfo);
    }

    private readonly _source: RequiredPropertyValueManager<string>;
    get source(): string {
        return this._source.get();
    }
    set source(newValue: string) {
        this._source.set(newValue);
    }

    private readonly _details: RequiredMultiContainmentValueManager<EStringToStringMapEntry>;
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

    private readonly _eModelElement: RequiredMultiContainmentValueManager<EModelElement>;
    get eModelElement(): EModelElement[] {
        return this._eModelElement.get();
    }
    addEModelElement(newValue: EModelElement) {
        this._eModelElement.add(newValue);
    }
    removeEModelElement(valueToRemove: EModelElement) {
        this._eModelElement.remove(valueToRemove);
    }
    addEModelElementAtIndex(newValue: EModelElement, index: number) {
        this._eModelElement.insertAtIndex(newValue, index);
    }
    moveEModelElement(oldIndex: number, newIndex: number) {
        this._eModelElement.move(oldIndex, newIndex);
    }
    replaceEModelElementAtIndex(movedChild: EModelElement, newIndex: number) {
        this._eModelElement.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _contents: RequiredMultiContainmentValueManager<EObject>;
    get contents(): EObject[] {
        return this._contents.get();
    }
    addContents(newValue: EObject) {
        this._contents.add(newValue);
    }
    removeContents(valueToRemove: EObject) {
        this._contents.remove(valueToRemove);
    }
    addContentsAtIndex(newValue: EObject, index: number) {
        this._contents.insertAtIndex(newValue, index);
    }
    moveContents(oldIndex: number, newIndex: number) {
        this._contents.move(oldIndex, newIndex);
    }
    replaceContentsAtIndex(movedChild: EObject, newIndex: number) {
        this._contents.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _references: RequiredMultiContainmentValueManager<EObject>;
    get references(): EObject[] {
        return this._references.get();
    }
    addReferences(newValue: EObject) {
        this._references.add(newValue);
    }
    removeReferences(valueToRemove: EObject) {
        this._references.remove(valueToRemove);
    }
    addReferencesAtIndex(newValue: EObject, index: number) {
        this._references.insertAtIndex(newValue, index);
    }
    moveReferences(oldIndex: number, newIndex: number) {
        this._references.move(oldIndex, newIndex);
    }
    replaceReferencesAtIndex(movedChild: EObject, newIndex: number) {
        this._references.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._source = new RequiredPropertyValueManager<string>(ecoreBase.INSTANCE.EAnnotation_source, this);
        this._details = new RequiredMultiContainmentValueManager<EStringToStringMapEntry>(ecoreBase.INSTANCE.EAnnotation_details, this);
        this._eModelElement = new RequiredMultiContainmentValueManager<EModelElement>(ecoreBase.INSTANCE.EAnnotation_eModelElement, this);
        this._contents = new RequiredMultiContainmentValueManager<EObject>(ecoreBase.INSTANCE.EAnnotation_contents, this);
        this._references = new RequiredMultiContainmentValueManager<EObject>(ecoreBase.INSTANCE.EAnnotation_references, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === ecoreBase.INSTANCE.EAnnotation_source.key) {
            return this._source;
        }
        return super.getPropertyValueManager(property);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case ecoreBase.INSTANCE.EAnnotation_details.key: return this._details;
            case ecoreBase.INSTANCE.EAnnotation_eModelElement.key: return this._eModelElement;
            case ecoreBase.INSTANCE.EAnnotation_contents.key: return this._contents;
            case ecoreBase.INSTANCE.EAnnotation_references.key: return this._references;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export abstract class ENamedElement extends EModelElement {

    private readonly _name: RequiredPropertyValueManager<string>;
    get name(): string {
        return this._name.get();
    }
    set name(newValue: string) {
        this._name.set(newValue);
    }

    protected constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._name = new RequiredPropertyValueManager<string>(ecoreBase.INSTANCE.ENamedElement_name, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === ecoreBase.INSTANCE.ENamedElement_name.key) {
            return this._name;
        }
        return super.getPropertyValueManager(property);
    }
}

export abstract class ETypedElement extends ENamedElement {

    private readonly _ordered: RequiredPropertyValueManager<boolean>;
    get ordered(): boolean {
        return this._ordered.get();
    }
    set ordered(newValue: boolean) {
        this._ordered.set(newValue);
    }

    private readonly _unique: RequiredPropertyValueManager<boolean>;
    get unique(): boolean {
        return this._unique.get();
    }
    set unique(newValue: boolean) {
        this._unique.set(newValue);
    }

    private readonly _lowerBound: RequiredPropertyValueManager<number>;
    get lowerBound(): number {
        return this._lowerBound.get();
    }
    set lowerBound(newValue: number) {
        this._lowerBound.set(newValue);
    }

    private readonly _upperBound: RequiredPropertyValueManager<number>;
    get upperBound(): number {
        return this._upperBound.get();
    }
    set upperBound(newValue: number) {
        this._upperBound.set(newValue);
    }

    private readonly _many: RequiredPropertyValueManager<boolean>;
    get many(): boolean {
        return this._many.get();
    }
    set many(newValue: boolean) {
        this._many.set(newValue);
    }

    private readonly _required: RequiredPropertyValueManager<boolean>;
    get required(): boolean {
        return this._required.get();
    }
    set required(newValue: boolean) {
        this._required.set(newValue);
    }

    private readonly _eType: RequiredMultiContainmentValueManager<EClassifier>;
    get eType(): EClassifier[] {
        return this._eType.get();
    }
    addEType(newValue: EClassifier) {
        this._eType.add(newValue);
    }
    removeEType(valueToRemove: EClassifier) {
        this._eType.remove(valueToRemove);
    }
    addETypeAtIndex(newValue: EClassifier, index: number) {
        this._eType.insertAtIndex(newValue, index);
    }
    moveEType(oldIndex: number, newIndex: number) {
        this._eType.move(oldIndex, newIndex);
    }
    replaceETypeAtIndex(movedChild: EClassifier, newIndex: number) {
        this._eType.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eGenericType: RequiredMultiContainmentValueManager<EGenericType>;
    get eGenericType(): EGenericType[] {
        return this._eGenericType.get();
    }
    addEGenericType(newValue: EGenericType) {
        this._eGenericType.add(newValue);
    }
    removeEGenericType(valueToRemove: EGenericType) {
        this._eGenericType.remove(valueToRemove);
    }
    addEGenericTypeAtIndex(newValue: EGenericType, index: number) {
        this._eGenericType.insertAtIndex(newValue, index);
    }
    moveEGenericType(oldIndex: number, newIndex: number) {
        this._eGenericType.move(oldIndex, newIndex);
    }
    replaceEGenericTypeAtIndex(movedChild: EGenericType, newIndex: number) {
        this._eGenericType.replaceAtIndex(movedChild, newIndex);
    }

    protected constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._ordered = new RequiredPropertyValueManager<boolean>(ecoreBase.INSTANCE.ETypedElement_ordered, this);
        this._unique = new RequiredPropertyValueManager<boolean>(ecoreBase.INSTANCE.ETypedElement_unique, this);
        this._lowerBound = new RequiredPropertyValueManager<number>(ecoreBase.INSTANCE.ETypedElement_lowerBound, this);
        this._upperBound = new RequiredPropertyValueManager<number>(ecoreBase.INSTANCE.ETypedElement_upperBound, this);
        this._many = new RequiredPropertyValueManager<boolean>(ecoreBase.INSTANCE.ETypedElement_many, this);
        this._required = new RequiredPropertyValueManager<boolean>(ecoreBase.INSTANCE.ETypedElement_required, this);
        this._eType = new RequiredMultiContainmentValueManager<EClassifier>(ecoreBase.INSTANCE.ETypedElement_eType, this);
        this._eGenericType = new RequiredMultiContainmentValueManager<EGenericType>(ecoreBase.INSTANCE.ETypedElement_eGenericType, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case ecoreBase.INSTANCE.ETypedElement_ordered.key: return this._ordered;
            case ecoreBase.INSTANCE.ETypedElement_unique.key: return this._unique;
            case ecoreBase.INSTANCE.ETypedElement_lowerBound.key: return this._lowerBound;
            case ecoreBase.INSTANCE.ETypedElement_upperBound.key: return this._upperBound;
            case ecoreBase.INSTANCE.ETypedElement_many.key: return this._many;
            case ecoreBase.INSTANCE.ETypedElement_required.key: return this._required;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case ecoreBase.INSTANCE.ETypedElement_eType.key: return this._eType;
            case ecoreBase.INSTANCE.ETypedElement_eGenericType.key: return this._eGenericType;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export abstract class EStructuralFeature extends ETypedElement {

    private readonly _changeable: RequiredPropertyValueManager<boolean>;
    get changeable(): boolean {
        return this._changeable.get();
    }
    set changeable(newValue: boolean) {
        this._changeable.set(newValue);
    }

    private readonly _volatile: RequiredPropertyValueManager<boolean>;
    get volatile(): boolean {
        return this._volatile.get();
    }
    set volatile(newValue: boolean) {
        this._volatile.set(newValue);
    }

    private readonly _transient: RequiredPropertyValueManager<boolean>;
    get transient(): boolean {
        return this._transient.get();
    }
    set transient(newValue: boolean) {
        this._transient.set(newValue);
    }

    private readonly _defaultValueLiteral: RequiredPropertyValueManager<string>;
    get defaultValueLiteral(): string {
        return this._defaultValueLiteral.get();
    }
    set defaultValueLiteral(newValue: string) {
        this._defaultValueLiteral.set(newValue);
    }

    private readonly _defaultValue: RequiredPropertyValueManager<string>;
    get defaultValue(): string {
        return this._defaultValue.get();
    }
    set defaultValue(newValue: string) {
        this._defaultValue.set(newValue);
    }

    private readonly _unsettable: RequiredPropertyValueManager<boolean>;
    get unsettable(): boolean {
        return this._unsettable.get();
    }
    set unsettable(newValue: boolean) {
        this._unsettable.set(newValue);
    }

    private readonly _derived: RequiredPropertyValueManager<boolean>;
    get derived(): boolean {
        return this._derived.get();
    }
    set derived(newValue: boolean) {
        this._derived.set(newValue);
    }

    private readonly _eContainingClass: RequiredMultiContainmentValueManager<EClass>;
    get eContainingClass(): EClass[] {
        return this._eContainingClass.get();
    }
    addEContainingClass(newValue: EClass) {
        this._eContainingClass.add(newValue);
    }
    removeEContainingClass(valueToRemove: EClass) {
        this._eContainingClass.remove(valueToRemove);
    }
    addEContainingClassAtIndex(newValue: EClass, index: number) {
        this._eContainingClass.insertAtIndex(newValue, index);
    }
    moveEContainingClass(oldIndex: number, newIndex: number) {
        this._eContainingClass.move(oldIndex, newIndex);
    }
    replaceEContainingClassAtIndex(movedChild: EClass, newIndex: number) {
        this._eContainingClass.replaceAtIndex(movedChild, newIndex);
    }

    protected constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._changeable = new RequiredPropertyValueManager<boolean>(ecoreBase.INSTANCE.EStructuralFeature_changeable, this);
        this._volatile = new RequiredPropertyValueManager<boolean>(ecoreBase.INSTANCE.EStructuralFeature_volatile, this);
        this._transient = new RequiredPropertyValueManager<boolean>(ecoreBase.INSTANCE.EStructuralFeature_transient, this);
        this._defaultValueLiteral = new RequiredPropertyValueManager<string>(ecoreBase.INSTANCE.EStructuralFeature_defaultValueLiteral, this);
        this._defaultValue = new RequiredPropertyValueManager<string>(ecoreBase.INSTANCE.EStructuralFeature_defaultValue, this);
        this._unsettable = new RequiredPropertyValueManager<boolean>(ecoreBase.INSTANCE.EStructuralFeature_unsettable, this);
        this._derived = new RequiredPropertyValueManager<boolean>(ecoreBase.INSTANCE.EStructuralFeature_derived, this);
        this._eContainingClass = new RequiredMultiContainmentValueManager<EClass>(ecoreBase.INSTANCE.EStructuralFeature_eContainingClass, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case ecoreBase.INSTANCE.EStructuralFeature_changeable.key: return this._changeable;
            case ecoreBase.INSTANCE.EStructuralFeature_volatile.key: return this._volatile;
            case ecoreBase.INSTANCE.EStructuralFeature_transient.key: return this._transient;
            case ecoreBase.INSTANCE.EStructuralFeature_defaultValueLiteral.key: return this._defaultValueLiteral;
            case ecoreBase.INSTANCE.EStructuralFeature_defaultValue.key: return this._defaultValue;
            case ecoreBase.INSTANCE.EStructuralFeature_unsettable.key: return this._unsettable;
            case ecoreBase.INSTANCE.EStructuralFeature_derived.key: return this._derived;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === ecoreBase.INSTANCE.EStructuralFeature_eContainingClass.key) {
            return this._eContainingClass;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class EAttribute extends EStructuralFeature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EAttribute {
        return new EAttribute(ecoreBase.INSTANCE.EAttribute, id, receiveDelta, parentInfo);
    }

    private readonly _iD: RequiredPropertyValueManager<boolean>;
    get iD(): boolean {
        return this._iD.get();
    }
    set iD(newValue: boolean) {
        this._iD.set(newValue);
    }

    private readonly _eAttributeType: RequiredMultiContainmentValueManager<EDataType>;
    get eAttributeType(): EDataType[] {
        return this._eAttributeType.get();
    }
    addEAttributeType(newValue: EDataType) {
        this._eAttributeType.add(newValue);
    }
    removeEAttributeType(valueToRemove: EDataType) {
        this._eAttributeType.remove(valueToRemove);
    }
    addEAttributeTypeAtIndex(newValue: EDataType, index: number) {
        this._eAttributeType.insertAtIndex(newValue, index);
    }
    moveEAttributeType(oldIndex: number, newIndex: number) {
        this._eAttributeType.move(oldIndex, newIndex);
    }
    replaceEAttributeTypeAtIndex(movedChild: EDataType, newIndex: number) {
        this._eAttributeType.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._iD = new RequiredPropertyValueManager<boolean>(ecoreBase.INSTANCE.EAttribute_iD, this);
        this._eAttributeType = new RequiredMultiContainmentValueManager<EDataType>(ecoreBase.INSTANCE.EAttribute_eAttributeType, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === ecoreBase.INSTANCE.EAttribute_iD.key) {
            return this._iD;
        }
        return super.getPropertyValueManager(property);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === ecoreBase.INSTANCE.EAttribute_eAttributeType.key) {
            return this._eAttributeType;
        }
        return super.getContainmentValueManager(containment);
    }
}

export abstract class EClassifier extends ENamedElement {

    private readonly _instanceClassName: RequiredPropertyValueManager<string>;
    get instanceClassName(): string {
        return this._instanceClassName.get();
    }
    set instanceClassName(newValue: string) {
        this._instanceClassName.set(newValue);
    }

    private readonly _instanceClass: RequiredPropertyValueManager<string>;
    get instanceClass(): string {
        return this._instanceClass.get();
    }
    set instanceClass(newValue: string) {
        this._instanceClass.set(newValue);
    }

    private readonly _defaultValue: RequiredPropertyValueManager<string>;
    get defaultValue(): string {
        return this._defaultValue.get();
    }
    set defaultValue(newValue: string) {
        this._defaultValue.set(newValue);
    }

    private readonly _instanceTypeName: RequiredPropertyValueManager<string>;
    get instanceTypeName(): string {
        return this._instanceTypeName.get();
    }
    set instanceTypeName(newValue: string) {
        this._instanceTypeName.set(newValue);
    }

    private readonly _ePackage: RequiredMultiContainmentValueManager<EPackage>;
    get ePackage(): EPackage[] {
        return this._ePackage.get();
    }
    addEPackage(newValue: EPackage) {
        this._ePackage.add(newValue);
    }
    removeEPackage(valueToRemove: EPackage) {
        this._ePackage.remove(valueToRemove);
    }
    addEPackageAtIndex(newValue: EPackage, index: number) {
        this._ePackage.insertAtIndex(newValue, index);
    }
    moveEPackage(oldIndex: number, newIndex: number) {
        this._ePackage.move(oldIndex, newIndex);
    }
    replaceEPackageAtIndex(movedChild: EPackage, newIndex: number) {
        this._ePackage.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eTypeParameters: RequiredMultiContainmentValueManager<ETypeParameter>;
    get eTypeParameters(): ETypeParameter[] {
        return this._eTypeParameters.get();
    }
    addETypeParameters(newValue: ETypeParameter) {
        this._eTypeParameters.add(newValue);
    }
    removeETypeParameters(valueToRemove: ETypeParameter) {
        this._eTypeParameters.remove(valueToRemove);
    }
    addETypeParametersAtIndex(newValue: ETypeParameter, index: number) {
        this._eTypeParameters.insertAtIndex(newValue, index);
    }
    moveETypeParameters(oldIndex: number, newIndex: number) {
        this._eTypeParameters.move(oldIndex, newIndex);
    }
    replaceETypeParametersAtIndex(movedChild: ETypeParameter, newIndex: number) {
        this._eTypeParameters.replaceAtIndex(movedChild, newIndex);
    }

    protected constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._instanceClassName = new RequiredPropertyValueManager<string>(ecoreBase.INSTANCE.EClassifier_instanceClassName, this);
        this._instanceClass = new RequiredPropertyValueManager<string>(ecoreBase.INSTANCE.EClassifier_instanceClass, this);
        this._defaultValue = new RequiredPropertyValueManager<string>(ecoreBase.INSTANCE.EClassifier_defaultValue, this);
        this._instanceTypeName = new RequiredPropertyValueManager<string>(ecoreBase.INSTANCE.EClassifier_instanceTypeName, this);
        this._ePackage = new RequiredMultiContainmentValueManager<EPackage>(ecoreBase.INSTANCE.EClassifier_ePackage, this);
        this._eTypeParameters = new RequiredMultiContainmentValueManager<ETypeParameter>(ecoreBase.INSTANCE.EClassifier_eTypeParameters, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case ecoreBase.INSTANCE.EClassifier_instanceClassName.key: return this._instanceClassName;
            case ecoreBase.INSTANCE.EClassifier_instanceClass.key: return this._instanceClass;
            case ecoreBase.INSTANCE.EClassifier_defaultValue.key: return this._defaultValue;
            case ecoreBase.INSTANCE.EClassifier_instanceTypeName.key: return this._instanceTypeName;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case ecoreBase.INSTANCE.EClassifier_ePackage.key: return this._ePackage;
            case ecoreBase.INSTANCE.EClassifier_eTypeParameters.key: return this._eTypeParameters;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class EClass extends EClassifier {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EClass {
        return new EClass(ecoreBase.INSTANCE.EClass, id, receiveDelta, parentInfo);
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

    private readonly _eSuperTypes: RequiredMultiContainmentValueManager<EClass>;
    get eSuperTypes(): EClass[] {
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
    replaceESuperTypesAtIndex(movedChild: EClass, newIndex: number) {
        this._eSuperTypes.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eOperations: RequiredMultiContainmentValueManager<EOperation>;
    get eOperations(): EOperation[] {
        return this._eOperations.get();
    }
    addEOperations(newValue: EOperation) {
        this._eOperations.add(newValue);
    }
    removeEOperations(valueToRemove: EOperation) {
        this._eOperations.remove(valueToRemove);
    }
    addEOperationsAtIndex(newValue: EOperation, index: number) {
        this._eOperations.insertAtIndex(newValue, index);
    }
    moveEOperations(oldIndex: number, newIndex: number) {
        this._eOperations.move(oldIndex, newIndex);
    }
    replaceEOperationsAtIndex(movedChild: EOperation, newIndex: number) {
        this._eOperations.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eAllAttributes: RequiredMultiContainmentValueManager<EAttribute>;
    get eAllAttributes(): EAttribute[] {
        return this._eAllAttributes.get();
    }
    addEAllAttributes(newValue: EAttribute) {
        this._eAllAttributes.add(newValue);
    }
    removeEAllAttributes(valueToRemove: EAttribute) {
        this._eAllAttributes.remove(valueToRemove);
    }
    addEAllAttributesAtIndex(newValue: EAttribute, index: number) {
        this._eAllAttributes.insertAtIndex(newValue, index);
    }
    moveEAllAttributes(oldIndex: number, newIndex: number) {
        this._eAllAttributes.move(oldIndex, newIndex);
    }
    replaceEAllAttributesAtIndex(movedChild: EAttribute, newIndex: number) {
        this._eAllAttributes.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eAllReferences: RequiredMultiContainmentValueManager<EReference>;
    get eAllReferences(): EReference[] {
        return this._eAllReferences.get();
    }
    addEAllReferences(newValue: EReference) {
        this._eAllReferences.add(newValue);
    }
    removeEAllReferences(valueToRemove: EReference) {
        this._eAllReferences.remove(valueToRemove);
    }
    addEAllReferencesAtIndex(newValue: EReference, index: number) {
        this._eAllReferences.insertAtIndex(newValue, index);
    }
    moveEAllReferences(oldIndex: number, newIndex: number) {
        this._eAllReferences.move(oldIndex, newIndex);
    }
    replaceEAllReferencesAtIndex(movedChild: EReference, newIndex: number) {
        this._eAllReferences.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eReferences: RequiredMultiContainmentValueManager<EReference>;
    get eReferences(): EReference[] {
        return this._eReferences.get();
    }
    addEReferences(newValue: EReference) {
        this._eReferences.add(newValue);
    }
    removeEReferences(valueToRemove: EReference) {
        this._eReferences.remove(valueToRemove);
    }
    addEReferencesAtIndex(newValue: EReference, index: number) {
        this._eReferences.insertAtIndex(newValue, index);
    }
    moveEReferences(oldIndex: number, newIndex: number) {
        this._eReferences.move(oldIndex, newIndex);
    }
    replaceEReferencesAtIndex(movedChild: EReference, newIndex: number) {
        this._eReferences.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eAttributes: RequiredMultiContainmentValueManager<EAttribute>;
    get eAttributes(): EAttribute[] {
        return this._eAttributes.get();
    }
    addEAttributes(newValue: EAttribute) {
        this._eAttributes.add(newValue);
    }
    removeEAttributes(valueToRemove: EAttribute) {
        this._eAttributes.remove(valueToRemove);
    }
    addEAttributesAtIndex(newValue: EAttribute, index: number) {
        this._eAttributes.insertAtIndex(newValue, index);
    }
    moveEAttributes(oldIndex: number, newIndex: number) {
        this._eAttributes.move(oldIndex, newIndex);
    }
    replaceEAttributesAtIndex(movedChild: EAttribute, newIndex: number) {
        this._eAttributes.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eAllContainments: RequiredMultiContainmentValueManager<EReference>;
    get eAllContainments(): EReference[] {
        return this._eAllContainments.get();
    }
    addEAllContainments(newValue: EReference) {
        this._eAllContainments.add(newValue);
    }
    removeEAllContainments(valueToRemove: EReference) {
        this._eAllContainments.remove(valueToRemove);
    }
    addEAllContainmentsAtIndex(newValue: EReference, index: number) {
        this._eAllContainments.insertAtIndex(newValue, index);
    }
    moveEAllContainments(oldIndex: number, newIndex: number) {
        this._eAllContainments.move(oldIndex, newIndex);
    }
    replaceEAllContainmentsAtIndex(movedChild: EReference, newIndex: number) {
        this._eAllContainments.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eAllOperations: RequiredMultiContainmentValueManager<EOperation>;
    get eAllOperations(): EOperation[] {
        return this._eAllOperations.get();
    }
    addEAllOperations(newValue: EOperation) {
        this._eAllOperations.add(newValue);
    }
    removeEAllOperations(valueToRemove: EOperation) {
        this._eAllOperations.remove(valueToRemove);
    }
    addEAllOperationsAtIndex(newValue: EOperation, index: number) {
        this._eAllOperations.insertAtIndex(newValue, index);
    }
    moveEAllOperations(oldIndex: number, newIndex: number) {
        this._eAllOperations.move(oldIndex, newIndex);
    }
    replaceEAllOperationsAtIndex(movedChild: EOperation, newIndex: number) {
        this._eAllOperations.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eAllStructuralFeatures: RequiredMultiContainmentValueManager<EStructuralFeature>;
    get eAllStructuralFeatures(): EStructuralFeature[] {
        return this._eAllStructuralFeatures.get();
    }
    addEAllStructuralFeatures(newValue: EStructuralFeature) {
        this._eAllStructuralFeatures.add(newValue);
    }
    removeEAllStructuralFeatures(valueToRemove: EStructuralFeature) {
        this._eAllStructuralFeatures.remove(valueToRemove);
    }
    addEAllStructuralFeaturesAtIndex(newValue: EStructuralFeature, index: number) {
        this._eAllStructuralFeatures.insertAtIndex(newValue, index);
    }
    moveEAllStructuralFeatures(oldIndex: number, newIndex: number) {
        this._eAllStructuralFeatures.move(oldIndex, newIndex);
    }
    replaceEAllStructuralFeaturesAtIndex(movedChild: EStructuralFeature, newIndex: number) {
        this._eAllStructuralFeatures.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eAllSuperTypes: RequiredMultiContainmentValueManager<EClass>;
    get eAllSuperTypes(): EClass[] {
        return this._eAllSuperTypes.get();
    }
    addEAllSuperTypes(newValue: EClass) {
        this._eAllSuperTypes.add(newValue);
    }
    removeEAllSuperTypes(valueToRemove: EClass) {
        this._eAllSuperTypes.remove(valueToRemove);
    }
    addEAllSuperTypesAtIndex(newValue: EClass, index: number) {
        this._eAllSuperTypes.insertAtIndex(newValue, index);
    }
    moveEAllSuperTypes(oldIndex: number, newIndex: number) {
        this._eAllSuperTypes.move(oldIndex, newIndex);
    }
    replaceEAllSuperTypesAtIndex(movedChild: EClass, newIndex: number) {
        this._eAllSuperTypes.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eIDAttribute: RequiredMultiContainmentValueManager<EAttribute>;
    get eIDAttribute(): EAttribute[] {
        return this._eIDAttribute.get();
    }
    addEIDAttribute(newValue: EAttribute) {
        this._eIDAttribute.add(newValue);
    }
    removeEIDAttribute(valueToRemove: EAttribute) {
        this._eIDAttribute.remove(valueToRemove);
    }
    addEIDAttributeAtIndex(newValue: EAttribute, index: number) {
        this._eIDAttribute.insertAtIndex(newValue, index);
    }
    moveEIDAttribute(oldIndex: number, newIndex: number) {
        this._eIDAttribute.move(oldIndex, newIndex);
    }
    replaceEIDAttributeAtIndex(movedChild: EAttribute, newIndex: number) {
        this._eIDAttribute.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eStructuralFeatures: RequiredMultiContainmentValueManager<EStructuralFeature>;
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

    private readonly _eGenericSuperTypes: RequiredMultiContainmentValueManager<EGenericType>;
    get eGenericSuperTypes(): EGenericType[] {
        return this._eGenericSuperTypes.get();
    }
    addEGenericSuperTypes(newValue: EGenericType) {
        this._eGenericSuperTypes.add(newValue);
    }
    removeEGenericSuperTypes(valueToRemove: EGenericType) {
        this._eGenericSuperTypes.remove(valueToRemove);
    }
    addEGenericSuperTypesAtIndex(newValue: EGenericType, index: number) {
        this._eGenericSuperTypes.insertAtIndex(newValue, index);
    }
    moveEGenericSuperTypes(oldIndex: number, newIndex: number) {
        this._eGenericSuperTypes.move(oldIndex, newIndex);
    }
    replaceEGenericSuperTypesAtIndex(movedChild: EGenericType, newIndex: number) {
        this._eGenericSuperTypes.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eAllGenericSuperTypes: RequiredMultiContainmentValueManager<EGenericType>;
    get eAllGenericSuperTypes(): EGenericType[] {
        return this._eAllGenericSuperTypes.get();
    }
    addEAllGenericSuperTypes(newValue: EGenericType) {
        this._eAllGenericSuperTypes.add(newValue);
    }
    removeEAllGenericSuperTypes(valueToRemove: EGenericType) {
        this._eAllGenericSuperTypes.remove(valueToRemove);
    }
    addEAllGenericSuperTypesAtIndex(newValue: EGenericType, index: number) {
        this._eAllGenericSuperTypes.insertAtIndex(newValue, index);
    }
    moveEAllGenericSuperTypes(oldIndex: number, newIndex: number) {
        this._eAllGenericSuperTypes.move(oldIndex, newIndex);
    }
    replaceEAllGenericSuperTypesAtIndex(movedChild: EGenericType, newIndex: number) {
        this._eAllGenericSuperTypes.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._abstract = new RequiredPropertyValueManager<boolean>(ecoreBase.INSTANCE.EClass_abstract, this);
        this._interface = new RequiredPropertyValueManager<boolean>(ecoreBase.INSTANCE.EClass_interface, this);
        this._eSuperTypes = new RequiredMultiContainmentValueManager<EClass>(ecoreBase.INSTANCE.EClass_eSuperTypes, this);
        this._eOperations = new RequiredMultiContainmentValueManager<EOperation>(ecoreBase.INSTANCE.EClass_eOperations, this);
        this._eAllAttributes = new RequiredMultiContainmentValueManager<EAttribute>(ecoreBase.INSTANCE.EClass_eAllAttributes, this);
        this._eAllReferences = new RequiredMultiContainmentValueManager<EReference>(ecoreBase.INSTANCE.EClass_eAllReferences, this);
        this._eReferences = new RequiredMultiContainmentValueManager<EReference>(ecoreBase.INSTANCE.EClass_eReferences, this);
        this._eAttributes = new RequiredMultiContainmentValueManager<EAttribute>(ecoreBase.INSTANCE.EClass_eAttributes, this);
        this._eAllContainments = new RequiredMultiContainmentValueManager<EReference>(ecoreBase.INSTANCE.EClass_eAllContainments, this);
        this._eAllOperations = new RequiredMultiContainmentValueManager<EOperation>(ecoreBase.INSTANCE.EClass_eAllOperations, this);
        this._eAllStructuralFeatures = new RequiredMultiContainmentValueManager<EStructuralFeature>(ecoreBase.INSTANCE.EClass_eAllStructuralFeatures, this);
        this._eAllSuperTypes = new RequiredMultiContainmentValueManager<EClass>(ecoreBase.INSTANCE.EClass_eAllSuperTypes, this);
        this._eIDAttribute = new RequiredMultiContainmentValueManager<EAttribute>(ecoreBase.INSTANCE.EClass_eIDAttribute, this);
        this._eStructuralFeatures = new RequiredMultiContainmentValueManager<EStructuralFeature>(ecoreBase.INSTANCE.EClass_eStructuralFeatures, this);
        this._eGenericSuperTypes = new RequiredMultiContainmentValueManager<EGenericType>(ecoreBase.INSTANCE.EClass_eGenericSuperTypes, this);
        this._eAllGenericSuperTypes = new RequiredMultiContainmentValueManager<EGenericType>(ecoreBase.INSTANCE.EClass_eAllGenericSuperTypes, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case ecoreBase.INSTANCE.EClass_abstract.key: return this._abstract;
            case ecoreBase.INSTANCE.EClass_interface.key: return this._interface;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case ecoreBase.INSTANCE.EClass_eSuperTypes.key: return this._eSuperTypes;
            case ecoreBase.INSTANCE.EClass_eOperations.key: return this._eOperations;
            case ecoreBase.INSTANCE.EClass_eAllAttributes.key: return this._eAllAttributes;
            case ecoreBase.INSTANCE.EClass_eAllReferences.key: return this._eAllReferences;
            case ecoreBase.INSTANCE.EClass_eReferences.key: return this._eReferences;
            case ecoreBase.INSTANCE.EClass_eAttributes.key: return this._eAttributes;
            case ecoreBase.INSTANCE.EClass_eAllContainments.key: return this._eAllContainments;
            case ecoreBase.INSTANCE.EClass_eAllOperations.key: return this._eAllOperations;
            case ecoreBase.INSTANCE.EClass_eAllStructuralFeatures.key: return this._eAllStructuralFeatures;
            case ecoreBase.INSTANCE.EClass_eAllSuperTypes.key: return this._eAllSuperTypes;
            case ecoreBase.INSTANCE.EClass_eIDAttribute.key: return this._eIDAttribute;
            case ecoreBase.INSTANCE.EClass_eStructuralFeatures.key: return this._eStructuralFeatures;
            case ecoreBase.INSTANCE.EClass_eGenericSuperTypes.key: return this._eGenericSuperTypes;
            case ecoreBase.INSTANCE.EClass_eAllGenericSuperTypes.key: return this._eAllGenericSuperTypes;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class EDataType extends EClassifier {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EDataType {
        return new EDataType(ecoreBase.INSTANCE.EDataType, id, receiveDelta, parentInfo);
    }

    private readonly _serializable: RequiredPropertyValueManager<boolean>;
    get serializable(): boolean {
        return this._serializable.get();
    }
    set serializable(newValue: boolean) {
        this._serializable.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._serializable = new RequiredPropertyValueManager<boolean>(ecoreBase.INSTANCE.EDataType_serializable, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === ecoreBase.INSTANCE.EDataType_serializable.key) {
            return this._serializable;
        }
        return super.getPropertyValueManager(property);
    }
}

export class EEnum extends EDataType {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EEnum {
        return new EEnum(ecoreBase.INSTANCE.EEnum, id, receiveDelta, parentInfo);
    }

    private readonly _eLiterals: RequiredMultiContainmentValueManager<EEnumLiteral>;
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
        this._eLiterals = new RequiredMultiContainmentValueManager<EEnumLiteral>(ecoreBase.INSTANCE.EEnum_eLiterals, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === ecoreBase.INSTANCE.EEnum_eLiterals.key) {
            return this._eLiterals;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class EEnumLiteral extends ENamedElement {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EEnumLiteral {
        return new EEnumLiteral(ecoreBase.INSTANCE.EEnumLiteral, id, receiveDelta, parentInfo);
    }

    private readonly _value: RequiredPropertyValueManager<number>;
    get value(): number {
        return this._value.get();
    }
    set value(newValue: number) {
        this._value.set(newValue);
    }

    private readonly _instance: RequiredPropertyValueManager<string>;
    get instance(): string {
        return this._instance.get();
    }
    set instance(newValue: string) {
        this._instance.set(newValue);
    }

    private readonly _literal: RequiredPropertyValueManager<string>;
    get literal(): string {
        return this._literal.get();
    }
    set literal(newValue: string) {
        this._literal.set(newValue);
    }

    private readonly _eEnum: RequiredMultiContainmentValueManager<EEnum>;
    get eEnum(): EEnum[] {
        return this._eEnum.get();
    }
    addEEnum(newValue: EEnum) {
        this._eEnum.add(newValue);
    }
    removeEEnum(valueToRemove: EEnum) {
        this._eEnum.remove(valueToRemove);
    }
    addEEnumAtIndex(newValue: EEnum, index: number) {
        this._eEnum.insertAtIndex(newValue, index);
    }
    moveEEnum(oldIndex: number, newIndex: number) {
        this._eEnum.move(oldIndex, newIndex);
    }
    replaceEEnumAtIndex(movedChild: EEnum, newIndex: number) {
        this._eEnum.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._value = new RequiredPropertyValueManager<number>(ecoreBase.INSTANCE.EEnumLiteral_value, this);
        this._instance = new RequiredPropertyValueManager<string>(ecoreBase.INSTANCE.EEnumLiteral_instance, this);
        this._literal = new RequiredPropertyValueManager<string>(ecoreBase.INSTANCE.EEnumLiteral_literal, this);
        this._eEnum = new RequiredMultiContainmentValueManager<EEnum>(ecoreBase.INSTANCE.EEnumLiteral_eEnum, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case ecoreBase.INSTANCE.EEnumLiteral_value.key: return this._value;
            case ecoreBase.INSTANCE.EEnumLiteral_instance.key: return this._instance;
            case ecoreBase.INSTANCE.EEnumLiteral_literal.key: return this._literal;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === ecoreBase.INSTANCE.EEnumLiteral_eEnum.key) {
            return this._eEnum;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class EFactory extends EModelElement {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EFactory {
        return new EFactory(ecoreBase.INSTANCE.EFactory, id, receiveDelta, parentInfo);
    }

    private readonly _ePackage: RequiredMultiContainmentValueManager<EPackage>;
    get ePackage(): EPackage[] {
        return this._ePackage.get();
    }
    addEPackage(newValue: EPackage) {
        this._ePackage.add(newValue);
    }
    removeEPackage(valueToRemove: EPackage) {
        this._ePackage.remove(valueToRemove);
    }
    addEPackageAtIndex(newValue: EPackage, index: number) {
        this._ePackage.insertAtIndex(newValue, index);
    }
    moveEPackage(oldIndex: number, newIndex: number) {
        this._ePackage.move(oldIndex, newIndex);
    }
    replaceEPackageAtIndex(movedChild: EPackage, newIndex: number) {
        this._ePackage.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._ePackage = new RequiredMultiContainmentValueManager<EPackage>(ecoreBase.INSTANCE.EFactory_ePackage, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === ecoreBase.INSTANCE.EFactory_ePackage.key) {
            return this._ePackage;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class EGenericType extends NodeBase {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EGenericType {
        return new EGenericType(ecoreBase.INSTANCE.EGenericType, id, receiveDelta, parentInfo);
    }

    private readonly _eUpperBound: RequiredMultiContainmentValueManager<EGenericType>;
    get eUpperBound(): EGenericType[] {
        return this._eUpperBound.get();
    }
    addEUpperBound(newValue: EGenericType) {
        this._eUpperBound.add(newValue);
    }
    removeEUpperBound(valueToRemove: EGenericType) {
        this._eUpperBound.remove(valueToRemove);
    }
    addEUpperBoundAtIndex(newValue: EGenericType, index: number) {
        this._eUpperBound.insertAtIndex(newValue, index);
    }
    moveEUpperBound(oldIndex: number, newIndex: number) {
        this._eUpperBound.move(oldIndex, newIndex);
    }
    replaceEUpperBoundAtIndex(movedChild: EGenericType, newIndex: number) {
        this._eUpperBound.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eTypeArguments: RequiredMultiContainmentValueManager<EGenericType>;
    get eTypeArguments(): EGenericType[] {
        return this._eTypeArguments.get();
    }
    addETypeArguments(newValue: EGenericType) {
        this._eTypeArguments.add(newValue);
    }
    removeETypeArguments(valueToRemove: EGenericType) {
        this._eTypeArguments.remove(valueToRemove);
    }
    addETypeArgumentsAtIndex(newValue: EGenericType, index: number) {
        this._eTypeArguments.insertAtIndex(newValue, index);
    }
    moveETypeArguments(oldIndex: number, newIndex: number) {
        this._eTypeArguments.move(oldIndex, newIndex);
    }
    replaceETypeArgumentsAtIndex(movedChild: EGenericType, newIndex: number) {
        this._eTypeArguments.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eRawType: RequiredMultiContainmentValueManager<EClassifier>;
    get eRawType(): EClassifier[] {
        return this._eRawType.get();
    }
    addERawType(newValue: EClassifier) {
        this._eRawType.add(newValue);
    }
    removeERawType(valueToRemove: EClassifier) {
        this._eRawType.remove(valueToRemove);
    }
    addERawTypeAtIndex(newValue: EClassifier, index: number) {
        this._eRawType.insertAtIndex(newValue, index);
    }
    moveERawType(oldIndex: number, newIndex: number) {
        this._eRawType.move(oldIndex, newIndex);
    }
    replaceERawTypeAtIndex(movedChild: EClassifier, newIndex: number) {
        this._eRawType.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eLowerBound: RequiredMultiContainmentValueManager<EGenericType>;
    get eLowerBound(): EGenericType[] {
        return this._eLowerBound.get();
    }
    addELowerBound(newValue: EGenericType) {
        this._eLowerBound.add(newValue);
    }
    removeELowerBound(valueToRemove: EGenericType) {
        this._eLowerBound.remove(valueToRemove);
    }
    addELowerBoundAtIndex(newValue: EGenericType, index: number) {
        this._eLowerBound.insertAtIndex(newValue, index);
    }
    moveELowerBound(oldIndex: number, newIndex: number) {
        this._eLowerBound.move(oldIndex, newIndex);
    }
    replaceELowerBoundAtIndex(movedChild: EGenericType, newIndex: number) {
        this._eLowerBound.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eTypeParameter: RequiredMultiContainmentValueManager<ETypeParameter>;
    get eTypeParameter(): ETypeParameter[] {
        return this._eTypeParameter.get();
    }
    addETypeParameter(newValue: ETypeParameter) {
        this._eTypeParameter.add(newValue);
    }
    removeETypeParameter(valueToRemove: ETypeParameter) {
        this._eTypeParameter.remove(valueToRemove);
    }
    addETypeParameterAtIndex(newValue: ETypeParameter, index: number) {
        this._eTypeParameter.insertAtIndex(newValue, index);
    }
    moveETypeParameter(oldIndex: number, newIndex: number) {
        this._eTypeParameter.move(oldIndex, newIndex);
    }
    replaceETypeParameterAtIndex(movedChild: ETypeParameter, newIndex: number) {
        this._eTypeParameter.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eClassifier: RequiredMultiContainmentValueManager<EClassifier>;
    get eClassifier(): EClassifier[] {
        return this._eClassifier.get();
    }
    addEClassifier(newValue: EClassifier) {
        this._eClassifier.add(newValue);
    }
    removeEClassifier(valueToRemove: EClassifier) {
        this._eClassifier.remove(valueToRemove);
    }
    addEClassifierAtIndex(newValue: EClassifier, index: number) {
        this._eClassifier.insertAtIndex(newValue, index);
    }
    moveEClassifier(oldIndex: number, newIndex: number) {
        this._eClassifier.move(oldIndex, newIndex);
    }
    replaceEClassifierAtIndex(movedChild: EClassifier, newIndex: number) {
        this._eClassifier.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._eUpperBound = new RequiredMultiContainmentValueManager<EGenericType>(ecoreBase.INSTANCE.EGenericType_eUpperBound, this);
        this._eTypeArguments = new RequiredMultiContainmentValueManager<EGenericType>(ecoreBase.INSTANCE.EGenericType_eTypeArguments, this);
        this._eRawType = new RequiredMultiContainmentValueManager<EClassifier>(ecoreBase.INSTANCE.EGenericType_eRawType, this);
        this._eLowerBound = new RequiredMultiContainmentValueManager<EGenericType>(ecoreBase.INSTANCE.EGenericType_eLowerBound, this);
        this._eTypeParameter = new RequiredMultiContainmentValueManager<ETypeParameter>(ecoreBase.INSTANCE.EGenericType_eTypeParameter, this);
        this._eClassifier = new RequiredMultiContainmentValueManager<EClassifier>(ecoreBase.INSTANCE.EGenericType_eClassifier, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case ecoreBase.INSTANCE.EGenericType_eUpperBound.key: return this._eUpperBound;
            case ecoreBase.INSTANCE.EGenericType_eTypeArguments.key: return this._eTypeArguments;
            case ecoreBase.INSTANCE.EGenericType_eRawType.key: return this._eRawType;
            case ecoreBase.INSTANCE.EGenericType_eLowerBound.key: return this._eLowerBound;
            case ecoreBase.INSTANCE.EGenericType_eTypeParameter.key: return this._eTypeParameter;
            case ecoreBase.INSTANCE.EGenericType_eClassifier.key: return this._eClassifier;
            default: return super.getContainmentValueManager(containment);
        }
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

    private readonly _eContainingClass: RequiredMultiContainmentValueManager<EClass>;
    get eContainingClass(): EClass[] {
        return this._eContainingClass.get();
    }
    addEContainingClass(newValue: EClass) {
        this._eContainingClass.add(newValue);
    }
    removeEContainingClass(valueToRemove: EClass) {
        this._eContainingClass.remove(valueToRemove);
    }
    addEContainingClassAtIndex(newValue: EClass, index: number) {
        this._eContainingClass.insertAtIndex(newValue, index);
    }
    moveEContainingClass(oldIndex: number, newIndex: number) {
        this._eContainingClass.move(oldIndex, newIndex);
    }
    replaceEContainingClassAtIndex(movedChild: EClass, newIndex: number) {
        this._eContainingClass.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eTypeParameters: RequiredMultiContainmentValueManager<ETypeParameter>;
    get eTypeParameters(): ETypeParameter[] {
        return this._eTypeParameters.get();
    }
    addETypeParameters(newValue: ETypeParameter) {
        this._eTypeParameters.add(newValue);
    }
    removeETypeParameters(valueToRemove: ETypeParameter) {
        this._eTypeParameters.remove(valueToRemove);
    }
    addETypeParametersAtIndex(newValue: ETypeParameter, index: number) {
        this._eTypeParameters.insertAtIndex(newValue, index);
    }
    moveETypeParameters(oldIndex: number, newIndex: number) {
        this._eTypeParameters.move(oldIndex, newIndex);
    }
    replaceETypeParametersAtIndex(movedChild: ETypeParameter, newIndex: number) {
        this._eTypeParameters.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eParameters: RequiredMultiContainmentValueManager<EParameter>;
    get eParameters(): EParameter[] {
        return this._eParameters.get();
    }
    addEParameters(newValue: EParameter) {
        this._eParameters.add(newValue);
    }
    removeEParameters(valueToRemove: EParameter) {
        this._eParameters.remove(valueToRemove);
    }
    addEParametersAtIndex(newValue: EParameter, index: number) {
        this._eParameters.insertAtIndex(newValue, index);
    }
    moveEParameters(oldIndex: number, newIndex: number) {
        this._eParameters.move(oldIndex, newIndex);
    }
    replaceEParametersAtIndex(movedChild: EParameter, newIndex: number) {
        this._eParameters.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eExceptions: RequiredMultiContainmentValueManager<EClassifier>;
    get eExceptions(): EClassifier[] {
        return this._eExceptions.get();
    }
    addEExceptions(newValue: EClassifier) {
        this._eExceptions.add(newValue);
    }
    removeEExceptions(valueToRemove: EClassifier) {
        this._eExceptions.remove(valueToRemove);
    }
    addEExceptionsAtIndex(newValue: EClassifier, index: number) {
        this._eExceptions.insertAtIndex(newValue, index);
    }
    moveEExceptions(oldIndex: number, newIndex: number) {
        this._eExceptions.move(oldIndex, newIndex);
    }
    replaceEExceptionsAtIndex(movedChild: EClassifier, newIndex: number) {
        this._eExceptions.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eGenericExceptions: RequiredMultiContainmentValueManager<EGenericType>;
    get eGenericExceptions(): EGenericType[] {
        return this._eGenericExceptions.get();
    }
    addEGenericExceptions(newValue: EGenericType) {
        this._eGenericExceptions.add(newValue);
    }
    removeEGenericExceptions(valueToRemove: EGenericType) {
        this._eGenericExceptions.remove(valueToRemove);
    }
    addEGenericExceptionsAtIndex(newValue: EGenericType, index: number) {
        this._eGenericExceptions.insertAtIndex(newValue, index);
    }
    moveEGenericExceptions(oldIndex: number, newIndex: number) {
        this._eGenericExceptions.move(oldIndex, newIndex);
    }
    replaceEGenericExceptionsAtIndex(movedChild: EGenericType, newIndex: number) {
        this._eGenericExceptions.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._eContainingClass = new RequiredMultiContainmentValueManager<EClass>(ecoreBase.INSTANCE.EOperation_eContainingClass, this);
        this._eTypeParameters = new RequiredMultiContainmentValueManager<ETypeParameter>(ecoreBase.INSTANCE.EOperation_eTypeParameters, this);
        this._eParameters = new RequiredMultiContainmentValueManager<EParameter>(ecoreBase.INSTANCE.EOperation_eParameters, this);
        this._eExceptions = new RequiredMultiContainmentValueManager<EClassifier>(ecoreBase.INSTANCE.EOperation_eExceptions, this);
        this._eGenericExceptions = new RequiredMultiContainmentValueManager<EGenericType>(ecoreBase.INSTANCE.EOperation_eGenericExceptions, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case ecoreBase.INSTANCE.EOperation_eContainingClass.key: return this._eContainingClass;
            case ecoreBase.INSTANCE.EOperation_eTypeParameters.key: return this._eTypeParameters;
            case ecoreBase.INSTANCE.EOperation_eParameters.key: return this._eParameters;
            case ecoreBase.INSTANCE.EOperation_eExceptions.key: return this._eExceptions;
            case ecoreBase.INSTANCE.EOperation_eGenericExceptions.key: return this._eGenericExceptions;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class EPackage extends ENamedElement {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EPackage {
        return new EPackage(ecoreBase.INSTANCE.EPackage, id, receiveDelta, parentInfo);
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

    private readonly _eFactoryInstance: RequiredMultiContainmentValueManager<EFactory>;
    get eFactoryInstance(): EFactory[] {
        return this._eFactoryInstance.get();
    }
    addEFactoryInstance(newValue: EFactory) {
        this._eFactoryInstance.add(newValue);
    }
    removeEFactoryInstance(valueToRemove: EFactory) {
        this._eFactoryInstance.remove(valueToRemove);
    }
    addEFactoryInstanceAtIndex(newValue: EFactory, index: number) {
        this._eFactoryInstance.insertAtIndex(newValue, index);
    }
    moveEFactoryInstance(oldIndex: number, newIndex: number) {
        this._eFactoryInstance.move(oldIndex, newIndex);
    }
    replaceEFactoryInstanceAtIndex(movedChild: EFactory, newIndex: number) {
        this._eFactoryInstance.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eClassifiers: RequiredMultiContainmentValueManager<EClassifier>;
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

    private readonly _eSubpackages: RequiredMultiContainmentValueManager<EPackage>;
    get eSubpackages(): EPackage[] {
        return this._eSubpackages.get();
    }
    addESubpackages(newValue: EPackage) {
        this._eSubpackages.add(newValue);
    }
    removeESubpackages(valueToRemove: EPackage) {
        this._eSubpackages.remove(valueToRemove);
    }
    addESubpackagesAtIndex(newValue: EPackage, index: number) {
        this._eSubpackages.insertAtIndex(newValue, index);
    }
    moveESubpackages(oldIndex: number, newIndex: number) {
        this._eSubpackages.move(oldIndex, newIndex);
    }
    replaceESubpackagesAtIndex(movedChild: EPackage, newIndex: number) {
        this._eSubpackages.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eSuperPackage: RequiredMultiContainmentValueManager<EPackage>;
    get eSuperPackage(): EPackage[] {
        return this._eSuperPackage.get();
    }
    addESuperPackage(newValue: EPackage) {
        this._eSuperPackage.add(newValue);
    }
    removeESuperPackage(valueToRemove: EPackage) {
        this._eSuperPackage.remove(valueToRemove);
    }
    addESuperPackageAtIndex(newValue: EPackage, index: number) {
        this._eSuperPackage.insertAtIndex(newValue, index);
    }
    moveESuperPackage(oldIndex: number, newIndex: number) {
        this._eSuperPackage.move(oldIndex, newIndex);
    }
    replaceESuperPackageAtIndex(movedChild: EPackage, newIndex: number) {
        this._eSuperPackage.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._nsURI = new RequiredPropertyValueManager<string>(ecoreBase.INSTANCE.EPackage_nsURI, this);
        this._nsPrefix = new RequiredPropertyValueManager<string>(ecoreBase.INSTANCE.EPackage_nsPrefix, this);
        this._eFactoryInstance = new RequiredMultiContainmentValueManager<EFactory>(ecoreBase.INSTANCE.EPackage_eFactoryInstance, this);
        this._eClassifiers = new RequiredMultiContainmentValueManager<EClassifier>(ecoreBase.INSTANCE.EPackage_eClassifiers, this);
        this._eSubpackages = new RequiredMultiContainmentValueManager<EPackage>(ecoreBase.INSTANCE.EPackage_eSubpackages, this);
        this._eSuperPackage = new RequiredMultiContainmentValueManager<EPackage>(ecoreBase.INSTANCE.EPackage_eSuperPackage, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case ecoreBase.INSTANCE.EPackage_nsURI.key: return this._nsURI;
            case ecoreBase.INSTANCE.EPackage_nsPrefix.key: return this._nsPrefix;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case ecoreBase.INSTANCE.EPackage_eFactoryInstance.key: return this._eFactoryInstance;
            case ecoreBase.INSTANCE.EPackage_eClassifiers.key: return this._eClassifiers;
            case ecoreBase.INSTANCE.EPackage_eSubpackages.key: return this._eSubpackages;
            case ecoreBase.INSTANCE.EPackage_eSuperPackage.key: return this._eSuperPackage;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class EParameter extends ETypedElement {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EParameter {
        return new EParameter(ecoreBase.INSTANCE.EParameter, id, receiveDelta, parentInfo);
    }

    private readonly _eOperation: RequiredMultiContainmentValueManager<EOperation>;
    get eOperation(): EOperation[] {
        return this._eOperation.get();
    }
    addEOperation(newValue: EOperation) {
        this._eOperation.add(newValue);
    }
    removeEOperation(valueToRemove: EOperation) {
        this._eOperation.remove(valueToRemove);
    }
    addEOperationAtIndex(newValue: EOperation, index: number) {
        this._eOperation.insertAtIndex(newValue, index);
    }
    moveEOperation(oldIndex: number, newIndex: number) {
        this._eOperation.move(oldIndex, newIndex);
    }
    replaceEOperationAtIndex(movedChild: EOperation, newIndex: number) {
        this._eOperation.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._eOperation = new RequiredMultiContainmentValueManager<EOperation>(ecoreBase.INSTANCE.EParameter_eOperation, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === ecoreBase.INSTANCE.EParameter_eOperation.key) {
            return this._eOperation;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class EReference extends EStructuralFeature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EReference {
        return new EReference(ecoreBase.INSTANCE.EReference, id, receiveDelta, parentInfo);
    }

    private readonly _ecorecontainment: RequiredPropertyValueManager<boolean>;
    get ecorecontainment(): boolean {
        return this._ecorecontainment.get();
    }
    set ecorecontainment(newValue: boolean) {
        this._ecorecontainment.set(newValue);
    }

    private readonly _container: RequiredPropertyValueManager<boolean>;
    get container(): boolean {
        return this._container.get();
    }
    set container(newValue: boolean) {
        this._container.set(newValue);
    }

    private readonly _resolveProxies: RequiredPropertyValueManager<boolean>;
    get resolveProxies(): boolean {
        return this._resolveProxies.get();
    }
    set resolveProxies(newValue: boolean) {
        this._resolveProxies.set(newValue);
    }

    private readonly _eOpposite: RequiredMultiContainmentValueManager<EReference>;
    get eOpposite(): EReference[] {
        return this._eOpposite.get();
    }
    addEOpposite(newValue: EReference) {
        this._eOpposite.add(newValue);
    }
    removeEOpposite(valueToRemove: EReference) {
        this._eOpposite.remove(valueToRemove);
    }
    addEOppositeAtIndex(newValue: EReference, index: number) {
        this._eOpposite.insertAtIndex(newValue, index);
    }
    moveEOpposite(oldIndex: number, newIndex: number) {
        this._eOpposite.move(oldIndex, newIndex);
    }
    replaceEOppositeAtIndex(movedChild: EReference, newIndex: number) {
        this._eOpposite.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eReferenceType: RequiredMultiContainmentValueManager<EClass>;
    get eReferenceType(): EClass[] {
        return this._eReferenceType.get();
    }
    addEReferenceType(newValue: EClass) {
        this._eReferenceType.add(newValue);
    }
    removeEReferenceType(valueToRemove: EClass) {
        this._eReferenceType.remove(valueToRemove);
    }
    addEReferenceTypeAtIndex(newValue: EClass, index: number) {
        this._eReferenceType.insertAtIndex(newValue, index);
    }
    moveEReferenceType(oldIndex: number, newIndex: number) {
        this._eReferenceType.move(oldIndex, newIndex);
    }
    replaceEReferenceTypeAtIndex(movedChild: EClass, newIndex: number) {
        this._eReferenceType.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _eKeys: RequiredMultiContainmentValueManager<EAttribute>;
    get eKeys(): EAttribute[] {
        return this._eKeys.get();
    }
    addEKeys(newValue: EAttribute) {
        this._eKeys.add(newValue);
    }
    removeEKeys(valueToRemove: EAttribute) {
        this._eKeys.remove(valueToRemove);
    }
    addEKeysAtIndex(newValue: EAttribute, index: number) {
        this._eKeys.insertAtIndex(newValue, index);
    }
    moveEKeys(oldIndex: number, newIndex: number) {
        this._eKeys.move(oldIndex, newIndex);
    }
    replaceEKeysAtIndex(movedChild: EAttribute, newIndex: number) {
        this._eKeys.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._ecorecontainment = new RequiredPropertyValueManager<boolean>(ecoreBase.INSTANCE.EReference_ecorecontainment, this);
        this._container = new RequiredPropertyValueManager<boolean>(ecoreBase.INSTANCE.EReference_container, this);
        this._resolveProxies = new RequiredPropertyValueManager<boolean>(ecoreBase.INSTANCE.EReference_resolveProxies, this);
        this._eOpposite = new RequiredMultiContainmentValueManager<EReference>(ecoreBase.INSTANCE.EReference_eOpposite, this);
        this._eReferenceType = new RequiredMultiContainmentValueManager<EClass>(ecoreBase.INSTANCE.EReference_eReferenceType, this);
        this._eKeys = new RequiredMultiContainmentValueManager<EAttribute>(ecoreBase.INSTANCE.EReference_eKeys, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case ecoreBase.INSTANCE.EReference_ecorecontainment.key: return this._ecorecontainment;
            case ecoreBase.INSTANCE.EReference_container.key: return this._container;
            case ecoreBase.INSTANCE.EReference_resolveProxies.key: return this._resolveProxies;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case ecoreBase.INSTANCE.EReference_eOpposite.key: return this._eOpposite;
            case ecoreBase.INSTANCE.EReference_eReferenceType.key: return this._eReferenceType;
            case ecoreBase.INSTANCE.EReference_eKeys.key: return this._eKeys;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class EStringToStringMapEntry extends NodeBase {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EStringToStringMapEntry {
        return new EStringToStringMapEntry(ecoreBase.INSTANCE.EStringToStringMapEntry, id, receiveDelta, parentInfo);
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
        this._key = new RequiredPropertyValueManager<string>(ecoreBase.INSTANCE.EStringToStringMapEntry_key, this);
        this._value = new RequiredPropertyValueManager<string>(ecoreBase.INSTANCE.EStringToStringMapEntry_value, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case ecoreBase.INSTANCE.EStringToStringMapEntry_key.key: return this._key;
            case ecoreBase.INSTANCE.EStringToStringMapEntry_value.key: return this._value;
            default: return super.getPropertyValueManager(property);
        }
    }
}

export class ETypeParameter extends ENamedElement {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ETypeParameter {
        return new ETypeParameter(ecoreBase.INSTANCE.ETypeParameter, id, receiveDelta, parentInfo);
    }

    private readonly _eBounds: RequiredMultiContainmentValueManager<EGenericType>;
    get eBounds(): EGenericType[] {
        return this._eBounds.get();
    }
    addEBounds(newValue: EGenericType) {
        this._eBounds.add(newValue);
    }
    removeEBounds(valueToRemove: EGenericType) {
        this._eBounds.remove(valueToRemove);
    }
    addEBoundsAtIndex(newValue: EGenericType, index: number) {
        this._eBounds.insertAtIndex(newValue, index);
    }
    moveEBounds(oldIndex: number, newIndex: number) {
        this._eBounds.move(oldIndex, newIndex);
    }
    replaceEBoundsAtIndex(movedChild: EGenericType, newIndex: number) {
        this._eBounds.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._eBounds = new RequiredMultiContainmentValueManager<EGenericType>(ecoreBase.INSTANCE.ETypeParameter_eBounds, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === ecoreBase.INSTANCE.ETypeParameter_eBounds.key) {
            return this._eBounds;
        }
        return super.getContainmentValueManager(containment);
    }
}

