/*
 * language's metadata:
 *     name:    kerml
 *     version: 1
 *     key:     kerml
 *     id:      kerml
 */


import {
    Classifier,
    Concept,
    Containment,
    Enumeration,
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


export class kermlBase implements ILanguageBase {

    private readonly _language: Language = new Language("kerml", "1", "kerml", "kerml");
    get language(): Language {
        this.ensureWiredUp();
        return this._language;
    }

    public readonly _AnnotatingElement = new Concept(this._language, "AnnotatingElement", "kerml-AnnotatingElement", "kerml-AnnotatingElement", false);
    get AnnotatingElement(): Concept {
        this.ensureWiredUp();
        return this._AnnotatingElement;
    }
    private readonly _AnnotatingElement_annotation = new Containment(this._AnnotatingElement, "annotation", "kerml-AnnotatingElement-annotation", "kerml-AnnotatingElement-annotation").isMultiple();
    get AnnotatingElement_annotation(): Containment {
        this.ensureWiredUp();
        return this._AnnotatingElement_annotation;
    }
    private readonly _AnnotatingElement_ownedAnnotatingRelationship = new Containment(this._AnnotatingElement, "ownedAnnotatingRelationship", "kerml-AnnotatingElement-ownedAnnotatingRelationship", "kerml-AnnotatingElement-ownedAnnotatingRelationship").isMultiple();
    get AnnotatingElement_ownedAnnotatingRelationship(): Containment {
        this.ensureWiredUp();
        return this._AnnotatingElement_ownedAnnotatingRelationship;
    }
    private readonly _AnnotatingElement_owningAnnotatingRelationship = new Containment(this._AnnotatingElement, "owningAnnotatingRelationship", "kerml-AnnotatingElement-owningAnnotatingRelationship", "kerml-AnnotatingElement-owningAnnotatingRelationship").isMultiple();
    get AnnotatingElement_owningAnnotatingRelationship(): Containment {
        this.ensureWiredUp();
        return this._AnnotatingElement_owningAnnotatingRelationship;
    }
    private readonly _AnnotatingElement_annotatedElement = new Containment(this._AnnotatingElement, "annotatedElement", "kerml-AnnotatingElement-annotatedElement", "kerml-AnnotatingElement-annotatedElement").isMultiple();
    get AnnotatingElement_annotatedElement(): Containment {
        this.ensureWiredUp();
        return this._AnnotatingElement_annotatedElement;
    }

    public readonly _Annotation = new Concept(this._language, "Annotation", "kerml-Annotation", "kerml-Annotation", false);
    get Annotation(): Concept {
        this.ensureWiredUp();
        return this._Annotation;
    }
    private readonly _Annotation_annotatingElement = new Containment(this._Annotation, "annotatingElement", "kerml-Annotation-annotatingElement", "kerml-Annotation-annotatingElement").isMultiple();
    get Annotation_annotatingElement(): Containment {
        this.ensureWiredUp();
        return this._Annotation_annotatingElement;
    }
    private readonly _Annotation_annotatedElement = new Containment(this._Annotation, "annotatedElement", "kerml-Annotation-annotatedElement", "kerml-Annotation-annotatedElement").isMultiple();
    get Annotation_annotatedElement(): Containment {
        this.ensureWiredUp();
        return this._Annotation_annotatedElement;
    }
    private readonly _Annotation_owningAnnotatingElement = new Containment(this._Annotation, "owningAnnotatingElement", "kerml-Annotation-owningAnnotatingElement", "kerml-Annotation-owningAnnotatingElement").isMultiple();
    get Annotation_owningAnnotatingElement(): Containment {
        this.ensureWiredUp();
        return this._Annotation_owningAnnotatingElement;
    }
    private readonly _Annotation_ownedAnnotatingElement = new Containment(this._Annotation, "ownedAnnotatingElement", "kerml-Annotation-ownedAnnotatingElement", "kerml-Annotation-ownedAnnotatingElement").isMultiple();
    get Annotation_ownedAnnotatingElement(): Containment {
        this.ensureWiredUp();
        return this._Annotation_ownedAnnotatingElement;
    }
    private readonly _Annotation_owningAnnotatedElement = new Containment(this._Annotation, "owningAnnotatedElement", "kerml-Annotation-owningAnnotatedElement", "kerml-Annotation-owningAnnotatedElement").isMultiple();
    get Annotation_owningAnnotatedElement(): Containment {
        this.ensureWiredUp();
        return this._Annotation_owningAnnotatedElement;
    }

    public readonly _Association = new Concept(this._language, "Association", "kerml-Association", "kerml-Association", false);
    get Association(): Concept {
        this.ensureWiredUp();
        return this._Association;
    }
    private readonly _Association_relatedType = new Containment(this._Association, "relatedType", "kerml-Association-relatedType", "kerml-Association-relatedType").isMultiple();
    get Association_relatedType(): Containment {
        this.ensureWiredUp();
        return this._Association_relatedType;
    }
    private readonly _Association_sourceType = new Containment(this._Association, "sourceType", "kerml-Association-sourceType", "kerml-Association-sourceType").isMultiple();
    get Association_sourceType(): Containment {
        this.ensureWiredUp();
        return this._Association_sourceType;
    }
    private readonly _Association_targetType = new Containment(this._Association, "targetType", "kerml-Association-targetType", "kerml-Association-targetType").isMultiple();
    get Association_targetType(): Containment {
        this.ensureWiredUp();
        return this._Association_targetType;
    }
    private readonly _Association_associationEnd = new Containment(this._Association, "associationEnd", "kerml-Association-associationEnd", "kerml-Association-associationEnd").isMultiple();
    get Association_associationEnd(): Containment {
        this.ensureWiredUp();
        return this._Association_associationEnd;
    }

    public readonly _AssociationStructure = new Concept(this._language, "AssociationStructure", "kerml-AssociationStructure", "kerml-AssociationStructure", false);
    get AssociationStructure(): Concept {
        this.ensureWiredUp();
        return this._AssociationStructure;
    }

    public readonly _Behavior = new Concept(this._language, "Behavior", "kerml-Behavior", "kerml-Behavior", false);
    get Behavior(): Concept {
        this.ensureWiredUp();
        return this._Behavior;
    }
    private readonly _Behavior_step = new Containment(this._Behavior, "step", "kerml-Behavior-step", "kerml-Behavior-step").isMultiple();
    get Behavior_step(): Containment {
        this.ensureWiredUp();
        return this._Behavior_step;
    }
    private readonly _Behavior_parameter = new Containment(this._Behavior, "parameter", "kerml-Behavior-parameter", "kerml-Behavior-parameter").isMultiple();
    get Behavior_parameter(): Containment {
        this.ensureWiredUp();
        return this._Behavior_parameter;
    }

    public readonly _BindingConnector = new Concept(this._language, "BindingConnector", "kerml-BindingConnector", "kerml-BindingConnector", false);
    get BindingConnector(): Concept {
        this.ensureWiredUp();
        return this._BindingConnector;
    }

    public readonly _BooleanExpression = new Concept(this._language, "BooleanExpression", "kerml-BooleanExpression", "kerml-BooleanExpression", false);
    get BooleanExpression(): Concept {
        this.ensureWiredUp();
        return this._BooleanExpression;
    }
    private readonly _BooleanExpression_predicate = new Containment(this._BooleanExpression, "predicate", "kerml-BooleanExpression-predicate", "kerml-BooleanExpression-predicate").isMultiple();
    get BooleanExpression_predicate(): Containment {
        this.ensureWiredUp();
        return this._BooleanExpression_predicate;
    }

    public readonly _Class = new Concept(this._language, "Class", "kerml-Class", "kerml-Class", false);
    get Class(): Concept {
        this.ensureWiredUp();
        return this._Class;
    }

    public readonly _kermlClassifier = new Concept(this._language, "kermlClassifier", "kerml-kermlClassifier", "kerml-kermlClassifier", false);
    get kermlClassifier(): Concept {
        this.ensureWiredUp();
        return this._kermlClassifier;
    }
    private readonly _kermlClassifier_ownedSubclassification = new Containment(this._kermlClassifier, "ownedSubclassification", "kerml-kermlClassifier-ownedSubclassification", "kerml-kermlClassifier-ownedSubclassification").isMultiple();
    get kermlClassifier_ownedSubclassification(): Containment {
        this.ensureWiredUp();
        return this._kermlClassifier_ownedSubclassification;
    }

    public readonly _CollectExpression = new Concept(this._language, "CollectExpression", "kerml-CollectExpression", "kerml-CollectExpression", false);
    get CollectExpression(): Concept {
        this.ensureWiredUp();
        return this._CollectExpression;
    }

    public readonly _Comment = new Concept(this._language, "Comment", "kerml-Comment", "kerml-Comment", false);
    get Comment(): Concept {
        this.ensureWiredUp();
        return this._Comment;
    }
    private readonly _Comment_locale = new Property(this._Comment, "locale", "kerml-Comment-locale", "kerml-Comment-locale");
    get Comment_locale(): Property {
        this.ensureWiredUp();
        return this._Comment_locale;
    }
    private readonly _Comment_body = new Property(this._Comment, "body", "kerml-Comment-body", "kerml-Comment-body");
    get Comment_body(): Property {
        this.ensureWiredUp();
        return this._Comment_body;
    }

    public readonly _Conjugation = new Concept(this._language, "Conjugation", "kerml-Conjugation", "kerml-Conjugation", false);
    get Conjugation(): Concept {
        this.ensureWiredUp();
        return this._Conjugation;
    }
    private readonly _Conjugation_originalType = new Containment(this._Conjugation, "originalType", "kerml-Conjugation-originalType", "kerml-Conjugation-originalType").isMultiple();
    get Conjugation_originalType(): Containment {
        this.ensureWiredUp();
        return this._Conjugation_originalType;
    }
    private readonly _Conjugation_conjugatedType = new Containment(this._Conjugation, "conjugatedType", "kerml-Conjugation-conjugatedType", "kerml-Conjugation-conjugatedType").isMultiple();
    get Conjugation_conjugatedType(): Containment {
        this.ensureWiredUp();
        return this._Conjugation_conjugatedType;
    }
    private readonly _Conjugation_owningType = new Containment(this._Conjugation, "owningType", "kerml-Conjugation-owningType", "kerml-Conjugation-owningType").isMultiple();
    get Conjugation_owningType(): Containment {
        this.ensureWiredUp();
        return this._Conjugation_owningType;
    }

    public readonly _Connector = new Concept(this._language, "Connector", "kerml-Connector", "kerml-Connector", false);
    get Connector(): Concept {
        this.ensureWiredUp();
        return this._Connector;
    }
    private readonly _Connector_relatedFeature = new Containment(this._Connector, "relatedFeature", "kerml-Connector-relatedFeature", "kerml-Connector-relatedFeature").isMultiple();
    get Connector_relatedFeature(): Containment {
        this.ensureWiredUp();
        return this._Connector_relatedFeature;
    }
    private readonly _Connector_association = new Containment(this._Connector, "association", "kerml-Connector-association", "kerml-Connector-association").isMultiple();
    get Connector_association(): Containment {
        this.ensureWiredUp();
        return this._Connector_association;
    }
    private readonly _Connector_connectorEnd = new Containment(this._Connector, "connectorEnd", "kerml-Connector-connectorEnd", "kerml-Connector-connectorEnd").isMultiple();
    get Connector_connectorEnd(): Containment {
        this.ensureWiredUp();
        return this._Connector_connectorEnd;
    }
    private readonly _Connector_sourceFeature = new Containment(this._Connector, "sourceFeature", "kerml-Connector-sourceFeature", "kerml-Connector-sourceFeature").isMultiple();
    get Connector_sourceFeature(): Containment {
        this.ensureWiredUp();
        return this._Connector_sourceFeature;
    }
    private readonly _Connector_targetFeature = new Containment(this._Connector, "targetFeature", "kerml-Connector-targetFeature", "kerml-Connector-targetFeature").isMultiple();
    get Connector_targetFeature(): Containment {
        this.ensureWiredUp();
        return this._Connector_targetFeature;
    }
    private readonly _Connector_defaultFeaturingType = new Containment(this._Connector, "defaultFeaturingType", "kerml-Connector-defaultFeaturingType", "kerml-Connector-defaultFeaturingType").isMultiple();
    get Connector_defaultFeaturingType(): Containment {
        this.ensureWiredUp();
        return this._Connector_defaultFeaturingType;
    }

    public readonly _ConstructorExpression = new Concept(this._language, "ConstructorExpression", "kerml-ConstructorExpression", "kerml-ConstructorExpression", false);
    get ConstructorExpression(): Concept {
        this.ensureWiredUp();
        return this._ConstructorExpression;
    }

    public readonly _CrossSubsetting = new Concept(this._language, "CrossSubsetting", "kerml-CrossSubsetting", "kerml-CrossSubsetting", false);
    get CrossSubsetting(): Concept {
        this.ensureWiredUp();
        return this._CrossSubsetting;
    }
    private readonly _CrossSubsetting_crossingFeature = new Containment(this._CrossSubsetting, "crossingFeature", "kerml-CrossSubsetting-crossingFeature", "kerml-CrossSubsetting-crossingFeature").isMultiple();
    get CrossSubsetting_crossingFeature(): Containment {
        this.ensureWiredUp();
        return this._CrossSubsetting_crossingFeature;
    }
    private readonly _CrossSubsetting_crossedFeature = new Containment(this._CrossSubsetting, "crossedFeature", "kerml-CrossSubsetting-crossedFeature", "kerml-CrossSubsetting-crossedFeature").isMultiple();
    get CrossSubsetting_crossedFeature(): Containment {
        this.ensureWiredUp();
        return this._CrossSubsetting_crossedFeature;
    }

    public readonly _DataType = new Concept(this._language, "DataType", "kerml-DataType", "kerml-DataType", false);
    get DataType(): Concept {
        this.ensureWiredUp();
        return this._DataType;
    }

    public readonly _Dependency = new Concept(this._language, "Dependency", "kerml-Dependency", "kerml-Dependency", false);
    get Dependency(): Concept {
        this.ensureWiredUp();
        return this._Dependency;
    }
    private readonly _Dependency_client = new Containment(this._Dependency, "client", "kerml-Dependency-client", "kerml-Dependency-client").isMultiple();
    get Dependency_client(): Containment {
        this.ensureWiredUp();
        return this._Dependency_client;
    }
    private readonly _Dependency_supplier = new Containment(this._Dependency, "supplier", "kerml-Dependency-supplier", "kerml-Dependency-supplier").isMultiple();
    get Dependency_supplier(): Containment {
        this.ensureWiredUp();
        return this._Dependency_supplier;
    }

    public readonly _Differencing = new Concept(this._language, "Differencing", "kerml-Differencing", "kerml-Differencing", false);
    get Differencing(): Concept {
        this.ensureWiredUp();
        return this._Differencing;
    }
    private readonly _Differencing_differencingType = new Containment(this._Differencing, "differencingType", "kerml-Differencing-differencingType", "kerml-Differencing-differencingType").isMultiple();
    get Differencing_differencingType(): Containment {
        this.ensureWiredUp();
        return this._Differencing_differencingType;
    }
    private readonly _Differencing_typeDifferenced = new Containment(this._Differencing, "typeDifferenced", "kerml-Differencing-typeDifferenced", "kerml-Differencing-typeDifferenced").isMultiple();
    get Differencing_typeDifferenced(): Containment {
        this.ensureWiredUp();
        return this._Differencing_typeDifferenced;
    }

    public readonly _Disjoining = new Concept(this._language, "Disjoining", "kerml-Disjoining", "kerml-Disjoining", false);
    get Disjoining(): Concept {
        this.ensureWiredUp();
        return this._Disjoining;
    }
    private readonly _Disjoining_typeDisjoined = new Containment(this._Disjoining, "typeDisjoined", "kerml-Disjoining-typeDisjoined", "kerml-Disjoining-typeDisjoined").isMultiple();
    get Disjoining_typeDisjoined(): Containment {
        this.ensureWiredUp();
        return this._Disjoining_typeDisjoined;
    }
    private readonly _Disjoining_disjoiningType = new Containment(this._Disjoining, "disjoiningType", "kerml-Disjoining-disjoiningType", "kerml-Disjoining-disjoiningType").isMultiple();
    get Disjoining_disjoiningType(): Containment {
        this.ensureWiredUp();
        return this._Disjoining_disjoiningType;
    }
    private readonly _Disjoining_owningType = new Containment(this._Disjoining, "owningType", "kerml-Disjoining-owningType", "kerml-Disjoining-owningType").isMultiple();
    get Disjoining_owningType(): Containment {
        this.ensureWiredUp();
        return this._Disjoining_owningType;
    }

    public readonly _Documentation = new Concept(this._language, "Documentation", "kerml-Documentation", "kerml-Documentation", false);
    get Documentation(): Concept {
        this.ensureWiredUp();
        return this._Documentation;
    }
    private readonly _Documentation_documentedElement = new Containment(this._Documentation, "documentedElement", "kerml-Documentation-documentedElement", "kerml-Documentation-documentedElement").isMultiple();
    get Documentation_documentedElement(): Containment {
        this.ensureWiredUp();
        return this._Documentation_documentedElement;
    }

    public readonly _Element = new Concept(this._language, "Element", "kerml-Element", "kerml-Element", true);
    get Element(): Concept {
        this.ensureWiredUp();
        return this._Element;
    }
    private readonly _Element_owningMembership = new Containment(this._Element, "owningMembership", "kerml-Element-owningMembership", "kerml-Element-owningMembership").isMultiple();
    get Element_owningMembership(): Containment {
        this.ensureWiredUp();
        return this._Element_owningMembership;
    }
    private readonly _Element_ownedRelationship = new Containment(this._Element, "ownedRelationship", "kerml-Element-ownedRelationship", "kerml-Element-ownedRelationship").isMultiple();
    get Element_ownedRelationship(): Containment {
        this.ensureWiredUp();
        return this._Element_ownedRelationship;
    }
    private readonly _Element_owningRelationship = new Containment(this._Element, "owningRelationship", "kerml-Element-owningRelationship", "kerml-Element-owningRelationship").isMultiple();
    get Element_owningRelationship(): Containment {
        this.ensureWiredUp();
        return this._Element_owningRelationship;
    }
    private readonly _Element_owningNamespace = new Containment(this._Element, "owningNamespace", "kerml-Element-owningNamespace", "kerml-Element-owningNamespace").isMultiple();
    get Element_owningNamespace(): Containment {
        this.ensureWiredUp();
        return this._Element_owningNamespace;
    }
    private readonly _Element_elementId = new Property(this._Element, "elementId", "kerml-Element-elementId", "kerml-Element-elementId");
    get Element_elementId(): Property {
        this.ensureWiredUp();
        return this._Element_elementId;
    }
    private readonly _Element_owner = new Containment(this._Element, "owner", "kerml-Element-owner", "kerml-Element-owner").isMultiple();
    get Element_owner(): Containment {
        this.ensureWiredUp();
        return this._Element_owner;
    }
    private readonly _Element_ownedElement = new Containment(this._Element, "ownedElement", "kerml-Element-ownedElement", "kerml-Element-ownedElement").isMultiple();
    get Element_ownedElement(): Containment {
        this.ensureWiredUp();
        return this._Element_ownedElement;
    }
    private readonly _Element_documentation = new Containment(this._Element, "documentation", "kerml-Element-documentation", "kerml-Element-documentation").isMultiple();
    get Element_documentation(): Containment {
        this.ensureWiredUp();
        return this._Element_documentation;
    }
    private readonly _Element_ownedAnnotation = new Containment(this._Element, "ownedAnnotation", "kerml-Element-ownedAnnotation", "kerml-Element-ownedAnnotation").isMultiple();
    get Element_ownedAnnotation(): Containment {
        this.ensureWiredUp();
        return this._Element_ownedAnnotation;
    }
    private readonly _Element_textualRepresentation = new Containment(this._Element, "textualRepresentation", "kerml-Element-textualRepresentation", "kerml-Element-textualRepresentation").isMultiple();
    get Element_textualRepresentation(): Containment {
        this.ensureWiredUp();
        return this._Element_textualRepresentation;
    }
    private readonly _Element_aliasIds = new Property(this._Element, "aliasIds", "kerml-Element-aliasIds", "kerml-Element-aliasIds");
    get Element_aliasIds(): Property {
        this.ensureWiredUp();
        return this._Element_aliasIds;
    }
    private readonly _Element_declaredShortName = new Property(this._Element, "declaredShortName", "kerml-Element-declaredShortName", "kerml-Element-declaredShortName");
    get Element_declaredShortName(): Property {
        this.ensureWiredUp();
        return this._Element_declaredShortName;
    }
    private readonly _Element_declaredName = new Property(this._Element, "declaredName", "kerml-Element-declaredName", "kerml-Element-declaredName");
    get Element_declaredName(): Property {
        this.ensureWiredUp();
        return this._Element_declaredName;
    }
    private readonly _Element_shortName = new Property(this._Element, "shortName", "kerml-Element-shortName", "kerml-Element-shortName");
    get Element_shortName(): Property {
        this.ensureWiredUp();
        return this._Element_shortName;
    }
    private readonly _Element_name = new Property(this._Element, "name", "kerml-Element-name", "kerml-Element-name");
    get Element_name(): Property {
        this.ensureWiredUp();
        return this._Element_name;
    }
    private readonly _Element_qualifiedName = new Property(this._Element, "qualifiedName", "kerml-Element-qualifiedName", "kerml-Element-qualifiedName");
    get Element_qualifiedName(): Property {
        this.ensureWiredUp();
        return this._Element_qualifiedName;
    }
    private readonly _Element_isImpliedIncluded = new Property(this._Element, "isImpliedIncluded", "kerml-Element-isImpliedIncluded", "kerml-Element-isImpliedIncluded");
    get Element_isImpliedIncluded(): Property {
        this.ensureWiredUp();
        return this._Element_isImpliedIncluded;
    }
    private readonly _Element_isLibraryElement = new Property(this._Element, "isLibraryElement", "kerml-Element-isLibraryElement", "kerml-Element-isLibraryElement");
    get Element_isLibraryElement(): Property {
        this.ensureWiredUp();
        return this._Element_isLibraryElement;
    }

    public readonly _ElementFilterMembership = new Concept(this._language, "ElementFilterMembership", "kerml-ElementFilterMembership", "kerml-ElementFilterMembership", false);
    get ElementFilterMembership(): Concept {
        this.ensureWiredUp();
        return this._ElementFilterMembership;
    }
    private readonly _ElementFilterMembership_condition = new Containment(this._ElementFilterMembership, "condition", "kerml-ElementFilterMembership-condition", "kerml-ElementFilterMembership-condition").isMultiple();
    get ElementFilterMembership_condition(): Containment {
        this.ensureWiredUp();
        return this._ElementFilterMembership_condition;
    }

    public readonly _EndFeatureMembership = new Concept(this._language, "EndFeatureMembership", "kerml-EndFeatureMembership", "kerml-EndFeatureMembership", false);
    get EndFeatureMembership(): Concept {
        this.ensureWiredUp();
        return this._EndFeatureMembership;
    }

    public readonly _Expression = new Concept(this._language, "Expression", "kerml-Expression", "kerml-Expression", false);
    get Expression(): Concept {
        this.ensureWiredUp();
        return this._Expression;
    }
    private readonly _Expression_function = new Containment(this._Expression, "function", "kerml-Expression-function", "kerml-Expression-function").isMultiple();
    get Expression_function(): Containment {
        this.ensureWiredUp();
        return this._Expression_function;
    }
    private readonly _Expression_result = new Containment(this._Expression, "result", "kerml-Expression-result", "kerml-Expression-result").isMultiple();
    get Expression_result(): Containment {
        this.ensureWiredUp();
        return this._Expression_result;
    }
    private readonly _Expression_isModelLevelEvaluable = new Property(this._Expression, "isModelLevelEvaluable", "kerml-Expression-isModelLevelEvaluable", "kerml-Expression-isModelLevelEvaluable");
    get Expression_isModelLevelEvaluable(): Property {
        this.ensureWiredUp();
        return this._Expression_isModelLevelEvaluable;
    }

    public readonly _Feature = new Concept(this._language, "Feature", "kerml-Feature", "kerml-Feature", false);
    get Feature(): Concept {
        this.ensureWiredUp();
        return this._Feature;
    }
    private readonly _Feature_owningType = new Containment(this._Feature, "owningType", "kerml-Feature-owningType", "kerml-Feature-owningType").isMultiple();
    get Feature_owningType(): Containment {
        this.ensureWiredUp();
        return this._Feature_owningType;
    }
    private readonly _Feature_isUnique = new Property(this._Feature, "isUnique", "kerml-Feature-isUnique", "kerml-Feature-isUnique");
    get Feature_isUnique(): Property {
        this.ensureWiredUp();
        return this._Feature_isUnique;
    }
    private readonly _Feature_isOrdered = new Property(this._Feature, "isOrdered", "kerml-Feature-isOrdered", "kerml-Feature-isOrdered");
    get Feature_isOrdered(): Property {
        this.ensureWiredUp();
        return this._Feature_isOrdered;
    }
    private readonly _Feature_type = new Containment(this._Feature, "type", "kerml-Feature-type", "kerml-Feature-type").isMultiple();
    get Feature_type(): Containment {
        this.ensureWiredUp();
        return this._Feature_type;
    }
    private readonly _Feature_ownedRedefinition = new Containment(this._Feature, "ownedRedefinition", "kerml-Feature-ownedRedefinition", "kerml-Feature-ownedRedefinition").isMultiple();
    get Feature_ownedRedefinition(): Containment {
        this.ensureWiredUp();
        return this._Feature_ownedRedefinition;
    }
    private readonly _Feature_ownedSubsetting = new Containment(this._Feature, "ownedSubsetting", "kerml-Feature-ownedSubsetting", "kerml-Feature-ownedSubsetting").isMultiple();
    get Feature_ownedSubsetting(): Containment {
        this.ensureWiredUp();
        return this._Feature_ownedSubsetting;
    }
    private readonly _Feature_isComposite = new Property(this._Feature, "isComposite", "kerml-Feature-isComposite", "kerml-Feature-isComposite");
    get Feature_isComposite(): Property {
        this.ensureWiredUp();
        return this._Feature_isComposite;
    }
    private readonly _Feature_isEnd = new Property(this._Feature, "isEnd", "kerml-Feature-isEnd", "kerml-Feature-isEnd");
    get Feature_isEnd(): Property {
        this.ensureWiredUp();
        return this._Feature_isEnd;
    }
    private readonly _Feature_endOwningType = new Containment(this._Feature, "endOwningType", "kerml-Feature-endOwningType", "kerml-Feature-endOwningType").isMultiple();
    get Feature_endOwningType(): Containment {
        this.ensureWiredUp();
        return this._Feature_endOwningType;
    }
    private readonly _Feature_ownedTyping = new Containment(this._Feature, "ownedTyping", "kerml-Feature-ownedTyping", "kerml-Feature-ownedTyping").isMultiple();
    get Feature_ownedTyping(): Containment {
        this.ensureWiredUp();
        return this._Feature_ownedTyping;
    }
    private readonly _Feature_featuringType = new Containment(this._Feature, "featuringType", "kerml-Feature-featuringType", "kerml-Feature-featuringType").isMultiple();
    get Feature_featuringType(): Containment {
        this.ensureWiredUp();
        return this._Feature_featuringType;
    }
    private readonly _Feature_ownedTypeFeaturing = new Containment(this._Feature, "ownedTypeFeaturing", "kerml-Feature-ownedTypeFeaturing", "kerml-Feature-ownedTypeFeaturing").isMultiple();
    get Feature_ownedTypeFeaturing(): Containment {
        this.ensureWiredUp();
        return this._Feature_ownedTypeFeaturing;
    }
    private readonly _Feature_isDerived = new Property(this._Feature, "isDerived", "kerml-Feature-isDerived", "kerml-Feature-isDerived");
    get Feature_isDerived(): Property {
        this.ensureWiredUp();
        return this._Feature_isDerived;
    }
    private readonly _Feature_chainingFeature = new Containment(this._Feature, "chainingFeature", "kerml-Feature-chainingFeature", "kerml-Feature-chainingFeature").isMultiple();
    get Feature_chainingFeature(): Containment {
        this.ensureWiredUp();
        return this._Feature_chainingFeature;
    }
    private readonly _Feature_ownedFeatureInverting = new Containment(this._Feature, "ownedFeatureInverting", "kerml-Feature-ownedFeatureInverting", "kerml-Feature-ownedFeatureInverting").isMultiple();
    get Feature_ownedFeatureInverting(): Containment {
        this.ensureWiredUp();
        return this._Feature_ownedFeatureInverting;
    }
    private readonly _Feature_ownedFeatureChaining = new Containment(this._Feature, "ownedFeatureChaining", "kerml-Feature-ownedFeatureChaining", "kerml-Feature-ownedFeatureChaining").isMultiple();
    get Feature_ownedFeatureChaining(): Containment {
        this.ensureWiredUp();
        return this._Feature_ownedFeatureChaining;
    }
    private readonly _Feature_isPortion = new Property(this._Feature, "isPortion", "kerml-Feature-isPortion", "kerml-Feature-isPortion");
    get Feature_isPortion(): Property {
        this.ensureWiredUp();
        return this._Feature_isPortion;
    }
    private readonly _Feature_isVariable = new Property(this._Feature, "isVariable", "kerml-Feature-isVariable", "kerml-Feature-isVariable");
    get Feature_isVariable(): Property {
        this.ensureWiredUp();
        return this._Feature_isVariable;
    }
    private readonly _Feature_isConstant = new Property(this._Feature, "isConstant", "kerml-Feature-isConstant", "kerml-Feature-isConstant");
    get Feature_isConstant(): Property {
        this.ensureWiredUp();
        return this._Feature_isConstant;
    }
    private readonly _Feature_ownedReferenceSubsetting = new Containment(this._Feature, "ownedReferenceSubsetting", "kerml-Feature-ownedReferenceSubsetting", "kerml-Feature-ownedReferenceSubsetting").isMultiple();
    get Feature_ownedReferenceSubsetting(): Containment {
        this.ensureWiredUp();
        return this._Feature_ownedReferenceSubsetting;
    }
    private readonly _Feature_featureTarget = new Containment(this._Feature, "featureTarget", "kerml-Feature-featureTarget", "kerml-Feature-featureTarget").isMultiple();
    get Feature_featureTarget(): Containment {
        this.ensureWiredUp();
        return this._Feature_featureTarget;
    }
    private readonly _Feature_crossFeature = new Containment(this._Feature, "crossFeature", "kerml-Feature-crossFeature", "kerml-Feature-crossFeature").isMultiple();
    get Feature_crossFeature(): Containment {
        this.ensureWiredUp();
        return this._Feature_crossFeature;
    }
    private readonly _Feature_direction = new Property(this._Feature, "direction", "kerml-Feature-direction", "kerml-Feature-direction");
    get Feature_direction(): Property {
        this.ensureWiredUp();
        return this._Feature_direction;
    }
    private readonly _Feature_ownedCrossSubsetting = new Containment(this._Feature, "ownedCrossSubsetting", "kerml-Feature-ownedCrossSubsetting", "kerml-Feature-ownedCrossSubsetting").isMultiple();
    get Feature_ownedCrossSubsetting(): Containment {
        this.ensureWiredUp();
        return this._Feature_ownedCrossSubsetting;
    }
    private readonly _Feature_owningFeatureMembership = new Containment(this._Feature, "owningFeatureMembership", "kerml-Feature-owningFeatureMembership", "kerml-Feature-owningFeatureMembership").isMultiple();
    get Feature_owningFeatureMembership(): Containment {
        this.ensureWiredUp();
        return this._Feature_owningFeatureMembership;
    }

    public readonly _FeatureChainExpression = new Concept(this._language, "FeatureChainExpression", "kerml-FeatureChainExpression", "kerml-FeatureChainExpression", false);
    get FeatureChainExpression(): Concept {
        this.ensureWiredUp();
        return this._FeatureChainExpression;
    }
    private readonly _FeatureChainExpression_targetFeature = new Containment(this._FeatureChainExpression, "targetFeature", "kerml-FeatureChainExpression-targetFeature", "kerml-FeatureChainExpression-targetFeature").isMultiple();
    get FeatureChainExpression_targetFeature(): Containment {
        this.ensureWiredUp();
        return this._FeatureChainExpression_targetFeature;
    }

    public readonly _FeatureChaining = new Concept(this._language, "FeatureChaining", "kerml-FeatureChaining", "kerml-FeatureChaining", false);
    get FeatureChaining(): Concept {
        this.ensureWiredUp();
        return this._FeatureChaining;
    }
    private readonly _FeatureChaining_chainingFeature = new Containment(this._FeatureChaining, "chainingFeature", "kerml-FeatureChaining-chainingFeature", "kerml-FeatureChaining-chainingFeature").isMultiple();
    get FeatureChaining_chainingFeature(): Containment {
        this.ensureWiredUp();
        return this._FeatureChaining_chainingFeature;
    }
    private readonly _FeatureChaining_featureChained = new Containment(this._FeatureChaining, "featureChained", "kerml-FeatureChaining-featureChained", "kerml-FeatureChaining-featureChained").isMultiple();
    get FeatureChaining_featureChained(): Containment {
        this.ensureWiredUp();
        return this._FeatureChaining_featureChained;
    }

    public readonly _FeatureDirectionKind = new Enumeration(this._language, "FeatureDirectionKind", "kerml-FeatureDirectionKind", "kerml-FeatureDirectionKind");
    get FeatureDirectionKind(): Enumeration {
        this.ensureWiredUp();
        return this._FeatureDirectionKind;
    }
    private readonly _FeatureDirectionKind_in = new EnumerationLiteral(this._FeatureDirectionKind, "in", "kerml-FeatureDirectionKind-in", "kerml-FeatureDirectionKind-in");
    get FeatureDirectionKind_in(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._FeatureDirectionKind_in;
    }
    private readonly _FeatureDirectionKind_inout = new EnumerationLiteral(this._FeatureDirectionKind, "inout", "kerml-FeatureDirectionKind-inout", "kerml-FeatureDirectionKind-inout");
    get FeatureDirectionKind_inout(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._FeatureDirectionKind_inout;
    }
    private readonly _FeatureDirectionKind_out = new EnumerationLiteral(this._FeatureDirectionKind, "out", "kerml-FeatureDirectionKind-out", "kerml-FeatureDirectionKind-out");
    get FeatureDirectionKind_out(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._FeatureDirectionKind_out;
    }

    public readonly _FeatureInverting = new Concept(this._language, "FeatureInverting", "kerml-FeatureInverting", "kerml-FeatureInverting", false);
    get FeatureInverting(): Concept {
        this.ensureWiredUp();
        return this._FeatureInverting;
    }
    private readonly _FeatureInverting_featureInverted = new Containment(this._FeatureInverting, "featureInverted", "kerml-FeatureInverting-featureInverted", "kerml-FeatureInverting-featureInverted").isMultiple();
    get FeatureInverting_featureInverted(): Containment {
        this.ensureWiredUp();
        return this._FeatureInverting_featureInverted;
    }
    private readonly _FeatureInverting_invertingFeature = new Containment(this._FeatureInverting, "invertingFeature", "kerml-FeatureInverting-invertingFeature", "kerml-FeatureInverting-invertingFeature").isMultiple();
    get FeatureInverting_invertingFeature(): Containment {
        this.ensureWiredUp();
        return this._FeatureInverting_invertingFeature;
    }
    private readonly _FeatureInverting_owningFeature = new Containment(this._FeatureInverting, "owningFeature", "kerml-FeatureInverting-owningFeature", "kerml-FeatureInverting-owningFeature").isMultiple();
    get FeatureInverting_owningFeature(): Containment {
        this.ensureWiredUp();
        return this._FeatureInverting_owningFeature;
    }

    public readonly _FeatureMembership = new Concept(this._language, "FeatureMembership", "kerml-FeatureMembership", "kerml-FeatureMembership", false);
    get FeatureMembership(): Concept {
        this.ensureWiredUp();
        return this._FeatureMembership;
    }
    private readonly _FeatureMembership_ownedMemberFeature = new Containment(this._FeatureMembership, "ownedMemberFeature", "kerml-FeatureMembership-ownedMemberFeature", "kerml-FeatureMembership-ownedMemberFeature").isMultiple();
    get FeatureMembership_ownedMemberFeature(): Containment {
        this.ensureWiredUp();
        return this._FeatureMembership_ownedMemberFeature;
    }
    private readonly _FeatureMembership_owningType = new Containment(this._FeatureMembership, "owningType", "kerml-FeatureMembership-owningType", "kerml-FeatureMembership-owningType").isMultiple();
    get FeatureMembership_owningType(): Containment {
        this.ensureWiredUp();
        return this._FeatureMembership_owningType;
    }

    public readonly _FeatureReferenceExpression = new Concept(this._language, "FeatureReferenceExpression", "kerml-FeatureReferenceExpression", "kerml-FeatureReferenceExpression", false);
    get FeatureReferenceExpression(): Concept {
        this.ensureWiredUp();
        return this._FeatureReferenceExpression;
    }
    private readonly _FeatureReferenceExpression_referent = new Containment(this._FeatureReferenceExpression, "referent", "kerml-FeatureReferenceExpression-referent", "kerml-FeatureReferenceExpression-referent").isMultiple();
    get FeatureReferenceExpression_referent(): Containment {
        this.ensureWiredUp();
        return this._FeatureReferenceExpression_referent;
    }

    public readonly _FeatureTyping = new Concept(this._language, "FeatureTyping", "kerml-FeatureTyping", "kerml-FeatureTyping", false);
    get FeatureTyping(): Concept {
        this.ensureWiredUp();
        return this._FeatureTyping;
    }
    private readonly _FeatureTyping_typedFeature = new Containment(this._FeatureTyping, "typedFeature", "kerml-FeatureTyping-typedFeature", "kerml-FeatureTyping-typedFeature").isMultiple();
    get FeatureTyping_typedFeature(): Containment {
        this.ensureWiredUp();
        return this._FeatureTyping_typedFeature;
    }
    private readonly _FeatureTyping_type = new Containment(this._FeatureTyping, "type", "kerml-FeatureTyping-type", "kerml-FeatureTyping-type").isMultiple();
    get FeatureTyping_type(): Containment {
        this.ensureWiredUp();
        return this._FeatureTyping_type;
    }
    private readonly _FeatureTyping_owningFeature = new Containment(this._FeatureTyping, "owningFeature", "kerml-FeatureTyping-owningFeature", "kerml-FeatureTyping-owningFeature").isMultiple();
    get FeatureTyping_owningFeature(): Containment {
        this.ensureWiredUp();
        return this._FeatureTyping_owningFeature;
    }

    public readonly _FeatureValue = new Concept(this._language, "FeatureValue", "kerml-FeatureValue", "kerml-FeatureValue", false);
    get FeatureValue(): Concept {
        this.ensureWiredUp();
        return this._FeatureValue;
    }
    private readonly _FeatureValue_featureWithValue = new Containment(this._FeatureValue, "featureWithValue", "kerml-FeatureValue-featureWithValue", "kerml-FeatureValue-featureWithValue").isMultiple();
    get FeatureValue_featureWithValue(): Containment {
        this.ensureWiredUp();
        return this._FeatureValue_featureWithValue;
    }
    private readonly _FeatureValue_value = new Containment(this._FeatureValue, "value", "kerml-FeatureValue-value", "kerml-FeatureValue-value").isMultiple();
    get FeatureValue_value(): Containment {
        this.ensureWiredUp();
        return this._FeatureValue_value;
    }
    private readonly _FeatureValue_isInitial = new Property(this._FeatureValue, "isInitial", "kerml-FeatureValue-isInitial", "kerml-FeatureValue-isInitial");
    get FeatureValue_isInitial(): Property {
        this.ensureWiredUp();
        return this._FeatureValue_isInitial;
    }
    private readonly _FeatureValue_isDefault = new Property(this._FeatureValue, "isDefault", "kerml-FeatureValue-isDefault", "kerml-FeatureValue-isDefault");
    get FeatureValue_isDefault(): Property {
        this.ensureWiredUp();
        return this._FeatureValue_isDefault;
    }

    public readonly _Flow = new Concept(this._language, "Flow", "kerml-Flow", "kerml-Flow", false);
    get Flow(): Concept {
        this.ensureWiredUp();
        return this._Flow;
    }
    private readonly _Flow_payloadType = new Containment(this._Flow, "payloadType", "kerml-Flow-payloadType", "kerml-Flow-payloadType").isMultiple();
    get Flow_payloadType(): Containment {
        this.ensureWiredUp();
        return this._Flow_payloadType;
    }
    private readonly _Flow_targetInputFeature = new Containment(this._Flow, "targetInputFeature", "kerml-Flow-targetInputFeature", "kerml-Flow-targetInputFeature").isMultiple();
    get Flow_targetInputFeature(): Containment {
        this.ensureWiredUp();
        return this._Flow_targetInputFeature;
    }
    private readonly _Flow_sourceOutputFeature = new Containment(this._Flow, "sourceOutputFeature", "kerml-Flow-sourceOutputFeature", "kerml-Flow-sourceOutputFeature").isMultiple();
    get Flow_sourceOutputFeature(): Containment {
        this.ensureWiredUp();
        return this._Flow_sourceOutputFeature;
    }
    private readonly _Flow_flowEnd = new Containment(this._Flow, "flowEnd", "kerml-Flow-flowEnd", "kerml-Flow-flowEnd").isMultiple();
    get Flow_flowEnd(): Containment {
        this.ensureWiredUp();
        return this._Flow_flowEnd;
    }
    private readonly _Flow_payloadFeature = new Containment(this._Flow, "payloadFeature", "kerml-Flow-payloadFeature", "kerml-Flow-payloadFeature").isMultiple();
    get Flow_payloadFeature(): Containment {
        this.ensureWiredUp();
        return this._Flow_payloadFeature;
    }
    private readonly _Flow_interaction = new Containment(this._Flow, "interaction", "kerml-Flow-interaction", "kerml-Flow-interaction").isMultiple();
    get Flow_interaction(): Containment {
        this.ensureWiredUp();
        return this._Flow_interaction;
    }

    public readonly _FlowEnd = new Concept(this._language, "FlowEnd", "kerml-FlowEnd", "kerml-FlowEnd", false);
    get FlowEnd(): Concept {
        this.ensureWiredUp();
        return this._FlowEnd;
    }

    public readonly _Function = new Concept(this._language, "Function", "kerml-Function", "kerml-Function", false);
    get Function(): Concept {
        this.ensureWiredUp();
        return this._Function;
    }
    private readonly _Function_expression = new Containment(this._Function, "expression", "kerml-Function-expression", "kerml-Function-expression").isMultiple();
    get Function_expression(): Containment {
        this.ensureWiredUp();
        return this._Function_expression;
    }
    private readonly _Function_result = new Containment(this._Function, "result", "kerml-Function-result", "kerml-Function-result").isMultiple();
    get Function_result(): Containment {
        this.ensureWiredUp();
        return this._Function_result;
    }
    private readonly _Function_isModelLevelEvaluable = new Property(this._Function, "isModelLevelEvaluable", "kerml-Function-isModelLevelEvaluable", "kerml-Function-isModelLevelEvaluable");
    get Function_isModelLevelEvaluable(): Property {
        this.ensureWiredUp();
        return this._Function_isModelLevelEvaluable;
    }

    public readonly _Import = new Concept(this._language, "Import", "kerml-Import", "kerml-Import", true);
    get Import(): Concept {
        this.ensureWiredUp();
        return this._Import;
    }
    private readonly _Import_visibility = new Property(this._Import, "visibility", "kerml-Import-visibility", "kerml-Import-visibility");
    get Import_visibility(): Property {
        this.ensureWiredUp();
        return this._Import_visibility;
    }
    private readonly _Import_isRecursive = new Property(this._Import, "isRecursive", "kerml-Import-isRecursive", "kerml-Import-isRecursive");
    get Import_isRecursive(): Property {
        this.ensureWiredUp();
        return this._Import_isRecursive;
    }
    private readonly _Import_isImportAll = new Property(this._Import, "isImportAll", "kerml-Import-isImportAll", "kerml-Import-isImportAll");
    get Import_isImportAll(): Property {
        this.ensureWiredUp();
        return this._Import_isImportAll;
    }
    private readonly _Import_importedElement = new Containment(this._Import, "importedElement", "kerml-Import-importedElement", "kerml-Import-importedElement").isMultiple();
    get Import_importedElement(): Containment {
        this.ensureWiredUp();
        return this._Import_importedElement;
    }
    private readonly _Import_importOwningNamespace = new Containment(this._Import, "importOwningNamespace", "kerml-Import-importOwningNamespace", "kerml-Import-importOwningNamespace").isMultiple();
    get Import_importOwningNamespace(): Containment {
        this.ensureWiredUp();
        return this._Import_importOwningNamespace;
    }

    public readonly _IndexExpression = new Concept(this._language, "IndexExpression", "kerml-IndexExpression", "kerml-IndexExpression", false);
    get IndexExpression(): Concept {
        this.ensureWiredUp();
        return this._IndexExpression;
    }

    public readonly _InstantiationExpression = new Concept(this._language, "InstantiationExpression", "kerml-InstantiationExpression", "kerml-InstantiationExpression", true);
    get InstantiationExpression(): Concept {
        this.ensureWiredUp();
        return this._InstantiationExpression;
    }
    private readonly _InstantiationExpression_argument = new Containment(this._InstantiationExpression, "argument", "kerml-InstantiationExpression-argument", "kerml-InstantiationExpression-argument").isMultiple();
    get InstantiationExpression_argument(): Containment {
        this.ensureWiredUp();
        return this._InstantiationExpression_argument;
    }
    private readonly _InstantiationExpression_instantiatedType = new Containment(this._InstantiationExpression, "instantiatedType", "kerml-InstantiationExpression-instantiatedType", "kerml-InstantiationExpression-instantiatedType").isMultiple();
    get InstantiationExpression_instantiatedType(): Containment {
        this.ensureWiredUp();
        return this._InstantiationExpression_instantiatedType;
    }

    public readonly _Interaction = new Concept(this._language, "Interaction", "kerml-Interaction", "kerml-Interaction", false);
    get Interaction(): Concept {
        this.ensureWiredUp();
        return this._Interaction;
    }

    public readonly _Intersecting = new Concept(this._language, "Intersecting", "kerml-Intersecting", "kerml-Intersecting", false);
    get Intersecting(): Concept {
        this.ensureWiredUp();
        return this._Intersecting;
    }
    private readonly _Intersecting_intersectingType = new Containment(this._Intersecting, "intersectingType", "kerml-Intersecting-intersectingType", "kerml-Intersecting-intersectingType").isMultiple();
    get Intersecting_intersectingType(): Containment {
        this.ensureWiredUp();
        return this._Intersecting_intersectingType;
    }
    private readonly _Intersecting_typeIntersected = new Containment(this._Intersecting, "typeIntersected", "kerml-Intersecting-typeIntersected", "kerml-Intersecting-typeIntersected").isMultiple();
    get Intersecting_typeIntersected(): Containment {
        this.ensureWiredUp();
        return this._Intersecting_typeIntersected;
    }

    public readonly _Invariant = new Concept(this._language, "Invariant", "kerml-Invariant", "kerml-Invariant", false);
    get Invariant(): Concept {
        this.ensureWiredUp();
        return this._Invariant;
    }
    private readonly _Invariant_isNegated = new Property(this._Invariant, "isNegated", "kerml-Invariant-isNegated", "kerml-Invariant-isNegated");
    get Invariant_isNegated(): Property {
        this.ensureWiredUp();
        return this._Invariant_isNegated;
    }

    public readonly _InvocationExpression = new Concept(this._language, "InvocationExpression", "kerml-InvocationExpression", "kerml-InvocationExpression", false);
    get InvocationExpression(): Concept {
        this.ensureWiredUp();
        return this._InvocationExpression;
    }

    public readonly _LibraryPackage = new Concept(this._language, "LibraryPackage", "kerml-LibraryPackage", "kerml-LibraryPackage", false);
    get LibraryPackage(): Concept {
        this.ensureWiredUp();
        return this._LibraryPackage;
    }
    private readonly _LibraryPackage_isStandard = new Property(this._LibraryPackage, "isStandard", "kerml-LibraryPackage-isStandard", "kerml-LibraryPackage-isStandard");
    get LibraryPackage_isStandard(): Property {
        this.ensureWiredUp();
        return this._LibraryPackage_isStandard;
    }

    public readonly _LiteralBoolean = new Concept(this._language, "LiteralBoolean", "kerml-LiteralBoolean", "kerml-LiteralBoolean", false);
    get LiteralBoolean(): Concept {
        this.ensureWiredUp();
        return this._LiteralBoolean;
    }
    private readonly _LiteralBoolean_value = new Property(this._LiteralBoolean, "value", "kerml-LiteralBoolean-value", "kerml-LiteralBoolean-value");
    get LiteralBoolean_value(): Property {
        this.ensureWiredUp();
        return this._LiteralBoolean_value;
    }

    public readonly _LiteralExpression = new Concept(this._language, "LiteralExpression", "kerml-LiteralExpression", "kerml-LiteralExpression", false);
    get LiteralExpression(): Concept {
        this.ensureWiredUp();
        return this._LiteralExpression;
    }

    public readonly _LiteralInfinity = new Concept(this._language, "LiteralInfinity", "kerml-LiteralInfinity", "kerml-LiteralInfinity", false);
    get LiteralInfinity(): Concept {
        this.ensureWiredUp();
        return this._LiteralInfinity;
    }

    public readonly _LiteralInteger = new Concept(this._language, "LiteralInteger", "kerml-LiteralInteger", "kerml-LiteralInteger", false);
    get LiteralInteger(): Concept {
        this.ensureWiredUp();
        return this._LiteralInteger;
    }
    private readonly _LiteralInteger_value = new Property(this._LiteralInteger, "value", "kerml-LiteralInteger-value", "kerml-LiteralInteger-value");
    get LiteralInteger_value(): Property {
        this.ensureWiredUp();
        return this._LiteralInteger_value;
    }

    public readonly _LiteralRational = new Concept(this._language, "LiteralRational", "kerml-LiteralRational", "kerml-LiteralRational", false);
    get LiteralRational(): Concept {
        this.ensureWiredUp();
        return this._LiteralRational;
    }
    private readonly _LiteralRational_value = new Property(this._LiteralRational, "value", "kerml-LiteralRational-value", "kerml-LiteralRational-value");
    get LiteralRational_value(): Property {
        this.ensureWiredUp();
        return this._LiteralRational_value;
    }

    public readonly _LiteralString = new Concept(this._language, "LiteralString", "kerml-LiteralString", "kerml-LiteralString", false);
    get LiteralString(): Concept {
        this.ensureWiredUp();
        return this._LiteralString;
    }
    private readonly _LiteralString_value = new Property(this._LiteralString, "value", "kerml-LiteralString-value", "kerml-LiteralString-value");
    get LiteralString_value(): Property {
        this.ensureWiredUp();
        return this._LiteralString_value;
    }

    public readonly _Membership = new Concept(this._language, "Membership", "kerml-Membership", "kerml-Membership", false);
    get Membership(): Concept {
        this.ensureWiredUp();
        return this._Membership;
    }
    private readonly _Membership_membershipOwningNamespace = new Containment(this._Membership, "membershipOwningNamespace", "kerml-Membership-membershipOwningNamespace", "kerml-Membership-membershipOwningNamespace").isMultiple();
    get Membership_membershipOwningNamespace(): Containment {
        this.ensureWiredUp();
        return this._Membership_membershipOwningNamespace;
    }
    private readonly _Membership_memberElementId = new Property(this._Membership, "memberElementId", "kerml-Membership-memberElementId", "kerml-Membership-memberElementId");
    get Membership_memberElementId(): Property {
        this.ensureWiredUp();
        return this._Membership_memberElementId;
    }
    private readonly _Membership_memberShortName = new Property(this._Membership, "memberShortName", "kerml-Membership-memberShortName", "kerml-Membership-memberShortName");
    get Membership_memberShortName(): Property {
        this.ensureWiredUp();
        return this._Membership_memberShortName;
    }
    private readonly _Membership_memberElement = new Containment(this._Membership, "memberElement", "kerml-Membership-memberElement", "kerml-Membership-memberElement").isMultiple();
    get Membership_memberElement(): Containment {
        this.ensureWiredUp();
        return this._Membership_memberElement;
    }
    private readonly _Membership_memberName = new Property(this._Membership, "memberName", "kerml-Membership-memberName", "kerml-Membership-memberName");
    get Membership_memberName(): Property {
        this.ensureWiredUp();
        return this._Membership_memberName;
    }
    private readonly _Membership_visibility = new Property(this._Membership, "visibility", "kerml-Membership-visibility", "kerml-Membership-visibility");
    get Membership_visibility(): Property {
        this.ensureWiredUp();
        return this._Membership_visibility;
    }

    public readonly _MembershipImport = new Concept(this._language, "MembershipImport", "kerml-MembershipImport", "kerml-MembershipImport", false);
    get MembershipImport(): Concept {
        this.ensureWiredUp();
        return this._MembershipImport;
    }
    private readonly _MembershipImport_importedMembership = new Containment(this._MembershipImport, "importedMembership", "kerml-MembershipImport-importedMembership", "kerml-MembershipImport-importedMembership").isMultiple();
    get MembershipImport_importedMembership(): Containment {
        this.ensureWiredUp();
        return this._MembershipImport_importedMembership;
    }

    public readonly _Metaclass = new Concept(this._language, "Metaclass", "kerml-Metaclass", "kerml-Metaclass", false);
    get Metaclass(): Concept {
        this.ensureWiredUp();
        return this._Metaclass;
    }

    public readonly _MetadataAccessExpression = new Concept(this._language, "MetadataAccessExpression", "kerml-MetadataAccessExpression", "kerml-MetadataAccessExpression", false);
    get MetadataAccessExpression(): Concept {
        this.ensureWiredUp();
        return this._MetadataAccessExpression;
    }
    private readonly _MetadataAccessExpression_referencedElement = new Containment(this._MetadataAccessExpression, "referencedElement", "kerml-MetadataAccessExpression-referencedElement", "kerml-MetadataAccessExpression-referencedElement").isMultiple();
    get MetadataAccessExpression_referencedElement(): Containment {
        this.ensureWiredUp();
        return this._MetadataAccessExpression_referencedElement;
    }

    public readonly _MetadataFeature = new Concept(this._language, "MetadataFeature", "kerml-MetadataFeature", "kerml-MetadataFeature", false);
    get MetadataFeature(): Concept {
        this.ensureWiredUp();
        return this._MetadataFeature;
    }
    private readonly _MetadataFeature_metaclass = new Containment(this._MetadataFeature, "metaclass", "kerml-MetadataFeature-metaclass", "kerml-MetadataFeature-metaclass").isMultiple();
    get MetadataFeature_metaclass(): Containment {
        this.ensureWiredUp();
        return this._MetadataFeature_metaclass;
    }

    public readonly _Multiplicity = new Concept(this._language, "Multiplicity", "kerml-Multiplicity", "kerml-Multiplicity", false);
    get Multiplicity(): Concept {
        this.ensureWiredUp();
        return this._Multiplicity;
    }

    public readonly _MultiplicityRange = new Concept(this._language, "MultiplicityRange", "kerml-MultiplicityRange", "kerml-MultiplicityRange", false);
    get MultiplicityRange(): Concept {
        this.ensureWiredUp();
        return this._MultiplicityRange;
    }
    private readonly _MultiplicityRange_lowerBound = new Containment(this._MultiplicityRange, "lowerBound", "kerml-MultiplicityRange-lowerBound", "kerml-MultiplicityRange-lowerBound").isMultiple();
    get MultiplicityRange_lowerBound(): Containment {
        this.ensureWiredUp();
        return this._MultiplicityRange_lowerBound;
    }
    private readonly _MultiplicityRange_upperBound = new Containment(this._MultiplicityRange, "upperBound", "kerml-MultiplicityRange-upperBound", "kerml-MultiplicityRange-upperBound").isMultiple();
    get MultiplicityRange_upperBound(): Containment {
        this.ensureWiredUp();
        return this._MultiplicityRange_upperBound;
    }
    private readonly _MultiplicityRange_bound = new Containment(this._MultiplicityRange, "bound", "kerml-MultiplicityRange-bound", "kerml-MultiplicityRange-bound").isMultiple();
    get MultiplicityRange_bound(): Containment {
        this.ensureWiredUp();
        return this._MultiplicityRange_bound;
    }

    public readonly _Namespace = new Concept(this._language, "Namespace", "kerml-Namespace", "kerml-Namespace", false);
    get Namespace(): Concept {
        this.ensureWiredUp();
        return this._Namespace;
    }
    private readonly _Namespace_membership = new Containment(this._Namespace, "membership", "kerml-Namespace-membership", "kerml-Namespace-membership").isMultiple();
    get Namespace_membership(): Containment {
        this.ensureWiredUp();
        return this._Namespace_membership;
    }
    private readonly _Namespace_ownedImport = new Containment(this._Namespace, "ownedImport", "kerml-Namespace-ownedImport", "kerml-Namespace-ownedImport").isMultiple();
    get Namespace_ownedImport(): Containment {
        this.ensureWiredUp();
        return this._Namespace_ownedImport;
    }
    private readonly _Namespace_member = new Containment(this._Namespace, "member", "kerml-Namespace-member", "kerml-Namespace-member").isMultiple();
    get Namespace_member(): Containment {
        this.ensureWiredUp();
        return this._Namespace_member;
    }
    private readonly _Namespace_ownedMember = new Containment(this._Namespace, "ownedMember", "kerml-Namespace-ownedMember", "kerml-Namespace-ownedMember").isMultiple();
    get Namespace_ownedMember(): Containment {
        this.ensureWiredUp();
        return this._Namespace_ownedMember;
    }
    private readonly _Namespace_ownedMembership = new Containment(this._Namespace, "ownedMembership", "kerml-Namespace-ownedMembership", "kerml-Namespace-ownedMembership").isMultiple();
    get Namespace_ownedMembership(): Containment {
        this.ensureWiredUp();
        return this._Namespace_ownedMembership;
    }
    private readonly _Namespace_importedMembership = new Containment(this._Namespace, "importedMembership", "kerml-Namespace-importedMembership", "kerml-Namespace-importedMembership").isMultiple();
    get Namespace_importedMembership(): Containment {
        this.ensureWiredUp();
        return this._Namespace_importedMembership;
    }

    public readonly _NamespaceImport = new Concept(this._language, "NamespaceImport", "kerml-NamespaceImport", "kerml-NamespaceImport", false);
    get NamespaceImport(): Concept {
        this.ensureWiredUp();
        return this._NamespaceImport;
    }
    private readonly _NamespaceImport_importedNamespace = new Containment(this._NamespaceImport, "importedNamespace", "kerml-NamespaceImport-importedNamespace", "kerml-NamespaceImport-importedNamespace").isMultiple();
    get NamespaceImport_importedNamespace(): Containment {
        this.ensureWiredUp();
        return this._NamespaceImport_importedNamespace;
    }

    public readonly _NullExpression = new Concept(this._language, "NullExpression", "kerml-NullExpression", "kerml-NullExpression", false);
    get NullExpression(): Concept {
        this.ensureWiredUp();
        return this._NullExpression;
    }

    public readonly _OperatorExpression = new Concept(this._language, "OperatorExpression", "kerml-OperatorExpression", "kerml-OperatorExpression", false);
    get OperatorExpression(): Concept {
        this.ensureWiredUp();
        return this._OperatorExpression;
    }
    private readonly _OperatorExpression_operator = new Property(this._OperatorExpression, "operator", "kerml-OperatorExpression-operator", "kerml-OperatorExpression-operator");
    get OperatorExpression_operator(): Property {
        this.ensureWiredUp();
        return this._OperatorExpression_operator;
    }

    public readonly _OwningMembership = new Concept(this._language, "OwningMembership", "kerml-OwningMembership", "kerml-OwningMembership", false);
    get OwningMembership(): Concept {
        this.ensureWiredUp();
        return this._OwningMembership;
    }
    private readonly _OwningMembership_ownedMemberElementId = new Property(this._OwningMembership, "ownedMemberElementId", "kerml-OwningMembership-ownedMemberElementId", "kerml-OwningMembership-ownedMemberElementId");
    get OwningMembership_ownedMemberElementId(): Property {
        this.ensureWiredUp();
        return this._OwningMembership_ownedMemberElementId;
    }
    private readonly _OwningMembership_ownedMemberShortName = new Property(this._OwningMembership, "ownedMemberShortName", "kerml-OwningMembership-ownedMemberShortName", "kerml-OwningMembership-ownedMemberShortName");
    get OwningMembership_ownedMemberShortName(): Property {
        this.ensureWiredUp();
        return this._OwningMembership_ownedMemberShortName;
    }
    private readonly _OwningMembership_ownedMemberName = new Property(this._OwningMembership, "ownedMemberName", "kerml-OwningMembership-ownedMemberName", "kerml-OwningMembership-ownedMemberName");
    get OwningMembership_ownedMemberName(): Property {
        this.ensureWiredUp();
        return this._OwningMembership_ownedMemberName;
    }
    private readonly _OwningMembership_ownedMemberElement = new Containment(this._OwningMembership, "ownedMemberElement", "kerml-OwningMembership-ownedMemberElement", "kerml-OwningMembership-ownedMemberElement").isMultiple();
    get OwningMembership_ownedMemberElement(): Containment {
        this.ensureWiredUp();
        return this._OwningMembership_ownedMemberElement;
    }

    public readonly _Package = new Concept(this._language, "Package", "kerml-Package", "kerml-Package", false);
    get Package(): Concept {
        this.ensureWiredUp();
        return this._Package;
    }
    private readonly _Package_filterCondition = new Containment(this._Package, "filterCondition", "kerml-Package-filterCondition", "kerml-Package-filterCondition").isMultiple();
    get Package_filterCondition(): Containment {
        this.ensureWiredUp();
        return this._Package_filterCondition;
    }

    public readonly _ParameterMembership = new Concept(this._language, "ParameterMembership", "kerml-ParameterMembership", "kerml-ParameterMembership", false);
    get ParameterMembership(): Concept {
        this.ensureWiredUp();
        return this._ParameterMembership;
    }
    private readonly _ParameterMembership_ownedMemberParameter = new Containment(this._ParameterMembership, "ownedMemberParameter", "kerml-ParameterMembership-ownedMemberParameter", "kerml-ParameterMembership-ownedMemberParameter").isMultiple();
    get ParameterMembership_ownedMemberParameter(): Containment {
        this.ensureWiredUp();
        return this._ParameterMembership_ownedMemberParameter;
    }

    public readonly _PayloadFeature = new Concept(this._language, "PayloadFeature", "kerml-PayloadFeature", "kerml-PayloadFeature", false);
    get PayloadFeature(): Concept {
        this.ensureWiredUp();
        return this._PayloadFeature;
    }

    public readonly _Predicate = new Concept(this._language, "Predicate", "kerml-Predicate", "kerml-Predicate", false);
    get Predicate(): Concept {
        this.ensureWiredUp();
        return this._Predicate;
    }

    public readonly _Redefinition = new Concept(this._language, "Redefinition", "kerml-Redefinition", "kerml-Redefinition", false);
    get Redefinition(): Concept {
        this.ensureWiredUp();
        return this._Redefinition;
    }
    private readonly _Redefinition_redefiningFeature = new Containment(this._Redefinition, "redefiningFeature", "kerml-Redefinition-redefiningFeature", "kerml-Redefinition-redefiningFeature").isMultiple();
    get Redefinition_redefiningFeature(): Containment {
        this.ensureWiredUp();
        return this._Redefinition_redefiningFeature;
    }
    private readonly _Redefinition_redefinedFeature = new Containment(this._Redefinition, "redefinedFeature", "kerml-Redefinition-redefinedFeature", "kerml-Redefinition-redefinedFeature").isMultiple();
    get Redefinition_redefinedFeature(): Containment {
        this.ensureWiredUp();
        return this._Redefinition_redefinedFeature;
    }

    public readonly _ReferenceSubsetting = new Concept(this._language, "ReferenceSubsetting", "kerml-ReferenceSubsetting", "kerml-ReferenceSubsetting", false);
    get ReferenceSubsetting(): Concept {
        this.ensureWiredUp();
        return this._ReferenceSubsetting;
    }
    private readonly _ReferenceSubsetting_referencedFeature = new Containment(this._ReferenceSubsetting, "referencedFeature", "kerml-ReferenceSubsetting-referencedFeature", "kerml-ReferenceSubsetting-referencedFeature").isMultiple();
    get ReferenceSubsetting_referencedFeature(): Containment {
        this.ensureWiredUp();
        return this._ReferenceSubsetting_referencedFeature;
    }
    private readonly _ReferenceSubsetting_referencingFeature = new Containment(this._ReferenceSubsetting, "referencingFeature", "kerml-ReferenceSubsetting-referencingFeature", "kerml-ReferenceSubsetting-referencingFeature").isMultiple();
    get ReferenceSubsetting_referencingFeature(): Containment {
        this.ensureWiredUp();
        return this._ReferenceSubsetting_referencingFeature;
    }

    public readonly _Relationship = new Concept(this._language, "Relationship", "kerml-Relationship", "kerml-Relationship", true);
    get Relationship(): Concept {
        this.ensureWiredUp();
        return this._Relationship;
    }
    private readonly _Relationship_relatedElement = new Containment(this._Relationship, "relatedElement", "kerml-Relationship-relatedElement", "kerml-Relationship-relatedElement").isMultiple();
    get Relationship_relatedElement(): Containment {
        this.ensureWiredUp();
        return this._Relationship_relatedElement;
    }
    private readonly _Relationship_target = new Containment(this._Relationship, "target", "kerml-Relationship-target", "kerml-Relationship-target").isMultiple();
    get Relationship_target(): Containment {
        this.ensureWiredUp();
        return this._Relationship_target;
    }
    private readonly _Relationship_source = new Containment(this._Relationship, "source", "kerml-Relationship-source", "kerml-Relationship-source").isMultiple();
    get Relationship_source(): Containment {
        this.ensureWiredUp();
        return this._Relationship_source;
    }
    private readonly _Relationship_owningRelatedElement = new Containment(this._Relationship, "owningRelatedElement", "kerml-Relationship-owningRelatedElement", "kerml-Relationship-owningRelatedElement").isMultiple();
    get Relationship_owningRelatedElement(): Containment {
        this.ensureWiredUp();
        return this._Relationship_owningRelatedElement;
    }
    private readonly _Relationship_ownedRelatedElement = new Containment(this._Relationship, "ownedRelatedElement", "kerml-Relationship-ownedRelatedElement", "kerml-Relationship-ownedRelatedElement").isMultiple();
    get Relationship_ownedRelatedElement(): Containment {
        this.ensureWiredUp();
        return this._Relationship_ownedRelatedElement;
    }
    private readonly _Relationship_isImplied = new Property(this._Relationship, "isImplied", "kerml-Relationship-isImplied", "kerml-Relationship-isImplied");
    get Relationship_isImplied(): Property {
        this.ensureWiredUp();
        return this._Relationship_isImplied;
    }

    public readonly _ResultExpressionMembership = new Concept(this._language, "ResultExpressionMembership", "kerml-ResultExpressionMembership", "kerml-ResultExpressionMembership", false);
    get ResultExpressionMembership(): Concept {
        this.ensureWiredUp();
        return this._ResultExpressionMembership;
    }
    private readonly _ResultExpressionMembership_ownedResultExpression = new Containment(this._ResultExpressionMembership, "ownedResultExpression", "kerml-ResultExpressionMembership-ownedResultExpression", "kerml-ResultExpressionMembership-ownedResultExpression").isMultiple();
    get ResultExpressionMembership_ownedResultExpression(): Containment {
        this.ensureWiredUp();
        return this._ResultExpressionMembership_ownedResultExpression;
    }

    public readonly _ReturnParameterMembership = new Concept(this._language, "ReturnParameterMembership", "kerml-ReturnParameterMembership", "kerml-ReturnParameterMembership", false);
    get ReturnParameterMembership(): Concept {
        this.ensureWiredUp();
        return this._ReturnParameterMembership;
    }

    public readonly _SelectExpression = new Concept(this._language, "SelectExpression", "kerml-SelectExpression", "kerml-SelectExpression", false);
    get SelectExpression(): Concept {
        this.ensureWiredUp();
        return this._SelectExpression;
    }

    public readonly _Specialization = new Concept(this._language, "Specialization", "kerml-Specialization", "kerml-Specialization", false);
    get Specialization(): Concept {
        this.ensureWiredUp();
        return this._Specialization;
    }
    private readonly _Specialization_owningType = new Containment(this._Specialization, "owningType", "kerml-Specialization-owningType", "kerml-Specialization-owningType").isMultiple();
    get Specialization_owningType(): Containment {
        this.ensureWiredUp();
        return this._Specialization_owningType;
    }
    private readonly _Specialization_general = new Containment(this._Specialization, "general", "kerml-Specialization-general", "kerml-Specialization-general").isMultiple();
    get Specialization_general(): Containment {
        this.ensureWiredUp();
        return this._Specialization_general;
    }
    private readonly _Specialization_specific = new Containment(this._Specialization, "specific", "kerml-Specialization-specific", "kerml-Specialization-specific").isMultiple();
    get Specialization_specific(): Containment {
        this.ensureWiredUp();
        return this._Specialization_specific;
    }

    public readonly _Step = new Concept(this._language, "Step", "kerml-Step", "kerml-Step", false);
    get Step(): Concept {
        this.ensureWiredUp();
        return this._Step;
    }
    private readonly _Step_behavior = new Containment(this._Step, "behavior", "kerml-Step-behavior", "kerml-Step-behavior").isMultiple();
    get Step_behavior(): Containment {
        this.ensureWiredUp();
        return this._Step_behavior;
    }
    private readonly _Step_parameter = new Containment(this._Step, "parameter", "kerml-Step-parameter", "kerml-Step-parameter").isMultiple();
    get Step_parameter(): Containment {
        this.ensureWiredUp();
        return this._Step_parameter;
    }

    public readonly _Structure = new Concept(this._language, "Structure", "kerml-Structure", "kerml-Structure", false);
    get Structure(): Concept {
        this.ensureWiredUp();
        return this._Structure;
    }

    public readonly _Subclassification = new Concept(this._language, "Subclassification", "kerml-Subclassification", "kerml-Subclassification", false);
    get Subclassification(): Concept {
        this.ensureWiredUp();
        return this._Subclassification;
    }
    private readonly _Subclassification_superclassifier = new Containment(this._Subclassification, "superclassifier", "kerml-Subclassification-superclassifier", "kerml-Subclassification-superclassifier").isMultiple();
    get Subclassification_superclassifier(): Containment {
        this.ensureWiredUp();
        return this._Subclassification_superclassifier;
    }
    private readonly _Subclassification_subclassifier = new Containment(this._Subclassification, "subclassifier", "kerml-Subclassification-subclassifier", "kerml-Subclassification-subclassifier").isMultiple();
    get Subclassification_subclassifier(): Containment {
        this.ensureWiredUp();
        return this._Subclassification_subclassifier;
    }
    private readonly _Subclassification_owningClassifier = new Containment(this._Subclassification, "owningClassifier", "kerml-Subclassification-owningClassifier", "kerml-Subclassification-owningClassifier").isMultiple();
    get Subclassification_owningClassifier(): Containment {
        this.ensureWiredUp();
        return this._Subclassification_owningClassifier;
    }

    public readonly _Subsetting = new Concept(this._language, "Subsetting", "kerml-Subsetting", "kerml-Subsetting", false);
    get Subsetting(): Concept {
        this.ensureWiredUp();
        return this._Subsetting;
    }
    private readonly _Subsetting_owningFeature = new Containment(this._Subsetting, "owningFeature", "kerml-Subsetting-owningFeature", "kerml-Subsetting-owningFeature").isMultiple();
    get Subsetting_owningFeature(): Containment {
        this.ensureWiredUp();
        return this._Subsetting_owningFeature;
    }
    private readonly _Subsetting_subsettedFeature = new Containment(this._Subsetting, "subsettedFeature", "kerml-Subsetting-subsettedFeature", "kerml-Subsetting-subsettedFeature").isMultiple();
    get Subsetting_subsettedFeature(): Containment {
        this.ensureWiredUp();
        return this._Subsetting_subsettedFeature;
    }
    private readonly _Subsetting_subsettingFeature = new Containment(this._Subsetting, "subsettingFeature", "kerml-Subsetting-subsettingFeature", "kerml-Subsetting-subsettingFeature").isMultiple();
    get Subsetting_subsettingFeature(): Containment {
        this.ensureWiredUp();
        return this._Subsetting_subsettingFeature;
    }

    public readonly _Succession = new Concept(this._language, "Succession", "kerml-Succession", "kerml-Succession", false);
    get Succession(): Concept {
        this.ensureWiredUp();
        return this._Succession;
    }

    public readonly _SuccessionFlow = new Concept(this._language, "SuccessionFlow", "kerml-SuccessionFlow", "kerml-SuccessionFlow", false);
    get SuccessionFlow(): Concept {
        this.ensureWiredUp();
        return this._SuccessionFlow;
    }

    public readonly _TextualRepresentation = new Concept(this._language, "TextualRepresentation", "kerml-TextualRepresentation", "kerml-TextualRepresentation", false);
    get TextualRepresentation(): Concept {
        this.ensureWiredUp();
        return this._TextualRepresentation;
    }
    private readonly _TextualRepresentation_representedElement = new Containment(this._TextualRepresentation, "representedElement", "kerml-TextualRepresentation-representedElement", "kerml-TextualRepresentation-representedElement").isMultiple();
    get TextualRepresentation_representedElement(): Containment {
        this.ensureWiredUp();
        return this._TextualRepresentation_representedElement;
    }
    private readonly _TextualRepresentation_language = new Property(this._TextualRepresentation, "language", "kerml-TextualRepresentation-language", "kerml-TextualRepresentation-language");
    get TextualRepresentation_language(): Property {
        this.ensureWiredUp();
        return this._TextualRepresentation_language;
    }
    private readonly _TextualRepresentation_body = new Property(this._TextualRepresentation, "body", "kerml-TextualRepresentation-body", "kerml-TextualRepresentation-body");
    get TextualRepresentation_body(): Property {
        this.ensureWiredUp();
        return this._TextualRepresentation_body;
    }

    public readonly _Type = new Concept(this._language, "Type", "kerml-Type", "kerml-Type", false);
    get Type(): Concept {
        this.ensureWiredUp();
        return this._Type;
    }
    private readonly _Type_ownedFeatureMembership = new Containment(this._Type, "ownedFeatureMembership", "kerml-Type-ownedFeatureMembership", "kerml-Type-ownedFeatureMembership").isMultiple();
    get Type_ownedFeatureMembership(): Containment {
        this.ensureWiredUp();
        return this._Type_ownedFeatureMembership;
    }
    private readonly _Type_ownedFeature = new Containment(this._Type, "ownedFeature", "kerml-Type-ownedFeature", "kerml-Type-ownedFeature").isMultiple();
    get Type_ownedFeature(): Containment {
        this.ensureWiredUp();
        return this._Type_ownedFeature;
    }
    private readonly _Type_ownedEndFeature = new Containment(this._Type, "ownedEndFeature", "kerml-Type-ownedEndFeature", "kerml-Type-ownedEndFeature").isMultiple();
    get Type_ownedEndFeature(): Containment {
        this.ensureWiredUp();
        return this._Type_ownedEndFeature;
    }
    private readonly _Type_feature = new Containment(this._Type, "feature", "kerml-Type-feature", "kerml-Type-feature").isMultiple();
    get Type_feature(): Containment {
        this.ensureWiredUp();
        return this._Type_feature;
    }
    private readonly _Type_input = new Containment(this._Type, "input", "kerml-Type-input", "kerml-Type-input").isMultiple();
    get Type_input(): Containment {
        this.ensureWiredUp();
        return this._Type_input;
    }
    private readonly _Type_output = new Containment(this._Type, "output", "kerml-Type-output", "kerml-Type-output").isMultiple();
    get Type_output(): Containment {
        this.ensureWiredUp();
        return this._Type_output;
    }
    private readonly _Type_isAbstract = new Property(this._Type, "isAbstract", "kerml-Type-isAbstract", "kerml-Type-isAbstract");
    get Type_isAbstract(): Property {
        this.ensureWiredUp();
        return this._Type_isAbstract;
    }
    private readonly _Type_inheritedMembership = new Containment(this._Type, "inheritedMembership", "kerml-Type-inheritedMembership", "kerml-Type-inheritedMembership").isMultiple();
    get Type_inheritedMembership(): Containment {
        this.ensureWiredUp();
        return this._Type_inheritedMembership;
    }
    private readonly _Type_endFeature = new Containment(this._Type, "endFeature", "kerml-Type-endFeature", "kerml-Type-endFeature").isMultiple();
    get Type_endFeature(): Containment {
        this.ensureWiredUp();
        return this._Type_endFeature;
    }
    private readonly _Type_isSufficient = new Property(this._Type, "isSufficient", "kerml-Type-isSufficient", "kerml-Type-isSufficient");
    get Type_isSufficient(): Property {
        this.ensureWiredUp();
        return this._Type_isSufficient;
    }
    private readonly _Type_ownedConjugator = new Containment(this._Type, "ownedConjugator", "kerml-Type-ownedConjugator", "kerml-Type-ownedConjugator").isMultiple();
    get Type_ownedConjugator(): Containment {
        this.ensureWiredUp();
        return this._Type_ownedConjugator;
    }
    private readonly _Type_isConjugated = new Property(this._Type, "isConjugated", "kerml-Type-isConjugated", "kerml-Type-isConjugated");
    get Type_isConjugated(): Property {
        this.ensureWiredUp();
        return this._Type_isConjugated;
    }
    private readonly _Type_inheritedFeature = new Containment(this._Type, "inheritedFeature", "kerml-Type-inheritedFeature", "kerml-Type-inheritedFeature").isMultiple();
    get Type_inheritedFeature(): Containment {
        this.ensureWiredUp();
        return this._Type_inheritedFeature;
    }
    private readonly _Type_multiplicity = new Containment(this._Type, "multiplicity", "kerml-Type-multiplicity", "kerml-Type-multiplicity").isMultiple();
    get Type_multiplicity(): Containment {
        this.ensureWiredUp();
        return this._Type_multiplicity;
    }
    private readonly _Type_unioningType = new Containment(this._Type, "unioningType", "kerml-Type-unioningType", "kerml-Type-unioningType").isMultiple();
    get Type_unioningType(): Containment {
        this.ensureWiredUp();
        return this._Type_unioningType;
    }
    private readonly _Type_ownedIntersecting = new Containment(this._Type, "ownedIntersecting", "kerml-Type-ownedIntersecting", "kerml-Type-ownedIntersecting").isMultiple();
    get Type_ownedIntersecting(): Containment {
        this.ensureWiredUp();
        return this._Type_ownedIntersecting;
    }
    private readonly _Type_intersectingType = new Containment(this._Type, "intersectingType", "kerml-Type-intersectingType", "kerml-Type-intersectingType").isMultiple();
    get Type_intersectingType(): Containment {
        this.ensureWiredUp();
        return this._Type_intersectingType;
    }
    private readonly _Type_ownedUnioning = new Containment(this._Type, "ownedUnioning", "kerml-Type-ownedUnioning", "kerml-Type-ownedUnioning").isMultiple();
    get Type_ownedUnioning(): Containment {
        this.ensureWiredUp();
        return this._Type_ownedUnioning;
    }
    private readonly _Type_ownedDisjoining = new Containment(this._Type, "ownedDisjoining", "kerml-Type-ownedDisjoining", "kerml-Type-ownedDisjoining").isMultiple();
    get Type_ownedDisjoining(): Containment {
        this.ensureWiredUp();
        return this._Type_ownedDisjoining;
    }
    private readonly _Type_featureMembership = new Containment(this._Type, "featureMembership", "kerml-Type-featureMembership", "kerml-Type-featureMembership").isMultiple();
    get Type_featureMembership(): Containment {
        this.ensureWiredUp();
        return this._Type_featureMembership;
    }
    private readonly _Type_differencingType = new Containment(this._Type, "differencingType", "kerml-Type-differencingType", "kerml-Type-differencingType").isMultiple();
    get Type_differencingType(): Containment {
        this.ensureWiredUp();
        return this._Type_differencingType;
    }
    private readonly _Type_ownedDifferencing = new Containment(this._Type, "ownedDifferencing", "kerml-Type-ownedDifferencing", "kerml-Type-ownedDifferencing").isMultiple();
    get Type_ownedDifferencing(): Containment {
        this.ensureWiredUp();
        return this._Type_ownedDifferencing;
    }
    private readonly _Type_directedFeature = new Containment(this._Type, "directedFeature", "kerml-Type-directedFeature", "kerml-Type-directedFeature").isMultiple();
    get Type_directedFeature(): Containment {
        this.ensureWiredUp();
        return this._Type_directedFeature;
    }
    private readonly _Type_ownedSpecialization = new Containment(this._Type, "ownedSpecialization", "kerml-Type-ownedSpecialization", "kerml-Type-ownedSpecialization").isMultiple();
    get Type_ownedSpecialization(): Containment {
        this.ensureWiredUp();
        return this._Type_ownedSpecialization;
    }

    public readonly _TypeFeaturing = new Concept(this._language, "TypeFeaturing", "kerml-TypeFeaturing", "kerml-TypeFeaturing", false);
    get TypeFeaturing(): Concept {
        this.ensureWiredUp();
        return this._TypeFeaturing;
    }
    private readonly _TypeFeaturing_featureOfType = new Containment(this._TypeFeaturing, "featureOfType", "kerml-TypeFeaturing-featureOfType", "kerml-TypeFeaturing-featureOfType").isMultiple();
    get TypeFeaturing_featureOfType(): Containment {
        this.ensureWiredUp();
        return this._TypeFeaturing_featureOfType;
    }
    private readonly _TypeFeaturing_featuringType = new Containment(this._TypeFeaturing, "featuringType", "kerml-TypeFeaturing-featuringType", "kerml-TypeFeaturing-featuringType").isMultiple();
    get TypeFeaturing_featuringType(): Containment {
        this.ensureWiredUp();
        return this._TypeFeaturing_featuringType;
    }
    private readonly _TypeFeaturing_owningFeatureOfType = new Containment(this._TypeFeaturing, "owningFeatureOfType", "kerml-TypeFeaturing-owningFeatureOfType", "kerml-TypeFeaturing-owningFeatureOfType").isMultiple();
    get TypeFeaturing_owningFeatureOfType(): Containment {
        this.ensureWiredUp();
        return this._TypeFeaturing_owningFeatureOfType;
    }

    public readonly _Unioning = new Concept(this._language, "Unioning", "kerml-Unioning", "kerml-Unioning", false);
    get Unioning(): Concept {
        this.ensureWiredUp();
        return this._Unioning;
    }
    private readonly _Unioning_unioningType = new Containment(this._Unioning, "unioningType", "kerml-Unioning-unioningType", "kerml-Unioning-unioningType").isMultiple();
    get Unioning_unioningType(): Containment {
        this.ensureWiredUp();
        return this._Unioning_unioningType;
    }
    private readonly _Unioning_typeUnioned = new Containment(this._Unioning, "typeUnioned", "kerml-Unioning-typeUnioned", "kerml-Unioning-typeUnioned").isMultiple();
    get Unioning_typeUnioned(): Containment {
        this.ensureWiredUp();
        return this._Unioning_typeUnioned;
    }

    public readonly _VisibilityKind = new Enumeration(this._language, "VisibilityKind", "kerml-VisibilityKind", "kerml-VisibilityKind");
    get VisibilityKind(): Enumeration {
        this.ensureWiredUp();
        return this._VisibilityKind;
    }
    private readonly _VisibilityKind_private = new EnumerationLiteral(this._VisibilityKind, "private", "kerml-VisibilityKind-private", "kerml-VisibilityKind-private");
    get VisibilityKind_private(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._VisibilityKind_private;
    }
    private readonly _VisibilityKind_protected = new EnumerationLiteral(this._VisibilityKind, "protected", "kerml-VisibilityKind-protected", "kerml-VisibilityKind-protected");
    get VisibilityKind_protected(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._VisibilityKind_protected;
    }
    private readonly _VisibilityKind_public = new EnumerationLiteral(this._VisibilityKind, "public", "kerml-VisibilityKind-public", "kerml-VisibilityKind-public");
    get VisibilityKind_public(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._VisibilityKind_public;
    }

    private _wiredUp: boolean = false;
    private ensureWiredUp() {
        if (this._wiredUp) {
            return;
        }
        this._language.havingEntities(this._AnnotatingElement, this._Annotation, this._Association, this._AssociationStructure, this._Behavior, this._BindingConnector, this._BooleanExpression, this._Class, this._kermlClassifier, this._CollectExpression, this._Comment, this._Conjugation, this._Connector, this._ConstructorExpression, this._CrossSubsetting, this._DataType, this._Dependency, this._Differencing, this._Disjoining, this._Documentation, this._Element, this._ElementFilterMembership, this._EndFeatureMembership, this._Expression, this._Feature, this._FeatureChainExpression, this._FeatureChaining, this._FeatureDirectionKind, this._FeatureInverting, this._FeatureMembership, this._FeatureReferenceExpression, this._FeatureTyping, this._FeatureValue, this._Flow, this._FlowEnd, this._Function, this._Import, this._IndexExpression, this._InstantiationExpression, this._Interaction, this._Intersecting, this._Invariant, this._InvocationExpression, this._LibraryPackage, this._LiteralBoolean, this._LiteralExpression, this._LiteralInfinity, this._LiteralInteger, this._LiteralRational, this._LiteralString, this._Membership, this._MembershipImport, this._Metaclass, this._MetadataAccessExpression, this._MetadataFeature, this._Multiplicity, this._MultiplicityRange, this._Namespace, this._NamespaceImport, this._NullExpression, this._OperatorExpression, this._OwningMembership, this._Package, this._ParameterMembership, this._PayloadFeature, this._Predicate, this._Redefinition, this._ReferenceSubsetting, this._Relationship, this._ResultExpressionMembership, this._ReturnParameterMembership, this._SelectExpression, this._Specialization, this._Step, this._Structure, this._Subclassification, this._Subsetting, this._Succession, this._SuccessionFlow, this._TextualRepresentation, this._Type, this._TypeFeaturing, this._Unioning, this._VisibilityKind);
        this._AnnotatingElement.extends = this._Element;
        this._AnnotatingElement.havingFeatures(this._AnnotatingElement_annotation, this._AnnotatingElement_ownedAnnotatingRelationship, this._AnnotatingElement_owningAnnotatingRelationship, this._AnnotatingElement_annotatedElement);
        this._AnnotatingElement_annotation.ofType(this._Annotation);
        this._AnnotatingElement_ownedAnnotatingRelationship.ofType(this._Annotation);
        this._AnnotatingElement_owningAnnotatingRelationship.ofType(this._Annotation);
        this._AnnotatingElement_annotatedElement.ofType(this._Element);
        this._Annotation.extends = this._Relationship;
        this._Annotation.havingFeatures(this._Annotation_annotatingElement, this._Annotation_annotatedElement, this._Annotation_owningAnnotatingElement, this._Annotation_ownedAnnotatingElement, this._Annotation_owningAnnotatedElement);
        this._Annotation_annotatingElement.ofType(this._AnnotatingElement);
        this._Annotation_annotatedElement.ofType(this._Element);
        this._Annotation_owningAnnotatingElement.ofType(this._AnnotatingElement);
        this._Annotation_ownedAnnotatingElement.ofType(this._AnnotatingElement);
        this._Annotation_owningAnnotatedElement.ofType(this._Element);
        this._Association.extends = this._kermlClassifier;
        this._Association.havingFeatures(this._Association_relatedType, this._Association_sourceType, this._Association_targetType, this._Association_associationEnd);
        this._Association_relatedType.ofType(this._Type);
        this._Association_sourceType.ofType(this._Type);
        this._Association_targetType.ofType(this._Type);
        this._Association_associationEnd.ofType(this._Feature);
        this._AssociationStructure.extends = this._Association;
        this._Behavior.extends = this._Class;
        this._Behavior.havingFeatures(this._Behavior_step, this._Behavior_parameter);
        this._Behavior_step.ofType(this._Step);
        this._Behavior_parameter.ofType(this._Feature);
        this._BindingConnector.extends = this._Connector;
        this._BooleanExpression.extends = this._Expression;
        this._BooleanExpression.havingFeatures(this._BooleanExpression_predicate);
        this._BooleanExpression_predicate.ofType(this._Predicate);
        this._Class.extends = this._kermlClassifier;
        this._kermlClassifier.extends = this._Type;
        this._kermlClassifier.havingFeatures(this._kermlClassifier_ownedSubclassification);
        this._kermlClassifier_ownedSubclassification.ofType(this._Subclassification);
        this._CollectExpression.extends = this._OperatorExpression;
        this._Comment.extends = this._AnnotatingElement;
        this._Comment.havingFeatures(this._Comment_locale, this._Comment_body);
        this._Comment_locale.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Comment_body.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Conjugation.extends = this._Relationship;
        this._Conjugation.havingFeatures(this._Conjugation_originalType, this._Conjugation_conjugatedType, this._Conjugation_owningType);
        this._Conjugation_originalType.ofType(this._Type);
        this._Conjugation_conjugatedType.ofType(this._Type);
        this._Conjugation_owningType.ofType(this._Type);
        this._Connector.extends = this._Feature;
        this._Connector.havingFeatures(this._Connector_relatedFeature, this._Connector_association, this._Connector_connectorEnd, this._Connector_sourceFeature, this._Connector_targetFeature, this._Connector_defaultFeaturingType);
        this._Connector_relatedFeature.ofType(this._Feature);
        this._Connector_association.ofType(this._Association);
        this._Connector_connectorEnd.ofType(this._Feature);
        this._Connector_sourceFeature.ofType(this._Feature);
        this._Connector_targetFeature.ofType(this._Feature);
        this._Connector_defaultFeaturingType.ofType(this._Type);
        this._ConstructorExpression.extends = this._InstantiationExpression;
        this._CrossSubsetting.extends = this._Subsetting;
        this._CrossSubsetting.havingFeatures(this._CrossSubsetting_crossingFeature, this._CrossSubsetting_crossedFeature);
        this._CrossSubsetting_crossingFeature.ofType(this._Feature);
        this._CrossSubsetting_crossedFeature.ofType(this._Feature);
        this._DataType.extends = this._kermlClassifier;
        this._Dependency.extends = this._Relationship;
        this._Dependency.havingFeatures(this._Dependency_client, this._Dependency_supplier);
        this._Dependency_client.ofType(this._Element);
        this._Dependency_supplier.ofType(this._Element);
        this._Differencing.extends = this._Relationship;
        this._Differencing.havingFeatures(this._Differencing_differencingType, this._Differencing_typeDifferenced);
        this._Differencing_differencingType.ofType(this._Type);
        this._Differencing_typeDifferenced.ofType(this._Type);
        this._Disjoining.extends = this._Relationship;
        this._Disjoining.havingFeatures(this._Disjoining_typeDisjoined, this._Disjoining_disjoiningType, this._Disjoining_owningType);
        this._Disjoining_typeDisjoined.ofType(this._Type);
        this._Disjoining_disjoiningType.ofType(this._Type);
        this._Disjoining_owningType.ofType(this._Type);
        this._Documentation.extends = this._Comment;
        this._Documentation.havingFeatures(this._Documentation_documentedElement);
        this._Documentation_documentedElement.ofType(this._Element);
        this._Element.havingFeatures(this._Element_owningMembership, this._Element_ownedRelationship, this._Element_owningRelationship, this._Element_owningNamespace, this._Element_elementId, this._Element_owner, this._Element_ownedElement, this._Element_documentation, this._Element_ownedAnnotation, this._Element_textualRepresentation, this._Element_aliasIds, this._Element_declaredShortName, this._Element_declaredName, this._Element_shortName, this._Element_name, this._Element_qualifiedName, this._Element_isImpliedIncluded, this._Element_isLibraryElement);
        this._Element_owningMembership.ofType(this._OwningMembership);
        this._Element_ownedRelationship.ofType(this._Relationship);
        this._Element_owningRelationship.ofType(this._Relationship);
        this._Element_owningNamespace.ofType(this._Namespace);
        this._Element_elementId.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Element_owner.ofType(this._Element);
        this._Element_ownedElement.ofType(this._Element);
        this._Element_documentation.ofType(this._Documentation);
        this._Element_ownedAnnotation.ofType(this._Annotation);
        this._Element_textualRepresentation.ofType(this._TextualRepresentation);
        this._Element_aliasIds.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Element_declaredShortName.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Element_declaredName.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Element_shortName.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Element_name.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Element_qualifiedName.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Element_isImpliedIncluded.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Element_isLibraryElement.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._ElementFilterMembership.extends = this._OwningMembership;
        this._ElementFilterMembership.havingFeatures(this._ElementFilterMembership_condition);
        this._ElementFilterMembership_condition.ofType(this._Expression);
        this._EndFeatureMembership.extends = this._FeatureMembership;
        this._Expression.extends = this._Step;
        this._Expression.havingFeatures(this._Expression_function, this._Expression_result, this._Expression_isModelLevelEvaluable);
        this._Expression_function.ofType(this._Function);
        this._Expression_result.ofType(this._Feature);
        this._Expression_isModelLevelEvaluable.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Feature.extends = this._Type;
        this._Feature.havingFeatures(this._Feature_owningType, this._Feature_isUnique, this._Feature_isOrdered, this._Feature_type, this._Feature_ownedRedefinition, this._Feature_ownedSubsetting, this._Feature_isComposite, this._Feature_isEnd, this._Feature_endOwningType, this._Feature_ownedTyping, this._Feature_featuringType, this._Feature_ownedTypeFeaturing, this._Feature_isDerived, this._Feature_chainingFeature, this._Feature_ownedFeatureInverting, this._Feature_ownedFeatureChaining, this._Feature_isPortion, this._Feature_isVariable, this._Feature_isConstant, this._Feature_ownedReferenceSubsetting, this._Feature_featureTarget, this._Feature_crossFeature, this._Feature_direction, this._Feature_ownedCrossSubsetting, this._Feature_owningFeatureMembership);
        this._Feature_owningType.ofType(this._Type);
        this._Feature_isUnique.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Feature_isOrdered.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Feature_type.ofType(this._Type);
        this._Feature_ownedRedefinition.ofType(this._Redefinition);
        this._Feature_ownedSubsetting.ofType(this._Subsetting);
        this._Feature_isComposite.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Feature_isEnd.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Feature_endOwningType.ofType(this._Type);
        this._Feature_ownedTyping.ofType(this._FeatureTyping);
        this._Feature_featuringType.ofType(this._Type);
        this._Feature_ownedTypeFeaturing.ofType(this._TypeFeaturing);
        this._Feature_isDerived.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Feature_chainingFeature.ofType(this._Feature);
        this._Feature_ownedFeatureInverting.ofType(this._FeatureInverting);
        this._Feature_ownedFeatureChaining.ofType(this._FeatureChaining);
        this._Feature_isPortion.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Feature_isVariable.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Feature_isConstant.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Feature_ownedReferenceSubsetting.ofType(this._ReferenceSubsetting);
        this._Feature_featureTarget.ofType(this._Feature);
        this._Feature_crossFeature.ofType(this._Feature);
        this._Feature_direction.ofType(this._FeatureDirectionKind);
        this._Feature_ownedCrossSubsetting.ofType(this._CrossSubsetting);
        this._Feature_owningFeatureMembership.ofType(this._FeatureMembership);
        this._FeatureChainExpression.extends = this._OperatorExpression;
        this._FeatureChainExpression.havingFeatures(this._FeatureChainExpression_targetFeature);
        this._FeatureChainExpression_targetFeature.ofType(this._Feature);
        this._FeatureChaining.extends = this._Relationship;
        this._FeatureChaining.havingFeatures(this._FeatureChaining_chainingFeature, this._FeatureChaining_featureChained);
        this._FeatureChaining_chainingFeature.ofType(this._Feature);
        this._FeatureChaining_featureChained.ofType(this._Feature);
        this._FeatureDirectionKind.havingLiterals(this._FeatureDirectionKind_in, this._FeatureDirectionKind_inout, this._FeatureDirectionKind_out);
        this._FeatureInverting.extends = this._Relationship;
        this._FeatureInverting.havingFeatures(this._FeatureInverting_featureInverted, this._FeatureInverting_invertingFeature, this._FeatureInverting_owningFeature);
        this._FeatureInverting_featureInverted.ofType(this._Feature);
        this._FeatureInverting_invertingFeature.ofType(this._Feature);
        this._FeatureInverting_owningFeature.ofType(this._Feature);
        this._FeatureMembership.extends = this._OwningMembership;
        this._FeatureMembership.havingFeatures(this._FeatureMembership_ownedMemberFeature, this._FeatureMembership_owningType);
        this._FeatureMembership_ownedMemberFeature.ofType(this._Feature);
        this._FeatureMembership_owningType.ofType(this._Type);
        this._FeatureReferenceExpression.extends = this._Expression;
        this._FeatureReferenceExpression.havingFeatures(this._FeatureReferenceExpression_referent);
        this._FeatureReferenceExpression_referent.ofType(this._Feature);
        this._FeatureTyping.extends = this._Specialization;
        this._FeatureTyping.havingFeatures(this._FeatureTyping_typedFeature, this._FeatureTyping_type, this._FeatureTyping_owningFeature);
        this._FeatureTyping_typedFeature.ofType(this._Feature);
        this._FeatureTyping_type.ofType(this._Type);
        this._FeatureTyping_owningFeature.ofType(this._Feature);
        this._FeatureValue.extends = this._OwningMembership;
        this._FeatureValue.havingFeatures(this._FeatureValue_featureWithValue, this._FeatureValue_value, this._FeatureValue_isInitial, this._FeatureValue_isDefault);
        this._FeatureValue_featureWithValue.ofType(this._Feature);
        this._FeatureValue_value.ofType(this._Expression);
        this._FeatureValue_isInitial.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._FeatureValue_isDefault.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Flow.extends = this._Connector;
        this._Flow.havingFeatures(this._Flow_payloadType, this._Flow_targetInputFeature, this._Flow_sourceOutputFeature, this._Flow_flowEnd, this._Flow_payloadFeature, this._Flow_interaction);
        this._Flow_payloadType.ofType(this._kermlClassifier);
        this._Flow_targetInputFeature.ofType(this._Feature);
        this._Flow_sourceOutputFeature.ofType(this._Feature);
        this._Flow_flowEnd.ofType(this._FlowEnd);
        this._Flow_payloadFeature.ofType(this._PayloadFeature);
        this._Flow_interaction.ofType(this._Interaction);
        this._FlowEnd.extends = this._Feature;
        this._Function.extends = this._Behavior;
        this._Function.havingFeatures(this._Function_expression, this._Function_result, this._Function_isModelLevelEvaluable);
        this._Function_expression.ofType(this._Expression);
        this._Function_result.ofType(this._Feature);
        this._Function_isModelLevelEvaluable.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Import.extends = this._Relationship;
        this._Import.havingFeatures(this._Import_visibility, this._Import_isRecursive, this._Import_isImportAll, this._Import_importedElement, this._Import_importOwningNamespace);
        this._Import_visibility.ofType(this._VisibilityKind);
        this._Import_isRecursive.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Import_isImportAll.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Import_importedElement.ofType(this._Element);
        this._Import_importOwningNamespace.ofType(this._Namespace);
        this._IndexExpression.extends = this._OperatorExpression;
        this._InstantiationExpression.extends = this._Expression;
        this._InstantiationExpression.havingFeatures(this._InstantiationExpression_argument, this._InstantiationExpression_instantiatedType);
        this._InstantiationExpression_argument.ofType(this._Expression);
        this._InstantiationExpression_instantiatedType.ofType(this._Type);
        this._Interaction.extends = this._Association;
        this._Intersecting.extends = this._Relationship;
        this._Intersecting.havingFeatures(this._Intersecting_intersectingType, this._Intersecting_typeIntersected);
        this._Intersecting_intersectingType.ofType(this._Type);
        this._Intersecting_typeIntersected.ofType(this._Type);
        this._Invariant.extends = this._BooleanExpression;
        this._Invariant.havingFeatures(this._Invariant_isNegated);
        this._Invariant_isNegated.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._InvocationExpression.extends = this._InstantiationExpression;
        this._LibraryPackage.extends = this._Package;
        this._LibraryPackage.havingFeatures(this._LibraryPackage_isStandard);
        this._LibraryPackage_isStandard.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._LiteralBoolean.extends = this._LiteralExpression;
        this._LiteralBoolean.havingFeatures(this._LiteralBoolean_value);
        this._LiteralBoolean_value.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._LiteralExpression.extends = this._Expression;
        this._LiteralInfinity.extends = this._LiteralExpression;
        this._LiteralInteger.extends = this._LiteralExpression;
        this._LiteralInteger.havingFeatures(this._LiteralInteger_value);
        this._LiteralInteger_value.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._LiteralRational.extends = this._LiteralExpression;
        this._LiteralRational.havingFeatures(this._LiteralRational_value);
        this._LiteralRational_value.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._LiteralString.extends = this._LiteralExpression;
        this._LiteralString.havingFeatures(this._LiteralString_value);
        this._LiteralString_value.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Membership.extends = this._Relationship;
        this._Membership.havingFeatures(this._Membership_membershipOwningNamespace, this._Membership_memberElementId, this._Membership_memberShortName, this._Membership_memberElement, this._Membership_memberName, this._Membership_visibility);
        this._Membership_membershipOwningNamespace.ofType(this._Namespace);
        this._Membership_memberElementId.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Membership_memberShortName.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Membership_memberElement.ofType(this._Element);
        this._Membership_memberName.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Membership_visibility.ofType(this._VisibilityKind);
        this._MembershipImport.extends = this._Import;
        this._MembershipImport.havingFeatures(this._MembershipImport_importedMembership);
        this._MembershipImport_importedMembership.ofType(this._Membership);
        this._Metaclass.extends = this._Structure;
        this._MetadataAccessExpression.extends = this._Expression;
        this._MetadataAccessExpression.havingFeatures(this._MetadataAccessExpression_referencedElement);
        this._MetadataAccessExpression_referencedElement.ofType(this._Element);
        this._MetadataFeature.extends = this._Feature;
        this._MetadataFeature.havingFeatures(this._MetadataFeature_metaclass);
        this._MetadataFeature_metaclass.ofType(this._Metaclass);
        this._Multiplicity.extends = this._Feature;
        this._MultiplicityRange.extends = this._Multiplicity;
        this._MultiplicityRange.havingFeatures(this._MultiplicityRange_lowerBound, this._MultiplicityRange_upperBound, this._MultiplicityRange_bound);
        this._MultiplicityRange_lowerBound.ofType(this._Expression);
        this._MultiplicityRange_upperBound.ofType(this._Expression);
        this._MultiplicityRange_bound.ofType(this._Expression);
        this._Namespace.extends = this._Element;
        this._Namespace.havingFeatures(this._Namespace_membership, this._Namespace_ownedImport, this._Namespace_member, this._Namespace_ownedMember, this._Namespace_ownedMembership, this._Namespace_importedMembership);
        this._Namespace_membership.ofType(this._Membership);
        this._Namespace_ownedImport.ofType(this._Import);
        this._Namespace_member.ofType(this._Element);
        this._Namespace_ownedMember.ofType(this._Element);
        this._Namespace_ownedMembership.ofType(this._Membership);
        this._Namespace_importedMembership.ofType(this._Membership);
        this._NamespaceImport.extends = this._Import;
        this._NamespaceImport.havingFeatures(this._NamespaceImport_importedNamespace);
        this._NamespaceImport_importedNamespace.ofType(this._Namespace);
        this._NullExpression.extends = this._Expression;
        this._OperatorExpression.extends = this._InvocationExpression;
        this._OperatorExpression.havingFeatures(this._OperatorExpression_operator);
        this._OperatorExpression_operator.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._OwningMembership.extends = this._Membership;
        this._OwningMembership.havingFeatures(this._OwningMembership_ownedMemberElementId, this._OwningMembership_ownedMemberShortName, this._OwningMembership_ownedMemberName, this._OwningMembership_ownedMemberElement);
        this._OwningMembership_ownedMemberElementId.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._OwningMembership_ownedMemberShortName.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._OwningMembership_ownedMemberName.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._OwningMembership_ownedMemberElement.ofType(this._Element);
        this._Package.extends = this._Namespace;
        this._Package.havingFeatures(this._Package_filterCondition);
        this._Package_filterCondition.ofType(this._Expression);
        this._ParameterMembership.extends = this._FeatureMembership;
        this._ParameterMembership.havingFeatures(this._ParameterMembership_ownedMemberParameter);
        this._ParameterMembership_ownedMemberParameter.ofType(this._Feature);
        this._PayloadFeature.extends = this._Feature;
        this._Predicate.extends = this._Function;
        this._Redefinition.extends = this._Subsetting;
        this._Redefinition.havingFeatures(this._Redefinition_redefiningFeature, this._Redefinition_redefinedFeature);
        this._Redefinition_redefiningFeature.ofType(this._Feature);
        this._Redefinition_redefinedFeature.ofType(this._Feature);
        this._ReferenceSubsetting.extends = this._Subsetting;
        this._ReferenceSubsetting.havingFeatures(this._ReferenceSubsetting_referencedFeature, this._ReferenceSubsetting_referencingFeature);
        this._ReferenceSubsetting_referencedFeature.ofType(this._Feature);
        this._ReferenceSubsetting_referencingFeature.ofType(this._Feature);
        this._Relationship.extends = this._Element;
        this._Relationship.havingFeatures(this._Relationship_relatedElement, this._Relationship_target, this._Relationship_source, this._Relationship_owningRelatedElement, this._Relationship_ownedRelatedElement, this._Relationship_isImplied);
        this._Relationship_relatedElement.ofType(this._Element);
        this._Relationship_target.ofType(this._Element);
        this._Relationship_source.ofType(this._Element);
        this._Relationship_owningRelatedElement.ofType(this._Element);
        this._Relationship_ownedRelatedElement.ofType(this._Element);
        this._Relationship_isImplied.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._ResultExpressionMembership.extends = this._FeatureMembership;
        this._ResultExpressionMembership.havingFeatures(this._ResultExpressionMembership_ownedResultExpression);
        this._ResultExpressionMembership_ownedResultExpression.ofType(this._Expression);
        this._ReturnParameterMembership.extends = this._ParameterMembership;
        this._SelectExpression.extends = this._OperatorExpression;
        this._Specialization.extends = this._Relationship;
        this._Specialization.havingFeatures(this._Specialization_owningType, this._Specialization_general, this._Specialization_specific);
        this._Specialization_owningType.ofType(this._Type);
        this._Specialization_general.ofType(this._Type);
        this._Specialization_specific.ofType(this._Type);
        this._Step.extends = this._Feature;
        this._Step.havingFeatures(this._Step_behavior, this._Step_parameter);
        this._Step_behavior.ofType(this._Behavior);
        this._Step_parameter.ofType(this._Feature);
        this._Structure.extends = this._Class;
        this._Subclassification.extends = this._Specialization;
        this._Subclassification.havingFeatures(this._Subclassification_superclassifier, this._Subclassification_subclassifier, this._Subclassification_owningClassifier);
        this._Subclassification_superclassifier.ofType(this._kermlClassifier);
        this._Subclassification_subclassifier.ofType(this._kermlClassifier);
        this._Subclassification_owningClassifier.ofType(this._kermlClassifier);
        this._Subsetting.extends = this._Specialization;
        this._Subsetting.havingFeatures(this._Subsetting_owningFeature, this._Subsetting_subsettedFeature, this._Subsetting_subsettingFeature);
        this._Subsetting_owningFeature.ofType(this._Feature);
        this._Subsetting_subsettedFeature.ofType(this._Feature);
        this._Subsetting_subsettingFeature.ofType(this._Feature);
        this._Succession.extends = this._Connector;
        this._SuccessionFlow.extends = this._Flow;
        this._TextualRepresentation.extends = this._AnnotatingElement;
        this._TextualRepresentation.havingFeatures(this._TextualRepresentation_representedElement, this._TextualRepresentation_language, this._TextualRepresentation_body);
        this._TextualRepresentation_representedElement.ofType(this._Element);
        this._TextualRepresentation_language.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._TextualRepresentation_body.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Type.extends = this._Namespace;
        this._Type.havingFeatures(this._Type_ownedFeatureMembership, this._Type_ownedFeature, this._Type_ownedEndFeature, this._Type_feature, this._Type_input, this._Type_output, this._Type_isAbstract, this._Type_inheritedMembership, this._Type_endFeature, this._Type_isSufficient, this._Type_ownedConjugator, this._Type_isConjugated, this._Type_inheritedFeature, this._Type_multiplicity, this._Type_unioningType, this._Type_ownedIntersecting, this._Type_intersectingType, this._Type_ownedUnioning, this._Type_ownedDisjoining, this._Type_featureMembership, this._Type_differencingType, this._Type_ownedDifferencing, this._Type_directedFeature, this._Type_ownedSpecialization);
        this._Type_ownedFeatureMembership.ofType(this._FeatureMembership);
        this._Type_ownedFeature.ofType(this._Feature);
        this._Type_ownedEndFeature.ofType(this._Feature);
        this._Type_feature.ofType(this._Feature);
        this._Type_input.ofType(this._Feature);
        this._Type_output.ofType(this._Feature);
        this._Type_isAbstract.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Type_inheritedMembership.ofType(this._Membership);
        this._Type_endFeature.ofType(this._Feature);
        this._Type_isSufficient.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Type_ownedConjugator.ofType(this._Conjugation);
        this._Type_isConjugated.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Type_inheritedFeature.ofType(this._Feature);
        this._Type_multiplicity.ofType(this._Multiplicity);
        this._Type_unioningType.ofType(this._Type);
        this._Type_ownedIntersecting.ofType(this._Intersecting);
        this._Type_intersectingType.ofType(this._Type);
        this._Type_ownedUnioning.ofType(this._Unioning);
        this._Type_ownedDisjoining.ofType(this._Disjoining);
        this._Type_featureMembership.ofType(this._FeatureMembership);
        this._Type_differencingType.ofType(this._Type);
        this._Type_ownedDifferencing.ofType(this._Differencing);
        this._Type_directedFeature.ofType(this._Feature);
        this._Type_ownedSpecialization.ofType(this._Specialization);
        this._TypeFeaturing.extends = this._Relationship;
        this._TypeFeaturing.havingFeatures(this._TypeFeaturing_featureOfType, this._TypeFeaturing_featuringType, this._TypeFeaturing_owningFeatureOfType);
        this._TypeFeaturing_featureOfType.ofType(this._Feature);
        this._TypeFeaturing_featuringType.ofType(this._Type);
        this._TypeFeaturing_owningFeatureOfType.ofType(this._Feature);
        this._Unioning.extends = this._Relationship;
        this._Unioning.havingFeatures(this._Unioning_unioningType, this._Unioning_typeUnioned);
        this._Unioning_unioningType.ofType(this._Type);
        this._Unioning_typeUnioned.ofType(this._Type);
        this._VisibilityKind.havingLiterals(this._VisibilityKind_private, this._VisibilityKind_protected, this._VisibilityKind_public);
        this._wiredUp = true;
    }

    factory(receiveDelta?: DeltaReceiver): NodeBaseFactory {
        return (classifier: Classifier, id: LionWebId) => {
            switch (classifier.key) {
                case this._AnnotatingElement.key: return AnnotatingElement.create(id, receiveDelta);
                case this._Annotation.key: return Annotation.create(id, receiveDelta);
                case this._Association.key: return Association.create(id, receiveDelta);
                case this._AssociationStructure.key: return AssociationStructure.create(id, receiveDelta);
                case this._Behavior.key: return Behavior.create(id, receiveDelta);
                case this._BindingConnector.key: return BindingConnector.create(id, receiveDelta);
                case this._BooleanExpression.key: return BooleanExpression.create(id, receiveDelta);
                case this._Class.key: return Class.create(id, receiveDelta);
                case this._kermlClassifier.key: return kermlClassifier.create(id, receiveDelta);
                case this._CollectExpression.key: return CollectExpression.create(id, receiveDelta);
                case this._Comment.key: return Comment.create(id, receiveDelta);
                case this._Conjugation.key: return Conjugation.create(id, receiveDelta);
                case this._Connector.key: return Connector.create(id, receiveDelta);
                case this._ConstructorExpression.key: return ConstructorExpression.create(id, receiveDelta);
                case this._CrossSubsetting.key: return CrossSubsetting.create(id, receiveDelta);
                case this._DataType.key: return DataType.create(id, receiveDelta);
                case this._Dependency.key: return Dependency.create(id, receiveDelta);
                case this._Differencing.key: return Differencing.create(id, receiveDelta);
                case this._Disjoining.key: return Disjoining.create(id, receiveDelta);
                case this._Documentation.key: return Documentation.create(id, receiveDelta);
                case this._ElementFilterMembership.key: return ElementFilterMembership.create(id, receiveDelta);
                case this._EndFeatureMembership.key: return EndFeatureMembership.create(id, receiveDelta);
                case this._Expression.key: return Expression.create(id, receiveDelta);
                case this._Feature.key: return Feature.create(id, receiveDelta);
                case this._FeatureChainExpression.key: return FeatureChainExpression.create(id, receiveDelta);
                case this._FeatureChaining.key: return FeatureChaining.create(id, receiveDelta);
                case this._FeatureInverting.key: return FeatureInverting.create(id, receiveDelta);
                case this._FeatureMembership.key: return FeatureMembership.create(id, receiveDelta);
                case this._FeatureReferenceExpression.key: return FeatureReferenceExpression.create(id, receiveDelta);
                case this._FeatureTyping.key: return FeatureTyping.create(id, receiveDelta);
                case this._FeatureValue.key: return FeatureValue.create(id, receiveDelta);
                case this._Flow.key: return Flow.create(id, receiveDelta);
                case this._FlowEnd.key: return FlowEnd.create(id, receiveDelta);
                case this._Function.key: return Function.create(id, receiveDelta);
                case this._IndexExpression.key: return IndexExpression.create(id, receiveDelta);
                case this._Interaction.key: return Interaction.create(id, receiveDelta);
                case this._Intersecting.key: return Intersecting.create(id, receiveDelta);
                case this._Invariant.key: return Invariant.create(id, receiveDelta);
                case this._InvocationExpression.key: return InvocationExpression.create(id, receiveDelta);
                case this._LibraryPackage.key: return LibraryPackage.create(id, receiveDelta);
                case this._LiteralBoolean.key: return LiteralBoolean.create(id, receiveDelta);
                case this._LiteralExpression.key: return LiteralExpression.create(id, receiveDelta);
                case this._LiteralInfinity.key: return LiteralInfinity.create(id, receiveDelta);
                case this._LiteralInteger.key: return LiteralInteger.create(id, receiveDelta);
                case this._LiteralRational.key: return LiteralRational.create(id, receiveDelta);
                case this._LiteralString.key: return LiteralString.create(id, receiveDelta);
                case this._Membership.key: return Membership.create(id, receiveDelta);
                case this._MembershipImport.key: return MembershipImport.create(id, receiveDelta);
                case this._Metaclass.key: return Metaclass.create(id, receiveDelta);
                case this._MetadataAccessExpression.key: return MetadataAccessExpression.create(id, receiveDelta);
                case this._MetadataFeature.key: return MetadataFeature.create(id, receiveDelta);
                case this._Multiplicity.key: return Multiplicity.create(id, receiveDelta);
                case this._MultiplicityRange.key: return MultiplicityRange.create(id, receiveDelta);
                case this._Namespace.key: return Namespace.create(id, receiveDelta);
                case this._NamespaceImport.key: return NamespaceImport.create(id, receiveDelta);
                case this._NullExpression.key: return NullExpression.create(id, receiveDelta);
                case this._OperatorExpression.key: return OperatorExpression.create(id, receiveDelta);
                case this._OwningMembership.key: return OwningMembership.create(id, receiveDelta);
                case this._Package.key: return Package.create(id, receiveDelta);
                case this._ParameterMembership.key: return ParameterMembership.create(id, receiveDelta);
                case this._PayloadFeature.key: return PayloadFeature.create(id, receiveDelta);
                case this._Predicate.key: return Predicate.create(id, receiveDelta);
                case this._Redefinition.key: return Redefinition.create(id, receiveDelta);
                case this._ReferenceSubsetting.key: return ReferenceSubsetting.create(id, receiveDelta);
                case this._ResultExpressionMembership.key: return ResultExpressionMembership.create(id, receiveDelta);
                case this._ReturnParameterMembership.key: return ReturnParameterMembership.create(id, receiveDelta);
                case this._SelectExpression.key: return SelectExpression.create(id, receiveDelta);
                case this._Specialization.key: return Specialization.create(id, receiveDelta);
                case this._Step.key: return Step.create(id, receiveDelta);
                case this._Structure.key: return Structure.create(id, receiveDelta);
                case this._Subclassification.key: return Subclassification.create(id, receiveDelta);
                case this._Subsetting.key: return Subsetting.create(id, receiveDelta);
                case this._Succession.key: return Succession.create(id, receiveDelta);
                case this._SuccessionFlow.key: return SuccessionFlow.create(id, receiveDelta);
                case this._TextualRepresentation.key: return TextualRepresentation.create(id, receiveDelta);
                case this._Type.key: return Type.create(id, receiveDelta);
                case this._TypeFeaturing.key: return TypeFeaturing.create(id, receiveDelta);
                case this._Unioning.key: return Unioning.create(id, receiveDelta);
                default: {
                    const {language} = classifier;
                    throw new Error(`can't instantiate ${classifier.name} (key=${classifier.key}): classifier is not known in language ${language.name} (key=${language.key}, version=${language.version})`);
                }
            }
        }
    }

    enumLiteralFrom<EnumType>(enumerationLiteral: EnumerationLiteral): EnumType {
        const {enumeration} = enumerationLiteral;
        switch (enumeration.key) {
            case this._FeatureDirectionKind.key: return enumerationLiteral.key as EnumType;
            case this._VisibilityKind.key: return enumerationLiteral.key as EnumType;
            default: {
                const {language} = enumeration;
                throw new Error(`enumeration with key ${enumeration.key} is not known in language ${language.name} (key=${language.key}, version=${language.version})`);
            }
        }
    }

    public static readonly INSTANCE = new kermlBase();
}


export abstract class Element extends NodeBase {

    private readonly _owningMembership: RequiredMultiContainmentValueManager<OwningMembership>;
    get owningMembership(): OwningMembership[] {
        return this._owningMembership.get();
    }
    addOwningMembership(newValue: OwningMembership) {
        this._owningMembership.add(newValue);
    }
    removeOwningMembership(valueToRemove: OwningMembership) {
        this._owningMembership.remove(valueToRemove);
    }
    addOwningMembershipAtIndex(newValue: OwningMembership, index: number) {
        this._owningMembership.insertAtIndex(newValue, index);
    }
    moveOwningMembership(oldIndex: number, newIndex: number) {
        this._owningMembership.move(oldIndex, newIndex);
    }
    replaceOwningMembershipAtIndex(movedChild: OwningMembership, newIndex: number) {
        this._owningMembership.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedRelationship: RequiredMultiContainmentValueManager<Relationship>;
    get ownedRelationship(): Relationship[] {
        return this._ownedRelationship.get();
    }
    addOwnedRelationship(newValue: Relationship) {
        this._ownedRelationship.add(newValue);
    }
    removeOwnedRelationship(valueToRemove: Relationship) {
        this._ownedRelationship.remove(valueToRemove);
    }
    addOwnedRelationshipAtIndex(newValue: Relationship, index: number) {
        this._ownedRelationship.insertAtIndex(newValue, index);
    }
    moveOwnedRelationship(oldIndex: number, newIndex: number) {
        this._ownedRelationship.move(oldIndex, newIndex);
    }
    replaceOwnedRelationshipAtIndex(movedChild: Relationship, newIndex: number) {
        this._ownedRelationship.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _owningRelationship: RequiredMultiContainmentValueManager<Relationship>;
    get owningRelationship(): Relationship[] {
        return this._owningRelationship.get();
    }
    addOwningRelationship(newValue: Relationship) {
        this._owningRelationship.add(newValue);
    }
    removeOwningRelationship(valueToRemove: Relationship) {
        this._owningRelationship.remove(valueToRemove);
    }
    addOwningRelationshipAtIndex(newValue: Relationship, index: number) {
        this._owningRelationship.insertAtIndex(newValue, index);
    }
    moveOwningRelationship(oldIndex: number, newIndex: number) {
        this._owningRelationship.move(oldIndex, newIndex);
    }
    replaceOwningRelationshipAtIndex(movedChild: Relationship, newIndex: number) {
        this._owningRelationship.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _owningNamespace: RequiredMultiContainmentValueManager<Namespace>;
    get owningNamespace(): Namespace[] {
        return this._owningNamespace.get();
    }
    addOwningNamespace(newValue: Namespace) {
        this._owningNamespace.add(newValue);
    }
    removeOwningNamespace(valueToRemove: Namespace) {
        this._owningNamespace.remove(valueToRemove);
    }
    addOwningNamespaceAtIndex(newValue: Namespace, index: number) {
        this._owningNamespace.insertAtIndex(newValue, index);
    }
    moveOwningNamespace(oldIndex: number, newIndex: number) {
        this._owningNamespace.move(oldIndex, newIndex);
    }
    replaceOwningNamespaceAtIndex(movedChild: Namespace, newIndex: number) {
        this._owningNamespace.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _elementId: RequiredPropertyValueManager<string>;
    get elementId(): string {
        return this._elementId.get();
    }
    set elementId(newValue: string) {
        this._elementId.set(newValue);
    }

    private readonly _owner: RequiredMultiContainmentValueManager<Element>;
    get owner(): Element[] {
        return this._owner.get();
    }
    addOwner(newValue: Element) {
        this._owner.add(newValue);
    }
    removeOwner(valueToRemove: Element) {
        this._owner.remove(valueToRemove);
    }
    addOwnerAtIndex(newValue: Element, index: number) {
        this._owner.insertAtIndex(newValue, index);
    }
    moveOwner(oldIndex: number, newIndex: number) {
        this._owner.move(oldIndex, newIndex);
    }
    replaceOwnerAtIndex(movedChild: Element, newIndex: number) {
        this._owner.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedElement: RequiredMultiContainmentValueManager<Element>;
    get ownedElement(): Element[] {
        return this._ownedElement.get();
    }
    addOwnedElement(newValue: Element) {
        this._ownedElement.add(newValue);
    }
    removeOwnedElement(valueToRemove: Element) {
        this._ownedElement.remove(valueToRemove);
    }
    addOwnedElementAtIndex(newValue: Element, index: number) {
        this._ownedElement.insertAtIndex(newValue, index);
    }
    moveOwnedElement(oldIndex: number, newIndex: number) {
        this._ownedElement.move(oldIndex, newIndex);
    }
    replaceOwnedElementAtIndex(movedChild: Element, newIndex: number) {
        this._ownedElement.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _documentation: RequiredMultiContainmentValueManager<Documentation>;
    get documentation(): Documentation[] {
        return this._documentation.get();
    }
    addDocumentation(newValue: Documentation) {
        this._documentation.add(newValue);
    }
    removeDocumentation(valueToRemove: Documentation) {
        this._documentation.remove(valueToRemove);
    }
    addDocumentationAtIndex(newValue: Documentation, index: number) {
        this._documentation.insertAtIndex(newValue, index);
    }
    moveDocumentation(oldIndex: number, newIndex: number) {
        this._documentation.move(oldIndex, newIndex);
    }
    replaceDocumentationAtIndex(movedChild: Documentation, newIndex: number) {
        this._documentation.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedAnnotation: RequiredMultiContainmentValueManager<Annotation>;
    get ownedAnnotation(): Annotation[] {
        return this._ownedAnnotation.get();
    }
    addOwnedAnnotation(newValue: Annotation) {
        this._ownedAnnotation.add(newValue);
    }
    removeOwnedAnnotation(valueToRemove: Annotation) {
        this._ownedAnnotation.remove(valueToRemove);
    }
    addOwnedAnnotationAtIndex(newValue: Annotation, index: number) {
        this._ownedAnnotation.insertAtIndex(newValue, index);
    }
    moveOwnedAnnotation(oldIndex: number, newIndex: number) {
        this._ownedAnnotation.move(oldIndex, newIndex);
    }
    replaceOwnedAnnotationAtIndex(movedChild: Annotation, newIndex: number) {
        this._ownedAnnotation.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _textualRepresentation: RequiredMultiContainmentValueManager<TextualRepresentation>;
    get textualRepresentation(): TextualRepresentation[] {
        return this._textualRepresentation.get();
    }
    addTextualRepresentation(newValue: TextualRepresentation) {
        this._textualRepresentation.add(newValue);
    }
    removeTextualRepresentation(valueToRemove: TextualRepresentation) {
        this._textualRepresentation.remove(valueToRemove);
    }
    addTextualRepresentationAtIndex(newValue: TextualRepresentation, index: number) {
        this._textualRepresentation.insertAtIndex(newValue, index);
    }
    moveTextualRepresentation(oldIndex: number, newIndex: number) {
        this._textualRepresentation.move(oldIndex, newIndex);
    }
    replaceTextualRepresentationAtIndex(movedChild: TextualRepresentation, newIndex: number) {
        this._textualRepresentation.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _aliasIds: RequiredPropertyValueManager<string>;
    get aliasIds(): string {
        return this._aliasIds.get();
    }
    set aliasIds(newValue: string) {
        this._aliasIds.set(newValue);
    }

    private readonly _declaredShortName: RequiredPropertyValueManager<string>;
    get declaredShortName(): string {
        return this._declaredShortName.get();
    }
    set declaredShortName(newValue: string) {
        this._declaredShortName.set(newValue);
    }

    private readonly _declaredName: RequiredPropertyValueManager<string>;
    get declaredName(): string {
        return this._declaredName.get();
    }
    set declaredName(newValue: string) {
        this._declaredName.set(newValue);
    }

    private readonly _shortName: RequiredPropertyValueManager<string>;
    get shortName(): string {
        return this._shortName.get();
    }
    set shortName(newValue: string) {
        this._shortName.set(newValue);
    }

    private readonly _name: RequiredPropertyValueManager<string>;
    get name(): string {
        return this._name.get();
    }
    set name(newValue: string) {
        this._name.set(newValue);
    }

    private readonly _qualifiedName: RequiredPropertyValueManager<string>;
    get qualifiedName(): string {
        return this._qualifiedName.get();
    }
    set qualifiedName(newValue: string) {
        this._qualifiedName.set(newValue);
    }

    private readonly _isImpliedIncluded: RequiredPropertyValueManager<string>;
    get isImpliedIncluded(): string {
        return this._isImpliedIncluded.get();
    }
    set isImpliedIncluded(newValue: string) {
        this._isImpliedIncluded.set(newValue);
    }

    private readonly _isLibraryElement: RequiredPropertyValueManager<string>;
    get isLibraryElement(): string {
        return this._isLibraryElement.get();
    }
    set isLibraryElement(newValue: string) {
        this._isLibraryElement.set(newValue);
    }

    protected constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._owningMembership = new RequiredMultiContainmentValueManager<OwningMembership>(kermlBase.INSTANCE.Element_owningMembership, this);
        this._ownedRelationship = new RequiredMultiContainmentValueManager<Relationship>(kermlBase.INSTANCE.Element_ownedRelationship, this);
        this._owningRelationship = new RequiredMultiContainmentValueManager<Relationship>(kermlBase.INSTANCE.Element_owningRelationship, this);
        this._owningNamespace = new RequiredMultiContainmentValueManager<Namespace>(kermlBase.INSTANCE.Element_owningNamespace, this);
        this._elementId = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Element_elementId, this);
        this._owner = new RequiredMultiContainmentValueManager<Element>(kermlBase.INSTANCE.Element_owner, this);
        this._ownedElement = new RequiredMultiContainmentValueManager<Element>(kermlBase.INSTANCE.Element_ownedElement, this);
        this._documentation = new RequiredMultiContainmentValueManager<Documentation>(kermlBase.INSTANCE.Element_documentation, this);
        this._ownedAnnotation = new RequiredMultiContainmentValueManager<Annotation>(kermlBase.INSTANCE.Element_ownedAnnotation, this);
        this._textualRepresentation = new RequiredMultiContainmentValueManager<TextualRepresentation>(kermlBase.INSTANCE.Element_textualRepresentation, this);
        this._aliasIds = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Element_aliasIds, this);
        this._declaredShortName = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Element_declaredShortName, this);
        this._declaredName = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Element_declaredName, this);
        this._shortName = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Element_shortName, this);
        this._name = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Element_name, this);
        this._qualifiedName = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Element_qualifiedName, this);
        this._isImpliedIncluded = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Element_isImpliedIncluded, this);
        this._isLibraryElement = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Element_isLibraryElement, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case kermlBase.INSTANCE.Element_elementId.key: return this._elementId;
            case kermlBase.INSTANCE.Element_aliasIds.key: return this._aliasIds;
            case kermlBase.INSTANCE.Element_declaredShortName.key: return this._declaredShortName;
            case kermlBase.INSTANCE.Element_declaredName.key: return this._declaredName;
            case kermlBase.INSTANCE.Element_shortName.key: return this._shortName;
            case kermlBase.INSTANCE.Element_name.key: return this._name;
            case kermlBase.INSTANCE.Element_qualifiedName.key: return this._qualifiedName;
            case kermlBase.INSTANCE.Element_isImpliedIncluded.key: return this._isImpliedIncluded;
            case kermlBase.INSTANCE.Element_isLibraryElement.key: return this._isLibraryElement;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Element_owningMembership.key: return this._owningMembership;
            case kermlBase.INSTANCE.Element_ownedRelationship.key: return this._ownedRelationship;
            case kermlBase.INSTANCE.Element_owningRelationship.key: return this._owningRelationship;
            case kermlBase.INSTANCE.Element_owningNamespace.key: return this._owningNamespace;
            case kermlBase.INSTANCE.Element_owner.key: return this._owner;
            case kermlBase.INSTANCE.Element_ownedElement.key: return this._ownedElement;
            case kermlBase.INSTANCE.Element_documentation.key: return this._documentation;
            case kermlBase.INSTANCE.Element_ownedAnnotation.key: return this._ownedAnnotation;
            case kermlBase.INSTANCE.Element_textualRepresentation.key: return this._textualRepresentation;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class AnnotatingElement extends Element {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): AnnotatingElement {
        return new AnnotatingElement(kermlBase.INSTANCE.AnnotatingElement, id, receiveDelta, parentInfo);
    }

    private readonly _annotation: RequiredMultiContainmentValueManager<Annotation>;
    get annotation(): Annotation[] {
        return this._annotation.get();
    }
    addAnnotation(newValue: Annotation) {
        this._annotation.add(newValue);
    }
    removeAnnotation(valueToRemove: Annotation) {
        this._annotation.remove(valueToRemove);
    }
    addAnnotationAtIndex(newValue: Annotation, index: number) {
        this._annotation.insertAtIndex(newValue, index);
    }
    moveAnnotation(oldIndex: number, newIndex: number) {
        this._annotation.move(oldIndex, newIndex);
    }
    replaceAnnotationAtIndex(movedChild: Annotation, newIndex: number) {
        this._annotation.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedAnnotatingRelationship: RequiredMultiContainmentValueManager<Annotation>;
    get ownedAnnotatingRelationship(): Annotation[] {
        return this._ownedAnnotatingRelationship.get();
    }
    addOwnedAnnotatingRelationship(newValue: Annotation) {
        this._ownedAnnotatingRelationship.add(newValue);
    }
    removeOwnedAnnotatingRelationship(valueToRemove: Annotation) {
        this._ownedAnnotatingRelationship.remove(valueToRemove);
    }
    addOwnedAnnotatingRelationshipAtIndex(newValue: Annotation, index: number) {
        this._ownedAnnotatingRelationship.insertAtIndex(newValue, index);
    }
    moveOwnedAnnotatingRelationship(oldIndex: number, newIndex: number) {
        this._ownedAnnotatingRelationship.move(oldIndex, newIndex);
    }
    replaceOwnedAnnotatingRelationshipAtIndex(movedChild: Annotation, newIndex: number) {
        this._ownedAnnotatingRelationship.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _owningAnnotatingRelationship: RequiredMultiContainmentValueManager<Annotation>;
    get owningAnnotatingRelationship(): Annotation[] {
        return this._owningAnnotatingRelationship.get();
    }
    addOwningAnnotatingRelationship(newValue: Annotation) {
        this._owningAnnotatingRelationship.add(newValue);
    }
    removeOwningAnnotatingRelationship(valueToRemove: Annotation) {
        this._owningAnnotatingRelationship.remove(valueToRemove);
    }
    addOwningAnnotatingRelationshipAtIndex(newValue: Annotation, index: number) {
        this._owningAnnotatingRelationship.insertAtIndex(newValue, index);
    }
    moveOwningAnnotatingRelationship(oldIndex: number, newIndex: number) {
        this._owningAnnotatingRelationship.move(oldIndex, newIndex);
    }
    replaceOwningAnnotatingRelationshipAtIndex(movedChild: Annotation, newIndex: number) {
        this._owningAnnotatingRelationship.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _annotatedElement: RequiredMultiContainmentValueManager<Element>;
    get annotatedElement(): Element[] {
        return this._annotatedElement.get();
    }
    addAnnotatedElement(newValue: Element) {
        this._annotatedElement.add(newValue);
    }
    removeAnnotatedElement(valueToRemove: Element) {
        this._annotatedElement.remove(valueToRemove);
    }
    addAnnotatedElementAtIndex(newValue: Element, index: number) {
        this._annotatedElement.insertAtIndex(newValue, index);
    }
    moveAnnotatedElement(oldIndex: number, newIndex: number) {
        this._annotatedElement.move(oldIndex, newIndex);
    }
    replaceAnnotatedElementAtIndex(movedChild: Element, newIndex: number) {
        this._annotatedElement.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._annotation = new RequiredMultiContainmentValueManager<Annotation>(kermlBase.INSTANCE.AnnotatingElement_annotation, this);
        this._ownedAnnotatingRelationship = new RequiredMultiContainmentValueManager<Annotation>(kermlBase.INSTANCE.AnnotatingElement_ownedAnnotatingRelationship, this);
        this._owningAnnotatingRelationship = new RequiredMultiContainmentValueManager<Annotation>(kermlBase.INSTANCE.AnnotatingElement_owningAnnotatingRelationship, this);
        this._annotatedElement = new RequiredMultiContainmentValueManager<Element>(kermlBase.INSTANCE.AnnotatingElement_annotatedElement, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.AnnotatingElement_annotation.key: return this._annotation;
            case kermlBase.INSTANCE.AnnotatingElement_ownedAnnotatingRelationship.key: return this._ownedAnnotatingRelationship;
            case kermlBase.INSTANCE.AnnotatingElement_owningAnnotatingRelationship.key: return this._owningAnnotatingRelationship;
            case kermlBase.INSTANCE.AnnotatingElement_annotatedElement.key: return this._annotatedElement;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export abstract class Relationship extends Element {

    private readonly _relatedElement: RequiredMultiContainmentValueManager<Element>;
    get relatedElement(): Element[] {
        return this._relatedElement.get();
    }
    addRelatedElement(newValue: Element) {
        this._relatedElement.add(newValue);
    }
    removeRelatedElement(valueToRemove: Element) {
        this._relatedElement.remove(valueToRemove);
    }
    addRelatedElementAtIndex(newValue: Element, index: number) {
        this._relatedElement.insertAtIndex(newValue, index);
    }
    moveRelatedElement(oldIndex: number, newIndex: number) {
        this._relatedElement.move(oldIndex, newIndex);
    }
    replaceRelatedElementAtIndex(movedChild: Element, newIndex: number) {
        this._relatedElement.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _target: RequiredMultiContainmentValueManager<Element>;
    get target(): Element[] {
        return this._target.get();
    }
    addTarget(newValue: Element) {
        this._target.add(newValue);
    }
    removeTarget(valueToRemove: Element) {
        this._target.remove(valueToRemove);
    }
    addTargetAtIndex(newValue: Element, index: number) {
        this._target.insertAtIndex(newValue, index);
    }
    moveTarget(oldIndex: number, newIndex: number) {
        this._target.move(oldIndex, newIndex);
    }
    replaceTargetAtIndex(movedChild: Element, newIndex: number) {
        this._target.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _source: RequiredMultiContainmentValueManager<Element>;
    get source(): Element[] {
        return this._source.get();
    }
    addSource(newValue: Element) {
        this._source.add(newValue);
    }
    removeSource(valueToRemove: Element) {
        this._source.remove(valueToRemove);
    }
    addSourceAtIndex(newValue: Element, index: number) {
        this._source.insertAtIndex(newValue, index);
    }
    moveSource(oldIndex: number, newIndex: number) {
        this._source.move(oldIndex, newIndex);
    }
    replaceSourceAtIndex(movedChild: Element, newIndex: number) {
        this._source.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _owningRelatedElement: RequiredMultiContainmentValueManager<Element>;
    get owningRelatedElement(): Element[] {
        return this._owningRelatedElement.get();
    }
    addOwningRelatedElement(newValue: Element) {
        this._owningRelatedElement.add(newValue);
    }
    removeOwningRelatedElement(valueToRemove: Element) {
        this._owningRelatedElement.remove(valueToRemove);
    }
    addOwningRelatedElementAtIndex(newValue: Element, index: number) {
        this._owningRelatedElement.insertAtIndex(newValue, index);
    }
    moveOwningRelatedElement(oldIndex: number, newIndex: number) {
        this._owningRelatedElement.move(oldIndex, newIndex);
    }
    replaceOwningRelatedElementAtIndex(movedChild: Element, newIndex: number) {
        this._owningRelatedElement.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedRelatedElement: RequiredMultiContainmentValueManager<Element>;
    get ownedRelatedElement(): Element[] {
        return this._ownedRelatedElement.get();
    }
    addOwnedRelatedElement(newValue: Element) {
        this._ownedRelatedElement.add(newValue);
    }
    removeOwnedRelatedElement(valueToRemove: Element) {
        this._ownedRelatedElement.remove(valueToRemove);
    }
    addOwnedRelatedElementAtIndex(newValue: Element, index: number) {
        this._ownedRelatedElement.insertAtIndex(newValue, index);
    }
    moveOwnedRelatedElement(oldIndex: number, newIndex: number) {
        this._ownedRelatedElement.move(oldIndex, newIndex);
    }
    replaceOwnedRelatedElementAtIndex(movedChild: Element, newIndex: number) {
        this._ownedRelatedElement.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _isImplied: RequiredPropertyValueManager<string>;
    get isImplied(): string {
        return this._isImplied.get();
    }
    set isImplied(newValue: string) {
        this._isImplied.set(newValue);
    }

    protected constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._relatedElement = new RequiredMultiContainmentValueManager<Element>(kermlBase.INSTANCE.Relationship_relatedElement, this);
        this._target = new RequiredMultiContainmentValueManager<Element>(kermlBase.INSTANCE.Relationship_target, this);
        this._source = new RequiredMultiContainmentValueManager<Element>(kermlBase.INSTANCE.Relationship_source, this);
        this._owningRelatedElement = new RequiredMultiContainmentValueManager<Element>(kermlBase.INSTANCE.Relationship_owningRelatedElement, this);
        this._ownedRelatedElement = new RequiredMultiContainmentValueManager<Element>(kermlBase.INSTANCE.Relationship_ownedRelatedElement, this);
        this._isImplied = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Relationship_isImplied, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === kermlBase.INSTANCE.Relationship_isImplied.key) {
            return this._isImplied;
        }
        return super.getPropertyValueManager(property);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Relationship_relatedElement.key: return this._relatedElement;
            case kermlBase.INSTANCE.Relationship_target.key: return this._target;
            case kermlBase.INSTANCE.Relationship_source.key: return this._source;
            case kermlBase.INSTANCE.Relationship_owningRelatedElement.key: return this._owningRelatedElement;
            case kermlBase.INSTANCE.Relationship_ownedRelatedElement.key: return this._ownedRelatedElement;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Annotation extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Annotation {
        return new Annotation(kermlBase.INSTANCE.Annotation, id, receiveDelta, parentInfo);
    }

    private readonly _annotatingElement: RequiredMultiContainmentValueManager<AnnotatingElement>;
    get annotatingElement(): AnnotatingElement[] {
        return this._annotatingElement.get();
    }
    addAnnotatingElement(newValue: AnnotatingElement) {
        this._annotatingElement.add(newValue);
    }
    removeAnnotatingElement(valueToRemove: AnnotatingElement) {
        this._annotatingElement.remove(valueToRemove);
    }
    addAnnotatingElementAtIndex(newValue: AnnotatingElement, index: number) {
        this._annotatingElement.insertAtIndex(newValue, index);
    }
    moveAnnotatingElement(oldIndex: number, newIndex: number) {
        this._annotatingElement.move(oldIndex, newIndex);
    }
    replaceAnnotatingElementAtIndex(movedChild: AnnotatingElement, newIndex: number) {
        this._annotatingElement.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _annotatedElement: RequiredMultiContainmentValueManager<Element>;
    get annotatedElement(): Element[] {
        return this._annotatedElement.get();
    }
    addAnnotatedElement(newValue: Element) {
        this._annotatedElement.add(newValue);
    }
    removeAnnotatedElement(valueToRemove: Element) {
        this._annotatedElement.remove(valueToRemove);
    }
    addAnnotatedElementAtIndex(newValue: Element, index: number) {
        this._annotatedElement.insertAtIndex(newValue, index);
    }
    moveAnnotatedElement(oldIndex: number, newIndex: number) {
        this._annotatedElement.move(oldIndex, newIndex);
    }
    replaceAnnotatedElementAtIndex(movedChild: Element, newIndex: number) {
        this._annotatedElement.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _owningAnnotatingElement: RequiredMultiContainmentValueManager<AnnotatingElement>;
    get owningAnnotatingElement(): AnnotatingElement[] {
        return this._owningAnnotatingElement.get();
    }
    addOwningAnnotatingElement(newValue: AnnotatingElement) {
        this._owningAnnotatingElement.add(newValue);
    }
    removeOwningAnnotatingElement(valueToRemove: AnnotatingElement) {
        this._owningAnnotatingElement.remove(valueToRemove);
    }
    addOwningAnnotatingElementAtIndex(newValue: AnnotatingElement, index: number) {
        this._owningAnnotatingElement.insertAtIndex(newValue, index);
    }
    moveOwningAnnotatingElement(oldIndex: number, newIndex: number) {
        this._owningAnnotatingElement.move(oldIndex, newIndex);
    }
    replaceOwningAnnotatingElementAtIndex(movedChild: AnnotatingElement, newIndex: number) {
        this._owningAnnotatingElement.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedAnnotatingElement: RequiredMultiContainmentValueManager<AnnotatingElement>;
    get ownedAnnotatingElement(): AnnotatingElement[] {
        return this._ownedAnnotatingElement.get();
    }
    addOwnedAnnotatingElement(newValue: AnnotatingElement) {
        this._ownedAnnotatingElement.add(newValue);
    }
    removeOwnedAnnotatingElement(valueToRemove: AnnotatingElement) {
        this._ownedAnnotatingElement.remove(valueToRemove);
    }
    addOwnedAnnotatingElementAtIndex(newValue: AnnotatingElement, index: number) {
        this._ownedAnnotatingElement.insertAtIndex(newValue, index);
    }
    moveOwnedAnnotatingElement(oldIndex: number, newIndex: number) {
        this._ownedAnnotatingElement.move(oldIndex, newIndex);
    }
    replaceOwnedAnnotatingElementAtIndex(movedChild: AnnotatingElement, newIndex: number) {
        this._ownedAnnotatingElement.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _owningAnnotatedElement: RequiredMultiContainmentValueManager<Element>;
    get owningAnnotatedElement(): Element[] {
        return this._owningAnnotatedElement.get();
    }
    addOwningAnnotatedElement(newValue: Element) {
        this._owningAnnotatedElement.add(newValue);
    }
    removeOwningAnnotatedElement(valueToRemove: Element) {
        this._owningAnnotatedElement.remove(valueToRemove);
    }
    addOwningAnnotatedElementAtIndex(newValue: Element, index: number) {
        this._owningAnnotatedElement.insertAtIndex(newValue, index);
    }
    moveOwningAnnotatedElement(oldIndex: number, newIndex: number) {
        this._owningAnnotatedElement.move(oldIndex, newIndex);
    }
    replaceOwningAnnotatedElementAtIndex(movedChild: Element, newIndex: number) {
        this._owningAnnotatedElement.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._annotatingElement = new RequiredMultiContainmentValueManager<AnnotatingElement>(kermlBase.INSTANCE.Annotation_annotatingElement, this);
        this._annotatedElement = new RequiredMultiContainmentValueManager<Element>(kermlBase.INSTANCE.Annotation_annotatedElement, this);
        this._owningAnnotatingElement = new RequiredMultiContainmentValueManager<AnnotatingElement>(kermlBase.INSTANCE.Annotation_owningAnnotatingElement, this);
        this._ownedAnnotatingElement = new RequiredMultiContainmentValueManager<AnnotatingElement>(kermlBase.INSTANCE.Annotation_ownedAnnotatingElement, this);
        this._owningAnnotatedElement = new RequiredMultiContainmentValueManager<Element>(kermlBase.INSTANCE.Annotation_owningAnnotatedElement, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Annotation_annotatingElement.key: return this._annotatingElement;
            case kermlBase.INSTANCE.Annotation_annotatedElement.key: return this._annotatedElement;
            case kermlBase.INSTANCE.Annotation_owningAnnotatingElement.key: return this._owningAnnotatingElement;
            case kermlBase.INSTANCE.Annotation_ownedAnnotatingElement.key: return this._ownedAnnotatingElement;
            case kermlBase.INSTANCE.Annotation_owningAnnotatedElement.key: return this._owningAnnotatedElement;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Namespace extends Element {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Namespace {
        return new Namespace(kermlBase.INSTANCE.Namespace, id, receiveDelta, parentInfo);
    }

    private readonly _membership: RequiredMultiContainmentValueManager<Membership>;
    get membership(): Membership[] {
        return this._membership.get();
    }
    addMembership(newValue: Membership) {
        this._membership.add(newValue);
    }
    removeMembership(valueToRemove: Membership) {
        this._membership.remove(valueToRemove);
    }
    addMembershipAtIndex(newValue: Membership, index: number) {
        this._membership.insertAtIndex(newValue, index);
    }
    moveMembership(oldIndex: number, newIndex: number) {
        this._membership.move(oldIndex, newIndex);
    }
    replaceMembershipAtIndex(movedChild: Membership, newIndex: number) {
        this._membership.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedImport: RequiredMultiContainmentValueManager<Import>;
    get ownedImport(): Import[] {
        return this._ownedImport.get();
    }
    addOwnedImport(newValue: Import) {
        this._ownedImport.add(newValue);
    }
    removeOwnedImport(valueToRemove: Import) {
        this._ownedImport.remove(valueToRemove);
    }
    addOwnedImportAtIndex(newValue: Import, index: number) {
        this._ownedImport.insertAtIndex(newValue, index);
    }
    moveOwnedImport(oldIndex: number, newIndex: number) {
        this._ownedImport.move(oldIndex, newIndex);
    }
    replaceOwnedImportAtIndex(movedChild: Import, newIndex: number) {
        this._ownedImport.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _member: RequiredMultiContainmentValueManager<Element>;
    get member(): Element[] {
        return this._member.get();
    }
    addMember(newValue: Element) {
        this._member.add(newValue);
    }
    removeMember(valueToRemove: Element) {
        this._member.remove(valueToRemove);
    }
    addMemberAtIndex(newValue: Element, index: number) {
        this._member.insertAtIndex(newValue, index);
    }
    moveMember(oldIndex: number, newIndex: number) {
        this._member.move(oldIndex, newIndex);
    }
    replaceMemberAtIndex(movedChild: Element, newIndex: number) {
        this._member.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedMember: RequiredMultiContainmentValueManager<Element>;
    get ownedMember(): Element[] {
        return this._ownedMember.get();
    }
    addOwnedMember(newValue: Element) {
        this._ownedMember.add(newValue);
    }
    removeOwnedMember(valueToRemove: Element) {
        this._ownedMember.remove(valueToRemove);
    }
    addOwnedMemberAtIndex(newValue: Element, index: number) {
        this._ownedMember.insertAtIndex(newValue, index);
    }
    moveOwnedMember(oldIndex: number, newIndex: number) {
        this._ownedMember.move(oldIndex, newIndex);
    }
    replaceOwnedMemberAtIndex(movedChild: Element, newIndex: number) {
        this._ownedMember.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedMembership: RequiredMultiContainmentValueManager<Membership>;
    get ownedMembership(): Membership[] {
        return this._ownedMembership.get();
    }
    addOwnedMembership(newValue: Membership) {
        this._ownedMembership.add(newValue);
    }
    removeOwnedMembership(valueToRemove: Membership) {
        this._ownedMembership.remove(valueToRemove);
    }
    addOwnedMembershipAtIndex(newValue: Membership, index: number) {
        this._ownedMembership.insertAtIndex(newValue, index);
    }
    moveOwnedMembership(oldIndex: number, newIndex: number) {
        this._ownedMembership.move(oldIndex, newIndex);
    }
    replaceOwnedMembershipAtIndex(movedChild: Membership, newIndex: number) {
        this._ownedMembership.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _importedMembership: RequiredMultiContainmentValueManager<Membership>;
    get importedMembership(): Membership[] {
        return this._importedMembership.get();
    }
    addImportedMembership(newValue: Membership) {
        this._importedMembership.add(newValue);
    }
    removeImportedMembership(valueToRemove: Membership) {
        this._importedMembership.remove(valueToRemove);
    }
    addImportedMembershipAtIndex(newValue: Membership, index: number) {
        this._importedMembership.insertAtIndex(newValue, index);
    }
    moveImportedMembership(oldIndex: number, newIndex: number) {
        this._importedMembership.move(oldIndex, newIndex);
    }
    replaceImportedMembershipAtIndex(movedChild: Membership, newIndex: number) {
        this._importedMembership.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._membership = new RequiredMultiContainmentValueManager<Membership>(kermlBase.INSTANCE.Namespace_membership, this);
        this._ownedImport = new RequiredMultiContainmentValueManager<Import>(kermlBase.INSTANCE.Namespace_ownedImport, this);
        this._member = new RequiredMultiContainmentValueManager<Element>(kermlBase.INSTANCE.Namespace_member, this);
        this._ownedMember = new RequiredMultiContainmentValueManager<Element>(kermlBase.INSTANCE.Namespace_ownedMember, this);
        this._ownedMembership = new RequiredMultiContainmentValueManager<Membership>(kermlBase.INSTANCE.Namespace_ownedMembership, this);
        this._importedMembership = new RequiredMultiContainmentValueManager<Membership>(kermlBase.INSTANCE.Namespace_importedMembership, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Namespace_membership.key: return this._membership;
            case kermlBase.INSTANCE.Namespace_ownedImport.key: return this._ownedImport;
            case kermlBase.INSTANCE.Namespace_member.key: return this._member;
            case kermlBase.INSTANCE.Namespace_ownedMember.key: return this._ownedMember;
            case kermlBase.INSTANCE.Namespace_ownedMembership.key: return this._ownedMembership;
            case kermlBase.INSTANCE.Namespace_importedMembership.key: return this._importedMembership;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Type extends Namespace {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Type {
        return new Type(kermlBase.INSTANCE.Type, id, receiveDelta, parentInfo);
    }

    private readonly _ownedFeatureMembership: RequiredMultiContainmentValueManager<FeatureMembership>;
    get ownedFeatureMembership(): FeatureMembership[] {
        return this._ownedFeatureMembership.get();
    }
    addOwnedFeatureMembership(newValue: FeatureMembership) {
        this._ownedFeatureMembership.add(newValue);
    }
    removeOwnedFeatureMembership(valueToRemove: FeatureMembership) {
        this._ownedFeatureMembership.remove(valueToRemove);
    }
    addOwnedFeatureMembershipAtIndex(newValue: FeatureMembership, index: number) {
        this._ownedFeatureMembership.insertAtIndex(newValue, index);
    }
    moveOwnedFeatureMembership(oldIndex: number, newIndex: number) {
        this._ownedFeatureMembership.move(oldIndex, newIndex);
    }
    replaceOwnedFeatureMembershipAtIndex(movedChild: FeatureMembership, newIndex: number) {
        this._ownedFeatureMembership.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedFeature: RequiredMultiContainmentValueManager<Feature>;
    get ownedFeature(): Feature[] {
        return this._ownedFeature.get();
    }
    addOwnedFeature(newValue: Feature) {
        this._ownedFeature.add(newValue);
    }
    removeOwnedFeature(valueToRemove: Feature) {
        this._ownedFeature.remove(valueToRemove);
    }
    addOwnedFeatureAtIndex(newValue: Feature, index: number) {
        this._ownedFeature.insertAtIndex(newValue, index);
    }
    moveOwnedFeature(oldIndex: number, newIndex: number) {
        this._ownedFeature.move(oldIndex, newIndex);
    }
    replaceOwnedFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._ownedFeature.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedEndFeature: RequiredMultiContainmentValueManager<Feature>;
    get ownedEndFeature(): Feature[] {
        return this._ownedEndFeature.get();
    }
    addOwnedEndFeature(newValue: Feature) {
        this._ownedEndFeature.add(newValue);
    }
    removeOwnedEndFeature(valueToRemove: Feature) {
        this._ownedEndFeature.remove(valueToRemove);
    }
    addOwnedEndFeatureAtIndex(newValue: Feature, index: number) {
        this._ownedEndFeature.insertAtIndex(newValue, index);
    }
    moveOwnedEndFeature(oldIndex: number, newIndex: number) {
        this._ownedEndFeature.move(oldIndex, newIndex);
    }
    replaceOwnedEndFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._ownedEndFeature.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _feature: RequiredMultiContainmentValueManager<Feature>;
    get feature(): Feature[] {
        return this._feature.get();
    }
    addFeature(newValue: Feature) {
        this._feature.add(newValue);
    }
    removeFeature(valueToRemove: Feature) {
        this._feature.remove(valueToRemove);
    }
    addFeatureAtIndex(newValue: Feature, index: number) {
        this._feature.insertAtIndex(newValue, index);
    }
    moveFeature(oldIndex: number, newIndex: number) {
        this._feature.move(oldIndex, newIndex);
    }
    replaceFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._feature.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _input: RequiredMultiContainmentValueManager<Feature>;
    get input(): Feature[] {
        return this._input.get();
    }
    addInput(newValue: Feature) {
        this._input.add(newValue);
    }
    removeInput(valueToRemove: Feature) {
        this._input.remove(valueToRemove);
    }
    addInputAtIndex(newValue: Feature, index: number) {
        this._input.insertAtIndex(newValue, index);
    }
    moveInput(oldIndex: number, newIndex: number) {
        this._input.move(oldIndex, newIndex);
    }
    replaceInputAtIndex(movedChild: Feature, newIndex: number) {
        this._input.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _output: RequiredMultiContainmentValueManager<Feature>;
    get output(): Feature[] {
        return this._output.get();
    }
    addOutput(newValue: Feature) {
        this._output.add(newValue);
    }
    removeOutput(valueToRemove: Feature) {
        this._output.remove(valueToRemove);
    }
    addOutputAtIndex(newValue: Feature, index: number) {
        this._output.insertAtIndex(newValue, index);
    }
    moveOutput(oldIndex: number, newIndex: number) {
        this._output.move(oldIndex, newIndex);
    }
    replaceOutputAtIndex(movedChild: Feature, newIndex: number) {
        this._output.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _isAbstract: RequiredPropertyValueManager<string>;
    get isAbstract(): string {
        return this._isAbstract.get();
    }
    set isAbstract(newValue: string) {
        this._isAbstract.set(newValue);
    }

    private readonly _inheritedMembership: RequiredMultiContainmentValueManager<Membership>;
    get inheritedMembership(): Membership[] {
        return this._inheritedMembership.get();
    }
    addInheritedMembership(newValue: Membership) {
        this._inheritedMembership.add(newValue);
    }
    removeInheritedMembership(valueToRemove: Membership) {
        this._inheritedMembership.remove(valueToRemove);
    }
    addInheritedMembershipAtIndex(newValue: Membership, index: number) {
        this._inheritedMembership.insertAtIndex(newValue, index);
    }
    moveInheritedMembership(oldIndex: number, newIndex: number) {
        this._inheritedMembership.move(oldIndex, newIndex);
    }
    replaceInheritedMembershipAtIndex(movedChild: Membership, newIndex: number) {
        this._inheritedMembership.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _endFeature: RequiredMultiContainmentValueManager<Feature>;
    get endFeature(): Feature[] {
        return this._endFeature.get();
    }
    addEndFeature(newValue: Feature) {
        this._endFeature.add(newValue);
    }
    removeEndFeature(valueToRemove: Feature) {
        this._endFeature.remove(valueToRemove);
    }
    addEndFeatureAtIndex(newValue: Feature, index: number) {
        this._endFeature.insertAtIndex(newValue, index);
    }
    moveEndFeature(oldIndex: number, newIndex: number) {
        this._endFeature.move(oldIndex, newIndex);
    }
    replaceEndFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._endFeature.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _isSufficient: RequiredPropertyValueManager<string>;
    get isSufficient(): string {
        return this._isSufficient.get();
    }
    set isSufficient(newValue: string) {
        this._isSufficient.set(newValue);
    }

    private readonly _ownedConjugator: RequiredMultiContainmentValueManager<Conjugation>;
    get ownedConjugator(): Conjugation[] {
        return this._ownedConjugator.get();
    }
    addOwnedConjugator(newValue: Conjugation) {
        this._ownedConjugator.add(newValue);
    }
    removeOwnedConjugator(valueToRemove: Conjugation) {
        this._ownedConjugator.remove(valueToRemove);
    }
    addOwnedConjugatorAtIndex(newValue: Conjugation, index: number) {
        this._ownedConjugator.insertAtIndex(newValue, index);
    }
    moveOwnedConjugator(oldIndex: number, newIndex: number) {
        this._ownedConjugator.move(oldIndex, newIndex);
    }
    replaceOwnedConjugatorAtIndex(movedChild: Conjugation, newIndex: number) {
        this._ownedConjugator.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _isConjugated: RequiredPropertyValueManager<string>;
    get isConjugated(): string {
        return this._isConjugated.get();
    }
    set isConjugated(newValue: string) {
        this._isConjugated.set(newValue);
    }

    private readonly _inheritedFeature: RequiredMultiContainmentValueManager<Feature>;
    get inheritedFeature(): Feature[] {
        return this._inheritedFeature.get();
    }
    addInheritedFeature(newValue: Feature) {
        this._inheritedFeature.add(newValue);
    }
    removeInheritedFeature(valueToRemove: Feature) {
        this._inheritedFeature.remove(valueToRemove);
    }
    addInheritedFeatureAtIndex(newValue: Feature, index: number) {
        this._inheritedFeature.insertAtIndex(newValue, index);
    }
    moveInheritedFeature(oldIndex: number, newIndex: number) {
        this._inheritedFeature.move(oldIndex, newIndex);
    }
    replaceInheritedFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._inheritedFeature.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _multiplicity: RequiredMultiContainmentValueManager<Multiplicity>;
    get multiplicity(): Multiplicity[] {
        return this._multiplicity.get();
    }
    addMultiplicity(newValue: Multiplicity) {
        this._multiplicity.add(newValue);
    }
    removeMultiplicity(valueToRemove: Multiplicity) {
        this._multiplicity.remove(valueToRemove);
    }
    addMultiplicityAtIndex(newValue: Multiplicity, index: number) {
        this._multiplicity.insertAtIndex(newValue, index);
    }
    moveMultiplicity(oldIndex: number, newIndex: number) {
        this._multiplicity.move(oldIndex, newIndex);
    }
    replaceMultiplicityAtIndex(movedChild: Multiplicity, newIndex: number) {
        this._multiplicity.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _unioningType: RequiredMultiContainmentValueManager<Type>;
    get unioningType(): Type[] {
        return this._unioningType.get();
    }
    addUnioningType(newValue: Type) {
        this._unioningType.add(newValue);
    }
    removeUnioningType(valueToRemove: Type) {
        this._unioningType.remove(valueToRemove);
    }
    addUnioningTypeAtIndex(newValue: Type, index: number) {
        this._unioningType.insertAtIndex(newValue, index);
    }
    moveUnioningType(oldIndex: number, newIndex: number) {
        this._unioningType.move(oldIndex, newIndex);
    }
    replaceUnioningTypeAtIndex(movedChild: Type, newIndex: number) {
        this._unioningType.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedIntersecting: RequiredMultiContainmentValueManager<Intersecting>;
    get ownedIntersecting(): Intersecting[] {
        return this._ownedIntersecting.get();
    }
    addOwnedIntersecting(newValue: Intersecting) {
        this._ownedIntersecting.add(newValue);
    }
    removeOwnedIntersecting(valueToRemove: Intersecting) {
        this._ownedIntersecting.remove(valueToRemove);
    }
    addOwnedIntersectingAtIndex(newValue: Intersecting, index: number) {
        this._ownedIntersecting.insertAtIndex(newValue, index);
    }
    moveOwnedIntersecting(oldIndex: number, newIndex: number) {
        this._ownedIntersecting.move(oldIndex, newIndex);
    }
    replaceOwnedIntersectingAtIndex(movedChild: Intersecting, newIndex: number) {
        this._ownedIntersecting.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _intersectingType: RequiredMultiContainmentValueManager<Type>;
    get intersectingType(): Type[] {
        return this._intersectingType.get();
    }
    addIntersectingType(newValue: Type) {
        this._intersectingType.add(newValue);
    }
    removeIntersectingType(valueToRemove: Type) {
        this._intersectingType.remove(valueToRemove);
    }
    addIntersectingTypeAtIndex(newValue: Type, index: number) {
        this._intersectingType.insertAtIndex(newValue, index);
    }
    moveIntersectingType(oldIndex: number, newIndex: number) {
        this._intersectingType.move(oldIndex, newIndex);
    }
    replaceIntersectingTypeAtIndex(movedChild: Type, newIndex: number) {
        this._intersectingType.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedUnioning: RequiredMultiContainmentValueManager<Unioning>;
    get ownedUnioning(): Unioning[] {
        return this._ownedUnioning.get();
    }
    addOwnedUnioning(newValue: Unioning) {
        this._ownedUnioning.add(newValue);
    }
    removeOwnedUnioning(valueToRemove: Unioning) {
        this._ownedUnioning.remove(valueToRemove);
    }
    addOwnedUnioningAtIndex(newValue: Unioning, index: number) {
        this._ownedUnioning.insertAtIndex(newValue, index);
    }
    moveOwnedUnioning(oldIndex: number, newIndex: number) {
        this._ownedUnioning.move(oldIndex, newIndex);
    }
    replaceOwnedUnioningAtIndex(movedChild: Unioning, newIndex: number) {
        this._ownedUnioning.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedDisjoining: RequiredMultiContainmentValueManager<Disjoining>;
    get ownedDisjoining(): Disjoining[] {
        return this._ownedDisjoining.get();
    }
    addOwnedDisjoining(newValue: Disjoining) {
        this._ownedDisjoining.add(newValue);
    }
    removeOwnedDisjoining(valueToRemove: Disjoining) {
        this._ownedDisjoining.remove(valueToRemove);
    }
    addOwnedDisjoiningAtIndex(newValue: Disjoining, index: number) {
        this._ownedDisjoining.insertAtIndex(newValue, index);
    }
    moveOwnedDisjoining(oldIndex: number, newIndex: number) {
        this._ownedDisjoining.move(oldIndex, newIndex);
    }
    replaceOwnedDisjoiningAtIndex(movedChild: Disjoining, newIndex: number) {
        this._ownedDisjoining.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _featureMembership: RequiredMultiContainmentValueManager<FeatureMembership>;
    get featureMembership(): FeatureMembership[] {
        return this._featureMembership.get();
    }
    addFeatureMembership(newValue: FeatureMembership) {
        this._featureMembership.add(newValue);
    }
    removeFeatureMembership(valueToRemove: FeatureMembership) {
        this._featureMembership.remove(valueToRemove);
    }
    addFeatureMembershipAtIndex(newValue: FeatureMembership, index: number) {
        this._featureMembership.insertAtIndex(newValue, index);
    }
    moveFeatureMembership(oldIndex: number, newIndex: number) {
        this._featureMembership.move(oldIndex, newIndex);
    }
    replaceFeatureMembershipAtIndex(movedChild: FeatureMembership, newIndex: number) {
        this._featureMembership.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _differencingType: RequiredMultiContainmentValueManager<Type>;
    get differencingType(): Type[] {
        return this._differencingType.get();
    }
    addDifferencingType(newValue: Type) {
        this._differencingType.add(newValue);
    }
    removeDifferencingType(valueToRemove: Type) {
        this._differencingType.remove(valueToRemove);
    }
    addDifferencingTypeAtIndex(newValue: Type, index: number) {
        this._differencingType.insertAtIndex(newValue, index);
    }
    moveDifferencingType(oldIndex: number, newIndex: number) {
        this._differencingType.move(oldIndex, newIndex);
    }
    replaceDifferencingTypeAtIndex(movedChild: Type, newIndex: number) {
        this._differencingType.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedDifferencing: RequiredMultiContainmentValueManager<Differencing>;
    get ownedDifferencing(): Differencing[] {
        return this._ownedDifferencing.get();
    }
    addOwnedDifferencing(newValue: Differencing) {
        this._ownedDifferencing.add(newValue);
    }
    removeOwnedDifferencing(valueToRemove: Differencing) {
        this._ownedDifferencing.remove(valueToRemove);
    }
    addOwnedDifferencingAtIndex(newValue: Differencing, index: number) {
        this._ownedDifferencing.insertAtIndex(newValue, index);
    }
    moveOwnedDifferencing(oldIndex: number, newIndex: number) {
        this._ownedDifferencing.move(oldIndex, newIndex);
    }
    replaceOwnedDifferencingAtIndex(movedChild: Differencing, newIndex: number) {
        this._ownedDifferencing.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _directedFeature: RequiredMultiContainmentValueManager<Feature>;
    get directedFeature(): Feature[] {
        return this._directedFeature.get();
    }
    addDirectedFeature(newValue: Feature) {
        this._directedFeature.add(newValue);
    }
    removeDirectedFeature(valueToRemove: Feature) {
        this._directedFeature.remove(valueToRemove);
    }
    addDirectedFeatureAtIndex(newValue: Feature, index: number) {
        this._directedFeature.insertAtIndex(newValue, index);
    }
    moveDirectedFeature(oldIndex: number, newIndex: number) {
        this._directedFeature.move(oldIndex, newIndex);
    }
    replaceDirectedFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._directedFeature.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedSpecialization: RequiredMultiContainmentValueManager<Specialization>;
    get ownedSpecialization(): Specialization[] {
        return this._ownedSpecialization.get();
    }
    addOwnedSpecialization(newValue: Specialization) {
        this._ownedSpecialization.add(newValue);
    }
    removeOwnedSpecialization(valueToRemove: Specialization) {
        this._ownedSpecialization.remove(valueToRemove);
    }
    addOwnedSpecializationAtIndex(newValue: Specialization, index: number) {
        this._ownedSpecialization.insertAtIndex(newValue, index);
    }
    moveOwnedSpecialization(oldIndex: number, newIndex: number) {
        this._ownedSpecialization.move(oldIndex, newIndex);
    }
    replaceOwnedSpecializationAtIndex(movedChild: Specialization, newIndex: number) {
        this._ownedSpecialization.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._ownedFeatureMembership = new RequiredMultiContainmentValueManager<FeatureMembership>(kermlBase.INSTANCE.Type_ownedFeatureMembership, this);
        this._ownedFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Type_ownedFeature, this);
        this._ownedEndFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Type_ownedEndFeature, this);
        this._feature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Type_feature, this);
        this._input = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Type_input, this);
        this._output = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Type_output, this);
        this._isAbstract = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Type_isAbstract, this);
        this._inheritedMembership = new RequiredMultiContainmentValueManager<Membership>(kermlBase.INSTANCE.Type_inheritedMembership, this);
        this._endFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Type_endFeature, this);
        this._isSufficient = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Type_isSufficient, this);
        this._ownedConjugator = new RequiredMultiContainmentValueManager<Conjugation>(kermlBase.INSTANCE.Type_ownedConjugator, this);
        this._isConjugated = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Type_isConjugated, this);
        this._inheritedFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Type_inheritedFeature, this);
        this._multiplicity = new RequiredMultiContainmentValueManager<Multiplicity>(kermlBase.INSTANCE.Type_multiplicity, this);
        this._unioningType = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Type_unioningType, this);
        this._ownedIntersecting = new RequiredMultiContainmentValueManager<Intersecting>(kermlBase.INSTANCE.Type_ownedIntersecting, this);
        this._intersectingType = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Type_intersectingType, this);
        this._ownedUnioning = new RequiredMultiContainmentValueManager<Unioning>(kermlBase.INSTANCE.Type_ownedUnioning, this);
        this._ownedDisjoining = new RequiredMultiContainmentValueManager<Disjoining>(kermlBase.INSTANCE.Type_ownedDisjoining, this);
        this._featureMembership = new RequiredMultiContainmentValueManager<FeatureMembership>(kermlBase.INSTANCE.Type_featureMembership, this);
        this._differencingType = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Type_differencingType, this);
        this._ownedDifferencing = new RequiredMultiContainmentValueManager<Differencing>(kermlBase.INSTANCE.Type_ownedDifferencing, this);
        this._directedFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Type_directedFeature, this);
        this._ownedSpecialization = new RequiredMultiContainmentValueManager<Specialization>(kermlBase.INSTANCE.Type_ownedSpecialization, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case kermlBase.INSTANCE.Type_isAbstract.key: return this._isAbstract;
            case kermlBase.INSTANCE.Type_isSufficient.key: return this._isSufficient;
            case kermlBase.INSTANCE.Type_isConjugated.key: return this._isConjugated;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Type_ownedFeatureMembership.key: return this._ownedFeatureMembership;
            case kermlBase.INSTANCE.Type_ownedFeature.key: return this._ownedFeature;
            case kermlBase.INSTANCE.Type_ownedEndFeature.key: return this._ownedEndFeature;
            case kermlBase.INSTANCE.Type_feature.key: return this._feature;
            case kermlBase.INSTANCE.Type_input.key: return this._input;
            case kermlBase.INSTANCE.Type_output.key: return this._output;
            case kermlBase.INSTANCE.Type_inheritedMembership.key: return this._inheritedMembership;
            case kermlBase.INSTANCE.Type_endFeature.key: return this._endFeature;
            case kermlBase.INSTANCE.Type_ownedConjugator.key: return this._ownedConjugator;
            case kermlBase.INSTANCE.Type_inheritedFeature.key: return this._inheritedFeature;
            case kermlBase.INSTANCE.Type_multiplicity.key: return this._multiplicity;
            case kermlBase.INSTANCE.Type_unioningType.key: return this._unioningType;
            case kermlBase.INSTANCE.Type_ownedIntersecting.key: return this._ownedIntersecting;
            case kermlBase.INSTANCE.Type_intersectingType.key: return this._intersectingType;
            case kermlBase.INSTANCE.Type_ownedUnioning.key: return this._ownedUnioning;
            case kermlBase.INSTANCE.Type_ownedDisjoining.key: return this._ownedDisjoining;
            case kermlBase.INSTANCE.Type_featureMembership.key: return this._featureMembership;
            case kermlBase.INSTANCE.Type_differencingType.key: return this._differencingType;
            case kermlBase.INSTANCE.Type_ownedDifferencing.key: return this._ownedDifferencing;
            case kermlBase.INSTANCE.Type_directedFeature.key: return this._directedFeature;
            case kermlBase.INSTANCE.Type_ownedSpecialization.key: return this._ownedSpecialization;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class kermlClassifier extends Type {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): kermlClassifier {
        return new kermlClassifier(kermlBase.INSTANCE.kermlClassifier, id, receiveDelta, parentInfo);
    }

    private readonly _ownedSubclassification: RequiredMultiContainmentValueManager<Subclassification>;
    get ownedSubclassification(): Subclassification[] {
        return this._ownedSubclassification.get();
    }
    addOwnedSubclassification(newValue: Subclassification) {
        this._ownedSubclassification.add(newValue);
    }
    removeOwnedSubclassification(valueToRemove: Subclassification) {
        this._ownedSubclassification.remove(valueToRemove);
    }
    addOwnedSubclassificationAtIndex(newValue: Subclassification, index: number) {
        this._ownedSubclassification.insertAtIndex(newValue, index);
    }
    moveOwnedSubclassification(oldIndex: number, newIndex: number) {
        this._ownedSubclassification.move(oldIndex, newIndex);
    }
    replaceOwnedSubclassificationAtIndex(movedChild: Subclassification, newIndex: number) {
        this._ownedSubclassification.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._ownedSubclassification = new RequiredMultiContainmentValueManager<Subclassification>(kermlBase.INSTANCE.kermlClassifier_ownedSubclassification, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === kermlBase.INSTANCE.kermlClassifier_ownedSubclassification.key) {
            return this._ownedSubclassification;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class Association extends kermlClassifier {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Association {
        return new Association(kermlBase.INSTANCE.Association, id, receiveDelta, parentInfo);
    }

    private readonly _relatedType: RequiredMultiContainmentValueManager<Type>;
    get relatedType(): Type[] {
        return this._relatedType.get();
    }
    addRelatedType(newValue: Type) {
        this._relatedType.add(newValue);
    }
    removeRelatedType(valueToRemove: Type) {
        this._relatedType.remove(valueToRemove);
    }
    addRelatedTypeAtIndex(newValue: Type, index: number) {
        this._relatedType.insertAtIndex(newValue, index);
    }
    moveRelatedType(oldIndex: number, newIndex: number) {
        this._relatedType.move(oldIndex, newIndex);
    }
    replaceRelatedTypeAtIndex(movedChild: Type, newIndex: number) {
        this._relatedType.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _sourceType: RequiredMultiContainmentValueManager<Type>;
    get sourceType(): Type[] {
        return this._sourceType.get();
    }
    addSourceType(newValue: Type) {
        this._sourceType.add(newValue);
    }
    removeSourceType(valueToRemove: Type) {
        this._sourceType.remove(valueToRemove);
    }
    addSourceTypeAtIndex(newValue: Type, index: number) {
        this._sourceType.insertAtIndex(newValue, index);
    }
    moveSourceType(oldIndex: number, newIndex: number) {
        this._sourceType.move(oldIndex, newIndex);
    }
    replaceSourceTypeAtIndex(movedChild: Type, newIndex: number) {
        this._sourceType.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _targetType: RequiredMultiContainmentValueManager<Type>;
    get targetType(): Type[] {
        return this._targetType.get();
    }
    addTargetType(newValue: Type) {
        this._targetType.add(newValue);
    }
    removeTargetType(valueToRemove: Type) {
        this._targetType.remove(valueToRemove);
    }
    addTargetTypeAtIndex(newValue: Type, index: number) {
        this._targetType.insertAtIndex(newValue, index);
    }
    moveTargetType(oldIndex: number, newIndex: number) {
        this._targetType.move(oldIndex, newIndex);
    }
    replaceTargetTypeAtIndex(movedChild: Type, newIndex: number) {
        this._targetType.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _associationEnd: RequiredMultiContainmentValueManager<Feature>;
    get associationEnd(): Feature[] {
        return this._associationEnd.get();
    }
    addAssociationEnd(newValue: Feature) {
        this._associationEnd.add(newValue);
    }
    removeAssociationEnd(valueToRemove: Feature) {
        this._associationEnd.remove(valueToRemove);
    }
    addAssociationEndAtIndex(newValue: Feature, index: number) {
        this._associationEnd.insertAtIndex(newValue, index);
    }
    moveAssociationEnd(oldIndex: number, newIndex: number) {
        this._associationEnd.move(oldIndex, newIndex);
    }
    replaceAssociationEndAtIndex(movedChild: Feature, newIndex: number) {
        this._associationEnd.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._relatedType = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Association_relatedType, this);
        this._sourceType = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Association_sourceType, this);
        this._targetType = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Association_targetType, this);
        this._associationEnd = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Association_associationEnd, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Association_relatedType.key: return this._relatedType;
            case kermlBase.INSTANCE.Association_sourceType.key: return this._sourceType;
            case kermlBase.INSTANCE.Association_targetType.key: return this._targetType;
            case kermlBase.INSTANCE.Association_associationEnd.key: return this._associationEnd;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class AssociationStructure extends Association {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): AssociationStructure {
        return new AssociationStructure(kermlBase.INSTANCE.AssociationStructure, id, receiveDelta, parentInfo);
    }
}

export class Class extends kermlClassifier {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Class {
        return new Class(kermlBase.INSTANCE.Class, id, receiveDelta, parentInfo);
    }
}

export class Behavior extends Class {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Behavior {
        return new Behavior(kermlBase.INSTANCE.Behavior, id, receiveDelta, parentInfo);
    }

    private readonly _step: RequiredMultiContainmentValueManager<Step>;
    get step(): Step[] {
        return this._step.get();
    }
    addStep(newValue: Step) {
        this._step.add(newValue);
    }
    removeStep(valueToRemove: Step) {
        this._step.remove(valueToRemove);
    }
    addStepAtIndex(newValue: Step, index: number) {
        this._step.insertAtIndex(newValue, index);
    }
    moveStep(oldIndex: number, newIndex: number) {
        this._step.move(oldIndex, newIndex);
    }
    replaceStepAtIndex(movedChild: Step, newIndex: number) {
        this._step.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _parameter: RequiredMultiContainmentValueManager<Feature>;
    get parameter(): Feature[] {
        return this._parameter.get();
    }
    addParameter(newValue: Feature) {
        this._parameter.add(newValue);
    }
    removeParameter(valueToRemove: Feature) {
        this._parameter.remove(valueToRemove);
    }
    addParameterAtIndex(newValue: Feature, index: number) {
        this._parameter.insertAtIndex(newValue, index);
    }
    moveParameter(oldIndex: number, newIndex: number) {
        this._parameter.move(oldIndex, newIndex);
    }
    replaceParameterAtIndex(movedChild: Feature, newIndex: number) {
        this._parameter.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._step = new RequiredMultiContainmentValueManager<Step>(kermlBase.INSTANCE.Behavior_step, this);
        this._parameter = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Behavior_parameter, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Behavior_step.key: return this._step;
            case kermlBase.INSTANCE.Behavior_parameter.key: return this._parameter;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Feature extends Type {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Feature {
        return new Feature(kermlBase.INSTANCE.Feature, id, receiveDelta, parentInfo);
    }

    private readonly _owningType: RequiredMultiContainmentValueManager<Type>;
    get owningType(): Type[] {
        return this._owningType.get();
    }
    addOwningType(newValue: Type) {
        this._owningType.add(newValue);
    }
    removeOwningType(valueToRemove: Type) {
        this._owningType.remove(valueToRemove);
    }
    addOwningTypeAtIndex(newValue: Type, index: number) {
        this._owningType.insertAtIndex(newValue, index);
    }
    moveOwningType(oldIndex: number, newIndex: number) {
        this._owningType.move(oldIndex, newIndex);
    }
    replaceOwningTypeAtIndex(movedChild: Type, newIndex: number) {
        this._owningType.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _isUnique: RequiredPropertyValueManager<string>;
    get isUnique(): string {
        return this._isUnique.get();
    }
    set isUnique(newValue: string) {
        this._isUnique.set(newValue);
    }

    private readonly _isOrdered: RequiredPropertyValueManager<string>;
    get isOrdered(): string {
        return this._isOrdered.get();
    }
    set isOrdered(newValue: string) {
        this._isOrdered.set(newValue);
    }

    private readonly _type: RequiredMultiContainmentValueManager<Type>;
    get type(): Type[] {
        return this._type.get();
    }
    addType(newValue: Type) {
        this._type.add(newValue);
    }
    removeType(valueToRemove: Type) {
        this._type.remove(valueToRemove);
    }
    addTypeAtIndex(newValue: Type, index: number) {
        this._type.insertAtIndex(newValue, index);
    }
    moveType(oldIndex: number, newIndex: number) {
        this._type.move(oldIndex, newIndex);
    }
    replaceTypeAtIndex(movedChild: Type, newIndex: number) {
        this._type.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedRedefinition: RequiredMultiContainmentValueManager<Redefinition>;
    get ownedRedefinition(): Redefinition[] {
        return this._ownedRedefinition.get();
    }
    addOwnedRedefinition(newValue: Redefinition) {
        this._ownedRedefinition.add(newValue);
    }
    removeOwnedRedefinition(valueToRemove: Redefinition) {
        this._ownedRedefinition.remove(valueToRemove);
    }
    addOwnedRedefinitionAtIndex(newValue: Redefinition, index: number) {
        this._ownedRedefinition.insertAtIndex(newValue, index);
    }
    moveOwnedRedefinition(oldIndex: number, newIndex: number) {
        this._ownedRedefinition.move(oldIndex, newIndex);
    }
    replaceOwnedRedefinitionAtIndex(movedChild: Redefinition, newIndex: number) {
        this._ownedRedefinition.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedSubsetting: RequiredMultiContainmentValueManager<Subsetting>;
    get ownedSubsetting(): Subsetting[] {
        return this._ownedSubsetting.get();
    }
    addOwnedSubsetting(newValue: Subsetting) {
        this._ownedSubsetting.add(newValue);
    }
    removeOwnedSubsetting(valueToRemove: Subsetting) {
        this._ownedSubsetting.remove(valueToRemove);
    }
    addOwnedSubsettingAtIndex(newValue: Subsetting, index: number) {
        this._ownedSubsetting.insertAtIndex(newValue, index);
    }
    moveOwnedSubsetting(oldIndex: number, newIndex: number) {
        this._ownedSubsetting.move(oldIndex, newIndex);
    }
    replaceOwnedSubsettingAtIndex(movedChild: Subsetting, newIndex: number) {
        this._ownedSubsetting.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _isComposite: RequiredPropertyValueManager<string>;
    get isComposite(): string {
        return this._isComposite.get();
    }
    set isComposite(newValue: string) {
        this._isComposite.set(newValue);
    }

    private readonly _isEnd: RequiredPropertyValueManager<string>;
    get isEnd(): string {
        return this._isEnd.get();
    }
    set isEnd(newValue: string) {
        this._isEnd.set(newValue);
    }

    private readonly _endOwningType: RequiredMultiContainmentValueManager<Type>;
    get endOwningType(): Type[] {
        return this._endOwningType.get();
    }
    addEndOwningType(newValue: Type) {
        this._endOwningType.add(newValue);
    }
    removeEndOwningType(valueToRemove: Type) {
        this._endOwningType.remove(valueToRemove);
    }
    addEndOwningTypeAtIndex(newValue: Type, index: number) {
        this._endOwningType.insertAtIndex(newValue, index);
    }
    moveEndOwningType(oldIndex: number, newIndex: number) {
        this._endOwningType.move(oldIndex, newIndex);
    }
    replaceEndOwningTypeAtIndex(movedChild: Type, newIndex: number) {
        this._endOwningType.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedTyping: RequiredMultiContainmentValueManager<FeatureTyping>;
    get ownedTyping(): FeatureTyping[] {
        return this._ownedTyping.get();
    }
    addOwnedTyping(newValue: FeatureTyping) {
        this._ownedTyping.add(newValue);
    }
    removeOwnedTyping(valueToRemove: FeatureTyping) {
        this._ownedTyping.remove(valueToRemove);
    }
    addOwnedTypingAtIndex(newValue: FeatureTyping, index: number) {
        this._ownedTyping.insertAtIndex(newValue, index);
    }
    moveOwnedTyping(oldIndex: number, newIndex: number) {
        this._ownedTyping.move(oldIndex, newIndex);
    }
    replaceOwnedTypingAtIndex(movedChild: FeatureTyping, newIndex: number) {
        this._ownedTyping.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _featuringType: RequiredMultiContainmentValueManager<Type>;
    get featuringType(): Type[] {
        return this._featuringType.get();
    }
    addFeaturingType(newValue: Type) {
        this._featuringType.add(newValue);
    }
    removeFeaturingType(valueToRemove: Type) {
        this._featuringType.remove(valueToRemove);
    }
    addFeaturingTypeAtIndex(newValue: Type, index: number) {
        this._featuringType.insertAtIndex(newValue, index);
    }
    moveFeaturingType(oldIndex: number, newIndex: number) {
        this._featuringType.move(oldIndex, newIndex);
    }
    replaceFeaturingTypeAtIndex(movedChild: Type, newIndex: number) {
        this._featuringType.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedTypeFeaturing: RequiredMultiContainmentValueManager<TypeFeaturing>;
    get ownedTypeFeaturing(): TypeFeaturing[] {
        return this._ownedTypeFeaturing.get();
    }
    addOwnedTypeFeaturing(newValue: TypeFeaturing) {
        this._ownedTypeFeaturing.add(newValue);
    }
    removeOwnedTypeFeaturing(valueToRemove: TypeFeaturing) {
        this._ownedTypeFeaturing.remove(valueToRemove);
    }
    addOwnedTypeFeaturingAtIndex(newValue: TypeFeaturing, index: number) {
        this._ownedTypeFeaturing.insertAtIndex(newValue, index);
    }
    moveOwnedTypeFeaturing(oldIndex: number, newIndex: number) {
        this._ownedTypeFeaturing.move(oldIndex, newIndex);
    }
    replaceOwnedTypeFeaturingAtIndex(movedChild: TypeFeaturing, newIndex: number) {
        this._ownedTypeFeaturing.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _isDerived: RequiredPropertyValueManager<string>;
    get isDerived(): string {
        return this._isDerived.get();
    }
    set isDerived(newValue: string) {
        this._isDerived.set(newValue);
    }

    private readonly _chainingFeature: RequiredMultiContainmentValueManager<Feature>;
    get chainingFeature(): Feature[] {
        return this._chainingFeature.get();
    }
    addChainingFeature(newValue: Feature) {
        this._chainingFeature.add(newValue);
    }
    removeChainingFeature(valueToRemove: Feature) {
        this._chainingFeature.remove(valueToRemove);
    }
    addChainingFeatureAtIndex(newValue: Feature, index: number) {
        this._chainingFeature.insertAtIndex(newValue, index);
    }
    moveChainingFeature(oldIndex: number, newIndex: number) {
        this._chainingFeature.move(oldIndex, newIndex);
    }
    replaceChainingFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._chainingFeature.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedFeatureInverting: RequiredMultiContainmentValueManager<FeatureInverting>;
    get ownedFeatureInverting(): FeatureInverting[] {
        return this._ownedFeatureInverting.get();
    }
    addOwnedFeatureInverting(newValue: FeatureInverting) {
        this._ownedFeatureInverting.add(newValue);
    }
    removeOwnedFeatureInverting(valueToRemove: FeatureInverting) {
        this._ownedFeatureInverting.remove(valueToRemove);
    }
    addOwnedFeatureInvertingAtIndex(newValue: FeatureInverting, index: number) {
        this._ownedFeatureInverting.insertAtIndex(newValue, index);
    }
    moveOwnedFeatureInverting(oldIndex: number, newIndex: number) {
        this._ownedFeatureInverting.move(oldIndex, newIndex);
    }
    replaceOwnedFeatureInvertingAtIndex(movedChild: FeatureInverting, newIndex: number) {
        this._ownedFeatureInverting.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedFeatureChaining: RequiredMultiContainmentValueManager<FeatureChaining>;
    get ownedFeatureChaining(): FeatureChaining[] {
        return this._ownedFeatureChaining.get();
    }
    addOwnedFeatureChaining(newValue: FeatureChaining) {
        this._ownedFeatureChaining.add(newValue);
    }
    removeOwnedFeatureChaining(valueToRemove: FeatureChaining) {
        this._ownedFeatureChaining.remove(valueToRemove);
    }
    addOwnedFeatureChainingAtIndex(newValue: FeatureChaining, index: number) {
        this._ownedFeatureChaining.insertAtIndex(newValue, index);
    }
    moveOwnedFeatureChaining(oldIndex: number, newIndex: number) {
        this._ownedFeatureChaining.move(oldIndex, newIndex);
    }
    replaceOwnedFeatureChainingAtIndex(movedChild: FeatureChaining, newIndex: number) {
        this._ownedFeatureChaining.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _isPortion: RequiredPropertyValueManager<string>;
    get isPortion(): string {
        return this._isPortion.get();
    }
    set isPortion(newValue: string) {
        this._isPortion.set(newValue);
    }

    private readonly _isVariable: RequiredPropertyValueManager<string>;
    get isVariable(): string {
        return this._isVariable.get();
    }
    set isVariable(newValue: string) {
        this._isVariable.set(newValue);
    }

    private readonly _isConstant: RequiredPropertyValueManager<string>;
    get isConstant(): string {
        return this._isConstant.get();
    }
    set isConstant(newValue: string) {
        this._isConstant.set(newValue);
    }

    private readonly _ownedReferenceSubsetting: RequiredMultiContainmentValueManager<ReferenceSubsetting>;
    get ownedReferenceSubsetting(): ReferenceSubsetting[] {
        return this._ownedReferenceSubsetting.get();
    }
    addOwnedReferenceSubsetting(newValue: ReferenceSubsetting) {
        this._ownedReferenceSubsetting.add(newValue);
    }
    removeOwnedReferenceSubsetting(valueToRemove: ReferenceSubsetting) {
        this._ownedReferenceSubsetting.remove(valueToRemove);
    }
    addOwnedReferenceSubsettingAtIndex(newValue: ReferenceSubsetting, index: number) {
        this._ownedReferenceSubsetting.insertAtIndex(newValue, index);
    }
    moveOwnedReferenceSubsetting(oldIndex: number, newIndex: number) {
        this._ownedReferenceSubsetting.move(oldIndex, newIndex);
    }
    replaceOwnedReferenceSubsettingAtIndex(movedChild: ReferenceSubsetting, newIndex: number) {
        this._ownedReferenceSubsetting.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _featureTarget: RequiredMultiContainmentValueManager<Feature>;
    get featureTarget(): Feature[] {
        return this._featureTarget.get();
    }
    addFeatureTarget(newValue: Feature) {
        this._featureTarget.add(newValue);
    }
    removeFeatureTarget(valueToRemove: Feature) {
        this._featureTarget.remove(valueToRemove);
    }
    addFeatureTargetAtIndex(newValue: Feature, index: number) {
        this._featureTarget.insertAtIndex(newValue, index);
    }
    moveFeatureTarget(oldIndex: number, newIndex: number) {
        this._featureTarget.move(oldIndex, newIndex);
    }
    replaceFeatureTargetAtIndex(movedChild: Feature, newIndex: number) {
        this._featureTarget.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _crossFeature: RequiredMultiContainmentValueManager<Feature>;
    get crossFeature(): Feature[] {
        return this._crossFeature.get();
    }
    addCrossFeature(newValue: Feature) {
        this._crossFeature.add(newValue);
    }
    removeCrossFeature(valueToRemove: Feature) {
        this._crossFeature.remove(valueToRemove);
    }
    addCrossFeatureAtIndex(newValue: Feature, index: number) {
        this._crossFeature.insertAtIndex(newValue, index);
    }
    moveCrossFeature(oldIndex: number, newIndex: number) {
        this._crossFeature.move(oldIndex, newIndex);
    }
    replaceCrossFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._crossFeature.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _direction: RequiredPropertyValueManager<FeatureDirectionKind>;
    get direction(): FeatureDirectionKind {
        return this._direction.get();
    }
    set direction(newValue: FeatureDirectionKind) {
        this._direction.set(newValue);
    }

    private readonly _ownedCrossSubsetting: RequiredMultiContainmentValueManager<CrossSubsetting>;
    get ownedCrossSubsetting(): CrossSubsetting[] {
        return this._ownedCrossSubsetting.get();
    }
    addOwnedCrossSubsetting(newValue: CrossSubsetting) {
        this._ownedCrossSubsetting.add(newValue);
    }
    removeOwnedCrossSubsetting(valueToRemove: CrossSubsetting) {
        this._ownedCrossSubsetting.remove(valueToRemove);
    }
    addOwnedCrossSubsettingAtIndex(newValue: CrossSubsetting, index: number) {
        this._ownedCrossSubsetting.insertAtIndex(newValue, index);
    }
    moveOwnedCrossSubsetting(oldIndex: number, newIndex: number) {
        this._ownedCrossSubsetting.move(oldIndex, newIndex);
    }
    replaceOwnedCrossSubsettingAtIndex(movedChild: CrossSubsetting, newIndex: number) {
        this._ownedCrossSubsetting.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _owningFeatureMembership: RequiredMultiContainmentValueManager<FeatureMembership>;
    get owningFeatureMembership(): FeatureMembership[] {
        return this._owningFeatureMembership.get();
    }
    addOwningFeatureMembership(newValue: FeatureMembership) {
        this._owningFeatureMembership.add(newValue);
    }
    removeOwningFeatureMembership(valueToRemove: FeatureMembership) {
        this._owningFeatureMembership.remove(valueToRemove);
    }
    addOwningFeatureMembershipAtIndex(newValue: FeatureMembership, index: number) {
        this._owningFeatureMembership.insertAtIndex(newValue, index);
    }
    moveOwningFeatureMembership(oldIndex: number, newIndex: number) {
        this._owningFeatureMembership.move(oldIndex, newIndex);
    }
    replaceOwningFeatureMembershipAtIndex(movedChild: FeatureMembership, newIndex: number) {
        this._owningFeatureMembership.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._owningType = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Feature_owningType, this);
        this._isUnique = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Feature_isUnique, this);
        this._isOrdered = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Feature_isOrdered, this);
        this._type = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Feature_type, this);
        this._ownedRedefinition = new RequiredMultiContainmentValueManager<Redefinition>(kermlBase.INSTANCE.Feature_ownedRedefinition, this);
        this._ownedSubsetting = new RequiredMultiContainmentValueManager<Subsetting>(kermlBase.INSTANCE.Feature_ownedSubsetting, this);
        this._isComposite = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Feature_isComposite, this);
        this._isEnd = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Feature_isEnd, this);
        this._endOwningType = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Feature_endOwningType, this);
        this._ownedTyping = new RequiredMultiContainmentValueManager<FeatureTyping>(kermlBase.INSTANCE.Feature_ownedTyping, this);
        this._featuringType = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Feature_featuringType, this);
        this._ownedTypeFeaturing = new RequiredMultiContainmentValueManager<TypeFeaturing>(kermlBase.INSTANCE.Feature_ownedTypeFeaturing, this);
        this._isDerived = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Feature_isDerived, this);
        this._chainingFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Feature_chainingFeature, this);
        this._ownedFeatureInverting = new RequiredMultiContainmentValueManager<FeatureInverting>(kermlBase.INSTANCE.Feature_ownedFeatureInverting, this);
        this._ownedFeatureChaining = new RequiredMultiContainmentValueManager<FeatureChaining>(kermlBase.INSTANCE.Feature_ownedFeatureChaining, this);
        this._isPortion = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Feature_isPortion, this);
        this._isVariable = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Feature_isVariable, this);
        this._isConstant = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Feature_isConstant, this);
        this._ownedReferenceSubsetting = new RequiredMultiContainmentValueManager<ReferenceSubsetting>(kermlBase.INSTANCE.Feature_ownedReferenceSubsetting, this);
        this._featureTarget = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Feature_featureTarget, this);
        this._crossFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Feature_crossFeature, this);
        this._direction = new RequiredPropertyValueManager<FeatureDirectionKind>(kermlBase.INSTANCE.Feature_direction, this);
        this._ownedCrossSubsetting = new RequiredMultiContainmentValueManager<CrossSubsetting>(kermlBase.INSTANCE.Feature_ownedCrossSubsetting, this);
        this._owningFeatureMembership = new RequiredMultiContainmentValueManager<FeatureMembership>(kermlBase.INSTANCE.Feature_owningFeatureMembership, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case kermlBase.INSTANCE.Feature_isUnique.key: return this._isUnique;
            case kermlBase.INSTANCE.Feature_isOrdered.key: return this._isOrdered;
            case kermlBase.INSTANCE.Feature_isComposite.key: return this._isComposite;
            case kermlBase.INSTANCE.Feature_isEnd.key: return this._isEnd;
            case kermlBase.INSTANCE.Feature_isDerived.key: return this._isDerived;
            case kermlBase.INSTANCE.Feature_isPortion.key: return this._isPortion;
            case kermlBase.INSTANCE.Feature_isVariable.key: return this._isVariable;
            case kermlBase.INSTANCE.Feature_isConstant.key: return this._isConstant;
            case kermlBase.INSTANCE.Feature_direction.key: return this._direction;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Feature_owningType.key: return this._owningType;
            case kermlBase.INSTANCE.Feature_type.key: return this._type;
            case kermlBase.INSTANCE.Feature_ownedRedefinition.key: return this._ownedRedefinition;
            case kermlBase.INSTANCE.Feature_ownedSubsetting.key: return this._ownedSubsetting;
            case kermlBase.INSTANCE.Feature_endOwningType.key: return this._endOwningType;
            case kermlBase.INSTANCE.Feature_ownedTyping.key: return this._ownedTyping;
            case kermlBase.INSTANCE.Feature_featuringType.key: return this._featuringType;
            case kermlBase.INSTANCE.Feature_ownedTypeFeaturing.key: return this._ownedTypeFeaturing;
            case kermlBase.INSTANCE.Feature_chainingFeature.key: return this._chainingFeature;
            case kermlBase.INSTANCE.Feature_ownedFeatureInverting.key: return this._ownedFeatureInverting;
            case kermlBase.INSTANCE.Feature_ownedFeatureChaining.key: return this._ownedFeatureChaining;
            case kermlBase.INSTANCE.Feature_ownedReferenceSubsetting.key: return this._ownedReferenceSubsetting;
            case kermlBase.INSTANCE.Feature_featureTarget.key: return this._featureTarget;
            case kermlBase.INSTANCE.Feature_crossFeature.key: return this._crossFeature;
            case kermlBase.INSTANCE.Feature_ownedCrossSubsetting.key: return this._ownedCrossSubsetting;
            case kermlBase.INSTANCE.Feature_owningFeatureMembership.key: return this._owningFeatureMembership;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Connector extends Feature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Connector {
        return new Connector(kermlBase.INSTANCE.Connector, id, receiveDelta, parentInfo);
    }

    private readonly _relatedFeature: RequiredMultiContainmentValueManager<Feature>;
    get relatedFeature(): Feature[] {
        return this._relatedFeature.get();
    }
    addRelatedFeature(newValue: Feature) {
        this._relatedFeature.add(newValue);
    }
    removeRelatedFeature(valueToRemove: Feature) {
        this._relatedFeature.remove(valueToRemove);
    }
    addRelatedFeatureAtIndex(newValue: Feature, index: number) {
        this._relatedFeature.insertAtIndex(newValue, index);
    }
    moveRelatedFeature(oldIndex: number, newIndex: number) {
        this._relatedFeature.move(oldIndex, newIndex);
    }
    replaceRelatedFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._relatedFeature.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _association: RequiredMultiContainmentValueManager<Association>;
    get association(): Association[] {
        return this._association.get();
    }
    addAssociation(newValue: Association) {
        this._association.add(newValue);
    }
    removeAssociation(valueToRemove: Association) {
        this._association.remove(valueToRemove);
    }
    addAssociationAtIndex(newValue: Association, index: number) {
        this._association.insertAtIndex(newValue, index);
    }
    moveAssociation(oldIndex: number, newIndex: number) {
        this._association.move(oldIndex, newIndex);
    }
    replaceAssociationAtIndex(movedChild: Association, newIndex: number) {
        this._association.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _connectorEnd: RequiredMultiContainmentValueManager<Feature>;
    get connectorEnd(): Feature[] {
        return this._connectorEnd.get();
    }
    addConnectorEnd(newValue: Feature) {
        this._connectorEnd.add(newValue);
    }
    removeConnectorEnd(valueToRemove: Feature) {
        this._connectorEnd.remove(valueToRemove);
    }
    addConnectorEndAtIndex(newValue: Feature, index: number) {
        this._connectorEnd.insertAtIndex(newValue, index);
    }
    moveConnectorEnd(oldIndex: number, newIndex: number) {
        this._connectorEnd.move(oldIndex, newIndex);
    }
    replaceConnectorEndAtIndex(movedChild: Feature, newIndex: number) {
        this._connectorEnd.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _sourceFeature: RequiredMultiContainmentValueManager<Feature>;
    get sourceFeature(): Feature[] {
        return this._sourceFeature.get();
    }
    addSourceFeature(newValue: Feature) {
        this._sourceFeature.add(newValue);
    }
    removeSourceFeature(valueToRemove: Feature) {
        this._sourceFeature.remove(valueToRemove);
    }
    addSourceFeatureAtIndex(newValue: Feature, index: number) {
        this._sourceFeature.insertAtIndex(newValue, index);
    }
    moveSourceFeature(oldIndex: number, newIndex: number) {
        this._sourceFeature.move(oldIndex, newIndex);
    }
    replaceSourceFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._sourceFeature.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _targetFeature: RequiredMultiContainmentValueManager<Feature>;
    get targetFeature(): Feature[] {
        return this._targetFeature.get();
    }
    addTargetFeature(newValue: Feature) {
        this._targetFeature.add(newValue);
    }
    removeTargetFeature(valueToRemove: Feature) {
        this._targetFeature.remove(valueToRemove);
    }
    addTargetFeatureAtIndex(newValue: Feature, index: number) {
        this._targetFeature.insertAtIndex(newValue, index);
    }
    moveTargetFeature(oldIndex: number, newIndex: number) {
        this._targetFeature.move(oldIndex, newIndex);
    }
    replaceTargetFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._targetFeature.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _defaultFeaturingType: RequiredMultiContainmentValueManager<Type>;
    get defaultFeaturingType(): Type[] {
        return this._defaultFeaturingType.get();
    }
    addDefaultFeaturingType(newValue: Type) {
        this._defaultFeaturingType.add(newValue);
    }
    removeDefaultFeaturingType(valueToRemove: Type) {
        this._defaultFeaturingType.remove(valueToRemove);
    }
    addDefaultFeaturingTypeAtIndex(newValue: Type, index: number) {
        this._defaultFeaturingType.insertAtIndex(newValue, index);
    }
    moveDefaultFeaturingType(oldIndex: number, newIndex: number) {
        this._defaultFeaturingType.move(oldIndex, newIndex);
    }
    replaceDefaultFeaturingTypeAtIndex(movedChild: Type, newIndex: number) {
        this._defaultFeaturingType.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._relatedFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Connector_relatedFeature, this);
        this._association = new RequiredMultiContainmentValueManager<Association>(kermlBase.INSTANCE.Connector_association, this);
        this._connectorEnd = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Connector_connectorEnd, this);
        this._sourceFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Connector_sourceFeature, this);
        this._targetFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Connector_targetFeature, this);
        this._defaultFeaturingType = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Connector_defaultFeaturingType, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Connector_relatedFeature.key: return this._relatedFeature;
            case kermlBase.INSTANCE.Connector_association.key: return this._association;
            case kermlBase.INSTANCE.Connector_connectorEnd.key: return this._connectorEnd;
            case kermlBase.INSTANCE.Connector_sourceFeature.key: return this._sourceFeature;
            case kermlBase.INSTANCE.Connector_targetFeature.key: return this._targetFeature;
            case kermlBase.INSTANCE.Connector_defaultFeaturingType.key: return this._defaultFeaturingType;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class BindingConnector extends Connector {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): BindingConnector {
        return new BindingConnector(kermlBase.INSTANCE.BindingConnector, id, receiveDelta, parentInfo);
    }
}

export class Step extends Feature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Step {
        return new Step(kermlBase.INSTANCE.Step, id, receiveDelta, parentInfo);
    }

    private readonly _behavior: RequiredMultiContainmentValueManager<Behavior>;
    get behavior(): Behavior[] {
        return this._behavior.get();
    }
    addBehavior(newValue: Behavior) {
        this._behavior.add(newValue);
    }
    removeBehavior(valueToRemove: Behavior) {
        this._behavior.remove(valueToRemove);
    }
    addBehaviorAtIndex(newValue: Behavior, index: number) {
        this._behavior.insertAtIndex(newValue, index);
    }
    moveBehavior(oldIndex: number, newIndex: number) {
        this._behavior.move(oldIndex, newIndex);
    }
    replaceBehaviorAtIndex(movedChild: Behavior, newIndex: number) {
        this._behavior.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _parameter: RequiredMultiContainmentValueManager<Feature>;
    get parameter(): Feature[] {
        return this._parameter.get();
    }
    addParameter(newValue: Feature) {
        this._parameter.add(newValue);
    }
    removeParameter(valueToRemove: Feature) {
        this._parameter.remove(valueToRemove);
    }
    addParameterAtIndex(newValue: Feature, index: number) {
        this._parameter.insertAtIndex(newValue, index);
    }
    moveParameter(oldIndex: number, newIndex: number) {
        this._parameter.move(oldIndex, newIndex);
    }
    replaceParameterAtIndex(movedChild: Feature, newIndex: number) {
        this._parameter.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._behavior = new RequiredMultiContainmentValueManager<Behavior>(kermlBase.INSTANCE.Step_behavior, this);
        this._parameter = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Step_parameter, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Step_behavior.key: return this._behavior;
            case kermlBase.INSTANCE.Step_parameter.key: return this._parameter;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Expression extends Step {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Expression {
        return new Expression(kermlBase.INSTANCE.Expression, id, receiveDelta, parentInfo);
    }

    private readonly _function: RequiredMultiContainmentValueManager<Function>;
    get function(): Function[] {
        return this._function.get();
    }
    addFunction(newValue: Function) {
        this._function.add(newValue);
    }
    removeFunction(valueToRemove: Function) {
        this._function.remove(valueToRemove);
    }
    addFunctionAtIndex(newValue: Function, index: number) {
        this._function.insertAtIndex(newValue, index);
    }
    moveFunction(oldIndex: number, newIndex: number) {
        this._function.move(oldIndex, newIndex);
    }
    replaceFunctionAtIndex(movedChild: Function, newIndex: number) {
        this._function.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _result: RequiredMultiContainmentValueManager<Feature>;
    get result(): Feature[] {
        return this._result.get();
    }
    addResult(newValue: Feature) {
        this._result.add(newValue);
    }
    removeResult(valueToRemove: Feature) {
        this._result.remove(valueToRemove);
    }
    addResultAtIndex(newValue: Feature, index: number) {
        this._result.insertAtIndex(newValue, index);
    }
    moveResult(oldIndex: number, newIndex: number) {
        this._result.move(oldIndex, newIndex);
    }
    replaceResultAtIndex(movedChild: Feature, newIndex: number) {
        this._result.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _isModelLevelEvaluable: RequiredPropertyValueManager<string>;
    get isModelLevelEvaluable(): string {
        return this._isModelLevelEvaluable.get();
    }
    set isModelLevelEvaluable(newValue: string) {
        this._isModelLevelEvaluable.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._function = new RequiredMultiContainmentValueManager<Function>(kermlBase.INSTANCE.Expression_function, this);
        this._result = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Expression_result, this);
        this._isModelLevelEvaluable = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Expression_isModelLevelEvaluable, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === kermlBase.INSTANCE.Expression_isModelLevelEvaluable.key) {
            return this._isModelLevelEvaluable;
        }
        return super.getPropertyValueManager(property);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Expression_function.key: return this._function;
            case kermlBase.INSTANCE.Expression_result.key: return this._result;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class BooleanExpression extends Expression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): BooleanExpression {
        return new BooleanExpression(kermlBase.INSTANCE.BooleanExpression, id, receiveDelta, parentInfo);
    }

    private readonly _predicate: RequiredMultiContainmentValueManager<Predicate>;
    get predicate(): Predicate[] {
        return this._predicate.get();
    }
    addPredicate(newValue: Predicate) {
        this._predicate.add(newValue);
    }
    removePredicate(valueToRemove: Predicate) {
        this._predicate.remove(valueToRemove);
    }
    addPredicateAtIndex(newValue: Predicate, index: number) {
        this._predicate.insertAtIndex(newValue, index);
    }
    movePredicate(oldIndex: number, newIndex: number) {
        this._predicate.move(oldIndex, newIndex);
    }
    replacePredicateAtIndex(movedChild: Predicate, newIndex: number) {
        this._predicate.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._predicate = new RequiredMultiContainmentValueManager<Predicate>(kermlBase.INSTANCE.BooleanExpression_predicate, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === kermlBase.INSTANCE.BooleanExpression_predicate.key) {
            return this._predicate;
        }
        return super.getContainmentValueManager(containment);
    }
}

export abstract class InstantiationExpression extends Expression {

    private readonly _argument: RequiredMultiContainmentValueManager<Expression>;
    get argument(): Expression[] {
        return this._argument.get();
    }
    addArgument(newValue: Expression) {
        this._argument.add(newValue);
    }
    removeArgument(valueToRemove: Expression) {
        this._argument.remove(valueToRemove);
    }
    addArgumentAtIndex(newValue: Expression, index: number) {
        this._argument.insertAtIndex(newValue, index);
    }
    moveArgument(oldIndex: number, newIndex: number) {
        this._argument.move(oldIndex, newIndex);
    }
    replaceArgumentAtIndex(movedChild: Expression, newIndex: number) {
        this._argument.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _instantiatedType: RequiredMultiContainmentValueManager<Type>;
    get instantiatedType(): Type[] {
        return this._instantiatedType.get();
    }
    addInstantiatedType(newValue: Type) {
        this._instantiatedType.add(newValue);
    }
    removeInstantiatedType(valueToRemove: Type) {
        this._instantiatedType.remove(valueToRemove);
    }
    addInstantiatedTypeAtIndex(newValue: Type, index: number) {
        this._instantiatedType.insertAtIndex(newValue, index);
    }
    moveInstantiatedType(oldIndex: number, newIndex: number) {
        this._instantiatedType.move(oldIndex, newIndex);
    }
    replaceInstantiatedTypeAtIndex(movedChild: Type, newIndex: number) {
        this._instantiatedType.replaceAtIndex(movedChild, newIndex);
    }

    protected constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._argument = new RequiredMultiContainmentValueManager<Expression>(kermlBase.INSTANCE.InstantiationExpression_argument, this);
        this._instantiatedType = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.InstantiationExpression_instantiatedType, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.InstantiationExpression_argument.key: return this._argument;
            case kermlBase.INSTANCE.InstantiationExpression_instantiatedType.key: return this._instantiatedType;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class InvocationExpression extends InstantiationExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): InvocationExpression {
        return new InvocationExpression(kermlBase.INSTANCE.InvocationExpression, id, receiveDelta, parentInfo);
    }
}

export class OperatorExpression extends InvocationExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): OperatorExpression {
        return new OperatorExpression(kermlBase.INSTANCE.OperatorExpression, id, receiveDelta, parentInfo);
    }

    private readonly _operator: RequiredPropertyValueManager<string>;
    get operator(): string {
        return this._operator.get();
    }
    set operator(newValue: string) {
        this._operator.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._operator = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.OperatorExpression_operator, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === kermlBase.INSTANCE.OperatorExpression_operator.key) {
            return this._operator;
        }
        return super.getPropertyValueManager(property);
    }
}

export class CollectExpression extends OperatorExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): CollectExpression {
        return new CollectExpression(kermlBase.INSTANCE.CollectExpression, id, receiveDelta, parentInfo);
    }
}

export class Comment extends AnnotatingElement {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Comment {
        return new Comment(kermlBase.INSTANCE.Comment, id, receiveDelta, parentInfo);
    }

    private readonly _locale: RequiredPropertyValueManager<string>;
    get locale(): string {
        return this._locale.get();
    }
    set locale(newValue: string) {
        this._locale.set(newValue);
    }

    private readonly _body: RequiredPropertyValueManager<string>;
    get body(): string {
        return this._body.get();
    }
    set body(newValue: string) {
        this._body.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._locale = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Comment_locale, this);
        this._body = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Comment_body, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case kermlBase.INSTANCE.Comment_locale.key: return this._locale;
            case kermlBase.INSTANCE.Comment_body.key: return this._body;
            default: return super.getPropertyValueManager(property);
        }
    }
}

export class Conjugation extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Conjugation {
        return new Conjugation(kermlBase.INSTANCE.Conjugation, id, receiveDelta, parentInfo);
    }

    private readonly _originalType: RequiredMultiContainmentValueManager<Type>;
    get originalType(): Type[] {
        return this._originalType.get();
    }
    addOriginalType(newValue: Type) {
        this._originalType.add(newValue);
    }
    removeOriginalType(valueToRemove: Type) {
        this._originalType.remove(valueToRemove);
    }
    addOriginalTypeAtIndex(newValue: Type, index: number) {
        this._originalType.insertAtIndex(newValue, index);
    }
    moveOriginalType(oldIndex: number, newIndex: number) {
        this._originalType.move(oldIndex, newIndex);
    }
    replaceOriginalTypeAtIndex(movedChild: Type, newIndex: number) {
        this._originalType.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _conjugatedType: RequiredMultiContainmentValueManager<Type>;
    get conjugatedType(): Type[] {
        return this._conjugatedType.get();
    }
    addConjugatedType(newValue: Type) {
        this._conjugatedType.add(newValue);
    }
    removeConjugatedType(valueToRemove: Type) {
        this._conjugatedType.remove(valueToRemove);
    }
    addConjugatedTypeAtIndex(newValue: Type, index: number) {
        this._conjugatedType.insertAtIndex(newValue, index);
    }
    moveConjugatedType(oldIndex: number, newIndex: number) {
        this._conjugatedType.move(oldIndex, newIndex);
    }
    replaceConjugatedTypeAtIndex(movedChild: Type, newIndex: number) {
        this._conjugatedType.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _owningType: RequiredMultiContainmentValueManager<Type>;
    get owningType(): Type[] {
        return this._owningType.get();
    }
    addOwningType(newValue: Type) {
        this._owningType.add(newValue);
    }
    removeOwningType(valueToRemove: Type) {
        this._owningType.remove(valueToRemove);
    }
    addOwningTypeAtIndex(newValue: Type, index: number) {
        this._owningType.insertAtIndex(newValue, index);
    }
    moveOwningType(oldIndex: number, newIndex: number) {
        this._owningType.move(oldIndex, newIndex);
    }
    replaceOwningTypeAtIndex(movedChild: Type, newIndex: number) {
        this._owningType.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._originalType = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Conjugation_originalType, this);
        this._conjugatedType = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Conjugation_conjugatedType, this);
        this._owningType = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Conjugation_owningType, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Conjugation_originalType.key: return this._originalType;
            case kermlBase.INSTANCE.Conjugation_conjugatedType.key: return this._conjugatedType;
            case kermlBase.INSTANCE.Conjugation_owningType.key: return this._owningType;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class ConstructorExpression extends InstantiationExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ConstructorExpression {
        return new ConstructorExpression(kermlBase.INSTANCE.ConstructorExpression, id, receiveDelta, parentInfo);
    }
}

export class Specialization extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Specialization {
        return new Specialization(kermlBase.INSTANCE.Specialization, id, receiveDelta, parentInfo);
    }

    private readonly _owningType: RequiredMultiContainmentValueManager<Type>;
    get owningType(): Type[] {
        return this._owningType.get();
    }
    addOwningType(newValue: Type) {
        this._owningType.add(newValue);
    }
    removeOwningType(valueToRemove: Type) {
        this._owningType.remove(valueToRemove);
    }
    addOwningTypeAtIndex(newValue: Type, index: number) {
        this._owningType.insertAtIndex(newValue, index);
    }
    moveOwningType(oldIndex: number, newIndex: number) {
        this._owningType.move(oldIndex, newIndex);
    }
    replaceOwningTypeAtIndex(movedChild: Type, newIndex: number) {
        this._owningType.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _general: RequiredMultiContainmentValueManager<Type>;
    get general(): Type[] {
        return this._general.get();
    }
    addGeneral(newValue: Type) {
        this._general.add(newValue);
    }
    removeGeneral(valueToRemove: Type) {
        this._general.remove(valueToRemove);
    }
    addGeneralAtIndex(newValue: Type, index: number) {
        this._general.insertAtIndex(newValue, index);
    }
    moveGeneral(oldIndex: number, newIndex: number) {
        this._general.move(oldIndex, newIndex);
    }
    replaceGeneralAtIndex(movedChild: Type, newIndex: number) {
        this._general.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _specific: RequiredMultiContainmentValueManager<Type>;
    get specific(): Type[] {
        return this._specific.get();
    }
    addSpecific(newValue: Type) {
        this._specific.add(newValue);
    }
    removeSpecific(valueToRemove: Type) {
        this._specific.remove(valueToRemove);
    }
    addSpecificAtIndex(newValue: Type, index: number) {
        this._specific.insertAtIndex(newValue, index);
    }
    moveSpecific(oldIndex: number, newIndex: number) {
        this._specific.move(oldIndex, newIndex);
    }
    replaceSpecificAtIndex(movedChild: Type, newIndex: number) {
        this._specific.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._owningType = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Specialization_owningType, this);
        this._general = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Specialization_general, this);
        this._specific = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Specialization_specific, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Specialization_owningType.key: return this._owningType;
            case kermlBase.INSTANCE.Specialization_general.key: return this._general;
            case kermlBase.INSTANCE.Specialization_specific.key: return this._specific;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Subsetting extends Specialization {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Subsetting {
        return new Subsetting(kermlBase.INSTANCE.Subsetting, id, receiveDelta, parentInfo);
    }

    private readonly _owningFeature: RequiredMultiContainmentValueManager<Feature>;
    get owningFeature(): Feature[] {
        return this._owningFeature.get();
    }
    addOwningFeature(newValue: Feature) {
        this._owningFeature.add(newValue);
    }
    removeOwningFeature(valueToRemove: Feature) {
        this._owningFeature.remove(valueToRemove);
    }
    addOwningFeatureAtIndex(newValue: Feature, index: number) {
        this._owningFeature.insertAtIndex(newValue, index);
    }
    moveOwningFeature(oldIndex: number, newIndex: number) {
        this._owningFeature.move(oldIndex, newIndex);
    }
    replaceOwningFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._owningFeature.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _subsettedFeature: RequiredMultiContainmentValueManager<Feature>;
    get subsettedFeature(): Feature[] {
        return this._subsettedFeature.get();
    }
    addSubsettedFeature(newValue: Feature) {
        this._subsettedFeature.add(newValue);
    }
    removeSubsettedFeature(valueToRemove: Feature) {
        this._subsettedFeature.remove(valueToRemove);
    }
    addSubsettedFeatureAtIndex(newValue: Feature, index: number) {
        this._subsettedFeature.insertAtIndex(newValue, index);
    }
    moveSubsettedFeature(oldIndex: number, newIndex: number) {
        this._subsettedFeature.move(oldIndex, newIndex);
    }
    replaceSubsettedFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._subsettedFeature.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _subsettingFeature: RequiredMultiContainmentValueManager<Feature>;
    get subsettingFeature(): Feature[] {
        return this._subsettingFeature.get();
    }
    addSubsettingFeature(newValue: Feature) {
        this._subsettingFeature.add(newValue);
    }
    removeSubsettingFeature(valueToRemove: Feature) {
        this._subsettingFeature.remove(valueToRemove);
    }
    addSubsettingFeatureAtIndex(newValue: Feature, index: number) {
        this._subsettingFeature.insertAtIndex(newValue, index);
    }
    moveSubsettingFeature(oldIndex: number, newIndex: number) {
        this._subsettingFeature.move(oldIndex, newIndex);
    }
    replaceSubsettingFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._subsettingFeature.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._owningFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Subsetting_owningFeature, this);
        this._subsettedFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Subsetting_subsettedFeature, this);
        this._subsettingFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Subsetting_subsettingFeature, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Subsetting_owningFeature.key: return this._owningFeature;
            case kermlBase.INSTANCE.Subsetting_subsettedFeature.key: return this._subsettedFeature;
            case kermlBase.INSTANCE.Subsetting_subsettingFeature.key: return this._subsettingFeature;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class CrossSubsetting extends Subsetting {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): CrossSubsetting {
        return new CrossSubsetting(kermlBase.INSTANCE.CrossSubsetting, id, receiveDelta, parentInfo);
    }

    private readonly _crossingFeature: RequiredMultiContainmentValueManager<Feature>;
    get crossingFeature(): Feature[] {
        return this._crossingFeature.get();
    }
    addCrossingFeature(newValue: Feature) {
        this._crossingFeature.add(newValue);
    }
    removeCrossingFeature(valueToRemove: Feature) {
        this._crossingFeature.remove(valueToRemove);
    }
    addCrossingFeatureAtIndex(newValue: Feature, index: number) {
        this._crossingFeature.insertAtIndex(newValue, index);
    }
    moveCrossingFeature(oldIndex: number, newIndex: number) {
        this._crossingFeature.move(oldIndex, newIndex);
    }
    replaceCrossingFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._crossingFeature.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _crossedFeature: RequiredMultiContainmentValueManager<Feature>;
    get crossedFeature(): Feature[] {
        return this._crossedFeature.get();
    }
    addCrossedFeature(newValue: Feature) {
        this._crossedFeature.add(newValue);
    }
    removeCrossedFeature(valueToRemove: Feature) {
        this._crossedFeature.remove(valueToRemove);
    }
    addCrossedFeatureAtIndex(newValue: Feature, index: number) {
        this._crossedFeature.insertAtIndex(newValue, index);
    }
    moveCrossedFeature(oldIndex: number, newIndex: number) {
        this._crossedFeature.move(oldIndex, newIndex);
    }
    replaceCrossedFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._crossedFeature.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._crossingFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.CrossSubsetting_crossingFeature, this);
        this._crossedFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.CrossSubsetting_crossedFeature, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.CrossSubsetting_crossingFeature.key: return this._crossingFeature;
            case kermlBase.INSTANCE.CrossSubsetting_crossedFeature.key: return this._crossedFeature;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class DataType extends kermlClassifier {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): DataType {
        return new DataType(kermlBase.INSTANCE.DataType, id, receiveDelta, parentInfo);
    }
}

export class Dependency extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Dependency {
        return new Dependency(kermlBase.INSTANCE.Dependency, id, receiveDelta, parentInfo);
    }

    private readonly _client: RequiredMultiContainmentValueManager<Element>;
    get client(): Element[] {
        return this._client.get();
    }
    addClient(newValue: Element) {
        this._client.add(newValue);
    }
    removeClient(valueToRemove: Element) {
        this._client.remove(valueToRemove);
    }
    addClientAtIndex(newValue: Element, index: number) {
        this._client.insertAtIndex(newValue, index);
    }
    moveClient(oldIndex: number, newIndex: number) {
        this._client.move(oldIndex, newIndex);
    }
    replaceClientAtIndex(movedChild: Element, newIndex: number) {
        this._client.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _supplier: RequiredMultiContainmentValueManager<Element>;
    get supplier(): Element[] {
        return this._supplier.get();
    }
    addSupplier(newValue: Element) {
        this._supplier.add(newValue);
    }
    removeSupplier(valueToRemove: Element) {
        this._supplier.remove(valueToRemove);
    }
    addSupplierAtIndex(newValue: Element, index: number) {
        this._supplier.insertAtIndex(newValue, index);
    }
    moveSupplier(oldIndex: number, newIndex: number) {
        this._supplier.move(oldIndex, newIndex);
    }
    replaceSupplierAtIndex(movedChild: Element, newIndex: number) {
        this._supplier.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._client = new RequiredMultiContainmentValueManager<Element>(kermlBase.INSTANCE.Dependency_client, this);
        this._supplier = new RequiredMultiContainmentValueManager<Element>(kermlBase.INSTANCE.Dependency_supplier, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Dependency_client.key: return this._client;
            case kermlBase.INSTANCE.Dependency_supplier.key: return this._supplier;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Differencing extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Differencing {
        return new Differencing(kermlBase.INSTANCE.Differencing, id, receiveDelta, parentInfo);
    }

    private readonly _differencingType: RequiredMultiContainmentValueManager<Type>;
    get differencingType(): Type[] {
        return this._differencingType.get();
    }
    addDifferencingType(newValue: Type) {
        this._differencingType.add(newValue);
    }
    removeDifferencingType(valueToRemove: Type) {
        this._differencingType.remove(valueToRemove);
    }
    addDifferencingTypeAtIndex(newValue: Type, index: number) {
        this._differencingType.insertAtIndex(newValue, index);
    }
    moveDifferencingType(oldIndex: number, newIndex: number) {
        this._differencingType.move(oldIndex, newIndex);
    }
    replaceDifferencingTypeAtIndex(movedChild: Type, newIndex: number) {
        this._differencingType.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _typeDifferenced: RequiredMultiContainmentValueManager<Type>;
    get typeDifferenced(): Type[] {
        return this._typeDifferenced.get();
    }
    addTypeDifferenced(newValue: Type) {
        this._typeDifferenced.add(newValue);
    }
    removeTypeDifferenced(valueToRemove: Type) {
        this._typeDifferenced.remove(valueToRemove);
    }
    addTypeDifferencedAtIndex(newValue: Type, index: number) {
        this._typeDifferenced.insertAtIndex(newValue, index);
    }
    moveTypeDifferenced(oldIndex: number, newIndex: number) {
        this._typeDifferenced.move(oldIndex, newIndex);
    }
    replaceTypeDifferencedAtIndex(movedChild: Type, newIndex: number) {
        this._typeDifferenced.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._differencingType = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Differencing_differencingType, this);
        this._typeDifferenced = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Differencing_typeDifferenced, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Differencing_differencingType.key: return this._differencingType;
            case kermlBase.INSTANCE.Differencing_typeDifferenced.key: return this._typeDifferenced;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Disjoining extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Disjoining {
        return new Disjoining(kermlBase.INSTANCE.Disjoining, id, receiveDelta, parentInfo);
    }

    private readonly _typeDisjoined: RequiredMultiContainmentValueManager<Type>;
    get typeDisjoined(): Type[] {
        return this._typeDisjoined.get();
    }
    addTypeDisjoined(newValue: Type) {
        this._typeDisjoined.add(newValue);
    }
    removeTypeDisjoined(valueToRemove: Type) {
        this._typeDisjoined.remove(valueToRemove);
    }
    addTypeDisjoinedAtIndex(newValue: Type, index: number) {
        this._typeDisjoined.insertAtIndex(newValue, index);
    }
    moveTypeDisjoined(oldIndex: number, newIndex: number) {
        this._typeDisjoined.move(oldIndex, newIndex);
    }
    replaceTypeDisjoinedAtIndex(movedChild: Type, newIndex: number) {
        this._typeDisjoined.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _disjoiningType: RequiredMultiContainmentValueManager<Type>;
    get disjoiningType(): Type[] {
        return this._disjoiningType.get();
    }
    addDisjoiningType(newValue: Type) {
        this._disjoiningType.add(newValue);
    }
    removeDisjoiningType(valueToRemove: Type) {
        this._disjoiningType.remove(valueToRemove);
    }
    addDisjoiningTypeAtIndex(newValue: Type, index: number) {
        this._disjoiningType.insertAtIndex(newValue, index);
    }
    moveDisjoiningType(oldIndex: number, newIndex: number) {
        this._disjoiningType.move(oldIndex, newIndex);
    }
    replaceDisjoiningTypeAtIndex(movedChild: Type, newIndex: number) {
        this._disjoiningType.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _owningType: RequiredMultiContainmentValueManager<Type>;
    get owningType(): Type[] {
        return this._owningType.get();
    }
    addOwningType(newValue: Type) {
        this._owningType.add(newValue);
    }
    removeOwningType(valueToRemove: Type) {
        this._owningType.remove(valueToRemove);
    }
    addOwningTypeAtIndex(newValue: Type, index: number) {
        this._owningType.insertAtIndex(newValue, index);
    }
    moveOwningType(oldIndex: number, newIndex: number) {
        this._owningType.move(oldIndex, newIndex);
    }
    replaceOwningTypeAtIndex(movedChild: Type, newIndex: number) {
        this._owningType.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._typeDisjoined = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Disjoining_typeDisjoined, this);
        this._disjoiningType = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Disjoining_disjoiningType, this);
        this._owningType = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Disjoining_owningType, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Disjoining_typeDisjoined.key: return this._typeDisjoined;
            case kermlBase.INSTANCE.Disjoining_disjoiningType.key: return this._disjoiningType;
            case kermlBase.INSTANCE.Disjoining_owningType.key: return this._owningType;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Documentation extends Comment {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Documentation {
        return new Documentation(kermlBase.INSTANCE.Documentation, id, receiveDelta, parentInfo);
    }

    private readonly _documentedElement: RequiredMultiContainmentValueManager<Element>;
    get documentedElement(): Element[] {
        return this._documentedElement.get();
    }
    addDocumentedElement(newValue: Element) {
        this._documentedElement.add(newValue);
    }
    removeDocumentedElement(valueToRemove: Element) {
        this._documentedElement.remove(valueToRemove);
    }
    addDocumentedElementAtIndex(newValue: Element, index: number) {
        this._documentedElement.insertAtIndex(newValue, index);
    }
    moveDocumentedElement(oldIndex: number, newIndex: number) {
        this._documentedElement.move(oldIndex, newIndex);
    }
    replaceDocumentedElementAtIndex(movedChild: Element, newIndex: number) {
        this._documentedElement.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._documentedElement = new RequiredMultiContainmentValueManager<Element>(kermlBase.INSTANCE.Documentation_documentedElement, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === kermlBase.INSTANCE.Documentation_documentedElement.key) {
            return this._documentedElement;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class Membership extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Membership {
        return new Membership(kermlBase.INSTANCE.Membership, id, receiveDelta, parentInfo);
    }

    private readonly _membershipOwningNamespace: RequiredMultiContainmentValueManager<Namespace>;
    get membershipOwningNamespace(): Namespace[] {
        return this._membershipOwningNamespace.get();
    }
    addMembershipOwningNamespace(newValue: Namespace) {
        this._membershipOwningNamespace.add(newValue);
    }
    removeMembershipOwningNamespace(valueToRemove: Namespace) {
        this._membershipOwningNamespace.remove(valueToRemove);
    }
    addMembershipOwningNamespaceAtIndex(newValue: Namespace, index: number) {
        this._membershipOwningNamespace.insertAtIndex(newValue, index);
    }
    moveMembershipOwningNamespace(oldIndex: number, newIndex: number) {
        this._membershipOwningNamespace.move(oldIndex, newIndex);
    }
    replaceMembershipOwningNamespaceAtIndex(movedChild: Namespace, newIndex: number) {
        this._membershipOwningNamespace.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _memberElementId: RequiredPropertyValueManager<string>;
    get memberElementId(): string {
        return this._memberElementId.get();
    }
    set memberElementId(newValue: string) {
        this._memberElementId.set(newValue);
    }

    private readonly _memberShortName: RequiredPropertyValueManager<string>;
    get memberShortName(): string {
        return this._memberShortName.get();
    }
    set memberShortName(newValue: string) {
        this._memberShortName.set(newValue);
    }

    private readonly _memberElement: RequiredMultiContainmentValueManager<Element>;
    get memberElement(): Element[] {
        return this._memberElement.get();
    }
    addMemberElement(newValue: Element) {
        this._memberElement.add(newValue);
    }
    removeMemberElement(valueToRemove: Element) {
        this._memberElement.remove(valueToRemove);
    }
    addMemberElementAtIndex(newValue: Element, index: number) {
        this._memberElement.insertAtIndex(newValue, index);
    }
    moveMemberElement(oldIndex: number, newIndex: number) {
        this._memberElement.move(oldIndex, newIndex);
    }
    replaceMemberElementAtIndex(movedChild: Element, newIndex: number) {
        this._memberElement.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _memberName: RequiredPropertyValueManager<string>;
    get memberName(): string {
        return this._memberName.get();
    }
    set memberName(newValue: string) {
        this._memberName.set(newValue);
    }

    private readonly _visibility: RequiredPropertyValueManager<VisibilityKind>;
    get visibility(): VisibilityKind {
        return this._visibility.get();
    }
    set visibility(newValue: VisibilityKind) {
        this._visibility.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._membershipOwningNamespace = new RequiredMultiContainmentValueManager<Namespace>(kermlBase.INSTANCE.Membership_membershipOwningNamespace, this);
        this._memberElementId = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Membership_memberElementId, this);
        this._memberShortName = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Membership_memberShortName, this);
        this._memberElement = new RequiredMultiContainmentValueManager<Element>(kermlBase.INSTANCE.Membership_memberElement, this);
        this._memberName = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Membership_memberName, this);
        this._visibility = new RequiredPropertyValueManager<VisibilityKind>(kermlBase.INSTANCE.Membership_visibility, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case kermlBase.INSTANCE.Membership_memberElementId.key: return this._memberElementId;
            case kermlBase.INSTANCE.Membership_memberShortName.key: return this._memberShortName;
            case kermlBase.INSTANCE.Membership_memberName.key: return this._memberName;
            case kermlBase.INSTANCE.Membership_visibility.key: return this._visibility;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Membership_membershipOwningNamespace.key: return this._membershipOwningNamespace;
            case kermlBase.INSTANCE.Membership_memberElement.key: return this._memberElement;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class OwningMembership extends Membership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): OwningMembership {
        return new OwningMembership(kermlBase.INSTANCE.OwningMembership, id, receiveDelta, parentInfo);
    }

    private readonly _ownedMemberElementId: RequiredPropertyValueManager<string>;
    get ownedMemberElementId(): string {
        return this._ownedMemberElementId.get();
    }
    set ownedMemberElementId(newValue: string) {
        this._ownedMemberElementId.set(newValue);
    }

    private readonly _ownedMemberShortName: RequiredPropertyValueManager<string>;
    get ownedMemberShortName(): string {
        return this._ownedMemberShortName.get();
    }
    set ownedMemberShortName(newValue: string) {
        this._ownedMemberShortName.set(newValue);
    }

    private readonly _ownedMemberName: RequiredPropertyValueManager<string>;
    get ownedMemberName(): string {
        return this._ownedMemberName.get();
    }
    set ownedMemberName(newValue: string) {
        this._ownedMemberName.set(newValue);
    }

    private readonly _ownedMemberElement: RequiredMultiContainmentValueManager<Element>;
    get ownedMemberElement(): Element[] {
        return this._ownedMemberElement.get();
    }
    addOwnedMemberElement(newValue: Element) {
        this._ownedMemberElement.add(newValue);
    }
    removeOwnedMemberElement(valueToRemove: Element) {
        this._ownedMemberElement.remove(valueToRemove);
    }
    addOwnedMemberElementAtIndex(newValue: Element, index: number) {
        this._ownedMemberElement.insertAtIndex(newValue, index);
    }
    moveOwnedMemberElement(oldIndex: number, newIndex: number) {
        this._ownedMemberElement.move(oldIndex, newIndex);
    }
    replaceOwnedMemberElementAtIndex(movedChild: Element, newIndex: number) {
        this._ownedMemberElement.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._ownedMemberElementId = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.OwningMembership_ownedMemberElementId, this);
        this._ownedMemberShortName = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.OwningMembership_ownedMemberShortName, this);
        this._ownedMemberName = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.OwningMembership_ownedMemberName, this);
        this._ownedMemberElement = new RequiredMultiContainmentValueManager<Element>(kermlBase.INSTANCE.OwningMembership_ownedMemberElement, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case kermlBase.INSTANCE.OwningMembership_ownedMemberElementId.key: return this._ownedMemberElementId;
            case kermlBase.INSTANCE.OwningMembership_ownedMemberShortName.key: return this._ownedMemberShortName;
            case kermlBase.INSTANCE.OwningMembership_ownedMemberName.key: return this._ownedMemberName;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === kermlBase.INSTANCE.OwningMembership_ownedMemberElement.key) {
            return this._ownedMemberElement;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class ElementFilterMembership extends OwningMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ElementFilterMembership {
        return new ElementFilterMembership(kermlBase.INSTANCE.ElementFilterMembership, id, receiveDelta, parentInfo);
    }

    private readonly _condition: RequiredMultiContainmentValueManager<Expression>;
    get condition(): Expression[] {
        return this._condition.get();
    }
    addCondition(newValue: Expression) {
        this._condition.add(newValue);
    }
    removeCondition(valueToRemove: Expression) {
        this._condition.remove(valueToRemove);
    }
    addConditionAtIndex(newValue: Expression, index: number) {
        this._condition.insertAtIndex(newValue, index);
    }
    moveCondition(oldIndex: number, newIndex: number) {
        this._condition.move(oldIndex, newIndex);
    }
    replaceConditionAtIndex(movedChild: Expression, newIndex: number) {
        this._condition.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._condition = new RequiredMultiContainmentValueManager<Expression>(kermlBase.INSTANCE.ElementFilterMembership_condition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === kermlBase.INSTANCE.ElementFilterMembership_condition.key) {
            return this._condition;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class FeatureMembership extends OwningMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureMembership {
        return new FeatureMembership(kermlBase.INSTANCE.FeatureMembership, id, receiveDelta, parentInfo);
    }

    private readonly _ownedMemberFeature: RequiredMultiContainmentValueManager<Feature>;
    get ownedMemberFeature(): Feature[] {
        return this._ownedMemberFeature.get();
    }
    addOwnedMemberFeature(newValue: Feature) {
        this._ownedMemberFeature.add(newValue);
    }
    removeOwnedMemberFeature(valueToRemove: Feature) {
        this._ownedMemberFeature.remove(valueToRemove);
    }
    addOwnedMemberFeatureAtIndex(newValue: Feature, index: number) {
        this._ownedMemberFeature.insertAtIndex(newValue, index);
    }
    moveOwnedMemberFeature(oldIndex: number, newIndex: number) {
        this._ownedMemberFeature.move(oldIndex, newIndex);
    }
    replaceOwnedMemberFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._ownedMemberFeature.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _owningType: RequiredMultiContainmentValueManager<Type>;
    get owningType(): Type[] {
        return this._owningType.get();
    }
    addOwningType(newValue: Type) {
        this._owningType.add(newValue);
    }
    removeOwningType(valueToRemove: Type) {
        this._owningType.remove(valueToRemove);
    }
    addOwningTypeAtIndex(newValue: Type, index: number) {
        this._owningType.insertAtIndex(newValue, index);
    }
    moveOwningType(oldIndex: number, newIndex: number) {
        this._owningType.move(oldIndex, newIndex);
    }
    replaceOwningTypeAtIndex(movedChild: Type, newIndex: number) {
        this._owningType.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._ownedMemberFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.FeatureMembership_ownedMemberFeature, this);
        this._owningType = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.FeatureMembership_owningType, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.FeatureMembership_ownedMemberFeature.key: return this._ownedMemberFeature;
            case kermlBase.INSTANCE.FeatureMembership_owningType.key: return this._owningType;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class EndFeatureMembership extends FeatureMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EndFeatureMembership {
        return new EndFeatureMembership(kermlBase.INSTANCE.EndFeatureMembership, id, receiveDelta, parentInfo);
    }
}

export class FeatureChainExpression extends OperatorExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureChainExpression {
        return new FeatureChainExpression(kermlBase.INSTANCE.FeatureChainExpression, id, receiveDelta, parentInfo);
    }

    private readonly _targetFeature: RequiredMultiContainmentValueManager<Feature>;
    get targetFeature(): Feature[] {
        return this._targetFeature.get();
    }
    addTargetFeature(newValue: Feature) {
        this._targetFeature.add(newValue);
    }
    removeTargetFeature(valueToRemove: Feature) {
        this._targetFeature.remove(valueToRemove);
    }
    addTargetFeatureAtIndex(newValue: Feature, index: number) {
        this._targetFeature.insertAtIndex(newValue, index);
    }
    moveTargetFeature(oldIndex: number, newIndex: number) {
        this._targetFeature.move(oldIndex, newIndex);
    }
    replaceTargetFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._targetFeature.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._targetFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.FeatureChainExpression_targetFeature, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === kermlBase.INSTANCE.FeatureChainExpression_targetFeature.key) {
            return this._targetFeature;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class FeatureChaining extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureChaining {
        return new FeatureChaining(kermlBase.INSTANCE.FeatureChaining, id, receiveDelta, parentInfo);
    }

    private readonly _chainingFeature: RequiredMultiContainmentValueManager<Feature>;
    get chainingFeature(): Feature[] {
        return this._chainingFeature.get();
    }
    addChainingFeature(newValue: Feature) {
        this._chainingFeature.add(newValue);
    }
    removeChainingFeature(valueToRemove: Feature) {
        this._chainingFeature.remove(valueToRemove);
    }
    addChainingFeatureAtIndex(newValue: Feature, index: number) {
        this._chainingFeature.insertAtIndex(newValue, index);
    }
    moveChainingFeature(oldIndex: number, newIndex: number) {
        this._chainingFeature.move(oldIndex, newIndex);
    }
    replaceChainingFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._chainingFeature.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _featureChained: RequiredMultiContainmentValueManager<Feature>;
    get featureChained(): Feature[] {
        return this._featureChained.get();
    }
    addFeatureChained(newValue: Feature) {
        this._featureChained.add(newValue);
    }
    removeFeatureChained(valueToRemove: Feature) {
        this._featureChained.remove(valueToRemove);
    }
    addFeatureChainedAtIndex(newValue: Feature, index: number) {
        this._featureChained.insertAtIndex(newValue, index);
    }
    moveFeatureChained(oldIndex: number, newIndex: number) {
        this._featureChained.move(oldIndex, newIndex);
    }
    replaceFeatureChainedAtIndex(movedChild: Feature, newIndex: number) {
        this._featureChained.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._chainingFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.FeatureChaining_chainingFeature, this);
        this._featureChained = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.FeatureChaining_featureChained, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.FeatureChaining_chainingFeature.key: return this._chainingFeature;
            case kermlBase.INSTANCE.FeatureChaining_featureChained.key: return this._featureChained;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export enum FeatureDirectionKind {
    in = "kerml-FeatureDirectionKind-in",
    inout = "kerml-FeatureDirectionKind-inout",
    out = "kerml-FeatureDirectionKind-out"
}

export class FeatureInverting extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureInverting {
        return new FeatureInverting(kermlBase.INSTANCE.FeatureInverting, id, receiveDelta, parentInfo);
    }

    private readonly _featureInverted: RequiredMultiContainmentValueManager<Feature>;
    get featureInverted(): Feature[] {
        return this._featureInverted.get();
    }
    addFeatureInverted(newValue: Feature) {
        this._featureInverted.add(newValue);
    }
    removeFeatureInverted(valueToRemove: Feature) {
        this._featureInverted.remove(valueToRemove);
    }
    addFeatureInvertedAtIndex(newValue: Feature, index: number) {
        this._featureInverted.insertAtIndex(newValue, index);
    }
    moveFeatureInverted(oldIndex: number, newIndex: number) {
        this._featureInverted.move(oldIndex, newIndex);
    }
    replaceFeatureInvertedAtIndex(movedChild: Feature, newIndex: number) {
        this._featureInverted.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _invertingFeature: RequiredMultiContainmentValueManager<Feature>;
    get invertingFeature(): Feature[] {
        return this._invertingFeature.get();
    }
    addInvertingFeature(newValue: Feature) {
        this._invertingFeature.add(newValue);
    }
    removeInvertingFeature(valueToRemove: Feature) {
        this._invertingFeature.remove(valueToRemove);
    }
    addInvertingFeatureAtIndex(newValue: Feature, index: number) {
        this._invertingFeature.insertAtIndex(newValue, index);
    }
    moveInvertingFeature(oldIndex: number, newIndex: number) {
        this._invertingFeature.move(oldIndex, newIndex);
    }
    replaceInvertingFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._invertingFeature.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _owningFeature: RequiredMultiContainmentValueManager<Feature>;
    get owningFeature(): Feature[] {
        return this._owningFeature.get();
    }
    addOwningFeature(newValue: Feature) {
        this._owningFeature.add(newValue);
    }
    removeOwningFeature(valueToRemove: Feature) {
        this._owningFeature.remove(valueToRemove);
    }
    addOwningFeatureAtIndex(newValue: Feature, index: number) {
        this._owningFeature.insertAtIndex(newValue, index);
    }
    moveOwningFeature(oldIndex: number, newIndex: number) {
        this._owningFeature.move(oldIndex, newIndex);
    }
    replaceOwningFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._owningFeature.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._featureInverted = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.FeatureInverting_featureInverted, this);
        this._invertingFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.FeatureInverting_invertingFeature, this);
        this._owningFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.FeatureInverting_owningFeature, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.FeatureInverting_featureInverted.key: return this._featureInverted;
            case kermlBase.INSTANCE.FeatureInverting_invertingFeature.key: return this._invertingFeature;
            case kermlBase.INSTANCE.FeatureInverting_owningFeature.key: return this._owningFeature;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class FeatureReferenceExpression extends Expression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureReferenceExpression {
        return new FeatureReferenceExpression(kermlBase.INSTANCE.FeatureReferenceExpression, id, receiveDelta, parentInfo);
    }

    private readonly _referent: RequiredMultiContainmentValueManager<Feature>;
    get referent(): Feature[] {
        return this._referent.get();
    }
    addReferent(newValue: Feature) {
        this._referent.add(newValue);
    }
    removeReferent(valueToRemove: Feature) {
        this._referent.remove(valueToRemove);
    }
    addReferentAtIndex(newValue: Feature, index: number) {
        this._referent.insertAtIndex(newValue, index);
    }
    moveReferent(oldIndex: number, newIndex: number) {
        this._referent.move(oldIndex, newIndex);
    }
    replaceReferentAtIndex(movedChild: Feature, newIndex: number) {
        this._referent.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._referent = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.FeatureReferenceExpression_referent, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === kermlBase.INSTANCE.FeatureReferenceExpression_referent.key) {
            return this._referent;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class FeatureTyping extends Specialization {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureTyping {
        return new FeatureTyping(kermlBase.INSTANCE.FeatureTyping, id, receiveDelta, parentInfo);
    }

    private readonly _typedFeature: RequiredMultiContainmentValueManager<Feature>;
    get typedFeature(): Feature[] {
        return this._typedFeature.get();
    }
    addTypedFeature(newValue: Feature) {
        this._typedFeature.add(newValue);
    }
    removeTypedFeature(valueToRemove: Feature) {
        this._typedFeature.remove(valueToRemove);
    }
    addTypedFeatureAtIndex(newValue: Feature, index: number) {
        this._typedFeature.insertAtIndex(newValue, index);
    }
    moveTypedFeature(oldIndex: number, newIndex: number) {
        this._typedFeature.move(oldIndex, newIndex);
    }
    replaceTypedFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._typedFeature.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _type: RequiredMultiContainmentValueManager<Type>;
    get type(): Type[] {
        return this._type.get();
    }
    addType(newValue: Type) {
        this._type.add(newValue);
    }
    removeType(valueToRemove: Type) {
        this._type.remove(valueToRemove);
    }
    addTypeAtIndex(newValue: Type, index: number) {
        this._type.insertAtIndex(newValue, index);
    }
    moveType(oldIndex: number, newIndex: number) {
        this._type.move(oldIndex, newIndex);
    }
    replaceTypeAtIndex(movedChild: Type, newIndex: number) {
        this._type.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _owningFeature: RequiredMultiContainmentValueManager<Feature>;
    get owningFeature(): Feature[] {
        return this._owningFeature.get();
    }
    addOwningFeature(newValue: Feature) {
        this._owningFeature.add(newValue);
    }
    removeOwningFeature(valueToRemove: Feature) {
        this._owningFeature.remove(valueToRemove);
    }
    addOwningFeatureAtIndex(newValue: Feature, index: number) {
        this._owningFeature.insertAtIndex(newValue, index);
    }
    moveOwningFeature(oldIndex: number, newIndex: number) {
        this._owningFeature.move(oldIndex, newIndex);
    }
    replaceOwningFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._owningFeature.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._typedFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.FeatureTyping_typedFeature, this);
        this._type = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.FeatureTyping_type, this);
        this._owningFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.FeatureTyping_owningFeature, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.FeatureTyping_typedFeature.key: return this._typedFeature;
            case kermlBase.INSTANCE.FeatureTyping_type.key: return this._type;
            case kermlBase.INSTANCE.FeatureTyping_owningFeature.key: return this._owningFeature;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class FeatureValue extends OwningMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureValue {
        return new FeatureValue(kermlBase.INSTANCE.FeatureValue, id, receiveDelta, parentInfo);
    }

    private readonly _featureWithValue: RequiredMultiContainmentValueManager<Feature>;
    get featureWithValue(): Feature[] {
        return this._featureWithValue.get();
    }
    addFeatureWithValue(newValue: Feature) {
        this._featureWithValue.add(newValue);
    }
    removeFeatureWithValue(valueToRemove: Feature) {
        this._featureWithValue.remove(valueToRemove);
    }
    addFeatureWithValueAtIndex(newValue: Feature, index: number) {
        this._featureWithValue.insertAtIndex(newValue, index);
    }
    moveFeatureWithValue(oldIndex: number, newIndex: number) {
        this._featureWithValue.move(oldIndex, newIndex);
    }
    replaceFeatureWithValueAtIndex(movedChild: Feature, newIndex: number) {
        this._featureWithValue.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _value: RequiredMultiContainmentValueManager<Expression>;
    get value(): Expression[] {
        return this._value.get();
    }
    addValue(newValue: Expression) {
        this._value.add(newValue);
    }
    removeValue(valueToRemove: Expression) {
        this._value.remove(valueToRemove);
    }
    addValueAtIndex(newValue: Expression, index: number) {
        this._value.insertAtIndex(newValue, index);
    }
    moveValue(oldIndex: number, newIndex: number) {
        this._value.move(oldIndex, newIndex);
    }
    replaceValueAtIndex(movedChild: Expression, newIndex: number) {
        this._value.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _isInitial: RequiredPropertyValueManager<string>;
    get isInitial(): string {
        return this._isInitial.get();
    }
    set isInitial(newValue: string) {
        this._isInitial.set(newValue);
    }

    private readonly _isDefault: RequiredPropertyValueManager<string>;
    get isDefault(): string {
        return this._isDefault.get();
    }
    set isDefault(newValue: string) {
        this._isDefault.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._featureWithValue = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.FeatureValue_featureWithValue, this);
        this._value = new RequiredMultiContainmentValueManager<Expression>(kermlBase.INSTANCE.FeatureValue_value, this);
        this._isInitial = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.FeatureValue_isInitial, this);
        this._isDefault = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.FeatureValue_isDefault, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case kermlBase.INSTANCE.FeatureValue_isInitial.key: return this._isInitial;
            case kermlBase.INSTANCE.FeatureValue_isDefault.key: return this._isDefault;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.FeatureValue_featureWithValue.key: return this._featureWithValue;
            case kermlBase.INSTANCE.FeatureValue_value.key: return this._value;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Flow extends Connector {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Flow {
        return new Flow(kermlBase.INSTANCE.Flow, id, receiveDelta, parentInfo);
    }

    private readonly _payloadType: RequiredMultiContainmentValueManager<kermlClassifier>;
    get payloadType(): kermlClassifier[] {
        return this._payloadType.get();
    }
    addPayloadType(newValue: kermlClassifier) {
        this._payloadType.add(newValue);
    }
    removePayloadType(valueToRemove: kermlClassifier) {
        this._payloadType.remove(valueToRemove);
    }
    addPayloadTypeAtIndex(newValue: kermlClassifier, index: number) {
        this._payloadType.insertAtIndex(newValue, index);
    }
    movePayloadType(oldIndex: number, newIndex: number) {
        this._payloadType.move(oldIndex, newIndex);
    }
    replacePayloadTypeAtIndex(movedChild: kermlClassifier, newIndex: number) {
        this._payloadType.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _targetInputFeature: RequiredMultiContainmentValueManager<Feature>;
    get targetInputFeature(): Feature[] {
        return this._targetInputFeature.get();
    }
    addTargetInputFeature(newValue: Feature) {
        this._targetInputFeature.add(newValue);
    }
    removeTargetInputFeature(valueToRemove: Feature) {
        this._targetInputFeature.remove(valueToRemove);
    }
    addTargetInputFeatureAtIndex(newValue: Feature, index: number) {
        this._targetInputFeature.insertAtIndex(newValue, index);
    }
    moveTargetInputFeature(oldIndex: number, newIndex: number) {
        this._targetInputFeature.move(oldIndex, newIndex);
    }
    replaceTargetInputFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._targetInputFeature.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _sourceOutputFeature: RequiredMultiContainmentValueManager<Feature>;
    get sourceOutputFeature(): Feature[] {
        return this._sourceOutputFeature.get();
    }
    addSourceOutputFeature(newValue: Feature) {
        this._sourceOutputFeature.add(newValue);
    }
    removeSourceOutputFeature(valueToRemove: Feature) {
        this._sourceOutputFeature.remove(valueToRemove);
    }
    addSourceOutputFeatureAtIndex(newValue: Feature, index: number) {
        this._sourceOutputFeature.insertAtIndex(newValue, index);
    }
    moveSourceOutputFeature(oldIndex: number, newIndex: number) {
        this._sourceOutputFeature.move(oldIndex, newIndex);
    }
    replaceSourceOutputFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._sourceOutputFeature.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _flowEnd: RequiredMultiContainmentValueManager<FlowEnd>;
    get flowEnd(): FlowEnd[] {
        return this._flowEnd.get();
    }
    addFlowEnd(newValue: FlowEnd) {
        this._flowEnd.add(newValue);
    }
    removeFlowEnd(valueToRemove: FlowEnd) {
        this._flowEnd.remove(valueToRemove);
    }
    addFlowEndAtIndex(newValue: FlowEnd, index: number) {
        this._flowEnd.insertAtIndex(newValue, index);
    }
    moveFlowEnd(oldIndex: number, newIndex: number) {
        this._flowEnd.move(oldIndex, newIndex);
    }
    replaceFlowEndAtIndex(movedChild: FlowEnd, newIndex: number) {
        this._flowEnd.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _payloadFeature: RequiredMultiContainmentValueManager<PayloadFeature>;
    get payloadFeature(): PayloadFeature[] {
        return this._payloadFeature.get();
    }
    addPayloadFeature(newValue: PayloadFeature) {
        this._payloadFeature.add(newValue);
    }
    removePayloadFeature(valueToRemove: PayloadFeature) {
        this._payloadFeature.remove(valueToRemove);
    }
    addPayloadFeatureAtIndex(newValue: PayloadFeature, index: number) {
        this._payloadFeature.insertAtIndex(newValue, index);
    }
    movePayloadFeature(oldIndex: number, newIndex: number) {
        this._payloadFeature.move(oldIndex, newIndex);
    }
    replacePayloadFeatureAtIndex(movedChild: PayloadFeature, newIndex: number) {
        this._payloadFeature.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _interaction: RequiredMultiContainmentValueManager<Interaction>;
    get interaction(): Interaction[] {
        return this._interaction.get();
    }
    addInteraction(newValue: Interaction) {
        this._interaction.add(newValue);
    }
    removeInteraction(valueToRemove: Interaction) {
        this._interaction.remove(valueToRemove);
    }
    addInteractionAtIndex(newValue: Interaction, index: number) {
        this._interaction.insertAtIndex(newValue, index);
    }
    moveInteraction(oldIndex: number, newIndex: number) {
        this._interaction.move(oldIndex, newIndex);
    }
    replaceInteractionAtIndex(movedChild: Interaction, newIndex: number) {
        this._interaction.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._payloadType = new RequiredMultiContainmentValueManager<kermlClassifier>(kermlBase.INSTANCE.Flow_payloadType, this);
        this._targetInputFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Flow_targetInputFeature, this);
        this._sourceOutputFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Flow_sourceOutputFeature, this);
        this._flowEnd = new RequiredMultiContainmentValueManager<FlowEnd>(kermlBase.INSTANCE.Flow_flowEnd, this);
        this._payloadFeature = new RequiredMultiContainmentValueManager<PayloadFeature>(kermlBase.INSTANCE.Flow_payloadFeature, this);
        this._interaction = new RequiredMultiContainmentValueManager<Interaction>(kermlBase.INSTANCE.Flow_interaction, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Flow_payloadType.key: return this._payloadType;
            case kermlBase.INSTANCE.Flow_targetInputFeature.key: return this._targetInputFeature;
            case kermlBase.INSTANCE.Flow_sourceOutputFeature.key: return this._sourceOutputFeature;
            case kermlBase.INSTANCE.Flow_flowEnd.key: return this._flowEnd;
            case kermlBase.INSTANCE.Flow_payloadFeature.key: return this._payloadFeature;
            case kermlBase.INSTANCE.Flow_interaction.key: return this._interaction;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class FlowEnd extends Feature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FlowEnd {
        return new FlowEnd(kermlBase.INSTANCE.FlowEnd, id, receiveDelta, parentInfo);
    }
}

export class Function extends Behavior {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Function {
        return new Function(kermlBase.INSTANCE.Function, id, receiveDelta, parentInfo);
    }

    private readonly _expression: RequiredMultiContainmentValueManager<Expression>;
    get expression(): Expression[] {
        return this._expression.get();
    }
    addExpression(newValue: Expression) {
        this._expression.add(newValue);
    }
    removeExpression(valueToRemove: Expression) {
        this._expression.remove(valueToRemove);
    }
    addExpressionAtIndex(newValue: Expression, index: number) {
        this._expression.insertAtIndex(newValue, index);
    }
    moveExpression(oldIndex: number, newIndex: number) {
        this._expression.move(oldIndex, newIndex);
    }
    replaceExpressionAtIndex(movedChild: Expression, newIndex: number) {
        this._expression.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _result: RequiredMultiContainmentValueManager<Feature>;
    get result(): Feature[] {
        return this._result.get();
    }
    addResult(newValue: Feature) {
        this._result.add(newValue);
    }
    removeResult(valueToRemove: Feature) {
        this._result.remove(valueToRemove);
    }
    addResultAtIndex(newValue: Feature, index: number) {
        this._result.insertAtIndex(newValue, index);
    }
    moveResult(oldIndex: number, newIndex: number) {
        this._result.move(oldIndex, newIndex);
    }
    replaceResultAtIndex(movedChild: Feature, newIndex: number) {
        this._result.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _isModelLevelEvaluable: RequiredPropertyValueManager<string>;
    get isModelLevelEvaluable(): string {
        return this._isModelLevelEvaluable.get();
    }
    set isModelLevelEvaluable(newValue: string) {
        this._isModelLevelEvaluable.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._expression = new RequiredMultiContainmentValueManager<Expression>(kermlBase.INSTANCE.Function_expression, this);
        this._result = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Function_result, this);
        this._isModelLevelEvaluable = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Function_isModelLevelEvaluable, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === kermlBase.INSTANCE.Function_isModelLevelEvaluable.key) {
            return this._isModelLevelEvaluable;
        }
        return super.getPropertyValueManager(property);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Function_expression.key: return this._expression;
            case kermlBase.INSTANCE.Function_result.key: return this._result;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export abstract class Import extends Relationship {

    private readonly _visibility: RequiredPropertyValueManager<VisibilityKind>;
    get visibility(): VisibilityKind {
        return this._visibility.get();
    }
    set visibility(newValue: VisibilityKind) {
        this._visibility.set(newValue);
    }

    private readonly _isRecursive: RequiredPropertyValueManager<string>;
    get isRecursive(): string {
        return this._isRecursive.get();
    }
    set isRecursive(newValue: string) {
        this._isRecursive.set(newValue);
    }

    private readonly _isImportAll: RequiredPropertyValueManager<string>;
    get isImportAll(): string {
        return this._isImportAll.get();
    }
    set isImportAll(newValue: string) {
        this._isImportAll.set(newValue);
    }

    private readonly _importedElement: RequiredMultiContainmentValueManager<Element>;
    get importedElement(): Element[] {
        return this._importedElement.get();
    }
    addImportedElement(newValue: Element) {
        this._importedElement.add(newValue);
    }
    removeImportedElement(valueToRemove: Element) {
        this._importedElement.remove(valueToRemove);
    }
    addImportedElementAtIndex(newValue: Element, index: number) {
        this._importedElement.insertAtIndex(newValue, index);
    }
    moveImportedElement(oldIndex: number, newIndex: number) {
        this._importedElement.move(oldIndex, newIndex);
    }
    replaceImportedElementAtIndex(movedChild: Element, newIndex: number) {
        this._importedElement.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _importOwningNamespace: RequiredMultiContainmentValueManager<Namespace>;
    get importOwningNamespace(): Namespace[] {
        return this._importOwningNamespace.get();
    }
    addImportOwningNamespace(newValue: Namespace) {
        this._importOwningNamespace.add(newValue);
    }
    removeImportOwningNamespace(valueToRemove: Namespace) {
        this._importOwningNamespace.remove(valueToRemove);
    }
    addImportOwningNamespaceAtIndex(newValue: Namespace, index: number) {
        this._importOwningNamespace.insertAtIndex(newValue, index);
    }
    moveImportOwningNamespace(oldIndex: number, newIndex: number) {
        this._importOwningNamespace.move(oldIndex, newIndex);
    }
    replaceImportOwningNamespaceAtIndex(movedChild: Namespace, newIndex: number) {
        this._importOwningNamespace.replaceAtIndex(movedChild, newIndex);
    }

    protected constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._visibility = new RequiredPropertyValueManager<VisibilityKind>(kermlBase.INSTANCE.Import_visibility, this);
        this._isRecursive = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Import_isRecursive, this);
        this._isImportAll = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Import_isImportAll, this);
        this._importedElement = new RequiredMultiContainmentValueManager<Element>(kermlBase.INSTANCE.Import_importedElement, this);
        this._importOwningNamespace = new RequiredMultiContainmentValueManager<Namespace>(kermlBase.INSTANCE.Import_importOwningNamespace, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case kermlBase.INSTANCE.Import_visibility.key: return this._visibility;
            case kermlBase.INSTANCE.Import_isRecursive.key: return this._isRecursive;
            case kermlBase.INSTANCE.Import_isImportAll.key: return this._isImportAll;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Import_importedElement.key: return this._importedElement;
            case kermlBase.INSTANCE.Import_importOwningNamespace.key: return this._importOwningNamespace;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class IndexExpression extends OperatorExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): IndexExpression {
        return new IndexExpression(kermlBase.INSTANCE.IndexExpression, id, receiveDelta, parentInfo);
    }
}

export class Interaction extends Association {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Interaction {
        return new Interaction(kermlBase.INSTANCE.Interaction, id, receiveDelta, parentInfo);
    }
}

export class Intersecting extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Intersecting {
        return new Intersecting(kermlBase.INSTANCE.Intersecting, id, receiveDelta, parentInfo);
    }

    private readonly _intersectingType: RequiredMultiContainmentValueManager<Type>;
    get intersectingType(): Type[] {
        return this._intersectingType.get();
    }
    addIntersectingType(newValue: Type) {
        this._intersectingType.add(newValue);
    }
    removeIntersectingType(valueToRemove: Type) {
        this._intersectingType.remove(valueToRemove);
    }
    addIntersectingTypeAtIndex(newValue: Type, index: number) {
        this._intersectingType.insertAtIndex(newValue, index);
    }
    moveIntersectingType(oldIndex: number, newIndex: number) {
        this._intersectingType.move(oldIndex, newIndex);
    }
    replaceIntersectingTypeAtIndex(movedChild: Type, newIndex: number) {
        this._intersectingType.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _typeIntersected: RequiredMultiContainmentValueManager<Type>;
    get typeIntersected(): Type[] {
        return this._typeIntersected.get();
    }
    addTypeIntersected(newValue: Type) {
        this._typeIntersected.add(newValue);
    }
    removeTypeIntersected(valueToRemove: Type) {
        this._typeIntersected.remove(valueToRemove);
    }
    addTypeIntersectedAtIndex(newValue: Type, index: number) {
        this._typeIntersected.insertAtIndex(newValue, index);
    }
    moveTypeIntersected(oldIndex: number, newIndex: number) {
        this._typeIntersected.move(oldIndex, newIndex);
    }
    replaceTypeIntersectedAtIndex(movedChild: Type, newIndex: number) {
        this._typeIntersected.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._intersectingType = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Intersecting_intersectingType, this);
        this._typeIntersected = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Intersecting_typeIntersected, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Intersecting_intersectingType.key: return this._intersectingType;
            case kermlBase.INSTANCE.Intersecting_typeIntersected.key: return this._typeIntersected;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Invariant extends BooleanExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Invariant {
        return new Invariant(kermlBase.INSTANCE.Invariant, id, receiveDelta, parentInfo);
    }

    private readonly _isNegated: RequiredPropertyValueManager<string>;
    get isNegated(): string {
        return this._isNegated.get();
    }
    set isNegated(newValue: string) {
        this._isNegated.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._isNegated = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.Invariant_isNegated, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === kermlBase.INSTANCE.Invariant_isNegated.key) {
            return this._isNegated;
        }
        return super.getPropertyValueManager(property);
    }
}

export class Package extends Namespace {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Package {
        return new Package(kermlBase.INSTANCE.Package, id, receiveDelta, parentInfo);
    }

    private readonly _filterCondition: RequiredMultiContainmentValueManager<Expression>;
    get filterCondition(): Expression[] {
        return this._filterCondition.get();
    }
    addFilterCondition(newValue: Expression) {
        this._filterCondition.add(newValue);
    }
    removeFilterCondition(valueToRemove: Expression) {
        this._filterCondition.remove(valueToRemove);
    }
    addFilterConditionAtIndex(newValue: Expression, index: number) {
        this._filterCondition.insertAtIndex(newValue, index);
    }
    moveFilterCondition(oldIndex: number, newIndex: number) {
        this._filterCondition.move(oldIndex, newIndex);
    }
    replaceFilterConditionAtIndex(movedChild: Expression, newIndex: number) {
        this._filterCondition.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._filterCondition = new RequiredMultiContainmentValueManager<Expression>(kermlBase.INSTANCE.Package_filterCondition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === kermlBase.INSTANCE.Package_filterCondition.key) {
            return this._filterCondition;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class LibraryPackage extends Package {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): LibraryPackage {
        return new LibraryPackage(kermlBase.INSTANCE.LibraryPackage, id, receiveDelta, parentInfo);
    }

    private readonly _isStandard: RequiredPropertyValueManager<string>;
    get isStandard(): string {
        return this._isStandard.get();
    }
    set isStandard(newValue: string) {
        this._isStandard.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._isStandard = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.LibraryPackage_isStandard, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === kermlBase.INSTANCE.LibraryPackage_isStandard.key) {
            return this._isStandard;
        }
        return super.getPropertyValueManager(property);
    }
}

export class LiteralExpression extends Expression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): LiteralExpression {
        return new LiteralExpression(kermlBase.INSTANCE.LiteralExpression, id, receiveDelta, parentInfo);
    }
}

export class LiteralBoolean extends LiteralExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): LiteralBoolean {
        return new LiteralBoolean(kermlBase.INSTANCE.LiteralBoolean, id, receiveDelta, parentInfo);
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
        this._value = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.LiteralBoolean_value, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === kermlBase.INSTANCE.LiteralBoolean_value.key) {
            return this._value;
        }
        return super.getPropertyValueManager(property);
    }
}

export class LiteralInfinity extends LiteralExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): LiteralInfinity {
        return new LiteralInfinity(kermlBase.INSTANCE.LiteralInfinity, id, receiveDelta, parentInfo);
    }
}

export class LiteralInteger extends LiteralExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): LiteralInteger {
        return new LiteralInteger(kermlBase.INSTANCE.LiteralInteger, id, receiveDelta, parentInfo);
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
        this._value = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.LiteralInteger_value, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === kermlBase.INSTANCE.LiteralInteger_value.key) {
            return this._value;
        }
        return super.getPropertyValueManager(property);
    }
}

export class LiteralRational extends LiteralExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): LiteralRational {
        return new LiteralRational(kermlBase.INSTANCE.LiteralRational, id, receiveDelta, parentInfo);
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
        this._value = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.LiteralRational_value, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === kermlBase.INSTANCE.LiteralRational_value.key) {
            return this._value;
        }
        return super.getPropertyValueManager(property);
    }
}

export class LiteralString extends LiteralExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): LiteralString {
        return new LiteralString(kermlBase.INSTANCE.LiteralString, id, receiveDelta, parentInfo);
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
        this._value = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.LiteralString_value, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === kermlBase.INSTANCE.LiteralString_value.key) {
            return this._value;
        }
        return super.getPropertyValueManager(property);
    }
}

export class MembershipImport extends Import {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): MembershipImport {
        return new MembershipImport(kermlBase.INSTANCE.MembershipImport, id, receiveDelta, parentInfo);
    }

    private readonly _importedMembership: RequiredMultiContainmentValueManager<Membership>;
    get importedMembership(): Membership[] {
        return this._importedMembership.get();
    }
    addImportedMembership(newValue: Membership) {
        this._importedMembership.add(newValue);
    }
    removeImportedMembership(valueToRemove: Membership) {
        this._importedMembership.remove(valueToRemove);
    }
    addImportedMembershipAtIndex(newValue: Membership, index: number) {
        this._importedMembership.insertAtIndex(newValue, index);
    }
    moveImportedMembership(oldIndex: number, newIndex: number) {
        this._importedMembership.move(oldIndex, newIndex);
    }
    replaceImportedMembershipAtIndex(movedChild: Membership, newIndex: number) {
        this._importedMembership.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._importedMembership = new RequiredMultiContainmentValueManager<Membership>(kermlBase.INSTANCE.MembershipImport_importedMembership, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === kermlBase.INSTANCE.MembershipImport_importedMembership.key) {
            return this._importedMembership;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class Structure extends Class {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Structure {
        return new Structure(kermlBase.INSTANCE.Structure, id, receiveDelta, parentInfo);
    }
}

export class Metaclass extends Structure {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Metaclass {
        return new Metaclass(kermlBase.INSTANCE.Metaclass, id, receiveDelta, parentInfo);
    }
}

export class MetadataAccessExpression extends Expression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): MetadataAccessExpression {
        return new MetadataAccessExpression(kermlBase.INSTANCE.MetadataAccessExpression, id, receiveDelta, parentInfo);
    }

    private readonly _referencedElement: RequiredMultiContainmentValueManager<Element>;
    get referencedElement(): Element[] {
        return this._referencedElement.get();
    }
    addReferencedElement(newValue: Element) {
        this._referencedElement.add(newValue);
    }
    removeReferencedElement(valueToRemove: Element) {
        this._referencedElement.remove(valueToRemove);
    }
    addReferencedElementAtIndex(newValue: Element, index: number) {
        this._referencedElement.insertAtIndex(newValue, index);
    }
    moveReferencedElement(oldIndex: number, newIndex: number) {
        this._referencedElement.move(oldIndex, newIndex);
    }
    replaceReferencedElementAtIndex(movedChild: Element, newIndex: number) {
        this._referencedElement.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._referencedElement = new RequiredMultiContainmentValueManager<Element>(kermlBase.INSTANCE.MetadataAccessExpression_referencedElement, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === kermlBase.INSTANCE.MetadataAccessExpression_referencedElement.key) {
            return this._referencedElement;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class MetadataFeature extends Feature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): MetadataFeature {
        return new MetadataFeature(kermlBase.INSTANCE.MetadataFeature, id, receiveDelta, parentInfo);
    }

    private readonly _metaclass: RequiredMultiContainmentValueManager<Metaclass>;
    get metaclass(): Metaclass[] {
        return this._metaclass.get();
    }
    addMetaclass(newValue: Metaclass) {
        this._metaclass.add(newValue);
    }
    removeMetaclass(valueToRemove: Metaclass) {
        this._metaclass.remove(valueToRemove);
    }
    addMetaclassAtIndex(newValue: Metaclass, index: number) {
        this._metaclass.insertAtIndex(newValue, index);
    }
    moveMetaclass(oldIndex: number, newIndex: number) {
        this._metaclass.move(oldIndex, newIndex);
    }
    replaceMetaclassAtIndex(movedChild: Metaclass, newIndex: number) {
        this._metaclass.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._metaclass = new RequiredMultiContainmentValueManager<Metaclass>(kermlBase.INSTANCE.MetadataFeature_metaclass, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === kermlBase.INSTANCE.MetadataFeature_metaclass.key) {
            return this._metaclass;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class Multiplicity extends Feature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Multiplicity {
        return new Multiplicity(kermlBase.INSTANCE.Multiplicity, id, receiveDelta, parentInfo);
    }
}

export class MultiplicityRange extends Multiplicity {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): MultiplicityRange {
        return new MultiplicityRange(kermlBase.INSTANCE.MultiplicityRange, id, receiveDelta, parentInfo);
    }

    private readonly _lowerBound: RequiredMultiContainmentValueManager<Expression>;
    get lowerBound(): Expression[] {
        return this._lowerBound.get();
    }
    addLowerBound(newValue: Expression) {
        this._lowerBound.add(newValue);
    }
    removeLowerBound(valueToRemove: Expression) {
        this._lowerBound.remove(valueToRemove);
    }
    addLowerBoundAtIndex(newValue: Expression, index: number) {
        this._lowerBound.insertAtIndex(newValue, index);
    }
    moveLowerBound(oldIndex: number, newIndex: number) {
        this._lowerBound.move(oldIndex, newIndex);
    }
    replaceLowerBoundAtIndex(movedChild: Expression, newIndex: number) {
        this._lowerBound.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _upperBound: RequiredMultiContainmentValueManager<Expression>;
    get upperBound(): Expression[] {
        return this._upperBound.get();
    }
    addUpperBound(newValue: Expression) {
        this._upperBound.add(newValue);
    }
    removeUpperBound(valueToRemove: Expression) {
        this._upperBound.remove(valueToRemove);
    }
    addUpperBoundAtIndex(newValue: Expression, index: number) {
        this._upperBound.insertAtIndex(newValue, index);
    }
    moveUpperBound(oldIndex: number, newIndex: number) {
        this._upperBound.move(oldIndex, newIndex);
    }
    replaceUpperBoundAtIndex(movedChild: Expression, newIndex: number) {
        this._upperBound.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _bound: RequiredMultiContainmentValueManager<Expression>;
    get bound(): Expression[] {
        return this._bound.get();
    }
    addBound(newValue: Expression) {
        this._bound.add(newValue);
    }
    removeBound(valueToRemove: Expression) {
        this._bound.remove(valueToRemove);
    }
    addBoundAtIndex(newValue: Expression, index: number) {
        this._bound.insertAtIndex(newValue, index);
    }
    moveBound(oldIndex: number, newIndex: number) {
        this._bound.move(oldIndex, newIndex);
    }
    replaceBoundAtIndex(movedChild: Expression, newIndex: number) {
        this._bound.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._lowerBound = new RequiredMultiContainmentValueManager<Expression>(kermlBase.INSTANCE.MultiplicityRange_lowerBound, this);
        this._upperBound = new RequiredMultiContainmentValueManager<Expression>(kermlBase.INSTANCE.MultiplicityRange_upperBound, this);
        this._bound = new RequiredMultiContainmentValueManager<Expression>(kermlBase.INSTANCE.MultiplicityRange_bound, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.MultiplicityRange_lowerBound.key: return this._lowerBound;
            case kermlBase.INSTANCE.MultiplicityRange_upperBound.key: return this._upperBound;
            case kermlBase.INSTANCE.MultiplicityRange_bound.key: return this._bound;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class NamespaceImport extends Import {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): NamespaceImport {
        return new NamespaceImport(kermlBase.INSTANCE.NamespaceImport, id, receiveDelta, parentInfo);
    }

    private readonly _importedNamespace: RequiredMultiContainmentValueManager<Namespace>;
    get importedNamespace(): Namespace[] {
        return this._importedNamespace.get();
    }
    addImportedNamespace(newValue: Namespace) {
        this._importedNamespace.add(newValue);
    }
    removeImportedNamespace(valueToRemove: Namespace) {
        this._importedNamespace.remove(valueToRemove);
    }
    addImportedNamespaceAtIndex(newValue: Namespace, index: number) {
        this._importedNamespace.insertAtIndex(newValue, index);
    }
    moveImportedNamespace(oldIndex: number, newIndex: number) {
        this._importedNamespace.move(oldIndex, newIndex);
    }
    replaceImportedNamespaceAtIndex(movedChild: Namespace, newIndex: number) {
        this._importedNamespace.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._importedNamespace = new RequiredMultiContainmentValueManager<Namespace>(kermlBase.INSTANCE.NamespaceImport_importedNamespace, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === kermlBase.INSTANCE.NamespaceImport_importedNamespace.key) {
            return this._importedNamespace;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class NullExpression extends Expression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): NullExpression {
        return new NullExpression(kermlBase.INSTANCE.NullExpression, id, receiveDelta, parentInfo);
    }
}

export class ParameterMembership extends FeatureMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ParameterMembership {
        return new ParameterMembership(kermlBase.INSTANCE.ParameterMembership, id, receiveDelta, parentInfo);
    }

    private readonly _ownedMemberParameter: RequiredMultiContainmentValueManager<Feature>;
    get ownedMemberParameter(): Feature[] {
        return this._ownedMemberParameter.get();
    }
    addOwnedMemberParameter(newValue: Feature) {
        this._ownedMemberParameter.add(newValue);
    }
    removeOwnedMemberParameter(valueToRemove: Feature) {
        this._ownedMemberParameter.remove(valueToRemove);
    }
    addOwnedMemberParameterAtIndex(newValue: Feature, index: number) {
        this._ownedMemberParameter.insertAtIndex(newValue, index);
    }
    moveOwnedMemberParameter(oldIndex: number, newIndex: number) {
        this._ownedMemberParameter.move(oldIndex, newIndex);
    }
    replaceOwnedMemberParameterAtIndex(movedChild: Feature, newIndex: number) {
        this._ownedMemberParameter.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._ownedMemberParameter = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.ParameterMembership_ownedMemberParameter, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === kermlBase.INSTANCE.ParameterMembership_ownedMemberParameter.key) {
            return this._ownedMemberParameter;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class PayloadFeature extends Feature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): PayloadFeature {
        return new PayloadFeature(kermlBase.INSTANCE.PayloadFeature, id, receiveDelta, parentInfo);
    }
}

export class Predicate extends Function {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Predicate {
        return new Predicate(kermlBase.INSTANCE.Predicate, id, receiveDelta, parentInfo);
    }
}

export class Redefinition extends Subsetting {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Redefinition {
        return new Redefinition(kermlBase.INSTANCE.Redefinition, id, receiveDelta, parentInfo);
    }

    private readonly _redefiningFeature: RequiredMultiContainmentValueManager<Feature>;
    get redefiningFeature(): Feature[] {
        return this._redefiningFeature.get();
    }
    addRedefiningFeature(newValue: Feature) {
        this._redefiningFeature.add(newValue);
    }
    removeRedefiningFeature(valueToRemove: Feature) {
        this._redefiningFeature.remove(valueToRemove);
    }
    addRedefiningFeatureAtIndex(newValue: Feature, index: number) {
        this._redefiningFeature.insertAtIndex(newValue, index);
    }
    moveRedefiningFeature(oldIndex: number, newIndex: number) {
        this._redefiningFeature.move(oldIndex, newIndex);
    }
    replaceRedefiningFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._redefiningFeature.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _redefinedFeature: RequiredMultiContainmentValueManager<Feature>;
    get redefinedFeature(): Feature[] {
        return this._redefinedFeature.get();
    }
    addRedefinedFeature(newValue: Feature) {
        this._redefinedFeature.add(newValue);
    }
    removeRedefinedFeature(valueToRemove: Feature) {
        this._redefinedFeature.remove(valueToRemove);
    }
    addRedefinedFeatureAtIndex(newValue: Feature, index: number) {
        this._redefinedFeature.insertAtIndex(newValue, index);
    }
    moveRedefinedFeature(oldIndex: number, newIndex: number) {
        this._redefinedFeature.move(oldIndex, newIndex);
    }
    replaceRedefinedFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._redefinedFeature.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._redefiningFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Redefinition_redefiningFeature, this);
        this._redefinedFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.Redefinition_redefinedFeature, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Redefinition_redefiningFeature.key: return this._redefiningFeature;
            case kermlBase.INSTANCE.Redefinition_redefinedFeature.key: return this._redefinedFeature;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class ReferenceSubsetting extends Subsetting {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ReferenceSubsetting {
        return new ReferenceSubsetting(kermlBase.INSTANCE.ReferenceSubsetting, id, receiveDelta, parentInfo);
    }

    private readonly _referencedFeature: RequiredMultiContainmentValueManager<Feature>;
    get referencedFeature(): Feature[] {
        return this._referencedFeature.get();
    }
    addReferencedFeature(newValue: Feature) {
        this._referencedFeature.add(newValue);
    }
    removeReferencedFeature(valueToRemove: Feature) {
        this._referencedFeature.remove(valueToRemove);
    }
    addReferencedFeatureAtIndex(newValue: Feature, index: number) {
        this._referencedFeature.insertAtIndex(newValue, index);
    }
    moveReferencedFeature(oldIndex: number, newIndex: number) {
        this._referencedFeature.move(oldIndex, newIndex);
    }
    replaceReferencedFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._referencedFeature.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _referencingFeature: RequiredMultiContainmentValueManager<Feature>;
    get referencingFeature(): Feature[] {
        return this._referencingFeature.get();
    }
    addReferencingFeature(newValue: Feature) {
        this._referencingFeature.add(newValue);
    }
    removeReferencingFeature(valueToRemove: Feature) {
        this._referencingFeature.remove(valueToRemove);
    }
    addReferencingFeatureAtIndex(newValue: Feature, index: number) {
        this._referencingFeature.insertAtIndex(newValue, index);
    }
    moveReferencingFeature(oldIndex: number, newIndex: number) {
        this._referencingFeature.move(oldIndex, newIndex);
    }
    replaceReferencingFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._referencingFeature.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._referencedFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.ReferenceSubsetting_referencedFeature, this);
        this._referencingFeature = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.ReferenceSubsetting_referencingFeature, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.ReferenceSubsetting_referencedFeature.key: return this._referencedFeature;
            case kermlBase.INSTANCE.ReferenceSubsetting_referencingFeature.key: return this._referencingFeature;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class ResultExpressionMembership extends FeatureMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ResultExpressionMembership {
        return new ResultExpressionMembership(kermlBase.INSTANCE.ResultExpressionMembership, id, receiveDelta, parentInfo);
    }

    private readonly _ownedResultExpression: RequiredMultiContainmentValueManager<Expression>;
    get ownedResultExpression(): Expression[] {
        return this._ownedResultExpression.get();
    }
    addOwnedResultExpression(newValue: Expression) {
        this._ownedResultExpression.add(newValue);
    }
    removeOwnedResultExpression(valueToRemove: Expression) {
        this._ownedResultExpression.remove(valueToRemove);
    }
    addOwnedResultExpressionAtIndex(newValue: Expression, index: number) {
        this._ownedResultExpression.insertAtIndex(newValue, index);
    }
    moveOwnedResultExpression(oldIndex: number, newIndex: number) {
        this._ownedResultExpression.move(oldIndex, newIndex);
    }
    replaceOwnedResultExpressionAtIndex(movedChild: Expression, newIndex: number) {
        this._ownedResultExpression.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._ownedResultExpression = new RequiredMultiContainmentValueManager<Expression>(kermlBase.INSTANCE.ResultExpressionMembership_ownedResultExpression, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === kermlBase.INSTANCE.ResultExpressionMembership_ownedResultExpression.key) {
            return this._ownedResultExpression;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class ReturnParameterMembership extends ParameterMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ReturnParameterMembership {
        return new ReturnParameterMembership(kermlBase.INSTANCE.ReturnParameterMembership, id, receiveDelta, parentInfo);
    }
}

export class SelectExpression extends OperatorExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): SelectExpression {
        return new SelectExpression(kermlBase.INSTANCE.SelectExpression, id, receiveDelta, parentInfo);
    }
}

export class Subclassification extends Specialization {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Subclassification {
        return new Subclassification(kermlBase.INSTANCE.Subclassification, id, receiveDelta, parentInfo);
    }

    private readonly _superclassifier: RequiredMultiContainmentValueManager<kermlClassifier>;
    get superclassifier(): kermlClassifier[] {
        return this._superclassifier.get();
    }
    addSuperclassifier(newValue: kermlClassifier) {
        this._superclassifier.add(newValue);
    }
    removeSuperclassifier(valueToRemove: kermlClassifier) {
        this._superclassifier.remove(valueToRemove);
    }
    addSuperclassifierAtIndex(newValue: kermlClassifier, index: number) {
        this._superclassifier.insertAtIndex(newValue, index);
    }
    moveSuperclassifier(oldIndex: number, newIndex: number) {
        this._superclassifier.move(oldIndex, newIndex);
    }
    replaceSuperclassifierAtIndex(movedChild: kermlClassifier, newIndex: number) {
        this._superclassifier.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _subclassifier: RequiredMultiContainmentValueManager<kermlClassifier>;
    get subclassifier(): kermlClassifier[] {
        return this._subclassifier.get();
    }
    addSubclassifier(newValue: kermlClassifier) {
        this._subclassifier.add(newValue);
    }
    removeSubclassifier(valueToRemove: kermlClassifier) {
        this._subclassifier.remove(valueToRemove);
    }
    addSubclassifierAtIndex(newValue: kermlClassifier, index: number) {
        this._subclassifier.insertAtIndex(newValue, index);
    }
    moveSubclassifier(oldIndex: number, newIndex: number) {
        this._subclassifier.move(oldIndex, newIndex);
    }
    replaceSubclassifierAtIndex(movedChild: kermlClassifier, newIndex: number) {
        this._subclassifier.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _owningClassifier: RequiredMultiContainmentValueManager<kermlClassifier>;
    get owningClassifier(): kermlClassifier[] {
        return this._owningClassifier.get();
    }
    addOwningClassifier(newValue: kermlClassifier) {
        this._owningClassifier.add(newValue);
    }
    removeOwningClassifier(valueToRemove: kermlClassifier) {
        this._owningClassifier.remove(valueToRemove);
    }
    addOwningClassifierAtIndex(newValue: kermlClassifier, index: number) {
        this._owningClassifier.insertAtIndex(newValue, index);
    }
    moveOwningClassifier(oldIndex: number, newIndex: number) {
        this._owningClassifier.move(oldIndex, newIndex);
    }
    replaceOwningClassifierAtIndex(movedChild: kermlClassifier, newIndex: number) {
        this._owningClassifier.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._superclassifier = new RequiredMultiContainmentValueManager<kermlClassifier>(kermlBase.INSTANCE.Subclassification_superclassifier, this);
        this._subclassifier = new RequiredMultiContainmentValueManager<kermlClassifier>(kermlBase.INSTANCE.Subclassification_subclassifier, this);
        this._owningClassifier = new RequiredMultiContainmentValueManager<kermlClassifier>(kermlBase.INSTANCE.Subclassification_owningClassifier, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Subclassification_superclassifier.key: return this._superclassifier;
            case kermlBase.INSTANCE.Subclassification_subclassifier.key: return this._subclassifier;
            case kermlBase.INSTANCE.Subclassification_owningClassifier.key: return this._owningClassifier;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Succession extends Connector {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Succession {
        return new Succession(kermlBase.INSTANCE.Succession, id, receiveDelta, parentInfo);
    }
}

export class SuccessionFlow extends Flow {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): SuccessionFlow {
        return new SuccessionFlow(kermlBase.INSTANCE.SuccessionFlow, id, receiveDelta, parentInfo);
    }
}

export class TextualRepresentation extends AnnotatingElement {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): TextualRepresentation {
        return new TextualRepresentation(kermlBase.INSTANCE.TextualRepresentation, id, receiveDelta, parentInfo);
    }

    private readonly _representedElement: RequiredMultiContainmentValueManager<Element>;
    get representedElement(): Element[] {
        return this._representedElement.get();
    }
    addRepresentedElement(newValue: Element) {
        this._representedElement.add(newValue);
    }
    removeRepresentedElement(valueToRemove: Element) {
        this._representedElement.remove(valueToRemove);
    }
    addRepresentedElementAtIndex(newValue: Element, index: number) {
        this._representedElement.insertAtIndex(newValue, index);
    }
    moveRepresentedElement(oldIndex: number, newIndex: number) {
        this._representedElement.move(oldIndex, newIndex);
    }
    replaceRepresentedElementAtIndex(movedChild: Element, newIndex: number) {
        this._representedElement.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _language: RequiredPropertyValueManager<string>;
    get language(): string {
        return this._language.get();
    }
    set language(newValue: string) {
        this._language.set(newValue);
    }

    private readonly _body: RequiredPropertyValueManager<string>;
    get body(): string {
        return this._body.get();
    }
    set body(newValue: string) {
        this._body.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._representedElement = new RequiredMultiContainmentValueManager<Element>(kermlBase.INSTANCE.TextualRepresentation_representedElement, this);
        this._language = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.TextualRepresentation_language, this);
        this._body = new RequiredPropertyValueManager<string>(kermlBase.INSTANCE.TextualRepresentation_body, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case kermlBase.INSTANCE.TextualRepresentation_language.key: return this._language;
            case kermlBase.INSTANCE.TextualRepresentation_body.key: return this._body;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === kermlBase.INSTANCE.TextualRepresentation_representedElement.key) {
            return this._representedElement;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class TypeFeaturing extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): TypeFeaturing {
        return new TypeFeaturing(kermlBase.INSTANCE.TypeFeaturing, id, receiveDelta, parentInfo);
    }

    private readonly _featureOfType: RequiredMultiContainmentValueManager<Feature>;
    get featureOfType(): Feature[] {
        return this._featureOfType.get();
    }
    addFeatureOfType(newValue: Feature) {
        this._featureOfType.add(newValue);
    }
    removeFeatureOfType(valueToRemove: Feature) {
        this._featureOfType.remove(valueToRemove);
    }
    addFeatureOfTypeAtIndex(newValue: Feature, index: number) {
        this._featureOfType.insertAtIndex(newValue, index);
    }
    moveFeatureOfType(oldIndex: number, newIndex: number) {
        this._featureOfType.move(oldIndex, newIndex);
    }
    replaceFeatureOfTypeAtIndex(movedChild: Feature, newIndex: number) {
        this._featureOfType.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _featuringType: RequiredMultiContainmentValueManager<Type>;
    get featuringType(): Type[] {
        return this._featuringType.get();
    }
    addFeaturingType(newValue: Type) {
        this._featuringType.add(newValue);
    }
    removeFeaturingType(valueToRemove: Type) {
        this._featuringType.remove(valueToRemove);
    }
    addFeaturingTypeAtIndex(newValue: Type, index: number) {
        this._featuringType.insertAtIndex(newValue, index);
    }
    moveFeaturingType(oldIndex: number, newIndex: number) {
        this._featuringType.move(oldIndex, newIndex);
    }
    replaceFeaturingTypeAtIndex(movedChild: Type, newIndex: number) {
        this._featuringType.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _owningFeatureOfType: RequiredMultiContainmentValueManager<Feature>;
    get owningFeatureOfType(): Feature[] {
        return this._owningFeatureOfType.get();
    }
    addOwningFeatureOfType(newValue: Feature) {
        this._owningFeatureOfType.add(newValue);
    }
    removeOwningFeatureOfType(valueToRemove: Feature) {
        this._owningFeatureOfType.remove(valueToRemove);
    }
    addOwningFeatureOfTypeAtIndex(newValue: Feature, index: number) {
        this._owningFeatureOfType.insertAtIndex(newValue, index);
    }
    moveOwningFeatureOfType(oldIndex: number, newIndex: number) {
        this._owningFeatureOfType.move(oldIndex, newIndex);
    }
    replaceOwningFeatureOfTypeAtIndex(movedChild: Feature, newIndex: number) {
        this._owningFeatureOfType.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._featureOfType = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.TypeFeaturing_featureOfType, this);
        this._featuringType = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.TypeFeaturing_featuringType, this);
        this._owningFeatureOfType = new RequiredMultiContainmentValueManager<Feature>(kermlBase.INSTANCE.TypeFeaturing_owningFeatureOfType, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.TypeFeaturing_featureOfType.key: return this._featureOfType;
            case kermlBase.INSTANCE.TypeFeaturing_featuringType.key: return this._featuringType;
            case kermlBase.INSTANCE.TypeFeaturing_owningFeatureOfType.key: return this._owningFeatureOfType;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Unioning extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Unioning {
        return new Unioning(kermlBase.INSTANCE.Unioning, id, receiveDelta, parentInfo);
    }

    private readonly _unioningType: RequiredMultiContainmentValueManager<Type>;
    get unioningType(): Type[] {
        return this._unioningType.get();
    }
    addUnioningType(newValue: Type) {
        this._unioningType.add(newValue);
    }
    removeUnioningType(valueToRemove: Type) {
        this._unioningType.remove(valueToRemove);
    }
    addUnioningTypeAtIndex(newValue: Type, index: number) {
        this._unioningType.insertAtIndex(newValue, index);
    }
    moveUnioningType(oldIndex: number, newIndex: number) {
        this._unioningType.move(oldIndex, newIndex);
    }
    replaceUnioningTypeAtIndex(movedChild: Type, newIndex: number) {
        this._unioningType.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _typeUnioned: RequiredMultiContainmentValueManager<Type>;
    get typeUnioned(): Type[] {
        return this._typeUnioned.get();
    }
    addTypeUnioned(newValue: Type) {
        this._typeUnioned.add(newValue);
    }
    removeTypeUnioned(valueToRemove: Type) {
        this._typeUnioned.remove(valueToRemove);
    }
    addTypeUnionedAtIndex(newValue: Type, index: number) {
        this._typeUnioned.insertAtIndex(newValue, index);
    }
    moveTypeUnioned(oldIndex: number, newIndex: number) {
        this._typeUnioned.move(oldIndex, newIndex);
    }
    replaceTypeUnionedAtIndex(movedChild: Type, newIndex: number) {
        this._typeUnioned.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._unioningType = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Unioning_unioningType, this);
        this._typeUnioned = new RequiredMultiContainmentValueManager<Type>(kermlBase.INSTANCE.Unioning_typeUnioned, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case kermlBase.INSTANCE.Unioning_unioningType.key: return this._unioningType;
            case kermlBase.INSTANCE.Unioning_typeUnioned.key: return this._typeUnioned;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export enum VisibilityKind {
    private = "kerml-VisibilityKind-private",
    protected = "kerml-VisibilityKind-protected",
    public = "kerml-VisibilityKind-public"
}

