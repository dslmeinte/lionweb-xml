/*
 * language's metadata:
 *     name:    sysml
 *     version: 1
 *     key:     sysml
 *     id:      sysml
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


export class sysmlBase implements ILanguageBase {

    private readonly _language: Language = new Language("sysml", "1", "sysml", "sysml");
    get language(): Language {
        this.ensureWiredUp();
        return this._language;
    }

    public readonly _AcceptActionUsage = new Concept(this._language, "AcceptActionUsage", "sysml-AcceptActionUsage", "sysml-AcceptActionUsage", false);
    get AcceptActionUsage(): Concept {
        this.ensureWiredUp();
        return this._AcceptActionUsage;
    }

    public readonly _ActionDefinition = new Concept(this._language, "ActionDefinition", "sysml-ActionDefinition", "sysml-ActionDefinition", false);
    get ActionDefinition(): Concept {
        this.ensureWiredUp();
        return this._ActionDefinition;
    }

    public readonly _ActionUsage = new Concept(this._language, "ActionUsage", "sysml-ActionUsage", "sysml-ActionUsage", false);
    get ActionUsage(): Concept {
        this.ensureWiredUp();
        return this._ActionUsage;
    }

    public readonly _ActorMembership = new Concept(this._language, "ActorMembership", "sysml-ActorMembership", "sysml-ActorMembership", false);
    get ActorMembership(): Concept {
        this.ensureWiredUp();
        return this._ActorMembership;
    }

    public readonly _AllocationDefinition = new Concept(this._language, "AllocationDefinition", "sysml-AllocationDefinition", "sysml-AllocationDefinition", false);
    get AllocationDefinition(): Concept {
        this.ensureWiredUp();
        return this._AllocationDefinition;
    }

    public readonly _AllocationUsage = new Concept(this._language, "AllocationUsage", "sysml-AllocationUsage", "sysml-AllocationUsage", false);
    get AllocationUsage(): Concept {
        this.ensureWiredUp();
        return this._AllocationUsage;
    }

    public readonly _AnalysisCaseDefinition = new Concept(this._language, "AnalysisCaseDefinition", "sysml-AnalysisCaseDefinition", "sysml-AnalysisCaseDefinition", false);
    get AnalysisCaseDefinition(): Concept {
        this.ensureWiredUp();
        return this._AnalysisCaseDefinition;
    }

    public readonly _AnalysisCaseUsage = new Concept(this._language, "AnalysisCaseUsage", "sysml-AnalysisCaseUsage", "sysml-AnalysisCaseUsage", false);
    get AnalysisCaseUsage(): Concept {
        this.ensureWiredUp();
        return this._AnalysisCaseUsage;
    }

    public readonly _AnnotatingElement = new Concept(this._language, "AnnotatingElement", "sysml-AnnotatingElement", "sysml-AnnotatingElement", false);
    get AnnotatingElement(): Concept {
        this.ensureWiredUp();
        return this._AnnotatingElement;
    }

    public readonly _Annotation = new Concept(this._language, "Annotation", "sysml-Annotation", "sysml-Annotation", false);
    get Annotation(): Concept {
        this.ensureWiredUp();
        return this._Annotation;
    }

    public readonly _AssertConstraintUsage = new Concept(this._language, "AssertConstraintUsage", "sysml-AssertConstraintUsage", "sysml-AssertConstraintUsage", false);
    get AssertConstraintUsage(): Concept {
        this.ensureWiredUp();
        return this._AssertConstraintUsage;
    }

    public readonly _AssignmentActionUsage = new Concept(this._language, "AssignmentActionUsage", "sysml-AssignmentActionUsage", "sysml-AssignmentActionUsage", false);
    get AssignmentActionUsage(): Concept {
        this.ensureWiredUp();
        return this._AssignmentActionUsage;
    }

    public readonly _Association = new Concept(this._language, "Association", "sysml-Association", "sysml-Association", false);
    get Association(): Concept {
        this.ensureWiredUp();
        return this._Association;
    }

    public readonly _AssociationStructure = new Concept(this._language, "AssociationStructure", "sysml-AssociationStructure", "sysml-AssociationStructure", false);
    get AssociationStructure(): Concept {
        this.ensureWiredUp();
        return this._AssociationStructure;
    }

    public readonly _AttributeDefinition = new Concept(this._language, "AttributeDefinition", "sysml-AttributeDefinition", "sysml-AttributeDefinition", false);
    get AttributeDefinition(): Concept {
        this.ensureWiredUp();
        return this._AttributeDefinition;
    }

    public readonly _AttributeUsage = new Concept(this._language, "AttributeUsage", "sysml-AttributeUsage", "sysml-AttributeUsage", false);
    get AttributeUsage(): Concept {
        this.ensureWiredUp();
        return this._AttributeUsage;
    }

    public readonly _Behavior = new Concept(this._language, "Behavior", "sysml-Behavior", "sysml-Behavior", false);
    get Behavior(): Concept {
        this.ensureWiredUp();
        return this._Behavior;
    }

    public readonly _BindingConnector = new Concept(this._language, "BindingConnector", "sysml-BindingConnector", "sysml-BindingConnector", false);
    get BindingConnector(): Concept {
        this.ensureWiredUp();
        return this._BindingConnector;
    }

    public readonly _BindingConnectorAsUsage = new Concept(this._language, "BindingConnectorAsUsage", "sysml-BindingConnectorAsUsage", "sysml-BindingConnectorAsUsage", false);
    get BindingConnectorAsUsage(): Concept {
        this.ensureWiredUp();
        return this._BindingConnectorAsUsage;
    }

    public readonly _BooleanExpression = new Concept(this._language, "BooleanExpression", "sysml-BooleanExpression", "sysml-BooleanExpression", false);
    get BooleanExpression(): Concept {
        this.ensureWiredUp();
        return this._BooleanExpression;
    }

    public readonly _CalculationDefinition = new Concept(this._language, "CalculationDefinition", "sysml-CalculationDefinition", "sysml-CalculationDefinition", false);
    get CalculationDefinition(): Concept {
        this.ensureWiredUp();
        return this._CalculationDefinition;
    }

    public readonly _CalculationUsage = new Concept(this._language, "CalculationUsage", "sysml-CalculationUsage", "sysml-CalculationUsage", false);
    get CalculationUsage(): Concept {
        this.ensureWiredUp();
        return this._CalculationUsage;
    }

    public readonly _CaseDefinition = new Concept(this._language, "CaseDefinition", "sysml-CaseDefinition", "sysml-CaseDefinition", false);
    get CaseDefinition(): Concept {
        this.ensureWiredUp();
        return this._CaseDefinition;
    }

    public readonly _CaseUsage = new Concept(this._language, "CaseUsage", "sysml-CaseUsage", "sysml-CaseUsage", false);
    get CaseUsage(): Concept {
        this.ensureWiredUp();
        return this._CaseUsage;
    }

    public readonly _Class = new Concept(this._language, "Class", "sysml-Class", "sysml-Class", false);
    get Class(): Concept {
        this.ensureWiredUp();
        return this._Class;
    }

    public readonly _Classifier = new Concept(this._language, "Classifier", "sysml-Classifier", "sysml-Classifier", false);
    get Classifier(): Concept {
        this.ensureWiredUp();
        return this._Classifier;
    }

    public readonly _CollectExpression = new Concept(this._language, "CollectExpression", "sysml-CollectExpression", "sysml-CollectExpression", false);
    get CollectExpression(): Concept {
        this.ensureWiredUp();
        return this._CollectExpression;
    }

    public readonly _Comment = new Concept(this._language, "Comment", "sysml-Comment", "sysml-Comment", false);
    get Comment(): Concept {
        this.ensureWiredUp();
        return this._Comment;
    }

    public readonly _ConcernDefinition = new Concept(this._language, "ConcernDefinition", "sysml-ConcernDefinition", "sysml-ConcernDefinition", false);
    get ConcernDefinition(): Concept {
        this.ensureWiredUp();
        return this._ConcernDefinition;
    }

    public readonly _ConcernUsage = new Concept(this._language, "ConcernUsage", "sysml-ConcernUsage", "sysml-ConcernUsage", false);
    get ConcernUsage(): Concept {
        this.ensureWiredUp();
        return this._ConcernUsage;
    }

    public readonly _ConjugatedPortDefinition = new Concept(this._language, "ConjugatedPortDefinition", "sysml-ConjugatedPortDefinition", "sysml-ConjugatedPortDefinition", false);
    get ConjugatedPortDefinition(): Concept {
        this.ensureWiredUp();
        return this._ConjugatedPortDefinition;
    }

    public readonly _ConjugatedPortTyping = new Concept(this._language, "ConjugatedPortTyping", "sysml-ConjugatedPortTyping", "sysml-ConjugatedPortTyping", false);
    get ConjugatedPortTyping(): Concept {
        this.ensureWiredUp();
        return this._ConjugatedPortTyping;
    }

    public readonly _Conjugation = new Concept(this._language, "Conjugation", "sysml-Conjugation", "sysml-Conjugation", false);
    get Conjugation(): Concept {
        this.ensureWiredUp();
        return this._Conjugation;
    }

    public readonly _ConnectionDefinition = new Concept(this._language, "ConnectionDefinition", "sysml-ConnectionDefinition", "sysml-ConnectionDefinition", false);
    get ConnectionDefinition(): Concept {
        this.ensureWiredUp();
        return this._ConnectionDefinition;
    }

    public readonly _ConnectionUsage = new Concept(this._language, "ConnectionUsage", "sysml-ConnectionUsage", "sysml-ConnectionUsage", false);
    get ConnectionUsage(): Concept {
        this.ensureWiredUp();
        return this._ConnectionUsage;
    }

    public readonly _Connector = new Concept(this._language, "Connector", "sysml-Connector", "sysml-Connector", false);
    get Connector(): Concept {
        this.ensureWiredUp();
        return this._Connector;
    }

    public readonly _ConnectorAsUsage = new Concept(this._language, "ConnectorAsUsage", "sysml-ConnectorAsUsage", "sysml-ConnectorAsUsage", true);
    get ConnectorAsUsage(): Concept {
        this.ensureWiredUp();
        return this._ConnectorAsUsage;
    }

    public readonly _ConstraintDefinition = new Concept(this._language, "ConstraintDefinition", "sysml-ConstraintDefinition", "sysml-ConstraintDefinition", false);
    get ConstraintDefinition(): Concept {
        this.ensureWiredUp();
        return this._ConstraintDefinition;
    }

    public readonly _ConstraintUsage = new Concept(this._language, "ConstraintUsage", "sysml-ConstraintUsage", "sysml-ConstraintUsage", false);
    get ConstraintUsage(): Concept {
        this.ensureWiredUp();
        return this._ConstraintUsage;
    }

    public readonly _ConstructorExpression = new Concept(this._language, "ConstructorExpression", "sysml-ConstructorExpression", "sysml-ConstructorExpression", false);
    get ConstructorExpression(): Concept {
        this.ensureWiredUp();
        return this._ConstructorExpression;
    }

    public readonly _ControlNode = new Concept(this._language, "ControlNode", "sysml-ControlNode", "sysml-ControlNode", true);
    get ControlNode(): Concept {
        this.ensureWiredUp();
        return this._ControlNode;
    }

    public readonly _CrossSubsetting = new Concept(this._language, "CrossSubsetting", "sysml-CrossSubsetting", "sysml-CrossSubsetting", false);
    get CrossSubsetting(): Concept {
        this.ensureWiredUp();
        return this._CrossSubsetting;
    }

    public readonly _DataType = new Concept(this._language, "DataType", "sysml-DataType", "sysml-DataType", false);
    get DataType(): Concept {
        this.ensureWiredUp();
        return this._DataType;
    }

    public readonly _DecisionNode = new Concept(this._language, "DecisionNode", "sysml-DecisionNode", "sysml-DecisionNode", false);
    get DecisionNode(): Concept {
        this.ensureWiredUp();
        return this._DecisionNode;
    }

    public readonly _Definition = new Concept(this._language, "Definition", "sysml-Definition", "sysml-Definition", false);
    get Definition(): Concept {
        this.ensureWiredUp();
        return this._Definition;
    }

    public readonly _Dependency = new Concept(this._language, "Dependency", "sysml-Dependency", "sysml-Dependency", false);
    get Dependency(): Concept {
        this.ensureWiredUp();
        return this._Dependency;
    }

    public readonly _Differencing = new Concept(this._language, "Differencing", "sysml-Differencing", "sysml-Differencing", false);
    get Differencing(): Concept {
        this.ensureWiredUp();
        return this._Differencing;
    }

    public readonly _Disjoining = new Concept(this._language, "Disjoining", "sysml-Disjoining", "sysml-Disjoining", false);
    get Disjoining(): Concept {
        this.ensureWiredUp();
        return this._Disjoining;
    }

    public readonly _Documentation = new Concept(this._language, "Documentation", "sysml-Documentation", "sysml-Documentation", false);
    get Documentation(): Concept {
        this.ensureWiredUp();
        return this._Documentation;
    }

    public readonly _Element = new Concept(this._language, "Element", "sysml-Element", "sysml-Element", true);
    get Element(): Concept {
        this.ensureWiredUp();
        return this._Element;
    }

    public readonly _ElementFilterMembership = new Concept(this._language, "ElementFilterMembership", "sysml-ElementFilterMembership", "sysml-ElementFilterMembership", false);
    get ElementFilterMembership(): Concept {
        this.ensureWiredUp();
        return this._ElementFilterMembership;
    }

    public readonly _EndFeatureMembership = new Concept(this._language, "EndFeatureMembership", "sysml-EndFeatureMembership", "sysml-EndFeatureMembership", false);
    get EndFeatureMembership(): Concept {
        this.ensureWiredUp();
        return this._EndFeatureMembership;
    }

    public readonly _EnumerationDefinition = new Concept(this._language, "EnumerationDefinition", "sysml-EnumerationDefinition", "sysml-EnumerationDefinition", false);
    get EnumerationDefinition(): Concept {
        this.ensureWiredUp();
        return this._EnumerationDefinition;
    }

    public readonly _EnumerationUsage = new Concept(this._language, "EnumerationUsage", "sysml-EnumerationUsage", "sysml-EnumerationUsage", false);
    get EnumerationUsage(): Concept {
        this.ensureWiredUp();
        return this._EnumerationUsage;
    }

    public readonly _EventOccurrenceUsage = new Concept(this._language, "EventOccurrenceUsage", "sysml-EventOccurrenceUsage", "sysml-EventOccurrenceUsage", false);
    get EventOccurrenceUsage(): Concept {
        this.ensureWiredUp();
        return this._EventOccurrenceUsage;
    }

    public readonly _ExhibitStateUsage = new Concept(this._language, "ExhibitStateUsage", "sysml-ExhibitStateUsage", "sysml-ExhibitStateUsage", false);
    get ExhibitStateUsage(): Concept {
        this.ensureWiredUp();
        return this._ExhibitStateUsage;
    }

    public readonly _Expose = new Concept(this._language, "Expose", "sysml-Expose", "sysml-Expose", true);
    get Expose(): Concept {
        this.ensureWiredUp();
        return this._Expose;
    }

    public readonly _Expression = new Concept(this._language, "Expression", "sysml-Expression", "sysml-Expression", false);
    get Expression(): Concept {
        this.ensureWiredUp();
        return this._Expression;
    }

    public readonly _Feature = new Concept(this._language, "Feature", "sysml-Feature", "sysml-Feature", false);
    get Feature(): Concept {
        this.ensureWiredUp();
        return this._Feature;
    }

    public readonly _FeatureChainExpression = new Concept(this._language, "FeatureChainExpression", "sysml-FeatureChainExpression", "sysml-FeatureChainExpression", false);
    get FeatureChainExpression(): Concept {
        this.ensureWiredUp();
        return this._FeatureChainExpression;
    }

    public readonly _FeatureChaining = new Concept(this._language, "FeatureChaining", "sysml-FeatureChaining", "sysml-FeatureChaining", false);
    get FeatureChaining(): Concept {
        this.ensureWiredUp();
        return this._FeatureChaining;
    }

    public readonly _FeatureDirectionKind = new Enumeration(this._language, "FeatureDirectionKind", "sysml-FeatureDirectionKind", "sysml-FeatureDirectionKind");
    get FeatureDirectionKind(): Enumeration {
        this.ensureWiredUp();
        return this._FeatureDirectionKind;
    }
    private readonly _FeatureDirectionKind_in = new EnumerationLiteral(this._FeatureDirectionKind, "in", "sysml-FeatureDirectionKind-in", "sysml-FeatureDirectionKind-in");
    get FeatureDirectionKind_in(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._FeatureDirectionKind_in;
    }
    private readonly _FeatureDirectionKind_inout = new EnumerationLiteral(this._FeatureDirectionKind, "inout", "sysml-FeatureDirectionKind-inout", "sysml-FeatureDirectionKind-inout");
    get FeatureDirectionKind_inout(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._FeatureDirectionKind_inout;
    }
    private readonly _FeatureDirectionKind_out = new EnumerationLiteral(this._FeatureDirectionKind, "out", "sysml-FeatureDirectionKind-out", "sysml-FeatureDirectionKind-out");
    get FeatureDirectionKind_out(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._FeatureDirectionKind_out;
    }

    public readonly _FeatureInverting = new Concept(this._language, "FeatureInverting", "sysml-FeatureInverting", "sysml-FeatureInverting", false);
    get FeatureInverting(): Concept {
        this.ensureWiredUp();
        return this._FeatureInverting;
    }

    public readonly _FeatureMembership = new Concept(this._language, "FeatureMembership", "sysml-FeatureMembership", "sysml-FeatureMembership", false);
    get FeatureMembership(): Concept {
        this.ensureWiredUp();
        return this._FeatureMembership;
    }

    public readonly _FeatureReferenceExpression = new Concept(this._language, "FeatureReferenceExpression", "sysml-FeatureReferenceExpression", "sysml-FeatureReferenceExpression", false);
    get FeatureReferenceExpression(): Concept {
        this.ensureWiredUp();
        return this._FeatureReferenceExpression;
    }

    public readonly _FeatureTyping = new Concept(this._language, "FeatureTyping", "sysml-FeatureTyping", "sysml-FeatureTyping", false);
    get FeatureTyping(): Concept {
        this.ensureWiredUp();
        return this._FeatureTyping;
    }

    public readonly _FeatureValue = new Concept(this._language, "FeatureValue", "sysml-FeatureValue", "sysml-FeatureValue", false);
    get FeatureValue(): Concept {
        this.ensureWiredUp();
        return this._FeatureValue;
    }

    public readonly _Flow = new Concept(this._language, "Flow", "sysml-Flow", "sysml-Flow", false);
    get Flow(): Concept {
        this.ensureWiredUp();
        return this._Flow;
    }

    public readonly _FlowDefinition = new Concept(this._language, "FlowDefinition", "sysml-FlowDefinition", "sysml-FlowDefinition", false);
    get FlowDefinition(): Concept {
        this.ensureWiredUp();
        return this._FlowDefinition;
    }

    public readonly _FlowEnd = new Concept(this._language, "FlowEnd", "sysml-FlowEnd", "sysml-FlowEnd", false);
    get FlowEnd(): Concept {
        this.ensureWiredUp();
        return this._FlowEnd;
    }

    public readonly _FlowUsage = new Concept(this._language, "FlowUsage", "sysml-FlowUsage", "sysml-FlowUsage", false);
    get FlowUsage(): Concept {
        this.ensureWiredUp();
        return this._FlowUsage;
    }

    public readonly _ForLoopActionUsage = new Concept(this._language, "ForLoopActionUsage", "sysml-ForLoopActionUsage", "sysml-ForLoopActionUsage", false);
    get ForLoopActionUsage(): Concept {
        this.ensureWiredUp();
        return this._ForLoopActionUsage;
    }

    public readonly _ForkNode = new Concept(this._language, "ForkNode", "sysml-ForkNode", "sysml-ForkNode", false);
    get ForkNode(): Concept {
        this.ensureWiredUp();
        return this._ForkNode;
    }

    public readonly _FramedConcernMembership = new Concept(this._language, "FramedConcernMembership", "sysml-FramedConcernMembership", "sysml-FramedConcernMembership", false);
    get FramedConcernMembership(): Concept {
        this.ensureWiredUp();
        return this._FramedConcernMembership;
    }

    public readonly _Function = new Concept(this._language, "Function", "sysml-Function", "sysml-Function", false);
    get Function(): Concept {
        this.ensureWiredUp();
        return this._Function;
    }

    public readonly _IfActionUsage = new Concept(this._language, "IfActionUsage", "sysml-IfActionUsage", "sysml-IfActionUsage", false);
    get IfActionUsage(): Concept {
        this.ensureWiredUp();
        return this._IfActionUsage;
    }

    public readonly _Import = new Concept(this._language, "Import", "sysml-Import", "sysml-Import", true);
    get Import(): Concept {
        this.ensureWiredUp();
        return this._Import;
    }

    public readonly _IncludeUseCaseUsage = new Concept(this._language, "IncludeUseCaseUsage", "sysml-IncludeUseCaseUsage", "sysml-IncludeUseCaseUsage", false);
    get IncludeUseCaseUsage(): Concept {
        this.ensureWiredUp();
        return this._IncludeUseCaseUsage;
    }

    public readonly _IndexExpression = new Concept(this._language, "IndexExpression", "sysml-IndexExpression", "sysml-IndexExpression", false);
    get IndexExpression(): Concept {
        this.ensureWiredUp();
        return this._IndexExpression;
    }

    public readonly _InstantiationExpression = new Concept(this._language, "InstantiationExpression", "sysml-InstantiationExpression", "sysml-InstantiationExpression", true);
    get InstantiationExpression(): Concept {
        this.ensureWiredUp();
        return this._InstantiationExpression;
    }

    public readonly _Interaction = new Concept(this._language, "Interaction", "sysml-Interaction", "sysml-Interaction", false);
    get Interaction(): Concept {
        this.ensureWiredUp();
        return this._Interaction;
    }

    public readonly _InterfaceDefinition = new Concept(this._language, "InterfaceDefinition", "sysml-InterfaceDefinition", "sysml-InterfaceDefinition", false);
    get InterfaceDefinition(): Concept {
        this.ensureWiredUp();
        return this._InterfaceDefinition;
    }

    public readonly _InterfaceUsage = new Concept(this._language, "InterfaceUsage", "sysml-InterfaceUsage", "sysml-InterfaceUsage", false);
    get InterfaceUsage(): Concept {
        this.ensureWiredUp();
        return this._InterfaceUsage;
    }

    public readonly _Intersecting = new Concept(this._language, "Intersecting", "sysml-Intersecting", "sysml-Intersecting", false);
    get Intersecting(): Concept {
        this.ensureWiredUp();
        return this._Intersecting;
    }

    public readonly _Invariant = new Concept(this._language, "Invariant", "sysml-Invariant", "sysml-Invariant", false);
    get Invariant(): Concept {
        this.ensureWiredUp();
        return this._Invariant;
    }

    public readonly _InvocationExpression = new Concept(this._language, "InvocationExpression", "sysml-InvocationExpression", "sysml-InvocationExpression", false);
    get InvocationExpression(): Concept {
        this.ensureWiredUp();
        return this._InvocationExpression;
    }

    public readonly _ItemDefinition = new Concept(this._language, "ItemDefinition", "sysml-ItemDefinition", "sysml-ItemDefinition", false);
    get ItemDefinition(): Concept {
        this.ensureWiredUp();
        return this._ItemDefinition;
    }

    public readonly _ItemUsage = new Concept(this._language, "ItemUsage", "sysml-ItemUsage", "sysml-ItemUsage", false);
    get ItemUsage(): Concept {
        this.ensureWiredUp();
        return this._ItemUsage;
    }

    public readonly _JoinNode = new Concept(this._language, "JoinNode", "sysml-JoinNode", "sysml-JoinNode", false);
    get JoinNode(): Concept {
        this.ensureWiredUp();
        return this._JoinNode;
    }

    public readonly _LibraryPackage = new Concept(this._language, "LibraryPackage", "sysml-LibraryPackage", "sysml-LibraryPackage", false);
    get LibraryPackage(): Concept {
        this.ensureWiredUp();
        return this._LibraryPackage;
    }

    public readonly _LiteralBoolean = new Concept(this._language, "LiteralBoolean", "sysml-LiteralBoolean", "sysml-LiteralBoolean", false);
    get LiteralBoolean(): Concept {
        this.ensureWiredUp();
        return this._LiteralBoolean;
    }

    public readonly _LiteralExpression = new Concept(this._language, "LiteralExpression", "sysml-LiteralExpression", "sysml-LiteralExpression", false);
    get LiteralExpression(): Concept {
        this.ensureWiredUp();
        return this._LiteralExpression;
    }

    public readonly _LiteralInfinity = new Concept(this._language, "LiteralInfinity", "sysml-LiteralInfinity", "sysml-LiteralInfinity", false);
    get LiteralInfinity(): Concept {
        this.ensureWiredUp();
        return this._LiteralInfinity;
    }

    public readonly _LiteralInteger = new Concept(this._language, "LiteralInteger", "sysml-LiteralInteger", "sysml-LiteralInteger", false);
    get LiteralInteger(): Concept {
        this.ensureWiredUp();
        return this._LiteralInteger;
    }

    public readonly _LiteralRational = new Concept(this._language, "LiteralRational", "sysml-LiteralRational", "sysml-LiteralRational", false);
    get LiteralRational(): Concept {
        this.ensureWiredUp();
        return this._LiteralRational;
    }

    public readonly _LiteralString = new Concept(this._language, "LiteralString", "sysml-LiteralString", "sysml-LiteralString", false);
    get LiteralString(): Concept {
        this.ensureWiredUp();
        return this._LiteralString;
    }

    public readonly _LoopActionUsage = new Concept(this._language, "LoopActionUsage", "sysml-LoopActionUsage", "sysml-LoopActionUsage", true);
    get LoopActionUsage(): Concept {
        this.ensureWiredUp();
        return this._LoopActionUsage;
    }

    public readonly _Membership = new Concept(this._language, "Membership", "sysml-Membership", "sysml-Membership", false);
    get Membership(): Concept {
        this.ensureWiredUp();
        return this._Membership;
    }

    public readonly _MembershipExpose = new Concept(this._language, "MembershipExpose", "sysml-MembershipExpose", "sysml-MembershipExpose", false);
    get MembershipExpose(): Concept {
        this.ensureWiredUp();
        return this._MembershipExpose;
    }

    public readonly _MembershipImport = new Concept(this._language, "MembershipImport", "sysml-MembershipImport", "sysml-MembershipImport", false);
    get MembershipImport(): Concept {
        this.ensureWiredUp();
        return this._MembershipImport;
    }

    public readonly _MergeNode = new Concept(this._language, "MergeNode", "sysml-MergeNode", "sysml-MergeNode", false);
    get MergeNode(): Concept {
        this.ensureWiredUp();
        return this._MergeNode;
    }

    public readonly _Metaclass = new Concept(this._language, "Metaclass", "sysml-Metaclass", "sysml-Metaclass", false);
    get Metaclass(): Concept {
        this.ensureWiredUp();
        return this._Metaclass;
    }

    public readonly _MetadataAccessExpression = new Concept(this._language, "MetadataAccessExpression", "sysml-MetadataAccessExpression", "sysml-MetadataAccessExpression", false);
    get MetadataAccessExpression(): Concept {
        this.ensureWiredUp();
        return this._MetadataAccessExpression;
    }

    public readonly _MetadataDefinition = new Concept(this._language, "MetadataDefinition", "sysml-MetadataDefinition", "sysml-MetadataDefinition", false);
    get MetadataDefinition(): Concept {
        this.ensureWiredUp();
        return this._MetadataDefinition;
    }

    public readonly _MetadataFeature = new Concept(this._language, "MetadataFeature", "sysml-MetadataFeature", "sysml-MetadataFeature", false);
    get MetadataFeature(): Concept {
        this.ensureWiredUp();
        return this._MetadataFeature;
    }

    public readonly _MetadataUsage = new Concept(this._language, "MetadataUsage", "sysml-MetadataUsage", "sysml-MetadataUsage", false);
    get MetadataUsage(): Concept {
        this.ensureWiredUp();
        return this._MetadataUsage;
    }

    public readonly _Multiplicity = new Concept(this._language, "Multiplicity", "sysml-Multiplicity", "sysml-Multiplicity", false);
    get Multiplicity(): Concept {
        this.ensureWiredUp();
        return this._Multiplicity;
    }

    public readonly _MultiplicityRange = new Concept(this._language, "MultiplicityRange", "sysml-MultiplicityRange", "sysml-MultiplicityRange", false);
    get MultiplicityRange(): Concept {
        this.ensureWiredUp();
        return this._MultiplicityRange;
    }

    public readonly _Namespace = new Concept(this._language, "Namespace", "sysml-Namespace", "sysml-Namespace", false);
    get Namespace(): Concept {
        this.ensureWiredUp();
        return this._Namespace;
    }

    public readonly _NamespaceExpose = new Concept(this._language, "NamespaceExpose", "sysml-NamespaceExpose", "sysml-NamespaceExpose", false);
    get NamespaceExpose(): Concept {
        this.ensureWiredUp();
        return this._NamespaceExpose;
    }

    public readonly _NamespaceImport = new Concept(this._language, "NamespaceImport", "sysml-NamespaceImport", "sysml-NamespaceImport", false);
    get NamespaceImport(): Concept {
        this.ensureWiredUp();
        return this._NamespaceImport;
    }

    public readonly _NullExpression = new Concept(this._language, "NullExpression", "sysml-NullExpression", "sysml-NullExpression", false);
    get NullExpression(): Concept {
        this.ensureWiredUp();
        return this._NullExpression;
    }

    public readonly _ObjectiveMembership = new Concept(this._language, "ObjectiveMembership", "sysml-ObjectiveMembership", "sysml-ObjectiveMembership", false);
    get ObjectiveMembership(): Concept {
        this.ensureWiredUp();
        return this._ObjectiveMembership;
    }

    public readonly _OccurrenceDefinition = new Concept(this._language, "OccurrenceDefinition", "sysml-OccurrenceDefinition", "sysml-OccurrenceDefinition", false);
    get OccurrenceDefinition(): Concept {
        this.ensureWiredUp();
        return this._OccurrenceDefinition;
    }

    public readonly _OccurrenceUsage = new Concept(this._language, "OccurrenceUsage", "sysml-OccurrenceUsage", "sysml-OccurrenceUsage", false);
    get OccurrenceUsage(): Concept {
        this.ensureWiredUp();
        return this._OccurrenceUsage;
    }

    public readonly _OperatorExpression = new Concept(this._language, "OperatorExpression", "sysml-OperatorExpression", "sysml-OperatorExpression", false);
    get OperatorExpression(): Concept {
        this.ensureWiredUp();
        return this._OperatorExpression;
    }

    public readonly _OwningMembership = new Concept(this._language, "OwningMembership", "sysml-OwningMembership", "sysml-OwningMembership", false);
    get OwningMembership(): Concept {
        this.ensureWiredUp();
        return this._OwningMembership;
    }

    public readonly _Package = new Concept(this._language, "Package", "sysml-Package", "sysml-Package", false);
    get Package(): Concept {
        this.ensureWiredUp();
        return this._Package;
    }

    public readonly _ParameterMembership = new Concept(this._language, "ParameterMembership", "sysml-ParameterMembership", "sysml-ParameterMembership", false);
    get ParameterMembership(): Concept {
        this.ensureWiredUp();
        return this._ParameterMembership;
    }

    public readonly _PartDefinition = new Concept(this._language, "PartDefinition", "sysml-PartDefinition", "sysml-PartDefinition", false);
    get PartDefinition(): Concept {
        this.ensureWiredUp();
        return this._PartDefinition;
    }

    public readonly _PartUsage = new Concept(this._language, "PartUsage", "sysml-PartUsage", "sysml-PartUsage", false);
    get PartUsage(): Concept {
        this.ensureWiredUp();
        return this._PartUsage;
    }

    public readonly _PayloadFeature = new Concept(this._language, "PayloadFeature", "sysml-PayloadFeature", "sysml-PayloadFeature", false);
    get PayloadFeature(): Concept {
        this.ensureWiredUp();
        return this._PayloadFeature;
    }

    public readonly _PerformActionUsage = new Concept(this._language, "PerformActionUsage", "sysml-PerformActionUsage", "sysml-PerformActionUsage", false);
    get PerformActionUsage(): Concept {
        this.ensureWiredUp();
        return this._PerformActionUsage;
    }

    public readonly _PortConjugation = new Concept(this._language, "PortConjugation", "sysml-PortConjugation", "sysml-PortConjugation", false);
    get PortConjugation(): Concept {
        this.ensureWiredUp();
        return this._PortConjugation;
    }

    public readonly _PortDefinition = new Concept(this._language, "PortDefinition", "sysml-PortDefinition", "sysml-PortDefinition", false);
    get PortDefinition(): Concept {
        this.ensureWiredUp();
        return this._PortDefinition;
    }

    public readonly _PortUsage = new Concept(this._language, "PortUsage", "sysml-PortUsage", "sysml-PortUsage", false);
    get PortUsage(): Concept {
        this.ensureWiredUp();
        return this._PortUsage;
    }

    public readonly _PortionKind = new Enumeration(this._language, "PortionKind", "sysml-PortionKind", "sysml-PortionKind");
    get PortionKind(): Enumeration {
        this.ensureWiredUp();
        return this._PortionKind;
    }
    private readonly _PortionKind_timeslice = new EnumerationLiteral(this._PortionKind, "timeslice", "sysml-PortionKind-timeslice", "sysml-PortionKind-timeslice");
    get PortionKind_timeslice(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._PortionKind_timeslice;
    }
    private readonly _PortionKind_snapshot = new EnumerationLiteral(this._PortionKind, "snapshot", "sysml-PortionKind-snapshot", "sysml-PortionKind-snapshot");
    get PortionKind_snapshot(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._PortionKind_snapshot;
    }

    public readonly _Predicate = new Concept(this._language, "Predicate", "sysml-Predicate", "sysml-Predicate", false);
    get Predicate(): Concept {
        this.ensureWiredUp();
        return this._Predicate;
    }

    public readonly _Redefinition = new Concept(this._language, "Redefinition", "sysml-Redefinition", "sysml-Redefinition", false);
    get Redefinition(): Concept {
        this.ensureWiredUp();
        return this._Redefinition;
    }

    public readonly _ReferenceSubsetting = new Concept(this._language, "ReferenceSubsetting", "sysml-ReferenceSubsetting", "sysml-ReferenceSubsetting", false);
    get ReferenceSubsetting(): Concept {
        this.ensureWiredUp();
        return this._ReferenceSubsetting;
    }

    public readonly _ReferenceUsage = new Concept(this._language, "ReferenceUsage", "sysml-ReferenceUsage", "sysml-ReferenceUsage", false);
    get ReferenceUsage(): Concept {
        this.ensureWiredUp();
        return this._ReferenceUsage;
    }

    public readonly _Relationship = new Concept(this._language, "Relationship", "sysml-Relationship", "sysml-Relationship", true);
    get Relationship(): Concept {
        this.ensureWiredUp();
        return this._Relationship;
    }

    public readonly _RenderingDefinition = new Concept(this._language, "RenderingDefinition", "sysml-RenderingDefinition", "sysml-RenderingDefinition", false);
    get RenderingDefinition(): Concept {
        this.ensureWiredUp();
        return this._RenderingDefinition;
    }

    public readonly _RenderingUsage = new Concept(this._language, "RenderingUsage", "sysml-RenderingUsage", "sysml-RenderingUsage", false);
    get RenderingUsage(): Concept {
        this.ensureWiredUp();
        return this._RenderingUsage;
    }

    public readonly _RequirementConstraintKind = new Enumeration(this._language, "RequirementConstraintKind", "sysml-RequirementConstraintKind", "sysml-RequirementConstraintKind");
    get RequirementConstraintKind(): Enumeration {
        this.ensureWiredUp();
        return this._RequirementConstraintKind;
    }
    private readonly _RequirementConstraintKind_assumption = new EnumerationLiteral(this._RequirementConstraintKind, "assumption", "sysml-RequirementConstraintKind-assumption", "sysml-RequirementConstraintKind-assumption");
    get RequirementConstraintKind_assumption(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._RequirementConstraintKind_assumption;
    }
    private readonly _RequirementConstraintKind_requirement = new EnumerationLiteral(this._RequirementConstraintKind, "requirement", "sysml-RequirementConstraintKind-requirement", "sysml-RequirementConstraintKind-requirement");
    get RequirementConstraintKind_requirement(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._RequirementConstraintKind_requirement;
    }

    public readonly _RequirementConstraintMembership = new Concept(this._language, "RequirementConstraintMembership", "sysml-RequirementConstraintMembership", "sysml-RequirementConstraintMembership", false);
    get RequirementConstraintMembership(): Concept {
        this.ensureWiredUp();
        return this._RequirementConstraintMembership;
    }

    public readonly _RequirementDefinition = new Concept(this._language, "RequirementDefinition", "sysml-RequirementDefinition", "sysml-RequirementDefinition", false);
    get RequirementDefinition(): Concept {
        this.ensureWiredUp();
        return this._RequirementDefinition;
    }

    public readonly _RequirementUsage = new Concept(this._language, "RequirementUsage", "sysml-RequirementUsage", "sysml-RequirementUsage", false);
    get RequirementUsage(): Concept {
        this.ensureWiredUp();
        return this._RequirementUsage;
    }

    public readonly _RequirementVerificationMembership = new Concept(this._language, "RequirementVerificationMembership", "sysml-RequirementVerificationMembership", "sysml-RequirementVerificationMembership", false);
    get RequirementVerificationMembership(): Concept {
        this.ensureWiredUp();
        return this._RequirementVerificationMembership;
    }

    public readonly _ResultExpressionMembership = new Concept(this._language, "ResultExpressionMembership", "sysml-ResultExpressionMembership", "sysml-ResultExpressionMembership", false);
    get ResultExpressionMembership(): Concept {
        this.ensureWiredUp();
        return this._ResultExpressionMembership;
    }

    public readonly _ReturnParameterMembership = new Concept(this._language, "ReturnParameterMembership", "sysml-ReturnParameterMembership", "sysml-ReturnParameterMembership", false);
    get ReturnParameterMembership(): Concept {
        this.ensureWiredUp();
        return this._ReturnParameterMembership;
    }

    public readonly _SatisfyRequirementUsage = new Concept(this._language, "SatisfyRequirementUsage", "sysml-SatisfyRequirementUsage", "sysml-SatisfyRequirementUsage", false);
    get SatisfyRequirementUsage(): Concept {
        this.ensureWiredUp();
        return this._SatisfyRequirementUsage;
    }

    public readonly _SelectExpression = new Concept(this._language, "SelectExpression", "sysml-SelectExpression", "sysml-SelectExpression", false);
    get SelectExpression(): Concept {
        this.ensureWiredUp();
        return this._SelectExpression;
    }

    public readonly _SendActionUsage = new Concept(this._language, "SendActionUsage", "sysml-SendActionUsage", "sysml-SendActionUsage", false);
    get SendActionUsage(): Concept {
        this.ensureWiredUp();
        return this._SendActionUsage;
    }

    public readonly _Specialization = new Concept(this._language, "Specialization", "sysml-Specialization", "sysml-Specialization", false);
    get Specialization(): Concept {
        this.ensureWiredUp();
        return this._Specialization;
    }

    public readonly _StakeholderMembership = new Concept(this._language, "StakeholderMembership", "sysml-StakeholderMembership", "sysml-StakeholderMembership", false);
    get StakeholderMembership(): Concept {
        this.ensureWiredUp();
        return this._StakeholderMembership;
    }

    public readonly _StateDefinition = new Concept(this._language, "StateDefinition", "sysml-StateDefinition", "sysml-StateDefinition", false);
    get StateDefinition(): Concept {
        this.ensureWiredUp();
        return this._StateDefinition;
    }

    public readonly _StateSubactionKind = new Enumeration(this._language, "StateSubactionKind", "sysml-StateSubactionKind", "sysml-StateSubactionKind");
    get StateSubactionKind(): Enumeration {
        this.ensureWiredUp();
        return this._StateSubactionKind;
    }
    private readonly _StateSubactionKind_entry = new EnumerationLiteral(this._StateSubactionKind, "entry", "sysml-StateSubactionKind-entry", "sysml-StateSubactionKind-entry");
    get StateSubactionKind_entry(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._StateSubactionKind_entry;
    }
    private readonly _StateSubactionKind_do = new EnumerationLiteral(this._StateSubactionKind, "do", "sysml-StateSubactionKind-do", "sysml-StateSubactionKind-do");
    get StateSubactionKind_do(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._StateSubactionKind_do;
    }
    private readonly _StateSubactionKind_exit = new EnumerationLiteral(this._StateSubactionKind, "exit", "sysml-StateSubactionKind-exit", "sysml-StateSubactionKind-exit");
    get StateSubactionKind_exit(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._StateSubactionKind_exit;
    }

    public readonly _StateSubactionMembership = new Concept(this._language, "StateSubactionMembership", "sysml-StateSubactionMembership", "sysml-StateSubactionMembership", false);
    get StateSubactionMembership(): Concept {
        this.ensureWiredUp();
        return this._StateSubactionMembership;
    }

    public readonly _StateUsage = new Concept(this._language, "StateUsage", "sysml-StateUsage", "sysml-StateUsage", false);
    get StateUsage(): Concept {
        this.ensureWiredUp();
        return this._StateUsage;
    }

    public readonly _Step = new Concept(this._language, "Step", "sysml-Step", "sysml-Step", false);
    get Step(): Concept {
        this.ensureWiredUp();
        return this._Step;
    }

    public readonly _Structure = new Concept(this._language, "Structure", "sysml-Structure", "sysml-Structure", false);
    get Structure(): Concept {
        this.ensureWiredUp();
        return this._Structure;
    }

    public readonly _Subclassification = new Concept(this._language, "Subclassification", "sysml-Subclassification", "sysml-Subclassification", false);
    get Subclassification(): Concept {
        this.ensureWiredUp();
        return this._Subclassification;
    }

    public readonly _SubjectMembership = new Concept(this._language, "SubjectMembership", "sysml-SubjectMembership", "sysml-SubjectMembership", false);
    get SubjectMembership(): Concept {
        this.ensureWiredUp();
        return this._SubjectMembership;
    }

    public readonly _Subsetting = new Concept(this._language, "Subsetting", "sysml-Subsetting", "sysml-Subsetting", false);
    get Subsetting(): Concept {
        this.ensureWiredUp();
        return this._Subsetting;
    }

    public readonly _Succession = new Concept(this._language, "Succession", "sysml-Succession", "sysml-Succession", false);
    get Succession(): Concept {
        this.ensureWiredUp();
        return this._Succession;
    }

    public readonly _SuccessionAsUsage = new Concept(this._language, "SuccessionAsUsage", "sysml-SuccessionAsUsage", "sysml-SuccessionAsUsage", false);
    get SuccessionAsUsage(): Concept {
        this.ensureWiredUp();
        return this._SuccessionAsUsage;
    }

    public readonly _SuccessionFlow = new Concept(this._language, "SuccessionFlow", "sysml-SuccessionFlow", "sysml-SuccessionFlow", false);
    get SuccessionFlow(): Concept {
        this.ensureWiredUp();
        return this._SuccessionFlow;
    }

    public readonly _SuccessionFlowUsage = new Concept(this._language, "SuccessionFlowUsage", "sysml-SuccessionFlowUsage", "sysml-SuccessionFlowUsage", false);
    get SuccessionFlowUsage(): Concept {
        this.ensureWiredUp();
        return this._SuccessionFlowUsage;
    }

    public readonly _TerminateActionUsage = new Concept(this._language, "TerminateActionUsage", "sysml-TerminateActionUsage", "sysml-TerminateActionUsage", false);
    get TerminateActionUsage(): Concept {
        this.ensureWiredUp();
        return this._TerminateActionUsage;
    }

    public readonly _TextualRepresentation = new Concept(this._language, "TextualRepresentation", "sysml-TextualRepresentation", "sysml-TextualRepresentation", false);
    get TextualRepresentation(): Concept {
        this.ensureWiredUp();
        return this._TextualRepresentation;
    }

    public readonly _TransitionFeatureKind = new Enumeration(this._language, "TransitionFeatureKind", "sysml-TransitionFeatureKind", "sysml-TransitionFeatureKind");
    get TransitionFeatureKind(): Enumeration {
        this.ensureWiredUp();
        return this._TransitionFeatureKind;
    }
    private readonly _TransitionFeatureKind_trigger = new EnumerationLiteral(this._TransitionFeatureKind, "trigger", "sysml-TransitionFeatureKind-trigger", "sysml-TransitionFeatureKind-trigger");
    get TransitionFeatureKind_trigger(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._TransitionFeatureKind_trigger;
    }
    private readonly _TransitionFeatureKind_guard = new EnumerationLiteral(this._TransitionFeatureKind, "guard", "sysml-TransitionFeatureKind-guard", "sysml-TransitionFeatureKind-guard");
    get TransitionFeatureKind_guard(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._TransitionFeatureKind_guard;
    }
    private readonly _TransitionFeatureKind_effect = new EnumerationLiteral(this._TransitionFeatureKind, "effect", "sysml-TransitionFeatureKind-effect", "sysml-TransitionFeatureKind-effect");
    get TransitionFeatureKind_effect(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._TransitionFeatureKind_effect;
    }

    public readonly _TransitionFeatureMembership = new Concept(this._language, "TransitionFeatureMembership", "sysml-TransitionFeatureMembership", "sysml-TransitionFeatureMembership", false);
    get TransitionFeatureMembership(): Concept {
        this.ensureWiredUp();
        return this._TransitionFeatureMembership;
    }

    public readonly _TransitionUsage = new Concept(this._language, "TransitionUsage", "sysml-TransitionUsage", "sysml-TransitionUsage", false);
    get TransitionUsage(): Concept {
        this.ensureWiredUp();
        return this._TransitionUsage;
    }

    public readonly _TriggerInvocationExpression = new Concept(this._language, "TriggerInvocationExpression", "sysml-TriggerInvocationExpression", "sysml-TriggerInvocationExpression", false);
    get TriggerInvocationExpression(): Concept {
        this.ensureWiredUp();
        return this._TriggerInvocationExpression;
    }

    public readonly _TriggerKind = new Enumeration(this._language, "TriggerKind", "sysml-TriggerKind", "sysml-TriggerKind");
    get TriggerKind(): Enumeration {
        this.ensureWiredUp();
        return this._TriggerKind;
    }
    private readonly _TriggerKind_when = new EnumerationLiteral(this._TriggerKind, "when", "sysml-TriggerKind-when", "sysml-TriggerKind-when");
    get TriggerKind_when(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._TriggerKind_when;
    }
    private readonly _TriggerKind_at = new EnumerationLiteral(this._TriggerKind, "at", "sysml-TriggerKind-at", "sysml-TriggerKind-at");
    get TriggerKind_at(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._TriggerKind_at;
    }
    private readonly _TriggerKind_after = new EnumerationLiteral(this._TriggerKind, "after", "sysml-TriggerKind-after", "sysml-TriggerKind-after");
    get TriggerKind_after(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._TriggerKind_after;
    }

    public readonly _Type = new Concept(this._language, "Type", "sysml-Type", "sysml-Type", false);
    get Type(): Concept {
        this.ensureWiredUp();
        return this._Type;
    }

    public readonly _TypeFeaturing = new Concept(this._language, "TypeFeaturing", "sysml-TypeFeaturing", "sysml-TypeFeaturing", false);
    get TypeFeaturing(): Concept {
        this.ensureWiredUp();
        return this._TypeFeaturing;
    }

    public readonly _Unioning = new Concept(this._language, "Unioning", "sysml-Unioning", "sysml-Unioning", false);
    get Unioning(): Concept {
        this.ensureWiredUp();
        return this._Unioning;
    }

    public readonly _Usage = new Concept(this._language, "Usage", "sysml-Usage", "sysml-Usage", false);
    get Usage(): Concept {
        this.ensureWiredUp();
        return this._Usage;
    }

    public readonly _UseCaseDefinition = new Concept(this._language, "UseCaseDefinition", "sysml-UseCaseDefinition", "sysml-UseCaseDefinition", false);
    get UseCaseDefinition(): Concept {
        this.ensureWiredUp();
        return this._UseCaseDefinition;
    }

    public readonly _UseCaseUsage = new Concept(this._language, "UseCaseUsage", "sysml-UseCaseUsage", "sysml-UseCaseUsage", false);
    get UseCaseUsage(): Concept {
        this.ensureWiredUp();
        return this._UseCaseUsage;
    }

    public readonly _VariantMembership = new Concept(this._language, "VariantMembership", "sysml-VariantMembership", "sysml-VariantMembership", false);
    get VariantMembership(): Concept {
        this.ensureWiredUp();
        return this._VariantMembership;
    }

    public readonly _VerificationCaseDefinition = new Concept(this._language, "VerificationCaseDefinition", "sysml-VerificationCaseDefinition", "sysml-VerificationCaseDefinition", false);
    get VerificationCaseDefinition(): Concept {
        this.ensureWiredUp();
        return this._VerificationCaseDefinition;
    }

    public readonly _VerificationCaseUsage = new Concept(this._language, "VerificationCaseUsage", "sysml-VerificationCaseUsage", "sysml-VerificationCaseUsage", false);
    get VerificationCaseUsage(): Concept {
        this.ensureWiredUp();
        return this._VerificationCaseUsage;
    }

    public readonly _ViewDefinition = new Concept(this._language, "ViewDefinition", "sysml-ViewDefinition", "sysml-ViewDefinition", false);
    get ViewDefinition(): Concept {
        this.ensureWiredUp();
        return this._ViewDefinition;
    }

    public readonly _ViewRenderingMembership = new Concept(this._language, "ViewRenderingMembership", "sysml-ViewRenderingMembership", "sysml-ViewRenderingMembership", false);
    get ViewRenderingMembership(): Concept {
        this.ensureWiredUp();
        return this._ViewRenderingMembership;
    }

    public readonly _ViewUsage = new Concept(this._language, "ViewUsage", "sysml-ViewUsage", "sysml-ViewUsage", false);
    get ViewUsage(): Concept {
        this.ensureWiredUp();
        return this._ViewUsage;
    }

    public readonly _ViewpointDefinition = new Concept(this._language, "ViewpointDefinition", "sysml-ViewpointDefinition", "sysml-ViewpointDefinition", false);
    get ViewpointDefinition(): Concept {
        this.ensureWiredUp();
        return this._ViewpointDefinition;
    }

    public readonly _ViewpointUsage = new Concept(this._language, "ViewpointUsage", "sysml-ViewpointUsage", "sysml-ViewpointUsage", false);
    get ViewpointUsage(): Concept {
        this.ensureWiredUp();
        return this._ViewpointUsage;
    }

    public readonly _VisibilityKind = new Enumeration(this._language, "VisibilityKind", "sysml-VisibilityKind", "sysml-VisibilityKind");
    get VisibilityKind(): Enumeration {
        this.ensureWiredUp();
        return this._VisibilityKind;
    }
    private readonly _VisibilityKind_private = new EnumerationLiteral(this._VisibilityKind, "private", "sysml-VisibilityKind-private", "sysml-VisibilityKind-private");
    get VisibilityKind_private(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._VisibilityKind_private;
    }
    private readonly _VisibilityKind_protected = new EnumerationLiteral(this._VisibilityKind, "protected", "sysml-VisibilityKind-protected", "sysml-VisibilityKind-protected");
    get VisibilityKind_protected(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._VisibilityKind_protected;
    }
    private readonly _VisibilityKind_public = new EnumerationLiteral(this._VisibilityKind, "public", "sysml-VisibilityKind-public", "sysml-VisibilityKind-public");
    get VisibilityKind_public(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._VisibilityKind_public;
    }

    public readonly _WhileLoopActionUsage = new Concept(this._language, "WhileLoopActionUsage", "sysml-WhileLoopActionUsage", "sysml-WhileLoopActionUsage", false);
    get WhileLoopActionUsage(): Concept {
        this.ensureWiredUp();
        return this._WhileLoopActionUsage;
    }

    private _wiredUp: boolean = false;
    private ensureWiredUp() {
        if (this._wiredUp) {
            return;
        }
        this._language.havingEntities(this._AcceptActionUsage, this._ActionDefinition, this._ActionUsage, this._ActorMembership, this._AllocationDefinition, this._AllocationUsage, this._AnalysisCaseDefinition, this._AnalysisCaseUsage, this._AnnotatingElement, this._Annotation, this._AssertConstraintUsage, this._AssignmentActionUsage, this._Association, this._AssociationStructure, this._AttributeDefinition, this._AttributeUsage, this._Behavior, this._BindingConnector, this._BindingConnectorAsUsage, this._BooleanExpression, this._CalculationDefinition, this._CalculationUsage, this._CaseDefinition, this._CaseUsage, this._Class, this._Classifier, this._CollectExpression, this._Comment, this._ConcernDefinition, this._ConcernUsage, this._ConjugatedPortDefinition, this._ConjugatedPortTyping, this._Conjugation, this._ConnectionDefinition, this._ConnectionUsage, this._Connector, this._ConnectorAsUsage, this._ConstraintDefinition, this._ConstraintUsage, this._ConstructorExpression, this._ControlNode, this._CrossSubsetting, this._DataType, this._DecisionNode, this._Definition, this._Dependency, this._Differencing, this._Disjoining, this._Documentation, this._Element, this._ElementFilterMembership, this._EndFeatureMembership, this._EnumerationDefinition, this._EnumerationUsage, this._EventOccurrenceUsage, this._ExhibitStateUsage, this._Expose, this._Expression, this._Feature, this._FeatureChainExpression, this._FeatureChaining, this._FeatureDirectionKind, this._FeatureInverting, this._FeatureMembership, this._FeatureReferenceExpression, this._FeatureTyping, this._FeatureValue, this._Flow, this._FlowDefinition, this._FlowEnd, this._FlowUsage, this._ForLoopActionUsage, this._ForkNode, this._FramedConcernMembership, this._Function, this._IfActionUsage, this._Import, this._IncludeUseCaseUsage, this._IndexExpression, this._InstantiationExpression, this._Interaction, this._InterfaceDefinition, this._InterfaceUsage, this._Intersecting, this._Invariant, this._InvocationExpression, this._ItemDefinition, this._ItemUsage, this._JoinNode, this._LibraryPackage, this._LiteralBoolean, this._LiteralExpression, this._LiteralInfinity, this._LiteralInteger, this._LiteralRational, this._LiteralString, this._LoopActionUsage, this._Membership, this._MembershipExpose, this._MembershipImport, this._MergeNode, this._Metaclass, this._MetadataAccessExpression, this._MetadataDefinition, this._MetadataFeature, this._MetadataUsage, this._Multiplicity, this._MultiplicityRange, this._Namespace, this._NamespaceExpose, this._NamespaceImport, this._NullExpression, this._ObjectiveMembership, this._OccurrenceDefinition, this._OccurrenceUsage, this._OperatorExpression, this._OwningMembership, this._Package, this._ParameterMembership, this._PartDefinition, this._PartUsage, this._PayloadFeature, this._PerformActionUsage, this._PortConjugation, this._PortDefinition, this._PortUsage, this._PortionKind, this._Predicate, this._Redefinition, this._ReferenceSubsetting, this._ReferenceUsage, this._Relationship, this._RenderingDefinition, this._RenderingUsage, this._RequirementConstraintKind, this._RequirementConstraintMembership, this._RequirementDefinition, this._RequirementUsage, this._RequirementVerificationMembership, this._ResultExpressionMembership, this._ReturnParameterMembership, this._SatisfyRequirementUsage, this._SelectExpression, this._SendActionUsage, this._Specialization, this._StakeholderMembership, this._StateDefinition, this._StateSubactionKind, this._StateSubactionMembership, this._StateUsage, this._Step, this._Structure, this._Subclassification, this._SubjectMembership, this._Subsetting, this._Succession, this._SuccessionAsUsage, this._SuccessionFlow, this._SuccessionFlowUsage, this._TerminateActionUsage, this._TextualRepresentation, this._TransitionFeatureKind, this._TransitionFeatureMembership, this._TransitionUsage, this._TriggerInvocationExpression, this._TriggerKind, this._Type, this._TypeFeaturing, this._Unioning, this._Usage, this._UseCaseDefinition, this._UseCaseUsage, this._VariantMembership, this._VerificationCaseDefinition, this._VerificationCaseUsage, this._ViewDefinition, this._ViewRenderingMembership, this._ViewUsage, this._ViewpointDefinition, this._ViewpointUsage, this._VisibilityKind, this._WhileLoopActionUsage);
        this._AcceptActionUsage.extends = this._ActionUsage;
        this._ActionDefinition.extends = this._OccurrenceDefinition;
        this._ActionUsage.extends = this._OccurrenceUsage;
        this._ActorMembership.extends = this._ParameterMembership;
        this._AllocationDefinition.extends = this._ConnectionDefinition;
        this._AllocationUsage.extends = this._ConnectionUsage;
        this._AnalysisCaseDefinition.extends = this._CaseDefinition;
        this._AnalysisCaseUsage.extends = this._CaseUsage;
        this._AnnotatingElement.extends = this._Element;
        this._Annotation.extends = this._Relationship;
        this._AssertConstraintUsage.extends = this._ConstraintUsage;
        this._AssignmentActionUsage.extends = this._ActionUsage;
        this._Association.extends = this._Classifier;
        this._AssociationStructure.extends = this._Association;
        this._AttributeDefinition.extends = this._Definition;
        this._AttributeUsage.extends = this._Usage;
        this._Behavior.extends = this._Class;
        this._BindingConnector.extends = this._Connector;
        this._BindingConnectorAsUsage.extends = this._ConnectorAsUsage;
        this._BooleanExpression.extends = this._Expression;
        this._CalculationDefinition.extends = this._ActionDefinition;
        this._CalculationUsage.extends = this._ActionUsage;
        this._CaseDefinition.extends = this._CalculationDefinition;
        this._CaseUsage.extends = this._CalculationUsage;
        this._Class.extends = this._Classifier;
        this._Classifier.extends = this._Type;
        this._CollectExpression.extends = this._OperatorExpression;
        this._Comment.extends = this._AnnotatingElement;
        this._ConcernDefinition.extends = this._RequirementDefinition;
        this._ConcernUsage.extends = this._RequirementUsage;
        this._ConjugatedPortDefinition.extends = this._PortDefinition;
        this._ConjugatedPortTyping.extends = this._FeatureTyping;
        this._Conjugation.extends = this._Relationship;
        this._ConnectionDefinition.extends = this._PartDefinition;
        this._ConnectionUsage.extends = this._ConnectorAsUsage;
        this._Connector.extends = this._Feature;
        this._ConnectorAsUsage.extends = this._Usage;
        this._ConstraintDefinition.extends = this._OccurrenceDefinition;
        this._ConstraintUsage.extends = this._OccurrenceUsage;
        this._ConstructorExpression.extends = this._InstantiationExpression;
        this._ControlNode.extends = this._ActionUsage;
        this._CrossSubsetting.extends = this._Subsetting;
        this._DataType.extends = this._Classifier;
        this._DecisionNode.extends = this._ControlNode;
        this._Definition.extends = this._Classifier;
        this._Dependency.extends = this._Relationship;
        this._Differencing.extends = this._Relationship;
        this._Disjoining.extends = this._Relationship;
        this._Documentation.extends = this._Comment;
        this._ElementFilterMembership.extends = this._OwningMembership;
        this._EndFeatureMembership.extends = this._FeatureMembership;
        this._EnumerationDefinition.extends = this._AttributeDefinition;
        this._EnumerationUsage.extends = this._AttributeUsage;
        this._EventOccurrenceUsage.extends = this._OccurrenceUsage;
        this._ExhibitStateUsage.extends = this._StateUsage;
        this._Expose.extends = this._Import;
        this._Expression.extends = this._Step;
        this._Feature.extends = this._Type;
        this._FeatureChainExpression.extends = this._OperatorExpression;
        this._FeatureChaining.extends = this._Relationship;
        this._FeatureDirectionKind.havingLiterals(this._FeatureDirectionKind_in, this._FeatureDirectionKind_inout, this._FeatureDirectionKind_out);
        this._FeatureInverting.extends = this._Relationship;
        this._FeatureMembership.extends = this._OwningMembership;
        this._FeatureReferenceExpression.extends = this._Expression;
        this._FeatureTyping.extends = this._Specialization;
        this._FeatureValue.extends = this._OwningMembership;
        this._Flow.extends = this._Connector;
        this._FlowDefinition.extends = this._ActionDefinition;
        this._FlowEnd.extends = this._Feature;
        this._FlowUsage.extends = this._ConnectorAsUsage;
        this._ForLoopActionUsage.extends = this._LoopActionUsage;
        this._ForkNode.extends = this._ControlNode;
        this._FramedConcernMembership.extends = this._RequirementConstraintMembership;
        this._Function.extends = this._Behavior;
        this._IfActionUsage.extends = this._ActionUsage;
        this._Import.extends = this._Relationship;
        this._IncludeUseCaseUsage.extends = this._UseCaseUsage;
        this._IndexExpression.extends = this._OperatorExpression;
        this._InstantiationExpression.extends = this._Expression;
        this._Interaction.extends = this._Association;
        this._InterfaceDefinition.extends = this._ConnectionDefinition;
        this._InterfaceUsage.extends = this._ConnectionUsage;
        this._Intersecting.extends = this._Relationship;
        this._Invariant.extends = this._BooleanExpression;
        this._InvocationExpression.extends = this._InstantiationExpression;
        this._ItemDefinition.extends = this._OccurrenceDefinition;
        this._ItemUsage.extends = this._OccurrenceUsage;
        this._JoinNode.extends = this._ControlNode;
        this._LibraryPackage.extends = this._Package;
        this._LiteralBoolean.extends = this._LiteralExpression;
        this._LiteralExpression.extends = this._Expression;
        this._LiteralInfinity.extends = this._LiteralExpression;
        this._LiteralInteger.extends = this._LiteralExpression;
        this._LiteralRational.extends = this._LiteralExpression;
        this._LiteralString.extends = this._LiteralExpression;
        this._LoopActionUsage.extends = this._ActionUsage;
        this._Membership.extends = this._Relationship;
        this._MembershipExpose.extends = this._MembershipImport;
        this._MembershipImport.extends = this._Import;
        this._MergeNode.extends = this._ControlNode;
        this._Metaclass.extends = this._Structure;
        this._MetadataAccessExpression.extends = this._Expression;
        this._MetadataDefinition.extends = this._ItemDefinition;
        this._MetadataFeature.extends = this._Feature;
        this._MetadataUsage.extends = this._ItemUsage;
        this._Multiplicity.extends = this._Feature;
        this._MultiplicityRange.extends = this._Multiplicity;
        this._Namespace.extends = this._Element;
        this._NamespaceExpose.extends = this._NamespaceImport;
        this._NamespaceImport.extends = this._Import;
        this._NullExpression.extends = this._Expression;
        this._ObjectiveMembership.extends = this._FeatureMembership;
        this._OccurrenceDefinition.extends = this._Definition;
        this._OccurrenceUsage.extends = this._Usage;
        this._OperatorExpression.extends = this._InvocationExpression;
        this._OwningMembership.extends = this._Membership;
        this._Package.extends = this._Namespace;
        this._ParameterMembership.extends = this._FeatureMembership;
        this._PartDefinition.extends = this._ItemDefinition;
        this._PartUsage.extends = this._ItemUsage;
        this._PayloadFeature.extends = this._Feature;
        this._PerformActionUsage.extends = this._ActionUsage;
        this._PortConjugation.extends = this._Conjugation;
        this._PortDefinition.extends = this._OccurrenceDefinition;
        this._PortUsage.extends = this._OccurrenceUsage;
        this._PortionKind.havingLiterals(this._PortionKind_timeslice, this._PortionKind_snapshot);
        this._Predicate.extends = this._Function;
        this._Redefinition.extends = this._Subsetting;
        this._ReferenceSubsetting.extends = this._Subsetting;
        this._ReferenceUsage.extends = this._Usage;
        this._Relationship.extends = this._Element;
        this._RenderingDefinition.extends = this._PartDefinition;
        this._RenderingUsage.extends = this._PartUsage;
        this._RequirementConstraintKind.havingLiterals(this._RequirementConstraintKind_assumption, this._RequirementConstraintKind_requirement);
        this._RequirementConstraintMembership.extends = this._FeatureMembership;
        this._RequirementDefinition.extends = this._ConstraintDefinition;
        this._RequirementUsage.extends = this._ConstraintUsage;
        this._RequirementVerificationMembership.extends = this._RequirementConstraintMembership;
        this._ResultExpressionMembership.extends = this._FeatureMembership;
        this._ReturnParameterMembership.extends = this._ParameterMembership;
        this._SatisfyRequirementUsage.extends = this._RequirementUsage;
        this._SelectExpression.extends = this._OperatorExpression;
        this._SendActionUsage.extends = this._ActionUsage;
        this._Specialization.extends = this._Relationship;
        this._StakeholderMembership.extends = this._ParameterMembership;
        this._StateDefinition.extends = this._ActionDefinition;
        this._StateSubactionKind.havingLiterals(this._StateSubactionKind_entry, this._StateSubactionKind_do, this._StateSubactionKind_exit);
        this._StateSubactionMembership.extends = this._FeatureMembership;
        this._StateUsage.extends = this._ActionUsage;
        this._Step.extends = this._Feature;
        this._Structure.extends = this._Class;
        this._Subclassification.extends = this._Specialization;
        this._SubjectMembership.extends = this._ParameterMembership;
        this._Subsetting.extends = this._Specialization;
        this._Succession.extends = this._Connector;
        this._SuccessionAsUsage.extends = this._ConnectorAsUsage;
        this._SuccessionFlow.extends = this._Flow;
        this._SuccessionFlowUsage.extends = this._FlowUsage;
        this._TerminateActionUsage.extends = this._ActionUsage;
        this._TextualRepresentation.extends = this._AnnotatingElement;
        this._TransitionFeatureKind.havingLiterals(this._TransitionFeatureKind_trigger, this._TransitionFeatureKind_guard, this._TransitionFeatureKind_effect);
        this._TransitionFeatureMembership.extends = this._FeatureMembership;
        this._TransitionUsage.extends = this._ActionUsage;
        this._TriggerInvocationExpression.extends = this._InvocationExpression;
        this._TriggerKind.havingLiterals(this._TriggerKind_when, this._TriggerKind_at, this._TriggerKind_after);
        this._Type.extends = this._Namespace;
        this._TypeFeaturing.extends = this._Relationship;
        this._Unioning.extends = this._Relationship;
        this._Usage.extends = this._Feature;
        this._UseCaseDefinition.extends = this._CaseDefinition;
        this._UseCaseUsage.extends = this._CaseUsage;
        this._VariantMembership.extends = this._OwningMembership;
        this._VerificationCaseDefinition.extends = this._CaseDefinition;
        this._VerificationCaseUsage.extends = this._CaseUsage;
        this._ViewDefinition.extends = this._PartDefinition;
        this._ViewRenderingMembership.extends = this._FeatureMembership;
        this._ViewUsage.extends = this._PartUsage;
        this._ViewpointDefinition.extends = this._RequirementDefinition;
        this._ViewpointUsage.extends = this._RequirementUsage;
        this._VisibilityKind.havingLiterals(this._VisibilityKind_private, this._VisibilityKind_protected, this._VisibilityKind_public);
        this._WhileLoopActionUsage.extends = this._LoopActionUsage;
        this._wiredUp = true;
    }

    factory(receiveDelta?: DeltaReceiver): NodeBaseFactory {
        return (classifier: Classifier, id: LionWebId) => {
            switch (classifier.key) {
                case this._AcceptActionUsage.key: return AcceptActionUsage.create(id, receiveDelta);
                case this._ActionDefinition.key: return ActionDefinition.create(id, receiveDelta);
                case this._ActionUsage.key: return ActionUsage.create(id, receiveDelta);
                case this._ActorMembership.key: return ActorMembership.create(id, receiveDelta);
                case this._AllocationDefinition.key: return AllocationDefinition.create(id, receiveDelta);
                case this._AllocationUsage.key: return AllocationUsage.create(id, receiveDelta);
                case this._AnalysisCaseDefinition.key: return AnalysisCaseDefinition.create(id, receiveDelta);
                case this._AnalysisCaseUsage.key: return AnalysisCaseUsage.create(id, receiveDelta);
                case this._AnnotatingElement.key: return AnnotatingElement.create(id, receiveDelta);
                case this._Annotation.key: return Annotation.create(id, receiveDelta);
                case this._AssertConstraintUsage.key: return AssertConstraintUsage.create(id, receiveDelta);
                case this._AssignmentActionUsage.key: return AssignmentActionUsage.create(id, receiveDelta);
                case this._Association.key: return Association.create(id, receiveDelta);
                case this._AssociationStructure.key: return AssociationStructure.create(id, receiveDelta);
                case this._AttributeDefinition.key: return AttributeDefinition.create(id, receiveDelta);
                case this._AttributeUsage.key: return AttributeUsage.create(id, receiveDelta);
                case this._Behavior.key: return Behavior.create(id, receiveDelta);
                case this._BindingConnector.key: return BindingConnector.create(id, receiveDelta);
                case this._BindingConnectorAsUsage.key: return BindingConnectorAsUsage.create(id, receiveDelta);
                case this._BooleanExpression.key: return BooleanExpression.create(id, receiveDelta);
                case this._CalculationDefinition.key: return CalculationDefinition.create(id, receiveDelta);
                case this._CalculationUsage.key: return CalculationUsage.create(id, receiveDelta);
                case this._CaseDefinition.key: return CaseDefinition.create(id, receiveDelta);
                case this._CaseUsage.key: return CaseUsage.create(id, receiveDelta);
                case this._Class.key: return Class.create(id, receiveDelta);
                case this._Classifier.key: return Classifier.create(id, receiveDelta);
                case this._CollectExpression.key: return CollectExpression.create(id, receiveDelta);
                case this._Comment.key: return Comment.create(id, receiveDelta);
                case this._ConcernDefinition.key: return ConcernDefinition.create(id, receiveDelta);
                case this._ConcernUsage.key: return ConcernUsage.create(id, receiveDelta);
                case this._ConjugatedPortDefinition.key: return ConjugatedPortDefinition.create(id, receiveDelta);
                case this._ConjugatedPortTyping.key: return ConjugatedPortTyping.create(id, receiveDelta);
                case this._Conjugation.key: return Conjugation.create(id, receiveDelta);
                case this._ConnectionDefinition.key: return ConnectionDefinition.create(id, receiveDelta);
                case this._ConnectionUsage.key: return ConnectionUsage.create(id, receiveDelta);
                case this._Connector.key: return Connector.create(id, receiveDelta);
                case this._ConstraintDefinition.key: return ConstraintDefinition.create(id, receiveDelta);
                case this._ConstraintUsage.key: return ConstraintUsage.create(id, receiveDelta);
                case this._ConstructorExpression.key: return ConstructorExpression.create(id, receiveDelta);
                case this._CrossSubsetting.key: return CrossSubsetting.create(id, receiveDelta);
                case this._DataType.key: return DataType.create(id, receiveDelta);
                case this._DecisionNode.key: return DecisionNode.create(id, receiveDelta);
                case this._Definition.key: return Definition.create(id, receiveDelta);
                case this._Dependency.key: return Dependency.create(id, receiveDelta);
                case this._Differencing.key: return Differencing.create(id, receiveDelta);
                case this._Disjoining.key: return Disjoining.create(id, receiveDelta);
                case this._Documentation.key: return Documentation.create(id, receiveDelta);
                case this._ElementFilterMembership.key: return ElementFilterMembership.create(id, receiveDelta);
                case this._EndFeatureMembership.key: return EndFeatureMembership.create(id, receiveDelta);
                case this._EnumerationDefinition.key: return EnumerationDefinition.create(id, receiveDelta);
                case this._EnumerationUsage.key: return EnumerationUsage.create(id, receiveDelta);
                case this._EventOccurrenceUsage.key: return EventOccurrenceUsage.create(id, receiveDelta);
                case this._ExhibitStateUsage.key: return ExhibitStateUsage.create(id, receiveDelta);
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
                case this._FlowDefinition.key: return FlowDefinition.create(id, receiveDelta);
                case this._FlowEnd.key: return FlowEnd.create(id, receiveDelta);
                case this._FlowUsage.key: return FlowUsage.create(id, receiveDelta);
                case this._ForLoopActionUsage.key: return ForLoopActionUsage.create(id, receiveDelta);
                case this._ForkNode.key: return ForkNode.create(id, receiveDelta);
                case this._FramedConcernMembership.key: return FramedConcernMembership.create(id, receiveDelta);
                case this._Function.key: return Function.create(id, receiveDelta);
                case this._IfActionUsage.key: return IfActionUsage.create(id, receiveDelta);
                case this._IncludeUseCaseUsage.key: return IncludeUseCaseUsage.create(id, receiveDelta);
                case this._IndexExpression.key: return IndexExpression.create(id, receiveDelta);
                case this._Interaction.key: return Interaction.create(id, receiveDelta);
                case this._InterfaceDefinition.key: return InterfaceDefinition.create(id, receiveDelta);
                case this._InterfaceUsage.key: return InterfaceUsage.create(id, receiveDelta);
                case this._Intersecting.key: return Intersecting.create(id, receiveDelta);
                case this._Invariant.key: return Invariant.create(id, receiveDelta);
                case this._InvocationExpression.key: return InvocationExpression.create(id, receiveDelta);
                case this._ItemDefinition.key: return ItemDefinition.create(id, receiveDelta);
                case this._ItemUsage.key: return ItemUsage.create(id, receiveDelta);
                case this._JoinNode.key: return JoinNode.create(id, receiveDelta);
                case this._LibraryPackage.key: return LibraryPackage.create(id, receiveDelta);
                case this._LiteralBoolean.key: return LiteralBoolean.create(id, receiveDelta);
                case this._LiteralExpression.key: return LiteralExpression.create(id, receiveDelta);
                case this._LiteralInfinity.key: return LiteralInfinity.create(id, receiveDelta);
                case this._LiteralInteger.key: return LiteralInteger.create(id, receiveDelta);
                case this._LiteralRational.key: return LiteralRational.create(id, receiveDelta);
                case this._LiteralString.key: return LiteralString.create(id, receiveDelta);
                case this._Membership.key: return Membership.create(id, receiveDelta);
                case this._MembershipExpose.key: return MembershipExpose.create(id, receiveDelta);
                case this._MembershipImport.key: return MembershipImport.create(id, receiveDelta);
                case this._MergeNode.key: return MergeNode.create(id, receiveDelta);
                case this._Metaclass.key: return Metaclass.create(id, receiveDelta);
                case this._MetadataAccessExpression.key: return MetadataAccessExpression.create(id, receiveDelta);
                case this._MetadataDefinition.key: return MetadataDefinition.create(id, receiveDelta);
                case this._MetadataFeature.key: return MetadataFeature.create(id, receiveDelta);
                case this._MetadataUsage.key: return MetadataUsage.create(id, receiveDelta);
                case this._Multiplicity.key: return Multiplicity.create(id, receiveDelta);
                case this._MultiplicityRange.key: return MultiplicityRange.create(id, receiveDelta);
                case this._Namespace.key: return Namespace.create(id, receiveDelta);
                case this._NamespaceExpose.key: return NamespaceExpose.create(id, receiveDelta);
                case this._NamespaceImport.key: return NamespaceImport.create(id, receiveDelta);
                case this._NullExpression.key: return NullExpression.create(id, receiveDelta);
                case this._ObjectiveMembership.key: return ObjectiveMembership.create(id, receiveDelta);
                case this._OccurrenceDefinition.key: return OccurrenceDefinition.create(id, receiveDelta);
                case this._OccurrenceUsage.key: return OccurrenceUsage.create(id, receiveDelta);
                case this._OperatorExpression.key: return OperatorExpression.create(id, receiveDelta);
                case this._OwningMembership.key: return OwningMembership.create(id, receiveDelta);
                case this._Package.key: return Package.create(id, receiveDelta);
                case this._ParameterMembership.key: return ParameterMembership.create(id, receiveDelta);
                case this._PartDefinition.key: return PartDefinition.create(id, receiveDelta);
                case this._PartUsage.key: return PartUsage.create(id, receiveDelta);
                case this._PayloadFeature.key: return PayloadFeature.create(id, receiveDelta);
                case this._PerformActionUsage.key: return PerformActionUsage.create(id, receiveDelta);
                case this._PortConjugation.key: return PortConjugation.create(id, receiveDelta);
                case this._PortDefinition.key: return PortDefinition.create(id, receiveDelta);
                case this._PortUsage.key: return PortUsage.create(id, receiveDelta);
                case this._Predicate.key: return Predicate.create(id, receiveDelta);
                case this._Redefinition.key: return Redefinition.create(id, receiveDelta);
                case this._ReferenceSubsetting.key: return ReferenceSubsetting.create(id, receiveDelta);
                case this._ReferenceUsage.key: return ReferenceUsage.create(id, receiveDelta);
                case this._RenderingDefinition.key: return RenderingDefinition.create(id, receiveDelta);
                case this._RenderingUsage.key: return RenderingUsage.create(id, receiveDelta);
                case this._RequirementConstraintMembership.key: return RequirementConstraintMembership.create(id, receiveDelta);
                case this._RequirementDefinition.key: return RequirementDefinition.create(id, receiveDelta);
                case this._RequirementUsage.key: return RequirementUsage.create(id, receiveDelta);
                case this._RequirementVerificationMembership.key: return RequirementVerificationMembership.create(id, receiveDelta);
                case this._ResultExpressionMembership.key: return ResultExpressionMembership.create(id, receiveDelta);
                case this._ReturnParameterMembership.key: return ReturnParameterMembership.create(id, receiveDelta);
                case this._SatisfyRequirementUsage.key: return SatisfyRequirementUsage.create(id, receiveDelta);
                case this._SelectExpression.key: return SelectExpression.create(id, receiveDelta);
                case this._SendActionUsage.key: return SendActionUsage.create(id, receiveDelta);
                case this._Specialization.key: return Specialization.create(id, receiveDelta);
                case this._StakeholderMembership.key: return StakeholderMembership.create(id, receiveDelta);
                case this._StateDefinition.key: return StateDefinition.create(id, receiveDelta);
                case this._StateSubactionMembership.key: return StateSubactionMembership.create(id, receiveDelta);
                case this._StateUsage.key: return StateUsage.create(id, receiveDelta);
                case this._Step.key: return Step.create(id, receiveDelta);
                case this._Structure.key: return Structure.create(id, receiveDelta);
                case this._Subclassification.key: return Subclassification.create(id, receiveDelta);
                case this._SubjectMembership.key: return SubjectMembership.create(id, receiveDelta);
                case this._Subsetting.key: return Subsetting.create(id, receiveDelta);
                case this._Succession.key: return Succession.create(id, receiveDelta);
                case this._SuccessionAsUsage.key: return SuccessionAsUsage.create(id, receiveDelta);
                case this._SuccessionFlow.key: return SuccessionFlow.create(id, receiveDelta);
                case this._SuccessionFlowUsage.key: return SuccessionFlowUsage.create(id, receiveDelta);
                case this._TerminateActionUsage.key: return TerminateActionUsage.create(id, receiveDelta);
                case this._TextualRepresentation.key: return TextualRepresentation.create(id, receiveDelta);
                case this._TransitionFeatureMembership.key: return TransitionFeatureMembership.create(id, receiveDelta);
                case this._TransitionUsage.key: return TransitionUsage.create(id, receiveDelta);
                case this._TriggerInvocationExpression.key: return TriggerInvocationExpression.create(id, receiveDelta);
                case this._Type.key: return Type.create(id, receiveDelta);
                case this._TypeFeaturing.key: return TypeFeaturing.create(id, receiveDelta);
                case this._Unioning.key: return Unioning.create(id, receiveDelta);
                case this._Usage.key: return Usage.create(id, receiveDelta);
                case this._UseCaseDefinition.key: return UseCaseDefinition.create(id, receiveDelta);
                case this._UseCaseUsage.key: return UseCaseUsage.create(id, receiveDelta);
                case this._VariantMembership.key: return VariantMembership.create(id, receiveDelta);
                case this._VerificationCaseDefinition.key: return VerificationCaseDefinition.create(id, receiveDelta);
                case this._VerificationCaseUsage.key: return VerificationCaseUsage.create(id, receiveDelta);
                case this._ViewDefinition.key: return ViewDefinition.create(id, receiveDelta);
                case this._ViewRenderingMembership.key: return ViewRenderingMembership.create(id, receiveDelta);
                case this._ViewUsage.key: return ViewUsage.create(id, receiveDelta);
                case this._ViewpointDefinition.key: return ViewpointDefinition.create(id, receiveDelta);
                case this._ViewpointUsage.key: return ViewpointUsage.create(id, receiveDelta);
                case this._WhileLoopActionUsage.key: return WhileLoopActionUsage.create(id, receiveDelta);
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
            case this._PortionKind.key: return enumerationLiteral.key as EnumType;
            case this._RequirementConstraintKind.key: return enumerationLiteral.key as EnumType;
            case this._StateSubactionKind.key: return enumerationLiteral.key as EnumType;
            case this._TransitionFeatureKind.key: return enumerationLiteral.key as EnumType;
            case this._TriggerKind.key: return enumerationLiteral.key as EnumType;
            case this._VisibilityKind.key: return enumerationLiteral.key as EnumType;
            default: {
                const {language} = enumeration;
                throw new Error(`enumeration with key ${enumeration.key} is not known in language ${language.name} (key=${language.key}, version=${language.version})`);
            }
        }
    }

    public static readonly INSTANCE = new sysmlBase();
}


export abstract class Element extends NodeBase {
}

export class Namespace extends Element {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Namespace {
        return new Namespace(sysmlBase.INSTANCE.Namespace, id, receiveDelta, parentInfo);
    }
}

export class Type extends Namespace {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Type {
        return new Type(sysmlBase.INSTANCE.Type, id, receiveDelta, parentInfo);
    }
}

export class Feature extends Type {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Feature {
        return new Feature(sysmlBase.INSTANCE.Feature, id, receiveDelta, parentInfo);
    }
}

export class Usage extends Feature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Usage {
        return new Usage(sysmlBase.INSTANCE.Usage, id, receiveDelta, parentInfo);
    }
}

export class OccurrenceUsage extends Usage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): OccurrenceUsage {
        return new OccurrenceUsage(sysmlBase.INSTANCE.OccurrenceUsage, id, receiveDelta, parentInfo);
    }
}

export class ActionUsage extends OccurrenceUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ActionUsage {
        return new ActionUsage(sysmlBase.INSTANCE.ActionUsage, id, receiveDelta, parentInfo);
    }
}

export class AcceptActionUsage extends ActionUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): AcceptActionUsage {
        return new AcceptActionUsage(sysmlBase.INSTANCE.AcceptActionUsage, id, receiveDelta, parentInfo);
    }
}

export class Classifier extends Type {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Classifier {
        return new Classifier(sysmlBase.INSTANCE.Classifier, id, receiveDelta, parentInfo);
    }
}

export class Definition extends Classifier {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Definition {
        return new Definition(sysmlBase.INSTANCE.Definition, id, receiveDelta, parentInfo);
    }
}

export class OccurrenceDefinition extends Definition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): OccurrenceDefinition {
        return new OccurrenceDefinition(sysmlBase.INSTANCE.OccurrenceDefinition, id, receiveDelta, parentInfo);
    }
}

export class ActionDefinition extends OccurrenceDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ActionDefinition {
        return new ActionDefinition(sysmlBase.INSTANCE.ActionDefinition, id, receiveDelta, parentInfo);
    }
}

export abstract class Relationship extends Element {
}

export class Membership extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Membership {
        return new Membership(sysmlBase.INSTANCE.Membership, id, receiveDelta, parentInfo);
    }
}

export class OwningMembership extends Membership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): OwningMembership {
        return new OwningMembership(sysmlBase.INSTANCE.OwningMembership, id, receiveDelta, parentInfo);
    }
}

export class FeatureMembership extends OwningMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureMembership {
        return new FeatureMembership(sysmlBase.INSTANCE.FeatureMembership, id, receiveDelta, parentInfo);
    }
}

export class ParameterMembership extends FeatureMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ParameterMembership {
        return new ParameterMembership(sysmlBase.INSTANCE.ParameterMembership, id, receiveDelta, parentInfo);
    }
}

export class ActorMembership extends ParameterMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ActorMembership {
        return new ActorMembership(sysmlBase.INSTANCE.ActorMembership, id, receiveDelta, parentInfo);
    }
}

export class ItemDefinition extends OccurrenceDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ItemDefinition {
        return new ItemDefinition(sysmlBase.INSTANCE.ItemDefinition, id, receiveDelta, parentInfo);
    }
}

export class PartDefinition extends ItemDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): PartDefinition {
        return new PartDefinition(sysmlBase.INSTANCE.PartDefinition, id, receiveDelta, parentInfo);
    }
}

export class ConnectionDefinition extends PartDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ConnectionDefinition {
        return new ConnectionDefinition(sysmlBase.INSTANCE.ConnectionDefinition, id, receiveDelta, parentInfo);
    }
}

export class AllocationDefinition extends ConnectionDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): AllocationDefinition {
        return new AllocationDefinition(sysmlBase.INSTANCE.AllocationDefinition, id, receiveDelta, parentInfo);
    }
}

export abstract class ConnectorAsUsage extends Usage {
}

export class ConnectionUsage extends ConnectorAsUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ConnectionUsage {
        return new ConnectionUsage(sysmlBase.INSTANCE.ConnectionUsage, id, receiveDelta, parentInfo);
    }
}

export class AllocationUsage extends ConnectionUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): AllocationUsage {
        return new AllocationUsage(sysmlBase.INSTANCE.AllocationUsage, id, receiveDelta, parentInfo);
    }
}

export class CalculationDefinition extends ActionDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): CalculationDefinition {
        return new CalculationDefinition(sysmlBase.INSTANCE.CalculationDefinition, id, receiveDelta, parentInfo);
    }
}

export class CaseDefinition extends CalculationDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): CaseDefinition {
        return new CaseDefinition(sysmlBase.INSTANCE.CaseDefinition, id, receiveDelta, parentInfo);
    }
}

export class AnalysisCaseDefinition extends CaseDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): AnalysisCaseDefinition {
        return new AnalysisCaseDefinition(sysmlBase.INSTANCE.AnalysisCaseDefinition, id, receiveDelta, parentInfo);
    }
}

export class CalculationUsage extends ActionUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): CalculationUsage {
        return new CalculationUsage(sysmlBase.INSTANCE.CalculationUsage, id, receiveDelta, parentInfo);
    }
}

export class CaseUsage extends CalculationUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): CaseUsage {
        return new CaseUsage(sysmlBase.INSTANCE.CaseUsage, id, receiveDelta, parentInfo);
    }
}

export class AnalysisCaseUsage extends CaseUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): AnalysisCaseUsage {
        return new AnalysisCaseUsage(sysmlBase.INSTANCE.AnalysisCaseUsage, id, receiveDelta, parentInfo);
    }
}

export class AnnotatingElement extends Element {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): AnnotatingElement {
        return new AnnotatingElement(sysmlBase.INSTANCE.AnnotatingElement, id, receiveDelta, parentInfo);
    }
}

export class Annotation extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Annotation {
        return new Annotation(sysmlBase.INSTANCE.Annotation, id, receiveDelta, parentInfo);
    }
}

export class ConstraintUsage extends OccurrenceUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ConstraintUsage {
        return new ConstraintUsage(sysmlBase.INSTANCE.ConstraintUsage, id, receiveDelta, parentInfo);
    }
}

export class AssertConstraintUsage extends ConstraintUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): AssertConstraintUsage {
        return new AssertConstraintUsage(sysmlBase.INSTANCE.AssertConstraintUsage, id, receiveDelta, parentInfo);
    }
}

export class AssignmentActionUsage extends ActionUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): AssignmentActionUsage {
        return new AssignmentActionUsage(sysmlBase.INSTANCE.AssignmentActionUsage, id, receiveDelta, parentInfo);
    }
}

export class Association extends Classifier {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Association {
        return new Association(sysmlBase.INSTANCE.Association, id, receiveDelta, parentInfo);
    }
}

export class AssociationStructure extends Association {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): AssociationStructure {
        return new AssociationStructure(sysmlBase.INSTANCE.AssociationStructure, id, receiveDelta, parentInfo);
    }
}

export class AttributeDefinition extends Definition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): AttributeDefinition {
        return new AttributeDefinition(sysmlBase.INSTANCE.AttributeDefinition, id, receiveDelta, parentInfo);
    }
}

export class AttributeUsage extends Usage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): AttributeUsage {
        return new AttributeUsage(sysmlBase.INSTANCE.AttributeUsage, id, receiveDelta, parentInfo);
    }
}

export class Class extends Classifier {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Class {
        return new Class(sysmlBase.INSTANCE.Class, id, receiveDelta, parentInfo);
    }
}

export class Behavior extends Class {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Behavior {
        return new Behavior(sysmlBase.INSTANCE.Behavior, id, receiveDelta, parentInfo);
    }
}

export class Connector extends Feature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Connector {
        return new Connector(sysmlBase.INSTANCE.Connector, id, receiveDelta, parentInfo);
    }
}

export class BindingConnector extends Connector {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): BindingConnector {
        return new BindingConnector(sysmlBase.INSTANCE.BindingConnector, id, receiveDelta, parentInfo);
    }
}

export class BindingConnectorAsUsage extends ConnectorAsUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): BindingConnectorAsUsage {
        return new BindingConnectorAsUsage(sysmlBase.INSTANCE.BindingConnectorAsUsage, id, receiveDelta, parentInfo);
    }
}

export class Step extends Feature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Step {
        return new Step(sysmlBase.INSTANCE.Step, id, receiveDelta, parentInfo);
    }
}

export class Expression extends Step {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Expression {
        return new Expression(sysmlBase.INSTANCE.Expression, id, receiveDelta, parentInfo);
    }
}

export class BooleanExpression extends Expression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): BooleanExpression {
        return new BooleanExpression(sysmlBase.INSTANCE.BooleanExpression, id, receiveDelta, parentInfo);
    }
}

export abstract class InstantiationExpression extends Expression {
}

export class InvocationExpression extends InstantiationExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): InvocationExpression {
        return new InvocationExpression(sysmlBase.INSTANCE.InvocationExpression, id, receiveDelta, parentInfo);
    }
}

export class OperatorExpression extends InvocationExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): OperatorExpression {
        return new OperatorExpression(sysmlBase.INSTANCE.OperatorExpression, id, receiveDelta, parentInfo);
    }
}

export class CollectExpression extends OperatorExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): CollectExpression {
        return new CollectExpression(sysmlBase.INSTANCE.CollectExpression, id, receiveDelta, parentInfo);
    }
}

export class Comment extends AnnotatingElement {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Comment {
        return new Comment(sysmlBase.INSTANCE.Comment, id, receiveDelta, parentInfo);
    }
}

export class ConstraintDefinition extends OccurrenceDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ConstraintDefinition {
        return new ConstraintDefinition(sysmlBase.INSTANCE.ConstraintDefinition, id, receiveDelta, parentInfo);
    }
}

export class RequirementDefinition extends ConstraintDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): RequirementDefinition {
        return new RequirementDefinition(sysmlBase.INSTANCE.RequirementDefinition, id, receiveDelta, parentInfo);
    }
}

export class ConcernDefinition extends RequirementDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ConcernDefinition {
        return new ConcernDefinition(sysmlBase.INSTANCE.ConcernDefinition, id, receiveDelta, parentInfo);
    }
}

export class RequirementUsage extends ConstraintUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): RequirementUsage {
        return new RequirementUsage(sysmlBase.INSTANCE.RequirementUsage, id, receiveDelta, parentInfo);
    }
}

export class ConcernUsage extends RequirementUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ConcernUsage {
        return new ConcernUsage(sysmlBase.INSTANCE.ConcernUsage, id, receiveDelta, parentInfo);
    }
}

export class PortDefinition extends OccurrenceDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): PortDefinition {
        return new PortDefinition(sysmlBase.INSTANCE.PortDefinition, id, receiveDelta, parentInfo);
    }
}

export class ConjugatedPortDefinition extends PortDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ConjugatedPortDefinition {
        return new ConjugatedPortDefinition(sysmlBase.INSTANCE.ConjugatedPortDefinition, id, receiveDelta, parentInfo);
    }
}

export class Specialization extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Specialization {
        return new Specialization(sysmlBase.INSTANCE.Specialization, id, receiveDelta, parentInfo);
    }
}

export class FeatureTyping extends Specialization {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureTyping {
        return new FeatureTyping(sysmlBase.INSTANCE.FeatureTyping, id, receiveDelta, parentInfo);
    }
}

export class ConjugatedPortTyping extends FeatureTyping {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ConjugatedPortTyping {
        return new ConjugatedPortTyping(sysmlBase.INSTANCE.ConjugatedPortTyping, id, receiveDelta, parentInfo);
    }
}

export class Conjugation extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Conjugation {
        return new Conjugation(sysmlBase.INSTANCE.Conjugation, id, receiveDelta, parentInfo);
    }
}

export class ConstructorExpression extends InstantiationExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ConstructorExpression {
        return new ConstructorExpression(sysmlBase.INSTANCE.ConstructorExpression, id, receiveDelta, parentInfo);
    }
}

export abstract class ControlNode extends ActionUsage {
}

export class Subsetting extends Specialization {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Subsetting {
        return new Subsetting(sysmlBase.INSTANCE.Subsetting, id, receiveDelta, parentInfo);
    }
}

export class CrossSubsetting extends Subsetting {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): CrossSubsetting {
        return new CrossSubsetting(sysmlBase.INSTANCE.CrossSubsetting, id, receiveDelta, parentInfo);
    }
}

export class DataType extends Classifier {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): DataType {
        return new DataType(sysmlBase.INSTANCE.DataType, id, receiveDelta, parentInfo);
    }
}

export class DecisionNode extends ControlNode {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): DecisionNode {
        return new DecisionNode(sysmlBase.INSTANCE.DecisionNode, id, receiveDelta, parentInfo);
    }
}

export class Dependency extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Dependency {
        return new Dependency(sysmlBase.INSTANCE.Dependency, id, receiveDelta, parentInfo);
    }
}

export class Differencing extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Differencing {
        return new Differencing(sysmlBase.INSTANCE.Differencing, id, receiveDelta, parentInfo);
    }
}

export class Disjoining extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Disjoining {
        return new Disjoining(sysmlBase.INSTANCE.Disjoining, id, receiveDelta, parentInfo);
    }
}

export class Documentation extends Comment {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Documentation {
        return new Documentation(sysmlBase.INSTANCE.Documentation, id, receiveDelta, parentInfo);
    }
}

export class ElementFilterMembership extends OwningMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ElementFilterMembership {
        return new ElementFilterMembership(sysmlBase.INSTANCE.ElementFilterMembership, id, receiveDelta, parentInfo);
    }
}

export class EndFeatureMembership extends FeatureMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EndFeatureMembership {
        return new EndFeatureMembership(sysmlBase.INSTANCE.EndFeatureMembership, id, receiveDelta, parentInfo);
    }
}

export class EnumerationDefinition extends AttributeDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EnumerationDefinition {
        return new EnumerationDefinition(sysmlBase.INSTANCE.EnumerationDefinition, id, receiveDelta, parentInfo);
    }
}

export class EnumerationUsage extends AttributeUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EnumerationUsage {
        return new EnumerationUsage(sysmlBase.INSTANCE.EnumerationUsage, id, receiveDelta, parentInfo);
    }
}

export class EventOccurrenceUsage extends OccurrenceUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EventOccurrenceUsage {
        return new EventOccurrenceUsage(sysmlBase.INSTANCE.EventOccurrenceUsage, id, receiveDelta, parentInfo);
    }
}

export class StateUsage extends ActionUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): StateUsage {
        return new StateUsage(sysmlBase.INSTANCE.StateUsage, id, receiveDelta, parentInfo);
    }
}

export class ExhibitStateUsage extends StateUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ExhibitStateUsage {
        return new ExhibitStateUsage(sysmlBase.INSTANCE.ExhibitStateUsage, id, receiveDelta, parentInfo);
    }
}

export abstract class Import extends Relationship {
}

export abstract class Expose extends Import {
}

export class FeatureChainExpression extends OperatorExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureChainExpression {
        return new FeatureChainExpression(sysmlBase.INSTANCE.FeatureChainExpression, id, receiveDelta, parentInfo);
    }
}

export class FeatureChaining extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureChaining {
        return new FeatureChaining(sysmlBase.INSTANCE.FeatureChaining, id, receiveDelta, parentInfo);
    }
}

export enum FeatureDirectionKind {
    in = "sysml-FeatureDirectionKind-in",
    inout = "sysml-FeatureDirectionKind-inout",
    out = "sysml-FeatureDirectionKind-out"
}

export class FeatureInverting extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureInverting {
        return new FeatureInverting(sysmlBase.INSTANCE.FeatureInverting, id, receiveDelta, parentInfo);
    }
}

export class FeatureReferenceExpression extends Expression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureReferenceExpression {
        return new FeatureReferenceExpression(sysmlBase.INSTANCE.FeatureReferenceExpression, id, receiveDelta, parentInfo);
    }
}

export class FeatureValue extends OwningMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureValue {
        return new FeatureValue(sysmlBase.INSTANCE.FeatureValue, id, receiveDelta, parentInfo);
    }
}

export class Flow extends Connector {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Flow {
        return new Flow(sysmlBase.INSTANCE.Flow, id, receiveDelta, parentInfo);
    }
}

export class FlowDefinition extends ActionDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FlowDefinition {
        return new FlowDefinition(sysmlBase.INSTANCE.FlowDefinition, id, receiveDelta, parentInfo);
    }
}

export class FlowEnd extends Feature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FlowEnd {
        return new FlowEnd(sysmlBase.INSTANCE.FlowEnd, id, receiveDelta, parentInfo);
    }
}

export class FlowUsage extends ConnectorAsUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FlowUsage {
        return new FlowUsage(sysmlBase.INSTANCE.FlowUsage, id, receiveDelta, parentInfo);
    }
}

export abstract class LoopActionUsage extends ActionUsage {
}

export class ForLoopActionUsage extends LoopActionUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ForLoopActionUsage {
        return new ForLoopActionUsage(sysmlBase.INSTANCE.ForLoopActionUsage, id, receiveDelta, parentInfo);
    }
}

export class ForkNode extends ControlNode {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ForkNode {
        return new ForkNode(sysmlBase.INSTANCE.ForkNode, id, receiveDelta, parentInfo);
    }
}

export class RequirementConstraintMembership extends FeatureMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): RequirementConstraintMembership {
        return new RequirementConstraintMembership(sysmlBase.INSTANCE.RequirementConstraintMembership, id, receiveDelta, parentInfo);
    }
}

export class FramedConcernMembership extends RequirementConstraintMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FramedConcernMembership {
        return new FramedConcernMembership(sysmlBase.INSTANCE.FramedConcernMembership, id, receiveDelta, parentInfo);
    }
}

export class Function extends Behavior {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Function {
        return new Function(sysmlBase.INSTANCE.Function, id, receiveDelta, parentInfo);
    }
}

export class IfActionUsage extends ActionUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): IfActionUsage {
        return new IfActionUsage(sysmlBase.INSTANCE.IfActionUsage, id, receiveDelta, parentInfo);
    }
}

export class UseCaseUsage extends CaseUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): UseCaseUsage {
        return new UseCaseUsage(sysmlBase.INSTANCE.UseCaseUsage, id, receiveDelta, parentInfo);
    }
}

export class IncludeUseCaseUsage extends UseCaseUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): IncludeUseCaseUsage {
        return new IncludeUseCaseUsage(sysmlBase.INSTANCE.IncludeUseCaseUsage, id, receiveDelta, parentInfo);
    }
}

export class IndexExpression extends OperatorExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): IndexExpression {
        return new IndexExpression(sysmlBase.INSTANCE.IndexExpression, id, receiveDelta, parentInfo);
    }
}

export class Interaction extends Association {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Interaction {
        return new Interaction(sysmlBase.INSTANCE.Interaction, id, receiveDelta, parentInfo);
    }
}

export class InterfaceDefinition extends ConnectionDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): InterfaceDefinition {
        return new InterfaceDefinition(sysmlBase.INSTANCE.InterfaceDefinition, id, receiveDelta, parentInfo);
    }
}

export class InterfaceUsage extends ConnectionUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): InterfaceUsage {
        return new InterfaceUsage(sysmlBase.INSTANCE.InterfaceUsage, id, receiveDelta, parentInfo);
    }
}

export class Intersecting extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Intersecting {
        return new Intersecting(sysmlBase.INSTANCE.Intersecting, id, receiveDelta, parentInfo);
    }
}

export class Invariant extends BooleanExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Invariant {
        return new Invariant(sysmlBase.INSTANCE.Invariant, id, receiveDelta, parentInfo);
    }
}

export class ItemUsage extends OccurrenceUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ItemUsage {
        return new ItemUsage(sysmlBase.INSTANCE.ItemUsage, id, receiveDelta, parentInfo);
    }
}

export class JoinNode extends ControlNode {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): JoinNode {
        return new JoinNode(sysmlBase.INSTANCE.JoinNode, id, receiveDelta, parentInfo);
    }
}

export class Package extends Namespace {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Package {
        return new Package(sysmlBase.INSTANCE.Package, id, receiveDelta, parentInfo);
    }
}

export class LibraryPackage extends Package {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): LibraryPackage {
        return new LibraryPackage(sysmlBase.INSTANCE.LibraryPackage, id, receiveDelta, parentInfo);
    }
}

export class LiteralExpression extends Expression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): LiteralExpression {
        return new LiteralExpression(sysmlBase.INSTANCE.LiteralExpression, id, receiveDelta, parentInfo);
    }
}

export class LiteralBoolean extends LiteralExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): LiteralBoolean {
        return new LiteralBoolean(sysmlBase.INSTANCE.LiteralBoolean, id, receiveDelta, parentInfo);
    }
}

export class LiteralInfinity extends LiteralExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): LiteralInfinity {
        return new LiteralInfinity(sysmlBase.INSTANCE.LiteralInfinity, id, receiveDelta, parentInfo);
    }
}

export class LiteralInteger extends LiteralExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): LiteralInteger {
        return new LiteralInteger(sysmlBase.INSTANCE.LiteralInteger, id, receiveDelta, parentInfo);
    }
}

export class LiteralRational extends LiteralExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): LiteralRational {
        return new LiteralRational(sysmlBase.INSTANCE.LiteralRational, id, receiveDelta, parentInfo);
    }
}

export class LiteralString extends LiteralExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): LiteralString {
        return new LiteralString(sysmlBase.INSTANCE.LiteralString, id, receiveDelta, parentInfo);
    }
}

export class MembershipImport extends Import {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): MembershipImport {
        return new MembershipImport(sysmlBase.INSTANCE.MembershipImport, id, receiveDelta, parentInfo);
    }
}

export class MembershipExpose extends MembershipImport {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): MembershipExpose {
        return new MembershipExpose(sysmlBase.INSTANCE.MembershipExpose, id, receiveDelta, parentInfo);
    }
}

export class MergeNode extends ControlNode {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): MergeNode {
        return new MergeNode(sysmlBase.INSTANCE.MergeNode, id, receiveDelta, parentInfo);
    }
}

export class Structure extends Class {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Structure {
        return new Structure(sysmlBase.INSTANCE.Structure, id, receiveDelta, parentInfo);
    }
}

export class Metaclass extends Structure {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Metaclass {
        return new Metaclass(sysmlBase.INSTANCE.Metaclass, id, receiveDelta, parentInfo);
    }
}

export class MetadataAccessExpression extends Expression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): MetadataAccessExpression {
        return new MetadataAccessExpression(sysmlBase.INSTANCE.MetadataAccessExpression, id, receiveDelta, parentInfo);
    }
}

export class MetadataDefinition extends ItemDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): MetadataDefinition {
        return new MetadataDefinition(sysmlBase.INSTANCE.MetadataDefinition, id, receiveDelta, parentInfo);
    }
}

export class MetadataFeature extends Feature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): MetadataFeature {
        return new MetadataFeature(sysmlBase.INSTANCE.MetadataFeature, id, receiveDelta, parentInfo);
    }
}

export class MetadataUsage extends ItemUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): MetadataUsage {
        return new MetadataUsage(sysmlBase.INSTANCE.MetadataUsage, id, receiveDelta, parentInfo);
    }
}

export class Multiplicity extends Feature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Multiplicity {
        return new Multiplicity(sysmlBase.INSTANCE.Multiplicity, id, receiveDelta, parentInfo);
    }
}

export class MultiplicityRange extends Multiplicity {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): MultiplicityRange {
        return new MultiplicityRange(sysmlBase.INSTANCE.MultiplicityRange, id, receiveDelta, parentInfo);
    }
}

export class NamespaceImport extends Import {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): NamespaceImport {
        return new NamespaceImport(sysmlBase.INSTANCE.NamespaceImport, id, receiveDelta, parentInfo);
    }
}

export class NamespaceExpose extends NamespaceImport {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): NamespaceExpose {
        return new NamespaceExpose(sysmlBase.INSTANCE.NamespaceExpose, id, receiveDelta, parentInfo);
    }
}

export class NullExpression extends Expression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): NullExpression {
        return new NullExpression(sysmlBase.INSTANCE.NullExpression, id, receiveDelta, parentInfo);
    }
}

export class ObjectiveMembership extends FeatureMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ObjectiveMembership {
        return new ObjectiveMembership(sysmlBase.INSTANCE.ObjectiveMembership, id, receiveDelta, parentInfo);
    }
}

export class PartUsage extends ItemUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): PartUsage {
        return new PartUsage(sysmlBase.INSTANCE.PartUsage, id, receiveDelta, parentInfo);
    }
}

export class PayloadFeature extends Feature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): PayloadFeature {
        return new PayloadFeature(sysmlBase.INSTANCE.PayloadFeature, id, receiveDelta, parentInfo);
    }
}

export class PerformActionUsage extends ActionUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): PerformActionUsage {
        return new PerformActionUsage(sysmlBase.INSTANCE.PerformActionUsage, id, receiveDelta, parentInfo);
    }
}

export class PortConjugation extends Conjugation {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): PortConjugation {
        return new PortConjugation(sysmlBase.INSTANCE.PortConjugation, id, receiveDelta, parentInfo);
    }
}

export class PortUsage extends OccurrenceUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): PortUsage {
        return new PortUsage(sysmlBase.INSTANCE.PortUsage, id, receiveDelta, parentInfo);
    }
}

export enum PortionKind {
    timeslice = "sysml-PortionKind-timeslice",
    snapshot = "sysml-PortionKind-snapshot"
}

export class Predicate extends Function {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Predicate {
        return new Predicate(sysmlBase.INSTANCE.Predicate, id, receiveDelta, parentInfo);
    }
}

export class Redefinition extends Subsetting {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Redefinition {
        return new Redefinition(sysmlBase.INSTANCE.Redefinition, id, receiveDelta, parentInfo);
    }
}

export class ReferenceSubsetting extends Subsetting {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ReferenceSubsetting {
        return new ReferenceSubsetting(sysmlBase.INSTANCE.ReferenceSubsetting, id, receiveDelta, parentInfo);
    }
}

export class ReferenceUsage extends Usage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ReferenceUsage {
        return new ReferenceUsage(sysmlBase.INSTANCE.ReferenceUsage, id, receiveDelta, parentInfo);
    }
}

export class RenderingDefinition extends PartDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): RenderingDefinition {
        return new RenderingDefinition(sysmlBase.INSTANCE.RenderingDefinition, id, receiveDelta, parentInfo);
    }
}

export class RenderingUsage extends PartUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): RenderingUsage {
        return new RenderingUsage(sysmlBase.INSTANCE.RenderingUsage, id, receiveDelta, parentInfo);
    }
}

export enum RequirementConstraintKind {
    assumption = "sysml-RequirementConstraintKind-assumption",
    requirement = "sysml-RequirementConstraintKind-requirement"
}

export class RequirementVerificationMembership extends RequirementConstraintMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): RequirementVerificationMembership {
        return new RequirementVerificationMembership(sysmlBase.INSTANCE.RequirementVerificationMembership, id, receiveDelta, parentInfo);
    }
}

export class ResultExpressionMembership extends FeatureMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ResultExpressionMembership {
        return new ResultExpressionMembership(sysmlBase.INSTANCE.ResultExpressionMembership, id, receiveDelta, parentInfo);
    }
}

export class ReturnParameterMembership extends ParameterMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ReturnParameterMembership {
        return new ReturnParameterMembership(sysmlBase.INSTANCE.ReturnParameterMembership, id, receiveDelta, parentInfo);
    }
}

export class SatisfyRequirementUsage extends RequirementUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): SatisfyRequirementUsage {
        return new SatisfyRequirementUsage(sysmlBase.INSTANCE.SatisfyRequirementUsage, id, receiveDelta, parentInfo);
    }
}

export class SelectExpression extends OperatorExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): SelectExpression {
        return new SelectExpression(sysmlBase.INSTANCE.SelectExpression, id, receiveDelta, parentInfo);
    }
}

export class SendActionUsage extends ActionUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): SendActionUsage {
        return new SendActionUsage(sysmlBase.INSTANCE.SendActionUsage, id, receiveDelta, parentInfo);
    }
}

export class StakeholderMembership extends ParameterMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): StakeholderMembership {
        return new StakeholderMembership(sysmlBase.INSTANCE.StakeholderMembership, id, receiveDelta, parentInfo);
    }
}

export class StateDefinition extends ActionDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): StateDefinition {
        return new StateDefinition(sysmlBase.INSTANCE.StateDefinition, id, receiveDelta, parentInfo);
    }
}

export enum StateSubactionKind {
    entry = "sysml-StateSubactionKind-entry",
    do = "sysml-StateSubactionKind-do",
    exit = "sysml-StateSubactionKind-exit"
}

export class StateSubactionMembership extends FeatureMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): StateSubactionMembership {
        return new StateSubactionMembership(sysmlBase.INSTANCE.StateSubactionMembership, id, receiveDelta, parentInfo);
    }
}

export class Subclassification extends Specialization {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Subclassification {
        return new Subclassification(sysmlBase.INSTANCE.Subclassification, id, receiveDelta, parentInfo);
    }
}

export class SubjectMembership extends ParameterMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): SubjectMembership {
        return new SubjectMembership(sysmlBase.INSTANCE.SubjectMembership, id, receiveDelta, parentInfo);
    }
}

export class Succession extends Connector {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Succession {
        return new Succession(sysmlBase.INSTANCE.Succession, id, receiveDelta, parentInfo);
    }
}

export class SuccessionAsUsage extends ConnectorAsUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): SuccessionAsUsage {
        return new SuccessionAsUsage(sysmlBase.INSTANCE.SuccessionAsUsage, id, receiveDelta, parentInfo);
    }
}

export class SuccessionFlow extends Flow {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): SuccessionFlow {
        return new SuccessionFlow(sysmlBase.INSTANCE.SuccessionFlow, id, receiveDelta, parentInfo);
    }
}

export class SuccessionFlowUsage extends FlowUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): SuccessionFlowUsage {
        return new SuccessionFlowUsage(sysmlBase.INSTANCE.SuccessionFlowUsage, id, receiveDelta, parentInfo);
    }
}

export class TerminateActionUsage extends ActionUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): TerminateActionUsage {
        return new TerminateActionUsage(sysmlBase.INSTANCE.TerminateActionUsage, id, receiveDelta, parentInfo);
    }
}

export class TextualRepresentation extends AnnotatingElement {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): TextualRepresentation {
        return new TextualRepresentation(sysmlBase.INSTANCE.TextualRepresentation, id, receiveDelta, parentInfo);
    }
}

export enum TransitionFeatureKind {
    trigger = "sysml-TransitionFeatureKind-trigger",
    guard = "sysml-TransitionFeatureKind-guard",
    effect = "sysml-TransitionFeatureKind-effect"
}

export class TransitionFeatureMembership extends FeatureMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): TransitionFeatureMembership {
        return new TransitionFeatureMembership(sysmlBase.INSTANCE.TransitionFeatureMembership, id, receiveDelta, parentInfo);
    }
}

export class TransitionUsage extends ActionUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): TransitionUsage {
        return new TransitionUsage(sysmlBase.INSTANCE.TransitionUsage, id, receiveDelta, parentInfo);
    }
}

export class TriggerInvocationExpression extends InvocationExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): TriggerInvocationExpression {
        return new TriggerInvocationExpression(sysmlBase.INSTANCE.TriggerInvocationExpression, id, receiveDelta, parentInfo);
    }
}

export enum TriggerKind {
    when = "sysml-TriggerKind-when",
    at = "sysml-TriggerKind-at",
    after = "sysml-TriggerKind-after"
}

export class TypeFeaturing extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): TypeFeaturing {
        return new TypeFeaturing(sysmlBase.INSTANCE.TypeFeaturing, id, receiveDelta, parentInfo);
    }
}

export class Unioning extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Unioning {
        return new Unioning(sysmlBase.INSTANCE.Unioning, id, receiveDelta, parentInfo);
    }
}

export class UseCaseDefinition extends CaseDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): UseCaseDefinition {
        return new UseCaseDefinition(sysmlBase.INSTANCE.UseCaseDefinition, id, receiveDelta, parentInfo);
    }
}

export class VariantMembership extends OwningMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): VariantMembership {
        return new VariantMembership(sysmlBase.INSTANCE.VariantMembership, id, receiveDelta, parentInfo);
    }
}

export class VerificationCaseDefinition extends CaseDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): VerificationCaseDefinition {
        return new VerificationCaseDefinition(sysmlBase.INSTANCE.VerificationCaseDefinition, id, receiveDelta, parentInfo);
    }
}

export class VerificationCaseUsage extends CaseUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): VerificationCaseUsage {
        return new VerificationCaseUsage(sysmlBase.INSTANCE.VerificationCaseUsage, id, receiveDelta, parentInfo);
    }
}

export class ViewDefinition extends PartDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ViewDefinition {
        return new ViewDefinition(sysmlBase.INSTANCE.ViewDefinition, id, receiveDelta, parentInfo);
    }
}

export class ViewRenderingMembership extends FeatureMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ViewRenderingMembership {
        return new ViewRenderingMembership(sysmlBase.INSTANCE.ViewRenderingMembership, id, receiveDelta, parentInfo);
    }
}

export class ViewUsage extends PartUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ViewUsage {
        return new ViewUsage(sysmlBase.INSTANCE.ViewUsage, id, receiveDelta, parentInfo);
    }
}

export class ViewpointDefinition extends RequirementDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ViewpointDefinition {
        return new ViewpointDefinition(sysmlBase.INSTANCE.ViewpointDefinition, id, receiveDelta, parentInfo);
    }
}

export class ViewpointUsage extends RequirementUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ViewpointUsage {
        return new ViewpointUsage(sysmlBase.INSTANCE.ViewpointUsage, id, receiveDelta, parentInfo);
    }
}

export enum VisibilityKind {
    private = "sysml-VisibilityKind-private",
    protected = "sysml-VisibilityKind-protected",
    public = "sysml-VisibilityKind-public"
}

export class WhileLoopActionUsage extends LoopActionUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): WhileLoopActionUsage {
        return new WhileLoopActionUsage(sysmlBase.INSTANCE.WhileLoopActionUsage, id, receiveDelta, parentInfo);
    }
}

