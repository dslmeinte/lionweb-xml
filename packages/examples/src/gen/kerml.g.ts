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
    Enumeration,
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


export class kermlBase implements ILanguageBase {

    private readonly _language: Language = new Language("kerml", "1", "kerml", "kerml");
    get language(): Language {
        this.ensureWiredUp();
        return this._language;
    }

    public readonly _TextualRepresentation = new Concept(this._language, "TextualRepresentation", "kerml-TextualRepresentation", "kerml-TextualRepresentation", false);
    get TextualRepresentation(): Concept {
        this.ensureWiredUp();
        return this._TextualRepresentation;
    }

    public readonly _AnnotatingElement = new Concept(this._language, "AnnotatingElement", "kerml-AnnotatingElement", "kerml-AnnotatingElement", false);
    get AnnotatingElement(): Concept {
        this.ensureWiredUp();
        return this._AnnotatingElement;
    }

    public readonly _Element = new Concept(this._language, "Element", "kerml-Element", "kerml-Element", true);
    get Element(): Concept {
        this.ensureWiredUp();
        return this._Element;
    }

    public readonly _OwningMembership = new Concept(this._language, "OwningMembership", "kerml-OwningMembership", "kerml-OwningMembership", false);
    get OwningMembership(): Concept {
        this.ensureWiredUp();
        return this._OwningMembership;
    }

    public readonly _Membership = new Concept(this._language, "Membership", "kerml-Membership", "kerml-Membership", false);
    get Membership(): Concept {
        this.ensureWiredUp();
        return this._Membership;
    }

    public readonly _Relationship = new Concept(this._language, "Relationship", "kerml-Relationship", "kerml-Relationship", true);
    get Relationship(): Concept {
        this.ensureWiredUp();
        return this._Relationship;
    }

    public readonly _Namespace = new Concept(this._language, "Namespace", "kerml-Namespace", "kerml-Namespace", false);
    get Namespace(): Concept {
        this.ensureWiredUp();
        return this._Namespace;
    }

    public readonly _Import = new Concept(this._language, "Import", "kerml-Import", "kerml-Import", true);
    get Import(): Concept {
        this.ensureWiredUp();
        return this._Import;
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

    public readonly _Documentation = new Concept(this._language, "Documentation", "kerml-Documentation", "kerml-Documentation", false);
    get Documentation(): Concept {
        this.ensureWiredUp();
        return this._Documentation;
    }

    public readonly _Comment = new Concept(this._language, "Comment", "kerml-Comment", "kerml-Comment", false);
    get Comment(): Concept {
        this.ensureWiredUp();
        return this._Comment;
    }

    public readonly _Annotation = new Concept(this._language, "Annotation", "kerml-Annotation", "kerml-Annotation", false);
    get Annotation(): Concept {
        this.ensureWiredUp();
        return this._Annotation;
    }

    public readonly _MembershipImport = new Concept(this._language, "MembershipImport", "kerml-MembershipImport", "kerml-MembershipImport", false);
    get MembershipImport(): Concept {
        this.ensureWiredUp();
        return this._MembershipImport;
    }

    public readonly _NamespaceImport = new Concept(this._language, "NamespaceImport", "kerml-NamespaceImport", "kerml-NamespaceImport", false);
    get NamespaceImport(): Concept {
        this.ensureWiredUp();
        return this._NamespaceImport;
    }

    public readonly _Dependency = new Concept(this._language, "Dependency", "kerml-Dependency", "kerml-Dependency", false);
    get Dependency(): Concept {
        this.ensureWiredUp();
        return this._Dependency;
    }

    public readonly _CrossSubsetting = new Concept(this._language, "CrossSubsetting", "kerml-CrossSubsetting", "kerml-CrossSubsetting", false);
    get CrossSubsetting(): Concept {
        this.ensureWiredUp();
        return this._CrossSubsetting;
    }

    public readonly _Subsetting = new Concept(this._language, "Subsetting", "kerml-Subsetting", "kerml-Subsetting", false);
    get Subsetting(): Concept {
        this.ensureWiredUp();
        return this._Subsetting;
    }

    public readonly _Specialization = new Concept(this._language, "Specialization", "kerml-Specialization", "kerml-Specialization", false);
    get Specialization(): Concept {
        this.ensureWiredUp();
        return this._Specialization;
    }

    public readonly _Type = new Concept(this._language, "Type", "kerml-Type", "kerml-Type", false);
    get Type(): Concept {
        this.ensureWiredUp();
        return this._Type;
    }

    public readonly _FeatureMembership = new Concept(this._language, "FeatureMembership", "kerml-FeatureMembership", "kerml-FeatureMembership", false);
    get FeatureMembership(): Concept {
        this.ensureWiredUp();
        return this._FeatureMembership;
    }

    public readonly _Feature = new Concept(this._language, "Feature", "kerml-Feature", "kerml-Feature", false);
    get Feature(): Concept {
        this.ensureWiredUp();
        return this._Feature;
    }

    public readonly _Redefinition = new Concept(this._language, "Redefinition", "kerml-Redefinition", "kerml-Redefinition", false);
    get Redefinition(): Concept {
        this.ensureWiredUp();
        return this._Redefinition;
    }

    public readonly _FeatureTyping = new Concept(this._language, "FeatureTyping", "kerml-FeatureTyping", "kerml-FeatureTyping", false);
    get FeatureTyping(): Concept {
        this.ensureWiredUp();
        return this._FeatureTyping;
    }

    public readonly _TypeFeaturing = new Concept(this._language, "TypeFeaturing", "kerml-TypeFeaturing", "kerml-TypeFeaturing", false);
    get TypeFeaturing(): Concept {
        this.ensureWiredUp();
        return this._TypeFeaturing;
    }

    public readonly _FeatureInverting = new Concept(this._language, "FeatureInverting", "kerml-FeatureInverting", "kerml-FeatureInverting", false);
    get FeatureInverting(): Concept {
        this.ensureWiredUp();
        return this._FeatureInverting;
    }

    public readonly _FeatureChaining = new Concept(this._language, "FeatureChaining", "kerml-FeatureChaining", "kerml-FeatureChaining", false);
    get FeatureChaining(): Concept {
        this.ensureWiredUp();
        return this._FeatureChaining;
    }

    public readonly _ReferenceSubsetting = new Concept(this._language, "ReferenceSubsetting", "kerml-ReferenceSubsetting", "kerml-ReferenceSubsetting", false);
    get ReferenceSubsetting(): Concept {
        this.ensureWiredUp();
        return this._ReferenceSubsetting;
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

    public readonly _Conjugation = new Concept(this._language, "Conjugation", "kerml-Conjugation", "kerml-Conjugation", false);
    get Conjugation(): Concept {
        this.ensureWiredUp();
        return this._Conjugation;
    }

    public readonly _Multiplicity = new Concept(this._language, "Multiplicity", "kerml-Multiplicity", "kerml-Multiplicity", false);
    get Multiplicity(): Concept {
        this.ensureWiredUp();
        return this._Multiplicity;
    }

    public readonly _Intersecting = new Concept(this._language, "Intersecting", "kerml-Intersecting", "kerml-Intersecting", false);
    get Intersecting(): Concept {
        this.ensureWiredUp();
        return this._Intersecting;
    }

    public readonly _Unioning = new Concept(this._language, "Unioning", "kerml-Unioning", "kerml-Unioning", false);
    get Unioning(): Concept {
        this.ensureWiredUp();
        return this._Unioning;
    }

    public readonly _Disjoining = new Concept(this._language, "Disjoining", "kerml-Disjoining", "kerml-Disjoining", false);
    get Disjoining(): Concept {
        this.ensureWiredUp();
        return this._Disjoining;
    }

    public readonly _Differencing = new Concept(this._language, "Differencing", "kerml-Differencing", "kerml-Differencing", false);
    get Differencing(): Concept {
        this.ensureWiredUp();
        return this._Differencing;
    }

    public readonly _EndFeatureMembership = new Concept(this._language, "EndFeatureMembership", "kerml-EndFeatureMembership", "kerml-EndFeatureMembership", false);
    get EndFeatureMembership(): Concept {
        this.ensureWiredUp();
        return this._EndFeatureMembership;
    }

    public readonly _Classifier = new Concept(this._language, "Classifier", "kerml-Classifier", "kerml-Classifier", false);
    get Classifier(): Concept {
        this.ensureWiredUp();
        return this._Classifier;
    }

    public readonly _Subclassification = new Concept(this._language, "Subclassification", "kerml-Subclassification", "kerml-Subclassification", false);
    get Subclassification(): Concept {
        this.ensureWiredUp();
        return this._Subclassification;
    }

    public readonly _Succession = new Concept(this._language, "Succession", "kerml-Succession", "kerml-Succession", false);
    get Succession(): Concept {
        this.ensureWiredUp();
        return this._Succession;
    }

    public readonly _Connector = new Concept(this._language, "Connector", "kerml-Connector", "kerml-Connector", false);
    get Connector(): Concept {
        this.ensureWiredUp();
        return this._Connector;
    }

    public readonly _Association = new Concept(this._language, "Association", "kerml-Association", "kerml-Association", false);
    get Association(): Concept {
        this.ensureWiredUp();
        return this._Association;
    }

    public readonly _BindingConnector = new Concept(this._language, "BindingConnector", "kerml-BindingConnector", "kerml-BindingConnector", false);
    get BindingConnector(): Concept {
        this.ensureWiredUp();
        return this._BindingConnector;
    }

    public readonly _MultiplicityRange = new Concept(this._language, "MultiplicityRange", "kerml-MultiplicityRange", "kerml-MultiplicityRange", false);
    get MultiplicityRange(): Concept {
        this.ensureWiredUp();
        return this._MultiplicityRange;
    }

    public readonly _Expression = new Concept(this._language, "Expression", "kerml-Expression", "kerml-Expression", false);
    get Expression(): Concept {
        this.ensureWiredUp();
        return this._Expression;
    }

    public readonly _Step = new Concept(this._language, "Step", "kerml-Step", "kerml-Step", false);
    get Step(): Concept {
        this.ensureWiredUp();
        return this._Step;
    }

    public readonly _Behavior = new Concept(this._language, "Behavior", "kerml-Behavior", "kerml-Behavior", false);
    get Behavior(): Concept {
        this.ensureWiredUp();
        return this._Behavior;
    }

    public readonly _Class = new Concept(this._language, "Class", "kerml-Class", "kerml-Class", false);
    get Class(): Concept {
        this.ensureWiredUp();
        return this._Class;
    }

    public readonly _Function = new Concept(this._language, "Function", "kerml-Function", "kerml-Function", false);
    get Function(): Concept {
        this.ensureWiredUp();
        return this._Function;
    }

    public readonly _Invariant = new Concept(this._language, "Invariant", "kerml-Invariant", "kerml-Invariant", false);
    get Invariant(): Concept {
        this.ensureWiredUp();
        return this._Invariant;
    }

    public readonly _BooleanExpression = new Concept(this._language, "BooleanExpression", "kerml-BooleanExpression", "kerml-BooleanExpression", false);
    get BooleanExpression(): Concept {
        this.ensureWiredUp();
        return this._BooleanExpression;
    }

    public readonly _Predicate = new Concept(this._language, "Predicate", "kerml-Predicate", "kerml-Predicate", false);
    get Predicate(): Concept {
        this.ensureWiredUp();
        return this._Predicate;
    }

    public readonly _ReturnParameterMembership = new Concept(this._language, "ReturnParameterMembership", "kerml-ReturnParameterMembership", "kerml-ReturnParameterMembership", false);
    get ReturnParameterMembership(): Concept {
        this.ensureWiredUp();
        return this._ReturnParameterMembership;
    }

    public readonly _ParameterMembership = new Concept(this._language, "ParameterMembership", "kerml-ParameterMembership", "kerml-ParameterMembership", false);
    get ParameterMembership(): Concept {
        this.ensureWiredUp();
        return this._ParameterMembership;
    }

    public readonly _ResultExpressionMembership = new Concept(this._language, "ResultExpressionMembership", "kerml-ResultExpressionMembership", "kerml-ResultExpressionMembership", false);
    get ResultExpressionMembership(): Concept {
        this.ensureWiredUp();
        return this._ResultExpressionMembership;
    }

    public readonly _FeatureValue = new Concept(this._language, "FeatureValue", "kerml-FeatureValue", "kerml-FeatureValue", false);
    get FeatureValue(): Concept {
        this.ensureWiredUp();
        return this._FeatureValue;
    }

    public readonly _LibraryPackage = new Concept(this._language, "LibraryPackage", "kerml-LibraryPackage", "kerml-LibraryPackage", false);
    get LibraryPackage(): Concept {
        this.ensureWiredUp();
        return this._LibraryPackage;
    }

    public readonly _Package = new Concept(this._language, "Package", "kerml-Package", "kerml-Package", false);
    get Package(): Concept {
        this.ensureWiredUp();
        return this._Package;
    }

    public readonly _ElementFilterMembership = new Concept(this._language, "ElementFilterMembership", "kerml-ElementFilterMembership", "kerml-ElementFilterMembership", false);
    get ElementFilterMembership(): Concept {
        this.ensureWiredUp();
        return this._ElementFilterMembership;
    }

    public readonly _NullExpression = new Concept(this._language, "NullExpression", "kerml-NullExpression", "kerml-NullExpression", false);
    get NullExpression(): Concept {
        this.ensureWiredUp();
        return this._NullExpression;
    }

    public readonly _LiteralInfinity = new Concept(this._language, "LiteralInfinity", "kerml-LiteralInfinity", "kerml-LiteralInfinity", false);
    get LiteralInfinity(): Concept {
        this.ensureWiredUp();
        return this._LiteralInfinity;
    }

    public readonly _LiteralExpression = new Concept(this._language, "LiteralExpression", "kerml-LiteralExpression", "kerml-LiteralExpression", false);
    get LiteralExpression(): Concept {
        this.ensureWiredUp();
        return this._LiteralExpression;
    }

    public readonly _LiteralInteger = new Concept(this._language, "LiteralInteger", "kerml-LiteralInteger", "kerml-LiteralInteger", false);
    get LiteralInteger(): Concept {
        this.ensureWiredUp();
        return this._LiteralInteger;
    }

    public readonly _LiteralString = new Concept(this._language, "LiteralString", "kerml-LiteralString", "kerml-LiteralString", false);
    get LiteralString(): Concept {
        this.ensureWiredUp();
        return this._LiteralString;
    }

    public readonly _LiteralBoolean = new Concept(this._language, "LiteralBoolean", "kerml-LiteralBoolean", "kerml-LiteralBoolean", false);
    get LiteralBoolean(): Concept {
        this.ensureWiredUp();
        return this._LiteralBoolean;
    }

    public readonly _SelectExpression = new Concept(this._language, "SelectExpression", "kerml-SelectExpression", "kerml-SelectExpression", false);
    get SelectExpression(): Concept {
        this.ensureWiredUp();
        return this._SelectExpression;
    }

    public readonly _OperatorExpression = new Concept(this._language, "OperatorExpression", "kerml-OperatorExpression", "kerml-OperatorExpression", false);
    get OperatorExpression(): Concept {
        this.ensureWiredUp();
        return this._OperatorExpression;
    }

    public readonly _InvocationExpression = new Concept(this._language, "InvocationExpression", "kerml-InvocationExpression", "kerml-InvocationExpression", false);
    get InvocationExpression(): Concept {
        this.ensureWiredUp();
        return this._InvocationExpression;
    }

    public readonly _InstantiationExpression = new Concept(this._language, "InstantiationExpression", "kerml-InstantiationExpression", "kerml-InstantiationExpression", true);
    get InstantiationExpression(): Concept {
        this.ensureWiredUp();
        return this._InstantiationExpression;
    }

    public readonly _CollectExpression = new Concept(this._language, "CollectExpression", "kerml-CollectExpression", "kerml-CollectExpression", false);
    get CollectExpression(): Concept {
        this.ensureWiredUp();
        return this._CollectExpression;
    }

    public readonly _FeatureReferenceExpression = new Concept(this._language, "FeatureReferenceExpression", "kerml-FeatureReferenceExpression", "kerml-FeatureReferenceExpression", false);
    get FeatureReferenceExpression(): Concept {
        this.ensureWiredUp();
        return this._FeatureReferenceExpression;
    }

    public readonly _IndexExpression = new Concept(this._language, "IndexExpression", "kerml-IndexExpression", "kerml-IndexExpression", false);
    get IndexExpression(): Concept {
        this.ensureWiredUp();
        return this._IndexExpression;
    }

    public readonly _MetadataAccessExpression = new Concept(this._language, "MetadataAccessExpression", "kerml-MetadataAccessExpression", "kerml-MetadataAccessExpression", false);
    get MetadataAccessExpression(): Concept {
        this.ensureWiredUp();
        return this._MetadataAccessExpression;
    }

    public readonly _MetadataFeature = new Concept(this._language, "MetadataFeature", "kerml-MetadataFeature", "kerml-MetadataFeature", false);
    get MetadataFeature(): Concept {
        this.ensureWiredUp();
        return this._MetadataFeature;
    }

    public readonly _Metaclass = new Concept(this._language, "Metaclass", "kerml-Metaclass", "kerml-Metaclass", false);
    get Metaclass(): Concept {
        this.ensureWiredUp();
        return this._Metaclass;
    }

    public readonly _Structure = new Concept(this._language, "Structure", "kerml-Structure", "kerml-Structure", false);
    get Structure(): Concept {
        this.ensureWiredUp();
        return this._Structure;
    }

    public readonly _ConstructorExpression = new Concept(this._language, "ConstructorExpression", "kerml-ConstructorExpression", "kerml-ConstructorExpression", false);
    get ConstructorExpression(): Concept {
        this.ensureWiredUp();
        return this._ConstructorExpression;
    }

    public readonly _LiteralRational = new Concept(this._language, "LiteralRational", "kerml-LiteralRational", "kerml-LiteralRational", false);
    get LiteralRational(): Concept {
        this.ensureWiredUp();
        return this._LiteralRational;
    }

    public readonly _FeatureChainExpression = new Concept(this._language, "FeatureChainExpression", "kerml-FeatureChainExpression", "kerml-FeatureChainExpression", false);
    get FeatureChainExpression(): Concept {
        this.ensureWiredUp();
        return this._FeatureChainExpression;
    }

    public readonly _PayloadFeature = new Concept(this._language, "PayloadFeature", "kerml-PayloadFeature", "kerml-PayloadFeature", false);
    get PayloadFeature(): Concept {
        this.ensureWiredUp();
        return this._PayloadFeature;
    }

    public readonly _Interaction = new Concept(this._language, "Interaction", "kerml-Interaction", "kerml-Interaction", false);
    get Interaction(): Concept {
        this.ensureWiredUp();
        return this._Interaction;
    }

    public readonly _FlowEnd = new Concept(this._language, "FlowEnd", "kerml-FlowEnd", "kerml-FlowEnd", false);
    get FlowEnd(): Concept {
        this.ensureWiredUp();
        return this._FlowEnd;
    }

    public readonly _SuccessionFlow = new Concept(this._language, "SuccessionFlow", "kerml-SuccessionFlow", "kerml-SuccessionFlow", false);
    get SuccessionFlow(): Concept {
        this.ensureWiredUp();
        return this._SuccessionFlow;
    }

    public readonly _Flow = new Concept(this._language, "Flow", "kerml-Flow", "kerml-Flow", false);
    get Flow(): Concept {
        this.ensureWiredUp();
        return this._Flow;
    }

    public readonly _AssociationStructure = new Concept(this._language, "AssociationStructure", "kerml-AssociationStructure", "kerml-AssociationStructure", false);
    get AssociationStructure(): Concept {
        this.ensureWiredUp();
        return this._AssociationStructure;
    }

    public readonly _DataType = new Concept(this._language, "DataType", "kerml-DataType", "kerml-DataType", false);
    get DataType(): Concept {
        this.ensureWiredUp();
        return this._DataType;
    }

    private _wiredUp: boolean = false;
    private ensureWiredUp() {
        if (this._wiredUp) {
            return;
        }
        this._language.havingEntities(this._TextualRepresentation, this._AnnotatingElement, this._Element, this._OwningMembership, this._Membership, this._Relationship, this._Namespace, this._Import, this._VisibilityKind, this._Documentation, this._Comment, this._Annotation, this._MembershipImport, this._NamespaceImport, this._Dependency, this._CrossSubsetting, this._Subsetting, this._Specialization, this._Type, this._FeatureMembership, this._Feature, this._Redefinition, this._FeatureTyping, this._TypeFeaturing, this._FeatureInverting, this._FeatureChaining, this._ReferenceSubsetting, this._FeatureDirectionKind, this._Conjugation, this._Multiplicity, this._Intersecting, this._Unioning, this._Disjoining, this._Differencing, this._EndFeatureMembership, this._Classifier, this._Subclassification, this._Succession, this._Connector, this._Association, this._BindingConnector, this._MultiplicityRange, this._Expression, this._Step, this._Behavior, this._Class, this._Function, this._Invariant, this._BooleanExpression, this._Predicate, this._ReturnParameterMembership, this._ParameterMembership, this._ResultExpressionMembership, this._FeatureValue, this._LibraryPackage, this._Package, this._ElementFilterMembership, this._NullExpression, this._LiteralInfinity, this._LiteralExpression, this._LiteralInteger, this._LiteralString, this._LiteralBoolean, this._SelectExpression, this._OperatorExpression, this._InvocationExpression, this._InstantiationExpression, this._CollectExpression, this._FeatureReferenceExpression, this._IndexExpression, this._MetadataAccessExpression, this._MetadataFeature, this._Metaclass, this._Structure, this._ConstructorExpression, this._LiteralRational, this._FeatureChainExpression, this._PayloadFeature, this._Interaction, this._FlowEnd, this._SuccessionFlow, this._Flow, this._AssociationStructure, this._DataType);
        this._TextualRepresentation.extends = this._AnnotatingElement;
        this._AnnotatingElement.extends = this._Element;
        this._OwningMembership.extends = this._Membership;
        this._Membership.extends = this._Relationship;
        this._Relationship.extends = this._Element;
        this._Namespace.extends = this._Element;
        this._Import.extends = this._Relationship;
        this._VisibilityKind.havingLiterals(this._VisibilityKind_private, this._VisibilityKind_protected, this._VisibilityKind_public);
        this._Documentation.extends = this._Comment;
        this._Comment.extends = this._AnnotatingElement;
        this._Annotation.extends = this._Relationship;
        this._MembershipImport.extends = this._Import;
        this._NamespaceImport.extends = this._Import;
        this._Dependency.extends = this._Relationship;
        this._CrossSubsetting.extends = this._Subsetting;
        this._Subsetting.extends = this._Specialization;
        this._Specialization.extends = this._Relationship;
        this._Type.extends = this._Namespace;
        this._FeatureMembership.extends = this._OwningMembership;
        this._Feature.extends = this._Type;
        this._Redefinition.extends = this._Subsetting;
        this._FeatureTyping.extends = this._Specialization;
        this._TypeFeaturing.extends = this._Relationship;
        this._FeatureInverting.extends = this._Relationship;
        this._FeatureChaining.extends = this._Relationship;
        this._ReferenceSubsetting.extends = this._Subsetting;
        this._FeatureDirectionKind.havingLiterals(this._FeatureDirectionKind_in, this._FeatureDirectionKind_inout, this._FeatureDirectionKind_out);
        this._Conjugation.extends = this._Relationship;
        this._Multiplicity.extends = this._Feature;
        this._Intersecting.extends = this._Relationship;
        this._Unioning.extends = this._Relationship;
        this._Disjoining.extends = this._Relationship;
        this._Differencing.extends = this._Relationship;
        this._EndFeatureMembership.extends = this._FeatureMembership;
        this._Classifier.extends = this._Type;
        this._Subclassification.extends = this._Specialization;
        this._Succession.extends = this._Connector;
        this._Connector.extends = this._Feature;
        this._Association.extends = this._Classifier;
        this._BindingConnector.extends = this._Connector;
        this._MultiplicityRange.extends = this._Multiplicity;
        this._Expression.extends = this._Step;
        this._Step.extends = this._Feature;
        this._Behavior.extends = this._Class;
        this._Class.extends = this._Classifier;
        this._Function.extends = this._Behavior;
        this._Invariant.extends = this._BooleanExpression;
        this._BooleanExpression.extends = this._Expression;
        this._Predicate.extends = this._Function;
        this._ReturnParameterMembership.extends = this._ParameterMembership;
        this._ParameterMembership.extends = this._FeatureMembership;
        this._ResultExpressionMembership.extends = this._FeatureMembership;
        this._FeatureValue.extends = this._OwningMembership;
        this._LibraryPackage.extends = this._Package;
        this._Package.extends = this._Namespace;
        this._ElementFilterMembership.extends = this._OwningMembership;
        this._NullExpression.extends = this._Expression;
        this._LiteralInfinity.extends = this._LiteralExpression;
        this._LiteralExpression.extends = this._Expression;
        this._LiteralInteger.extends = this._LiteralExpression;
        this._LiteralString.extends = this._LiteralExpression;
        this._LiteralBoolean.extends = this._LiteralExpression;
        this._SelectExpression.extends = this._OperatorExpression;
        this._OperatorExpression.extends = this._InvocationExpression;
        this._InvocationExpression.extends = this._InstantiationExpression;
        this._InstantiationExpression.extends = this._Expression;
        this._CollectExpression.extends = this._OperatorExpression;
        this._FeatureReferenceExpression.extends = this._Expression;
        this._IndexExpression.extends = this._OperatorExpression;
        this._MetadataAccessExpression.extends = this._Expression;
        this._MetadataFeature.extends = this._Feature;
        this._Metaclass.extends = this._Structure;
        this._Structure.extends = this._Class;
        this._ConstructorExpression.extends = this._InstantiationExpression;
        this._LiteralRational.extends = this._LiteralExpression;
        this._FeatureChainExpression.extends = this._OperatorExpression;
        this._PayloadFeature.extends = this._Feature;
        this._Interaction.extends = this._Association;
        this._FlowEnd.extends = this._Feature;
        this._SuccessionFlow.extends = this._Flow;
        this._Flow.extends = this._Connector;
        this._AssociationStructure.extends = this._Association;
        this._DataType.extends = this._Classifier;
        this._wiredUp = true;
    }

    factory(receiveDelta?: DeltaReceiver): NodeBaseFactory {
        return (classifier: Classifier, id: LionWebId) => {
            switch (classifier.key) {
                case this._TextualRepresentation.key: return TextualRepresentation.create(id, receiveDelta);
                case this._AnnotatingElement.key: return AnnotatingElement.create(id, receiveDelta);
                case this._OwningMembership.key: return OwningMembership.create(id, receiveDelta);
                case this._Membership.key: return Membership.create(id, receiveDelta);
                case this._Namespace.key: return Namespace.create(id, receiveDelta);
                case this._Documentation.key: return Documentation.create(id, receiveDelta);
                case this._Comment.key: return Comment.create(id, receiveDelta);
                case this._Annotation.key: return Annotation.create(id, receiveDelta);
                case this._MembershipImport.key: return MembershipImport.create(id, receiveDelta);
                case this._NamespaceImport.key: return NamespaceImport.create(id, receiveDelta);
                case this._Dependency.key: return Dependency.create(id, receiveDelta);
                case this._CrossSubsetting.key: return CrossSubsetting.create(id, receiveDelta);
                case this._Subsetting.key: return Subsetting.create(id, receiveDelta);
                case this._Specialization.key: return Specialization.create(id, receiveDelta);
                case this._Type.key: return Type.create(id, receiveDelta);
                case this._FeatureMembership.key: return FeatureMembership.create(id, receiveDelta);
                case this._Feature.key: return Feature.create(id, receiveDelta);
                case this._Redefinition.key: return Redefinition.create(id, receiveDelta);
                case this._FeatureTyping.key: return FeatureTyping.create(id, receiveDelta);
                case this._TypeFeaturing.key: return TypeFeaturing.create(id, receiveDelta);
                case this._FeatureInverting.key: return FeatureInverting.create(id, receiveDelta);
                case this._FeatureChaining.key: return FeatureChaining.create(id, receiveDelta);
                case this._ReferenceSubsetting.key: return ReferenceSubsetting.create(id, receiveDelta);
                case this._Conjugation.key: return Conjugation.create(id, receiveDelta);
                case this._Multiplicity.key: return Multiplicity.create(id, receiveDelta);
                case this._Intersecting.key: return Intersecting.create(id, receiveDelta);
                case this._Unioning.key: return Unioning.create(id, receiveDelta);
                case this._Disjoining.key: return Disjoining.create(id, receiveDelta);
                case this._Differencing.key: return Differencing.create(id, receiveDelta);
                case this._EndFeatureMembership.key: return EndFeatureMembership.create(id, receiveDelta);
                case this._Classifier.key: return Classifier.create(id, receiveDelta);
                case this._Subclassification.key: return Subclassification.create(id, receiveDelta);
                case this._Succession.key: return Succession.create(id, receiveDelta);
                case this._Connector.key: return Connector.create(id, receiveDelta);
                case this._Association.key: return Association.create(id, receiveDelta);
                case this._BindingConnector.key: return BindingConnector.create(id, receiveDelta);
                case this._MultiplicityRange.key: return MultiplicityRange.create(id, receiveDelta);
                case this._Expression.key: return Expression.create(id, receiveDelta);
                case this._Step.key: return Step.create(id, receiveDelta);
                case this._Behavior.key: return Behavior.create(id, receiveDelta);
                case this._Class.key: return Class.create(id, receiveDelta);
                case this._Function.key: return Function.create(id, receiveDelta);
                case this._Invariant.key: return Invariant.create(id, receiveDelta);
                case this._BooleanExpression.key: return BooleanExpression.create(id, receiveDelta);
                case this._Predicate.key: return Predicate.create(id, receiveDelta);
                case this._ReturnParameterMembership.key: return ReturnParameterMembership.create(id, receiveDelta);
                case this._ParameterMembership.key: return ParameterMembership.create(id, receiveDelta);
                case this._ResultExpressionMembership.key: return ResultExpressionMembership.create(id, receiveDelta);
                case this._FeatureValue.key: return FeatureValue.create(id, receiveDelta);
                case this._LibraryPackage.key: return LibraryPackage.create(id, receiveDelta);
                case this._Package.key: return Package.create(id, receiveDelta);
                case this._ElementFilterMembership.key: return ElementFilterMembership.create(id, receiveDelta);
                case this._NullExpression.key: return NullExpression.create(id, receiveDelta);
                case this._LiteralInfinity.key: return LiteralInfinity.create(id, receiveDelta);
                case this._LiteralExpression.key: return LiteralExpression.create(id, receiveDelta);
                case this._LiteralInteger.key: return LiteralInteger.create(id, receiveDelta);
                case this._LiteralString.key: return LiteralString.create(id, receiveDelta);
                case this._LiteralBoolean.key: return LiteralBoolean.create(id, receiveDelta);
                case this._SelectExpression.key: return SelectExpression.create(id, receiveDelta);
                case this._OperatorExpression.key: return OperatorExpression.create(id, receiveDelta);
                case this._InvocationExpression.key: return InvocationExpression.create(id, receiveDelta);
                case this._CollectExpression.key: return CollectExpression.create(id, receiveDelta);
                case this._FeatureReferenceExpression.key: return FeatureReferenceExpression.create(id, receiveDelta);
                case this._IndexExpression.key: return IndexExpression.create(id, receiveDelta);
                case this._MetadataAccessExpression.key: return MetadataAccessExpression.create(id, receiveDelta);
                case this._MetadataFeature.key: return MetadataFeature.create(id, receiveDelta);
                case this._Metaclass.key: return Metaclass.create(id, receiveDelta);
                case this._Structure.key: return Structure.create(id, receiveDelta);
                case this._ConstructorExpression.key: return ConstructorExpression.create(id, receiveDelta);
                case this._LiteralRational.key: return LiteralRational.create(id, receiveDelta);
                case this._FeatureChainExpression.key: return FeatureChainExpression.create(id, receiveDelta);
                case this._PayloadFeature.key: return PayloadFeature.create(id, receiveDelta);
                case this._Interaction.key: return Interaction.create(id, receiveDelta);
                case this._FlowEnd.key: return FlowEnd.create(id, receiveDelta);
                case this._SuccessionFlow.key: return SuccessionFlow.create(id, receiveDelta);
                case this._Flow.key: return Flow.create(id, receiveDelta);
                case this._AssociationStructure.key: return AssociationStructure.create(id, receiveDelta);
                case this._DataType.key: return DataType.create(id, receiveDelta);
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
            case this._VisibilityKind.key: return enumerationLiteral.key as EnumType;
            case this._FeatureDirectionKind.key: return enumerationLiteral.key as EnumType;
            default: {
                const {language} = enumeration;
                throw new Error(`enumeration with key ${enumeration.key} is not known in language ${language.name} (key=${language.key}, version=${language.version})`);
            }
        }
    }

    public static readonly INSTANCE = new kermlBase();
}


export abstract class Element extends NodeBase {
}

export class AnnotatingElement extends Element {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): AnnotatingElement {
        return new AnnotatingElement(kermlBase.INSTANCE.AnnotatingElement, id, receiveDelta, parentInfo);
    }
}

export class TextualRepresentation extends AnnotatingElement {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): TextualRepresentation {
        return new TextualRepresentation(kermlBase.INSTANCE.TextualRepresentation, id, receiveDelta, parentInfo);
    }
}

export abstract class Relationship extends Element {
}

export class Membership extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Membership {
        return new Membership(kermlBase.INSTANCE.Membership, id, receiveDelta, parentInfo);
    }
}

export class OwningMembership extends Membership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): OwningMembership {
        return new OwningMembership(kermlBase.INSTANCE.OwningMembership, id, receiveDelta, parentInfo);
    }
}

export class Namespace extends Element {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Namespace {
        return new Namespace(kermlBase.INSTANCE.Namespace, id, receiveDelta, parentInfo);
    }
}

export abstract class Import extends Relationship {
}

export enum VisibilityKind {
    private = "kerml-VisibilityKind-private",
    protected = "kerml-VisibilityKind-protected",
    public = "kerml-VisibilityKind-public"
}

export class Comment extends AnnotatingElement {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Comment {
        return new Comment(kermlBase.INSTANCE.Comment, id, receiveDelta, parentInfo);
    }
}

export class Documentation extends Comment {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Documentation {
        return new Documentation(kermlBase.INSTANCE.Documentation, id, receiveDelta, parentInfo);
    }
}

export class Annotation extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Annotation {
        return new Annotation(kermlBase.INSTANCE.Annotation, id, receiveDelta, parentInfo);
    }
}

export class MembershipImport extends Import {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): MembershipImport {
        return new MembershipImport(kermlBase.INSTANCE.MembershipImport, id, receiveDelta, parentInfo);
    }
}

export class NamespaceImport extends Import {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): NamespaceImport {
        return new NamespaceImport(kermlBase.INSTANCE.NamespaceImport, id, receiveDelta, parentInfo);
    }
}

export class Dependency extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Dependency {
        return new Dependency(kermlBase.INSTANCE.Dependency, id, receiveDelta, parentInfo);
    }
}

export class Specialization extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Specialization {
        return new Specialization(kermlBase.INSTANCE.Specialization, id, receiveDelta, parentInfo);
    }
}

export class Subsetting extends Specialization {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Subsetting {
        return new Subsetting(kermlBase.INSTANCE.Subsetting, id, receiveDelta, parentInfo);
    }
}

export class CrossSubsetting extends Subsetting {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): CrossSubsetting {
        return new CrossSubsetting(kermlBase.INSTANCE.CrossSubsetting, id, receiveDelta, parentInfo);
    }
}

export class Type extends Namespace {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Type {
        return new Type(kermlBase.INSTANCE.Type, id, receiveDelta, parentInfo);
    }
}

export class FeatureMembership extends OwningMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureMembership {
        return new FeatureMembership(kermlBase.INSTANCE.FeatureMembership, id, receiveDelta, parentInfo);
    }
}

export class Feature extends Type {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Feature {
        return new Feature(kermlBase.INSTANCE.Feature, id, receiveDelta, parentInfo);
    }
}

export class Redefinition extends Subsetting {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Redefinition {
        return new Redefinition(kermlBase.INSTANCE.Redefinition, id, receiveDelta, parentInfo);
    }
}

export class FeatureTyping extends Specialization {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureTyping {
        return new FeatureTyping(kermlBase.INSTANCE.FeatureTyping, id, receiveDelta, parentInfo);
    }
}

export class TypeFeaturing extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): TypeFeaturing {
        return new TypeFeaturing(kermlBase.INSTANCE.TypeFeaturing, id, receiveDelta, parentInfo);
    }
}

export class FeatureInverting extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureInverting {
        return new FeatureInverting(kermlBase.INSTANCE.FeatureInverting, id, receiveDelta, parentInfo);
    }
}

export class FeatureChaining extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureChaining {
        return new FeatureChaining(kermlBase.INSTANCE.FeatureChaining, id, receiveDelta, parentInfo);
    }
}

export class ReferenceSubsetting extends Subsetting {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ReferenceSubsetting {
        return new ReferenceSubsetting(kermlBase.INSTANCE.ReferenceSubsetting, id, receiveDelta, parentInfo);
    }
}

export enum FeatureDirectionKind {
    in = "kerml-FeatureDirectionKind-in",
    inout = "kerml-FeatureDirectionKind-inout",
    out = "kerml-FeatureDirectionKind-out"
}

export class Conjugation extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Conjugation {
        return new Conjugation(kermlBase.INSTANCE.Conjugation, id, receiveDelta, parentInfo);
    }
}

export class Multiplicity extends Feature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Multiplicity {
        return new Multiplicity(kermlBase.INSTANCE.Multiplicity, id, receiveDelta, parentInfo);
    }
}

export class Intersecting extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Intersecting {
        return new Intersecting(kermlBase.INSTANCE.Intersecting, id, receiveDelta, parentInfo);
    }
}

export class Unioning extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Unioning {
        return new Unioning(kermlBase.INSTANCE.Unioning, id, receiveDelta, parentInfo);
    }
}

export class Disjoining extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Disjoining {
        return new Disjoining(kermlBase.INSTANCE.Disjoining, id, receiveDelta, parentInfo);
    }
}

export class Differencing extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Differencing {
        return new Differencing(kermlBase.INSTANCE.Differencing, id, receiveDelta, parentInfo);
    }
}

export class EndFeatureMembership extends FeatureMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EndFeatureMembership {
        return new EndFeatureMembership(kermlBase.INSTANCE.EndFeatureMembership, id, receiveDelta, parentInfo);
    }
}

export class Classifier extends Type {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Classifier {
        return new Classifier(kermlBase.INSTANCE.Classifier, id, receiveDelta, parentInfo);
    }
}

export class Subclassification extends Specialization {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Subclassification {
        return new Subclassification(kermlBase.INSTANCE.Subclassification, id, receiveDelta, parentInfo);
    }
}

export class Connector extends Feature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Connector {
        return new Connector(kermlBase.INSTANCE.Connector, id, receiveDelta, parentInfo);
    }
}

export class Succession extends Connector {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Succession {
        return new Succession(kermlBase.INSTANCE.Succession, id, receiveDelta, parentInfo);
    }
}

export class Association extends Classifier {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Association {
        return new Association(kermlBase.INSTANCE.Association, id, receiveDelta, parentInfo);
    }
}

export class BindingConnector extends Connector {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): BindingConnector {
        return new BindingConnector(kermlBase.INSTANCE.BindingConnector, id, receiveDelta, parentInfo);
    }
}

export class MultiplicityRange extends Multiplicity {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): MultiplicityRange {
        return new MultiplicityRange(kermlBase.INSTANCE.MultiplicityRange, id, receiveDelta, parentInfo);
    }
}

export class Step extends Feature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Step {
        return new Step(kermlBase.INSTANCE.Step, id, receiveDelta, parentInfo);
    }
}

export class Expression extends Step {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Expression {
        return new Expression(kermlBase.INSTANCE.Expression, id, receiveDelta, parentInfo);
    }
}

export class Class extends Classifier {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Class {
        return new Class(kermlBase.INSTANCE.Class, id, receiveDelta, parentInfo);
    }
}

export class Behavior extends Class {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Behavior {
        return new Behavior(kermlBase.INSTANCE.Behavior, id, receiveDelta, parentInfo);
    }
}

export class Function extends Behavior {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Function {
        return new Function(kermlBase.INSTANCE.Function, id, receiveDelta, parentInfo);
    }
}

export class BooleanExpression extends Expression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): BooleanExpression {
        return new BooleanExpression(kermlBase.INSTANCE.BooleanExpression, id, receiveDelta, parentInfo);
    }
}

export class Invariant extends BooleanExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Invariant {
        return new Invariant(kermlBase.INSTANCE.Invariant, id, receiveDelta, parentInfo);
    }
}

export class Predicate extends Function {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Predicate {
        return new Predicate(kermlBase.INSTANCE.Predicate, id, receiveDelta, parentInfo);
    }
}

export class ParameterMembership extends FeatureMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ParameterMembership {
        return new ParameterMembership(kermlBase.INSTANCE.ParameterMembership, id, receiveDelta, parentInfo);
    }
}

export class ReturnParameterMembership extends ParameterMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ReturnParameterMembership {
        return new ReturnParameterMembership(kermlBase.INSTANCE.ReturnParameterMembership, id, receiveDelta, parentInfo);
    }
}

export class ResultExpressionMembership extends FeatureMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ResultExpressionMembership {
        return new ResultExpressionMembership(kermlBase.INSTANCE.ResultExpressionMembership, id, receiveDelta, parentInfo);
    }
}

export class FeatureValue extends OwningMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureValue {
        return new FeatureValue(kermlBase.INSTANCE.FeatureValue, id, receiveDelta, parentInfo);
    }
}

export class Package extends Namespace {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Package {
        return new Package(kermlBase.INSTANCE.Package, id, receiveDelta, parentInfo);
    }
}

export class LibraryPackage extends Package {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): LibraryPackage {
        return new LibraryPackage(kermlBase.INSTANCE.LibraryPackage, id, receiveDelta, parentInfo);
    }
}

export class ElementFilterMembership extends OwningMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ElementFilterMembership {
        return new ElementFilterMembership(kermlBase.INSTANCE.ElementFilterMembership, id, receiveDelta, parentInfo);
    }
}

export class NullExpression extends Expression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): NullExpression {
        return new NullExpression(kermlBase.INSTANCE.NullExpression, id, receiveDelta, parentInfo);
    }
}

export class LiteralExpression extends Expression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): LiteralExpression {
        return new LiteralExpression(kermlBase.INSTANCE.LiteralExpression, id, receiveDelta, parentInfo);
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
}

export class LiteralString extends LiteralExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): LiteralString {
        return new LiteralString(kermlBase.INSTANCE.LiteralString, id, receiveDelta, parentInfo);
    }
}

export class LiteralBoolean extends LiteralExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): LiteralBoolean {
        return new LiteralBoolean(kermlBase.INSTANCE.LiteralBoolean, id, receiveDelta, parentInfo);
    }
}

export abstract class InstantiationExpression extends Expression {
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
}

export class SelectExpression extends OperatorExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): SelectExpression {
        return new SelectExpression(kermlBase.INSTANCE.SelectExpression, id, receiveDelta, parentInfo);
    }
}

export class CollectExpression extends OperatorExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): CollectExpression {
        return new CollectExpression(kermlBase.INSTANCE.CollectExpression, id, receiveDelta, parentInfo);
    }
}

export class FeatureReferenceExpression extends Expression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureReferenceExpression {
        return new FeatureReferenceExpression(kermlBase.INSTANCE.FeatureReferenceExpression, id, receiveDelta, parentInfo);
    }
}

export class IndexExpression extends OperatorExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): IndexExpression {
        return new IndexExpression(kermlBase.INSTANCE.IndexExpression, id, receiveDelta, parentInfo);
    }
}

export class MetadataAccessExpression extends Expression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): MetadataAccessExpression {
        return new MetadataAccessExpression(kermlBase.INSTANCE.MetadataAccessExpression, id, receiveDelta, parentInfo);
    }
}

export class MetadataFeature extends Feature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): MetadataFeature {
        return new MetadataFeature(kermlBase.INSTANCE.MetadataFeature, id, receiveDelta, parentInfo);
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

export class ConstructorExpression extends InstantiationExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ConstructorExpression {
        return new ConstructorExpression(kermlBase.INSTANCE.ConstructorExpression, id, receiveDelta, parentInfo);
    }
}

export class LiteralRational extends LiteralExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): LiteralRational {
        return new LiteralRational(kermlBase.INSTANCE.LiteralRational, id, receiveDelta, parentInfo);
    }
}

export class FeatureChainExpression extends OperatorExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureChainExpression {
        return new FeatureChainExpression(kermlBase.INSTANCE.FeatureChainExpression, id, receiveDelta, parentInfo);
    }
}

export class PayloadFeature extends Feature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): PayloadFeature {
        return new PayloadFeature(kermlBase.INSTANCE.PayloadFeature, id, receiveDelta, parentInfo);
    }
}

export class Interaction extends Association {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Interaction {
        return new Interaction(kermlBase.INSTANCE.Interaction, id, receiveDelta, parentInfo);
    }
}

export class FlowEnd extends Feature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FlowEnd {
        return new FlowEnd(kermlBase.INSTANCE.FlowEnd, id, receiveDelta, parentInfo);
    }
}

export class Flow extends Connector {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Flow {
        return new Flow(kermlBase.INSTANCE.Flow, id, receiveDelta, parentInfo);
    }
}

export class SuccessionFlow extends Flow {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): SuccessionFlow {
        return new SuccessionFlow(kermlBase.INSTANCE.SuccessionFlow, id, receiveDelta, parentInfo);
    }
}

export class AssociationStructure extends Association {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): AssociationStructure {
        return new AssociationStructure(kermlBase.INSTANCE.AssociationStructure, id, receiveDelta, parentInfo);
    }
}

export class DataType extends Classifier {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): DataType {
        return new DataType(kermlBase.INSTANCE.DataType, id, receiveDelta, parentInfo);
    }
}

