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
    private readonly _AcceptActionUsage_receiverArgument = new Containment(this._AcceptActionUsage, "receiverArgument", "sysml-AcceptActionUsage-receiverArgument", "sysml-AcceptActionUsage-receiverArgument").isMultiple();
    get AcceptActionUsage_receiverArgument(): Containment {
        this.ensureWiredUp();
        return this._AcceptActionUsage_receiverArgument;
    }
    private readonly _AcceptActionUsage_payloadParameter = new Containment(this._AcceptActionUsage, "payloadParameter", "sysml-AcceptActionUsage-payloadParameter", "sysml-AcceptActionUsage-payloadParameter").isMultiple();
    get AcceptActionUsage_payloadParameter(): Containment {
        this.ensureWiredUp();
        return this._AcceptActionUsage_payloadParameter;
    }
    private readonly _AcceptActionUsage_payloadArgument = new Containment(this._AcceptActionUsage, "payloadArgument", "sysml-AcceptActionUsage-payloadArgument", "sysml-AcceptActionUsage-payloadArgument").isMultiple();
    get AcceptActionUsage_payloadArgument(): Containment {
        this.ensureWiredUp();
        return this._AcceptActionUsage_payloadArgument;
    }

    public readonly _ActionDefinition = new Concept(this._language, "ActionDefinition", "sysml-ActionDefinition", "sysml-ActionDefinition", false);
    get ActionDefinition(): Concept {
        this.ensureWiredUp();
        return this._ActionDefinition;
    }
    private readonly _ActionDefinition_action = new Containment(this._ActionDefinition, "action", "sysml-ActionDefinition-action", "sysml-ActionDefinition-action").isMultiple();
    get ActionDefinition_action(): Containment {
        this.ensureWiredUp();
        return this._ActionDefinition_action;
    }

    public readonly _ActionUsage = new Concept(this._language, "ActionUsage", "sysml-ActionUsage", "sysml-ActionUsage", false);
    get ActionUsage(): Concept {
        this.ensureWiredUp();
        return this._ActionUsage;
    }
    private readonly _ActionUsage_actionDefinition = new Containment(this._ActionUsage, "actionDefinition", "sysml-ActionUsage-actionDefinition", "sysml-ActionUsage-actionDefinition").isMultiple();
    get ActionUsage_actionDefinition(): Containment {
        this.ensureWiredUp();
        return this._ActionUsage_actionDefinition;
    }

    public readonly _ActorMembership = new Concept(this._language, "ActorMembership", "sysml-ActorMembership", "sysml-ActorMembership", false);
    get ActorMembership(): Concept {
        this.ensureWiredUp();
        return this._ActorMembership;
    }
    private readonly _ActorMembership_ownedActorParameter = new Containment(this._ActorMembership, "ownedActorParameter", "sysml-ActorMembership-ownedActorParameter", "sysml-ActorMembership-ownedActorParameter").isMultiple();
    get ActorMembership_ownedActorParameter(): Containment {
        this.ensureWiredUp();
        return this._ActorMembership_ownedActorParameter;
    }

    public readonly _AllocationDefinition = new Concept(this._language, "AllocationDefinition", "sysml-AllocationDefinition", "sysml-AllocationDefinition", false);
    get AllocationDefinition(): Concept {
        this.ensureWiredUp();
        return this._AllocationDefinition;
    }
    private readonly _AllocationDefinition_allocation = new Containment(this._AllocationDefinition, "allocation", "sysml-AllocationDefinition-allocation", "sysml-AllocationDefinition-allocation").isMultiple();
    get AllocationDefinition_allocation(): Containment {
        this.ensureWiredUp();
        return this._AllocationDefinition_allocation;
    }

    public readonly _AllocationUsage = new Concept(this._language, "AllocationUsage", "sysml-AllocationUsage", "sysml-AllocationUsage", false);
    get AllocationUsage(): Concept {
        this.ensureWiredUp();
        return this._AllocationUsage;
    }
    private readonly _AllocationUsage_allocationDefinition = new Containment(this._AllocationUsage, "allocationDefinition", "sysml-AllocationUsage-allocationDefinition", "sysml-AllocationUsage-allocationDefinition").isMultiple();
    get AllocationUsage_allocationDefinition(): Containment {
        this.ensureWiredUp();
        return this._AllocationUsage_allocationDefinition;
    }

    public readonly _AnalysisCaseDefinition = new Concept(this._language, "AnalysisCaseDefinition", "sysml-AnalysisCaseDefinition", "sysml-AnalysisCaseDefinition", false);
    get AnalysisCaseDefinition(): Concept {
        this.ensureWiredUp();
        return this._AnalysisCaseDefinition;
    }
    private readonly _AnalysisCaseDefinition_resultExpression = new Containment(this._AnalysisCaseDefinition, "resultExpression", "sysml-AnalysisCaseDefinition-resultExpression", "sysml-AnalysisCaseDefinition-resultExpression").isMultiple();
    get AnalysisCaseDefinition_resultExpression(): Containment {
        this.ensureWiredUp();
        return this._AnalysisCaseDefinition_resultExpression;
    }

    public readonly _AnalysisCaseUsage = new Concept(this._language, "AnalysisCaseUsage", "sysml-AnalysisCaseUsage", "sysml-AnalysisCaseUsage", false);
    get AnalysisCaseUsage(): Concept {
        this.ensureWiredUp();
        return this._AnalysisCaseUsage;
    }
    private readonly _AnalysisCaseUsage_analysisCaseDefinition = new Containment(this._AnalysisCaseUsage, "analysisCaseDefinition", "sysml-AnalysisCaseUsage-analysisCaseDefinition", "sysml-AnalysisCaseUsage-analysisCaseDefinition").isMultiple();
    get AnalysisCaseUsage_analysisCaseDefinition(): Containment {
        this.ensureWiredUp();
        return this._AnalysisCaseUsage_analysisCaseDefinition;
    }
    private readonly _AnalysisCaseUsage_resultExpression = new Containment(this._AnalysisCaseUsage, "resultExpression", "sysml-AnalysisCaseUsage-resultExpression", "sysml-AnalysisCaseUsage-resultExpression").isMultiple();
    get AnalysisCaseUsage_resultExpression(): Containment {
        this.ensureWiredUp();
        return this._AnalysisCaseUsage_resultExpression;
    }

    public readonly _AnnotatingElement = new Concept(this._language, "AnnotatingElement", "sysml-AnnotatingElement", "sysml-AnnotatingElement", false);
    get AnnotatingElement(): Concept {
        this.ensureWiredUp();
        return this._AnnotatingElement;
    }
    private readonly _AnnotatingElement_annotatedElement = new Containment(this._AnnotatingElement, "annotatedElement", "sysml-AnnotatingElement-annotatedElement", "sysml-AnnotatingElement-annotatedElement").isMultiple();
    get AnnotatingElement_annotatedElement(): Containment {
        this.ensureWiredUp();
        return this._AnnotatingElement_annotatedElement;
    }
    private readonly _AnnotatingElement_ownedAnnotatingRelationship = new Containment(this._AnnotatingElement, "ownedAnnotatingRelationship", "sysml-AnnotatingElement-ownedAnnotatingRelationship", "sysml-AnnotatingElement-ownedAnnotatingRelationship").isMultiple();
    get AnnotatingElement_ownedAnnotatingRelationship(): Containment {
        this.ensureWiredUp();
        return this._AnnotatingElement_ownedAnnotatingRelationship;
    }
    private readonly _AnnotatingElement_annotation = new Containment(this._AnnotatingElement, "annotation", "sysml-AnnotatingElement-annotation", "sysml-AnnotatingElement-annotation").isMultiple();
    get AnnotatingElement_annotation(): Containment {
        this.ensureWiredUp();
        return this._AnnotatingElement_annotation;
    }
    private readonly _AnnotatingElement_owningAnnotatingRelationship = new Containment(this._AnnotatingElement, "owningAnnotatingRelationship", "sysml-AnnotatingElement-owningAnnotatingRelationship", "sysml-AnnotatingElement-owningAnnotatingRelationship").isMultiple();
    get AnnotatingElement_owningAnnotatingRelationship(): Containment {
        this.ensureWiredUp();
        return this._AnnotatingElement_owningAnnotatingRelationship;
    }

    public readonly _Annotation = new Concept(this._language, "Annotation", "sysml-Annotation", "sysml-Annotation", false);
    get Annotation(): Concept {
        this.ensureWiredUp();
        return this._Annotation;
    }
    private readonly _Annotation_annotatingElement = new Containment(this._Annotation, "annotatingElement", "sysml-Annotation-annotatingElement", "sysml-Annotation-annotatingElement").isMultiple();
    get Annotation_annotatingElement(): Containment {
        this.ensureWiredUp();
        return this._Annotation_annotatingElement;
    }
    private readonly _Annotation_annotatedElement = new Containment(this._Annotation, "annotatedElement", "sysml-Annotation-annotatedElement", "sysml-Annotation-annotatedElement").isMultiple();
    get Annotation_annotatedElement(): Containment {
        this.ensureWiredUp();
        return this._Annotation_annotatedElement;
    }
    private readonly _Annotation_owningAnnotatedElement = new Containment(this._Annotation, "owningAnnotatedElement", "sysml-Annotation-owningAnnotatedElement", "sysml-Annotation-owningAnnotatedElement").isMultiple();
    get Annotation_owningAnnotatedElement(): Containment {
        this.ensureWiredUp();
        return this._Annotation_owningAnnotatedElement;
    }
    private readonly _Annotation_ownedAnnotatingElement = new Containment(this._Annotation, "ownedAnnotatingElement", "sysml-Annotation-ownedAnnotatingElement", "sysml-Annotation-ownedAnnotatingElement").isMultiple();
    get Annotation_ownedAnnotatingElement(): Containment {
        this.ensureWiredUp();
        return this._Annotation_ownedAnnotatingElement;
    }
    private readonly _Annotation_owningAnnotatingElement = new Containment(this._Annotation, "owningAnnotatingElement", "sysml-Annotation-owningAnnotatingElement", "sysml-Annotation-owningAnnotatingElement").isMultiple();
    get Annotation_owningAnnotatingElement(): Containment {
        this.ensureWiredUp();
        return this._Annotation_owningAnnotatingElement;
    }

    public readonly _AssertConstraintUsage = new Concept(this._language, "AssertConstraintUsage", "sysml-AssertConstraintUsage", "sysml-AssertConstraintUsage", false);
    get AssertConstraintUsage(): Concept {
        this.ensureWiredUp();
        return this._AssertConstraintUsage;
    }
    private readonly _AssertConstraintUsage_assertedConstraint = new Containment(this._AssertConstraintUsage, "assertedConstraint", "sysml-AssertConstraintUsage-assertedConstraint", "sysml-AssertConstraintUsage-assertedConstraint").isMultiple();
    get AssertConstraintUsage_assertedConstraint(): Containment {
        this.ensureWiredUp();
        return this._AssertConstraintUsage_assertedConstraint;
    }

    public readonly _AssignmentActionUsage = new Concept(this._language, "AssignmentActionUsage", "sysml-AssignmentActionUsage", "sysml-AssignmentActionUsage", false);
    get AssignmentActionUsage(): Concept {
        this.ensureWiredUp();
        return this._AssignmentActionUsage;
    }
    private readonly _AssignmentActionUsage_targetArgument = new Containment(this._AssignmentActionUsage, "targetArgument", "sysml-AssignmentActionUsage-targetArgument", "sysml-AssignmentActionUsage-targetArgument").isMultiple();
    get AssignmentActionUsage_targetArgument(): Containment {
        this.ensureWiredUp();
        return this._AssignmentActionUsage_targetArgument;
    }
    private readonly _AssignmentActionUsage_valueExpression = new Containment(this._AssignmentActionUsage, "valueExpression", "sysml-AssignmentActionUsage-valueExpression", "sysml-AssignmentActionUsage-valueExpression").isMultiple();
    get AssignmentActionUsage_valueExpression(): Containment {
        this.ensureWiredUp();
        return this._AssignmentActionUsage_valueExpression;
    }
    private readonly _AssignmentActionUsage_referent = new Containment(this._AssignmentActionUsage, "referent", "sysml-AssignmentActionUsage-referent", "sysml-AssignmentActionUsage-referent").isMultiple();
    get AssignmentActionUsage_referent(): Containment {
        this.ensureWiredUp();
        return this._AssignmentActionUsage_referent;
    }

    public readonly _Association = new Concept(this._language, "Association", "sysml-Association", "sysml-Association", false);
    get Association(): Concept {
        this.ensureWiredUp();
        return this._Association;
    }
    private readonly _Association_relatedType = new Containment(this._Association, "relatedType", "sysml-Association-relatedType", "sysml-Association-relatedType").isMultiple();
    get Association_relatedType(): Containment {
        this.ensureWiredUp();
        return this._Association_relatedType;
    }
    private readonly _Association_sourceType = new Containment(this._Association, "sourceType", "sysml-Association-sourceType", "sysml-Association-sourceType").isMultiple();
    get Association_sourceType(): Containment {
        this.ensureWiredUp();
        return this._Association_sourceType;
    }
    private readonly _Association_targetType = new Containment(this._Association, "targetType", "sysml-Association-targetType", "sysml-Association-targetType").isMultiple();
    get Association_targetType(): Containment {
        this.ensureWiredUp();
        return this._Association_targetType;
    }
    private readonly _Association_associationEnd = new Containment(this._Association, "associationEnd", "sysml-Association-associationEnd", "sysml-Association-associationEnd").isMultiple();
    get Association_associationEnd(): Containment {
        this.ensureWiredUp();
        return this._Association_associationEnd;
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
    private readonly _AttributeUsage_attributeDefinition = new Containment(this._AttributeUsage, "attributeDefinition", "sysml-AttributeUsage-attributeDefinition", "sysml-AttributeUsage-attributeDefinition").isMultiple();
    get AttributeUsage_attributeDefinition(): Containment {
        this.ensureWiredUp();
        return this._AttributeUsage_attributeDefinition;
    }

    public readonly _Behavior = new Concept(this._language, "Behavior", "sysml-Behavior", "sysml-Behavior", false);
    get Behavior(): Concept {
        this.ensureWiredUp();
        return this._Behavior;
    }
    private readonly _Behavior_step = new Containment(this._Behavior, "step", "sysml-Behavior-step", "sysml-Behavior-step").isMultiple();
    get Behavior_step(): Containment {
        this.ensureWiredUp();
        return this._Behavior_step;
    }
    private readonly _Behavior_parameter = new Containment(this._Behavior, "parameter", "sysml-Behavior-parameter", "sysml-Behavior-parameter").isMultiple();
    get Behavior_parameter(): Containment {
        this.ensureWiredUp();
        return this._Behavior_parameter;
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
    private readonly _BooleanExpression_predicate = new Containment(this._BooleanExpression, "predicate", "sysml-BooleanExpression-predicate", "sysml-BooleanExpression-predicate").isMultiple();
    get BooleanExpression_predicate(): Containment {
        this.ensureWiredUp();
        return this._BooleanExpression_predicate;
    }

    public readonly _CalculationDefinition = new Concept(this._language, "CalculationDefinition", "sysml-CalculationDefinition", "sysml-CalculationDefinition", false);
    get CalculationDefinition(): Concept {
        this.ensureWiredUp();
        return this._CalculationDefinition;
    }
    private readonly _CalculationDefinition_calculation = new Containment(this._CalculationDefinition, "calculation", "sysml-CalculationDefinition-calculation", "sysml-CalculationDefinition-calculation").isMultiple();
    get CalculationDefinition_calculation(): Containment {
        this.ensureWiredUp();
        return this._CalculationDefinition_calculation;
    }

    public readonly _CalculationUsage = new Concept(this._language, "CalculationUsage", "sysml-CalculationUsage", "sysml-CalculationUsage", false);
    get CalculationUsage(): Concept {
        this.ensureWiredUp();
        return this._CalculationUsage;
    }
    private readonly _CalculationUsage_calculationDefinition = new Containment(this._CalculationUsage, "calculationDefinition", "sysml-CalculationUsage-calculationDefinition", "sysml-CalculationUsage-calculationDefinition").isMultiple();
    get CalculationUsage_calculationDefinition(): Containment {
        this.ensureWiredUp();
        return this._CalculationUsage_calculationDefinition;
    }

    public readonly _CaseDefinition = new Concept(this._language, "CaseDefinition", "sysml-CaseDefinition", "sysml-CaseDefinition", false);
    get CaseDefinition(): Concept {
        this.ensureWiredUp();
        return this._CaseDefinition;
    }
    private readonly _CaseDefinition_objectiveRequirement = new Containment(this._CaseDefinition, "objectiveRequirement", "sysml-CaseDefinition-objectiveRequirement", "sysml-CaseDefinition-objectiveRequirement").isMultiple();
    get CaseDefinition_objectiveRequirement(): Containment {
        this.ensureWiredUp();
        return this._CaseDefinition_objectiveRequirement;
    }
    private readonly _CaseDefinition_subjectParameter = new Containment(this._CaseDefinition, "subjectParameter", "sysml-CaseDefinition-subjectParameter", "sysml-CaseDefinition-subjectParameter").isMultiple();
    get CaseDefinition_subjectParameter(): Containment {
        this.ensureWiredUp();
        return this._CaseDefinition_subjectParameter;
    }
    private readonly _CaseDefinition_actorParameter = new Containment(this._CaseDefinition, "actorParameter", "sysml-CaseDefinition-actorParameter", "sysml-CaseDefinition-actorParameter").isMultiple();
    get CaseDefinition_actorParameter(): Containment {
        this.ensureWiredUp();
        return this._CaseDefinition_actorParameter;
    }

    public readonly _CaseUsage = new Concept(this._language, "CaseUsage", "sysml-CaseUsage", "sysml-CaseUsage", false);
    get CaseUsage(): Concept {
        this.ensureWiredUp();
        return this._CaseUsage;
    }
    private readonly _CaseUsage_objectiveRequirement = new Containment(this._CaseUsage, "objectiveRequirement", "sysml-CaseUsage-objectiveRequirement", "sysml-CaseUsage-objectiveRequirement").isMultiple();
    get CaseUsage_objectiveRequirement(): Containment {
        this.ensureWiredUp();
        return this._CaseUsage_objectiveRequirement;
    }
    private readonly _CaseUsage_caseDefinition = new Containment(this._CaseUsage, "caseDefinition", "sysml-CaseUsage-caseDefinition", "sysml-CaseUsage-caseDefinition").isMultiple();
    get CaseUsage_caseDefinition(): Containment {
        this.ensureWiredUp();
        return this._CaseUsage_caseDefinition;
    }
    private readonly _CaseUsage_subjectParameter = new Containment(this._CaseUsage, "subjectParameter", "sysml-CaseUsage-subjectParameter", "sysml-CaseUsage-subjectParameter").isMultiple();
    get CaseUsage_subjectParameter(): Containment {
        this.ensureWiredUp();
        return this._CaseUsage_subjectParameter;
    }
    private readonly _CaseUsage_actorParameter = new Containment(this._CaseUsage, "actorParameter", "sysml-CaseUsage-actorParameter", "sysml-CaseUsage-actorParameter").isMultiple();
    get CaseUsage_actorParameter(): Containment {
        this.ensureWiredUp();
        return this._CaseUsage_actorParameter;
    }

    public readonly _Class = new Concept(this._language, "Class", "sysml-Class", "sysml-Class", false);
    get Class(): Concept {
        this.ensureWiredUp();
        return this._Class;
    }

    public readonly _sysmlClassifier = new Concept(this._language, "sysmlClassifier", "sysml-sysmlClassifier", "sysml-sysmlClassifier", false);
    get sysmlClassifier(): Concept {
        this.ensureWiredUp();
        return this._sysmlClassifier;
    }
    private readonly _sysmlClassifier_ownedSubclassification = new Containment(this._sysmlClassifier, "ownedSubclassification", "sysml-sysmlClassifier-ownedSubclassification", "sysml-sysmlClassifier-ownedSubclassification").isMultiple();
    get sysmlClassifier_ownedSubclassification(): Containment {
        this.ensureWiredUp();
        return this._sysmlClassifier_ownedSubclassification;
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
    private readonly _Comment_locale = new Property(this._Comment, "locale", "sysml-Comment-locale", "sysml-Comment-locale");
    get Comment_locale(): Property {
        this.ensureWiredUp();
        return this._Comment_locale;
    }
    private readonly _Comment_body = new Property(this._Comment, "body", "sysml-Comment-body", "sysml-Comment-body");
    get Comment_body(): Property {
        this.ensureWiredUp();
        return this._Comment_body;
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
    private readonly _ConcernUsage_concernDefinition = new Containment(this._ConcernUsage, "concernDefinition", "sysml-ConcernUsage-concernDefinition", "sysml-ConcernUsage-concernDefinition").isMultiple();
    get ConcernUsage_concernDefinition(): Containment {
        this.ensureWiredUp();
        return this._ConcernUsage_concernDefinition;
    }

    public readonly _ConjugatedPortDefinition = new Concept(this._language, "ConjugatedPortDefinition", "sysml-ConjugatedPortDefinition", "sysml-ConjugatedPortDefinition", false);
    get ConjugatedPortDefinition(): Concept {
        this.ensureWiredUp();
        return this._ConjugatedPortDefinition;
    }
    private readonly _ConjugatedPortDefinition_ownedPortConjugator = new Containment(this._ConjugatedPortDefinition, "ownedPortConjugator", "sysml-ConjugatedPortDefinition-ownedPortConjugator", "sysml-ConjugatedPortDefinition-ownedPortConjugator").isMultiple();
    get ConjugatedPortDefinition_ownedPortConjugator(): Containment {
        this.ensureWiredUp();
        return this._ConjugatedPortDefinition_ownedPortConjugator;
    }
    private readonly _ConjugatedPortDefinition_originalPortDefinition = new Containment(this._ConjugatedPortDefinition, "originalPortDefinition", "sysml-ConjugatedPortDefinition-originalPortDefinition", "sysml-ConjugatedPortDefinition-originalPortDefinition").isMultiple();
    get ConjugatedPortDefinition_originalPortDefinition(): Containment {
        this.ensureWiredUp();
        return this._ConjugatedPortDefinition_originalPortDefinition;
    }

    public readonly _ConjugatedPortTyping = new Concept(this._language, "ConjugatedPortTyping", "sysml-ConjugatedPortTyping", "sysml-ConjugatedPortTyping", false);
    get ConjugatedPortTyping(): Concept {
        this.ensureWiredUp();
        return this._ConjugatedPortTyping;
    }
    private readonly _ConjugatedPortTyping_portDefinition = new Containment(this._ConjugatedPortTyping, "portDefinition", "sysml-ConjugatedPortTyping-portDefinition", "sysml-ConjugatedPortTyping-portDefinition").isMultiple();
    get ConjugatedPortTyping_portDefinition(): Containment {
        this.ensureWiredUp();
        return this._ConjugatedPortTyping_portDefinition;
    }
    private readonly _ConjugatedPortTyping_conjugatedPortDefinition = new Containment(this._ConjugatedPortTyping, "conjugatedPortDefinition", "sysml-ConjugatedPortTyping-conjugatedPortDefinition", "sysml-ConjugatedPortTyping-conjugatedPortDefinition").isMultiple();
    get ConjugatedPortTyping_conjugatedPortDefinition(): Containment {
        this.ensureWiredUp();
        return this._ConjugatedPortTyping_conjugatedPortDefinition;
    }

    public readonly _Conjugation = new Concept(this._language, "Conjugation", "sysml-Conjugation", "sysml-Conjugation", false);
    get Conjugation(): Concept {
        this.ensureWiredUp();
        return this._Conjugation;
    }
    private readonly _Conjugation_originalType = new Containment(this._Conjugation, "originalType", "sysml-Conjugation-originalType", "sysml-Conjugation-originalType").isMultiple();
    get Conjugation_originalType(): Containment {
        this.ensureWiredUp();
        return this._Conjugation_originalType;
    }
    private readonly _Conjugation_conjugatedType = new Containment(this._Conjugation, "conjugatedType", "sysml-Conjugation-conjugatedType", "sysml-Conjugation-conjugatedType").isMultiple();
    get Conjugation_conjugatedType(): Containment {
        this.ensureWiredUp();
        return this._Conjugation_conjugatedType;
    }
    private readonly _Conjugation_owningType = new Containment(this._Conjugation, "owningType", "sysml-Conjugation-owningType", "sysml-Conjugation-owningType").isMultiple();
    get Conjugation_owningType(): Containment {
        this.ensureWiredUp();
        return this._Conjugation_owningType;
    }

    public readonly _ConnectionDefinition = new Concept(this._language, "ConnectionDefinition", "sysml-ConnectionDefinition", "sysml-ConnectionDefinition", false);
    get ConnectionDefinition(): Concept {
        this.ensureWiredUp();
        return this._ConnectionDefinition;
    }
    private readonly _ConnectionDefinition_connectionEnd = new Containment(this._ConnectionDefinition, "connectionEnd", "sysml-ConnectionDefinition-connectionEnd", "sysml-ConnectionDefinition-connectionEnd").isMultiple();
    get ConnectionDefinition_connectionEnd(): Containment {
        this.ensureWiredUp();
        return this._ConnectionDefinition_connectionEnd;
    }

    public readonly _ConnectionUsage = new Concept(this._language, "ConnectionUsage", "sysml-ConnectionUsage", "sysml-ConnectionUsage", false);
    get ConnectionUsage(): Concept {
        this.ensureWiredUp();
        return this._ConnectionUsage;
    }
    private readonly _ConnectionUsage_connectionDefinition = new Containment(this._ConnectionUsage, "connectionDefinition", "sysml-ConnectionUsage-connectionDefinition", "sysml-ConnectionUsage-connectionDefinition").isMultiple();
    get ConnectionUsage_connectionDefinition(): Containment {
        this.ensureWiredUp();
        return this._ConnectionUsage_connectionDefinition;
    }

    public readonly _Connector = new Concept(this._language, "Connector", "sysml-Connector", "sysml-Connector", false);
    get Connector(): Concept {
        this.ensureWiredUp();
        return this._Connector;
    }
    private readonly _Connector_relatedFeature = new Containment(this._Connector, "relatedFeature", "sysml-Connector-relatedFeature", "sysml-Connector-relatedFeature").isMultiple();
    get Connector_relatedFeature(): Containment {
        this.ensureWiredUp();
        return this._Connector_relatedFeature;
    }
    private readonly _Connector_association = new Containment(this._Connector, "association", "sysml-Connector-association", "sysml-Connector-association").isMultiple();
    get Connector_association(): Containment {
        this.ensureWiredUp();
        return this._Connector_association;
    }
    private readonly _Connector_connectorEnd = new Containment(this._Connector, "connectorEnd", "sysml-Connector-connectorEnd", "sysml-Connector-connectorEnd").isMultiple();
    get Connector_connectorEnd(): Containment {
        this.ensureWiredUp();
        return this._Connector_connectorEnd;
    }
    private readonly _Connector_sourceFeature = new Containment(this._Connector, "sourceFeature", "sysml-Connector-sourceFeature", "sysml-Connector-sourceFeature").isMultiple();
    get Connector_sourceFeature(): Containment {
        this.ensureWiredUp();
        return this._Connector_sourceFeature;
    }
    private readonly _Connector_targetFeature = new Containment(this._Connector, "targetFeature", "sysml-Connector-targetFeature", "sysml-Connector-targetFeature").isMultiple();
    get Connector_targetFeature(): Containment {
        this.ensureWiredUp();
        return this._Connector_targetFeature;
    }
    private readonly _Connector_defaultFeaturingType = new Containment(this._Connector, "defaultFeaturingType", "sysml-Connector-defaultFeaturingType", "sysml-Connector-defaultFeaturingType").isMultiple();
    get Connector_defaultFeaturingType(): Containment {
        this.ensureWiredUp();
        return this._Connector_defaultFeaturingType;
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
    private readonly _ConstraintUsage_constraintDefinition = new Containment(this._ConstraintUsage, "constraintDefinition", "sysml-ConstraintUsage-constraintDefinition", "sysml-ConstraintUsage-constraintDefinition").isMultiple();
    get ConstraintUsage_constraintDefinition(): Containment {
        this.ensureWiredUp();
        return this._ConstraintUsage_constraintDefinition;
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
    private readonly _CrossSubsetting_crossedFeature = new Containment(this._CrossSubsetting, "crossedFeature", "sysml-CrossSubsetting-crossedFeature", "sysml-CrossSubsetting-crossedFeature").isMultiple();
    get CrossSubsetting_crossedFeature(): Containment {
        this.ensureWiredUp();
        return this._CrossSubsetting_crossedFeature;
    }
    private readonly _CrossSubsetting_crossingFeature = new Containment(this._CrossSubsetting, "crossingFeature", "sysml-CrossSubsetting-crossingFeature", "sysml-CrossSubsetting-crossingFeature").isMultiple();
    get CrossSubsetting_crossingFeature(): Containment {
        this.ensureWiredUp();
        return this._CrossSubsetting_crossingFeature;
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
    private readonly _Definition_isVariation = new Property(this._Definition, "isVariation", "sysml-Definition-isVariation", "sysml-Definition-isVariation");
    get Definition_isVariation(): Property {
        this.ensureWiredUp();
        return this._Definition_isVariation;
    }
    private readonly _Definition_variant = new Containment(this._Definition, "variant", "sysml-Definition-variant", "sysml-Definition-variant").isMultiple();
    get Definition_variant(): Containment {
        this.ensureWiredUp();
        return this._Definition_variant;
    }
    private readonly _Definition_variantMembership = new Containment(this._Definition, "variantMembership", "sysml-Definition-variantMembership", "sysml-Definition-variantMembership").isMultiple();
    get Definition_variantMembership(): Containment {
        this.ensureWiredUp();
        return this._Definition_variantMembership;
    }
    private readonly _Definition_usage = new Containment(this._Definition, "usage", "sysml-Definition-usage", "sysml-Definition-usage").isMultiple();
    get Definition_usage(): Containment {
        this.ensureWiredUp();
        return this._Definition_usage;
    }
    private readonly _Definition_directedUsage = new Containment(this._Definition, "directedUsage", "sysml-Definition-directedUsage", "sysml-Definition-directedUsage").isMultiple();
    get Definition_directedUsage(): Containment {
        this.ensureWiredUp();
        return this._Definition_directedUsage;
    }
    private readonly _Definition_ownedReference = new Containment(this._Definition, "ownedReference", "sysml-Definition-ownedReference", "sysml-Definition-ownedReference").isMultiple();
    get Definition_ownedReference(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedReference;
    }
    private readonly _Definition_ownedAttribute = new Containment(this._Definition, "ownedAttribute", "sysml-Definition-ownedAttribute", "sysml-Definition-ownedAttribute").isMultiple();
    get Definition_ownedAttribute(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedAttribute;
    }
    private readonly _Definition_ownedEnumeration = new Containment(this._Definition, "ownedEnumeration", "sysml-Definition-ownedEnumeration", "sysml-Definition-ownedEnumeration").isMultiple();
    get Definition_ownedEnumeration(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedEnumeration;
    }
    private readonly _Definition_ownedOccurrence = new Containment(this._Definition, "ownedOccurrence", "sysml-Definition-ownedOccurrence", "sysml-Definition-ownedOccurrence").isMultiple();
    get Definition_ownedOccurrence(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedOccurrence;
    }
    private readonly _Definition_ownedItem = new Containment(this._Definition, "ownedItem", "sysml-Definition-ownedItem", "sysml-Definition-ownedItem").isMultiple();
    get Definition_ownedItem(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedItem;
    }
    private readonly _Definition_ownedPart = new Containment(this._Definition, "ownedPart", "sysml-Definition-ownedPart", "sysml-Definition-ownedPart").isMultiple();
    get Definition_ownedPart(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedPart;
    }
    private readonly _Definition_ownedPort = new Containment(this._Definition, "ownedPort", "sysml-Definition-ownedPort", "sysml-Definition-ownedPort").isMultiple();
    get Definition_ownedPort(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedPort;
    }
    private readonly _Definition_ownedConnection = new Containment(this._Definition, "ownedConnection", "sysml-Definition-ownedConnection", "sysml-Definition-ownedConnection").isMultiple();
    get Definition_ownedConnection(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedConnection;
    }
    private readonly _Definition_ownedFlow = new Containment(this._Definition, "ownedFlow", "sysml-Definition-ownedFlow", "sysml-Definition-ownedFlow").isMultiple();
    get Definition_ownedFlow(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedFlow;
    }
    private readonly _Definition_ownedInterface = new Containment(this._Definition, "ownedInterface", "sysml-Definition-ownedInterface", "sysml-Definition-ownedInterface").isMultiple();
    get Definition_ownedInterface(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedInterface;
    }
    private readonly _Definition_ownedAllocation = new Containment(this._Definition, "ownedAllocation", "sysml-Definition-ownedAllocation", "sysml-Definition-ownedAllocation").isMultiple();
    get Definition_ownedAllocation(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedAllocation;
    }
    private readonly _Definition_ownedAction = new Containment(this._Definition, "ownedAction", "sysml-Definition-ownedAction", "sysml-Definition-ownedAction").isMultiple();
    get Definition_ownedAction(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedAction;
    }
    private readonly _Definition_ownedState = new Containment(this._Definition, "ownedState", "sysml-Definition-ownedState", "sysml-Definition-ownedState").isMultiple();
    get Definition_ownedState(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedState;
    }
    private readonly _Definition_ownedTransition = new Containment(this._Definition, "ownedTransition", "sysml-Definition-ownedTransition", "sysml-Definition-ownedTransition").isMultiple();
    get Definition_ownedTransition(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedTransition;
    }
    private readonly _Definition_ownedCalculation = new Containment(this._Definition, "ownedCalculation", "sysml-Definition-ownedCalculation", "sysml-Definition-ownedCalculation").isMultiple();
    get Definition_ownedCalculation(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedCalculation;
    }
    private readonly _Definition_ownedConstraint = new Containment(this._Definition, "ownedConstraint", "sysml-Definition-ownedConstraint", "sysml-Definition-ownedConstraint").isMultiple();
    get Definition_ownedConstraint(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedConstraint;
    }
    private readonly _Definition_ownedRequirement = new Containment(this._Definition, "ownedRequirement", "sysml-Definition-ownedRequirement", "sysml-Definition-ownedRequirement").isMultiple();
    get Definition_ownedRequirement(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedRequirement;
    }
    private readonly _Definition_ownedConcern = new Containment(this._Definition, "ownedConcern", "sysml-Definition-ownedConcern", "sysml-Definition-ownedConcern").isMultiple();
    get Definition_ownedConcern(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedConcern;
    }
    private readonly _Definition_ownedCase = new Containment(this._Definition, "ownedCase", "sysml-Definition-ownedCase", "sysml-Definition-ownedCase").isMultiple();
    get Definition_ownedCase(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedCase;
    }
    private readonly _Definition_ownedAnalysisCase = new Containment(this._Definition, "ownedAnalysisCase", "sysml-Definition-ownedAnalysisCase", "sysml-Definition-ownedAnalysisCase").isMultiple();
    get Definition_ownedAnalysisCase(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedAnalysisCase;
    }
    private readonly _Definition_ownedVerificationCase = new Containment(this._Definition, "ownedVerificationCase", "sysml-Definition-ownedVerificationCase", "sysml-Definition-ownedVerificationCase").isMultiple();
    get Definition_ownedVerificationCase(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedVerificationCase;
    }
    private readonly _Definition_ownedUseCase = new Containment(this._Definition, "ownedUseCase", "sysml-Definition-ownedUseCase", "sysml-Definition-ownedUseCase").isMultiple();
    get Definition_ownedUseCase(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedUseCase;
    }
    private readonly _Definition_ownedView = new Containment(this._Definition, "ownedView", "sysml-Definition-ownedView", "sysml-Definition-ownedView").isMultiple();
    get Definition_ownedView(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedView;
    }
    private readonly _Definition_ownedViewpoint = new Containment(this._Definition, "ownedViewpoint", "sysml-Definition-ownedViewpoint", "sysml-Definition-ownedViewpoint").isMultiple();
    get Definition_ownedViewpoint(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedViewpoint;
    }
    private readonly _Definition_ownedRendering = new Containment(this._Definition, "ownedRendering", "sysml-Definition-ownedRendering", "sysml-Definition-ownedRendering").isMultiple();
    get Definition_ownedRendering(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedRendering;
    }
    private readonly _Definition_ownedMetadata = new Containment(this._Definition, "ownedMetadata", "sysml-Definition-ownedMetadata", "sysml-Definition-ownedMetadata").isMultiple();
    get Definition_ownedMetadata(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedMetadata;
    }
    private readonly _Definition_ownedUsage = new Containment(this._Definition, "ownedUsage", "sysml-Definition-ownedUsage", "sysml-Definition-ownedUsage").isMultiple();
    get Definition_ownedUsage(): Containment {
        this.ensureWiredUp();
        return this._Definition_ownedUsage;
    }

    public readonly _Dependency = new Concept(this._language, "Dependency", "sysml-Dependency", "sysml-Dependency", false);
    get Dependency(): Concept {
        this.ensureWiredUp();
        return this._Dependency;
    }
    private readonly _Dependency_client = new Containment(this._Dependency, "client", "sysml-Dependency-client", "sysml-Dependency-client").isMultiple();
    get Dependency_client(): Containment {
        this.ensureWiredUp();
        return this._Dependency_client;
    }
    private readonly _Dependency_supplier = new Containment(this._Dependency, "supplier", "sysml-Dependency-supplier", "sysml-Dependency-supplier").isMultiple();
    get Dependency_supplier(): Containment {
        this.ensureWiredUp();
        return this._Dependency_supplier;
    }

    public readonly _Differencing = new Concept(this._language, "Differencing", "sysml-Differencing", "sysml-Differencing", false);
    get Differencing(): Concept {
        this.ensureWiredUp();
        return this._Differencing;
    }
    private readonly _Differencing_differencingType = new Containment(this._Differencing, "differencingType", "sysml-Differencing-differencingType", "sysml-Differencing-differencingType").isMultiple();
    get Differencing_differencingType(): Containment {
        this.ensureWiredUp();
        return this._Differencing_differencingType;
    }
    private readonly _Differencing_typeDifferenced = new Containment(this._Differencing, "typeDifferenced", "sysml-Differencing-typeDifferenced", "sysml-Differencing-typeDifferenced").isMultiple();
    get Differencing_typeDifferenced(): Containment {
        this.ensureWiredUp();
        return this._Differencing_typeDifferenced;
    }

    public readonly _Disjoining = new Concept(this._language, "Disjoining", "sysml-Disjoining", "sysml-Disjoining", false);
    get Disjoining(): Concept {
        this.ensureWiredUp();
        return this._Disjoining;
    }
    private readonly _Disjoining_typeDisjoined = new Containment(this._Disjoining, "typeDisjoined", "sysml-Disjoining-typeDisjoined", "sysml-Disjoining-typeDisjoined").isMultiple();
    get Disjoining_typeDisjoined(): Containment {
        this.ensureWiredUp();
        return this._Disjoining_typeDisjoined;
    }
    private readonly _Disjoining_disjoiningType = new Containment(this._Disjoining, "disjoiningType", "sysml-Disjoining-disjoiningType", "sysml-Disjoining-disjoiningType").isMultiple();
    get Disjoining_disjoiningType(): Containment {
        this.ensureWiredUp();
        return this._Disjoining_disjoiningType;
    }
    private readonly _Disjoining_owningType = new Containment(this._Disjoining, "owningType", "sysml-Disjoining-owningType", "sysml-Disjoining-owningType").isMultiple();
    get Disjoining_owningType(): Containment {
        this.ensureWiredUp();
        return this._Disjoining_owningType;
    }

    public readonly _Documentation = new Concept(this._language, "Documentation", "sysml-Documentation", "sysml-Documentation", false);
    get Documentation(): Concept {
        this.ensureWiredUp();
        return this._Documentation;
    }
    private readonly _Documentation_documentedElement = new Containment(this._Documentation, "documentedElement", "sysml-Documentation-documentedElement", "sysml-Documentation-documentedElement").isMultiple();
    get Documentation_documentedElement(): Containment {
        this.ensureWiredUp();
        return this._Documentation_documentedElement;
    }

    public readonly _Element = new Concept(this._language, "Element", "sysml-Element", "sysml-Element", true);
    get Element(): Concept {
        this.ensureWiredUp();
        return this._Element;
    }
    private readonly _Element_owningMembership = new Containment(this._Element, "owningMembership", "sysml-Element-owningMembership", "sysml-Element-owningMembership").isMultiple();
    get Element_owningMembership(): Containment {
        this.ensureWiredUp();
        return this._Element_owningMembership;
    }
    private readonly _Element_ownedRelationship = new Containment(this._Element, "ownedRelationship", "sysml-Element-ownedRelationship", "sysml-Element-ownedRelationship").isMultiple();
    get Element_ownedRelationship(): Containment {
        this.ensureWiredUp();
        return this._Element_ownedRelationship;
    }
    private readonly _Element_owningRelationship = new Containment(this._Element, "owningRelationship", "sysml-Element-owningRelationship", "sysml-Element-owningRelationship").isMultiple();
    get Element_owningRelationship(): Containment {
        this.ensureWiredUp();
        return this._Element_owningRelationship;
    }
    private readonly _Element_owningNamespace = new Containment(this._Element, "owningNamespace", "sysml-Element-owningNamespace", "sysml-Element-owningNamespace").isMultiple();
    get Element_owningNamespace(): Containment {
        this.ensureWiredUp();
        return this._Element_owningNamespace;
    }
    private readonly _Element_elementId = new Property(this._Element, "elementId", "sysml-Element-elementId", "sysml-Element-elementId");
    get Element_elementId(): Property {
        this.ensureWiredUp();
        return this._Element_elementId;
    }
    private readonly _Element_owner = new Containment(this._Element, "owner", "sysml-Element-owner", "sysml-Element-owner").isMultiple();
    get Element_owner(): Containment {
        this.ensureWiredUp();
        return this._Element_owner;
    }
    private readonly _Element_ownedElement = new Containment(this._Element, "ownedElement", "sysml-Element-ownedElement", "sysml-Element-ownedElement").isMultiple();
    get Element_ownedElement(): Containment {
        this.ensureWiredUp();
        return this._Element_ownedElement;
    }
    private readonly _Element_documentation = new Containment(this._Element, "documentation", "sysml-Element-documentation", "sysml-Element-documentation").isMultiple();
    get Element_documentation(): Containment {
        this.ensureWiredUp();
        return this._Element_documentation;
    }
    private readonly _Element_ownedAnnotation = new Containment(this._Element, "ownedAnnotation", "sysml-Element-ownedAnnotation", "sysml-Element-ownedAnnotation").isMultiple();
    get Element_ownedAnnotation(): Containment {
        this.ensureWiredUp();
        return this._Element_ownedAnnotation;
    }
    private readonly _Element_textualRepresentation = new Containment(this._Element, "textualRepresentation", "sysml-Element-textualRepresentation", "sysml-Element-textualRepresentation").isMultiple();
    get Element_textualRepresentation(): Containment {
        this.ensureWiredUp();
        return this._Element_textualRepresentation;
    }
    private readonly _Element_aliasIds = new Property(this._Element, "aliasIds", "sysml-Element-aliasIds", "sysml-Element-aliasIds");
    get Element_aliasIds(): Property {
        this.ensureWiredUp();
        return this._Element_aliasIds;
    }
    private readonly _Element_declaredShortName = new Property(this._Element, "declaredShortName", "sysml-Element-declaredShortName", "sysml-Element-declaredShortName");
    get Element_declaredShortName(): Property {
        this.ensureWiredUp();
        return this._Element_declaredShortName;
    }
    private readonly _Element_declaredName = new Property(this._Element, "declaredName", "sysml-Element-declaredName", "sysml-Element-declaredName");
    get Element_declaredName(): Property {
        this.ensureWiredUp();
        return this._Element_declaredName;
    }
    private readonly _Element_shortName = new Property(this._Element, "shortName", "sysml-Element-shortName", "sysml-Element-shortName");
    get Element_shortName(): Property {
        this.ensureWiredUp();
        return this._Element_shortName;
    }
    private readonly _Element_name = new Property(this._Element, "name", "sysml-Element-name", "sysml-Element-name");
    get Element_name(): Property {
        this.ensureWiredUp();
        return this._Element_name;
    }
    private readonly _Element_qualifiedName = new Property(this._Element, "qualifiedName", "sysml-Element-qualifiedName", "sysml-Element-qualifiedName");
    get Element_qualifiedName(): Property {
        this.ensureWiredUp();
        return this._Element_qualifiedName;
    }
    private readonly _Element_isImpliedIncluded = new Property(this._Element, "isImpliedIncluded", "sysml-Element-isImpliedIncluded", "sysml-Element-isImpliedIncluded");
    get Element_isImpliedIncluded(): Property {
        this.ensureWiredUp();
        return this._Element_isImpliedIncluded;
    }
    private readonly _Element_isLibraryElement = new Property(this._Element, "isLibraryElement", "sysml-Element-isLibraryElement", "sysml-Element-isLibraryElement");
    get Element_isLibraryElement(): Property {
        this.ensureWiredUp();
        return this._Element_isLibraryElement;
    }

    public readonly _ElementFilterMembership = new Concept(this._language, "ElementFilterMembership", "sysml-ElementFilterMembership", "sysml-ElementFilterMembership", false);
    get ElementFilterMembership(): Concept {
        this.ensureWiredUp();
        return this._ElementFilterMembership;
    }
    private readonly _ElementFilterMembership_condition = new Containment(this._ElementFilterMembership, "condition", "sysml-ElementFilterMembership-condition", "sysml-ElementFilterMembership-condition").isMultiple();
    get ElementFilterMembership_condition(): Containment {
        this.ensureWiredUp();
        return this._ElementFilterMembership_condition;
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
    private readonly _EnumerationDefinition_enumeratedValue = new Containment(this._EnumerationDefinition, "enumeratedValue", "sysml-EnumerationDefinition-enumeratedValue", "sysml-EnumerationDefinition-enumeratedValue").isMultiple();
    get EnumerationDefinition_enumeratedValue(): Containment {
        this.ensureWiredUp();
        return this._EnumerationDefinition_enumeratedValue;
    }

    public readonly _EnumerationUsage = new Concept(this._language, "EnumerationUsage", "sysml-EnumerationUsage", "sysml-EnumerationUsage", false);
    get EnumerationUsage(): Concept {
        this.ensureWiredUp();
        return this._EnumerationUsage;
    }
    private readonly _EnumerationUsage_enumerationDefinition = new Containment(this._EnumerationUsage, "enumerationDefinition", "sysml-EnumerationUsage-enumerationDefinition", "sysml-EnumerationUsage-enumerationDefinition").isMultiple();
    get EnumerationUsage_enumerationDefinition(): Containment {
        this.ensureWiredUp();
        return this._EnumerationUsage_enumerationDefinition;
    }

    public readonly _EventOccurrenceUsage = new Concept(this._language, "EventOccurrenceUsage", "sysml-EventOccurrenceUsage", "sysml-EventOccurrenceUsage", false);
    get EventOccurrenceUsage(): Concept {
        this.ensureWiredUp();
        return this._EventOccurrenceUsage;
    }
    private readonly _EventOccurrenceUsage_eventOccurrence = new Containment(this._EventOccurrenceUsage, "eventOccurrence", "sysml-EventOccurrenceUsage-eventOccurrence", "sysml-EventOccurrenceUsage-eventOccurrence").isMultiple();
    get EventOccurrenceUsage_eventOccurrence(): Containment {
        this.ensureWiredUp();
        return this._EventOccurrenceUsage_eventOccurrence;
    }

    public readonly _ExhibitStateUsage = new Concept(this._language, "ExhibitStateUsage", "sysml-ExhibitStateUsage", "sysml-ExhibitStateUsage", false);
    get ExhibitStateUsage(): Concept {
        this.ensureWiredUp();
        return this._ExhibitStateUsage;
    }
    private readonly _ExhibitStateUsage_exhibitedState = new Containment(this._ExhibitStateUsage, "exhibitedState", "sysml-ExhibitStateUsage-exhibitedState", "sysml-ExhibitStateUsage-exhibitedState").isMultiple();
    get ExhibitStateUsage_exhibitedState(): Containment {
        this.ensureWiredUp();
        return this._ExhibitStateUsage_exhibitedState;
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
    private readonly _Expression_function = new Containment(this._Expression, "function", "sysml-Expression-function", "sysml-Expression-function").isMultiple();
    get Expression_function(): Containment {
        this.ensureWiredUp();
        return this._Expression_function;
    }
    private readonly _Expression_result = new Containment(this._Expression, "result", "sysml-Expression-result", "sysml-Expression-result").isMultiple();
    get Expression_result(): Containment {
        this.ensureWiredUp();
        return this._Expression_result;
    }
    private readonly _Expression_isModelLevelEvaluable = new Property(this._Expression, "isModelLevelEvaluable", "sysml-Expression-isModelLevelEvaluable", "sysml-Expression-isModelLevelEvaluable");
    get Expression_isModelLevelEvaluable(): Property {
        this.ensureWiredUp();
        return this._Expression_isModelLevelEvaluable;
    }

    public readonly _Feature = new Concept(this._language, "Feature", "sysml-Feature", "sysml-Feature", false);
    get Feature(): Concept {
        this.ensureWiredUp();
        return this._Feature;
    }
    private readonly _Feature_owningFeatureMembership = new Containment(this._Feature, "owningFeatureMembership", "sysml-Feature-owningFeatureMembership", "sysml-Feature-owningFeatureMembership").isMultiple();
    get Feature_owningFeatureMembership(): Containment {
        this.ensureWiredUp();
        return this._Feature_owningFeatureMembership;
    }
    private readonly _Feature_owningType = new Containment(this._Feature, "owningType", "sysml-Feature-owningType", "sysml-Feature-owningType").isMultiple();
    get Feature_owningType(): Containment {
        this.ensureWiredUp();
        return this._Feature_owningType;
    }
    private readonly _Feature_endOwningType = new Containment(this._Feature, "endOwningType", "sysml-Feature-endOwningType", "sysml-Feature-endOwningType").isMultiple();
    get Feature_endOwningType(): Containment {
        this.ensureWiredUp();
        return this._Feature_endOwningType;
    }
    private readonly _Feature_isUnique = new Property(this._Feature, "isUnique", "sysml-Feature-isUnique", "sysml-Feature-isUnique");
    get Feature_isUnique(): Property {
        this.ensureWiredUp();
        return this._Feature_isUnique;
    }
    private readonly _Feature_isOrdered = new Property(this._Feature, "isOrdered", "sysml-Feature-isOrdered", "sysml-Feature-isOrdered");
    get Feature_isOrdered(): Property {
        this.ensureWiredUp();
        return this._Feature_isOrdered;
    }
    private readonly _Feature_type = new Containment(this._Feature, "type", "sysml-Feature-type", "sysml-Feature-type").isMultiple();
    get Feature_type(): Containment {
        this.ensureWiredUp();
        return this._Feature_type;
    }
    private readonly _Feature_ownedRedefinition = new Containment(this._Feature, "ownedRedefinition", "sysml-Feature-ownedRedefinition", "sysml-Feature-ownedRedefinition").isMultiple();
    get Feature_ownedRedefinition(): Containment {
        this.ensureWiredUp();
        return this._Feature_ownedRedefinition;
    }
    private readonly _Feature_ownedSubsetting = new Containment(this._Feature, "ownedSubsetting", "sysml-Feature-ownedSubsetting", "sysml-Feature-ownedSubsetting").isMultiple();
    get Feature_ownedSubsetting(): Containment {
        this.ensureWiredUp();
        return this._Feature_ownedSubsetting;
    }
    private readonly _Feature_isComposite = new Property(this._Feature, "isComposite", "sysml-Feature-isComposite", "sysml-Feature-isComposite");
    get Feature_isComposite(): Property {
        this.ensureWiredUp();
        return this._Feature_isComposite;
    }
    private readonly _Feature_isEnd = new Property(this._Feature, "isEnd", "sysml-Feature-isEnd", "sysml-Feature-isEnd");
    get Feature_isEnd(): Property {
        this.ensureWiredUp();
        return this._Feature_isEnd;
    }
    private readonly _Feature_ownedTyping = new Containment(this._Feature, "ownedTyping", "sysml-Feature-ownedTyping", "sysml-Feature-ownedTyping").isMultiple();
    get Feature_ownedTyping(): Containment {
        this.ensureWiredUp();
        return this._Feature_ownedTyping;
    }
    private readonly _Feature_featuringType = new Containment(this._Feature, "featuringType", "sysml-Feature-featuringType", "sysml-Feature-featuringType").isMultiple();
    get Feature_featuringType(): Containment {
        this.ensureWiredUp();
        return this._Feature_featuringType;
    }
    private readonly _Feature_ownedTypeFeaturing = new Containment(this._Feature, "ownedTypeFeaturing", "sysml-Feature-ownedTypeFeaturing", "sysml-Feature-ownedTypeFeaturing").isMultiple();
    get Feature_ownedTypeFeaturing(): Containment {
        this.ensureWiredUp();
        return this._Feature_ownedTypeFeaturing;
    }
    private readonly _Feature_isDerived = new Property(this._Feature, "isDerived", "sysml-Feature-isDerived", "sysml-Feature-isDerived");
    get Feature_isDerived(): Property {
        this.ensureWiredUp();
        return this._Feature_isDerived;
    }
    private readonly _Feature_chainingFeature = new Containment(this._Feature, "chainingFeature", "sysml-Feature-chainingFeature", "sysml-Feature-chainingFeature").isMultiple();
    get Feature_chainingFeature(): Containment {
        this.ensureWiredUp();
        return this._Feature_chainingFeature;
    }
    private readonly _Feature_ownedFeatureInverting = new Containment(this._Feature, "ownedFeatureInverting", "sysml-Feature-ownedFeatureInverting", "sysml-Feature-ownedFeatureInverting").isMultiple();
    get Feature_ownedFeatureInverting(): Containment {
        this.ensureWiredUp();
        return this._Feature_ownedFeatureInverting;
    }
    private readonly _Feature_ownedFeatureChaining = new Containment(this._Feature, "ownedFeatureChaining", "sysml-Feature-ownedFeatureChaining", "sysml-Feature-ownedFeatureChaining").isMultiple();
    get Feature_ownedFeatureChaining(): Containment {
        this.ensureWiredUp();
        return this._Feature_ownedFeatureChaining;
    }
    private readonly _Feature_isPortion = new Property(this._Feature, "isPortion", "sysml-Feature-isPortion", "sysml-Feature-isPortion");
    get Feature_isPortion(): Property {
        this.ensureWiredUp();
        return this._Feature_isPortion;
    }
    private readonly _Feature_isVariable = new Property(this._Feature, "isVariable", "sysml-Feature-isVariable", "sysml-Feature-isVariable");
    get Feature_isVariable(): Property {
        this.ensureWiredUp();
        return this._Feature_isVariable;
    }
    private readonly _Feature_isConstant = new Property(this._Feature, "isConstant", "sysml-Feature-isConstant", "sysml-Feature-isConstant");
    get Feature_isConstant(): Property {
        this.ensureWiredUp();
        return this._Feature_isConstant;
    }
    private readonly _Feature_ownedReferenceSubsetting = new Containment(this._Feature, "ownedReferenceSubsetting", "sysml-Feature-ownedReferenceSubsetting", "sysml-Feature-ownedReferenceSubsetting").isMultiple();
    get Feature_ownedReferenceSubsetting(): Containment {
        this.ensureWiredUp();
        return this._Feature_ownedReferenceSubsetting;
    }
    private readonly _Feature_featureTarget = new Containment(this._Feature, "featureTarget", "sysml-Feature-featureTarget", "sysml-Feature-featureTarget").isMultiple();
    get Feature_featureTarget(): Containment {
        this.ensureWiredUp();
        return this._Feature_featureTarget;
    }
    private readonly _Feature_crossFeature = new Containment(this._Feature, "crossFeature", "sysml-Feature-crossFeature", "sysml-Feature-crossFeature").isMultiple();
    get Feature_crossFeature(): Containment {
        this.ensureWiredUp();
        return this._Feature_crossFeature;
    }
    private readonly _Feature_direction = new Property(this._Feature, "direction", "sysml-Feature-direction", "sysml-Feature-direction");
    get Feature_direction(): Property {
        this.ensureWiredUp();
        return this._Feature_direction;
    }
    private readonly _Feature_ownedCrossSubsetting = new Containment(this._Feature, "ownedCrossSubsetting", "sysml-Feature-ownedCrossSubsetting", "sysml-Feature-ownedCrossSubsetting").isMultiple();
    get Feature_ownedCrossSubsetting(): Containment {
        this.ensureWiredUp();
        return this._Feature_ownedCrossSubsetting;
    }
    private readonly _Feature_isNonunique = new Property(this._Feature, "isNonunique", "sysml-Feature-isNonunique", "sysml-Feature-isNonunique");
    get Feature_isNonunique(): Property {
        this.ensureWiredUp();
        return this._Feature_isNonunique;
    }

    public readonly _FeatureChainExpression = new Concept(this._language, "FeatureChainExpression", "sysml-FeatureChainExpression", "sysml-FeatureChainExpression", false);
    get FeatureChainExpression(): Concept {
        this.ensureWiredUp();
        return this._FeatureChainExpression;
    }
    private readonly _FeatureChainExpression_targetFeature = new Containment(this._FeatureChainExpression, "targetFeature", "sysml-FeatureChainExpression-targetFeature", "sysml-FeatureChainExpression-targetFeature").isMultiple();
    get FeatureChainExpression_targetFeature(): Containment {
        this.ensureWiredUp();
        return this._FeatureChainExpression_targetFeature;
    }

    public readonly _FeatureChaining = new Concept(this._language, "FeatureChaining", "sysml-FeatureChaining", "sysml-FeatureChaining", false);
    get FeatureChaining(): Concept {
        this.ensureWiredUp();
        return this._FeatureChaining;
    }
    private readonly _FeatureChaining_chainingFeature = new Containment(this._FeatureChaining, "chainingFeature", "sysml-FeatureChaining-chainingFeature", "sysml-FeatureChaining-chainingFeature").isMultiple();
    get FeatureChaining_chainingFeature(): Containment {
        this.ensureWiredUp();
        return this._FeatureChaining_chainingFeature;
    }
    private readonly _FeatureChaining_featureChained = new Containment(this._FeatureChaining, "featureChained", "sysml-FeatureChaining-featureChained", "sysml-FeatureChaining-featureChained").isMultiple();
    get FeatureChaining_featureChained(): Containment {
        this.ensureWiredUp();
        return this._FeatureChaining_featureChained;
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
    private readonly _FeatureInverting_featureInverted = new Containment(this._FeatureInverting, "featureInverted", "sysml-FeatureInverting-featureInverted", "sysml-FeatureInverting-featureInverted").isMultiple();
    get FeatureInverting_featureInverted(): Containment {
        this.ensureWiredUp();
        return this._FeatureInverting_featureInverted;
    }
    private readonly _FeatureInverting_invertingFeature = new Containment(this._FeatureInverting, "invertingFeature", "sysml-FeatureInverting-invertingFeature", "sysml-FeatureInverting-invertingFeature").isMultiple();
    get FeatureInverting_invertingFeature(): Containment {
        this.ensureWiredUp();
        return this._FeatureInverting_invertingFeature;
    }
    private readonly _FeatureInverting_owningFeature = new Containment(this._FeatureInverting, "owningFeature", "sysml-FeatureInverting-owningFeature", "sysml-FeatureInverting-owningFeature").isMultiple();
    get FeatureInverting_owningFeature(): Containment {
        this.ensureWiredUp();
        return this._FeatureInverting_owningFeature;
    }

    public readonly _FeatureMembership = new Concept(this._language, "FeatureMembership", "sysml-FeatureMembership", "sysml-FeatureMembership", false);
    get FeatureMembership(): Concept {
        this.ensureWiredUp();
        return this._FeatureMembership;
    }
    private readonly _FeatureMembership_ownedMemberFeature = new Containment(this._FeatureMembership, "ownedMemberFeature", "sysml-FeatureMembership-ownedMemberFeature", "sysml-FeatureMembership-ownedMemberFeature").isMultiple();
    get FeatureMembership_ownedMemberFeature(): Containment {
        this.ensureWiredUp();
        return this._FeatureMembership_ownedMemberFeature;
    }
    private readonly _FeatureMembership_owningType = new Containment(this._FeatureMembership, "owningType", "sysml-FeatureMembership-owningType", "sysml-FeatureMembership-owningType").isMultiple();
    get FeatureMembership_owningType(): Containment {
        this.ensureWiredUp();
        return this._FeatureMembership_owningType;
    }

    public readonly _FeatureReferenceExpression = new Concept(this._language, "FeatureReferenceExpression", "sysml-FeatureReferenceExpression", "sysml-FeatureReferenceExpression", false);
    get FeatureReferenceExpression(): Concept {
        this.ensureWiredUp();
        return this._FeatureReferenceExpression;
    }
    private readonly _FeatureReferenceExpression_referent = new Containment(this._FeatureReferenceExpression, "referent", "sysml-FeatureReferenceExpression-referent", "sysml-FeatureReferenceExpression-referent").isMultiple();
    get FeatureReferenceExpression_referent(): Containment {
        this.ensureWiredUp();
        return this._FeatureReferenceExpression_referent;
    }

    public readonly _FeatureTyping = new Concept(this._language, "FeatureTyping", "sysml-FeatureTyping", "sysml-FeatureTyping", false);
    get FeatureTyping(): Concept {
        this.ensureWiredUp();
        return this._FeatureTyping;
    }
    private readonly _FeatureTyping_typedFeature = new Containment(this._FeatureTyping, "typedFeature", "sysml-FeatureTyping-typedFeature", "sysml-FeatureTyping-typedFeature").isMultiple();
    get FeatureTyping_typedFeature(): Containment {
        this.ensureWiredUp();
        return this._FeatureTyping_typedFeature;
    }
    private readonly _FeatureTyping_type = new Containment(this._FeatureTyping, "type", "sysml-FeatureTyping-type", "sysml-FeatureTyping-type").isMultiple();
    get FeatureTyping_type(): Containment {
        this.ensureWiredUp();
        return this._FeatureTyping_type;
    }
    private readonly _FeatureTyping_owningFeature = new Containment(this._FeatureTyping, "owningFeature", "sysml-FeatureTyping-owningFeature", "sysml-FeatureTyping-owningFeature").isMultiple();
    get FeatureTyping_owningFeature(): Containment {
        this.ensureWiredUp();
        return this._FeatureTyping_owningFeature;
    }

    public readonly _FeatureValue = new Concept(this._language, "FeatureValue", "sysml-FeatureValue", "sysml-FeatureValue", false);
    get FeatureValue(): Concept {
        this.ensureWiredUp();
        return this._FeatureValue;
    }
    private readonly _FeatureValue_featureWithValue = new Containment(this._FeatureValue, "featureWithValue", "sysml-FeatureValue-featureWithValue", "sysml-FeatureValue-featureWithValue").isMultiple();
    get FeatureValue_featureWithValue(): Containment {
        this.ensureWiredUp();
        return this._FeatureValue_featureWithValue;
    }
    private readonly _FeatureValue_value = new Containment(this._FeatureValue, "value", "sysml-FeatureValue-value", "sysml-FeatureValue-value").isMultiple();
    get FeatureValue_value(): Containment {
        this.ensureWiredUp();
        return this._FeatureValue_value;
    }
    private readonly _FeatureValue_isInitial = new Property(this._FeatureValue, "isInitial", "sysml-FeatureValue-isInitial", "sysml-FeatureValue-isInitial");
    get FeatureValue_isInitial(): Property {
        this.ensureWiredUp();
        return this._FeatureValue_isInitial;
    }
    private readonly _FeatureValue_isDefault = new Property(this._FeatureValue, "isDefault", "sysml-FeatureValue-isDefault", "sysml-FeatureValue-isDefault");
    get FeatureValue_isDefault(): Property {
        this.ensureWiredUp();
        return this._FeatureValue_isDefault;
    }

    public readonly _Flow = new Concept(this._language, "Flow", "sysml-Flow", "sysml-Flow", false);
    get Flow(): Concept {
        this.ensureWiredUp();
        return this._Flow;
    }
    private readonly _Flow_payloadType = new Containment(this._Flow, "payloadType", "sysml-Flow-payloadType", "sysml-Flow-payloadType").isMultiple();
    get Flow_payloadType(): Containment {
        this.ensureWiredUp();
        return this._Flow_payloadType;
    }
    private readonly _Flow_targetInputFeature = new Containment(this._Flow, "targetInputFeature", "sysml-Flow-targetInputFeature", "sysml-Flow-targetInputFeature").isMultiple();
    get Flow_targetInputFeature(): Containment {
        this.ensureWiredUp();
        return this._Flow_targetInputFeature;
    }
    private readonly _Flow_sourceOutputFeature = new Containment(this._Flow, "sourceOutputFeature", "sysml-Flow-sourceOutputFeature", "sysml-Flow-sourceOutputFeature").isMultiple();
    get Flow_sourceOutputFeature(): Containment {
        this.ensureWiredUp();
        return this._Flow_sourceOutputFeature;
    }
    private readonly _Flow_flowEnd = new Containment(this._Flow, "flowEnd", "sysml-Flow-flowEnd", "sysml-Flow-flowEnd").isMultiple();
    get Flow_flowEnd(): Containment {
        this.ensureWiredUp();
        return this._Flow_flowEnd;
    }
    private readonly _Flow_payloadFeature = new Containment(this._Flow, "payloadFeature", "sysml-Flow-payloadFeature", "sysml-Flow-payloadFeature").isMultiple();
    get Flow_payloadFeature(): Containment {
        this.ensureWiredUp();
        return this._Flow_payloadFeature;
    }
    private readonly _Flow_interaction = new Containment(this._Flow, "interaction", "sysml-Flow-interaction", "sysml-Flow-interaction").isMultiple();
    get Flow_interaction(): Containment {
        this.ensureWiredUp();
        return this._Flow_interaction;
    }

    public readonly _FlowDefinition = new Concept(this._language, "FlowDefinition", "sysml-FlowDefinition", "sysml-FlowDefinition", false);
    get FlowDefinition(): Concept {
        this.ensureWiredUp();
        return this._FlowDefinition;
    }
    private readonly _FlowDefinition_flowEnd = new Containment(this._FlowDefinition, "flowEnd", "sysml-FlowDefinition-flowEnd", "sysml-FlowDefinition-flowEnd").isMultiple();
    get FlowDefinition_flowEnd(): Containment {
        this.ensureWiredUp();
        return this._FlowDefinition_flowEnd;
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
    private readonly _FlowUsage_flowDefinition = new Containment(this._FlowUsage, "flowDefinition", "sysml-FlowUsage-flowDefinition", "sysml-FlowUsage-flowDefinition").isMultiple();
    get FlowUsage_flowDefinition(): Containment {
        this.ensureWiredUp();
        return this._FlowUsage_flowDefinition;
    }

    public readonly _ForLoopActionUsage = new Concept(this._language, "ForLoopActionUsage", "sysml-ForLoopActionUsage", "sysml-ForLoopActionUsage", false);
    get ForLoopActionUsage(): Concept {
        this.ensureWiredUp();
        return this._ForLoopActionUsage;
    }
    private readonly _ForLoopActionUsage_seqArgument = new Containment(this._ForLoopActionUsage, "seqArgument", "sysml-ForLoopActionUsage-seqArgument", "sysml-ForLoopActionUsage-seqArgument").isMultiple();
    get ForLoopActionUsage_seqArgument(): Containment {
        this.ensureWiredUp();
        return this._ForLoopActionUsage_seqArgument;
    }
    private readonly _ForLoopActionUsage_loopVariable = new Containment(this._ForLoopActionUsage, "loopVariable", "sysml-ForLoopActionUsage-loopVariable", "sysml-ForLoopActionUsage-loopVariable").isMultiple();
    get ForLoopActionUsage_loopVariable(): Containment {
        this.ensureWiredUp();
        return this._ForLoopActionUsage_loopVariable;
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
    private readonly _FramedConcernMembership_ownedConcern = new Containment(this._FramedConcernMembership, "ownedConcern", "sysml-FramedConcernMembership-ownedConcern", "sysml-FramedConcernMembership-ownedConcern").isMultiple();
    get FramedConcernMembership_ownedConcern(): Containment {
        this.ensureWiredUp();
        return this._FramedConcernMembership_ownedConcern;
    }
    private readonly _FramedConcernMembership_referencedConcern = new Containment(this._FramedConcernMembership, "referencedConcern", "sysml-FramedConcernMembership-referencedConcern", "sysml-FramedConcernMembership-referencedConcern").isMultiple();
    get FramedConcernMembership_referencedConcern(): Containment {
        this.ensureWiredUp();
        return this._FramedConcernMembership_referencedConcern;
    }

    public readonly _Function = new Concept(this._language, "Function", "sysml-Function", "sysml-Function", false);
    get Function(): Concept {
        this.ensureWiredUp();
        return this._Function;
    }
    private readonly _Function_expression = new Containment(this._Function, "expression", "sysml-Function-expression", "sysml-Function-expression").isMultiple();
    get Function_expression(): Containment {
        this.ensureWiredUp();
        return this._Function_expression;
    }
    private readonly _Function_result = new Containment(this._Function, "result", "sysml-Function-result", "sysml-Function-result").isMultiple();
    get Function_result(): Containment {
        this.ensureWiredUp();
        return this._Function_result;
    }
    private readonly _Function_isModelLevelEvaluable = new Property(this._Function, "isModelLevelEvaluable", "sysml-Function-isModelLevelEvaluable", "sysml-Function-isModelLevelEvaluable");
    get Function_isModelLevelEvaluable(): Property {
        this.ensureWiredUp();
        return this._Function_isModelLevelEvaluable;
    }

    public readonly _IfActionUsage = new Concept(this._language, "IfActionUsage", "sysml-IfActionUsage", "sysml-IfActionUsage", false);
    get IfActionUsage(): Concept {
        this.ensureWiredUp();
        return this._IfActionUsage;
    }
    private readonly _IfActionUsage_elseAction = new Containment(this._IfActionUsage, "elseAction", "sysml-IfActionUsage-elseAction", "sysml-IfActionUsage-elseAction").isMultiple();
    get IfActionUsage_elseAction(): Containment {
        this.ensureWiredUp();
        return this._IfActionUsage_elseAction;
    }
    private readonly _IfActionUsage_thenAction = new Containment(this._IfActionUsage, "thenAction", "sysml-IfActionUsage-thenAction", "sysml-IfActionUsage-thenAction").isMultiple();
    get IfActionUsage_thenAction(): Containment {
        this.ensureWiredUp();
        return this._IfActionUsage_thenAction;
    }
    private readonly _IfActionUsage_ifArgument = new Containment(this._IfActionUsage, "ifArgument", "sysml-IfActionUsage-ifArgument", "sysml-IfActionUsage-ifArgument").isMultiple();
    get IfActionUsage_ifArgument(): Containment {
        this.ensureWiredUp();
        return this._IfActionUsage_ifArgument;
    }

    public readonly _Import = new Concept(this._language, "Import", "sysml-Import", "sysml-Import", true);
    get Import(): Concept {
        this.ensureWiredUp();
        return this._Import;
    }
    private readonly _Import_visibility = new Property(this._Import, "visibility", "sysml-Import-visibility", "sysml-Import-visibility");
    get Import_visibility(): Property {
        this.ensureWiredUp();
        return this._Import_visibility;
    }
    private readonly _Import_isRecursive = new Property(this._Import, "isRecursive", "sysml-Import-isRecursive", "sysml-Import-isRecursive");
    get Import_isRecursive(): Property {
        this.ensureWiredUp();
        return this._Import_isRecursive;
    }
    private readonly _Import_isImportAll = new Property(this._Import, "isImportAll", "sysml-Import-isImportAll", "sysml-Import-isImportAll");
    get Import_isImportAll(): Property {
        this.ensureWiredUp();
        return this._Import_isImportAll;
    }
    private readonly _Import_importedElement = new Containment(this._Import, "importedElement", "sysml-Import-importedElement", "sysml-Import-importedElement").isMultiple();
    get Import_importedElement(): Containment {
        this.ensureWiredUp();
        return this._Import_importedElement;
    }
    private readonly _Import_importOwningNamespace = new Containment(this._Import, "importOwningNamespace", "sysml-Import-importOwningNamespace", "sysml-Import-importOwningNamespace").isMultiple();
    get Import_importOwningNamespace(): Containment {
        this.ensureWiredUp();
        return this._Import_importOwningNamespace;
    }

    public readonly _IncludeUseCaseUsage = new Concept(this._language, "IncludeUseCaseUsage", "sysml-IncludeUseCaseUsage", "sysml-IncludeUseCaseUsage", false);
    get IncludeUseCaseUsage(): Concept {
        this.ensureWiredUp();
        return this._IncludeUseCaseUsage;
    }
    private readonly _IncludeUseCaseUsage_useCaseIncluded = new Containment(this._IncludeUseCaseUsage, "useCaseIncluded", "sysml-IncludeUseCaseUsage-useCaseIncluded", "sysml-IncludeUseCaseUsage-useCaseIncluded").isMultiple();
    get IncludeUseCaseUsage_useCaseIncluded(): Containment {
        this.ensureWiredUp();
        return this._IncludeUseCaseUsage_useCaseIncluded;
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
    private readonly _InstantiationExpression_argument = new Containment(this._InstantiationExpression, "argument", "sysml-InstantiationExpression-argument", "sysml-InstantiationExpression-argument").isMultiple();
    get InstantiationExpression_argument(): Containment {
        this.ensureWiredUp();
        return this._InstantiationExpression_argument;
    }
    private readonly _InstantiationExpression_instantiatedType = new Containment(this._InstantiationExpression, "instantiatedType", "sysml-InstantiationExpression-instantiatedType", "sysml-InstantiationExpression-instantiatedType").isMultiple();
    get InstantiationExpression_instantiatedType(): Containment {
        this.ensureWiredUp();
        return this._InstantiationExpression_instantiatedType;
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
    private readonly _InterfaceDefinition_interfaceEnd = new Containment(this._InterfaceDefinition, "interfaceEnd", "sysml-InterfaceDefinition-interfaceEnd", "sysml-InterfaceDefinition-interfaceEnd").isMultiple();
    get InterfaceDefinition_interfaceEnd(): Containment {
        this.ensureWiredUp();
        return this._InterfaceDefinition_interfaceEnd;
    }

    public readonly _InterfaceUsage = new Concept(this._language, "InterfaceUsage", "sysml-InterfaceUsage", "sysml-InterfaceUsage", false);
    get InterfaceUsage(): Concept {
        this.ensureWiredUp();
        return this._InterfaceUsage;
    }
    private readonly _InterfaceUsage_interfaceDefinition = new Containment(this._InterfaceUsage, "interfaceDefinition", "sysml-InterfaceUsage-interfaceDefinition", "sysml-InterfaceUsage-interfaceDefinition").isMultiple();
    get InterfaceUsage_interfaceDefinition(): Containment {
        this.ensureWiredUp();
        return this._InterfaceUsage_interfaceDefinition;
    }

    public readonly _Intersecting = new Concept(this._language, "Intersecting", "sysml-Intersecting", "sysml-Intersecting", false);
    get Intersecting(): Concept {
        this.ensureWiredUp();
        return this._Intersecting;
    }
    private readonly _Intersecting_intersectingType = new Containment(this._Intersecting, "intersectingType", "sysml-Intersecting-intersectingType", "sysml-Intersecting-intersectingType").isMultiple();
    get Intersecting_intersectingType(): Containment {
        this.ensureWiredUp();
        return this._Intersecting_intersectingType;
    }
    private readonly _Intersecting_typeIntersected = new Containment(this._Intersecting, "typeIntersected", "sysml-Intersecting-typeIntersected", "sysml-Intersecting-typeIntersected").isMultiple();
    get Intersecting_typeIntersected(): Containment {
        this.ensureWiredUp();
        return this._Intersecting_typeIntersected;
    }

    public readonly _Invariant = new Concept(this._language, "Invariant", "sysml-Invariant", "sysml-Invariant", false);
    get Invariant(): Concept {
        this.ensureWiredUp();
        return this._Invariant;
    }
    private readonly _Invariant_isNegated = new Property(this._Invariant, "isNegated", "sysml-Invariant-isNegated", "sysml-Invariant-isNegated");
    get Invariant_isNegated(): Property {
        this.ensureWiredUp();
        return this._Invariant_isNegated;
    }

    public readonly _InvocationExpression = new Concept(this._language, "InvocationExpression", "sysml-InvocationExpression", "sysml-InvocationExpression", false);
    get InvocationExpression(): Concept {
        this.ensureWiredUp();
        return this._InvocationExpression;
    }
    private readonly _InvocationExpression_operand = new Containment(this._InvocationExpression, "operand", "sysml-InvocationExpression-operand", "sysml-InvocationExpression-operand").isMultiple();
    get InvocationExpression_operand(): Containment {
        this.ensureWiredUp();
        return this._InvocationExpression_operand;
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
    private readonly _ItemUsage_itemDefinition = new Containment(this._ItemUsage, "itemDefinition", "sysml-ItemUsage-itemDefinition", "sysml-ItemUsage-itemDefinition").isMultiple();
    get ItemUsage_itemDefinition(): Containment {
        this.ensureWiredUp();
        return this._ItemUsage_itemDefinition;
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
    private readonly _LibraryPackage_isStandard = new Property(this._LibraryPackage, "isStandard", "sysml-LibraryPackage-isStandard", "sysml-LibraryPackage-isStandard");
    get LibraryPackage_isStandard(): Property {
        this.ensureWiredUp();
        return this._LibraryPackage_isStandard;
    }

    public readonly _LiteralBoolean = new Concept(this._language, "LiteralBoolean", "sysml-LiteralBoolean", "sysml-LiteralBoolean", false);
    get LiteralBoolean(): Concept {
        this.ensureWiredUp();
        return this._LiteralBoolean;
    }
    private readonly _LiteralBoolean_value = new Property(this._LiteralBoolean, "value", "sysml-LiteralBoolean-value", "sysml-LiteralBoolean-value");
    get LiteralBoolean_value(): Property {
        this.ensureWiredUp();
        return this._LiteralBoolean_value;
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
    private readonly _LiteralInteger_value = new Property(this._LiteralInteger, "value", "sysml-LiteralInteger-value", "sysml-LiteralInteger-value");
    get LiteralInteger_value(): Property {
        this.ensureWiredUp();
        return this._LiteralInteger_value;
    }

    public readonly _LiteralRational = new Concept(this._language, "LiteralRational", "sysml-LiteralRational", "sysml-LiteralRational", false);
    get LiteralRational(): Concept {
        this.ensureWiredUp();
        return this._LiteralRational;
    }
    private readonly _LiteralRational_value = new Property(this._LiteralRational, "value", "sysml-LiteralRational-value", "sysml-LiteralRational-value");
    get LiteralRational_value(): Property {
        this.ensureWiredUp();
        return this._LiteralRational_value;
    }

    public readonly _LiteralString = new Concept(this._language, "LiteralString", "sysml-LiteralString", "sysml-LiteralString", false);
    get LiteralString(): Concept {
        this.ensureWiredUp();
        return this._LiteralString;
    }
    private readonly _LiteralString_value = new Property(this._LiteralString, "value", "sysml-LiteralString-value", "sysml-LiteralString-value");
    get LiteralString_value(): Property {
        this.ensureWiredUp();
        return this._LiteralString_value;
    }

    public readonly _LoopActionUsage = new Concept(this._language, "LoopActionUsage", "sysml-LoopActionUsage", "sysml-LoopActionUsage", true);
    get LoopActionUsage(): Concept {
        this.ensureWiredUp();
        return this._LoopActionUsage;
    }
    private readonly _LoopActionUsage_bodyAction = new Containment(this._LoopActionUsage, "bodyAction", "sysml-LoopActionUsage-bodyAction", "sysml-LoopActionUsage-bodyAction").isMultiple();
    get LoopActionUsage_bodyAction(): Containment {
        this.ensureWiredUp();
        return this._LoopActionUsage_bodyAction;
    }

    public readonly _Membership = new Concept(this._language, "Membership", "sysml-Membership", "sysml-Membership", false);
    get Membership(): Concept {
        this.ensureWiredUp();
        return this._Membership;
    }
    private readonly _Membership_memberElementId = new Property(this._Membership, "memberElementId", "sysml-Membership-memberElementId", "sysml-Membership-memberElementId");
    get Membership_memberElementId(): Property {
        this.ensureWiredUp();
        return this._Membership_memberElementId;
    }
    private readonly _Membership_membershipOwningNamespace = new Containment(this._Membership, "membershipOwningNamespace", "sysml-Membership-membershipOwningNamespace", "sysml-Membership-membershipOwningNamespace").isMultiple();
    get Membership_membershipOwningNamespace(): Containment {
        this.ensureWiredUp();
        return this._Membership_membershipOwningNamespace;
    }
    private readonly _Membership_memberShortName = new Property(this._Membership, "memberShortName", "sysml-Membership-memberShortName", "sysml-Membership-memberShortName");
    get Membership_memberShortName(): Property {
        this.ensureWiredUp();
        return this._Membership_memberShortName;
    }
    private readonly _Membership_memberElement = new Containment(this._Membership, "memberElement", "sysml-Membership-memberElement", "sysml-Membership-memberElement").isMultiple();
    get Membership_memberElement(): Containment {
        this.ensureWiredUp();
        return this._Membership_memberElement;
    }
    private readonly _Membership_memberName = new Property(this._Membership, "memberName", "sysml-Membership-memberName", "sysml-Membership-memberName");
    get Membership_memberName(): Property {
        this.ensureWiredUp();
        return this._Membership_memberName;
    }
    private readonly _Membership_visibility = new Property(this._Membership, "visibility", "sysml-Membership-visibility", "sysml-Membership-visibility");
    get Membership_visibility(): Property {
        this.ensureWiredUp();
        return this._Membership_visibility;
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
    private readonly _MembershipImport_importedMembership = new Containment(this._MembershipImport, "importedMembership", "sysml-MembershipImport-importedMembership", "sysml-MembershipImport-importedMembership").isMultiple();
    get MembershipImport_importedMembership(): Containment {
        this.ensureWiredUp();
        return this._MembershipImport_importedMembership;
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
    private readonly _MetadataAccessExpression_referencedElement = new Containment(this._MetadataAccessExpression, "referencedElement", "sysml-MetadataAccessExpression-referencedElement", "sysml-MetadataAccessExpression-referencedElement").isMultiple();
    get MetadataAccessExpression_referencedElement(): Containment {
        this.ensureWiredUp();
        return this._MetadataAccessExpression_referencedElement;
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
    private readonly _MetadataFeature_metaclass = new Containment(this._MetadataFeature, "metaclass", "sysml-MetadataFeature-metaclass", "sysml-MetadataFeature-metaclass").isMultiple();
    get MetadataFeature_metaclass(): Containment {
        this.ensureWiredUp();
        return this._MetadataFeature_metaclass;
    }

    public readonly _MetadataUsage = new Concept(this._language, "MetadataUsage", "sysml-MetadataUsage", "sysml-MetadataUsage", false);
    get MetadataUsage(): Concept {
        this.ensureWiredUp();
        return this._MetadataUsage;
    }
    private readonly _MetadataUsage_metadataDefinition = new Containment(this._MetadataUsage, "metadataDefinition", "sysml-MetadataUsage-metadataDefinition", "sysml-MetadataUsage-metadataDefinition").isMultiple();
    get MetadataUsage_metadataDefinition(): Containment {
        this.ensureWiredUp();
        return this._MetadataUsage_metadataDefinition;
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
    private readonly _MultiplicityRange_lowerBound = new Containment(this._MultiplicityRange, "lowerBound", "sysml-MultiplicityRange-lowerBound", "sysml-MultiplicityRange-lowerBound").isMultiple();
    get MultiplicityRange_lowerBound(): Containment {
        this.ensureWiredUp();
        return this._MultiplicityRange_lowerBound;
    }
    private readonly _MultiplicityRange_upperBound = new Containment(this._MultiplicityRange, "upperBound", "sysml-MultiplicityRange-upperBound", "sysml-MultiplicityRange-upperBound").isMultiple();
    get MultiplicityRange_upperBound(): Containment {
        this.ensureWiredUp();
        return this._MultiplicityRange_upperBound;
    }
    private readonly _MultiplicityRange_bound = new Containment(this._MultiplicityRange, "bound", "sysml-MultiplicityRange-bound", "sysml-MultiplicityRange-bound").isMultiple();
    get MultiplicityRange_bound(): Containment {
        this.ensureWiredUp();
        return this._MultiplicityRange_bound;
    }

    public readonly _Namespace = new Concept(this._language, "Namespace", "sysml-Namespace", "sysml-Namespace", false);
    get Namespace(): Concept {
        this.ensureWiredUp();
        return this._Namespace;
    }
    private readonly _Namespace_ownedMembership = new Containment(this._Namespace, "ownedMembership", "sysml-Namespace-ownedMembership", "sysml-Namespace-ownedMembership").isMultiple();
    get Namespace_ownedMembership(): Containment {
        this.ensureWiredUp();
        return this._Namespace_ownedMembership;
    }
    private readonly _Namespace_ownedMember = new Containment(this._Namespace, "ownedMember", "sysml-Namespace-ownedMember", "sysml-Namespace-ownedMember").isMultiple();
    get Namespace_ownedMember(): Containment {
        this.ensureWiredUp();
        return this._Namespace_ownedMember;
    }
    private readonly _Namespace_membership = new Containment(this._Namespace, "membership", "sysml-Namespace-membership", "sysml-Namespace-membership").isMultiple();
    get Namespace_membership(): Containment {
        this.ensureWiredUp();
        return this._Namespace_membership;
    }
    private readonly _Namespace_ownedImport = new Containment(this._Namespace, "ownedImport", "sysml-Namespace-ownedImport", "sysml-Namespace-ownedImport").isMultiple();
    get Namespace_ownedImport(): Containment {
        this.ensureWiredUp();
        return this._Namespace_ownedImport;
    }
    private readonly _Namespace_member = new Containment(this._Namespace, "member", "sysml-Namespace-member", "sysml-Namespace-member").isMultiple();
    get Namespace_member(): Containment {
        this.ensureWiredUp();
        return this._Namespace_member;
    }
    private readonly _Namespace_importedMembership = new Containment(this._Namespace, "importedMembership", "sysml-Namespace-importedMembership", "sysml-Namespace-importedMembership").isMultiple();
    get Namespace_importedMembership(): Containment {
        this.ensureWiredUp();
        return this._Namespace_importedMembership;
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
    private readonly _NamespaceImport_importedNamespace = new Containment(this._NamespaceImport, "importedNamespace", "sysml-NamespaceImport-importedNamespace", "sysml-NamespaceImport-importedNamespace").isMultiple();
    get NamespaceImport_importedNamespace(): Containment {
        this.ensureWiredUp();
        return this._NamespaceImport_importedNamespace;
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
    private readonly _ObjectiveMembership_ownedObjectiveRequirement = new Containment(this._ObjectiveMembership, "ownedObjectiveRequirement", "sysml-ObjectiveMembership-ownedObjectiveRequirement", "sysml-ObjectiveMembership-ownedObjectiveRequirement").isMultiple();
    get ObjectiveMembership_ownedObjectiveRequirement(): Containment {
        this.ensureWiredUp();
        return this._ObjectiveMembership_ownedObjectiveRequirement;
    }

    public readonly _OccurrenceDefinition = new Concept(this._language, "OccurrenceDefinition", "sysml-OccurrenceDefinition", "sysml-OccurrenceDefinition", false);
    get OccurrenceDefinition(): Concept {
        this.ensureWiredUp();
        return this._OccurrenceDefinition;
    }
    private readonly _OccurrenceDefinition_isIndividual = new Property(this._OccurrenceDefinition, "isIndividual", "sysml-OccurrenceDefinition-isIndividual", "sysml-OccurrenceDefinition-isIndividual");
    get OccurrenceDefinition_isIndividual(): Property {
        this.ensureWiredUp();
        return this._OccurrenceDefinition_isIndividual;
    }

    public readonly _OccurrenceUsage = new Concept(this._language, "OccurrenceUsage", "sysml-OccurrenceUsage", "sysml-OccurrenceUsage", false);
    get OccurrenceUsage(): Concept {
        this.ensureWiredUp();
        return this._OccurrenceUsage;
    }
    private readonly _OccurrenceUsage_occurrenceDefinition = new Containment(this._OccurrenceUsage, "occurrenceDefinition", "sysml-OccurrenceUsage-occurrenceDefinition", "sysml-OccurrenceUsage-occurrenceDefinition").isMultiple();
    get OccurrenceUsage_occurrenceDefinition(): Containment {
        this.ensureWiredUp();
        return this._OccurrenceUsage_occurrenceDefinition;
    }
    private readonly _OccurrenceUsage_individualDefinition = new Containment(this._OccurrenceUsage, "individualDefinition", "sysml-OccurrenceUsage-individualDefinition", "sysml-OccurrenceUsage-individualDefinition").isMultiple();
    get OccurrenceUsage_individualDefinition(): Containment {
        this.ensureWiredUp();
        return this._OccurrenceUsage_individualDefinition;
    }
    private readonly _OccurrenceUsage_isIndividual = new Property(this._OccurrenceUsage, "isIndividual", "sysml-OccurrenceUsage-isIndividual", "sysml-OccurrenceUsage-isIndividual");
    get OccurrenceUsage_isIndividual(): Property {
        this.ensureWiredUp();
        return this._OccurrenceUsage_isIndividual;
    }
    private readonly _OccurrenceUsage_portionKind = new Property(this._OccurrenceUsage, "portionKind", "sysml-OccurrenceUsage-portionKind", "sysml-OccurrenceUsage-portionKind");
    get OccurrenceUsage_portionKind(): Property {
        this.ensureWiredUp();
        return this._OccurrenceUsage_portionKind;
    }

    public readonly _OperatorExpression = new Concept(this._language, "OperatorExpression", "sysml-OperatorExpression", "sysml-OperatorExpression", false);
    get OperatorExpression(): Concept {
        this.ensureWiredUp();
        return this._OperatorExpression;
    }
    private readonly _OperatorExpression_operator = new Property(this._OperatorExpression, "operator", "sysml-OperatorExpression-operator", "sysml-OperatorExpression-operator");
    get OperatorExpression_operator(): Property {
        this.ensureWiredUp();
        return this._OperatorExpression_operator;
    }

    public readonly _OwningMembership = new Concept(this._language, "OwningMembership", "sysml-OwningMembership", "sysml-OwningMembership", false);
    get OwningMembership(): Concept {
        this.ensureWiredUp();
        return this._OwningMembership;
    }
    private readonly _OwningMembership_ownedMemberElementId = new Property(this._OwningMembership, "ownedMemberElementId", "sysml-OwningMembership-ownedMemberElementId", "sysml-OwningMembership-ownedMemberElementId");
    get OwningMembership_ownedMemberElementId(): Property {
        this.ensureWiredUp();
        return this._OwningMembership_ownedMemberElementId;
    }
    private readonly _OwningMembership_ownedMemberShortName = new Property(this._OwningMembership, "ownedMemberShortName", "sysml-OwningMembership-ownedMemberShortName", "sysml-OwningMembership-ownedMemberShortName");
    get OwningMembership_ownedMemberShortName(): Property {
        this.ensureWiredUp();
        return this._OwningMembership_ownedMemberShortName;
    }
    private readonly _OwningMembership_ownedMemberName = new Property(this._OwningMembership, "ownedMemberName", "sysml-OwningMembership-ownedMemberName", "sysml-OwningMembership-ownedMemberName");
    get OwningMembership_ownedMemberName(): Property {
        this.ensureWiredUp();
        return this._OwningMembership_ownedMemberName;
    }
    private readonly _OwningMembership_ownedMemberElement = new Containment(this._OwningMembership, "ownedMemberElement", "sysml-OwningMembership-ownedMemberElement", "sysml-OwningMembership-ownedMemberElement").isMultiple();
    get OwningMembership_ownedMemberElement(): Containment {
        this.ensureWiredUp();
        return this._OwningMembership_ownedMemberElement;
    }

    public readonly _Package = new Concept(this._language, "Package", "sysml-Package", "sysml-Package", false);
    get Package(): Concept {
        this.ensureWiredUp();
        return this._Package;
    }
    private readonly _Package_filterCondition = new Containment(this._Package, "filterCondition", "sysml-Package-filterCondition", "sysml-Package-filterCondition").isMultiple();
    get Package_filterCondition(): Containment {
        this.ensureWiredUp();
        return this._Package_filterCondition;
    }

    public readonly _ParameterMembership = new Concept(this._language, "ParameterMembership", "sysml-ParameterMembership", "sysml-ParameterMembership", false);
    get ParameterMembership(): Concept {
        this.ensureWiredUp();
        return this._ParameterMembership;
    }
    private readonly _ParameterMembership_ownedMemberParameter = new Containment(this._ParameterMembership, "ownedMemberParameter", "sysml-ParameterMembership-ownedMemberParameter", "sysml-ParameterMembership-ownedMemberParameter").isMultiple();
    get ParameterMembership_ownedMemberParameter(): Containment {
        this.ensureWiredUp();
        return this._ParameterMembership_ownedMemberParameter;
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
    private readonly _PartUsage_partDefinition = new Containment(this._PartUsage, "partDefinition", "sysml-PartUsage-partDefinition", "sysml-PartUsage-partDefinition").isMultiple();
    get PartUsage_partDefinition(): Containment {
        this.ensureWiredUp();
        return this._PartUsage_partDefinition;
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
    private readonly _PerformActionUsage_performedAction = new Containment(this._PerformActionUsage, "performedAction", "sysml-PerformActionUsage-performedAction", "sysml-PerformActionUsage-performedAction").isMultiple();
    get PerformActionUsage_performedAction(): Containment {
        this.ensureWiredUp();
        return this._PerformActionUsage_performedAction;
    }

    public readonly _PortConjugation = new Concept(this._language, "PortConjugation", "sysml-PortConjugation", "sysml-PortConjugation", false);
    get PortConjugation(): Concept {
        this.ensureWiredUp();
        return this._PortConjugation;
    }
    private readonly _PortConjugation_originalPortDefinition = new Containment(this._PortConjugation, "originalPortDefinition", "sysml-PortConjugation-originalPortDefinition", "sysml-PortConjugation-originalPortDefinition").isMultiple();
    get PortConjugation_originalPortDefinition(): Containment {
        this.ensureWiredUp();
        return this._PortConjugation_originalPortDefinition;
    }
    private readonly _PortConjugation_conjugatedPortDefinition = new Containment(this._PortConjugation, "conjugatedPortDefinition", "sysml-PortConjugation-conjugatedPortDefinition", "sysml-PortConjugation-conjugatedPortDefinition").isMultiple();
    get PortConjugation_conjugatedPortDefinition(): Containment {
        this.ensureWiredUp();
        return this._PortConjugation_conjugatedPortDefinition;
    }

    public readonly _PortDefinition = new Concept(this._language, "PortDefinition", "sysml-PortDefinition", "sysml-PortDefinition", false);
    get PortDefinition(): Concept {
        this.ensureWiredUp();
        return this._PortDefinition;
    }
    private readonly _PortDefinition_conjugatedPortDefinition = new Containment(this._PortDefinition, "conjugatedPortDefinition", "sysml-PortDefinition-conjugatedPortDefinition", "sysml-PortDefinition-conjugatedPortDefinition").isMultiple();
    get PortDefinition_conjugatedPortDefinition(): Containment {
        this.ensureWiredUp();
        return this._PortDefinition_conjugatedPortDefinition;
    }

    public readonly _PortUsage = new Concept(this._language, "PortUsage", "sysml-PortUsage", "sysml-PortUsage", false);
    get PortUsage(): Concept {
        this.ensureWiredUp();
        return this._PortUsage;
    }
    private readonly _PortUsage_portDefinition = new Containment(this._PortUsage, "portDefinition", "sysml-PortUsage-portDefinition", "sysml-PortUsage-portDefinition").isMultiple();
    get PortUsage_portDefinition(): Containment {
        this.ensureWiredUp();
        return this._PortUsage_portDefinition;
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
    private readonly _Redefinition_redefiningFeature = new Containment(this._Redefinition, "redefiningFeature", "sysml-Redefinition-redefiningFeature", "sysml-Redefinition-redefiningFeature").isMultiple();
    get Redefinition_redefiningFeature(): Containment {
        this.ensureWiredUp();
        return this._Redefinition_redefiningFeature;
    }
    private readonly _Redefinition_redefinedFeature = new Containment(this._Redefinition, "redefinedFeature", "sysml-Redefinition-redefinedFeature", "sysml-Redefinition-redefinedFeature").isMultiple();
    get Redefinition_redefinedFeature(): Containment {
        this.ensureWiredUp();
        return this._Redefinition_redefinedFeature;
    }

    public readonly _ReferenceSubsetting = new Concept(this._language, "ReferenceSubsetting", "sysml-ReferenceSubsetting", "sysml-ReferenceSubsetting", false);
    get ReferenceSubsetting(): Concept {
        this.ensureWiredUp();
        return this._ReferenceSubsetting;
    }
    private readonly _ReferenceSubsetting_referencedFeature = new Containment(this._ReferenceSubsetting, "referencedFeature", "sysml-ReferenceSubsetting-referencedFeature", "sysml-ReferenceSubsetting-referencedFeature").isMultiple();
    get ReferenceSubsetting_referencedFeature(): Containment {
        this.ensureWiredUp();
        return this._ReferenceSubsetting_referencedFeature;
    }
    private readonly _ReferenceSubsetting_referencingFeature = new Containment(this._ReferenceSubsetting, "referencingFeature", "sysml-ReferenceSubsetting-referencingFeature", "sysml-ReferenceSubsetting-referencingFeature").isMultiple();
    get ReferenceSubsetting_referencingFeature(): Containment {
        this.ensureWiredUp();
        return this._ReferenceSubsetting_referencingFeature;
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
    private readonly _Relationship_relatedElement = new Containment(this._Relationship, "relatedElement", "sysml-Relationship-relatedElement", "sysml-Relationship-relatedElement").isMultiple();
    get Relationship_relatedElement(): Containment {
        this.ensureWiredUp();
        return this._Relationship_relatedElement;
    }
    private readonly _Relationship_target = new Containment(this._Relationship, "target", "sysml-Relationship-target", "sysml-Relationship-target").isMultiple();
    get Relationship_target(): Containment {
        this.ensureWiredUp();
        return this._Relationship_target;
    }
    private readonly _Relationship_source = new Containment(this._Relationship, "source", "sysml-Relationship-source", "sysml-Relationship-source").isMultiple();
    get Relationship_source(): Containment {
        this.ensureWiredUp();
        return this._Relationship_source;
    }
    private readonly _Relationship_owningRelatedElement = new Containment(this._Relationship, "owningRelatedElement", "sysml-Relationship-owningRelatedElement", "sysml-Relationship-owningRelatedElement").isMultiple();
    get Relationship_owningRelatedElement(): Containment {
        this.ensureWiredUp();
        return this._Relationship_owningRelatedElement;
    }
    private readonly _Relationship_ownedRelatedElement = new Containment(this._Relationship, "ownedRelatedElement", "sysml-Relationship-ownedRelatedElement", "sysml-Relationship-ownedRelatedElement").isMultiple();
    get Relationship_ownedRelatedElement(): Containment {
        this.ensureWiredUp();
        return this._Relationship_ownedRelatedElement;
    }
    private readonly _Relationship_isImplied = new Property(this._Relationship, "isImplied", "sysml-Relationship-isImplied", "sysml-Relationship-isImplied");
    get Relationship_isImplied(): Property {
        this.ensureWiredUp();
        return this._Relationship_isImplied;
    }

    public readonly _RenderingDefinition = new Concept(this._language, "RenderingDefinition", "sysml-RenderingDefinition", "sysml-RenderingDefinition", false);
    get RenderingDefinition(): Concept {
        this.ensureWiredUp();
        return this._RenderingDefinition;
    }
    private readonly _RenderingDefinition_rendering = new Containment(this._RenderingDefinition, "rendering", "sysml-RenderingDefinition-rendering", "sysml-RenderingDefinition-rendering").isMultiple();
    get RenderingDefinition_rendering(): Containment {
        this.ensureWiredUp();
        return this._RenderingDefinition_rendering;
    }

    public readonly _RenderingUsage = new Concept(this._language, "RenderingUsage", "sysml-RenderingUsage", "sysml-RenderingUsage", false);
    get RenderingUsage(): Concept {
        this.ensureWiredUp();
        return this._RenderingUsage;
    }
    private readonly _RenderingUsage_renderingDefinition = new Containment(this._RenderingUsage, "renderingDefinition", "sysml-RenderingUsage-renderingDefinition", "sysml-RenderingUsage-renderingDefinition").isMultiple();
    get RenderingUsage_renderingDefinition(): Containment {
        this.ensureWiredUp();
        return this._RenderingUsage_renderingDefinition;
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
    private readonly _RequirementConstraintMembership_kind = new Property(this._RequirementConstraintMembership, "kind", "sysml-RequirementConstraintMembership-kind", "sysml-RequirementConstraintMembership-kind");
    get RequirementConstraintMembership_kind(): Property {
        this.ensureWiredUp();
        return this._RequirementConstraintMembership_kind;
    }
    private readonly _RequirementConstraintMembership_ownedConstraint = new Containment(this._RequirementConstraintMembership, "ownedConstraint", "sysml-RequirementConstraintMembership-ownedConstraint", "sysml-RequirementConstraintMembership-ownedConstraint").isMultiple();
    get RequirementConstraintMembership_ownedConstraint(): Containment {
        this.ensureWiredUp();
        return this._RequirementConstraintMembership_ownedConstraint;
    }
    private readonly _RequirementConstraintMembership_referencedConstraint = new Containment(this._RequirementConstraintMembership, "referencedConstraint", "sysml-RequirementConstraintMembership-referencedConstraint", "sysml-RequirementConstraintMembership-referencedConstraint").isMultiple();
    get RequirementConstraintMembership_referencedConstraint(): Containment {
        this.ensureWiredUp();
        return this._RequirementConstraintMembership_referencedConstraint;
    }

    public readonly _RequirementDefinition = new Concept(this._language, "RequirementDefinition", "sysml-RequirementDefinition", "sysml-RequirementDefinition", false);
    get RequirementDefinition(): Concept {
        this.ensureWiredUp();
        return this._RequirementDefinition;
    }
    private readonly _RequirementDefinition_reqId = new Property(this._RequirementDefinition, "reqId", "sysml-RequirementDefinition-reqId", "sysml-RequirementDefinition-reqId");
    get RequirementDefinition_reqId(): Property {
        this.ensureWiredUp();
        return this._RequirementDefinition_reqId;
    }
    private readonly _RequirementDefinition_text = new Property(this._RequirementDefinition, "text", "sysml-RequirementDefinition-text", "sysml-RequirementDefinition-text");
    get RequirementDefinition_text(): Property {
        this.ensureWiredUp();
        return this._RequirementDefinition_text;
    }
    private readonly _RequirementDefinition_subjectParameter = new Containment(this._RequirementDefinition, "subjectParameter", "sysml-RequirementDefinition-subjectParameter", "sysml-RequirementDefinition-subjectParameter").isMultiple();
    get RequirementDefinition_subjectParameter(): Containment {
        this.ensureWiredUp();
        return this._RequirementDefinition_subjectParameter;
    }
    private readonly _RequirementDefinition_actorParameter = new Containment(this._RequirementDefinition, "actorParameter", "sysml-RequirementDefinition-actorParameter", "sysml-RequirementDefinition-actorParameter").isMultiple();
    get RequirementDefinition_actorParameter(): Containment {
        this.ensureWiredUp();
        return this._RequirementDefinition_actorParameter;
    }
    private readonly _RequirementDefinition_stakeholderParameter = new Containment(this._RequirementDefinition, "stakeholderParameter", "sysml-RequirementDefinition-stakeholderParameter", "sysml-RequirementDefinition-stakeholderParameter").isMultiple();
    get RequirementDefinition_stakeholderParameter(): Containment {
        this.ensureWiredUp();
        return this._RequirementDefinition_stakeholderParameter;
    }
    private readonly _RequirementDefinition_assumedConstraint = new Containment(this._RequirementDefinition, "assumedConstraint", "sysml-RequirementDefinition-assumedConstraint", "sysml-RequirementDefinition-assumedConstraint").isMultiple();
    get RequirementDefinition_assumedConstraint(): Containment {
        this.ensureWiredUp();
        return this._RequirementDefinition_assumedConstraint;
    }
    private readonly _RequirementDefinition_requiredConstraint = new Containment(this._RequirementDefinition, "requiredConstraint", "sysml-RequirementDefinition-requiredConstraint", "sysml-RequirementDefinition-requiredConstraint").isMultiple();
    get RequirementDefinition_requiredConstraint(): Containment {
        this.ensureWiredUp();
        return this._RequirementDefinition_requiredConstraint;
    }
    private readonly _RequirementDefinition_framedConcern = new Containment(this._RequirementDefinition, "framedConcern", "sysml-RequirementDefinition-framedConcern", "sysml-RequirementDefinition-framedConcern").isMultiple();
    get RequirementDefinition_framedConcern(): Containment {
        this.ensureWiredUp();
        return this._RequirementDefinition_framedConcern;
    }

    public readonly _RequirementUsage = new Concept(this._language, "RequirementUsage", "sysml-RequirementUsage", "sysml-RequirementUsage", false);
    get RequirementUsage(): Concept {
        this.ensureWiredUp();
        return this._RequirementUsage;
    }
    private readonly _RequirementUsage_requirementDefinition = new Containment(this._RequirementUsage, "requirementDefinition", "sysml-RequirementUsage-requirementDefinition", "sysml-RequirementUsage-requirementDefinition").isMultiple();
    get RequirementUsage_requirementDefinition(): Containment {
        this.ensureWiredUp();
        return this._RequirementUsage_requirementDefinition;
    }
    private readonly _RequirementUsage_reqId = new Property(this._RequirementUsage, "reqId", "sysml-RequirementUsage-reqId", "sysml-RequirementUsage-reqId");
    get RequirementUsage_reqId(): Property {
        this.ensureWiredUp();
        return this._RequirementUsage_reqId;
    }
    private readonly _RequirementUsage_text = new Property(this._RequirementUsage, "text", "sysml-RequirementUsage-text", "sysml-RequirementUsage-text");
    get RequirementUsage_text(): Property {
        this.ensureWiredUp();
        return this._RequirementUsage_text;
    }
    private readonly _RequirementUsage_requiredConstraint = new Containment(this._RequirementUsage, "requiredConstraint", "sysml-RequirementUsage-requiredConstraint", "sysml-RequirementUsage-requiredConstraint").isMultiple();
    get RequirementUsage_requiredConstraint(): Containment {
        this.ensureWiredUp();
        return this._RequirementUsage_requiredConstraint;
    }
    private readonly _RequirementUsage_assumedConstraint = new Containment(this._RequirementUsage, "assumedConstraint", "sysml-RequirementUsage-assumedConstraint", "sysml-RequirementUsage-assumedConstraint").isMultiple();
    get RequirementUsage_assumedConstraint(): Containment {
        this.ensureWiredUp();
        return this._RequirementUsage_assumedConstraint;
    }
    private readonly _RequirementUsage_subjectParameter = new Containment(this._RequirementUsage, "subjectParameter", "sysml-RequirementUsage-subjectParameter", "sysml-RequirementUsage-subjectParameter").isMultiple();
    get RequirementUsage_subjectParameter(): Containment {
        this.ensureWiredUp();
        return this._RequirementUsage_subjectParameter;
    }
    private readonly _RequirementUsage_framedConcern = new Containment(this._RequirementUsage, "framedConcern", "sysml-RequirementUsage-framedConcern", "sysml-RequirementUsage-framedConcern").isMultiple();
    get RequirementUsage_framedConcern(): Containment {
        this.ensureWiredUp();
        return this._RequirementUsage_framedConcern;
    }
    private readonly _RequirementUsage_actorParameter = new Containment(this._RequirementUsage, "actorParameter", "sysml-RequirementUsage-actorParameter", "sysml-RequirementUsage-actorParameter").isMultiple();
    get RequirementUsage_actorParameter(): Containment {
        this.ensureWiredUp();
        return this._RequirementUsage_actorParameter;
    }
    private readonly _RequirementUsage_stakeholderParameter = new Containment(this._RequirementUsage, "stakeholderParameter", "sysml-RequirementUsage-stakeholderParameter", "sysml-RequirementUsage-stakeholderParameter").isMultiple();
    get RequirementUsage_stakeholderParameter(): Containment {
        this.ensureWiredUp();
        return this._RequirementUsage_stakeholderParameter;
    }

    public readonly _RequirementVerificationMembership = new Concept(this._language, "RequirementVerificationMembership", "sysml-RequirementVerificationMembership", "sysml-RequirementVerificationMembership", false);
    get RequirementVerificationMembership(): Concept {
        this.ensureWiredUp();
        return this._RequirementVerificationMembership;
    }
    private readonly _RequirementVerificationMembership_ownedRequirement = new Containment(this._RequirementVerificationMembership, "ownedRequirement", "sysml-RequirementVerificationMembership-ownedRequirement", "sysml-RequirementVerificationMembership-ownedRequirement").isMultiple();
    get RequirementVerificationMembership_ownedRequirement(): Containment {
        this.ensureWiredUp();
        return this._RequirementVerificationMembership_ownedRequirement;
    }
    private readonly _RequirementVerificationMembership_verifiedRequirement = new Containment(this._RequirementVerificationMembership, "verifiedRequirement", "sysml-RequirementVerificationMembership-verifiedRequirement", "sysml-RequirementVerificationMembership-verifiedRequirement").isMultiple();
    get RequirementVerificationMembership_verifiedRequirement(): Containment {
        this.ensureWiredUp();
        return this._RequirementVerificationMembership_verifiedRequirement;
    }

    public readonly _ResultExpressionMembership = new Concept(this._language, "ResultExpressionMembership", "sysml-ResultExpressionMembership", "sysml-ResultExpressionMembership", false);
    get ResultExpressionMembership(): Concept {
        this.ensureWiredUp();
        return this._ResultExpressionMembership;
    }
    private readonly _ResultExpressionMembership_ownedResultExpression = new Containment(this._ResultExpressionMembership, "ownedResultExpression", "sysml-ResultExpressionMembership-ownedResultExpression", "sysml-ResultExpressionMembership-ownedResultExpression").isMultiple();
    get ResultExpressionMembership_ownedResultExpression(): Containment {
        this.ensureWiredUp();
        return this._ResultExpressionMembership_ownedResultExpression;
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
    private readonly _SatisfyRequirementUsage_satisfiedRequirement = new Containment(this._SatisfyRequirementUsage, "satisfiedRequirement", "sysml-SatisfyRequirementUsage-satisfiedRequirement", "sysml-SatisfyRequirementUsage-satisfiedRequirement").isMultiple();
    get SatisfyRequirementUsage_satisfiedRequirement(): Containment {
        this.ensureWiredUp();
        return this._SatisfyRequirementUsage_satisfiedRequirement;
    }
    private readonly _SatisfyRequirementUsage_satisfyingFeature = new Containment(this._SatisfyRequirementUsage, "satisfyingFeature", "sysml-SatisfyRequirementUsage-satisfyingFeature", "sysml-SatisfyRequirementUsage-satisfyingFeature").isMultiple();
    get SatisfyRequirementUsage_satisfyingFeature(): Containment {
        this.ensureWiredUp();
        return this._SatisfyRequirementUsage_satisfyingFeature;
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
    private readonly _SendActionUsage_receiverArgument = new Containment(this._SendActionUsage, "receiverArgument", "sysml-SendActionUsage-receiverArgument", "sysml-SendActionUsage-receiverArgument").isMultiple();
    get SendActionUsage_receiverArgument(): Containment {
        this.ensureWiredUp();
        return this._SendActionUsage_receiverArgument;
    }
    private readonly _SendActionUsage_payloadArgument = new Containment(this._SendActionUsage, "payloadArgument", "sysml-SendActionUsage-payloadArgument", "sysml-SendActionUsage-payloadArgument").isMultiple();
    get SendActionUsage_payloadArgument(): Containment {
        this.ensureWiredUp();
        return this._SendActionUsage_payloadArgument;
    }
    private readonly _SendActionUsage_senderArgument = new Containment(this._SendActionUsage, "senderArgument", "sysml-SendActionUsage-senderArgument", "sysml-SendActionUsage-senderArgument").isMultiple();
    get SendActionUsage_senderArgument(): Containment {
        this.ensureWiredUp();
        return this._SendActionUsage_senderArgument;
    }

    public readonly _Specialization = new Concept(this._language, "Specialization", "sysml-Specialization", "sysml-Specialization", false);
    get Specialization(): Concept {
        this.ensureWiredUp();
        return this._Specialization;
    }
    private readonly _Specialization_general = new Containment(this._Specialization, "general", "sysml-Specialization-general", "sysml-Specialization-general").isMultiple();
    get Specialization_general(): Containment {
        this.ensureWiredUp();
        return this._Specialization_general;
    }
    private readonly _Specialization_specific = new Containment(this._Specialization, "specific", "sysml-Specialization-specific", "sysml-Specialization-specific").isMultiple();
    get Specialization_specific(): Containment {
        this.ensureWiredUp();
        return this._Specialization_specific;
    }
    private readonly _Specialization_owningType = new Containment(this._Specialization, "owningType", "sysml-Specialization-owningType", "sysml-Specialization-owningType").isMultiple();
    get Specialization_owningType(): Containment {
        this.ensureWiredUp();
        return this._Specialization_owningType;
    }

    public readonly _StakeholderMembership = new Concept(this._language, "StakeholderMembership", "sysml-StakeholderMembership", "sysml-StakeholderMembership", false);
    get StakeholderMembership(): Concept {
        this.ensureWiredUp();
        return this._StakeholderMembership;
    }
    private readonly _StakeholderMembership_ownedStakeholderParameter = new Containment(this._StakeholderMembership, "ownedStakeholderParameter", "sysml-StakeholderMembership-ownedStakeholderParameter", "sysml-StakeholderMembership-ownedStakeholderParameter").isMultiple();
    get StakeholderMembership_ownedStakeholderParameter(): Containment {
        this.ensureWiredUp();
        return this._StakeholderMembership_ownedStakeholderParameter;
    }

    public readonly _StateDefinition = new Concept(this._language, "StateDefinition", "sysml-StateDefinition", "sysml-StateDefinition", false);
    get StateDefinition(): Concept {
        this.ensureWiredUp();
        return this._StateDefinition;
    }
    private readonly _StateDefinition_state = new Containment(this._StateDefinition, "state", "sysml-StateDefinition-state", "sysml-StateDefinition-state").isMultiple();
    get StateDefinition_state(): Containment {
        this.ensureWiredUp();
        return this._StateDefinition_state;
    }
    private readonly _StateDefinition_entryAction = new Containment(this._StateDefinition, "entryAction", "sysml-StateDefinition-entryAction", "sysml-StateDefinition-entryAction").isMultiple();
    get StateDefinition_entryAction(): Containment {
        this.ensureWiredUp();
        return this._StateDefinition_entryAction;
    }
    private readonly _StateDefinition_doAction = new Containment(this._StateDefinition, "doAction", "sysml-StateDefinition-doAction", "sysml-StateDefinition-doAction").isMultiple();
    get StateDefinition_doAction(): Containment {
        this.ensureWiredUp();
        return this._StateDefinition_doAction;
    }
    private readonly _StateDefinition_exitAction = new Containment(this._StateDefinition, "exitAction", "sysml-StateDefinition-exitAction", "sysml-StateDefinition-exitAction").isMultiple();
    get StateDefinition_exitAction(): Containment {
        this.ensureWiredUp();
        return this._StateDefinition_exitAction;
    }
    private readonly _StateDefinition_isParallel = new Property(this._StateDefinition, "isParallel", "sysml-StateDefinition-isParallel", "sysml-StateDefinition-isParallel");
    get StateDefinition_isParallel(): Property {
        this.ensureWiredUp();
        return this._StateDefinition_isParallel;
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
    private readonly _StateSubactionMembership_kind = new Property(this._StateSubactionMembership, "kind", "sysml-StateSubactionMembership-kind", "sysml-StateSubactionMembership-kind");
    get StateSubactionMembership_kind(): Property {
        this.ensureWiredUp();
        return this._StateSubactionMembership_kind;
    }
    private readonly _StateSubactionMembership_action = new Containment(this._StateSubactionMembership, "action", "sysml-StateSubactionMembership-action", "sysml-StateSubactionMembership-action").isMultiple();
    get StateSubactionMembership_action(): Containment {
        this.ensureWiredUp();
        return this._StateSubactionMembership_action;
    }

    public readonly _StateUsage = new Concept(this._language, "StateUsage", "sysml-StateUsage", "sysml-StateUsage", false);
    get StateUsage(): Concept {
        this.ensureWiredUp();
        return this._StateUsage;
    }
    private readonly _StateUsage_stateDefinition = new Containment(this._StateUsage, "stateDefinition", "sysml-StateUsage-stateDefinition", "sysml-StateUsage-stateDefinition").isMultiple();
    get StateUsage_stateDefinition(): Containment {
        this.ensureWiredUp();
        return this._StateUsage_stateDefinition;
    }
    private readonly _StateUsage_entryAction = new Containment(this._StateUsage, "entryAction", "sysml-StateUsage-entryAction", "sysml-StateUsage-entryAction").isMultiple();
    get StateUsage_entryAction(): Containment {
        this.ensureWiredUp();
        return this._StateUsage_entryAction;
    }
    private readonly _StateUsage_doAction = new Containment(this._StateUsage, "doAction", "sysml-StateUsage-doAction", "sysml-StateUsage-doAction").isMultiple();
    get StateUsage_doAction(): Containment {
        this.ensureWiredUp();
        return this._StateUsage_doAction;
    }
    private readonly _StateUsage_exitAction = new Containment(this._StateUsage, "exitAction", "sysml-StateUsage-exitAction", "sysml-StateUsage-exitAction").isMultiple();
    get StateUsage_exitAction(): Containment {
        this.ensureWiredUp();
        return this._StateUsage_exitAction;
    }
    private readonly _StateUsage_isParallel = new Property(this._StateUsage, "isParallel", "sysml-StateUsage-isParallel", "sysml-StateUsage-isParallel");
    get StateUsage_isParallel(): Property {
        this.ensureWiredUp();
        return this._StateUsage_isParallel;
    }

    public readonly _Step = new Concept(this._language, "Step", "sysml-Step", "sysml-Step", false);
    get Step(): Concept {
        this.ensureWiredUp();
        return this._Step;
    }
    private readonly _Step_behavior = new Containment(this._Step, "behavior", "sysml-Step-behavior", "sysml-Step-behavior").isMultiple();
    get Step_behavior(): Containment {
        this.ensureWiredUp();
        return this._Step_behavior;
    }
    private readonly _Step_parameter = new Containment(this._Step, "parameter", "sysml-Step-parameter", "sysml-Step-parameter").isMultiple();
    get Step_parameter(): Containment {
        this.ensureWiredUp();
        return this._Step_parameter;
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
    private readonly _Subclassification_superclassifier = new Containment(this._Subclassification, "superclassifier", "sysml-Subclassification-superclassifier", "sysml-Subclassification-superclassifier").isMultiple();
    get Subclassification_superclassifier(): Containment {
        this.ensureWiredUp();
        return this._Subclassification_superclassifier;
    }
    private readonly _Subclassification_subclassifier = new Containment(this._Subclassification, "subclassifier", "sysml-Subclassification-subclassifier", "sysml-Subclassification-subclassifier").isMultiple();
    get Subclassification_subclassifier(): Containment {
        this.ensureWiredUp();
        return this._Subclassification_subclassifier;
    }
    private readonly _Subclassification_owningClassifier = new Containment(this._Subclassification, "owningClassifier", "sysml-Subclassification-owningClassifier", "sysml-Subclassification-owningClassifier").isMultiple();
    get Subclassification_owningClassifier(): Containment {
        this.ensureWiredUp();
        return this._Subclassification_owningClassifier;
    }

    public readonly _SubjectMembership = new Concept(this._language, "SubjectMembership", "sysml-SubjectMembership", "sysml-SubjectMembership", false);
    get SubjectMembership(): Concept {
        this.ensureWiredUp();
        return this._SubjectMembership;
    }
    private readonly _SubjectMembership_ownedSubjectParameter = new Containment(this._SubjectMembership, "ownedSubjectParameter", "sysml-SubjectMembership-ownedSubjectParameter", "sysml-SubjectMembership-ownedSubjectParameter").isMultiple();
    get SubjectMembership_ownedSubjectParameter(): Containment {
        this.ensureWiredUp();
        return this._SubjectMembership_ownedSubjectParameter;
    }

    public readonly _Subsetting = new Concept(this._language, "Subsetting", "sysml-Subsetting", "sysml-Subsetting", false);
    get Subsetting(): Concept {
        this.ensureWiredUp();
        return this._Subsetting;
    }
    private readonly _Subsetting_subsettedFeature = new Containment(this._Subsetting, "subsettedFeature", "sysml-Subsetting-subsettedFeature", "sysml-Subsetting-subsettedFeature").isMultiple();
    get Subsetting_subsettedFeature(): Containment {
        this.ensureWiredUp();
        return this._Subsetting_subsettedFeature;
    }
    private readonly _Subsetting_subsettingFeature = new Containment(this._Subsetting, "subsettingFeature", "sysml-Subsetting-subsettingFeature", "sysml-Subsetting-subsettingFeature").isMultiple();
    get Subsetting_subsettingFeature(): Containment {
        this.ensureWiredUp();
        return this._Subsetting_subsettingFeature;
    }
    private readonly _Subsetting_owningFeature = new Containment(this._Subsetting, "owningFeature", "sysml-Subsetting-owningFeature", "sysml-Subsetting-owningFeature").isMultiple();
    get Subsetting_owningFeature(): Containment {
        this.ensureWiredUp();
        return this._Subsetting_owningFeature;
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
    private readonly _TerminateActionUsage_terminatedOccurrenceArgument = new Containment(this._TerminateActionUsage, "terminatedOccurrenceArgument", "sysml-TerminateActionUsage-terminatedOccurrenceArgument", "sysml-TerminateActionUsage-terminatedOccurrenceArgument").isMultiple();
    get TerminateActionUsage_terminatedOccurrenceArgument(): Containment {
        this.ensureWiredUp();
        return this._TerminateActionUsage_terminatedOccurrenceArgument;
    }

    public readonly _TextualRepresentation = new Concept(this._language, "TextualRepresentation", "sysml-TextualRepresentation", "sysml-TextualRepresentation", false);
    get TextualRepresentation(): Concept {
        this.ensureWiredUp();
        return this._TextualRepresentation;
    }
    private readonly _TextualRepresentation_language = new Property(this._TextualRepresentation, "language", "sysml-TextualRepresentation-language", "sysml-TextualRepresentation-language");
    get TextualRepresentation_language(): Property {
        this.ensureWiredUp();
        return this._TextualRepresentation_language;
    }
    private readonly _TextualRepresentation_body = new Property(this._TextualRepresentation, "body", "sysml-TextualRepresentation-body", "sysml-TextualRepresentation-body");
    get TextualRepresentation_body(): Property {
        this.ensureWiredUp();
        return this._TextualRepresentation_body;
    }
    private readonly _TextualRepresentation_representedElement = new Containment(this._TextualRepresentation, "representedElement", "sysml-TextualRepresentation-representedElement", "sysml-TextualRepresentation-representedElement").isMultiple();
    get TextualRepresentation_representedElement(): Containment {
        this.ensureWiredUp();
        return this._TextualRepresentation_representedElement;
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
    private readonly _TransitionFeatureMembership_kind = new Property(this._TransitionFeatureMembership, "kind", "sysml-TransitionFeatureMembership-kind", "sysml-TransitionFeatureMembership-kind");
    get TransitionFeatureMembership_kind(): Property {
        this.ensureWiredUp();
        return this._TransitionFeatureMembership_kind;
    }
    private readonly _TransitionFeatureMembership_transitionFeature = new Containment(this._TransitionFeatureMembership, "transitionFeature", "sysml-TransitionFeatureMembership-transitionFeature", "sysml-TransitionFeatureMembership-transitionFeature").isMultiple();
    get TransitionFeatureMembership_transitionFeature(): Containment {
        this.ensureWiredUp();
        return this._TransitionFeatureMembership_transitionFeature;
    }

    public readonly _TransitionUsage = new Concept(this._language, "TransitionUsage", "sysml-TransitionUsage", "sysml-TransitionUsage", false);
    get TransitionUsage(): Concept {
        this.ensureWiredUp();
        return this._TransitionUsage;
    }
    private readonly _TransitionUsage_source = new Containment(this._TransitionUsage, "source", "sysml-TransitionUsage-source", "sysml-TransitionUsage-source").isMultiple();
    get TransitionUsage_source(): Containment {
        this.ensureWiredUp();
        return this._TransitionUsage_source;
    }
    private readonly _TransitionUsage_target = new Containment(this._TransitionUsage, "target", "sysml-TransitionUsage-target", "sysml-TransitionUsage-target").isMultiple();
    get TransitionUsage_target(): Containment {
        this.ensureWiredUp();
        return this._TransitionUsage_target;
    }
    private readonly _TransitionUsage_triggerAction = new Containment(this._TransitionUsage, "triggerAction", "sysml-TransitionUsage-triggerAction", "sysml-TransitionUsage-triggerAction").isMultiple();
    get TransitionUsage_triggerAction(): Containment {
        this.ensureWiredUp();
        return this._TransitionUsage_triggerAction;
    }
    private readonly _TransitionUsage_guardExpression = new Containment(this._TransitionUsage, "guardExpression", "sysml-TransitionUsage-guardExpression", "sysml-TransitionUsage-guardExpression").isMultiple();
    get TransitionUsage_guardExpression(): Containment {
        this.ensureWiredUp();
        return this._TransitionUsage_guardExpression;
    }
    private readonly _TransitionUsage_effectAction = new Containment(this._TransitionUsage, "effectAction", "sysml-TransitionUsage-effectAction", "sysml-TransitionUsage-effectAction").isMultiple();
    get TransitionUsage_effectAction(): Containment {
        this.ensureWiredUp();
        return this._TransitionUsage_effectAction;
    }
    private readonly _TransitionUsage_succession = new Containment(this._TransitionUsage, "succession", "sysml-TransitionUsage-succession", "sysml-TransitionUsage-succession").isMultiple();
    get TransitionUsage_succession(): Containment {
        this.ensureWiredUp();
        return this._TransitionUsage_succession;
    }

    public readonly _TriggerInvocationExpression = new Concept(this._language, "TriggerInvocationExpression", "sysml-TriggerInvocationExpression", "sysml-TriggerInvocationExpression", false);
    get TriggerInvocationExpression(): Concept {
        this.ensureWiredUp();
        return this._TriggerInvocationExpression;
    }
    private readonly _TriggerInvocationExpression_kind = new Property(this._TriggerInvocationExpression, "kind", "sysml-TriggerInvocationExpression-kind", "sysml-TriggerInvocationExpression-kind");
    get TriggerInvocationExpression_kind(): Property {
        this.ensureWiredUp();
        return this._TriggerInvocationExpression_kind;
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
    private readonly _Type_ownedSpecialization = new Containment(this._Type, "ownedSpecialization", "sysml-Type-ownedSpecialization", "sysml-Type-ownedSpecialization").isMultiple();
    get Type_ownedSpecialization(): Containment {
        this.ensureWiredUp();
        return this._Type_ownedSpecialization;
    }
    private readonly _Type_ownedFeatureMembership = new Containment(this._Type, "ownedFeatureMembership", "sysml-Type-ownedFeatureMembership", "sysml-Type-ownedFeatureMembership").isMultiple();
    get Type_ownedFeatureMembership(): Containment {
        this.ensureWiredUp();
        return this._Type_ownedFeatureMembership;
    }
    private readonly _Type_feature = new Containment(this._Type, "feature", "sysml-Type-feature", "sysml-Type-feature").isMultiple();
    get Type_feature(): Containment {
        this.ensureWiredUp();
        return this._Type_feature;
    }
    private readonly _Type_ownedFeature = new Containment(this._Type, "ownedFeature", "sysml-Type-ownedFeature", "sysml-Type-ownedFeature").isMultiple();
    get Type_ownedFeature(): Containment {
        this.ensureWiredUp();
        return this._Type_ownedFeature;
    }
    private readonly _Type_input = new Containment(this._Type, "input", "sysml-Type-input", "sysml-Type-input").isMultiple();
    get Type_input(): Containment {
        this.ensureWiredUp();
        return this._Type_input;
    }
    private readonly _Type_output = new Containment(this._Type, "output", "sysml-Type-output", "sysml-Type-output").isMultiple();
    get Type_output(): Containment {
        this.ensureWiredUp();
        return this._Type_output;
    }
    private readonly _Type_isAbstract = new Property(this._Type, "isAbstract", "sysml-Type-isAbstract", "sysml-Type-isAbstract");
    get Type_isAbstract(): Property {
        this.ensureWiredUp();
        return this._Type_isAbstract;
    }
    private readonly _Type_inheritedMembership = new Containment(this._Type, "inheritedMembership", "sysml-Type-inheritedMembership", "sysml-Type-inheritedMembership").isMultiple();
    get Type_inheritedMembership(): Containment {
        this.ensureWiredUp();
        return this._Type_inheritedMembership;
    }
    private readonly _Type_endFeature = new Containment(this._Type, "endFeature", "sysml-Type-endFeature", "sysml-Type-endFeature").isMultiple();
    get Type_endFeature(): Containment {
        this.ensureWiredUp();
        return this._Type_endFeature;
    }
    private readonly _Type_ownedEndFeature = new Containment(this._Type, "ownedEndFeature", "sysml-Type-ownedEndFeature", "sysml-Type-ownedEndFeature").isMultiple();
    get Type_ownedEndFeature(): Containment {
        this.ensureWiredUp();
        return this._Type_ownedEndFeature;
    }
    private readonly _Type_isSufficient = new Property(this._Type, "isSufficient", "sysml-Type-isSufficient", "sysml-Type-isSufficient");
    get Type_isSufficient(): Property {
        this.ensureWiredUp();
        return this._Type_isSufficient;
    }
    private readonly _Type_ownedConjugator = new Containment(this._Type, "ownedConjugator", "sysml-Type-ownedConjugator", "sysml-Type-ownedConjugator").isMultiple();
    get Type_ownedConjugator(): Containment {
        this.ensureWiredUp();
        return this._Type_ownedConjugator;
    }
    private readonly _Type_isConjugated = new Property(this._Type, "isConjugated", "sysml-Type-isConjugated", "sysml-Type-isConjugated");
    get Type_isConjugated(): Property {
        this.ensureWiredUp();
        return this._Type_isConjugated;
    }
    private readonly _Type_inheritedFeature = new Containment(this._Type, "inheritedFeature", "sysml-Type-inheritedFeature", "sysml-Type-inheritedFeature").isMultiple();
    get Type_inheritedFeature(): Containment {
        this.ensureWiredUp();
        return this._Type_inheritedFeature;
    }
    private readonly _Type_multiplicity = new Containment(this._Type, "multiplicity", "sysml-Type-multiplicity", "sysml-Type-multiplicity").isMultiple();
    get Type_multiplicity(): Containment {
        this.ensureWiredUp();
        return this._Type_multiplicity;
    }
    private readonly _Type_unioningType = new Containment(this._Type, "unioningType", "sysml-Type-unioningType", "sysml-Type-unioningType").isMultiple();
    get Type_unioningType(): Containment {
        this.ensureWiredUp();
        return this._Type_unioningType;
    }
    private readonly _Type_ownedIntersecting = new Containment(this._Type, "ownedIntersecting", "sysml-Type-ownedIntersecting", "sysml-Type-ownedIntersecting").isMultiple();
    get Type_ownedIntersecting(): Containment {
        this.ensureWiredUp();
        return this._Type_ownedIntersecting;
    }
    private readonly _Type_intersectingType = new Containment(this._Type, "intersectingType", "sysml-Type-intersectingType", "sysml-Type-intersectingType").isMultiple();
    get Type_intersectingType(): Containment {
        this.ensureWiredUp();
        return this._Type_intersectingType;
    }
    private readonly _Type_ownedUnioning = new Containment(this._Type, "ownedUnioning", "sysml-Type-ownedUnioning", "sysml-Type-ownedUnioning").isMultiple();
    get Type_ownedUnioning(): Containment {
        this.ensureWiredUp();
        return this._Type_ownedUnioning;
    }
    private readonly _Type_ownedDisjoining = new Containment(this._Type, "ownedDisjoining", "sysml-Type-ownedDisjoining", "sysml-Type-ownedDisjoining").isMultiple();
    get Type_ownedDisjoining(): Containment {
        this.ensureWiredUp();
        return this._Type_ownedDisjoining;
    }
    private readonly _Type_featureMembership = new Containment(this._Type, "featureMembership", "sysml-Type-featureMembership", "sysml-Type-featureMembership").isMultiple();
    get Type_featureMembership(): Containment {
        this.ensureWiredUp();
        return this._Type_featureMembership;
    }
    private readonly _Type_differencingType = new Containment(this._Type, "differencingType", "sysml-Type-differencingType", "sysml-Type-differencingType").isMultiple();
    get Type_differencingType(): Containment {
        this.ensureWiredUp();
        return this._Type_differencingType;
    }
    private readonly _Type_ownedDifferencing = new Containment(this._Type, "ownedDifferencing", "sysml-Type-ownedDifferencing", "sysml-Type-ownedDifferencing").isMultiple();
    get Type_ownedDifferencing(): Containment {
        this.ensureWiredUp();
        return this._Type_ownedDifferencing;
    }
    private readonly _Type_directedFeature = new Containment(this._Type, "directedFeature", "sysml-Type-directedFeature", "sysml-Type-directedFeature").isMultiple();
    get Type_directedFeature(): Containment {
        this.ensureWiredUp();
        return this._Type_directedFeature;
    }

    public readonly _TypeFeaturing = new Concept(this._language, "TypeFeaturing", "sysml-TypeFeaturing", "sysml-TypeFeaturing", false);
    get TypeFeaturing(): Concept {
        this.ensureWiredUp();
        return this._TypeFeaturing;
    }
    private readonly _TypeFeaturing_featureOfType = new Containment(this._TypeFeaturing, "featureOfType", "sysml-TypeFeaturing-featureOfType", "sysml-TypeFeaturing-featureOfType").isMultiple();
    get TypeFeaturing_featureOfType(): Containment {
        this.ensureWiredUp();
        return this._TypeFeaturing_featureOfType;
    }
    private readonly _TypeFeaturing_featuringType = new Containment(this._TypeFeaturing, "featuringType", "sysml-TypeFeaturing-featuringType", "sysml-TypeFeaturing-featuringType").isMultiple();
    get TypeFeaturing_featuringType(): Containment {
        this.ensureWiredUp();
        return this._TypeFeaturing_featuringType;
    }
    private readonly _TypeFeaturing_owningFeatureOfType = new Containment(this._TypeFeaturing, "owningFeatureOfType", "sysml-TypeFeaturing-owningFeatureOfType", "sysml-TypeFeaturing-owningFeatureOfType").isMultiple();
    get TypeFeaturing_owningFeatureOfType(): Containment {
        this.ensureWiredUp();
        return this._TypeFeaturing_owningFeatureOfType;
    }

    public readonly _Unioning = new Concept(this._language, "Unioning", "sysml-Unioning", "sysml-Unioning", false);
    get Unioning(): Concept {
        this.ensureWiredUp();
        return this._Unioning;
    }
    private readonly _Unioning_unioningType = new Containment(this._Unioning, "unioningType", "sysml-Unioning-unioningType", "sysml-Unioning-unioningType").isMultiple();
    get Unioning_unioningType(): Containment {
        this.ensureWiredUp();
        return this._Unioning_unioningType;
    }
    private readonly _Unioning_typeUnioned = new Containment(this._Unioning, "typeUnioned", "sysml-Unioning-typeUnioned", "sysml-Unioning-typeUnioned").isMultiple();
    get Unioning_typeUnioned(): Containment {
        this.ensureWiredUp();
        return this._Unioning_typeUnioned;
    }

    public readonly _Usage = new Concept(this._language, "Usage", "sysml-Usage", "sysml-Usage", false);
    get Usage(): Concept {
        this.ensureWiredUp();
        return this._Usage;
    }
    private readonly _Usage_mayTimeVary = new Property(this._Usage, "mayTimeVary", "sysml-Usage-mayTimeVary", "sysml-Usage-mayTimeVary");
    get Usage_mayTimeVary(): Property {
        this.ensureWiredUp();
        return this._Usage_mayTimeVary;
    }
    private readonly _Usage_isReference = new Property(this._Usage, "isReference", "sysml-Usage-isReference", "sysml-Usage-isReference");
    get Usage_isReference(): Property {
        this.ensureWiredUp();
        return this._Usage_isReference;
    }
    private readonly _Usage_variant = new Containment(this._Usage, "variant", "sysml-Usage-variant", "sysml-Usage-variant").isMultiple();
    get Usage_variant(): Containment {
        this.ensureWiredUp();
        return this._Usage_variant;
    }
    private readonly _Usage_variantMembership = new Containment(this._Usage, "variantMembership", "sysml-Usage-variantMembership", "sysml-Usage-variantMembership").isMultiple();
    get Usage_variantMembership(): Containment {
        this.ensureWiredUp();
        return this._Usage_variantMembership;
    }
    private readonly _Usage_owningDefinition = new Containment(this._Usage, "owningDefinition", "sysml-Usage-owningDefinition", "sysml-Usage-owningDefinition").isMultiple();
    get Usage_owningDefinition(): Containment {
        this.ensureWiredUp();
        return this._Usage_owningDefinition;
    }
    private readonly _Usage_owningUsage = new Containment(this._Usage, "owningUsage", "sysml-Usage-owningUsage", "sysml-Usage-owningUsage").isMultiple();
    get Usage_owningUsage(): Containment {
        this.ensureWiredUp();
        return this._Usage_owningUsage;
    }
    private readonly _Usage_nestedUsage = new Containment(this._Usage, "nestedUsage", "sysml-Usage-nestedUsage", "sysml-Usage-nestedUsage").isMultiple();
    get Usage_nestedUsage(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedUsage;
    }
    private readonly _Usage_definition = new Containment(this._Usage, "definition", "sysml-Usage-definition", "sysml-Usage-definition").isMultiple();
    get Usage_definition(): Containment {
        this.ensureWiredUp();
        return this._Usage_definition;
    }
    private readonly _Usage_usage = new Containment(this._Usage, "usage", "sysml-Usage-usage", "sysml-Usage-usage").isMultiple();
    get Usage_usage(): Containment {
        this.ensureWiredUp();
        return this._Usage_usage;
    }
    private readonly _Usage_directedUsage = new Containment(this._Usage, "directedUsage", "sysml-Usage-directedUsage", "sysml-Usage-directedUsage").isMultiple();
    get Usage_directedUsage(): Containment {
        this.ensureWiredUp();
        return this._Usage_directedUsage;
    }
    private readonly _Usage_nestedReference = new Containment(this._Usage, "nestedReference", "sysml-Usage-nestedReference", "sysml-Usage-nestedReference").isMultiple();
    get Usage_nestedReference(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedReference;
    }
    private readonly _Usage_nestedAttribute = new Containment(this._Usage, "nestedAttribute", "sysml-Usage-nestedAttribute", "sysml-Usage-nestedAttribute").isMultiple();
    get Usage_nestedAttribute(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedAttribute;
    }
    private readonly _Usage_nestedEnumeration = new Containment(this._Usage, "nestedEnumeration", "sysml-Usage-nestedEnumeration", "sysml-Usage-nestedEnumeration").isMultiple();
    get Usage_nestedEnumeration(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedEnumeration;
    }
    private readonly _Usage_nestedOccurrence = new Containment(this._Usage, "nestedOccurrence", "sysml-Usage-nestedOccurrence", "sysml-Usage-nestedOccurrence").isMultiple();
    get Usage_nestedOccurrence(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedOccurrence;
    }
    private readonly _Usage_nestedItem = new Containment(this._Usage, "nestedItem", "sysml-Usage-nestedItem", "sysml-Usage-nestedItem").isMultiple();
    get Usage_nestedItem(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedItem;
    }
    private readonly _Usage_nestedPart = new Containment(this._Usage, "nestedPart", "sysml-Usage-nestedPart", "sysml-Usage-nestedPart").isMultiple();
    get Usage_nestedPart(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedPart;
    }
    private readonly _Usage_nestedPort = new Containment(this._Usage, "nestedPort", "sysml-Usage-nestedPort", "sysml-Usage-nestedPort").isMultiple();
    get Usage_nestedPort(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedPort;
    }
    private readonly _Usage_nestedConnection = new Containment(this._Usage, "nestedConnection", "sysml-Usage-nestedConnection", "sysml-Usage-nestedConnection").isMultiple();
    get Usage_nestedConnection(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedConnection;
    }
    private readonly _Usage_nestedFlow = new Containment(this._Usage, "nestedFlow", "sysml-Usage-nestedFlow", "sysml-Usage-nestedFlow").isMultiple();
    get Usage_nestedFlow(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedFlow;
    }
    private readonly _Usage_nestedInterface = new Containment(this._Usage, "nestedInterface", "sysml-Usage-nestedInterface", "sysml-Usage-nestedInterface").isMultiple();
    get Usage_nestedInterface(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedInterface;
    }
    private readonly _Usage_nestedAllocation = new Containment(this._Usage, "nestedAllocation", "sysml-Usage-nestedAllocation", "sysml-Usage-nestedAllocation").isMultiple();
    get Usage_nestedAllocation(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedAllocation;
    }
    private readonly _Usage_nestedAction = new Containment(this._Usage, "nestedAction", "sysml-Usage-nestedAction", "sysml-Usage-nestedAction").isMultiple();
    get Usage_nestedAction(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedAction;
    }
    private readonly _Usage_nestedState = new Containment(this._Usage, "nestedState", "sysml-Usage-nestedState", "sysml-Usage-nestedState").isMultiple();
    get Usage_nestedState(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedState;
    }
    private readonly _Usage_nestedTransition = new Containment(this._Usage, "nestedTransition", "sysml-Usage-nestedTransition", "sysml-Usage-nestedTransition").isMultiple();
    get Usage_nestedTransition(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedTransition;
    }
    private readonly _Usage_nestedCalculation = new Containment(this._Usage, "nestedCalculation", "sysml-Usage-nestedCalculation", "sysml-Usage-nestedCalculation").isMultiple();
    get Usage_nestedCalculation(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedCalculation;
    }
    private readonly _Usage_nestedConstraint = new Containment(this._Usage, "nestedConstraint", "sysml-Usage-nestedConstraint", "sysml-Usage-nestedConstraint").isMultiple();
    get Usage_nestedConstraint(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedConstraint;
    }
    private readonly _Usage_nestedRequirement = new Containment(this._Usage, "nestedRequirement", "sysml-Usage-nestedRequirement", "sysml-Usage-nestedRequirement").isMultiple();
    get Usage_nestedRequirement(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedRequirement;
    }
    private readonly _Usage_nestedConcern = new Containment(this._Usage, "nestedConcern", "sysml-Usage-nestedConcern", "sysml-Usage-nestedConcern").isMultiple();
    get Usage_nestedConcern(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedConcern;
    }
    private readonly _Usage_nestedCase = new Containment(this._Usage, "nestedCase", "sysml-Usage-nestedCase", "sysml-Usage-nestedCase").isMultiple();
    get Usage_nestedCase(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedCase;
    }
    private readonly _Usage_nestedAnalysisCase = new Containment(this._Usage, "nestedAnalysisCase", "sysml-Usage-nestedAnalysisCase", "sysml-Usage-nestedAnalysisCase").isMultiple();
    get Usage_nestedAnalysisCase(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedAnalysisCase;
    }
    private readonly _Usage_nestedVerificationCase = new Containment(this._Usage, "nestedVerificationCase", "sysml-Usage-nestedVerificationCase", "sysml-Usage-nestedVerificationCase").isMultiple();
    get Usage_nestedVerificationCase(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedVerificationCase;
    }
    private readonly _Usage_nestedUseCase = new Containment(this._Usage, "nestedUseCase", "sysml-Usage-nestedUseCase", "sysml-Usage-nestedUseCase").isMultiple();
    get Usage_nestedUseCase(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedUseCase;
    }
    private readonly _Usage_nestedView = new Containment(this._Usage, "nestedView", "sysml-Usage-nestedView", "sysml-Usage-nestedView").isMultiple();
    get Usage_nestedView(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedView;
    }
    private readonly _Usage_nestedViewpoint = new Containment(this._Usage, "nestedViewpoint", "sysml-Usage-nestedViewpoint", "sysml-Usage-nestedViewpoint").isMultiple();
    get Usage_nestedViewpoint(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedViewpoint;
    }
    private readonly _Usage_nestedRendering = new Containment(this._Usage, "nestedRendering", "sysml-Usage-nestedRendering", "sysml-Usage-nestedRendering").isMultiple();
    get Usage_nestedRendering(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedRendering;
    }
    private readonly _Usage_nestedMetadata = new Containment(this._Usage, "nestedMetadata", "sysml-Usage-nestedMetadata", "sysml-Usage-nestedMetadata").isMultiple();
    get Usage_nestedMetadata(): Containment {
        this.ensureWiredUp();
        return this._Usage_nestedMetadata;
    }
    private readonly _Usage_isVariation = new Property(this._Usage, "isVariation", "sysml-Usage-isVariation", "sysml-Usage-isVariation");
    get Usage_isVariation(): Property {
        this.ensureWiredUp();
        return this._Usage_isVariation;
    }

    public readonly _UseCaseDefinition = new Concept(this._language, "UseCaseDefinition", "sysml-UseCaseDefinition", "sysml-UseCaseDefinition", false);
    get UseCaseDefinition(): Concept {
        this.ensureWiredUp();
        return this._UseCaseDefinition;
    }
    private readonly _UseCaseDefinition_includedUseCase = new Containment(this._UseCaseDefinition, "includedUseCase", "sysml-UseCaseDefinition-includedUseCase", "sysml-UseCaseDefinition-includedUseCase").isMultiple();
    get UseCaseDefinition_includedUseCase(): Containment {
        this.ensureWiredUp();
        return this._UseCaseDefinition_includedUseCase;
    }

    public readonly _UseCaseUsage = new Concept(this._language, "UseCaseUsage", "sysml-UseCaseUsage", "sysml-UseCaseUsage", false);
    get UseCaseUsage(): Concept {
        this.ensureWiredUp();
        return this._UseCaseUsage;
    }
    private readonly _UseCaseUsage_useCaseDefinition = new Containment(this._UseCaseUsage, "useCaseDefinition", "sysml-UseCaseUsage-useCaseDefinition", "sysml-UseCaseUsage-useCaseDefinition").isMultiple();
    get UseCaseUsage_useCaseDefinition(): Containment {
        this.ensureWiredUp();
        return this._UseCaseUsage_useCaseDefinition;
    }
    private readonly _UseCaseUsage_includedUseCase = new Containment(this._UseCaseUsage, "includedUseCase", "sysml-UseCaseUsage-includedUseCase", "sysml-UseCaseUsage-includedUseCase").isMultiple();
    get UseCaseUsage_includedUseCase(): Containment {
        this.ensureWiredUp();
        return this._UseCaseUsage_includedUseCase;
    }

    public readonly _VariantMembership = new Concept(this._language, "VariantMembership", "sysml-VariantMembership", "sysml-VariantMembership", false);
    get VariantMembership(): Concept {
        this.ensureWiredUp();
        return this._VariantMembership;
    }
    private readonly _VariantMembership_ownedVariantUsage = new Containment(this._VariantMembership, "ownedVariantUsage", "sysml-VariantMembership-ownedVariantUsage", "sysml-VariantMembership-ownedVariantUsage").isMultiple();
    get VariantMembership_ownedVariantUsage(): Containment {
        this.ensureWiredUp();
        return this._VariantMembership_ownedVariantUsage;
    }

    public readonly _VerificationCaseDefinition = new Concept(this._language, "VerificationCaseDefinition", "sysml-VerificationCaseDefinition", "sysml-VerificationCaseDefinition", false);
    get VerificationCaseDefinition(): Concept {
        this.ensureWiredUp();
        return this._VerificationCaseDefinition;
    }
    private readonly _VerificationCaseDefinition_verifiedRequirement = new Containment(this._VerificationCaseDefinition, "verifiedRequirement", "sysml-VerificationCaseDefinition-verifiedRequirement", "sysml-VerificationCaseDefinition-verifiedRequirement").isMultiple();
    get VerificationCaseDefinition_verifiedRequirement(): Containment {
        this.ensureWiredUp();
        return this._VerificationCaseDefinition_verifiedRequirement;
    }

    public readonly _VerificationCaseUsage = new Concept(this._language, "VerificationCaseUsage", "sysml-VerificationCaseUsage", "sysml-VerificationCaseUsage", false);
    get VerificationCaseUsage(): Concept {
        this.ensureWiredUp();
        return this._VerificationCaseUsage;
    }
    private readonly _VerificationCaseUsage_verificationCaseDefinition = new Containment(this._VerificationCaseUsage, "verificationCaseDefinition", "sysml-VerificationCaseUsage-verificationCaseDefinition", "sysml-VerificationCaseUsage-verificationCaseDefinition").isMultiple();
    get VerificationCaseUsage_verificationCaseDefinition(): Containment {
        this.ensureWiredUp();
        return this._VerificationCaseUsage_verificationCaseDefinition;
    }
    private readonly _VerificationCaseUsage_verifiedRequirement = new Containment(this._VerificationCaseUsage, "verifiedRequirement", "sysml-VerificationCaseUsage-verifiedRequirement", "sysml-VerificationCaseUsage-verifiedRequirement").isMultiple();
    get VerificationCaseUsage_verifiedRequirement(): Containment {
        this.ensureWiredUp();
        return this._VerificationCaseUsage_verifiedRequirement;
    }

    public readonly _ViewDefinition = new Concept(this._language, "ViewDefinition", "sysml-ViewDefinition", "sysml-ViewDefinition", false);
    get ViewDefinition(): Concept {
        this.ensureWiredUp();
        return this._ViewDefinition;
    }
    private readonly _ViewDefinition_view = new Containment(this._ViewDefinition, "view", "sysml-ViewDefinition-view", "sysml-ViewDefinition-view").isMultiple();
    get ViewDefinition_view(): Containment {
        this.ensureWiredUp();
        return this._ViewDefinition_view;
    }
    private readonly _ViewDefinition_satisfiedViewpoint = new Containment(this._ViewDefinition, "satisfiedViewpoint", "sysml-ViewDefinition-satisfiedViewpoint", "sysml-ViewDefinition-satisfiedViewpoint").isMultiple();
    get ViewDefinition_satisfiedViewpoint(): Containment {
        this.ensureWiredUp();
        return this._ViewDefinition_satisfiedViewpoint;
    }
    private readonly _ViewDefinition_viewRendering = new Containment(this._ViewDefinition, "viewRendering", "sysml-ViewDefinition-viewRendering", "sysml-ViewDefinition-viewRendering").isMultiple();
    get ViewDefinition_viewRendering(): Containment {
        this.ensureWiredUp();
        return this._ViewDefinition_viewRendering;
    }
    private readonly _ViewDefinition_viewCondition = new Containment(this._ViewDefinition, "viewCondition", "sysml-ViewDefinition-viewCondition", "sysml-ViewDefinition-viewCondition").isMultiple();
    get ViewDefinition_viewCondition(): Containment {
        this.ensureWiredUp();
        return this._ViewDefinition_viewCondition;
    }

    public readonly _ViewRenderingMembership = new Concept(this._language, "ViewRenderingMembership", "sysml-ViewRenderingMembership", "sysml-ViewRenderingMembership", false);
    get ViewRenderingMembership(): Concept {
        this.ensureWiredUp();
        return this._ViewRenderingMembership;
    }
    private readonly _ViewRenderingMembership_ownedRendering = new Containment(this._ViewRenderingMembership, "ownedRendering", "sysml-ViewRenderingMembership-ownedRendering", "sysml-ViewRenderingMembership-ownedRendering").isMultiple();
    get ViewRenderingMembership_ownedRendering(): Containment {
        this.ensureWiredUp();
        return this._ViewRenderingMembership_ownedRendering;
    }
    private readonly _ViewRenderingMembership_referencedRendering = new Containment(this._ViewRenderingMembership, "referencedRendering", "sysml-ViewRenderingMembership-referencedRendering", "sysml-ViewRenderingMembership-referencedRendering").isMultiple();
    get ViewRenderingMembership_referencedRendering(): Containment {
        this.ensureWiredUp();
        return this._ViewRenderingMembership_referencedRendering;
    }

    public readonly _ViewUsage = new Concept(this._language, "ViewUsage", "sysml-ViewUsage", "sysml-ViewUsage", false);
    get ViewUsage(): Concept {
        this.ensureWiredUp();
        return this._ViewUsage;
    }
    private readonly _ViewUsage_viewDefinition = new Containment(this._ViewUsage, "viewDefinition", "sysml-ViewUsage-viewDefinition", "sysml-ViewUsage-viewDefinition").isMultiple();
    get ViewUsage_viewDefinition(): Containment {
        this.ensureWiredUp();
        return this._ViewUsage_viewDefinition;
    }
    private readonly _ViewUsage_satisfiedViewpoint = new Containment(this._ViewUsage, "satisfiedViewpoint", "sysml-ViewUsage-satisfiedViewpoint", "sysml-ViewUsage-satisfiedViewpoint").isMultiple();
    get ViewUsage_satisfiedViewpoint(): Containment {
        this.ensureWiredUp();
        return this._ViewUsage_satisfiedViewpoint;
    }
    private readonly _ViewUsage_exposedElement = new Containment(this._ViewUsage, "exposedElement", "sysml-ViewUsage-exposedElement", "sysml-ViewUsage-exposedElement").isMultiple();
    get ViewUsage_exposedElement(): Containment {
        this.ensureWiredUp();
        return this._ViewUsage_exposedElement;
    }
    private readonly _ViewUsage_viewRendering = new Containment(this._ViewUsage, "viewRendering", "sysml-ViewUsage-viewRendering", "sysml-ViewUsage-viewRendering").isMultiple();
    get ViewUsage_viewRendering(): Containment {
        this.ensureWiredUp();
        return this._ViewUsage_viewRendering;
    }
    private readonly _ViewUsage_viewCondition = new Containment(this._ViewUsage, "viewCondition", "sysml-ViewUsage-viewCondition", "sysml-ViewUsage-viewCondition").isMultiple();
    get ViewUsage_viewCondition(): Containment {
        this.ensureWiredUp();
        return this._ViewUsage_viewCondition;
    }

    public readonly _ViewpointDefinition = new Concept(this._language, "ViewpointDefinition", "sysml-ViewpointDefinition", "sysml-ViewpointDefinition", false);
    get ViewpointDefinition(): Concept {
        this.ensureWiredUp();
        return this._ViewpointDefinition;
    }
    private readonly _ViewpointDefinition_viewpointStakeholder = new Containment(this._ViewpointDefinition, "viewpointStakeholder", "sysml-ViewpointDefinition-viewpointStakeholder", "sysml-ViewpointDefinition-viewpointStakeholder").isMultiple();
    get ViewpointDefinition_viewpointStakeholder(): Containment {
        this.ensureWiredUp();
        return this._ViewpointDefinition_viewpointStakeholder;
    }

    public readonly _ViewpointUsage = new Concept(this._language, "ViewpointUsage", "sysml-ViewpointUsage", "sysml-ViewpointUsage", false);
    get ViewpointUsage(): Concept {
        this.ensureWiredUp();
        return this._ViewpointUsage;
    }
    private readonly _ViewpointUsage_viewpointDefinition = new Containment(this._ViewpointUsage, "viewpointDefinition", "sysml-ViewpointUsage-viewpointDefinition", "sysml-ViewpointUsage-viewpointDefinition").isMultiple();
    get ViewpointUsage_viewpointDefinition(): Containment {
        this.ensureWiredUp();
        return this._ViewpointUsage_viewpointDefinition;
    }
    private readonly _ViewpointUsage_viewpointStakeholder = new Containment(this._ViewpointUsage, "viewpointStakeholder", "sysml-ViewpointUsage-viewpointStakeholder", "sysml-ViewpointUsage-viewpointStakeholder").isMultiple();
    get ViewpointUsage_viewpointStakeholder(): Containment {
        this.ensureWiredUp();
        return this._ViewpointUsage_viewpointStakeholder;
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
    private readonly _WhileLoopActionUsage_whileArgument = new Containment(this._WhileLoopActionUsage, "whileArgument", "sysml-WhileLoopActionUsage-whileArgument", "sysml-WhileLoopActionUsage-whileArgument").isMultiple();
    get WhileLoopActionUsage_whileArgument(): Containment {
        this.ensureWiredUp();
        return this._WhileLoopActionUsage_whileArgument;
    }
    private readonly _WhileLoopActionUsage_untilArgument = new Containment(this._WhileLoopActionUsage, "untilArgument", "sysml-WhileLoopActionUsage-untilArgument", "sysml-WhileLoopActionUsage-untilArgument").isMultiple();
    get WhileLoopActionUsage_untilArgument(): Containment {
        this.ensureWiredUp();
        return this._WhileLoopActionUsage_untilArgument;
    }

    private _wiredUp: boolean = false;
    private ensureWiredUp() {
        if (this._wiredUp) {
            return;
        }
        this._language.havingEntities(this._AcceptActionUsage, this._ActionDefinition, this._ActionUsage, this._ActorMembership, this._AllocationDefinition, this._AllocationUsage, this._AnalysisCaseDefinition, this._AnalysisCaseUsage, this._AnnotatingElement, this._Annotation, this._AssertConstraintUsage, this._AssignmentActionUsage, this._Association, this._AssociationStructure, this._AttributeDefinition, this._AttributeUsage, this._Behavior, this._BindingConnector, this._BindingConnectorAsUsage, this._BooleanExpression, this._CalculationDefinition, this._CalculationUsage, this._CaseDefinition, this._CaseUsage, this._Class, this._sysmlClassifier, this._CollectExpression, this._Comment, this._ConcernDefinition, this._ConcernUsage, this._ConjugatedPortDefinition, this._ConjugatedPortTyping, this._Conjugation, this._ConnectionDefinition, this._ConnectionUsage, this._Connector, this._ConnectorAsUsage, this._ConstraintDefinition, this._ConstraintUsage, this._ConstructorExpression, this._ControlNode, this._CrossSubsetting, this._DataType, this._DecisionNode, this._Definition, this._Dependency, this._Differencing, this._Disjoining, this._Documentation, this._Element, this._ElementFilterMembership, this._EndFeatureMembership, this._EnumerationDefinition, this._EnumerationUsage, this._EventOccurrenceUsage, this._ExhibitStateUsage, this._Expose, this._Expression, this._Feature, this._FeatureChainExpression, this._FeatureChaining, this._FeatureDirectionKind, this._FeatureInverting, this._FeatureMembership, this._FeatureReferenceExpression, this._FeatureTyping, this._FeatureValue, this._Flow, this._FlowDefinition, this._FlowEnd, this._FlowUsage, this._ForLoopActionUsage, this._ForkNode, this._FramedConcernMembership, this._Function, this._IfActionUsage, this._Import, this._IncludeUseCaseUsage, this._IndexExpression, this._InstantiationExpression, this._Interaction, this._InterfaceDefinition, this._InterfaceUsage, this._Intersecting, this._Invariant, this._InvocationExpression, this._ItemDefinition, this._ItemUsage, this._JoinNode, this._LibraryPackage, this._LiteralBoolean, this._LiteralExpression, this._LiteralInfinity, this._LiteralInteger, this._LiteralRational, this._LiteralString, this._LoopActionUsage, this._Membership, this._MembershipExpose, this._MembershipImport, this._MergeNode, this._Metaclass, this._MetadataAccessExpression, this._MetadataDefinition, this._MetadataFeature, this._MetadataUsage, this._Multiplicity, this._MultiplicityRange, this._Namespace, this._NamespaceExpose, this._NamespaceImport, this._NullExpression, this._ObjectiveMembership, this._OccurrenceDefinition, this._OccurrenceUsage, this._OperatorExpression, this._OwningMembership, this._Package, this._ParameterMembership, this._PartDefinition, this._PartUsage, this._PayloadFeature, this._PerformActionUsage, this._PortConjugation, this._PortDefinition, this._PortUsage, this._PortionKind, this._Predicate, this._Redefinition, this._ReferenceSubsetting, this._ReferenceUsage, this._Relationship, this._RenderingDefinition, this._RenderingUsage, this._RequirementConstraintKind, this._RequirementConstraintMembership, this._RequirementDefinition, this._RequirementUsage, this._RequirementVerificationMembership, this._ResultExpressionMembership, this._ReturnParameterMembership, this._SatisfyRequirementUsage, this._SelectExpression, this._SendActionUsage, this._Specialization, this._StakeholderMembership, this._StateDefinition, this._StateSubactionKind, this._StateSubactionMembership, this._StateUsage, this._Step, this._Structure, this._Subclassification, this._SubjectMembership, this._Subsetting, this._Succession, this._SuccessionAsUsage, this._SuccessionFlow, this._SuccessionFlowUsage, this._TerminateActionUsage, this._TextualRepresentation, this._TransitionFeatureKind, this._TransitionFeatureMembership, this._TransitionUsage, this._TriggerInvocationExpression, this._TriggerKind, this._Type, this._TypeFeaturing, this._Unioning, this._Usage, this._UseCaseDefinition, this._UseCaseUsage, this._VariantMembership, this._VerificationCaseDefinition, this._VerificationCaseUsage, this._ViewDefinition, this._ViewRenderingMembership, this._ViewUsage, this._ViewpointDefinition, this._ViewpointUsage, this._VisibilityKind, this._WhileLoopActionUsage);
        this._AcceptActionUsage.extends = this._ActionUsage;
        this._AcceptActionUsage.havingFeatures(this._AcceptActionUsage_receiverArgument, this._AcceptActionUsage_payloadParameter, this._AcceptActionUsage_payloadArgument);
        this._AcceptActionUsage_receiverArgument.ofType(this._Expression);
        this._AcceptActionUsage_payloadParameter.ofType(this._ReferenceUsage);
        this._AcceptActionUsage_payloadArgument.ofType(this._Expression);
        this._ActionDefinition.extends = this._OccurrenceDefinition;
        this._ActionDefinition.havingFeatures(this._ActionDefinition_action);
        this._ActionDefinition_action.ofType(this._ActionUsage);
        this._ActionUsage.extends = this._OccurrenceUsage;
        this._ActionUsage.havingFeatures(this._ActionUsage_actionDefinition);
        this._ActionUsage_actionDefinition.ofType(this._Behavior);
        this._ActorMembership.extends = this._ParameterMembership;
        this._ActorMembership.havingFeatures(this._ActorMembership_ownedActorParameter);
        this._ActorMembership_ownedActorParameter.ofType(this._PartUsage);
        this._AllocationDefinition.extends = this._ConnectionDefinition;
        this._AllocationDefinition.havingFeatures(this._AllocationDefinition_allocation);
        this._AllocationDefinition_allocation.ofType(this._AllocationUsage);
        this._AllocationUsage.extends = this._ConnectionUsage;
        this._AllocationUsage.havingFeatures(this._AllocationUsage_allocationDefinition);
        this._AllocationUsage_allocationDefinition.ofType(this._AllocationDefinition);
        this._AnalysisCaseDefinition.extends = this._CaseDefinition;
        this._AnalysisCaseDefinition.havingFeatures(this._AnalysisCaseDefinition_resultExpression);
        this._AnalysisCaseDefinition_resultExpression.ofType(this._Expression);
        this._AnalysisCaseUsage.extends = this._CaseUsage;
        this._AnalysisCaseUsage.havingFeatures(this._AnalysisCaseUsage_analysisCaseDefinition, this._AnalysisCaseUsage_resultExpression);
        this._AnalysisCaseUsage_analysisCaseDefinition.ofType(this._AnalysisCaseDefinition);
        this._AnalysisCaseUsage_resultExpression.ofType(this._Expression);
        this._AnnotatingElement.extends = this._Element;
        this._AnnotatingElement.havingFeatures(this._AnnotatingElement_annotatedElement, this._AnnotatingElement_ownedAnnotatingRelationship, this._AnnotatingElement_annotation, this._AnnotatingElement_owningAnnotatingRelationship);
        this._AnnotatingElement_annotatedElement.ofType(this._Element);
        this._AnnotatingElement_ownedAnnotatingRelationship.ofType(this._Annotation);
        this._AnnotatingElement_annotation.ofType(this._Annotation);
        this._AnnotatingElement_owningAnnotatingRelationship.ofType(this._Annotation);
        this._Annotation.extends = this._Relationship;
        this._Annotation.havingFeatures(this._Annotation_annotatingElement, this._Annotation_annotatedElement, this._Annotation_owningAnnotatedElement, this._Annotation_ownedAnnotatingElement, this._Annotation_owningAnnotatingElement);
        this._Annotation_annotatingElement.ofType(this._AnnotatingElement);
        this._Annotation_annotatedElement.ofType(this._Element);
        this._Annotation_owningAnnotatedElement.ofType(this._Element);
        this._Annotation_ownedAnnotatingElement.ofType(this._AnnotatingElement);
        this._Annotation_owningAnnotatingElement.ofType(this._AnnotatingElement);
        this._AssertConstraintUsage.extends = this._ConstraintUsage;
        this._AssertConstraintUsage.havingFeatures(this._AssertConstraintUsage_assertedConstraint);
        this._AssertConstraintUsage_assertedConstraint.ofType(this._ConstraintUsage);
        this._AssignmentActionUsage.extends = this._ActionUsage;
        this._AssignmentActionUsage.havingFeatures(this._AssignmentActionUsage_targetArgument, this._AssignmentActionUsage_valueExpression, this._AssignmentActionUsage_referent);
        this._AssignmentActionUsage_targetArgument.ofType(this._Expression);
        this._AssignmentActionUsage_valueExpression.ofType(this._Expression);
        this._AssignmentActionUsage_referent.ofType(this._Feature);
        this._Association.extends = this._sysmlClassifier;
        this._Association.havingFeatures(this._Association_relatedType, this._Association_sourceType, this._Association_targetType, this._Association_associationEnd);
        this._Association_relatedType.ofType(this._Type);
        this._Association_sourceType.ofType(this._Type);
        this._Association_targetType.ofType(this._Type);
        this._Association_associationEnd.ofType(this._Feature);
        this._AssociationStructure.extends = this._Association;
        this._AttributeDefinition.extends = this._Definition;
        this._AttributeUsage.extends = this._Usage;
        this._AttributeUsage.havingFeatures(this._AttributeUsage_attributeDefinition);
        this._AttributeUsage_attributeDefinition.ofType(this._DataType);
        this._Behavior.extends = this._Class;
        this._Behavior.havingFeatures(this._Behavior_step, this._Behavior_parameter);
        this._Behavior_step.ofType(this._Step);
        this._Behavior_parameter.ofType(this._Feature);
        this._BindingConnector.extends = this._Connector;
        this._BindingConnectorAsUsage.extends = this._ConnectorAsUsage;
        this._BooleanExpression.extends = this._Expression;
        this._BooleanExpression.havingFeatures(this._BooleanExpression_predicate);
        this._BooleanExpression_predicate.ofType(this._Predicate);
        this._CalculationDefinition.extends = this._ActionDefinition;
        this._CalculationDefinition.havingFeatures(this._CalculationDefinition_calculation);
        this._CalculationDefinition_calculation.ofType(this._CalculationUsage);
        this._CalculationUsage.extends = this._ActionUsage;
        this._CalculationUsage.havingFeatures(this._CalculationUsage_calculationDefinition);
        this._CalculationUsage_calculationDefinition.ofType(this._Function);
        this._CaseDefinition.extends = this._CalculationDefinition;
        this._CaseDefinition.havingFeatures(this._CaseDefinition_objectiveRequirement, this._CaseDefinition_subjectParameter, this._CaseDefinition_actorParameter);
        this._CaseDefinition_objectiveRequirement.ofType(this._RequirementUsage);
        this._CaseDefinition_subjectParameter.ofType(this._Usage);
        this._CaseDefinition_actorParameter.ofType(this._PartUsage);
        this._CaseUsage.extends = this._CalculationUsage;
        this._CaseUsage.havingFeatures(this._CaseUsage_objectiveRequirement, this._CaseUsage_caseDefinition, this._CaseUsage_subjectParameter, this._CaseUsage_actorParameter);
        this._CaseUsage_objectiveRequirement.ofType(this._RequirementUsage);
        this._CaseUsage_caseDefinition.ofType(this._CaseDefinition);
        this._CaseUsage_subjectParameter.ofType(this._Usage);
        this._CaseUsage_actorParameter.ofType(this._PartUsage);
        this._Class.extends = this._sysmlClassifier;
        this._sysmlClassifier.extends = this._Type;
        this._sysmlClassifier.havingFeatures(this._sysmlClassifier_ownedSubclassification);
        this._sysmlClassifier_ownedSubclassification.ofType(this._Subclassification);
        this._CollectExpression.extends = this._OperatorExpression;
        this._Comment.extends = this._AnnotatingElement;
        this._Comment.havingFeatures(this._Comment_locale, this._Comment_body);
        this._Comment_locale.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Comment_body.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._ConcernDefinition.extends = this._RequirementDefinition;
        this._ConcernUsage.extends = this._RequirementUsage;
        this._ConcernUsage.havingFeatures(this._ConcernUsage_concernDefinition);
        this._ConcernUsage_concernDefinition.ofType(this._ConcernDefinition);
        this._ConjugatedPortDefinition.extends = this._PortDefinition;
        this._ConjugatedPortDefinition.havingFeatures(this._ConjugatedPortDefinition_ownedPortConjugator, this._ConjugatedPortDefinition_originalPortDefinition);
        this._ConjugatedPortDefinition_ownedPortConjugator.ofType(this._PortConjugation);
        this._ConjugatedPortDefinition_originalPortDefinition.ofType(this._PortDefinition);
        this._ConjugatedPortTyping.extends = this._FeatureTyping;
        this._ConjugatedPortTyping.havingFeatures(this._ConjugatedPortTyping_portDefinition, this._ConjugatedPortTyping_conjugatedPortDefinition);
        this._ConjugatedPortTyping_portDefinition.ofType(this._PortDefinition);
        this._ConjugatedPortTyping_conjugatedPortDefinition.ofType(this._ConjugatedPortDefinition);
        this._Conjugation.extends = this._Relationship;
        this._Conjugation.havingFeatures(this._Conjugation_originalType, this._Conjugation_conjugatedType, this._Conjugation_owningType);
        this._Conjugation_originalType.ofType(this._Type);
        this._Conjugation_conjugatedType.ofType(this._Type);
        this._Conjugation_owningType.ofType(this._Type);
        this._ConnectionDefinition.extends = this._PartDefinition;
        this._ConnectionDefinition.havingFeatures(this._ConnectionDefinition_connectionEnd);
        this._ConnectionDefinition_connectionEnd.ofType(this._Usage);
        this._ConnectionUsage.extends = this._ConnectorAsUsage;
        this._ConnectionUsage.havingFeatures(this._ConnectionUsage_connectionDefinition);
        this._ConnectionUsage_connectionDefinition.ofType(this._AssociationStructure);
        this._Connector.extends = this._Feature;
        this._Connector.havingFeatures(this._Connector_relatedFeature, this._Connector_association, this._Connector_connectorEnd, this._Connector_sourceFeature, this._Connector_targetFeature, this._Connector_defaultFeaturingType);
        this._Connector_relatedFeature.ofType(this._Feature);
        this._Connector_association.ofType(this._Association);
        this._Connector_connectorEnd.ofType(this._Feature);
        this._Connector_sourceFeature.ofType(this._Feature);
        this._Connector_targetFeature.ofType(this._Feature);
        this._Connector_defaultFeaturingType.ofType(this._Type);
        this._ConnectorAsUsage.extends = this._Usage;
        this._ConstraintDefinition.extends = this._OccurrenceDefinition;
        this._ConstraintUsage.extends = this._OccurrenceUsage;
        this._ConstraintUsage.havingFeatures(this._ConstraintUsage_constraintDefinition);
        this._ConstraintUsage_constraintDefinition.ofType(this._Predicate);
        this._ConstructorExpression.extends = this._InstantiationExpression;
        this._ControlNode.extends = this._ActionUsage;
        this._CrossSubsetting.extends = this._Subsetting;
        this._CrossSubsetting.havingFeatures(this._CrossSubsetting_crossedFeature, this._CrossSubsetting_crossingFeature);
        this._CrossSubsetting_crossedFeature.ofType(this._Feature);
        this._CrossSubsetting_crossingFeature.ofType(this._Feature);
        this._DataType.extends = this._sysmlClassifier;
        this._DecisionNode.extends = this._ControlNode;
        this._Definition.extends = this._sysmlClassifier;
        this._Definition.havingFeatures(this._Definition_isVariation, this._Definition_variant, this._Definition_variantMembership, this._Definition_usage, this._Definition_directedUsage, this._Definition_ownedReference, this._Definition_ownedAttribute, this._Definition_ownedEnumeration, this._Definition_ownedOccurrence, this._Definition_ownedItem, this._Definition_ownedPart, this._Definition_ownedPort, this._Definition_ownedConnection, this._Definition_ownedFlow, this._Definition_ownedInterface, this._Definition_ownedAllocation, this._Definition_ownedAction, this._Definition_ownedState, this._Definition_ownedTransition, this._Definition_ownedCalculation, this._Definition_ownedConstraint, this._Definition_ownedRequirement, this._Definition_ownedConcern, this._Definition_ownedCase, this._Definition_ownedAnalysisCase, this._Definition_ownedVerificationCase, this._Definition_ownedUseCase, this._Definition_ownedView, this._Definition_ownedViewpoint, this._Definition_ownedRendering, this._Definition_ownedMetadata, this._Definition_ownedUsage);
        this._Definition_isVariation.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._Definition_variant.ofType(this._Usage);
        this._Definition_variantMembership.ofType(this._VariantMembership);
        this._Definition_usage.ofType(this._Usage);
        this._Definition_directedUsage.ofType(this._Usage);
        this._Definition_ownedReference.ofType(this._ReferenceUsage);
        this._Definition_ownedAttribute.ofType(this._AttributeUsage);
        this._Definition_ownedEnumeration.ofType(this._EnumerationUsage);
        this._Definition_ownedOccurrence.ofType(this._OccurrenceUsage);
        this._Definition_ownedItem.ofType(this._ItemUsage);
        this._Definition_ownedPart.ofType(this._PartUsage);
        this._Definition_ownedPort.ofType(this._PortUsage);
        this._Definition_ownedConnection.ofType(this._ConnectorAsUsage);
        this._Definition_ownedFlow.ofType(this._FlowUsage);
        this._Definition_ownedInterface.ofType(this._InterfaceUsage);
        this._Definition_ownedAllocation.ofType(this._AllocationUsage);
        this._Definition_ownedAction.ofType(this._ActionUsage);
        this._Definition_ownedState.ofType(this._StateUsage);
        this._Definition_ownedTransition.ofType(this._TransitionUsage);
        this._Definition_ownedCalculation.ofType(this._CalculationUsage);
        this._Definition_ownedConstraint.ofType(this._ConstraintUsage);
        this._Definition_ownedRequirement.ofType(this._RequirementUsage);
        this._Definition_ownedConcern.ofType(this._ConcernUsage);
        this._Definition_ownedCase.ofType(this._CaseUsage);
        this._Definition_ownedAnalysisCase.ofType(this._AnalysisCaseUsage);
        this._Definition_ownedVerificationCase.ofType(this._VerificationCaseUsage);
        this._Definition_ownedUseCase.ofType(this._UseCaseUsage);
        this._Definition_ownedView.ofType(this._ViewUsage);
        this._Definition_ownedViewpoint.ofType(this._ViewpointUsage);
        this._Definition_ownedRendering.ofType(this._RenderingUsage);
        this._Definition_ownedMetadata.ofType(this._MetadataUsage);
        this._Definition_ownedUsage.ofType(this._Usage);
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
        this._Element_isImpliedIncluded.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._Element_isLibraryElement.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._ElementFilterMembership.extends = this._OwningMembership;
        this._ElementFilterMembership.havingFeatures(this._ElementFilterMembership_condition);
        this._ElementFilterMembership_condition.ofType(this._Expression);
        this._EndFeatureMembership.extends = this._FeatureMembership;
        this._EnumerationDefinition.extends = this._AttributeDefinition;
        this._EnumerationDefinition.havingFeatures(this._EnumerationDefinition_enumeratedValue);
        this._EnumerationDefinition_enumeratedValue.ofType(this._EnumerationUsage);
        this._EnumerationUsage.extends = this._AttributeUsage;
        this._EnumerationUsage.havingFeatures(this._EnumerationUsage_enumerationDefinition);
        this._EnumerationUsage_enumerationDefinition.ofType(this._EnumerationDefinition);
        this._EventOccurrenceUsage.extends = this._OccurrenceUsage;
        this._EventOccurrenceUsage.havingFeatures(this._EventOccurrenceUsage_eventOccurrence);
        this._EventOccurrenceUsage_eventOccurrence.ofType(this._OccurrenceUsage);
        this._ExhibitStateUsage.extends = this._StateUsage;
        this._ExhibitStateUsage.havingFeatures(this._ExhibitStateUsage_exhibitedState);
        this._ExhibitStateUsage_exhibitedState.ofType(this._StateUsage);
        this._Expose.extends = this._Import;
        this._Expression.extends = this._Step;
        this._Expression.havingFeatures(this._Expression_function, this._Expression_result, this._Expression_isModelLevelEvaluable);
        this._Expression_function.ofType(this._Function);
        this._Expression_result.ofType(this._Feature);
        this._Expression_isModelLevelEvaluable.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._Feature.extends = this._Type;
        this._Feature.havingFeatures(this._Feature_owningFeatureMembership, this._Feature_owningType, this._Feature_endOwningType, this._Feature_isUnique, this._Feature_isOrdered, this._Feature_type, this._Feature_ownedRedefinition, this._Feature_ownedSubsetting, this._Feature_isComposite, this._Feature_isEnd, this._Feature_ownedTyping, this._Feature_featuringType, this._Feature_ownedTypeFeaturing, this._Feature_isDerived, this._Feature_chainingFeature, this._Feature_ownedFeatureInverting, this._Feature_ownedFeatureChaining, this._Feature_isPortion, this._Feature_isVariable, this._Feature_isConstant, this._Feature_ownedReferenceSubsetting, this._Feature_featureTarget, this._Feature_crossFeature, this._Feature_direction, this._Feature_ownedCrossSubsetting, this._Feature_isNonunique);
        this._Feature_owningFeatureMembership.ofType(this._FeatureMembership);
        this._Feature_owningType.ofType(this._Type);
        this._Feature_endOwningType.ofType(this._Type);
        this._Feature_isUnique.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._Feature_isOrdered.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._Feature_type.ofType(this._Type);
        this._Feature_ownedRedefinition.ofType(this._Redefinition);
        this._Feature_ownedSubsetting.ofType(this._Subsetting);
        this._Feature_isComposite.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._Feature_isEnd.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._Feature_ownedTyping.ofType(this._FeatureTyping);
        this._Feature_featuringType.ofType(this._Type);
        this._Feature_ownedTypeFeaturing.ofType(this._TypeFeaturing);
        this._Feature_isDerived.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._Feature_chainingFeature.ofType(this._Feature);
        this._Feature_ownedFeatureInverting.ofType(this._FeatureInverting);
        this._Feature_ownedFeatureChaining.ofType(this._FeatureChaining);
        this._Feature_isPortion.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._Feature_isVariable.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._Feature_isConstant.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._Feature_ownedReferenceSubsetting.ofType(this._ReferenceSubsetting);
        this._Feature_featureTarget.ofType(this._Feature);
        this._Feature_crossFeature.ofType(this._Feature);
        this._Feature_direction.ofType(this._FeatureDirectionKind);
        this._Feature_ownedCrossSubsetting.ofType(this._CrossSubsetting);
        this._Feature_isNonunique.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
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
        this._FeatureValue_isInitial.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._FeatureValue_isDefault.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._Flow.extends = this._Connector;
        this._Flow.havingFeatures(this._Flow_payloadType, this._Flow_targetInputFeature, this._Flow_sourceOutputFeature, this._Flow_flowEnd, this._Flow_payloadFeature, this._Flow_interaction);
        this._Flow_payloadType.ofType(this._sysmlClassifier);
        this._Flow_targetInputFeature.ofType(this._Feature);
        this._Flow_sourceOutputFeature.ofType(this._Feature);
        this._Flow_flowEnd.ofType(this._FlowEnd);
        this._Flow_payloadFeature.ofType(this._PayloadFeature);
        this._Flow_interaction.ofType(this._Interaction);
        this._FlowDefinition.extends = this._ActionDefinition;
        this._FlowDefinition.havingFeatures(this._FlowDefinition_flowEnd);
        this._FlowDefinition_flowEnd.ofType(this._Usage);
        this._FlowEnd.extends = this._Feature;
        this._FlowUsage.extends = this._ConnectorAsUsage;
        this._FlowUsage.havingFeatures(this._FlowUsage_flowDefinition);
        this._FlowUsage_flowDefinition.ofType(this._Interaction);
        this._ForLoopActionUsage.extends = this._LoopActionUsage;
        this._ForLoopActionUsage.havingFeatures(this._ForLoopActionUsage_seqArgument, this._ForLoopActionUsage_loopVariable);
        this._ForLoopActionUsage_seqArgument.ofType(this._Expression);
        this._ForLoopActionUsage_loopVariable.ofType(this._ReferenceUsage);
        this._ForkNode.extends = this._ControlNode;
        this._FramedConcernMembership.extends = this._RequirementConstraintMembership;
        this._FramedConcernMembership.havingFeatures(this._FramedConcernMembership_ownedConcern, this._FramedConcernMembership_referencedConcern);
        this._FramedConcernMembership_ownedConcern.ofType(this._ConcernUsage);
        this._FramedConcernMembership_referencedConcern.ofType(this._ConcernUsage);
        this._Function.extends = this._Behavior;
        this._Function.havingFeatures(this._Function_expression, this._Function_result, this._Function_isModelLevelEvaluable);
        this._Function_expression.ofType(this._Expression);
        this._Function_result.ofType(this._Feature);
        this._Function_isModelLevelEvaluable.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._IfActionUsage.extends = this._ActionUsage;
        this._IfActionUsage.havingFeatures(this._IfActionUsage_elseAction, this._IfActionUsage_thenAction, this._IfActionUsage_ifArgument);
        this._IfActionUsage_elseAction.ofType(this._ActionUsage);
        this._IfActionUsage_thenAction.ofType(this._ActionUsage);
        this._IfActionUsage_ifArgument.ofType(this._Expression);
        this._Import.extends = this._Relationship;
        this._Import.havingFeatures(this._Import_visibility, this._Import_isRecursive, this._Import_isImportAll, this._Import_importedElement, this._Import_importOwningNamespace);
        this._Import_visibility.ofType(this._VisibilityKind);
        this._Import_isRecursive.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._Import_isImportAll.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._Import_importedElement.ofType(this._Element);
        this._Import_importOwningNamespace.ofType(this._Namespace);
        this._IncludeUseCaseUsage.extends = this._UseCaseUsage;
        this._IncludeUseCaseUsage.havingFeatures(this._IncludeUseCaseUsage_useCaseIncluded);
        this._IncludeUseCaseUsage_useCaseIncluded.ofType(this._UseCaseUsage);
        this._IndexExpression.extends = this._OperatorExpression;
        this._InstantiationExpression.extends = this._Expression;
        this._InstantiationExpression.havingFeatures(this._InstantiationExpression_argument, this._InstantiationExpression_instantiatedType);
        this._InstantiationExpression_argument.ofType(this._Expression);
        this._InstantiationExpression_instantiatedType.ofType(this._Type);
        this._Interaction.extends = this._Association;
        this._InterfaceDefinition.extends = this._ConnectionDefinition;
        this._InterfaceDefinition.havingFeatures(this._InterfaceDefinition_interfaceEnd);
        this._InterfaceDefinition_interfaceEnd.ofType(this._PortUsage);
        this._InterfaceUsage.extends = this._ConnectionUsage;
        this._InterfaceUsage.havingFeatures(this._InterfaceUsage_interfaceDefinition);
        this._InterfaceUsage_interfaceDefinition.ofType(this._InterfaceDefinition);
        this._Intersecting.extends = this._Relationship;
        this._Intersecting.havingFeatures(this._Intersecting_intersectingType, this._Intersecting_typeIntersected);
        this._Intersecting_intersectingType.ofType(this._Type);
        this._Intersecting_typeIntersected.ofType(this._Type);
        this._Invariant.extends = this._BooleanExpression;
        this._Invariant.havingFeatures(this._Invariant_isNegated);
        this._Invariant_isNegated.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._InvocationExpression.extends = this._InstantiationExpression;
        this._InvocationExpression.havingFeatures(this._InvocationExpression_operand);
        this._InvocationExpression_operand.ofType(this._Expression);
        this._ItemDefinition.extends = this._OccurrenceDefinition;
        this._ItemUsage.extends = this._OccurrenceUsage;
        this._ItemUsage.havingFeatures(this._ItemUsage_itemDefinition);
        this._ItemUsage_itemDefinition.ofType(this._Structure);
        this._JoinNode.extends = this._ControlNode;
        this._LibraryPackage.extends = this._Package;
        this._LibraryPackage.havingFeatures(this._LibraryPackage_isStandard);
        this._LibraryPackage_isStandard.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._LiteralBoolean.extends = this._LiteralExpression;
        this._LiteralBoolean.havingFeatures(this._LiteralBoolean_value);
        this._LiteralBoolean_value.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
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
        this._LoopActionUsage.extends = this._ActionUsage;
        this._LoopActionUsage.havingFeatures(this._LoopActionUsage_bodyAction);
        this._LoopActionUsage_bodyAction.ofType(this._ActionUsage);
        this._Membership.extends = this._Relationship;
        this._Membership.havingFeatures(this._Membership_memberElementId, this._Membership_membershipOwningNamespace, this._Membership_memberShortName, this._Membership_memberElement, this._Membership_memberName, this._Membership_visibility);
        this._Membership_memberElementId.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Membership_membershipOwningNamespace.ofType(this._Namespace);
        this._Membership_memberShortName.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Membership_memberElement.ofType(this._Element);
        this._Membership_memberName.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Membership_visibility.ofType(this._VisibilityKind);
        this._MembershipExpose.extends = this._MembershipImport;
        this._MembershipImport.extends = this._Import;
        this._MembershipImport.havingFeatures(this._MembershipImport_importedMembership);
        this._MembershipImport_importedMembership.ofType(this._Membership);
        this._MergeNode.extends = this._ControlNode;
        this._Metaclass.extends = this._Structure;
        this._MetadataAccessExpression.extends = this._Expression;
        this._MetadataAccessExpression.havingFeatures(this._MetadataAccessExpression_referencedElement);
        this._MetadataAccessExpression_referencedElement.ofType(this._Element);
        this._MetadataDefinition.extends = this._ItemDefinition;
        this._MetadataFeature.extends = this._Feature;
        this._MetadataFeature.havingFeatures(this._MetadataFeature_metaclass);
        this._MetadataFeature_metaclass.ofType(this._Metaclass);
        this._MetadataUsage.extends = this._ItemUsage;
        this._MetadataUsage.havingFeatures(this._MetadataUsage_metadataDefinition);
        this._MetadataUsage_metadataDefinition.ofType(this._Metaclass);
        this._Multiplicity.extends = this._Feature;
        this._MultiplicityRange.extends = this._Multiplicity;
        this._MultiplicityRange.havingFeatures(this._MultiplicityRange_lowerBound, this._MultiplicityRange_upperBound, this._MultiplicityRange_bound);
        this._MultiplicityRange_lowerBound.ofType(this._Expression);
        this._MultiplicityRange_upperBound.ofType(this._Expression);
        this._MultiplicityRange_bound.ofType(this._Expression);
        this._Namespace.extends = this._Element;
        this._Namespace.havingFeatures(this._Namespace_ownedMembership, this._Namespace_ownedMember, this._Namespace_membership, this._Namespace_ownedImport, this._Namespace_member, this._Namespace_importedMembership);
        this._Namespace_ownedMembership.ofType(this._Membership);
        this._Namespace_ownedMember.ofType(this._Element);
        this._Namespace_membership.ofType(this._Membership);
        this._Namespace_ownedImport.ofType(this._Import);
        this._Namespace_member.ofType(this._Element);
        this._Namespace_importedMembership.ofType(this._Membership);
        this._NamespaceExpose.extends = this._NamespaceImport;
        this._NamespaceImport.extends = this._Import;
        this._NamespaceImport.havingFeatures(this._NamespaceImport_importedNamespace);
        this._NamespaceImport_importedNamespace.ofType(this._Namespace);
        this._NullExpression.extends = this._Expression;
        this._ObjectiveMembership.extends = this._FeatureMembership;
        this._ObjectiveMembership.havingFeatures(this._ObjectiveMembership_ownedObjectiveRequirement);
        this._ObjectiveMembership_ownedObjectiveRequirement.ofType(this._RequirementUsage);
        this._OccurrenceDefinition.extends = this._Definition;
        this._OccurrenceDefinition.havingFeatures(this._OccurrenceDefinition_isIndividual);
        this._OccurrenceDefinition_isIndividual.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._OccurrenceUsage.extends = this._Usage;
        this._OccurrenceUsage.havingFeatures(this._OccurrenceUsage_occurrenceDefinition, this._OccurrenceUsage_individualDefinition, this._OccurrenceUsage_isIndividual, this._OccurrenceUsage_portionKind);
        this._OccurrenceUsage_occurrenceDefinition.ofType(this._Class);
        this._OccurrenceUsage_individualDefinition.ofType(this._OccurrenceDefinition);
        this._OccurrenceUsage_isIndividual.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._OccurrenceUsage_portionKind.ofType(this._PortionKind);
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
        this._PartDefinition.extends = this._ItemDefinition;
        this._PartUsage.extends = this._ItemUsage;
        this._PartUsage.havingFeatures(this._PartUsage_partDefinition);
        this._PartUsage_partDefinition.ofType(this._PartDefinition);
        this._PayloadFeature.extends = this._Feature;
        this._PerformActionUsage.extends = this._ActionUsage;
        this._PerformActionUsage.havingFeatures(this._PerformActionUsage_performedAction);
        this._PerformActionUsage_performedAction.ofType(this._ActionUsage);
        this._PortConjugation.extends = this._Conjugation;
        this._PortConjugation.havingFeatures(this._PortConjugation_originalPortDefinition, this._PortConjugation_conjugatedPortDefinition);
        this._PortConjugation_originalPortDefinition.ofType(this._PortDefinition);
        this._PortConjugation_conjugatedPortDefinition.ofType(this._ConjugatedPortDefinition);
        this._PortDefinition.extends = this._OccurrenceDefinition;
        this._PortDefinition.havingFeatures(this._PortDefinition_conjugatedPortDefinition);
        this._PortDefinition_conjugatedPortDefinition.ofType(this._ConjugatedPortDefinition);
        this._PortUsage.extends = this._OccurrenceUsage;
        this._PortUsage.havingFeatures(this._PortUsage_portDefinition);
        this._PortUsage_portDefinition.ofType(this._PortDefinition);
        this._PortionKind.havingLiterals(this._PortionKind_timeslice, this._PortionKind_snapshot);
        this._Predicate.extends = this._Function;
        this._Redefinition.extends = this._Subsetting;
        this._Redefinition.havingFeatures(this._Redefinition_redefiningFeature, this._Redefinition_redefinedFeature);
        this._Redefinition_redefiningFeature.ofType(this._Feature);
        this._Redefinition_redefinedFeature.ofType(this._Feature);
        this._ReferenceSubsetting.extends = this._Subsetting;
        this._ReferenceSubsetting.havingFeatures(this._ReferenceSubsetting_referencedFeature, this._ReferenceSubsetting_referencingFeature);
        this._ReferenceSubsetting_referencedFeature.ofType(this._Feature);
        this._ReferenceSubsetting_referencingFeature.ofType(this._Feature);
        this._ReferenceUsage.extends = this._Usage;
        this._Relationship.extends = this._Element;
        this._Relationship.havingFeatures(this._Relationship_relatedElement, this._Relationship_target, this._Relationship_source, this._Relationship_owningRelatedElement, this._Relationship_ownedRelatedElement, this._Relationship_isImplied);
        this._Relationship_relatedElement.ofType(this._Element);
        this._Relationship_target.ofType(this._Element);
        this._Relationship_source.ofType(this._Element);
        this._Relationship_owningRelatedElement.ofType(this._Element);
        this._Relationship_ownedRelatedElement.ofType(this._Element);
        this._Relationship_isImplied.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._RenderingDefinition.extends = this._PartDefinition;
        this._RenderingDefinition.havingFeatures(this._RenderingDefinition_rendering);
        this._RenderingDefinition_rendering.ofType(this._RenderingUsage);
        this._RenderingUsage.extends = this._PartUsage;
        this._RenderingUsage.havingFeatures(this._RenderingUsage_renderingDefinition);
        this._RenderingUsage_renderingDefinition.ofType(this._RenderingDefinition);
        this._RequirementConstraintKind.havingLiterals(this._RequirementConstraintKind_assumption, this._RequirementConstraintKind_requirement);
        this._RequirementConstraintMembership.extends = this._FeatureMembership;
        this._RequirementConstraintMembership.havingFeatures(this._RequirementConstraintMembership_kind, this._RequirementConstraintMembership_ownedConstraint, this._RequirementConstraintMembership_referencedConstraint);
        this._RequirementConstraintMembership_kind.ofType(this._RequirementConstraintKind);
        this._RequirementConstraintMembership_ownedConstraint.ofType(this._ConstraintUsage);
        this._RequirementConstraintMembership_referencedConstraint.ofType(this._ConstraintUsage);
        this._RequirementDefinition.extends = this._ConstraintDefinition;
        this._RequirementDefinition.havingFeatures(this._RequirementDefinition_reqId, this._RequirementDefinition_text, this._RequirementDefinition_subjectParameter, this._RequirementDefinition_actorParameter, this._RequirementDefinition_stakeholderParameter, this._RequirementDefinition_assumedConstraint, this._RequirementDefinition_requiredConstraint, this._RequirementDefinition_framedConcern);
        this._RequirementDefinition_reqId.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._RequirementDefinition_text.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._RequirementDefinition_subjectParameter.ofType(this._Usage);
        this._RequirementDefinition_actorParameter.ofType(this._PartUsage);
        this._RequirementDefinition_stakeholderParameter.ofType(this._PartUsage);
        this._RequirementDefinition_assumedConstraint.ofType(this._ConstraintUsage);
        this._RequirementDefinition_requiredConstraint.ofType(this._ConstraintUsage);
        this._RequirementDefinition_framedConcern.ofType(this._ConcernUsage);
        this._RequirementUsage.extends = this._ConstraintUsage;
        this._RequirementUsage.havingFeatures(this._RequirementUsage_requirementDefinition, this._RequirementUsage_reqId, this._RequirementUsage_text, this._RequirementUsage_requiredConstraint, this._RequirementUsage_assumedConstraint, this._RequirementUsage_subjectParameter, this._RequirementUsage_framedConcern, this._RequirementUsage_actorParameter, this._RequirementUsage_stakeholderParameter);
        this._RequirementUsage_requirementDefinition.ofType(this._RequirementDefinition);
        this._RequirementUsage_reqId.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._RequirementUsage_text.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._RequirementUsage_requiredConstraint.ofType(this._ConstraintUsage);
        this._RequirementUsage_assumedConstraint.ofType(this._ConstraintUsage);
        this._RequirementUsage_subjectParameter.ofType(this._Usage);
        this._RequirementUsage_framedConcern.ofType(this._ConcernUsage);
        this._RequirementUsage_actorParameter.ofType(this._PartUsage);
        this._RequirementUsage_stakeholderParameter.ofType(this._PartUsage);
        this._RequirementVerificationMembership.extends = this._RequirementConstraintMembership;
        this._RequirementVerificationMembership.havingFeatures(this._RequirementVerificationMembership_ownedRequirement, this._RequirementVerificationMembership_verifiedRequirement);
        this._RequirementVerificationMembership_ownedRequirement.ofType(this._RequirementUsage);
        this._RequirementVerificationMembership_verifiedRequirement.ofType(this._RequirementUsage);
        this._ResultExpressionMembership.extends = this._FeatureMembership;
        this._ResultExpressionMembership.havingFeatures(this._ResultExpressionMembership_ownedResultExpression);
        this._ResultExpressionMembership_ownedResultExpression.ofType(this._Expression);
        this._ReturnParameterMembership.extends = this._ParameterMembership;
        this._SatisfyRequirementUsage.extends = this._RequirementUsage;
        this._SatisfyRequirementUsage.havingFeatures(this._SatisfyRequirementUsage_satisfiedRequirement, this._SatisfyRequirementUsage_satisfyingFeature);
        this._SatisfyRequirementUsage_satisfiedRequirement.ofType(this._RequirementUsage);
        this._SatisfyRequirementUsage_satisfyingFeature.ofType(this._Feature);
        this._SelectExpression.extends = this._OperatorExpression;
        this._SendActionUsage.extends = this._ActionUsage;
        this._SendActionUsage.havingFeatures(this._SendActionUsage_receiverArgument, this._SendActionUsage_payloadArgument, this._SendActionUsage_senderArgument);
        this._SendActionUsage_receiverArgument.ofType(this._Expression);
        this._SendActionUsage_payloadArgument.ofType(this._Expression);
        this._SendActionUsage_senderArgument.ofType(this._Expression);
        this._Specialization.extends = this._Relationship;
        this._Specialization.havingFeatures(this._Specialization_general, this._Specialization_specific, this._Specialization_owningType);
        this._Specialization_general.ofType(this._Type);
        this._Specialization_specific.ofType(this._Type);
        this._Specialization_owningType.ofType(this._Type);
        this._StakeholderMembership.extends = this._ParameterMembership;
        this._StakeholderMembership.havingFeatures(this._StakeholderMembership_ownedStakeholderParameter);
        this._StakeholderMembership_ownedStakeholderParameter.ofType(this._PartUsage);
        this._StateDefinition.extends = this._ActionDefinition;
        this._StateDefinition.havingFeatures(this._StateDefinition_state, this._StateDefinition_entryAction, this._StateDefinition_doAction, this._StateDefinition_exitAction, this._StateDefinition_isParallel);
        this._StateDefinition_state.ofType(this._StateUsage);
        this._StateDefinition_entryAction.ofType(this._ActionUsage);
        this._StateDefinition_doAction.ofType(this._ActionUsage);
        this._StateDefinition_exitAction.ofType(this._ActionUsage);
        this._StateDefinition_isParallel.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._StateSubactionKind.havingLiterals(this._StateSubactionKind_entry, this._StateSubactionKind_do, this._StateSubactionKind_exit);
        this._StateSubactionMembership.extends = this._FeatureMembership;
        this._StateSubactionMembership.havingFeatures(this._StateSubactionMembership_kind, this._StateSubactionMembership_action);
        this._StateSubactionMembership_kind.ofType(this._StateSubactionKind);
        this._StateSubactionMembership_action.ofType(this._ActionUsage);
        this._StateUsage.extends = this._ActionUsage;
        this._StateUsage.havingFeatures(this._StateUsage_stateDefinition, this._StateUsage_entryAction, this._StateUsage_doAction, this._StateUsage_exitAction, this._StateUsage_isParallel);
        this._StateUsage_stateDefinition.ofType(this._Behavior);
        this._StateUsage_entryAction.ofType(this._ActionUsage);
        this._StateUsage_doAction.ofType(this._ActionUsage);
        this._StateUsage_exitAction.ofType(this._ActionUsage);
        this._StateUsage_isParallel.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._Step.extends = this._Feature;
        this._Step.havingFeatures(this._Step_behavior, this._Step_parameter);
        this._Step_behavior.ofType(this._Behavior);
        this._Step_parameter.ofType(this._Feature);
        this._Structure.extends = this._Class;
        this._Subclassification.extends = this._Specialization;
        this._Subclassification.havingFeatures(this._Subclassification_superclassifier, this._Subclassification_subclassifier, this._Subclassification_owningClassifier);
        this._Subclassification_superclassifier.ofType(this._sysmlClassifier);
        this._Subclassification_subclassifier.ofType(this._sysmlClassifier);
        this._Subclassification_owningClassifier.ofType(this._sysmlClassifier);
        this._SubjectMembership.extends = this._ParameterMembership;
        this._SubjectMembership.havingFeatures(this._SubjectMembership_ownedSubjectParameter);
        this._SubjectMembership_ownedSubjectParameter.ofType(this._Usage);
        this._Subsetting.extends = this._Specialization;
        this._Subsetting.havingFeatures(this._Subsetting_subsettedFeature, this._Subsetting_subsettingFeature, this._Subsetting_owningFeature);
        this._Subsetting_subsettedFeature.ofType(this._Feature);
        this._Subsetting_subsettingFeature.ofType(this._Feature);
        this._Subsetting_owningFeature.ofType(this._Feature);
        this._Succession.extends = this._Connector;
        this._SuccessionAsUsage.extends = this._ConnectorAsUsage;
        this._SuccessionFlow.extends = this._Flow;
        this._SuccessionFlowUsage.extends = this._FlowUsage;
        this._TerminateActionUsage.extends = this._ActionUsage;
        this._TerminateActionUsage.havingFeatures(this._TerminateActionUsage_terminatedOccurrenceArgument);
        this._TerminateActionUsage_terminatedOccurrenceArgument.ofType(this._Expression);
        this._TextualRepresentation.extends = this._AnnotatingElement;
        this._TextualRepresentation.havingFeatures(this._TextualRepresentation_language, this._TextualRepresentation_body, this._TextualRepresentation_representedElement);
        this._TextualRepresentation_language.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._TextualRepresentation_body.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._TextualRepresentation_representedElement.ofType(this._Element);
        this._TransitionFeatureKind.havingLiterals(this._TransitionFeatureKind_trigger, this._TransitionFeatureKind_guard, this._TransitionFeatureKind_effect);
        this._TransitionFeatureMembership.extends = this._FeatureMembership;
        this._TransitionFeatureMembership.havingFeatures(this._TransitionFeatureMembership_kind, this._TransitionFeatureMembership_transitionFeature);
        this._TransitionFeatureMembership_kind.ofType(this._TransitionFeatureKind);
        this._TransitionFeatureMembership_transitionFeature.ofType(this._Step);
        this._TransitionUsage.extends = this._ActionUsage;
        this._TransitionUsage.havingFeatures(this._TransitionUsage_source, this._TransitionUsage_target, this._TransitionUsage_triggerAction, this._TransitionUsage_guardExpression, this._TransitionUsage_effectAction, this._TransitionUsage_succession);
        this._TransitionUsage_source.ofType(this._ActionUsage);
        this._TransitionUsage_target.ofType(this._ActionUsage);
        this._TransitionUsage_triggerAction.ofType(this._AcceptActionUsage);
        this._TransitionUsage_guardExpression.ofType(this._Expression);
        this._TransitionUsage_effectAction.ofType(this._ActionUsage);
        this._TransitionUsage_succession.ofType(this._Succession);
        this._TriggerInvocationExpression.extends = this._InvocationExpression;
        this._TriggerInvocationExpression.havingFeatures(this._TriggerInvocationExpression_kind);
        this._TriggerInvocationExpression_kind.ofType(this._TriggerKind);
        this._TriggerKind.havingLiterals(this._TriggerKind_when, this._TriggerKind_at, this._TriggerKind_after);
        this._Type.extends = this._Namespace;
        this._Type.havingFeatures(this._Type_ownedSpecialization, this._Type_ownedFeatureMembership, this._Type_feature, this._Type_ownedFeature, this._Type_input, this._Type_output, this._Type_isAbstract, this._Type_inheritedMembership, this._Type_endFeature, this._Type_ownedEndFeature, this._Type_isSufficient, this._Type_ownedConjugator, this._Type_isConjugated, this._Type_inheritedFeature, this._Type_multiplicity, this._Type_unioningType, this._Type_ownedIntersecting, this._Type_intersectingType, this._Type_ownedUnioning, this._Type_ownedDisjoining, this._Type_featureMembership, this._Type_differencingType, this._Type_ownedDifferencing, this._Type_directedFeature);
        this._Type_ownedSpecialization.ofType(this._Specialization);
        this._Type_ownedFeatureMembership.ofType(this._FeatureMembership);
        this._Type_feature.ofType(this._Feature);
        this._Type_ownedFeature.ofType(this._Feature);
        this._Type_input.ofType(this._Feature);
        this._Type_output.ofType(this._Feature);
        this._Type_isAbstract.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._Type_inheritedMembership.ofType(this._Membership);
        this._Type_endFeature.ofType(this._Feature);
        this._Type_ownedEndFeature.ofType(this._Feature);
        this._Type_isSufficient.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._Type_ownedConjugator.ofType(this._Conjugation);
        this._Type_isConjugated.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
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
        this._TypeFeaturing.extends = this._Relationship;
        this._TypeFeaturing.havingFeatures(this._TypeFeaturing_featureOfType, this._TypeFeaturing_featuringType, this._TypeFeaturing_owningFeatureOfType);
        this._TypeFeaturing_featureOfType.ofType(this._Feature);
        this._TypeFeaturing_featuringType.ofType(this._Type);
        this._TypeFeaturing_owningFeatureOfType.ofType(this._Feature);
        this._Unioning.extends = this._Relationship;
        this._Unioning.havingFeatures(this._Unioning_unioningType, this._Unioning_typeUnioned);
        this._Unioning_unioningType.ofType(this._Type);
        this._Unioning_typeUnioned.ofType(this._Type);
        this._Usage.extends = this._Feature;
        this._Usage.havingFeatures(this._Usage_mayTimeVary, this._Usage_isReference, this._Usage_variant, this._Usage_variantMembership, this._Usage_owningDefinition, this._Usage_owningUsage, this._Usage_nestedUsage, this._Usage_definition, this._Usage_usage, this._Usage_directedUsage, this._Usage_nestedReference, this._Usage_nestedAttribute, this._Usage_nestedEnumeration, this._Usage_nestedOccurrence, this._Usage_nestedItem, this._Usage_nestedPart, this._Usage_nestedPort, this._Usage_nestedConnection, this._Usage_nestedFlow, this._Usage_nestedInterface, this._Usage_nestedAllocation, this._Usage_nestedAction, this._Usage_nestedState, this._Usage_nestedTransition, this._Usage_nestedCalculation, this._Usage_nestedConstraint, this._Usage_nestedRequirement, this._Usage_nestedConcern, this._Usage_nestedCase, this._Usage_nestedAnalysisCase, this._Usage_nestedVerificationCase, this._Usage_nestedUseCase, this._Usage_nestedView, this._Usage_nestedViewpoint, this._Usage_nestedRendering, this._Usage_nestedMetadata, this._Usage_isVariation);
        this._Usage_mayTimeVary.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._Usage_isReference.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._Usage_variant.ofType(this._Usage);
        this._Usage_variantMembership.ofType(this._VariantMembership);
        this._Usage_owningDefinition.ofType(this._Definition);
        this._Usage_owningUsage.ofType(this._Usage);
        this._Usage_nestedUsage.ofType(this._Usage);
        this._Usage_definition.ofType(this._sysmlClassifier);
        this._Usage_usage.ofType(this._Usage);
        this._Usage_directedUsage.ofType(this._Usage);
        this._Usage_nestedReference.ofType(this._ReferenceUsage);
        this._Usage_nestedAttribute.ofType(this._AttributeUsage);
        this._Usage_nestedEnumeration.ofType(this._EnumerationUsage);
        this._Usage_nestedOccurrence.ofType(this._OccurrenceUsage);
        this._Usage_nestedItem.ofType(this._ItemUsage);
        this._Usage_nestedPart.ofType(this._PartUsage);
        this._Usage_nestedPort.ofType(this._PortUsage);
        this._Usage_nestedConnection.ofType(this._ConnectorAsUsage);
        this._Usage_nestedFlow.ofType(this._FlowUsage);
        this._Usage_nestedInterface.ofType(this._InterfaceUsage);
        this._Usage_nestedAllocation.ofType(this._AllocationUsage);
        this._Usage_nestedAction.ofType(this._ActionUsage);
        this._Usage_nestedState.ofType(this._StateUsage);
        this._Usage_nestedTransition.ofType(this._TransitionUsage);
        this._Usage_nestedCalculation.ofType(this._CalculationUsage);
        this._Usage_nestedConstraint.ofType(this._ConstraintUsage);
        this._Usage_nestedRequirement.ofType(this._RequirementUsage);
        this._Usage_nestedConcern.ofType(this._ConcernUsage);
        this._Usage_nestedCase.ofType(this._CaseUsage);
        this._Usage_nestedAnalysisCase.ofType(this._AnalysisCaseUsage);
        this._Usage_nestedVerificationCase.ofType(this._VerificationCaseUsage);
        this._Usage_nestedUseCase.ofType(this._UseCaseUsage);
        this._Usage_nestedView.ofType(this._ViewUsage);
        this._Usage_nestedViewpoint.ofType(this._ViewpointUsage);
        this._Usage_nestedRendering.ofType(this._RenderingUsage);
        this._Usage_nestedMetadata.ofType(this._MetadataUsage);
        this._Usage_isVariation.ofType(LionCore_builtinsBase.INSTANCE._Boolean);
        this._UseCaseDefinition.extends = this._CaseDefinition;
        this._UseCaseDefinition.havingFeatures(this._UseCaseDefinition_includedUseCase);
        this._UseCaseDefinition_includedUseCase.ofType(this._UseCaseUsage);
        this._UseCaseUsage.extends = this._CaseUsage;
        this._UseCaseUsage.havingFeatures(this._UseCaseUsage_useCaseDefinition, this._UseCaseUsage_includedUseCase);
        this._UseCaseUsage_useCaseDefinition.ofType(this._UseCaseDefinition);
        this._UseCaseUsage_includedUseCase.ofType(this._UseCaseUsage);
        this._VariantMembership.extends = this._OwningMembership;
        this._VariantMembership.havingFeatures(this._VariantMembership_ownedVariantUsage);
        this._VariantMembership_ownedVariantUsage.ofType(this._Usage);
        this._VerificationCaseDefinition.extends = this._CaseDefinition;
        this._VerificationCaseDefinition.havingFeatures(this._VerificationCaseDefinition_verifiedRequirement);
        this._VerificationCaseDefinition_verifiedRequirement.ofType(this._RequirementUsage);
        this._VerificationCaseUsage.extends = this._CaseUsage;
        this._VerificationCaseUsage.havingFeatures(this._VerificationCaseUsage_verificationCaseDefinition, this._VerificationCaseUsage_verifiedRequirement);
        this._VerificationCaseUsage_verificationCaseDefinition.ofType(this._VerificationCaseDefinition);
        this._VerificationCaseUsage_verifiedRequirement.ofType(this._RequirementUsage);
        this._ViewDefinition.extends = this._PartDefinition;
        this._ViewDefinition.havingFeatures(this._ViewDefinition_view, this._ViewDefinition_satisfiedViewpoint, this._ViewDefinition_viewRendering, this._ViewDefinition_viewCondition);
        this._ViewDefinition_view.ofType(this._ViewUsage);
        this._ViewDefinition_satisfiedViewpoint.ofType(this._ViewpointUsage);
        this._ViewDefinition_viewRendering.ofType(this._RenderingUsage);
        this._ViewDefinition_viewCondition.ofType(this._Expression);
        this._ViewRenderingMembership.extends = this._FeatureMembership;
        this._ViewRenderingMembership.havingFeatures(this._ViewRenderingMembership_ownedRendering, this._ViewRenderingMembership_referencedRendering);
        this._ViewRenderingMembership_ownedRendering.ofType(this._RenderingUsage);
        this._ViewRenderingMembership_referencedRendering.ofType(this._RenderingUsage);
        this._ViewUsage.extends = this._PartUsage;
        this._ViewUsage.havingFeatures(this._ViewUsage_viewDefinition, this._ViewUsage_satisfiedViewpoint, this._ViewUsage_exposedElement, this._ViewUsage_viewRendering, this._ViewUsage_viewCondition);
        this._ViewUsage_viewDefinition.ofType(this._ViewDefinition);
        this._ViewUsage_satisfiedViewpoint.ofType(this._ViewpointUsage);
        this._ViewUsage_exposedElement.ofType(this._Element);
        this._ViewUsage_viewRendering.ofType(this._RenderingUsage);
        this._ViewUsage_viewCondition.ofType(this._Expression);
        this._ViewpointDefinition.extends = this._RequirementDefinition;
        this._ViewpointDefinition.havingFeatures(this._ViewpointDefinition_viewpointStakeholder);
        this._ViewpointDefinition_viewpointStakeholder.ofType(this._PartUsage);
        this._ViewpointUsage.extends = this._RequirementUsage;
        this._ViewpointUsage.havingFeatures(this._ViewpointUsage_viewpointDefinition, this._ViewpointUsage_viewpointStakeholder);
        this._ViewpointUsage_viewpointDefinition.ofType(this._ViewpointDefinition);
        this._ViewpointUsage_viewpointStakeholder.ofType(this._PartUsage);
        this._VisibilityKind.havingLiterals(this._VisibilityKind_private, this._VisibilityKind_protected, this._VisibilityKind_public);
        this._WhileLoopActionUsage.extends = this._LoopActionUsage;
        this._WhileLoopActionUsage.havingFeatures(this._WhileLoopActionUsage_whileArgument, this._WhileLoopActionUsage_untilArgument);
        this._WhileLoopActionUsage_whileArgument.ofType(this._Expression);
        this._WhileLoopActionUsage_untilArgument.ofType(this._Expression);
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
                case this._sysmlClassifier.key: return sysmlClassifier.create(id, receiveDelta);
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

    private readonly _isImpliedIncluded: RequiredPropertyValueManager<boolean>;
    get isImpliedIncluded(): boolean {
        return this._isImpliedIncluded.get();
    }
    set isImpliedIncluded(newValue: boolean) {
        this._isImpliedIncluded.set(newValue);
    }

    private readonly _isLibraryElement: RequiredPropertyValueManager<boolean>;
    get isLibraryElement(): boolean {
        return this._isLibraryElement.get();
    }
    set isLibraryElement(newValue: boolean) {
        this._isLibraryElement.set(newValue);
    }

    protected constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._owningMembership = new RequiredMultiContainmentValueManager<OwningMembership>(sysmlBase.INSTANCE.Element_owningMembership, this);
        this._ownedRelationship = new RequiredMultiContainmentValueManager<Relationship>(sysmlBase.INSTANCE.Element_ownedRelationship, this);
        this._owningRelationship = new RequiredMultiContainmentValueManager<Relationship>(sysmlBase.INSTANCE.Element_owningRelationship, this);
        this._owningNamespace = new RequiredMultiContainmentValueManager<Namespace>(sysmlBase.INSTANCE.Element_owningNamespace, this);
        this._elementId = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.Element_elementId, this);
        this._owner = new RequiredMultiContainmentValueManager<Element>(sysmlBase.INSTANCE.Element_owner, this);
        this._ownedElement = new RequiredMultiContainmentValueManager<Element>(sysmlBase.INSTANCE.Element_ownedElement, this);
        this._documentation = new RequiredMultiContainmentValueManager<Documentation>(sysmlBase.INSTANCE.Element_documentation, this);
        this._ownedAnnotation = new RequiredMultiContainmentValueManager<Annotation>(sysmlBase.INSTANCE.Element_ownedAnnotation, this);
        this._textualRepresentation = new RequiredMultiContainmentValueManager<TextualRepresentation>(sysmlBase.INSTANCE.Element_textualRepresentation, this);
        this._aliasIds = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.Element_aliasIds, this);
        this._declaredShortName = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.Element_declaredShortName, this);
        this._declaredName = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.Element_declaredName, this);
        this._shortName = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.Element_shortName, this);
        this._name = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.Element_name, this);
        this._qualifiedName = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.Element_qualifiedName, this);
        this._isImpliedIncluded = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.Element_isImpliedIncluded, this);
        this._isLibraryElement = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.Element_isLibraryElement, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case sysmlBase.INSTANCE.Element_elementId.key: return this._elementId;
            case sysmlBase.INSTANCE.Element_aliasIds.key: return this._aliasIds;
            case sysmlBase.INSTANCE.Element_declaredShortName.key: return this._declaredShortName;
            case sysmlBase.INSTANCE.Element_declaredName.key: return this._declaredName;
            case sysmlBase.INSTANCE.Element_shortName.key: return this._shortName;
            case sysmlBase.INSTANCE.Element_name.key: return this._name;
            case sysmlBase.INSTANCE.Element_qualifiedName.key: return this._qualifiedName;
            case sysmlBase.INSTANCE.Element_isImpliedIncluded.key: return this._isImpliedIncluded;
            case sysmlBase.INSTANCE.Element_isLibraryElement.key: return this._isLibraryElement;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Element_owningMembership.key: return this._owningMembership;
            case sysmlBase.INSTANCE.Element_ownedRelationship.key: return this._ownedRelationship;
            case sysmlBase.INSTANCE.Element_owningRelationship.key: return this._owningRelationship;
            case sysmlBase.INSTANCE.Element_owningNamespace.key: return this._owningNamespace;
            case sysmlBase.INSTANCE.Element_owner.key: return this._owner;
            case sysmlBase.INSTANCE.Element_ownedElement.key: return this._ownedElement;
            case sysmlBase.INSTANCE.Element_documentation.key: return this._documentation;
            case sysmlBase.INSTANCE.Element_ownedAnnotation.key: return this._ownedAnnotation;
            case sysmlBase.INSTANCE.Element_textualRepresentation.key: return this._textualRepresentation;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Namespace extends Element {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Namespace {
        return new Namespace(sysmlBase.INSTANCE.Namespace, id, receiveDelta, parentInfo);
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
        this._ownedMembership = new RequiredMultiContainmentValueManager<Membership>(sysmlBase.INSTANCE.Namespace_ownedMembership, this);
        this._ownedMember = new RequiredMultiContainmentValueManager<Element>(sysmlBase.INSTANCE.Namespace_ownedMember, this);
        this._membership = new RequiredMultiContainmentValueManager<Membership>(sysmlBase.INSTANCE.Namespace_membership, this);
        this._ownedImport = new RequiredMultiContainmentValueManager<Import>(sysmlBase.INSTANCE.Namespace_ownedImport, this);
        this._member = new RequiredMultiContainmentValueManager<Element>(sysmlBase.INSTANCE.Namespace_member, this);
        this._importedMembership = new RequiredMultiContainmentValueManager<Membership>(sysmlBase.INSTANCE.Namespace_importedMembership, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Namespace_ownedMembership.key: return this._ownedMembership;
            case sysmlBase.INSTANCE.Namespace_ownedMember.key: return this._ownedMember;
            case sysmlBase.INSTANCE.Namespace_membership.key: return this._membership;
            case sysmlBase.INSTANCE.Namespace_ownedImport.key: return this._ownedImport;
            case sysmlBase.INSTANCE.Namespace_member.key: return this._member;
            case sysmlBase.INSTANCE.Namespace_importedMembership.key: return this._importedMembership;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Type extends Namespace {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Type {
        return new Type(sysmlBase.INSTANCE.Type, id, receiveDelta, parentInfo);
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

    private readonly _isAbstract: RequiredPropertyValueManager<boolean>;
    get isAbstract(): boolean {
        return this._isAbstract.get();
    }
    set isAbstract(newValue: boolean) {
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

    private readonly _isSufficient: RequiredPropertyValueManager<boolean>;
    get isSufficient(): boolean {
        return this._isSufficient.get();
    }
    set isSufficient(newValue: boolean) {
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

    private readonly _isConjugated: RequiredPropertyValueManager<boolean>;
    get isConjugated(): boolean {
        return this._isConjugated.get();
    }
    set isConjugated(newValue: boolean) {
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

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._ownedSpecialization = new RequiredMultiContainmentValueManager<Specialization>(sysmlBase.INSTANCE.Type_ownedSpecialization, this);
        this._ownedFeatureMembership = new RequiredMultiContainmentValueManager<FeatureMembership>(sysmlBase.INSTANCE.Type_ownedFeatureMembership, this);
        this._feature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Type_feature, this);
        this._ownedFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Type_ownedFeature, this);
        this._input = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Type_input, this);
        this._output = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Type_output, this);
        this._isAbstract = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.Type_isAbstract, this);
        this._inheritedMembership = new RequiredMultiContainmentValueManager<Membership>(sysmlBase.INSTANCE.Type_inheritedMembership, this);
        this._endFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Type_endFeature, this);
        this._ownedEndFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Type_ownedEndFeature, this);
        this._isSufficient = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.Type_isSufficient, this);
        this._ownedConjugator = new RequiredMultiContainmentValueManager<Conjugation>(sysmlBase.INSTANCE.Type_ownedConjugator, this);
        this._isConjugated = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.Type_isConjugated, this);
        this._inheritedFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Type_inheritedFeature, this);
        this._multiplicity = new RequiredMultiContainmentValueManager<Multiplicity>(sysmlBase.INSTANCE.Type_multiplicity, this);
        this._unioningType = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Type_unioningType, this);
        this._ownedIntersecting = new RequiredMultiContainmentValueManager<Intersecting>(sysmlBase.INSTANCE.Type_ownedIntersecting, this);
        this._intersectingType = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Type_intersectingType, this);
        this._ownedUnioning = new RequiredMultiContainmentValueManager<Unioning>(sysmlBase.INSTANCE.Type_ownedUnioning, this);
        this._ownedDisjoining = new RequiredMultiContainmentValueManager<Disjoining>(sysmlBase.INSTANCE.Type_ownedDisjoining, this);
        this._featureMembership = new RequiredMultiContainmentValueManager<FeatureMembership>(sysmlBase.INSTANCE.Type_featureMembership, this);
        this._differencingType = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Type_differencingType, this);
        this._ownedDifferencing = new RequiredMultiContainmentValueManager<Differencing>(sysmlBase.INSTANCE.Type_ownedDifferencing, this);
        this._directedFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Type_directedFeature, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case sysmlBase.INSTANCE.Type_isAbstract.key: return this._isAbstract;
            case sysmlBase.INSTANCE.Type_isSufficient.key: return this._isSufficient;
            case sysmlBase.INSTANCE.Type_isConjugated.key: return this._isConjugated;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Type_ownedSpecialization.key: return this._ownedSpecialization;
            case sysmlBase.INSTANCE.Type_ownedFeatureMembership.key: return this._ownedFeatureMembership;
            case sysmlBase.INSTANCE.Type_feature.key: return this._feature;
            case sysmlBase.INSTANCE.Type_ownedFeature.key: return this._ownedFeature;
            case sysmlBase.INSTANCE.Type_input.key: return this._input;
            case sysmlBase.INSTANCE.Type_output.key: return this._output;
            case sysmlBase.INSTANCE.Type_inheritedMembership.key: return this._inheritedMembership;
            case sysmlBase.INSTANCE.Type_endFeature.key: return this._endFeature;
            case sysmlBase.INSTANCE.Type_ownedEndFeature.key: return this._ownedEndFeature;
            case sysmlBase.INSTANCE.Type_ownedConjugator.key: return this._ownedConjugator;
            case sysmlBase.INSTANCE.Type_inheritedFeature.key: return this._inheritedFeature;
            case sysmlBase.INSTANCE.Type_multiplicity.key: return this._multiplicity;
            case sysmlBase.INSTANCE.Type_unioningType.key: return this._unioningType;
            case sysmlBase.INSTANCE.Type_ownedIntersecting.key: return this._ownedIntersecting;
            case sysmlBase.INSTANCE.Type_intersectingType.key: return this._intersectingType;
            case sysmlBase.INSTANCE.Type_ownedUnioning.key: return this._ownedUnioning;
            case sysmlBase.INSTANCE.Type_ownedDisjoining.key: return this._ownedDisjoining;
            case sysmlBase.INSTANCE.Type_featureMembership.key: return this._featureMembership;
            case sysmlBase.INSTANCE.Type_differencingType.key: return this._differencingType;
            case sysmlBase.INSTANCE.Type_ownedDifferencing.key: return this._ownedDifferencing;
            case sysmlBase.INSTANCE.Type_directedFeature.key: return this._directedFeature;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Feature extends Type {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Feature {
        return new Feature(sysmlBase.INSTANCE.Feature, id, receiveDelta, parentInfo);
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

    private readonly _isUnique: RequiredPropertyValueManager<boolean>;
    get isUnique(): boolean {
        return this._isUnique.get();
    }
    set isUnique(newValue: boolean) {
        this._isUnique.set(newValue);
    }

    private readonly _isOrdered: RequiredPropertyValueManager<boolean>;
    get isOrdered(): boolean {
        return this._isOrdered.get();
    }
    set isOrdered(newValue: boolean) {
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

    private readonly _isComposite: RequiredPropertyValueManager<boolean>;
    get isComposite(): boolean {
        return this._isComposite.get();
    }
    set isComposite(newValue: boolean) {
        this._isComposite.set(newValue);
    }

    private readonly _isEnd: RequiredPropertyValueManager<boolean>;
    get isEnd(): boolean {
        return this._isEnd.get();
    }
    set isEnd(newValue: boolean) {
        this._isEnd.set(newValue);
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

    private readonly _isDerived: RequiredPropertyValueManager<boolean>;
    get isDerived(): boolean {
        return this._isDerived.get();
    }
    set isDerived(newValue: boolean) {
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

    private readonly _isPortion: RequiredPropertyValueManager<boolean>;
    get isPortion(): boolean {
        return this._isPortion.get();
    }
    set isPortion(newValue: boolean) {
        this._isPortion.set(newValue);
    }

    private readonly _isVariable: RequiredPropertyValueManager<boolean>;
    get isVariable(): boolean {
        return this._isVariable.get();
    }
    set isVariable(newValue: boolean) {
        this._isVariable.set(newValue);
    }

    private readonly _isConstant: RequiredPropertyValueManager<boolean>;
    get isConstant(): boolean {
        return this._isConstant.get();
    }
    set isConstant(newValue: boolean) {
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

    private readonly _isNonunique: RequiredPropertyValueManager<boolean>;
    get isNonunique(): boolean {
        return this._isNonunique.get();
    }
    set isNonunique(newValue: boolean) {
        this._isNonunique.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._owningFeatureMembership = new RequiredMultiContainmentValueManager<FeatureMembership>(sysmlBase.INSTANCE.Feature_owningFeatureMembership, this);
        this._owningType = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Feature_owningType, this);
        this._endOwningType = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Feature_endOwningType, this);
        this._isUnique = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.Feature_isUnique, this);
        this._isOrdered = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.Feature_isOrdered, this);
        this._type = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Feature_type, this);
        this._ownedRedefinition = new RequiredMultiContainmentValueManager<Redefinition>(sysmlBase.INSTANCE.Feature_ownedRedefinition, this);
        this._ownedSubsetting = new RequiredMultiContainmentValueManager<Subsetting>(sysmlBase.INSTANCE.Feature_ownedSubsetting, this);
        this._isComposite = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.Feature_isComposite, this);
        this._isEnd = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.Feature_isEnd, this);
        this._ownedTyping = new RequiredMultiContainmentValueManager<FeatureTyping>(sysmlBase.INSTANCE.Feature_ownedTyping, this);
        this._featuringType = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Feature_featuringType, this);
        this._ownedTypeFeaturing = new RequiredMultiContainmentValueManager<TypeFeaturing>(sysmlBase.INSTANCE.Feature_ownedTypeFeaturing, this);
        this._isDerived = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.Feature_isDerived, this);
        this._chainingFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Feature_chainingFeature, this);
        this._ownedFeatureInverting = new RequiredMultiContainmentValueManager<FeatureInverting>(sysmlBase.INSTANCE.Feature_ownedFeatureInverting, this);
        this._ownedFeatureChaining = new RequiredMultiContainmentValueManager<FeatureChaining>(sysmlBase.INSTANCE.Feature_ownedFeatureChaining, this);
        this._isPortion = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.Feature_isPortion, this);
        this._isVariable = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.Feature_isVariable, this);
        this._isConstant = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.Feature_isConstant, this);
        this._ownedReferenceSubsetting = new RequiredMultiContainmentValueManager<ReferenceSubsetting>(sysmlBase.INSTANCE.Feature_ownedReferenceSubsetting, this);
        this._featureTarget = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Feature_featureTarget, this);
        this._crossFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Feature_crossFeature, this);
        this._direction = new RequiredPropertyValueManager<FeatureDirectionKind>(sysmlBase.INSTANCE.Feature_direction, this);
        this._ownedCrossSubsetting = new RequiredMultiContainmentValueManager<CrossSubsetting>(sysmlBase.INSTANCE.Feature_ownedCrossSubsetting, this);
        this._isNonunique = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.Feature_isNonunique, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case sysmlBase.INSTANCE.Feature_isUnique.key: return this._isUnique;
            case sysmlBase.INSTANCE.Feature_isOrdered.key: return this._isOrdered;
            case sysmlBase.INSTANCE.Feature_isComposite.key: return this._isComposite;
            case sysmlBase.INSTANCE.Feature_isEnd.key: return this._isEnd;
            case sysmlBase.INSTANCE.Feature_isDerived.key: return this._isDerived;
            case sysmlBase.INSTANCE.Feature_isPortion.key: return this._isPortion;
            case sysmlBase.INSTANCE.Feature_isVariable.key: return this._isVariable;
            case sysmlBase.INSTANCE.Feature_isConstant.key: return this._isConstant;
            case sysmlBase.INSTANCE.Feature_direction.key: return this._direction;
            case sysmlBase.INSTANCE.Feature_isNonunique.key: return this._isNonunique;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Feature_owningFeatureMembership.key: return this._owningFeatureMembership;
            case sysmlBase.INSTANCE.Feature_owningType.key: return this._owningType;
            case sysmlBase.INSTANCE.Feature_endOwningType.key: return this._endOwningType;
            case sysmlBase.INSTANCE.Feature_type.key: return this._type;
            case sysmlBase.INSTANCE.Feature_ownedRedefinition.key: return this._ownedRedefinition;
            case sysmlBase.INSTANCE.Feature_ownedSubsetting.key: return this._ownedSubsetting;
            case sysmlBase.INSTANCE.Feature_ownedTyping.key: return this._ownedTyping;
            case sysmlBase.INSTANCE.Feature_featuringType.key: return this._featuringType;
            case sysmlBase.INSTANCE.Feature_ownedTypeFeaturing.key: return this._ownedTypeFeaturing;
            case sysmlBase.INSTANCE.Feature_chainingFeature.key: return this._chainingFeature;
            case sysmlBase.INSTANCE.Feature_ownedFeatureInverting.key: return this._ownedFeatureInverting;
            case sysmlBase.INSTANCE.Feature_ownedFeatureChaining.key: return this._ownedFeatureChaining;
            case sysmlBase.INSTANCE.Feature_ownedReferenceSubsetting.key: return this._ownedReferenceSubsetting;
            case sysmlBase.INSTANCE.Feature_featureTarget.key: return this._featureTarget;
            case sysmlBase.INSTANCE.Feature_crossFeature.key: return this._crossFeature;
            case sysmlBase.INSTANCE.Feature_ownedCrossSubsetting.key: return this._ownedCrossSubsetting;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Usage extends Feature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Usage {
        return new Usage(sysmlBase.INSTANCE.Usage, id, receiveDelta, parentInfo);
    }

    private readonly _mayTimeVary: RequiredPropertyValueManager<boolean>;
    get mayTimeVary(): boolean {
        return this._mayTimeVary.get();
    }
    set mayTimeVary(newValue: boolean) {
        this._mayTimeVary.set(newValue);
    }

    private readonly _isReference: RequiredPropertyValueManager<boolean>;
    get isReference(): boolean {
        return this._isReference.get();
    }
    set isReference(newValue: boolean) {
        this._isReference.set(newValue);
    }

    private readonly _variant: RequiredMultiContainmentValueManager<Usage>;
    get variant(): Usage[] {
        return this._variant.get();
    }
    addVariant(newValue: Usage) {
        this._variant.add(newValue);
    }
    removeVariant(valueToRemove: Usage) {
        this._variant.remove(valueToRemove);
    }
    addVariantAtIndex(newValue: Usage, index: number) {
        this._variant.insertAtIndex(newValue, index);
    }
    moveVariant(oldIndex: number, newIndex: number) {
        this._variant.move(oldIndex, newIndex);
    }
    replaceVariantAtIndex(movedChild: Usage, newIndex: number) {
        this._variant.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _variantMembership: RequiredMultiContainmentValueManager<VariantMembership>;
    get variantMembership(): VariantMembership[] {
        return this._variantMembership.get();
    }
    addVariantMembership(newValue: VariantMembership) {
        this._variantMembership.add(newValue);
    }
    removeVariantMembership(valueToRemove: VariantMembership) {
        this._variantMembership.remove(valueToRemove);
    }
    addVariantMembershipAtIndex(newValue: VariantMembership, index: number) {
        this._variantMembership.insertAtIndex(newValue, index);
    }
    moveVariantMembership(oldIndex: number, newIndex: number) {
        this._variantMembership.move(oldIndex, newIndex);
    }
    replaceVariantMembershipAtIndex(movedChild: VariantMembership, newIndex: number) {
        this._variantMembership.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _owningDefinition: RequiredMultiContainmentValueManager<Definition>;
    get owningDefinition(): Definition[] {
        return this._owningDefinition.get();
    }
    addOwningDefinition(newValue: Definition) {
        this._owningDefinition.add(newValue);
    }
    removeOwningDefinition(valueToRemove: Definition) {
        this._owningDefinition.remove(valueToRemove);
    }
    addOwningDefinitionAtIndex(newValue: Definition, index: number) {
        this._owningDefinition.insertAtIndex(newValue, index);
    }
    moveOwningDefinition(oldIndex: number, newIndex: number) {
        this._owningDefinition.move(oldIndex, newIndex);
    }
    replaceOwningDefinitionAtIndex(movedChild: Definition, newIndex: number) {
        this._owningDefinition.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _owningUsage: RequiredMultiContainmentValueManager<Usage>;
    get owningUsage(): Usage[] {
        return this._owningUsage.get();
    }
    addOwningUsage(newValue: Usage) {
        this._owningUsage.add(newValue);
    }
    removeOwningUsage(valueToRemove: Usage) {
        this._owningUsage.remove(valueToRemove);
    }
    addOwningUsageAtIndex(newValue: Usage, index: number) {
        this._owningUsage.insertAtIndex(newValue, index);
    }
    moveOwningUsage(oldIndex: number, newIndex: number) {
        this._owningUsage.move(oldIndex, newIndex);
    }
    replaceOwningUsageAtIndex(movedChild: Usage, newIndex: number) {
        this._owningUsage.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedUsage: RequiredMultiContainmentValueManager<Usage>;
    get nestedUsage(): Usage[] {
        return this._nestedUsage.get();
    }
    addNestedUsage(newValue: Usage) {
        this._nestedUsage.add(newValue);
    }
    removeNestedUsage(valueToRemove: Usage) {
        this._nestedUsage.remove(valueToRemove);
    }
    addNestedUsageAtIndex(newValue: Usage, index: number) {
        this._nestedUsage.insertAtIndex(newValue, index);
    }
    moveNestedUsage(oldIndex: number, newIndex: number) {
        this._nestedUsage.move(oldIndex, newIndex);
    }
    replaceNestedUsageAtIndex(movedChild: Usage, newIndex: number) {
        this._nestedUsage.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _definition: RequiredMultiContainmentValueManager<sysmlClassifier>;
    get definition(): sysmlClassifier[] {
        return this._definition.get();
    }
    addDefinition(newValue: sysmlClassifier) {
        this._definition.add(newValue);
    }
    removeDefinition(valueToRemove: sysmlClassifier) {
        this._definition.remove(valueToRemove);
    }
    addDefinitionAtIndex(newValue: sysmlClassifier, index: number) {
        this._definition.insertAtIndex(newValue, index);
    }
    moveDefinition(oldIndex: number, newIndex: number) {
        this._definition.move(oldIndex, newIndex);
    }
    replaceDefinitionAtIndex(movedChild: sysmlClassifier, newIndex: number) {
        this._definition.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _usage: RequiredMultiContainmentValueManager<Usage>;
    get usage(): Usage[] {
        return this._usage.get();
    }
    addUsage(newValue: Usage) {
        this._usage.add(newValue);
    }
    removeUsage(valueToRemove: Usage) {
        this._usage.remove(valueToRemove);
    }
    addUsageAtIndex(newValue: Usage, index: number) {
        this._usage.insertAtIndex(newValue, index);
    }
    moveUsage(oldIndex: number, newIndex: number) {
        this._usage.move(oldIndex, newIndex);
    }
    replaceUsageAtIndex(movedChild: Usage, newIndex: number) {
        this._usage.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _directedUsage: RequiredMultiContainmentValueManager<Usage>;
    get directedUsage(): Usage[] {
        return this._directedUsage.get();
    }
    addDirectedUsage(newValue: Usage) {
        this._directedUsage.add(newValue);
    }
    removeDirectedUsage(valueToRemove: Usage) {
        this._directedUsage.remove(valueToRemove);
    }
    addDirectedUsageAtIndex(newValue: Usage, index: number) {
        this._directedUsage.insertAtIndex(newValue, index);
    }
    moveDirectedUsage(oldIndex: number, newIndex: number) {
        this._directedUsage.move(oldIndex, newIndex);
    }
    replaceDirectedUsageAtIndex(movedChild: Usage, newIndex: number) {
        this._directedUsage.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedReference: RequiredMultiContainmentValueManager<ReferenceUsage>;
    get nestedReference(): ReferenceUsage[] {
        return this._nestedReference.get();
    }
    addNestedReference(newValue: ReferenceUsage) {
        this._nestedReference.add(newValue);
    }
    removeNestedReference(valueToRemove: ReferenceUsage) {
        this._nestedReference.remove(valueToRemove);
    }
    addNestedReferenceAtIndex(newValue: ReferenceUsage, index: number) {
        this._nestedReference.insertAtIndex(newValue, index);
    }
    moveNestedReference(oldIndex: number, newIndex: number) {
        this._nestedReference.move(oldIndex, newIndex);
    }
    replaceNestedReferenceAtIndex(movedChild: ReferenceUsage, newIndex: number) {
        this._nestedReference.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedAttribute: RequiredMultiContainmentValueManager<AttributeUsage>;
    get nestedAttribute(): AttributeUsage[] {
        return this._nestedAttribute.get();
    }
    addNestedAttribute(newValue: AttributeUsage) {
        this._nestedAttribute.add(newValue);
    }
    removeNestedAttribute(valueToRemove: AttributeUsage) {
        this._nestedAttribute.remove(valueToRemove);
    }
    addNestedAttributeAtIndex(newValue: AttributeUsage, index: number) {
        this._nestedAttribute.insertAtIndex(newValue, index);
    }
    moveNestedAttribute(oldIndex: number, newIndex: number) {
        this._nestedAttribute.move(oldIndex, newIndex);
    }
    replaceNestedAttributeAtIndex(movedChild: AttributeUsage, newIndex: number) {
        this._nestedAttribute.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedEnumeration: RequiredMultiContainmentValueManager<EnumerationUsage>;
    get nestedEnumeration(): EnumerationUsage[] {
        return this._nestedEnumeration.get();
    }
    addNestedEnumeration(newValue: EnumerationUsage) {
        this._nestedEnumeration.add(newValue);
    }
    removeNestedEnumeration(valueToRemove: EnumerationUsage) {
        this._nestedEnumeration.remove(valueToRemove);
    }
    addNestedEnumerationAtIndex(newValue: EnumerationUsage, index: number) {
        this._nestedEnumeration.insertAtIndex(newValue, index);
    }
    moveNestedEnumeration(oldIndex: number, newIndex: number) {
        this._nestedEnumeration.move(oldIndex, newIndex);
    }
    replaceNestedEnumerationAtIndex(movedChild: EnumerationUsage, newIndex: number) {
        this._nestedEnumeration.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedOccurrence: RequiredMultiContainmentValueManager<OccurrenceUsage>;
    get nestedOccurrence(): OccurrenceUsage[] {
        return this._nestedOccurrence.get();
    }
    addNestedOccurrence(newValue: OccurrenceUsage) {
        this._nestedOccurrence.add(newValue);
    }
    removeNestedOccurrence(valueToRemove: OccurrenceUsage) {
        this._nestedOccurrence.remove(valueToRemove);
    }
    addNestedOccurrenceAtIndex(newValue: OccurrenceUsage, index: number) {
        this._nestedOccurrence.insertAtIndex(newValue, index);
    }
    moveNestedOccurrence(oldIndex: number, newIndex: number) {
        this._nestedOccurrence.move(oldIndex, newIndex);
    }
    replaceNestedOccurrenceAtIndex(movedChild: OccurrenceUsage, newIndex: number) {
        this._nestedOccurrence.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedItem: RequiredMultiContainmentValueManager<ItemUsage>;
    get nestedItem(): ItemUsage[] {
        return this._nestedItem.get();
    }
    addNestedItem(newValue: ItemUsage) {
        this._nestedItem.add(newValue);
    }
    removeNestedItem(valueToRemove: ItemUsage) {
        this._nestedItem.remove(valueToRemove);
    }
    addNestedItemAtIndex(newValue: ItemUsage, index: number) {
        this._nestedItem.insertAtIndex(newValue, index);
    }
    moveNestedItem(oldIndex: number, newIndex: number) {
        this._nestedItem.move(oldIndex, newIndex);
    }
    replaceNestedItemAtIndex(movedChild: ItemUsage, newIndex: number) {
        this._nestedItem.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedPart: RequiredMultiContainmentValueManager<PartUsage>;
    get nestedPart(): PartUsage[] {
        return this._nestedPart.get();
    }
    addNestedPart(newValue: PartUsage) {
        this._nestedPart.add(newValue);
    }
    removeNestedPart(valueToRemove: PartUsage) {
        this._nestedPart.remove(valueToRemove);
    }
    addNestedPartAtIndex(newValue: PartUsage, index: number) {
        this._nestedPart.insertAtIndex(newValue, index);
    }
    moveNestedPart(oldIndex: number, newIndex: number) {
        this._nestedPart.move(oldIndex, newIndex);
    }
    replaceNestedPartAtIndex(movedChild: PartUsage, newIndex: number) {
        this._nestedPart.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedPort: RequiredMultiContainmentValueManager<PortUsage>;
    get nestedPort(): PortUsage[] {
        return this._nestedPort.get();
    }
    addNestedPort(newValue: PortUsage) {
        this._nestedPort.add(newValue);
    }
    removeNestedPort(valueToRemove: PortUsage) {
        this._nestedPort.remove(valueToRemove);
    }
    addNestedPortAtIndex(newValue: PortUsage, index: number) {
        this._nestedPort.insertAtIndex(newValue, index);
    }
    moveNestedPort(oldIndex: number, newIndex: number) {
        this._nestedPort.move(oldIndex, newIndex);
    }
    replaceNestedPortAtIndex(movedChild: PortUsage, newIndex: number) {
        this._nestedPort.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedConnection: RequiredMultiContainmentValueManager<ConnectorAsUsage>;
    get nestedConnection(): ConnectorAsUsage[] {
        return this._nestedConnection.get();
    }
    addNestedConnection(newValue: ConnectorAsUsage) {
        this._nestedConnection.add(newValue);
    }
    removeNestedConnection(valueToRemove: ConnectorAsUsage) {
        this._nestedConnection.remove(valueToRemove);
    }
    addNestedConnectionAtIndex(newValue: ConnectorAsUsage, index: number) {
        this._nestedConnection.insertAtIndex(newValue, index);
    }
    moveNestedConnection(oldIndex: number, newIndex: number) {
        this._nestedConnection.move(oldIndex, newIndex);
    }
    replaceNestedConnectionAtIndex(movedChild: ConnectorAsUsage, newIndex: number) {
        this._nestedConnection.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedFlow: RequiredMultiContainmentValueManager<FlowUsage>;
    get nestedFlow(): FlowUsage[] {
        return this._nestedFlow.get();
    }
    addNestedFlow(newValue: FlowUsage) {
        this._nestedFlow.add(newValue);
    }
    removeNestedFlow(valueToRemove: FlowUsage) {
        this._nestedFlow.remove(valueToRemove);
    }
    addNestedFlowAtIndex(newValue: FlowUsage, index: number) {
        this._nestedFlow.insertAtIndex(newValue, index);
    }
    moveNestedFlow(oldIndex: number, newIndex: number) {
        this._nestedFlow.move(oldIndex, newIndex);
    }
    replaceNestedFlowAtIndex(movedChild: FlowUsage, newIndex: number) {
        this._nestedFlow.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedInterface: RequiredMultiContainmentValueManager<InterfaceUsage>;
    get nestedInterface(): InterfaceUsage[] {
        return this._nestedInterface.get();
    }
    addNestedInterface(newValue: InterfaceUsage) {
        this._nestedInterface.add(newValue);
    }
    removeNestedInterface(valueToRemove: InterfaceUsage) {
        this._nestedInterface.remove(valueToRemove);
    }
    addNestedInterfaceAtIndex(newValue: InterfaceUsage, index: number) {
        this._nestedInterface.insertAtIndex(newValue, index);
    }
    moveNestedInterface(oldIndex: number, newIndex: number) {
        this._nestedInterface.move(oldIndex, newIndex);
    }
    replaceNestedInterfaceAtIndex(movedChild: InterfaceUsage, newIndex: number) {
        this._nestedInterface.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedAllocation: RequiredMultiContainmentValueManager<AllocationUsage>;
    get nestedAllocation(): AllocationUsage[] {
        return this._nestedAllocation.get();
    }
    addNestedAllocation(newValue: AllocationUsage) {
        this._nestedAllocation.add(newValue);
    }
    removeNestedAllocation(valueToRemove: AllocationUsage) {
        this._nestedAllocation.remove(valueToRemove);
    }
    addNestedAllocationAtIndex(newValue: AllocationUsage, index: number) {
        this._nestedAllocation.insertAtIndex(newValue, index);
    }
    moveNestedAllocation(oldIndex: number, newIndex: number) {
        this._nestedAllocation.move(oldIndex, newIndex);
    }
    replaceNestedAllocationAtIndex(movedChild: AllocationUsage, newIndex: number) {
        this._nestedAllocation.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedAction: RequiredMultiContainmentValueManager<ActionUsage>;
    get nestedAction(): ActionUsage[] {
        return this._nestedAction.get();
    }
    addNestedAction(newValue: ActionUsage) {
        this._nestedAction.add(newValue);
    }
    removeNestedAction(valueToRemove: ActionUsage) {
        this._nestedAction.remove(valueToRemove);
    }
    addNestedActionAtIndex(newValue: ActionUsage, index: number) {
        this._nestedAction.insertAtIndex(newValue, index);
    }
    moveNestedAction(oldIndex: number, newIndex: number) {
        this._nestedAction.move(oldIndex, newIndex);
    }
    replaceNestedActionAtIndex(movedChild: ActionUsage, newIndex: number) {
        this._nestedAction.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedState: RequiredMultiContainmentValueManager<StateUsage>;
    get nestedState(): StateUsage[] {
        return this._nestedState.get();
    }
    addNestedState(newValue: StateUsage) {
        this._nestedState.add(newValue);
    }
    removeNestedState(valueToRemove: StateUsage) {
        this._nestedState.remove(valueToRemove);
    }
    addNestedStateAtIndex(newValue: StateUsage, index: number) {
        this._nestedState.insertAtIndex(newValue, index);
    }
    moveNestedState(oldIndex: number, newIndex: number) {
        this._nestedState.move(oldIndex, newIndex);
    }
    replaceNestedStateAtIndex(movedChild: StateUsage, newIndex: number) {
        this._nestedState.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedTransition: RequiredMultiContainmentValueManager<TransitionUsage>;
    get nestedTransition(): TransitionUsage[] {
        return this._nestedTransition.get();
    }
    addNestedTransition(newValue: TransitionUsage) {
        this._nestedTransition.add(newValue);
    }
    removeNestedTransition(valueToRemove: TransitionUsage) {
        this._nestedTransition.remove(valueToRemove);
    }
    addNestedTransitionAtIndex(newValue: TransitionUsage, index: number) {
        this._nestedTransition.insertAtIndex(newValue, index);
    }
    moveNestedTransition(oldIndex: number, newIndex: number) {
        this._nestedTransition.move(oldIndex, newIndex);
    }
    replaceNestedTransitionAtIndex(movedChild: TransitionUsage, newIndex: number) {
        this._nestedTransition.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedCalculation: RequiredMultiContainmentValueManager<CalculationUsage>;
    get nestedCalculation(): CalculationUsage[] {
        return this._nestedCalculation.get();
    }
    addNestedCalculation(newValue: CalculationUsage) {
        this._nestedCalculation.add(newValue);
    }
    removeNestedCalculation(valueToRemove: CalculationUsage) {
        this._nestedCalculation.remove(valueToRemove);
    }
    addNestedCalculationAtIndex(newValue: CalculationUsage, index: number) {
        this._nestedCalculation.insertAtIndex(newValue, index);
    }
    moveNestedCalculation(oldIndex: number, newIndex: number) {
        this._nestedCalculation.move(oldIndex, newIndex);
    }
    replaceNestedCalculationAtIndex(movedChild: CalculationUsage, newIndex: number) {
        this._nestedCalculation.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedConstraint: RequiredMultiContainmentValueManager<ConstraintUsage>;
    get nestedConstraint(): ConstraintUsage[] {
        return this._nestedConstraint.get();
    }
    addNestedConstraint(newValue: ConstraintUsage) {
        this._nestedConstraint.add(newValue);
    }
    removeNestedConstraint(valueToRemove: ConstraintUsage) {
        this._nestedConstraint.remove(valueToRemove);
    }
    addNestedConstraintAtIndex(newValue: ConstraintUsage, index: number) {
        this._nestedConstraint.insertAtIndex(newValue, index);
    }
    moveNestedConstraint(oldIndex: number, newIndex: number) {
        this._nestedConstraint.move(oldIndex, newIndex);
    }
    replaceNestedConstraintAtIndex(movedChild: ConstraintUsage, newIndex: number) {
        this._nestedConstraint.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedRequirement: RequiredMultiContainmentValueManager<RequirementUsage>;
    get nestedRequirement(): RequirementUsage[] {
        return this._nestedRequirement.get();
    }
    addNestedRequirement(newValue: RequirementUsage) {
        this._nestedRequirement.add(newValue);
    }
    removeNestedRequirement(valueToRemove: RequirementUsage) {
        this._nestedRequirement.remove(valueToRemove);
    }
    addNestedRequirementAtIndex(newValue: RequirementUsage, index: number) {
        this._nestedRequirement.insertAtIndex(newValue, index);
    }
    moveNestedRequirement(oldIndex: number, newIndex: number) {
        this._nestedRequirement.move(oldIndex, newIndex);
    }
    replaceNestedRequirementAtIndex(movedChild: RequirementUsage, newIndex: number) {
        this._nestedRequirement.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedConcern: RequiredMultiContainmentValueManager<ConcernUsage>;
    get nestedConcern(): ConcernUsage[] {
        return this._nestedConcern.get();
    }
    addNestedConcern(newValue: ConcernUsage) {
        this._nestedConcern.add(newValue);
    }
    removeNestedConcern(valueToRemove: ConcernUsage) {
        this._nestedConcern.remove(valueToRemove);
    }
    addNestedConcernAtIndex(newValue: ConcernUsage, index: number) {
        this._nestedConcern.insertAtIndex(newValue, index);
    }
    moveNestedConcern(oldIndex: number, newIndex: number) {
        this._nestedConcern.move(oldIndex, newIndex);
    }
    replaceNestedConcernAtIndex(movedChild: ConcernUsage, newIndex: number) {
        this._nestedConcern.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedCase: RequiredMultiContainmentValueManager<CaseUsage>;
    get nestedCase(): CaseUsage[] {
        return this._nestedCase.get();
    }
    addNestedCase(newValue: CaseUsage) {
        this._nestedCase.add(newValue);
    }
    removeNestedCase(valueToRemove: CaseUsage) {
        this._nestedCase.remove(valueToRemove);
    }
    addNestedCaseAtIndex(newValue: CaseUsage, index: number) {
        this._nestedCase.insertAtIndex(newValue, index);
    }
    moveNestedCase(oldIndex: number, newIndex: number) {
        this._nestedCase.move(oldIndex, newIndex);
    }
    replaceNestedCaseAtIndex(movedChild: CaseUsage, newIndex: number) {
        this._nestedCase.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedAnalysisCase: RequiredMultiContainmentValueManager<AnalysisCaseUsage>;
    get nestedAnalysisCase(): AnalysisCaseUsage[] {
        return this._nestedAnalysisCase.get();
    }
    addNestedAnalysisCase(newValue: AnalysisCaseUsage) {
        this._nestedAnalysisCase.add(newValue);
    }
    removeNestedAnalysisCase(valueToRemove: AnalysisCaseUsage) {
        this._nestedAnalysisCase.remove(valueToRemove);
    }
    addNestedAnalysisCaseAtIndex(newValue: AnalysisCaseUsage, index: number) {
        this._nestedAnalysisCase.insertAtIndex(newValue, index);
    }
    moveNestedAnalysisCase(oldIndex: number, newIndex: number) {
        this._nestedAnalysisCase.move(oldIndex, newIndex);
    }
    replaceNestedAnalysisCaseAtIndex(movedChild: AnalysisCaseUsage, newIndex: number) {
        this._nestedAnalysisCase.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedVerificationCase: RequiredMultiContainmentValueManager<VerificationCaseUsage>;
    get nestedVerificationCase(): VerificationCaseUsage[] {
        return this._nestedVerificationCase.get();
    }
    addNestedVerificationCase(newValue: VerificationCaseUsage) {
        this._nestedVerificationCase.add(newValue);
    }
    removeNestedVerificationCase(valueToRemove: VerificationCaseUsage) {
        this._nestedVerificationCase.remove(valueToRemove);
    }
    addNestedVerificationCaseAtIndex(newValue: VerificationCaseUsage, index: number) {
        this._nestedVerificationCase.insertAtIndex(newValue, index);
    }
    moveNestedVerificationCase(oldIndex: number, newIndex: number) {
        this._nestedVerificationCase.move(oldIndex, newIndex);
    }
    replaceNestedVerificationCaseAtIndex(movedChild: VerificationCaseUsage, newIndex: number) {
        this._nestedVerificationCase.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedUseCase: RequiredMultiContainmentValueManager<UseCaseUsage>;
    get nestedUseCase(): UseCaseUsage[] {
        return this._nestedUseCase.get();
    }
    addNestedUseCase(newValue: UseCaseUsage) {
        this._nestedUseCase.add(newValue);
    }
    removeNestedUseCase(valueToRemove: UseCaseUsage) {
        this._nestedUseCase.remove(valueToRemove);
    }
    addNestedUseCaseAtIndex(newValue: UseCaseUsage, index: number) {
        this._nestedUseCase.insertAtIndex(newValue, index);
    }
    moveNestedUseCase(oldIndex: number, newIndex: number) {
        this._nestedUseCase.move(oldIndex, newIndex);
    }
    replaceNestedUseCaseAtIndex(movedChild: UseCaseUsage, newIndex: number) {
        this._nestedUseCase.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedView: RequiredMultiContainmentValueManager<ViewUsage>;
    get nestedView(): ViewUsage[] {
        return this._nestedView.get();
    }
    addNestedView(newValue: ViewUsage) {
        this._nestedView.add(newValue);
    }
    removeNestedView(valueToRemove: ViewUsage) {
        this._nestedView.remove(valueToRemove);
    }
    addNestedViewAtIndex(newValue: ViewUsage, index: number) {
        this._nestedView.insertAtIndex(newValue, index);
    }
    moveNestedView(oldIndex: number, newIndex: number) {
        this._nestedView.move(oldIndex, newIndex);
    }
    replaceNestedViewAtIndex(movedChild: ViewUsage, newIndex: number) {
        this._nestedView.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedViewpoint: RequiredMultiContainmentValueManager<ViewpointUsage>;
    get nestedViewpoint(): ViewpointUsage[] {
        return this._nestedViewpoint.get();
    }
    addNestedViewpoint(newValue: ViewpointUsage) {
        this._nestedViewpoint.add(newValue);
    }
    removeNestedViewpoint(valueToRemove: ViewpointUsage) {
        this._nestedViewpoint.remove(valueToRemove);
    }
    addNestedViewpointAtIndex(newValue: ViewpointUsage, index: number) {
        this._nestedViewpoint.insertAtIndex(newValue, index);
    }
    moveNestedViewpoint(oldIndex: number, newIndex: number) {
        this._nestedViewpoint.move(oldIndex, newIndex);
    }
    replaceNestedViewpointAtIndex(movedChild: ViewpointUsage, newIndex: number) {
        this._nestedViewpoint.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedRendering: RequiredMultiContainmentValueManager<RenderingUsage>;
    get nestedRendering(): RenderingUsage[] {
        return this._nestedRendering.get();
    }
    addNestedRendering(newValue: RenderingUsage) {
        this._nestedRendering.add(newValue);
    }
    removeNestedRendering(valueToRemove: RenderingUsage) {
        this._nestedRendering.remove(valueToRemove);
    }
    addNestedRenderingAtIndex(newValue: RenderingUsage, index: number) {
        this._nestedRendering.insertAtIndex(newValue, index);
    }
    moveNestedRendering(oldIndex: number, newIndex: number) {
        this._nestedRendering.move(oldIndex, newIndex);
    }
    replaceNestedRenderingAtIndex(movedChild: RenderingUsage, newIndex: number) {
        this._nestedRendering.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _nestedMetadata: RequiredMultiContainmentValueManager<MetadataUsage>;
    get nestedMetadata(): MetadataUsage[] {
        return this._nestedMetadata.get();
    }
    addNestedMetadata(newValue: MetadataUsage) {
        this._nestedMetadata.add(newValue);
    }
    removeNestedMetadata(valueToRemove: MetadataUsage) {
        this._nestedMetadata.remove(valueToRemove);
    }
    addNestedMetadataAtIndex(newValue: MetadataUsage, index: number) {
        this._nestedMetadata.insertAtIndex(newValue, index);
    }
    moveNestedMetadata(oldIndex: number, newIndex: number) {
        this._nestedMetadata.move(oldIndex, newIndex);
    }
    replaceNestedMetadataAtIndex(movedChild: MetadataUsage, newIndex: number) {
        this._nestedMetadata.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _isVariation: RequiredPropertyValueManager<boolean>;
    get isVariation(): boolean {
        return this._isVariation.get();
    }
    set isVariation(newValue: boolean) {
        this._isVariation.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._mayTimeVary = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.Usage_mayTimeVary, this);
        this._isReference = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.Usage_isReference, this);
        this._variant = new RequiredMultiContainmentValueManager<Usage>(sysmlBase.INSTANCE.Usage_variant, this);
        this._variantMembership = new RequiredMultiContainmentValueManager<VariantMembership>(sysmlBase.INSTANCE.Usage_variantMembership, this);
        this._owningDefinition = new RequiredMultiContainmentValueManager<Definition>(sysmlBase.INSTANCE.Usage_owningDefinition, this);
        this._owningUsage = new RequiredMultiContainmentValueManager<Usage>(sysmlBase.INSTANCE.Usage_owningUsage, this);
        this._nestedUsage = new RequiredMultiContainmentValueManager<Usage>(sysmlBase.INSTANCE.Usage_nestedUsage, this);
        this._definition = new RequiredMultiContainmentValueManager<sysmlClassifier>(sysmlBase.INSTANCE.Usage_definition, this);
        this._usage = new RequiredMultiContainmentValueManager<Usage>(sysmlBase.INSTANCE.Usage_usage, this);
        this._directedUsage = new RequiredMultiContainmentValueManager<Usage>(sysmlBase.INSTANCE.Usage_directedUsage, this);
        this._nestedReference = new RequiredMultiContainmentValueManager<ReferenceUsage>(sysmlBase.INSTANCE.Usage_nestedReference, this);
        this._nestedAttribute = new RequiredMultiContainmentValueManager<AttributeUsage>(sysmlBase.INSTANCE.Usage_nestedAttribute, this);
        this._nestedEnumeration = new RequiredMultiContainmentValueManager<EnumerationUsage>(sysmlBase.INSTANCE.Usage_nestedEnumeration, this);
        this._nestedOccurrence = new RequiredMultiContainmentValueManager<OccurrenceUsage>(sysmlBase.INSTANCE.Usage_nestedOccurrence, this);
        this._nestedItem = new RequiredMultiContainmentValueManager<ItemUsage>(sysmlBase.INSTANCE.Usage_nestedItem, this);
        this._nestedPart = new RequiredMultiContainmentValueManager<PartUsage>(sysmlBase.INSTANCE.Usage_nestedPart, this);
        this._nestedPort = new RequiredMultiContainmentValueManager<PortUsage>(sysmlBase.INSTANCE.Usage_nestedPort, this);
        this._nestedConnection = new RequiredMultiContainmentValueManager<ConnectorAsUsage>(sysmlBase.INSTANCE.Usage_nestedConnection, this);
        this._nestedFlow = new RequiredMultiContainmentValueManager<FlowUsage>(sysmlBase.INSTANCE.Usage_nestedFlow, this);
        this._nestedInterface = new RequiredMultiContainmentValueManager<InterfaceUsage>(sysmlBase.INSTANCE.Usage_nestedInterface, this);
        this._nestedAllocation = new RequiredMultiContainmentValueManager<AllocationUsage>(sysmlBase.INSTANCE.Usage_nestedAllocation, this);
        this._nestedAction = new RequiredMultiContainmentValueManager<ActionUsage>(sysmlBase.INSTANCE.Usage_nestedAction, this);
        this._nestedState = new RequiredMultiContainmentValueManager<StateUsage>(sysmlBase.INSTANCE.Usage_nestedState, this);
        this._nestedTransition = new RequiredMultiContainmentValueManager<TransitionUsage>(sysmlBase.INSTANCE.Usage_nestedTransition, this);
        this._nestedCalculation = new RequiredMultiContainmentValueManager<CalculationUsage>(sysmlBase.INSTANCE.Usage_nestedCalculation, this);
        this._nestedConstraint = new RequiredMultiContainmentValueManager<ConstraintUsage>(sysmlBase.INSTANCE.Usage_nestedConstraint, this);
        this._nestedRequirement = new RequiredMultiContainmentValueManager<RequirementUsage>(sysmlBase.INSTANCE.Usage_nestedRequirement, this);
        this._nestedConcern = new RequiredMultiContainmentValueManager<ConcernUsage>(sysmlBase.INSTANCE.Usage_nestedConcern, this);
        this._nestedCase = new RequiredMultiContainmentValueManager<CaseUsage>(sysmlBase.INSTANCE.Usage_nestedCase, this);
        this._nestedAnalysisCase = new RequiredMultiContainmentValueManager<AnalysisCaseUsage>(sysmlBase.INSTANCE.Usage_nestedAnalysisCase, this);
        this._nestedVerificationCase = new RequiredMultiContainmentValueManager<VerificationCaseUsage>(sysmlBase.INSTANCE.Usage_nestedVerificationCase, this);
        this._nestedUseCase = new RequiredMultiContainmentValueManager<UseCaseUsage>(sysmlBase.INSTANCE.Usage_nestedUseCase, this);
        this._nestedView = new RequiredMultiContainmentValueManager<ViewUsage>(sysmlBase.INSTANCE.Usage_nestedView, this);
        this._nestedViewpoint = new RequiredMultiContainmentValueManager<ViewpointUsage>(sysmlBase.INSTANCE.Usage_nestedViewpoint, this);
        this._nestedRendering = new RequiredMultiContainmentValueManager<RenderingUsage>(sysmlBase.INSTANCE.Usage_nestedRendering, this);
        this._nestedMetadata = new RequiredMultiContainmentValueManager<MetadataUsage>(sysmlBase.INSTANCE.Usage_nestedMetadata, this);
        this._isVariation = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.Usage_isVariation, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case sysmlBase.INSTANCE.Usage_mayTimeVary.key: return this._mayTimeVary;
            case sysmlBase.INSTANCE.Usage_isReference.key: return this._isReference;
            case sysmlBase.INSTANCE.Usage_isVariation.key: return this._isVariation;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Usage_variant.key: return this._variant;
            case sysmlBase.INSTANCE.Usage_variantMembership.key: return this._variantMembership;
            case sysmlBase.INSTANCE.Usage_owningDefinition.key: return this._owningDefinition;
            case sysmlBase.INSTANCE.Usage_owningUsage.key: return this._owningUsage;
            case sysmlBase.INSTANCE.Usage_nestedUsage.key: return this._nestedUsage;
            case sysmlBase.INSTANCE.Usage_definition.key: return this._definition;
            case sysmlBase.INSTANCE.Usage_usage.key: return this._usage;
            case sysmlBase.INSTANCE.Usage_directedUsage.key: return this._directedUsage;
            case sysmlBase.INSTANCE.Usage_nestedReference.key: return this._nestedReference;
            case sysmlBase.INSTANCE.Usage_nestedAttribute.key: return this._nestedAttribute;
            case sysmlBase.INSTANCE.Usage_nestedEnumeration.key: return this._nestedEnumeration;
            case sysmlBase.INSTANCE.Usage_nestedOccurrence.key: return this._nestedOccurrence;
            case sysmlBase.INSTANCE.Usage_nestedItem.key: return this._nestedItem;
            case sysmlBase.INSTANCE.Usage_nestedPart.key: return this._nestedPart;
            case sysmlBase.INSTANCE.Usage_nestedPort.key: return this._nestedPort;
            case sysmlBase.INSTANCE.Usage_nestedConnection.key: return this._nestedConnection;
            case sysmlBase.INSTANCE.Usage_nestedFlow.key: return this._nestedFlow;
            case sysmlBase.INSTANCE.Usage_nestedInterface.key: return this._nestedInterface;
            case sysmlBase.INSTANCE.Usage_nestedAllocation.key: return this._nestedAllocation;
            case sysmlBase.INSTANCE.Usage_nestedAction.key: return this._nestedAction;
            case sysmlBase.INSTANCE.Usage_nestedState.key: return this._nestedState;
            case sysmlBase.INSTANCE.Usage_nestedTransition.key: return this._nestedTransition;
            case sysmlBase.INSTANCE.Usage_nestedCalculation.key: return this._nestedCalculation;
            case sysmlBase.INSTANCE.Usage_nestedConstraint.key: return this._nestedConstraint;
            case sysmlBase.INSTANCE.Usage_nestedRequirement.key: return this._nestedRequirement;
            case sysmlBase.INSTANCE.Usage_nestedConcern.key: return this._nestedConcern;
            case sysmlBase.INSTANCE.Usage_nestedCase.key: return this._nestedCase;
            case sysmlBase.INSTANCE.Usage_nestedAnalysisCase.key: return this._nestedAnalysisCase;
            case sysmlBase.INSTANCE.Usage_nestedVerificationCase.key: return this._nestedVerificationCase;
            case sysmlBase.INSTANCE.Usage_nestedUseCase.key: return this._nestedUseCase;
            case sysmlBase.INSTANCE.Usage_nestedView.key: return this._nestedView;
            case sysmlBase.INSTANCE.Usage_nestedViewpoint.key: return this._nestedViewpoint;
            case sysmlBase.INSTANCE.Usage_nestedRendering.key: return this._nestedRendering;
            case sysmlBase.INSTANCE.Usage_nestedMetadata.key: return this._nestedMetadata;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class OccurrenceUsage extends Usage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): OccurrenceUsage {
        return new OccurrenceUsage(sysmlBase.INSTANCE.OccurrenceUsage, id, receiveDelta, parentInfo);
    }

    private readonly _occurrenceDefinition: RequiredMultiContainmentValueManager<Class>;
    get occurrenceDefinition(): Class[] {
        return this._occurrenceDefinition.get();
    }
    addOccurrenceDefinition(newValue: Class) {
        this._occurrenceDefinition.add(newValue);
    }
    removeOccurrenceDefinition(valueToRemove: Class) {
        this._occurrenceDefinition.remove(valueToRemove);
    }
    addOccurrenceDefinitionAtIndex(newValue: Class, index: number) {
        this._occurrenceDefinition.insertAtIndex(newValue, index);
    }
    moveOccurrenceDefinition(oldIndex: number, newIndex: number) {
        this._occurrenceDefinition.move(oldIndex, newIndex);
    }
    replaceOccurrenceDefinitionAtIndex(movedChild: Class, newIndex: number) {
        this._occurrenceDefinition.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _individualDefinition: RequiredMultiContainmentValueManager<OccurrenceDefinition>;
    get individualDefinition(): OccurrenceDefinition[] {
        return this._individualDefinition.get();
    }
    addIndividualDefinition(newValue: OccurrenceDefinition) {
        this._individualDefinition.add(newValue);
    }
    removeIndividualDefinition(valueToRemove: OccurrenceDefinition) {
        this._individualDefinition.remove(valueToRemove);
    }
    addIndividualDefinitionAtIndex(newValue: OccurrenceDefinition, index: number) {
        this._individualDefinition.insertAtIndex(newValue, index);
    }
    moveIndividualDefinition(oldIndex: number, newIndex: number) {
        this._individualDefinition.move(oldIndex, newIndex);
    }
    replaceIndividualDefinitionAtIndex(movedChild: OccurrenceDefinition, newIndex: number) {
        this._individualDefinition.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _isIndividual: RequiredPropertyValueManager<boolean>;
    get isIndividual(): boolean {
        return this._isIndividual.get();
    }
    set isIndividual(newValue: boolean) {
        this._isIndividual.set(newValue);
    }

    private readonly _portionKind: RequiredPropertyValueManager<PortionKind>;
    get portionKind(): PortionKind {
        return this._portionKind.get();
    }
    set portionKind(newValue: PortionKind) {
        this._portionKind.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._occurrenceDefinition = new RequiredMultiContainmentValueManager<Class>(sysmlBase.INSTANCE.OccurrenceUsage_occurrenceDefinition, this);
        this._individualDefinition = new RequiredMultiContainmentValueManager<OccurrenceDefinition>(sysmlBase.INSTANCE.OccurrenceUsage_individualDefinition, this);
        this._isIndividual = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.OccurrenceUsage_isIndividual, this);
        this._portionKind = new RequiredPropertyValueManager<PortionKind>(sysmlBase.INSTANCE.OccurrenceUsage_portionKind, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case sysmlBase.INSTANCE.OccurrenceUsage_isIndividual.key: return this._isIndividual;
            case sysmlBase.INSTANCE.OccurrenceUsage_portionKind.key: return this._portionKind;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.OccurrenceUsage_occurrenceDefinition.key: return this._occurrenceDefinition;
            case sysmlBase.INSTANCE.OccurrenceUsage_individualDefinition.key: return this._individualDefinition;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class ActionUsage extends OccurrenceUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ActionUsage {
        return new ActionUsage(sysmlBase.INSTANCE.ActionUsage, id, receiveDelta, parentInfo);
    }

    private readonly _actionDefinition: RequiredMultiContainmentValueManager<Behavior>;
    get actionDefinition(): Behavior[] {
        return this._actionDefinition.get();
    }
    addActionDefinition(newValue: Behavior) {
        this._actionDefinition.add(newValue);
    }
    removeActionDefinition(valueToRemove: Behavior) {
        this._actionDefinition.remove(valueToRemove);
    }
    addActionDefinitionAtIndex(newValue: Behavior, index: number) {
        this._actionDefinition.insertAtIndex(newValue, index);
    }
    moveActionDefinition(oldIndex: number, newIndex: number) {
        this._actionDefinition.move(oldIndex, newIndex);
    }
    replaceActionDefinitionAtIndex(movedChild: Behavior, newIndex: number) {
        this._actionDefinition.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._actionDefinition = new RequiredMultiContainmentValueManager<Behavior>(sysmlBase.INSTANCE.ActionUsage_actionDefinition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.ActionUsage_actionDefinition.key) {
            return this._actionDefinition;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class AcceptActionUsage extends ActionUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): AcceptActionUsage {
        return new AcceptActionUsage(sysmlBase.INSTANCE.AcceptActionUsage, id, receiveDelta, parentInfo);
    }

    private readonly _receiverArgument: RequiredMultiContainmentValueManager<Expression>;
    get receiverArgument(): Expression[] {
        return this._receiverArgument.get();
    }
    addReceiverArgument(newValue: Expression) {
        this._receiverArgument.add(newValue);
    }
    removeReceiverArgument(valueToRemove: Expression) {
        this._receiverArgument.remove(valueToRemove);
    }
    addReceiverArgumentAtIndex(newValue: Expression, index: number) {
        this._receiverArgument.insertAtIndex(newValue, index);
    }
    moveReceiverArgument(oldIndex: number, newIndex: number) {
        this._receiverArgument.move(oldIndex, newIndex);
    }
    replaceReceiverArgumentAtIndex(movedChild: Expression, newIndex: number) {
        this._receiverArgument.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _payloadParameter: RequiredMultiContainmentValueManager<ReferenceUsage>;
    get payloadParameter(): ReferenceUsage[] {
        return this._payloadParameter.get();
    }
    addPayloadParameter(newValue: ReferenceUsage) {
        this._payloadParameter.add(newValue);
    }
    removePayloadParameter(valueToRemove: ReferenceUsage) {
        this._payloadParameter.remove(valueToRemove);
    }
    addPayloadParameterAtIndex(newValue: ReferenceUsage, index: number) {
        this._payloadParameter.insertAtIndex(newValue, index);
    }
    movePayloadParameter(oldIndex: number, newIndex: number) {
        this._payloadParameter.move(oldIndex, newIndex);
    }
    replacePayloadParameterAtIndex(movedChild: ReferenceUsage, newIndex: number) {
        this._payloadParameter.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _payloadArgument: RequiredMultiContainmentValueManager<Expression>;
    get payloadArgument(): Expression[] {
        return this._payloadArgument.get();
    }
    addPayloadArgument(newValue: Expression) {
        this._payloadArgument.add(newValue);
    }
    removePayloadArgument(valueToRemove: Expression) {
        this._payloadArgument.remove(valueToRemove);
    }
    addPayloadArgumentAtIndex(newValue: Expression, index: number) {
        this._payloadArgument.insertAtIndex(newValue, index);
    }
    movePayloadArgument(oldIndex: number, newIndex: number) {
        this._payloadArgument.move(oldIndex, newIndex);
    }
    replacePayloadArgumentAtIndex(movedChild: Expression, newIndex: number) {
        this._payloadArgument.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._receiverArgument = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.AcceptActionUsage_receiverArgument, this);
        this._payloadParameter = new RequiredMultiContainmentValueManager<ReferenceUsage>(sysmlBase.INSTANCE.AcceptActionUsage_payloadParameter, this);
        this._payloadArgument = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.AcceptActionUsage_payloadArgument, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.AcceptActionUsage_receiverArgument.key: return this._receiverArgument;
            case sysmlBase.INSTANCE.AcceptActionUsage_payloadParameter.key: return this._payloadParameter;
            case sysmlBase.INSTANCE.AcceptActionUsage_payloadArgument.key: return this._payloadArgument;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class sysmlClassifier extends Type {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): sysmlClassifier {
        return new sysmlClassifier(sysmlBase.INSTANCE.sysmlClassifier, id, receiveDelta, parentInfo);
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
        this._ownedSubclassification = new RequiredMultiContainmentValueManager<Subclassification>(sysmlBase.INSTANCE.sysmlClassifier_ownedSubclassification, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.sysmlClassifier_ownedSubclassification.key) {
            return this._ownedSubclassification;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class Definition extends sysmlClassifier {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Definition {
        return new Definition(sysmlBase.INSTANCE.Definition, id, receiveDelta, parentInfo);
    }

    private readonly _isVariation: RequiredPropertyValueManager<boolean>;
    get isVariation(): boolean {
        return this._isVariation.get();
    }
    set isVariation(newValue: boolean) {
        this._isVariation.set(newValue);
    }

    private readonly _variant: RequiredMultiContainmentValueManager<Usage>;
    get variant(): Usage[] {
        return this._variant.get();
    }
    addVariant(newValue: Usage) {
        this._variant.add(newValue);
    }
    removeVariant(valueToRemove: Usage) {
        this._variant.remove(valueToRemove);
    }
    addVariantAtIndex(newValue: Usage, index: number) {
        this._variant.insertAtIndex(newValue, index);
    }
    moveVariant(oldIndex: number, newIndex: number) {
        this._variant.move(oldIndex, newIndex);
    }
    replaceVariantAtIndex(movedChild: Usage, newIndex: number) {
        this._variant.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _variantMembership: RequiredMultiContainmentValueManager<VariantMembership>;
    get variantMembership(): VariantMembership[] {
        return this._variantMembership.get();
    }
    addVariantMembership(newValue: VariantMembership) {
        this._variantMembership.add(newValue);
    }
    removeVariantMembership(valueToRemove: VariantMembership) {
        this._variantMembership.remove(valueToRemove);
    }
    addVariantMembershipAtIndex(newValue: VariantMembership, index: number) {
        this._variantMembership.insertAtIndex(newValue, index);
    }
    moveVariantMembership(oldIndex: number, newIndex: number) {
        this._variantMembership.move(oldIndex, newIndex);
    }
    replaceVariantMembershipAtIndex(movedChild: VariantMembership, newIndex: number) {
        this._variantMembership.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _usage: RequiredMultiContainmentValueManager<Usage>;
    get usage(): Usage[] {
        return this._usage.get();
    }
    addUsage(newValue: Usage) {
        this._usage.add(newValue);
    }
    removeUsage(valueToRemove: Usage) {
        this._usage.remove(valueToRemove);
    }
    addUsageAtIndex(newValue: Usage, index: number) {
        this._usage.insertAtIndex(newValue, index);
    }
    moveUsage(oldIndex: number, newIndex: number) {
        this._usage.move(oldIndex, newIndex);
    }
    replaceUsageAtIndex(movedChild: Usage, newIndex: number) {
        this._usage.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _directedUsage: RequiredMultiContainmentValueManager<Usage>;
    get directedUsage(): Usage[] {
        return this._directedUsage.get();
    }
    addDirectedUsage(newValue: Usage) {
        this._directedUsage.add(newValue);
    }
    removeDirectedUsage(valueToRemove: Usage) {
        this._directedUsage.remove(valueToRemove);
    }
    addDirectedUsageAtIndex(newValue: Usage, index: number) {
        this._directedUsage.insertAtIndex(newValue, index);
    }
    moveDirectedUsage(oldIndex: number, newIndex: number) {
        this._directedUsage.move(oldIndex, newIndex);
    }
    replaceDirectedUsageAtIndex(movedChild: Usage, newIndex: number) {
        this._directedUsage.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedReference: RequiredMultiContainmentValueManager<ReferenceUsage>;
    get ownedReference(): ReferenceUsage[] {
        return this._ownedReference.get();
    }
    addOwnedReference(newValue: ReferenceUsage) {
        this._ownedReference.add(newValue);
    }
    removeOwnedReference(valueToRemove: ReferenceUsage) {
        this._ownedReference.remove(valueToRemove);
    }
    addOwnedReferenceAtIndex(newValue: ReferenceUsage, index: number) {
        this._ownedReference.insertAtIndex(newValue, index);
    }
    moveOwnedReference(oldIndex: number, newIndex: number) {
        this._ownedReference.move(oldIndex, newIndex);
    }
    replaceOwnedReferenceAtIndex(movedChild: ReferenceUsage, newIndex: number) {
        this._ownedReference.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedAttribute: RequiredMultiContainmentValueManager<AttributeUsage>;
    get ownedAttribute(): AttributeUsage[] {
        return this._ownedAttribute.get();
    }
    addOwnedAttribute(newValue: AttributeUsage) {
        this._ownedAttribute.add(newValue);
    }
    removeOwnedAttribute(valueToRemove: AttributeUsage) {
        this._ownedAttribute.remove(valueToRemove);
    }
    addOwnedAttributeAtIndex(newValue: AttributeUsage, index: number) {
        this._ownedAttribute.insertAtIndex(newValue, index);
    }
    moveOwnedAttribute(oldIndex: number, newIndex: number) {
        this._ownedAttribute.move(oldIndex, newIndex);
    }
    replaceOwnedAttributeAtIndex(movedChild: AttributeUsage, newIndex: number) {
        this._ownedAttribute.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedEnumeration: RequiredMultiContainmentValueManager<EnumerationUsage>;
    get ownedEnumeration(): EnumerationUsage[] {
        return this._ownedEnumeration.get();
    }
    addOwnedEnumeration(newValue: EnumerationUsage) {
        this._ownedEnumeration.add(newValue);
    }
    removeOwnedEnumeration(valueToRemove: EnumerationUsage) {
        this._ownedEnumeration.remove(valueToRemove);
    }
    addOwnedEnumerationAtIndex(newValue: EnumerationUsage, index: number) {
        this._ownedEnumeration.insertAtIndex(newValue, index);
    }
    moveOwnedEnumeration(oldIndex: number, newIndex: number) {
        this._ownedEnumeration.move(oldIndex, newIndex);
    }
    replaceOwnedEnumerationAtIndex(movedChild: EnumerationUsage, newIndex: number) {
        this._ownedEnumeration.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedOccurrence: RequiredMultiContainmentValueManager<OccurrenceUsage>;
    get ownedOccurrence(): OccurrenceUsage[] {
        return this._ownedOccurrence.get();
    }
    addOwnedOccurrence(newValue: OccurrenceUsage) {
        this._ownedOccurrence.add(newValue);
    }
    removeOwnedOccurrence(valueToRemove: OccurrenceUsage) {
        this._ownedOccurrence.remove(valueToRemove);
    }
    addOwnedOccurrenceAtIndex(newValue: OccurrenceUsage, index: number) {
        this._ownedOccurrence.insertAtIndex(newValue, index);
    }
    moveOwnedOccurrence(oldIndex: number, newIndex: number) {
        this._ownedOccurrence.move(oldIndex, newIndex);
    }
    replaceOwnedOccurrenceAtIndex(movedChild: OccurrenceUsage, newIndex: number) {
        this._ownedOccurrence.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedItem: RequiredMultiContainmentValueManager<ItemUsage>;
    get ownedItem(): ItemUsage[] {
        return this._ownedItem.get();
    }
    addOwnedItem(newValue: ItemUsage) {
        this._ownedItem.add(newValue);
    }
    removeOwnedItem(valueToRemove: ItemUsage) {
        this._ownedItem.remove(valueToRemove);
    }
    addOwnedItemAtIndex(newValue: ItemUsage, index: number) {
        this._ownedItem.insertAtIndex(newValue, index);
    }
    moveOwnedItem(oldIndex: number, newIndex: number) {
        this._ownedItem.move(oldIndex, newIndex);
    }
    replaceOwnedItemAtIndex(movedChild: ItemUsage, newIndex: number) {
        this._ownedItem.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedPart: RequiredMultiContainmentValueManager<PartUsage>;
    get ownedPart(): PartUsage[] {
        return this._ownedPart.get();
    }
    addOwnedPart(newValue: PartUsage) {
        this._ownedPart.add(newValue);
    }
    removeOwnedPart(valueToRemove: PartUsage) {
        this._ownedPart.remove(valueToRemove);
    }
    addOwnedPartAtIndex(newValue: PartUsage, index: number) {
        this._ownedPart.insertAtIndex(newValue, index);
    }
    moveOwnedPart(oldIndex: number, newIndex: number) {
        this._ownedPart.move(oldIndex, newIndex);
    }
    replaceOwnedPartAtIndex(movedChild: PartUsage, newIndex: number) {
        this._ownedPart.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedPort: RequiredMultiContainmentValueManager<PortUsage>;
    get ownedPort(): PortUsage[] {
        return this._ownedPort.get();
    }
    addOwnedPort(newValue: PortUsage) {
        this._ownedPort.add(newValue);
    }
    removeOwnedPort(valueToRemove: PortUsage) {
        this._ownedPort.remove(valueToRemove);
    }
    addOwnedPortAtIndex(newValue: PortUsage, index: number) {
        this._ownedPort.insertAtIndex(newValue, index);
    }
    moveOwnedPort(oldIndex: number, newIndex: number) {
        this._ownedPort.move(oldIndex, newIndex);
    }
    replaceOwnedPortAtIndex(movedChild: PortUsage, newIndex: number) {
        this._ownedPort.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedConnection: RequiredMultiContainmentValueManager<ConnectorAsUsage>;
    get ownedConnection(): ConnectorAsUsage[] {
        return this._ownedConnection.get();
    }
    addOwnedConnection(newValue: ConnectorAsUsage) {
        this._ownedConnection.add(newValue);
    }
    removeOwnedConnection(valueToRemove: ConnectorAsUsage) {
        this._ownedConnection.remove(valueToRemove);
    }
    addOwnedConnectionAtIndex(newValue: ConnectorAsUsage, index: number) {
        this._ownedConnection.insertAtIndex(newValue, index);
    }
    moveOwnedConnection(oldIndex: number, newIndex: number) {
        this._ownedConnection.move(oldIndex, newIndex);
    }
    replaceOwnedConnectionAtIndex(movedChild: ConnectorAsUsage, newIndex: number) {
        this._ownedConnection.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedFlow: RequiredMultiContainmentValueManager<FlowUsage>;
    get ownedFlow(): FlowUsage[] {
        return this._ownedFlow.get();
    }
    addOwnedFlow(newValue: FlowUsage) {
        this._ownedFlow.add(newValue);
    }
    removeOwnedFlow(valueToRemove: FlowUsage) {
        this._ownedFlow.remove(valueToRemove);
    }
    addOwnedFlowAtIndex(newValue: FlowUsage, index: number) {
        this._ownedFlow.insertAtIndex(newValue, index);
    }
    moveOwnedFlow(oldIndex: number, newIndex: number) {
        this._ownedFlow.move(oldIndex, newIndex);
    }
    replaceOwnedFlowAtIndex(movedChild: FlowUsage, newIndex: number) {
        this._ownedFlow.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedInterface: RequiredMultiContainmentValueManager<InterfaceUsage>;
    get ownedInterface(): InterfaceUsage[] {
        return this._ownedInterface.get();
    }
    addOwnedInterface(newValue: InterfaceUsage) {
        this._ownedInterface.add(newValue);
    }
    removeOwnedInterface(valueToRemove: InterfaceUsage) {
        this._ownedInterface.remove(valueToRemove);
    }
    addOwnedInterfaceAtIndex(newValue: InterfaceUsage, index: number) {
        this._ownedInterface.insertAtIndex(newValue, index);
    }
    moveOwnedInterface(oldIndex: number, newIndex: number) {
        this._ownedInterface.move(oldIndex, newIndex);
    }
    replaceOwnedInterfaceAtIndex(movedChild: InterfaceUsage, newIndex: number) {
        this._ownedInterface.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedAllocation: RequiredMultiContainmentValueManager<AllocationUsage>;
    get ownedAllocation(): AllocationUsage[] {
        return this._ownedAllocation.get();
    }
    addOwnedAllocation(newValue: AllocationUsage) {
        this._ownedAllocation.add(newValue);
    }
    removeOwnedAllocation(valueToRemove: AllocationUsage) {
        this._ownedAllocation.remove(valueToRemove);
    }
    addOwnedAllocationAtIndex(newValue: AllocationUsage, index: number) {
        this._ownedAllocation.insertAtIndex(newValue, index);
    }
    moveOwnedAllocation(oldIndex: number, newIndex: number) {
        this._ownedAllocation.move(oldIndex, newIndex);
    }
    replaceOwnedAllocationAtIndex(movedChild: AllocationUsage, newIndex: number) {
        this._ownedAllocation.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedAction: RequiredMultiContainmentValueManager<ActionUsage>;
    get ownedAction(): ActionUsage[] {
        return this._ownedAction.get();
    }
    addOwnedAction(newValue: ActionUsage) {
        this._ownedAction.add(newValue);
    }
    removeOwnedAction(valueToRemove: ActionUsage) {
        this._ownedAction.remove(valueToRemove);
    }
    addOwnedActionAtIndex(newValue: ActionUsage, index: number) {
        this._ownedAction.insertAtIndex(newValue, index);
    }
    moveOwnedAction(oldIndex: number, newIndex: number) {
        this._ownedAction.move(oldIndex, newIndex);
    }
    replaceOwnedActionAtIndex(movedChild: ActionUsage, newIndex: number) {
        this._ownedAction.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedState: RequiredMultiContainmentValueManager<StateUsage>;
    get ownedState(): StateUsage[] {
        return this._ownedState.get();
    }
    addOwnedState(newValue: StateUsage) {
        this._ownedState.add(newValue);
    }
    removeOwnedState(valueToRemove: StateUsage) {
        this._ownedState.remove(valueToRemove);
    }
    addOwnedStateAtIndex(newValue: StateUsage, index: number) {
        this._ownedState.insertAtIndex(newValue, index);
    }
    moveOwnedState(oldIndex: number, newIndex: number) {
        this._ownedState.move(oldIndex, newIndex);
    }
    replaceOwnedStateAtIndex(movedChild: StateUsage, newIndex: number) {
        this._ownedState.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedTransition: RequiredMultiContainmentValueManager<TransitionUsage>;
    get ownedTransition(): TransitionUsage[] {
        return this._ownedTransition.get();
    }
    addOwnedTransition(newValue: TransitionUsage) {
        this._ownedTransition.add(newValue);
    }
    removeOwnedTransition(valueToRemove: TransitionUsage) {
        this._ownedTransition.remove(valueToRemove);
    }
    addOwnedTransitionAtIndex(newValue: TransitionUsage, index: number) {
        this._ownedTransition.insertAtIndex(newValue, index);
    }
    moveOwnedTransition(oldIndex: number, newIndex: number) {
        this._ownedTransition.move(oldIndex, newIndex);
    }
    replaceOwnedTransitionAtIndex(movedChild: TransitionUsage, newIndex: number) {
        this._ownedTransition.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedCalculation: RequiredMultiContainmentValueManager<CalculationUsage>;
    get ownedCalculation(): CalculationUsage[] {
        return this._ownedCalculation.get();
    }
    addOwnedCalculation(newValue: CalculationUsage) {
        this._ownedCalculation.add(newValue);
    }
    removeOwnedCalculation(valueToRemove: CalculationUsage) {
        this._ownedCalculation.remove(valueToRemove);
    }
    addOwnedCalculationAtIndex(newValue: CalculationUsage, index: number) {
        this._ownedCalculation.insertAtIndex(newValue, index);
    }
    moveOwnedCalculation(oldIndex: number, newIndex: number) {
        this._ownedCalculation.move(oldIndex, newIndex);
    }
    replaceOwnedCalculationAtIndex(movedChild: CalculationUsage, newIndex: number) {
        this._ownedCalculation.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedConstraint: RequiredMultiContainmentValueManager<ConstraintUsage>;
    get ownedConstraint(): ConstraintUsage[] {
        return this._ownedConstraint.get();
    }
    addOwnedConstraint(newValue: ConstraintUsage) {
        this._ownedConstraint.add(newValue);
    }
    removeOwnedConstraint(valueToRemove: ConstraintUsage) {
        this._ownedConstraint.remove(valueToRemove);
    }
    addOwnedConstraintAtIndex(newValue: ConstraintUsage, index: number) {
        this._ownedConstraint.insertAtIndex(newValue, index);
    }
    moveOwnedConstraint(oldIndex: number, newIndex: number) {
        this._ownedConstraint.move(oldIndex, newIndex);
    }
    replaceOwnedConstraintAtIndex(movedChild: ConstraintUsage, newIndex: number) {
        this._ownedConstraint.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedRequirement: RequiredMultiContainmentValueManager<RequirementUsage>;
    get ownedRequirement(): RequirementUsage[] {
        return this._ownedRequirement.get();
    }
    addOwnedRequirement(newValue: RequirementUsage) {
        this._ownedRequirement.add(newValue);
    }
    removeOwnedRequirement(valueToRemove: RequirementUsage) {
        this._ownedRequirement.remove(valueToRemove);
    }
    addOwnedRequirementAtIndex(newValue: RequirementUsage, index: number) {
        this._ownedRequirement.insertAtIndex(newValue, index);
    }
    moveOwnedRequirement(oldIndex: number, newIndex: number) {
        this._ownedRequirement.move(oldIndex, newIndex);
    }
    replaceOwnedRequirementAtIndex(movedChild: RequirementUsage, newIndex: number) {
        this._ownedRequirement.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedConcern: RequiredMultiContainmentValueManager<ConcernUsage>;
    get ownedConcern(): ConcernUsage[] {
        return this._ownedConcern.get();
    }
    addOwnedConcern(newValue: ConcernUsage) {
        this._ownedConcern.add(newValue);
    }
    removeOwnedConcern(valueToRemove: ConcernUsage) {
        this._ownedConcern.remove(valueToRemove);
    }
    addOwnedConcernAtIndex(newValue: ConcernUsage, index: number) {
        this._ownedConcern.insertAtIndex(newValue, index);
    }
    moveOwnedConcern(oldIndex: number, newIndex: number) {
        this._ownedConcern.move(oldIndex, newIndex);
    }
    replaceOwnedConcernAtIndex(movedChild: ConcernUsage, newIndex: number) {
        this._ownedConcern.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedCase: RequiredMultiContainmentValueManager<CaseUsage>;
    get ownedCase(): CaseUsage[] {
        return this._ownedCase.get();
    }
    addOwnedCase(newValue: CaseUsage) {
        this._ownedCase.add(newValue);
    }
    removeOwnedCase(valueToRemove: CaseUsage) {
        this._ownedCase.remove(valueToRemove);
    }
    addOwnedCaseAtIndex(newValue: CaseUsage, index: number) {
        this._ownedCase.insertAtIndex(newValue, index);
    }
    moveOwnedCase(oldIndex: number, newIndex: number) {
        this._ownedCase.move(oldIndex, newIndex);
    }
    replaceOwnedCaseAtIndex(movedChild: CaseUsage, newIndex: number) {
        this._ownedCase.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedAnalysisCase: RequiredMultiContainmentValueManager<AnalysisCaseUsage>;
    get ownedAnalysisCase(): AnalysisCaseUsage[] {
        return this._ownedAnalysisCase.get();
    }
    addOwnedAnalysisCase(newValue: AnalysisCaseUsage) {
        this._ownedAnalysisCase.add(newValue);
    }
    removeOwnedAnalysisCase(valueToRemove: AnalysisCaseUsage) {
        this._ownedAnalysisCase.remove(valueToRemove);
    }
    addOwnedAnalysisCaseAtIndex(newValue: AnalysisCaseUsage, index: number) {
        this._ownedAnalysisCase.insertAtIndex(newValue, index);
    }
    moveOwnedAnalysisCase(oldIndex: number, newIndex: number) {
        this._ownedAnalysisCase.move(oldIndex, newIndex);
    }
    replaceOwnedAnalysisCaseAtIndex(movedChild: AnalysisCaseUsage, newIndex: number) {
        this._ownedAnalysisCase.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedVerificationCase: RequiredMultiContainmentValueManager<VerificationCaseUsage>;
    get ownedVerificationCase(): VerificationCaseUsage[] {
        return this._ownedVerificationCase.get();
    }
    addOwnedVerificationCase(newValue: VerificationCaseUsage) {
        this._ownedVerificationCase.add(newValue);
    }
    removeOwnedVerificationCase(valueToRemove: VerificationCaseUsage) {
        this._ownedVerificationCase.remove(valueToRemove);
    }
    addOwnedVerificationCaseAtIndex(newValue: VerificationCaseUsage, index: number) {
        this._ownedVerificationCase.insertAtIndex(newValue, index);
    }
    moveOwnedVerificationCase(oldIndex: number, newIndex: number) {
        this._ownedVerificationCase.move(oldIndex, newIndex);
    }
    replaceOwnedVerificationCaseAtIndex(movedChild: VerificationCaseUsage, newIndex: number) {
        this._ownedVerificationCase.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedUseCase: RequiredMultiContainmentValueManager<UseCaseUsage>;
    get ownedUseCase(): UseCaseUsage[] {
        return this._ownedUseCase.get();
    }
    addOwnedUseCase(newValue: UseCaseUsage) {
        this._ownedUseCase.add(newValue);
    }
    removeOwnedUseCase(valueToRemove: UseCaseUsage) {
        this._ownedUseCase.remove(valueToRemove);
    }
    addOwnedUseCaseAtIndex(newValue: UseCaseUsage, index: number) {
        this._ownedUseCase.insertAtIndex(newValue, index);
    }
    moveOwnedUseCase(oldIndex: number, newIndex: number) {
        this._ownedUseCase.move(oldIndex, newIndex);
    }
    replaceOwnedUseCaseAtIndex(movedChild: UseCaseUsage, newIndex: number) {
        this._ownedUseCase.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedView: RequiredMultiContainmentValueManager<ViewUsage>;
    get ownedView(): ViewUsage[] {
        return this._ownedView.get();
    }
    addOwnedView(newValue: ViewUsage) {
        this._ownedView.add(newValue);
    }
    removeOwnedView(valueToRemove: ViewUsage) {
        this._ownedView.remove(valueToRemove);
    }
    addOwnedViewAtIndex(newValue: ViewUsage, index: number) {
        this._ownedView.insertAtIndex(newValue, index);
    }
    moveOwnedView(oldIndex: number, newIndex: number) {
        this._ownedView.move(oldIndex, newIndex);
    }
    replaceOwnedViewAtIndex(movedChild: ViewUsage, newIndex: number) {
        this._ownedView.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedViewpoint: RequiredMultiContainmentValueManager<ViewpointUsage>;
    get ownedViewpoint(): ViewpointUsage[] {
        return this._ownedViewpoint.get();
    }
    addOwnedViewpoint(newValue: ViewpointUsage) {
        this._ownedViewpoint.add(newValue);
    }
    removeOwnedViewpoint(valueToRemove: ViewpointUsage) {
        this._ownedViewpoint.remove(valueToRemove);
    }
    addOwnedViewpointAtIndex(newValue: ViewpointUsage, index: number) {
        this._ownedViewpoint.insertAtIndex(newValue, index);
    }
    moveOwnedViewpoint(oldIndex: number, newIndex: number) {
        this._ownedViewpoint.move(oldIndex, newIndex);
    }
    replaceOwnedViewpointAtIndex(movedChild: ViewpointUsage, newIndex: number) {
        this._ownedViewpoint.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedRendering: RequiredMultiContainmentValueManager<RenderingUsage>;
    get ownedRendering(): RenderingUsage[] {
        return this._ownedRendering.get();
    }
    addOwnedRendering(newValue: RenderingUsage) {
        this._ownedRendering.add(newValue);
    }
    removeOwnedRendering(valueToRemove: RenderingUsage) {
        this._ownedRendering.remove(valueToRemove);
    }
    addOwnedRenderingAtIndex(newValue: RenderingUsage, index: number) {
        this._ownedRendering.insertAtIndex(newValue, index);
    }
    moveOwnedRendering(oldIndex: number, newIndex: number) {
        this._ownedRendering.move(oldIndex, newIndex);
    }
    replaceOwnedRenderingAtIndex(movedChild: RenderingUsage, newIndex: number) {
        this._ownedRendering.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedMetadata: RequiredMultiContainmentValueManager<MetadataUsage>;
    get ownedMetadata(): MetadataUsage[] {
        return this._ownedMetadata.get();
    }
    addOwnedMetadata(newValue: MetadataUsage) {
        this._ownedMetadata.add(newValue);
    }
    removeOwnedMetadata(valueToRemove: MetadataUsage) {
        this._ownedMetadata.remove(valueToRemove);
    }
    addOwnedMetadataAtIndex(newValue: MetadataUsage, index: number) {
        this._ownedMetadata.insertAtIndex(newValue, index);
    }
    moveOwnedMetadata(oldIndex: number, newIndex: number) {
        this._ownedMetadata.move(oldIndex, newIndex);
    }
    replaceOwnedMetadataAtIndex(movedChild: MetadataUsage, newIndex: number) {
        this._ownedMetadata.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ownedUsage: RequiredMultiContainmentValueManager<Usage>;
    get ownedUsage(): Usage[] {
        return this._ownedUsage.get();
    }
    addOwnedUsage(newValue: Usage) {
        this._ownedUsage.add(newValue);
    }
    removeOwnedUsage(valueToRemove: Usage) {
        this._ownedUsage.remove(valueToRemove);
    }
    addOwnedUsageAtIndex(newValue: Usage, index: number) {
        this._ownedUsage.insertAtIndex(newValue, index);
    }
    moveOwnedUsage(oldIndex: number, newIndex: number) {
        this._ownedUsage.move(oldIndex, newIndex);
    }
    replaceOwnedUsageAtIndex(movedChild: Usage, newIndex: number) {
        this._ownedUsage.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._isVariation = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.Definition_isVariation, this);
        this._variant = new RequiredMultiContainmentValueManager<Usage>(sysmlBase.INSTANCE.Definition_variant, this);
        this._variantMembership = new RequiredMultiContainmentValueManager<VariantMembership>(sysmlBase.INSTANCE.Definition_variantMembership, this);
        this._usage = new RequiredMultiContainmentValueManager<Usage>(sysmlBase.INSTANCE.Definition_usage, this);
        this._directedUsage = new RequiredMultiContainmentValueManager<Usage>(sysmlBase.INSTANCE.Definition_directedUsage, this);
        this._ownedReference = new RequiredMultiContainmentValueManager<ReferenceUsage>(sysmlBase.INSTANCE.Definition_ownedReference, this);
        this._ownedAttribute = new RequiredMultiContainmentValueManager<AttributeUsage>(sysmlBase.INSTANCE.Definition_ownedAttribute, this);
        this._ownedEnumeration = new RequiredMultiContainmentValueManager<EnumerationUsage>(sysmlBase.INSTANCE.Definition_ownedEnumeration, this);
        this._ownedOccurrence = new RequiredMultiContainmentValueManager<OccurrenceUsage>(sysmlBase.INSTANCE.Definition_ownedOccurrence, this);
        this._ownedItem = new RequiredMultiContainmentValueManager<ItemUsage>(sysmlBase.INSTANCE.Definition_ownedItem, this);
        this._ownedPart = new RequiredMultiContainmentValueManager<PartUsage>(sysmlBase.INSTANCE.Definition_ownedPart, this);
        this._ownedPort = new RequiredMultiContainmentValueManager<PortUsage>(sysmlBase.INSTANCE.Definition_ownedPort, this);
        this._ownedConnection = new RequiredMultiContainmentValueManager<ConnectorAsUsage>(sysmlBase.INSTANCE.Definition_ownedConnection, this);
        this._ownedFlow = new RequiredMultiContainmentValueManager<FlowUsage>(sysmlBase.INSTANCE.Definition_ownedFlow, this);
        this._ownedInterface = new RequiredMultiContainmentValueManager<InterfaceUsage>(sysmlBase.INSTANCE.Definition_ownedInterface, this);
        this._ownedAllocation = new RequiredMultiContainmentValueManager<AllocationUsage>(sysmlBase.INSTANCE.Definition_ownedAllocation, this);
        this._ownedAction = new RequiredMultiContainmentValueManager<ActionUsage>(sysmlBase.INSTANCE.Definition_ownedAction, this);
        this._ownedState = new RequiredMultiContainmentValueManager<StateUsage>(sysmlBase.INSTANCE.Definition_ownedState, this);
        this._ownedTransition = new RequiredMultiContainmentValueManager<TransitionUsage>(sysmlBase.INSTANCE.Definition_ownedTransition, this);
        this._ownedCalculation = new RequiredMultiContainmentValueManager<CalculationUsage>(sysmlBase.INSTANCE.Definition_ownedCalculation, this);
        this._ownedConstraint = new RequiredMultiContainmentValueManager<ConstraintUsage>(sysmlBase.INSTANCE.Definition_ownedConstraint, this);
        this._ownedRequirement = new RequiredMultiContainmentValueManager<RequirementUsage>(sysmlBase.INSTANCE.Definition_ownedRequirement, this);
        this._ownedConcern = new RequiredMultiContainmentValueManager<ConcernUsage>(sysmlBase.INSTANCE.Definition_ownedConcern, this);
        this._ownedCase = new RequiredMultiContainmentValueManager<CaseUsage>(sysmlBase.INSTANCE.Definition_ownedCase, this);
        this._ownedAnalysisCase = new RequiredMultiContainmentValueManager<AnalysisCaseUsage>(sysmlBase.INSTANCE.Definition_ownedAnalysisCase, this);
        this._ownedVerificationCase = new RequiredMultiContainmentValueManager<VerificationCaseUsage>(sysmlBase.INSTANCE.Definition_ownedVerificationCase, this);
        this._ownedUseCase = new RequiredMultiContainmentValueManager<UseCaseUsage>(sysmlBase.INSTANCE.Definition_ownedUseCase, this);
        this._ownedView = new RequiredMultiContainmentValueManager<ViewUsage>(sysmlBase.INSTANCE.Definition_ownedView, this);
        this._ownedViewpoint = new RequiredMultiContainmentValueManager<ViewpointUsage>(sysmlBase.INSTANCE.Definition_ownedViewpoint, this);
        this._ownedRendering = new RequiredMultiContainmentValueManager<RenderingUsage>(sysmlBase.INSTANCE.Definition_ownedRendering, this);
        this._ownedMetadata = new RequiredMultiContainmentValueManager<MetadataUsage>(sysmlBase.INSTANCE.Definition_ownedMetadata, this);
        this._ownedUsage = new RequiredMultiContainmentValueManager<Usage>(sysmlBase.INSTANCE.Definition_ownedUsage, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === sysmlBase.INSTANCE.Definition_isVariation.key) {
            return this._isVariation;
        }
        return super.getPropertyValueManager(property);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Definition_variant.key: return this._variant;
            case sysmlBase.INSTANCE.Definition_variantMembership.key: return this._variantMembership;
            case sysmlBase.INSTANCE.Definition_usage.key: return this._usage;
            case sysmlBase.INSTANCE.Definition_directedUsage.key: return this._directedUsage;
            case sysmlBase.INSTANCE.Definition_ownedReference.key: return this._ownedReference;
            case sysmlBase.INSTANCE.Definition_ownedAttribute.key: return this._ownedAttribute;
            case sysmlBase.INSTANCE.Definition_ownedEnumeration.key: return this._ownedEnumeration;
            case sysmlBase.INSTANCE.Definition_ownedOccurrence.key: return this._ownedOccurrence;
            case sysmlBase.INSTANCE.Definition_ownedItem.key: return this._ownedItem;
            case sysmlBase.INSTANCE.Definition_ownedPart.key: return this._ownedPart;
            case sysmlBase.INSTANCE.Definition_ownedPort.key: return this._ownedPort;
            case sysmlBase.INSTANCE.Definition_ownedConnection.key: return this._ownedConnection;
            case sysmlBase.INSTANCE.Definition_ownedFlow.key: return this._ownedFlow;
            case sysmlBase.INSTANCE.Definition_ownedInterface.key: return this._ownedInterface;
            case sysmlBase.INSTANCE.Definition_ownedAllocation.key: return this._ownedAllocation;
            case sysmlBase.INSTANCE.Definition_ownedAction.key: return this._ownedAction;
            case sysmlBase.INSTANCE.Definition_ownedState.key: return this._ownedState;
            case sysmlBase.INSTANCE.Definition_ownedTransition.key: return this._ownedTransition;
            case sysmlBase.INSTANCE.Definition_ownedCalculation.key: return this._ownedCalculation;
            case sysmlBase.INSTANCE.Definition_ownedConstraint.key: return this._ownedConstraint;
            case sysmlBase.INSTANCE.Definition_ownedRequirement.key: return this._ownedRequirement;
            case sysmlBase.INSTANCE.Definition_ownedConcern.key: return this._ownedConcern;
            case sysmlBase.INSTANCE.Definition_ownedCase.key: return this._ownedCase;
            case sysmlBase.INSTANCE.Definition_ownedAnalysisCase.key: return this._ownedAnalysisCase;
            case sysmlBase.INSTANCE.Definition_ownedVerificationCase.key: return this._ownedVerificationCase;
            case sysmlBase.INSTANCE.Definition_ownedUseCase.key: return this._ownedUseCase;
            case sysmlBase.INSTANCE.Definition_ownedView.key: return this._ownedView;
            case sysmlBase.INSTANCE.Definition_ownedViewpoint.key: return this._ownedViewpoint;
            case sysmlBase.INSTANCE.Definition_ownedRendering.key: return this._ownedRendering;
            case sysmlBase.INSTANCE.Definition_ownedMetadata.key: return this._ownedMetadata;
            case sysmlBase.INSTANCE.Definition_ownedUsage.key: return this._ownedUsage;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class OccurrenceDefinition extends Definition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): OccurrenceDefinition {
        return new OccurrenceDefinition(sysmlBase.INSTANCE.OccurrenceDefinition, id, receiveDelta, parentInfo);
    }

    private readonly _isIndividual: RequiredPropertyValueManager<boolean>;
    get isIndividual(): boolean {
        return this._isIndividual.get();
    }
    set isIndividual(newValue: boolean) {
        this._isIndividual.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._isIndividual = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.OccurrenceDefinition_isIndividual, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === sysmlBase.INSTANCE.OccurrenceDefinition_isIndividual.key) {
            return this._isIndividual;
        }
        return super.getPropertyValueManager(property);
    }
}

export class ActionDefinition extends OccurrenceDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ActionDefinition {
        return new ActionDefinition(sysmlBase.INSTANCE.ActionDefinition, id, receiveDelta, parentInfo);
    }

    private readonly _action: RequiredMultiContainmentValueManager<ActionUsage>;
    get action(): ActionUsage[] {
        return this._action.get();
    }
    addAction(newValue: ActionUsage) {
        this._action.add(newValue);
    }
    removeAction(valueToRemove: ActionUsage) {
        this._action.remove(valueToRemove);
    }
    addActionAtIndex(newValue: ActionUsage, index: number) {
        this._action.insertAtIndex(newValue, index);
    }
    moveAction(oldIndex: number, newIndex: number) {
        this._action.move(oldIndex, newIndex);
    }
    replaceActionAtIndex(movedChild: ActionUsage, newIndex: number) {
        this._action.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._action = new RequiredMultiContainmentValueManager<ActionUsage>(sysmlBase.INSTANCE.ActionDefinition_action, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.ActionDefinition_action.key) {
            return this._action;
        }
        return super.getContainmentValueManager(containment);
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

    private readonly _isImplied: RequiredPropertyValueManager<boolean>;
    get isImplied(): boolean {
        return this._isImplied.get();
    }
    set isImplied(newValue: boolean) {
        this._isImplied.set(newValue);
    }

    protected constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._relatedElement = new RequiredMultiContainmentValueManager<Element>(sysmlBase.INSTANCE.Relationship_relatedElement, this);
        this._target = new RequiredMultiContainmentValueManager<Element>(sysmlBase.INSTANCE.Relationship_target, this);
        this._source = new RequiredMultiContainmentValueManager<Element>(sysmlBase.INSTANCE.Relationship_source, this);
        this._owningRelatedElement = new RequiredMultiContainmentValueManager<Element>(sysmlBase.INSTANCE.Relationship_owningRelatedElement, this);
        this._ownedRelatedElement = new RequiredMultiContainmentValueManager<Element>(sysmlBase.INSTANCE.Relationship_ownedRelatedElement, this);
        this._isImplied = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.Relationship_isImplied, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === sysmlBase.INSTANCE.Relationship_isImplied.key) {
            return this._isImplied;
        }
        return super.getPropertyValueManager(property);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Relationship_relatedElement.key: return this._relatedElement;
            case sysmlBase.INSTANCE.Relationship_target.key: return this._target;
            case sysmlBase.INSTANCE.Relationship_source.key: return this._source;
            case sysmlBase.INSTANCE.Relationship_owningRelatedElement.key: return this._owningRelatedElement;
            case sysmlBase.INSTANCE.Relationship_ownedRelatedElement.key: return this._ownedRelatedElement;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Membership extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Membership {
        return new Membership(sysmlBase.INSTANCE.Membership, id, receiveDelta, parentInfo);
    }

    private readonly _memberElementId: RequiredPropertyValueManager<string>;
    get memberElementId(): string {
        return this._memberElementId.get();
    }
    set memberElementId(newValue: string) {
        this._memberElementId.set(newValue);
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
        this._memberElementId = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.Membership_memberElementId, this);
        this._membershipOwningNamespace = new RequiredMultiContainmentValueManager<Namespace>(sysmlBase.INSTANCE.Membership_membershipOwningNamespace, this);
        this._memberShortName = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.Membership_memberShortName, this);
        this._memberElement = new RequiredMultiContainmentValueManager<Element>(sysmlBase.INSTANCE.Membership_memberElement, this);
        this._memberName = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.Membership_memberName, this);
        this._visibility = new RequiredPropertyValueManager<VisibilityKind>(sysmlBase.INSTANCE.Membership_visibility, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case sysmlBase.INSTANCE.Membership_memberElementId.key: return this._memberElementId;
            case sysmlBase.INSTANCE.Membership_memberShortName.key: return this._memberShortName;
            case sysmlBase.INSTANCE.Membership_memberName.key: return this._memberName;
            case sysmlBase.INSTANCE.Membership_visibility.key: return this._visibility;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Membership_membershipOwningNamespace.key: return this._membershipOwningNamespace;
            case sysmlBase.INSTANCE.Membership_memberElement.key: return this._memberElement;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class OwningMembership extends Membership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): OwningMembership {
        return new OwningMembership(sysmlBase.INSTANCE.OwningMembership, id, receiveDelta, parentInfo);
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
        this._ownedMemberElementId = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.OwningMembership_ownedMemberElementId, this);
        this._ownedMemberShortName = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.OwningMembership_ownedMemberShortName, this);
        this._ownedMemberName = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.OwningMembership_ownedMemberName, this);
        this._ownedMemberElement = new RequiredMultiContainmentValueManager<Element>(sysmlBase.INSTANCE.OwningMembership_ownedMemberElement, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case sysmlBase.INSTANCE.OwningMembership_ownedMemberElementId.key: return this._ownedMemberElementId;
            case sysmlBase.INSTANCE.OwningMembership_ownedMemberShortName.key: return this._ownedMemberShortName;
            case sysmlBase.INSTANCE.OwningMembership_ownedMemberName.key: return this._ownedMemberName;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.OwningMembership_ownedMemberElement.key) {
            return this._ownedMemberElement;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class FeatureMembership extends OwningMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureMembership {
        return new FeatureMembership(sysmlBase.INSTANCE.FeatureMembership, id, receiveDelta, parentInfo);
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
        this._ownedMemberFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.FeatureMembership_ownedMemberFeature, this);
        this._owningType = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.FeatureMembership_owningType, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.FeatureMembership_ownedMemberFeature.key: return this._ownedMemberFeature;
            case sysmlBase.INSTANCE.FeatureMembership_owningType.key: return this._owningType;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class ParameterMembership extends FeatureMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ParameterMembership {
        return new ParameterMembership(sysmlBase.INSTANCE.ParameterMembership, id, receiveDelta, parentInfo);
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
        this._ownedMemberParameter = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.ParameterMembership_ownedMemberParameter, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.ParameterMembership_ownedMemberParameter.key) {
            return this._ownedMemberParameter;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class ActorMembership extends ParameterMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ActorMembership {
        return new ActorMembership(sysmlBase.INSTANCE.ActorMembership, id, receiveDelta, parentInfo);
    }

    private readonly _ownedActorParameter: RequiredMultiContainmentValueManager<PartUsage>;
    get ownedActorParameter(): PartUsage[] {
        return this._ownedActorParameter.get();
    }
    addOwnedActorParameter(newValue: PartUsage) {
        this._ownedActorParameter.add(newValue);
    }
    removeOwnedActorParameter(valueToRemove: PartUsage) {
        this._ownedActorParameter.remove(valueToRemove);
    }
    addOwnedActorParameterAtIndex(newValue: PartUsage, index: number) {
        this._ownedActorParameter.insertAtIndex(newValue, index);
    }
    moveOwnedActorParameter(oldIndex: number, newIndex: number) {
        this._ownedActorParameter.move(oldIndex, newIndex);
    }
    replaceOwnedActorParameterAtIndex(movedChild: PartUsage, newIndex: number) {
        this._ownedActorParameter.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._ownedActorParameter = new RequiredMultiContainmentValueManager<PartUsage>(sysmlBase.INSTANCE.ActorMembership_ownedActorParameter, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.ActorMembership_ownedActorParameter.key) {
            return this._ownedActorParameter;
        }
        return super.getContainmentValueManager(containment);
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

    private readonly _connectionEnd: RequiredMultiContainmentValueManager<Usage>;
    get connectionEnd(): Usage[] {
        return this._connectionEnd.get();
    }
    addConnectionEnd(newValue: Usage) {
        this._connectionEnd.add(newValue);
    }
    removeConnectionEnd(valueToRemove: Usage) {
        this._connectionEnd.remove(valueToRemove);
    }
    addConnectionEndAtIndex(newValue: Usage, index: number) {
        this._connectionEnd.insertAtIndex(newValue, index);
    }
    moveConnectionEnd(oldIndex: number, newIndex: number) {
        this._connectionEnd.move(oldIndex, newIndex);
    }
    replaceConnectionEndAtIndex(movedChild: Usage, newIndex: number) {
        this._connectionEnd.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._connectionEnd = new RequiredMultiContainmentValueManager<Usage>(sysmlBase.INSTANCE.ConnectionDefinition_connectionEnd, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.ConnectionDefinition_connectionEnd.key) {
            return this._connectionEnd;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class AllocationDefinition extends ConnectionDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): AllocationDefinition {
        return new AllocationDefinition(sysmlBase.INSTANCE.AllocationDefinition, id, receiveDelta, parentInfo);
    }

    private readonly _allocation: RequiredMultiContainmentValueManager<AllocationUsage>;
    get allocation(): AllocationUsage[] {
        return this._allocation.get();
    }
    addAllocation(newValue: AllocationUsage) {
        this._allocation.add(newValue);
    }
    removeAllocation(valueToRemove: AllocationUsage) {
        this._allocation.remove(valueToRemove);
    }
    addAllocationAtIndex(newValue: AllocationUsage, index: number) {
        this._allocation.insertAtIndex(newValue, index);
    }
    moveAllocation(oldIndex: number, newIndex: number) {
        this._allocation.move(oldIndex, newIndex);
    }
    replaceAllocationAtIndex(movedChild: AllocationUsage, newIndex: number) {
        this._allocation.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._allocation = new RequiredMultiContainmentValueManager<AllocationUsage>(sysmlBase.INSTANCE.AllocationDefinition_allocation, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.AllocationDefinition_allocation.key) {
            return this._allocation;
        }
        return super.getContainmentValueManager(containment);
    }
}

export abstract class ConnectorAsUsage extends Usage {
}

export class ConnectionUsage extends ConnectorAsUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ConnectionUsage {
        return new ConnectionUsage(sysmlBase.INSTANCE.ConnectionUsage, id, receiveDelta, parentInfo);
    }

    private readonly _connectionDefinition: RequiredMultiContainmentValueManager<AssociationStructure>;
    get connectionDefinition(): AssociationStructure[] {
        return this._connectionDefinition.get();
    }
    addConnectionDefinition(newValue: AssociationStructure) {
        this._connectionDefinition.add(newValue);
    }
    removeConnectionDefinition(valueToRemove: AssociationStructure) {
        this._connectionDefinition.remove(valueToRemove);
    }
    addConnectionDefinitionAtIndex(newValue: AssociationStructure, index: number) {
        this._connectionDefinition.insertAtIndex(newValue, index);
    }
    moveConnectionDefinition(oldIndex: number, newIndex: number) {
        this._connectionDefinition.move(oldIndex, newIndex);
    }
    replaceConnectionDefinitionAtIndex(movedChild: AssociationStructure, newIndex: number) {
        this._connectionDefinition.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._connectionDefinition = new RequiredMultiContainmentValueManager<AssociationStructure>(sysmlBase.INSTANCE.ConnectionUsage_connectionDefinition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.ConnectionUsage_connectionDefinition.key) {
            return this._connectionDefinition;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class AllocationUsage extends ConnectionUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): AllocationUsage {
        return new AllocationUsage(sysmlBase.INSTANCE.AllocationUsage, id, receiveDelta, parentInfo);
    }

    private readonly _allocationDefinition: RequiredMultiContainmentValueManager<AllocationDefinition>;
    get allocationDefinition(): AllocationDefinition[] {
        return this._allocationDefinition.get();
    }
    addAllocationDefinition(newValue: AllocationDefinition) {
        this._allocationDefinition.add(newValue);
    }
    removeAllocationDefinition(valueToRemove: AllocationDefinition) {
        this._allocationDefinition.remove(valueToRemove);
    }
    addAllocationDefinitionAtIndex(newValue: AllocationDefinition, index: number) {
        this._allocationDefinition.insertAtIndex(newValue, index);
    }
    moveAllocationDefinition(oldIndex: number, newIndex: number) {
        this._allocationDefinition.move(oldIndex, newIndex);
    }
    replaceAllocationDefinitionAtIndex(movedChild: AllocationDefinition, newIndex: number) {
        this._allocationDefinition.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._allocationDefinition = new RequiredMultiContainmentValueManager<AllocationDefinition>(sysmlBase.INSTANCE.AllocationUsage_allocationDefinition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.AllocationUsage_allocationDefinition.key) {
            return this._allocationDefinition;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class CalculationDefinition extends ActionDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): CalculationDefinition {
        return new CalculationDefinition(sysmlBase.INSTANCE.CalculationDefinition, id, receiveDelta, parentInfo);
    }

    private readonly _calculation: RequiredMultiContainmentValueManager<CalculationUsage>;
    get calculation(): CalculationUsage[] {
        return this._calculation.get();
    }
    addCalculation(newValue: CalculationUsage) {
        this._calculation.add(newValue);
    }
    removeCalculation(valueToRemove: CalculationUsage) {
        this._calculation.remove(valueToRemove);
    }
    addCalculationAtIndex(newValue: CalculationUsage, index: number) {
        this._calculation.insertAtIndex(newValue, index);
    }
    moveCalculation(oldIndex: number, newIndex: number) {
        this._calculation.move(oldIndex, newIndex);
    }
    replaceCalculationAtIndex(movedChild: CalculationUsage, newIndex: number) {
        this._calculation.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._calculation = new RequiredMultiContainmentValueManager<CalculationUsage>(sysmlBase.INSTANCE.CalculationDefinition_calculation, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.CalculationDefinition_calculation.key) {
            return this._calculation;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class CaseDefinition extends CalculationDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): CaseDefinition {
        return new CaseDefinition(sysmlBase.INSTANCE.CaseDefinition, id, receiveDelta, parentInfo);
    }

    private readonly _objectiveRequirement: RequiredMultiContainmentValueManager<RequirementUsage>;
    get objectiveRequirement(): RequirementUsage[] {
        return this._objectiveRequirement.get();
    }
    addObjectiveRequirement(newValue: RequirementUsage) {
        this._objectiveRequirement.add(newValue);
    }
    removeObjectiveRequirement(valueToRemove: RequirementUsage) {
        this._objectiveRequirement.remove(valueToRemove);
    }
    addObjectiveRequirementAtIndex(newValue: RequirementUsage, index: number) {
        this._objectiveRequirement.insertAtIndex(newValue, index);
    }
    moveObjectiveRequirement(oldIndex: number, newIndex: number) {
        this._objectiveRequirement.move(oldIndex, newIndex);
    }
    replaceObjectiveRequirementAtIndex(movedChild: RequirementUsage, newIndex: number) {
        this._objectiveRequirement.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _subjectParameter: RequiredMultiContainmentValueManager<Usage>;
    get subjectParameter(): Usage[] {
        return this._subjectParameter.get();
    }
    addSubjectParameter(newValue: Usage) {
        this._subjectParameter.add(newValue);
    }
    removeSubjectParameter(valueToRemove: Usage) {
        this._subjectParameter.remove(valueToRemove);
    }
    addSubjectParameterAtIndex(newValue: Usage, index: number) {
        this._subjectParameter.insertAtIndex(newValue, index);
    }
    moveSubjectParameter(oldIndex: number, newIndex: number) {
        this._subjectParameter.move(oldIndex, newIndex);
    }
    replaceSubjectParameterAtIndex(movedChild: Usage, newIndex: number) {
        this._subjectParameter.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _actorParameter: RequiredMultiContainmentValueManager<PartUsage>;
    get actorParameter(): PartUsage[] {
        return this._actorParameter.get();
    }
    addActorParameter(newValue: PartUsage) {
        this._actorParameter.add(newValue);
    }
    removeActorParameter(valueToRemove: PartUsage) {
        this._actorParameter.remove(valueToRemove);
    }
    addActorParameterAtIndex(newValue: PartUsage, index: number) {
        this._actorParameter.insertAtIndex(newValue, index);
    }
    moveActorParameter(oldIndex: number, newIndex: number) {
        this._actorParameter.move(oldIndex, newIndex);
    }
    replaceActorParameterAtIndex(movedChild: PartUsage, newIndex: number) {
        this._actorParameter.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._objectiveRequirement = new RequiredMultiContainmentValueManager<RequirementUsage>(sysmlBase.INSTANCE.CaseDefinition_objectiveRequirement, this);
        this._subjectParameter = new RequiredMultiContainmentValueManager<Usage>(sysmlBase.INSTANCE.CaseDefinition_subjectParameter, this);
        this._actorParameter = new RequiredMultiContainmentValueManager<PartUsage>(sysmlBase.INSTANCE.CaseDefinition_actorParameter, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.CaseDefinition_objectiveRequirement.key: return this._objectiveRequirement;
            case sysmlBase.INSTANCE.CaseDefinition_subjectParameter.key: return this._subjectParameter;
            case sysmlBase.INSTANCE.CaseDefinition_actorParameter.key: return this._actorParameter;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class AnalysisCaseDefinition extends CaseDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): AnalysisCaseDefinition {
        return new AnalysisCaseDefinition(sysmlBase.INSTANCE.AnalysisCaseDefinition, id, receiveDelta, parentInfo);
    }

    private readonly _resultExpression: RequiredMultiContainmentValueManager<Expression>;
    get resultExpression(): Expression[] {
        return this._resultExpression.get();
    }
    addResultExpression(newValue: Expression) {
        this._resultExpression.add(newValue);
    }
    removeResultExpression(valueToRemove: Expression) {
        this._resultExpression.remove(valueToRemove);
    }
    addResultExpressionAtIndex(newValue: Expression, index: number) {
        this._resultExpression.insertAtIndex(newValue, index);
    }
    moveResultExpression(oldIndex: number, newIndex: number) {
        this._resultExpression.move(oldIndex, newIndex);
    }
    replaceResultExpressionAtIndex(movedChild: Expression, newIndex: number) {
        this._resultExpression.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._resultExpression = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.AnalysisCaseDefinition_resultExpression, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.AnalysisCaseDefinition_resultExpression.key) {
            return this._resultExpression;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class CalculationUsage extends ActionUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): CalculationUsage {
        return new CalculationUsage(sysmlBase.INSTANCE.CalculationUsage, id, receiveDelta, parentInfo);
    }

    private readonly _calculationDefinition: RequiredMultiContainmentValueManager<Function>;
    get calculationDefinition(): Function[] {
        return this._calculationDefinition.get();
    }
    addCalculationDefinition(newValue: Function) {
        this._calculationDefinition.add(newValue);
    }
    removeCalculationDefinition(valueToRemove: Function) {
        this._calculationDefinition.remove(valueToRemove);
    }
    addCalculationDefinitionAtIndex(newValue: Function, index: number) {
        this._calculationDefinition.insertAtIndex(newValue, index);
    }
    moveCalculationDefinition(oldIndex: number, newIndex: number) {
        this._calculationDefinition.move(oldIndex, newIndex);
    }
    replaceCalculationDefinitionAtIndex(movedChild: Function, newIndex: number) {
        this._calculationDefinition.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._calculationDefinition = new RequiredMultiContainmentValueManager<Function>(sysmlBase.INSTANCE.CalculationUsage_calculationDefinition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.CalculationUsage_calculationDefinition.key) {
            return this._calculationDefinition;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class CaseUsage extends CalculationUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): CaseUsage {
        return new CaseUsage(sysmlBase.INSTANCE.CaseUsage, id, receiveDelta, parentInfo);
    }

    private readonly _objectiveRequirement: RequiredMultiContainmentValueManager<RequirementUsage>;
    get objectiveRequirement(): RequirementUsage[] {
        return this._objectiveRequirement.get();
    }
    addObjectiveRequirement(newValue: RequirementUsage) {
        this._objectiveRequirement.add(newValue);
    }
    removeObjectiveRequirement(valueToRemove: RequirementUsage) {
        this._objectiveRequirement.remove(valueToRemove);
    }
    addObjectiveRequirementAtIndex(newValue: RequirementUsage, index: number) {
        this._objectiveRequirement.insertAtIndex(newValue, index);
    }
    moveObjectiveRequirement(oldIndex: number, newIndex: number) {
        this._objectiveRequirement.move(oldIndex, newIndex);
    }
    replaceObjectiveRequirementAtIndex(movedChild: RequirementUsage, newIndex: number) {
        this._objectiveRequirement.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _caseDefinition: RequiredMultiContainmentValueManager<CaseDefinition>;
    get caseDefinition(): CaseDefinition[] {
        return this._caseDefinition.get();
    }
    addCaseDefinition(newValue: CaseDefinition) {
        this._caseDefinition.add(newValue);
    }
    removeCaseDefinition(valueToRemove: CaseDefinition) {
        this._caseDefinition.remove(valueToRemove);
    }
    addCaseDefinitionAtIndex(newValue: CaseDefinition, index: number) {
        this._caseDefinition.insertAtIndex(newValue, index);
    }
    moveCaseDefinition(oldIndex: number, newIndex: number) {
        this._caseDefinition.move(oldIndex, newIndex);
    }
    replaceCaseDefinitionAtIndex(movedChild: CaseDefinition, newIndex: number) {
        this._caseDefinition.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _subjectParameter: RequiredMultiContainmentValueManager<Usage>;
    get subjectParameter(): Usage[] {
        return this._subjectParameter.get();
    }
    addSubjectParameter(newValue: Usage) {
        this._subjectParameter.add(newValue);
    }
    removeSubjectParameter(valueToRemove: Usage) {
        this._subjectParameter.remove(valueToRemove);
    }
    addSubjectParameterAtIndex(newValue: Usage, index: number) {
        this._subjectParameter.insertAtIndex(newValue, index);
    }
    moveSubjectParameter(oldIndex: number, newIndex: number) {
        this._subjectParameter.move(oldIndex, newIndex);
    }
    replaceSubjectParameterAtIndex(movedChild: Usage, newIndex: number) {
        this._subjectParameter.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _actorParameter: RequiredMultiContainmentValueManager<PartUsage>;
    get actorParameter(): PartUsage[] {
        return this._actorParameter.get();
    }
    addActorParameter(newValue: PartUsage) {
        this._actorParameter.add(newValue);
    }
    removeActorParameter(valueToRemove: PartUsage) {
        this._actorParameter.remove(valueToRemove);
    }
    addActorParameterAtIndex(newValue: PartUsage, index: number) {
        this._actorParameter.insertAtIndex(newValue, index);
    }
    moveActorParameter(oldIndex: number, newIndex: number) {
        this._actorParameter.move(oldIndex, newIndex);
    }
    replaceActorParameterAtIndex(movedChild: PartUsage, newIndex: number) {
        this._actorParameter.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._objectiveRequirement = new RequiredMultiContainmentValueManager<RequirementUsage>(sysmlBase.INSTANCE.CaseUsage_objectiveRequirement, this);
        this._caseDefinition = new RequiredMultiContainmentValueManager<CaseDefinition>(sysmlBase.INSTANCE.CaseUsage_caseDefinition, this);
        this._subjectParameter = new RequiredMultiContainmentValueManager<Usage>(sysmlBase.INSTANCE.CaseUsage_subjectParameter, this);
        this._actorParameter = new RequiredMultiContainmentValueManager<PartUsage>(sysmlBase.INSTANCE.CaseUsage_actorParameter, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.CaseUsage_objectiveRequirement.key: return this._objectiveRequirement;
            case sysmlBase.INSTANCE.CaseUsage_caseDefinition.key: return this._caseDefinition;
            case sysmlBase.INSTANCE.CaseUsage_subjectParameter.key: return this._subjectParameter;
            case sysmlBase.INSTANCE.CaseUsage_actorParameter.key: return this._actorParameter;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class AnalysisCaseUsage extends CaseUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): AnalysisCaseUsage {
        return new AnalysisCaseUsage(sysmlBase.INSTANCE.AnalysisCaseUsage, id, receiveDelta, parentInfo);
    }

    private readonly _analysisCaseDefinition: RequiredMultiContainmentValueManager<AnalysisCaseDefinition>;
    get analysisCaseDefinition(): AnalysisCaseDefinition[] {
        return this._analysisCaseDefinition.get();
    }
    addAnalysisCaseDefinition(newValue: AnalysisCaseDefinition) {
        this._analysisCaseDefinition.add(newValue);
    }
    removeAnalysisCaseDefinition(valueToRemove: AnalysisCaseDefinition) {
        this._analysisCaseDefinition.remove(valueToRemove);
    }
    addAnalysisCaseDefinitionAtIndex(newValue: AnalysisCaseDefinition, index: number) {
        this._analysisCaseDefinition.insertAtIndex(newValue, index);
    }
    moveAnalysisCaseDefinition(oldIndex: number, newIndex: number) {
        this._analysisCaseDefinition.move(oldIndex, newIndex);
    }
    replaceAnalysisCaseDefinitionAtIndex(movedChild: AnalysisCaseDefinition, newIndex: number) {
        this._analysisCaseDefinition.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _resultExpression: RequiredMultiContainmentValueManager<Expression>;
    get resultExpression(): Expression[] {
        return this._resultExpression.get();
    }
    addResultExpression(newValue: Expression) {
        this._resultExpression.add(newValue);
    }
    removeResultExpression(valueToRemove: Expression) {
        this._resultExpression.remove(valueToRemove);
    }
    addResultExpressionAtIndex(newValue: Expression, index: number) {
        this._resultExpression.insertAtIndex(newValue, index);
    }
    moveResultExpression(oldIndex: number, newIndex: number) {
        this._resultExpression.move(oldIndex, newIndex);
    }
    replaceResultExpressionAtIndex(movedChild: Expression, newIndex: number) {
        this._resultExpression.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._analysisCaseDefinition = new RequiredMultiContainmentValueManager<AnalysisCaseDefinition>(sysmlBase.INSTANCE.AnalysisCaseUsage_analysisCaseDefinition, this);
        this._resultExpression = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.AnalysisCaseUsage_resultExpression, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.AnalysisCaseUsage_analysisCaseDefinition.key: return this._analysisCaseDefinition;
            case sysmlBase.INSTANCE.AnalysisCaseUsage_resultExpression.key: return this._resultExpression;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class AnnotatingElement extends Element {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): AnnotatingElement {
        return new AnnotatingElement(sysmlBase.INSTANCE.AnnotatingElement, id, receiveDelta, parentInfo);
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

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._annotatedElement = new RequiredMultiContainmentValueManager<Element>(sysmlBase.INSTANCE.AnnotatingElement_annotatedElement, this);
        this._ownedAnnotatingRelationship = new RequiredMultiContainmentValueManager<Annotation>(sysmlBase.INSTANCE.AnnotatingElement_ownedAnnotatingRelationship, this);
        this._annotation = new RequiredMultiContainmentValueManager<Annotation>(sysmlBase.INSTANCE.AnnotatingElement_annotation, this);
        this._owningAnnotatingRelationship = new RequiredMultiContainmentValueManager<Annotation>(sysmlBase.INSTANCE.AnnotatingElement_owningAnnotatingRelationship, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.AnnotatingElement_annotatedElement.key: return this._annotatedElement;
            case sysmlBase.INSTANCE.AnnotatingElement_ownedAnnotatingRelationship.key: return this._ownedAnnotatingRelationship;
            case sysmlBase.INSTANCE.AnnotatingElement_annotation.key: return this._annotation;
            case sysmlBase.INSTANCE.AnnotatingElement_owningAnnotatingRelationship.key: return this._owningAnnotatingRelationship;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Annotation extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Annotation {
        return new Annotation(sysmlBase.INSTANCE.Annotation, id, receiveDelta, parentInfo);
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

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._annotatingElement = new RequiredMultiContainmentValueManager<AnnotatingElement>(sysmlBase.INSTANCE.Annotation_annotatingElement, this);
        this._annotatedElement = new RequiredMultiContainmentValueManager<Element>(sysmlBase.INSTANCE.Annotation_annotatedElement, this);
        this._owningAnnotatedElement = new RequiredMultiContainmentValueManager<Element>(sysmlBase.INSTANCE.Annotation_owningAnnotatedElement, this);
        this._ownedAnnotatingElement = new RequiredMultiContainmentValueManager<AnnotatingElement>(sysmlBase.INSTANCE.Annotation_ownedAnnotatingElement, this);
        this._owningAnnotatingElement = new RequiredMultiContainmentValueManager<AnnotatingElement>(sysmlBase.INSTANCE.Annotation_owningAnnotatingElement, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Annotation_annotatingElement.key: return this._annotatingElement;
            case sysmlBase.INSTANCE.Annotation_annotatedElement.key: return this._annotatedElement;
            case sysmlBase.INSTANCE.Annotation_owningAnnotatedElement.key: return this._owningAnnotatedElement;
            case sysmlBase.INSTANCE.Annotation_ownedAnnotatingElement.key: return this._ownedAnnotatingElement;
            case sysmlBase.INSTANCE.Annotation_owningAnnotatingElement.key: return this._owningAnnotatingElement;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class ConstraintUsage extends OccurrenceUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ConstraintUsage {
        return new ConstraintUsage(sysmlBase.INSTANCE.ConstraintUsage, id, receiveDelta, parentInfo);
    }

    private readonly _constraintDefinition: RequiredMultiContainmentValueManager<Predicate>;
    get constraintDefinition(): Predicate[] {
        return this._constraintDefinition.get();
    }
    addConstraintDefinition(newValue: Predicate) {
        this._constraintDefinition.add(newValue);
    }
    removeConstraintDefinition(valueToRemove: Predicate) {
        this._constraintDefinition.remove(valueToRemove);
    }
    addConstraintDefinitionAtIndex(newValue: Predicate, index: number) {
        this._constraintDefinition.insertAtIndex(newValue, index);
    }
    moveConstraintDefinition(oldIndex: number, newIndex: number) {
        this._constraintDefinition.move(oldIndex, newIndex);
    }
    replaceConstraintDefinitionAtIndex(movedChild: Predicate, newIndex: number) {
        this._constraintDefinition.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._constraintDefinition = new RequiredMultiContainmentValueManager<Predicate>(sysmlBase.INSTANCE.ConstraintUsage_constraintDefinition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.ConstraintUsage_constraintDefinition.key) {
            return this._constraintDefinition;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class AssertConstraintUsage extends ConstraintUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): AssertConstraintUsage {
        return new AssertConstraintUsage(sysmlBase.INSTANCE.AssertConstraintUsage, id, receiveDelta, parentInfo);
    }

    private readonly _assertedConstraint: RequiredMultiContainmentValueManager<ConstraintUsage>;
    get assertedConstraint(): ConstraintUsage[] {
        return this._assertedConstraint.get();
    }
    addAssertedConstraint(newValue: ConstraintUsage) {
        this._assertedConstraint.add(newValue);
    }
    removeAssertedConstraint(valueToRemove: ConstraintUsage) {
        this._assertedConstraint.remove(valueToRemove);
    }
    addAssertedConstraintAtIndex(newValue: ConstraintUsage, index: number) {
        this._assertedConstraint.insertAtIndex(newValue, index);
    }
    moveAssertedConstraint(oldIndex: number, newIndex: number) {
        this._assertedConstraint.move(oldIndex, newIndex);
    }
    replaceAssertedConstraintAtIndex(movedChild: ConstraintUsage, newIndex: number) {
        this._assertedConstraint.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._assertedConstraint = new RequiredMultiContainmentValueManager<ConstraintUsage>(sysmlBase.INSTANCE.AssertConstraintUsage_assertedConstraint, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.AssertConstraintUsage_assertedConstraint.key) {
            return this._assertedConstraint;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class AssignmentActionUsage extends ActionUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): AssignmentActionUsage {
        return new AssignmentActionUsage(sysmlBase.INSTANCE.AssignmentActionUsage, id, receiveDelta, parentInfo);
    }

    private readonly _targetArgument: RequiredMultiContainmentValueManager<Expression>;
    get targetArgument(): Expression[] {
        return this._targetArgument.get();
    }
    addTargetArgument(newValue: Expression) {
        this._targetArgument.add(newValue);
    }
    removeTargetArgument(valueToRemove: Expression) {
        this._targetArgument.remove(valueToRemove);
    }
    addTargetArgumentAtIndex(newValue: Expression, index: number) {
        this._targetArgument.insertAtIndex(newValue, index);
    }
    moveTargetArgument(oldIndex: number, newIndex: number) {
        this._targetArgument.move(oldIndex, newIndex);
    }
    replaceTargetArgumentAtIndex(movedChild: Expression, newIndex: number) {
        this._targetArgument.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _valueExpression: RequiredMultiContainmentValueManager<Expression>;
    get valueExpression(): Expression[] {
        return this._valueExpression.get();
    }
    addValueExpression(newValue: Expression) {
        this._valueExpression.add(newValue);
    }
    removeValueExpression(valueToRemove: Expression) {
        this._valueExpression.remove(valueToRemove);
    }
    addValueExpressionAtIndex(newValue: Expression, index: number) {
        this._valueExpression.insertAtIndex(newValue, index);
    }
    moveValueExpression(oldIndex: number, newIndex: number) {
        this._valueExpression.move(oldIndex, newIndex);
    }
    replaceValueExpressionAtIndex(movedChild: Expression, newIndex: number) {
        this._valueExpression.replaceAtIndex(movedChild, newIndex);
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
        this._targetArgument = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.AssignmentActionUsage_targetArgument, this);
        this._valueExpression = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.AssignmentActionUsage_valueExpression, this);
        this._referent = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.AssignmentActionUsage_referent, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.AssignmentActionUsage_targetArgument.key: return this._targetArgument;
            case sysmlBase.INSTANCE.AssignmentActionUsage_valueExpression.key: return this._valueExpression;
            case sysmlBase.INSTANCE.AssignmentActionUsage_referent.key: return this._referent;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Association extends sysmlClassifier {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Association {
        return new Association(sysmlBase.INSTANCE.Association, id, receiveDelta, parentInfo);
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
        this._relatedType = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Association_relatedType, this);
        this._sourceType = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Association_sourceType, this);
        this._targetType = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Association_targetType, this);
        this._associationEnd = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Association_associationEnd, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Association_relatedType.key: return this._relatedType;
            case sysmlBase.INSTANCE.Association_sourceType.key: return this._sourceType;
            case sysmlBase.INSTANCE.Association_targetType.key: return this._targetType;
            case sysmlBase.INSTANCE.Association_associationEnd.key: return this._associationEnd;
            default: return super.getContainmentValueManager(containment);
        }
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

    private readonly _attributeDefinition: RequiredMultiContainmentValueManager<DataType>;
    get attributeDefinition(): DataType[] {
        return this._attributeDefinition.get();
    }
    addAttributeDefinition(newValue: DataType) {
        this._attributeDefinition.add(newValue);
    }
    removeAttributeDefinition(valueToRemove: DataType) {
        this._attributeDefinition.remove(valueToRemove);
    }
    addAttributeDefinitionAtIndex(newValue: DataType, index: number) {
        this._attributeDefinition.insertAtIndex(newValue, index);
    }
    moveAttributeDefinition(oldIndex: number, newIndex: number) {
        this._attributeDefinition.move(oldIndex, newIndex);
    }
    replaceAttributeDefinitionAtIndex(movedChild: DataType, newIndex: number) {
        this._attributeDefinition.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._attributeDefinition = new RequiredMultiContainmentValueManager<DataType>(sysmlBase.INSTANCE.AttributeUsage_attributeDefinition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.AttributeUsage_attributeDefinition.key) {
            return this._attributeDefinition;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class Class extends sysmlClassifier {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Class {
        return new Class(sysmlBase.INSTANCE.Class, id, receiveDelta, parentInfo);
    }
}

export class Behavior extends Class {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Behavior {
        return new Behavior(sysmlBase.INSTANCE.Behavior, id, receiveDelta, parentInfo);
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
        this._step = new RequiredMultiContainmentValueManager<Step>(sysmlBase.INSTANCE.Behavior_step, this);
        this._parameter = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Behavior_parameter, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Behavior_step.key: return this._step;
            case sysmlBase.INSTANCE.Behavior_parameter.key: return this._parameter;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Connector extends Feature {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Connector {
        return new Connector(sysmlBase.INSTANCE.Connector, id, receiveDelta, parentInfo);
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
        this._relatedFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Connector_relatedFeature, this);
        this._association = new RequiredMultiContainmentValueManager<Association>(sysmlBase.INSTANCE.Connector_association, this);
        this._connectorEnd = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Connector_connectorEnd, this);
        this._sourceFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Connector_sourceFeature, this);
        this._targetFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Connector_targetFeature, this);
        this._defaultFeaturingType = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Connector_defaultFeaturingType, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Connector_relatedFeature.key: return this._relatedFeature;
            case sysmlBase.INSTANCE.Connector_association.key: return this._association;
            case sysmlBase.INSTANCE.Connector_connectorEnd.key: return this._connectorEnd;
            case sysmlBase.INSTANCE.Connector_sourceFeature.key: return this._sourceFeature;
            case sysmlBase.INSTANCE.Connector_targetFeature.key: return this._targetFeature;
            case sysmlBase.INSTANCE.Connector_defaultFeaturingType.key: return this._defaultFeaturingType;
            default: return super.getContainmentValueManager(containment);
        }
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
        this._behavior = new RequiredMultiContainmentValueManager<Behavior>(sysmlBase.INSTANCE.Step_behavior, this);
        this._parameter = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Step_parameter, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Step_behavior.key: return this._behavior;
            case sysmlBase.INSTANCE.Step_parameter.key: return this._parameter;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Expression extends Step {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Expression {
        return new Expression(sysmlBase.INSTANCE.Expression, id, receiveDelta, parentInfo);
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

    private readonly _isModelLevelEvaluable: RequiredPropertyValueManager<boolean>;
    get isModelLevelEvaluable(): boolean {
        return this._isModelLevelEvaluable.get();
    }
    set isModelLevelEvaluable(newValue: boolean) {
        this._isModelLevelEvaluable.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._function = new RequiredMultiContainmentValueManager<Function>(sysmlBase.INSTANCE.Expression_function, this);
        this._result = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Expression_result, this);
        this._isModelLevelEvaluable = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.Expression_isModelLevelEvaluable, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === sysmlBase.INSTANCE.Expression_isModelLevelEvaluable.key) {
            return this._isModelLevelEvaluable;
        }
        return super.getPropertyValueManager(property);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Expression_function.key: return this._function;
            case sysmlBase.INSTANCE.Expression_result.key: return this._result;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class BooleanExpression extends Expression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): BooleanExpression {
        return new BooleanExpression(sysmlBase.INSTANCE.BooleanExpression, id, receiveDelta, parentInfo);
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
        this._predicate = new RequiredMultiContainmentValueManager<Predicate>(sysmlBase.INSTANCE.BooleanExpression_predicate, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.BooleanExpression_predicate.key) {
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
        this._argument = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.InstantiationExpression_argument, this);
        this._instantiatedType = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.InstantiationExpression_instantiatedType, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.InstantiationExpression_argument.key: return this._argument;
            case sysmlBase.INSTANCE.InstantiationExpression_instantiatedType.key: return this._instantiatedType;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class InvocationExpression extends InstantiationExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): InvocationExpression {
        return new InvocationExpression(sysmlBase.INSTANCE.InvocationExpression, id, receiveDelta, parentInfo);
    }

    private readonly _operand: RequiredMultiContainmentValueManager<Expression>;
    get operand(): Expression[] {
        return this._operand.get();
    }
    addOperand(newValue: Expression) {
        this._operand.add(newValue);
    }
    removeOperand(valueToRemove: Expression) {
        this._operand.remove(valueToRemove);
    }
    addOperandAtIndex(newValue: Expression, index: number) {
        this._operand.insertAtIndex(newValue, index);
    }
    moveOperand(oldIndex: number, newIndex: number) {
        this._operand.move(oldIndex, newIndex);
    }
    replaceOperandAtIndex(movedChild: Expression, newIndex: number) {
        this._operand.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._operand = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.InvocationExpression_operand, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.InvocationExpression_operand.key) {
            return this._operand;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class OperatorExpression extends InvocationExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): OperatorExpression {
        return new OperatorExpression(sysmlBase.INSTANCE.OperatorExpression, id, receiveDelta, parentInfo);
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
        this._operator = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.OperatorExpression_operator, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === sysmlBase.INSTANCE.OperatorExpression_operator.key) {
            return this._operator;
        }
        return super.getPropertyValueManager(property);
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
        this._locale = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.Comment_locale, this);
        this._body = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.Comment_body, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case sysmlBase.INSTANCE.Comment_locale.key: return this._locale;
            case sysmlBase.INSTANCE.Comment_body.key: return this._body;
            default: return super.getPropertyValueManager(property);
        }
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

    private readonly _reqId: RequiredPropertyValueManager<string>;
    get reqId(): string {
        return this._reqId.get();
    }
    set reqId(newValue: string) {
        this._reqId.set(newValue);
    }

    private readonly _text: RequiredPropertyValueManager<string>;
    get text(): string {
        return this._text.get();
    }
    set text(newValue: string) {
        this._text.set(newValue);
    }

    private readonly _subjectParameter: RequiredMultiContainmentValueManager<Usage>;
    get subjectParameter(): Usage[] {
        return this._subjectParameter.get();
    }
    addSubjectParameter(newValue: Usage) {
        this._subjectParameter.add(newValue);
    }
    removeSubjectParameter(valueToRemove: Usage) {
        this._subjectParameter.remove(valueToRemove);
    }
    addSubjectParameterAtIndex(newValue: Usage, index: number) {
        this._subjectParameter.insertAtIndex(newValue, index);
    }
    moveSubjectParameter(oldIndex: number, newIndex: number) {
        this._subjectParameter.move(oldIndex, newIndex);
    }
    replaceSubjectParameterAtIndex(movedChild: Usage, newIndex: number) {
        this._subjectParameter.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _actorParameter: RequiredMultiContainmentValueManager<PartUsage>;
    get actorParameter(): PartUsage[] {
        return this._actorParameter.get();
    }
    addActorParameter(newValue: PartUsage) {
        this._actorParameter.add(newValue);
    }
    removeActorParameter(valueToRemove: PartUsage) {
        this._actorParameter.remove(valueToRemove);
    }
    addActorParameterAtIndex(newValue: PartUsage, index: number) {
        this._actorParameter.insertAtIndex(newValue, index);
    }
    moveActorParameter(oldIndex: number, newIndex: number) {
        this._actorParameter.move(oldIndex, newIndex);
    }
    replaceActorParameterAtIndex(movedChild: PartUsage, newIndex: number) {
        this._actorParameter.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _stakeholderParameter: RequiredMultiContainmentValueManager<PartUsage>;
    get stakeholderParameter(): PartUsage[] {
        return this._stakeholderParameter.get();
    }
    addStakeholderParameter(newValue: PartUsage) {
        this._stakeholderParameter.add(newValue);
    }
    removeStakeholderParameter(valueToRemove: PartUsage) {
        this._stakeholderParameter.remove(valueToRemove);
    }
    addStakeholderParameterAtIndex(newValue: PartUsage, index: number) {
        this._stakeholderParameter.insertAtIndex(newValue, index);
    }
    moveStakeholderParameter(oldIndex: number, newIndex: number) {
        this._stakeholderParameter.move(oldIndex, newIndex);
    }
    replaceStakeholderParameterAtIndex(movedChild: PartUsage, newIndex: number) {
        this._stakeholderParameter.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _assumedConstraint: RequiredMultiContainmentValueManager<ConstraintUsage>;
    get assumedConstraint(): ConstraintUsage[] {
        return this._assumedConstraint.get();
    }
    addAssumedConstraint(newValue: ConstraintUsage) {
        this._assumedConstraint.add(newValue);
    }
    removeAssumedConstraint(valueToRemove: ConstraintUsage) {
        this._assumedConstraint.remove(valueToRemove);
    }
    addAssumedConstraintAtIndex(newValue: ConstraintUsage, index: number) {
        this._assumedConstraint.insertAtIndex(newValue, index);
    }
    moveAssumedConstraint(oldIndex: number, newIndex: number) {
        this._assumedConstraint.move(oldIndex, newIndex);
    }
    replaceAssumedConstraintAtIndex(movedChild: ConstraintUsage, newIndex: number) {
        this._assumedConstraint.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _requiredConstraint: RequiredMultiContainmentValueManager<ConstraintUsage>;
    get requiredConstraint(): ConstraintUsage[] {
        return this._requiredConstraint.get();
    }
    addRequiredConstraint(newValue: ConstraintUsage) {
        this._requiredConstraint.add(newValue);
    }
    removeRequiredConstraint(valueToRemove: ConstraintUsage) {
        this._requiredConstraint.remove(valueToRemove);
    }
    addRequiredConstraintAtIndex(newValue: ConstraintUsage, index: number) {
        this._requiredConstraint.insertAtIndex(newValue, index);
    }
    moveRequiredConstraint(oldIndex: number, newIndex: number) {
        this._requiredConstraint.move(oldIndex, newIndex);
    }
    replaceRequiredConstraintAtIndex(movedChild: ConstraintUsage, newIndex: number) {
        this._requiredConstraint.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _framedConcern: RequiredMultiContainmentValueManager<ConcernUsage>;
    get framedConcern(): ConcernUsage[] {
        return this._framedConcern.get();
    }
    addFramedConcern(newValue: ConcernUsage) {
        this._framedConcern.add(newValue);
    }
    removeFramedConcern(valueToRemove: ConcernUsage) {
        this._framedConcern.remove(valueToRemove);
    }
    addFramedConcernAtIndex(newValue: ConcernUsage, index: number) {
        this._framedConcern.insertAtIndex(newValue, index);
    }
    moveFramedConcern(oldIndex: number, newIndex: number) {
        this._framedConcern.move(oldIndex, newIndex);
    }
    replaceFramedConcernAtIndex(movedChild: ConcernUsage, newIndex: number) {
        this._framedConcern.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._reqId = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.RequirementDefinition_reqId, this);
        this._text = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.RequirementDefinition_text, this);
        this._subjectParameter = new RequiredMultiContainmentValueManager<Usage>(sysmlBase.INSTANCE.RequirementDefinition_subjectParameter, this);
        this._actorParameter = new RequiredMultiContainmentValueManager<PartUsage>(sysmlBase.INSTANCE.RequirementDefinition_actorParameter, this);
        this._stakeholderParameter = new RequiredMultiContainmentValueManager<PartUsage>(sysmlBase.INSTANCE.RequirementDefinition_stakeholderParameter, this);
        this._assumedConstraint = new RequiredMultiContainmentValueManager<ConstraintUsage>(sysmlBase.INSTANCE.RequirementDefinition_assumedConstraint, this);
        this._requiredConstraint = new RequiredMultiContainmentValueManager<ConstraintUsage>(sysmlBase.INSTANCE.RequirementDefinition_requiredConstraint, this);
        this._framedConcern = new RequiredMultiContainmentValueManager<ConcernUsage>(sysmlBase.INSTANCE.RequirementDefinition_framedConcern, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case sysmlBase.INSTANCE.RequirementDefinition_reqId.key: return this._reqId;
            case sysmlBase.INSTANCE.RequirementDefinition_text.key: return this._text;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.RequirementDefinition_subjectParameter.key: return this._subjectParameter;
            case sysmlBase.INSTANCE.RequirementDefinition_actorParameter.key: return this._actorParameter;
            case sysmlBase.INSTANCE.RequirementDefinition_stakeholderParameter.key: return this._stakeholderParameter;
            case sysmlBase.INSTANCE.RequirementDefinition_assumedConstraint.key: return this._assumedConstraint;
            case sysmlBase.INSTANCE.RequirementDefinition_requiredConstraint.key: return this._requiredConstraint;
            case sysmlBase.INSTANCE.RequirementDefinition_framedConcern.key: return this._framedConcern;
            default: return super.getContainmentValueManager(containment);
        }
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

    private readonly _requirementDefinition: RequiredMultiContainmentValueManager<RequirementDefinition>;
    get requirementDefinition(): RequirementDefinition[] {
        return this._requirementDefinition.get();
    }
    addRequirementDefinition(newValue: RequirementDefinition) {
        this._requirementDefinition.add(newValue);
    }
    removeRequirementDefinition(valueToRemove: RequirementDefinition) {
        this._requirementDefinition.remove(valueToRemove);
    }
    addRequirementDefinitionAtIndex(newValue: RequirementDefinition, index: number) {
        this._requirementDefinition.insertAtIndex(newValue, index);
    }
    moveRequirementDefinition(oldIndex: number, newIndex: number) {
        this._requirementDefinition.move(oldIndex, newIndex);
    }
    replaceRequirementDefinitionAtIndex(movedChild: RequirementDefinition, newIndex: number) {
        this._requirementDefinition.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _reqId: RequiredPropertyValueManager<string>;
    get reqId(): string {
        return this._reqId.get();
    }
    set reqId(newValue: string) {
        this._reqId.set(newValue);
    }

    private readonly _text: RequiredPropertyValueManager<string>;
    get text(): string {
        return this._text.get();
    }
    set text(newValue: string) {
        this._text.set(newValue);
    }

    private readonly _requiredConstraint: RequiredMultiContainmentValueManager<ConstraintUsage>;
    get requiredConstraint(): ConstraintUsage[] {
        return this._requiredConstraint.get();
    }
    addRequiredConstraint(newValue: ConstraintUsage) {
        this._requiredConstraint.add(newValue);
    }
    removeRequiredConstraint(valueToRemove: ConstraintUsage) {
        this._requiredConstraint.remove(valueToRemove);
    }
    addRequiredConstraintAtIndex(newValue: ConstraintUsage, index: number) {
        this._requiredConstraint.insertAtIndex(newValue, index);
    }
    moveRequiredConstraint(oldIndex: number, newIndex: number) {
        this._requiredConstraint.move(oldIndex, newIndex);
    }
    replaceRequiredConstraintAtIndex(movedChild: ConstraintUsage, newIndex: number) {
        this._requiredConstraint.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _assumedConstraint: RequiredMultiContainmentValueManager<ConstraintUsage>;
    get assumedConstraint(): ConstraintUsage[] {
        return this._assumedConstraint.get();
    }
    addAssumedConstraint(newValue: ConstraintUsage) {
        this._assumedConstraint.add(newValue);
    }
    removeAssumedConstraint(valueToRemove: ConstraintUsage) {
        this._assumedConstraint.remove(valueToRemove);
    }
    addAssumedConstraintAtIndex(newValue: ConstraintUsage, index: number) {
        this._assumedConstraint.insertAtIndex(newValue, index);
    }
    moveAssumedConstraint(oldIndex: number, newIndex: number) {
        this._assumedConstraint.move(oldIndex, newIndex);
    }
    replaceAssumedConstraintAtIndex(movedChild: ConstraintUsage, newIndex: number) {
        this._assumedConstraint.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _subjectParameter: RequiredMultiContainmentValueManager<Usage>;
    get subjectParameter(): Usage[] {
        return this._subjectParameter.get();
    }
    addSubjectParameter(newValue: Usage) {
        this._subjectParameter.add(newValue);
    }
    removeSubjectParameter(valueToRemove: Usage) {
        this._subjectParameter.remove(valueToRemove);
    }
    addSubjectParameterAtIndex(newValue: Usage, index: number) {
        this._subjectParameter.insertAtIndex(newValue, index);
    }
    moveSubjectParameter(oldIndex: number, newIndex: number) {
        this._subjectParameter.move(oldIndex, newIndex);
    }
    replaceSubjectParameterAtIndex(movedChild: Usage, newIndex: number) {
        this._subjectParameter.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _framedConcern: RequiredMultiContainmentValueManager<ConcernUsage>;
    get framedConcern(): ConcernUsage[] {
        return this._framedConcern.get();
    }
    addFramedConcern(newValue: ConcernUsage) {
        this._framedConcern.add(newValue);
    }
    removeFramedConcern(valueToRemove: ConcernUsage) {
        this._framedConcern.remove(valueToRemove);
    }
    addFramedConcernAtIndex(newValue: ConcernUsage, index: number) {
        this._framedConcern.insertAtIndex(newValue, index);
    }
    moveFramedConcern(oldIndex: number, newIndex: number) {
        this._framedConcern.move(oldIndex, newIndex);
    }
    replaceFramedConcernAtIndex(movedChild: ConcernUsage, newIndex: number) {
        this._framedConcern.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _actorParameter: RequiredMultiContainmentValueManager<PartUsage>;
    get actorParameter(): PartUsage[] {
        return this._actorParameter.get();
    }
    addActorParameter(newValue: PartUsage) {
        this._actorParameter.add(newValue);
    }
    removeActorParameter(valueToRemove: PartUsage) {
        this._actorParameter.remove(valueToRemove);
    }
    addActorParameterAtIndex(newValue: PartUsage, index: number) {
        this._actorParameter.insertAtIndex(newValue, index);
    }
    moveActorParameter(oldIndex: number, newIndex: number) {
        this._actorParameter.move(oldIndex, newIndex);
    }
    replaceActorParameterAtIndex(movedChild: PartUsage, newIndex: number) {
        this._actorParameter.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _stakeholderParameter: RequiredMultiContainmentValueManager<PartUsage>;
    get stakeholderParameter(): PartUsage[] {
        return this._stakeholderParameter.get();
    }
    addStakeholderParameter(newValue: PartUsage) {
        this._stakeholderParameter.add(newValue);
    }
    removeStakeholderParameter(valueToRemove: PartUsage) {
        this._stakeholderParameter.remove(valueToRemove);
    }
    addStakeholderParameterAtIndex(newValue: PartUsage, index: number) {
        this._stakeholderParameter.insertAtIndex(newValue, index);
    }
    moveStakeholderParameter(oldIndex: number, newIndex: number) {
        this._stakeholderParameter.move(oldIndex, newIndex);
    }
    replaceStakeholderParameterAtIndex(movedChild: PartUsage, newIndex: number) {
        this._stakeholderParameter.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._requirementDefinition = new RequiredMultiContainmentValueManager<RequirementDefinition>(sysmlBase.INSTANCE.RequirementUsage_requirementDefinition, this);
        this._reqId = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.RequirementUsage_reqId, this);
        this._text = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.RequirementUsage_text, this);
        this._requiredConstraint = new RequiredMultiContainmentValueManager<ConstraintUsage>(sysmlBase.INSTANCE.RequirementUsage_requiredConstraint, this);
        this._assumedConstraint = new RequiredMultiContainmentValueManager<ConstraintUsage>(sysmlBase.INSTANCE.RequirementUsage_assumedConstraint, this);
        this._subjectParameter = new RequiredMultiContainmentValueManager<Usage>(sysmlBase.INSTANCE.RequirementUsage_subjectParameter, this);
        this._framedConcern = new RequiredMultiContainmentValueManager<ConcernUsage>(sysmlBase.INSTANCE.RequirementUsage_framedConcern, this);
        this._actorParameter = new RequiredMultiContainmentValueManager<PartUsage>(sysmlBase.INSTANCE.RequirementUsage_actorParameter, this);
        this._stakeholderParameter = new RequiredMultiContainmentValueManager<PartUsage>(sysmlBase.INSTANCE.RequirementUsage_stakeholderParameter, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case sysmlBase.INSTANCE.RequirementUsage_reqId.key: return this._reqId;
            case sysmlBase.INSTANCE.RequirementUsage_text.key: return this._text;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.RequirementUsage_requirementDefinition.key: return this._requirementDefinition;
            case sysmlBase.INSTANCE.RequirementUsage_requiredConstraint.key: return this._requiredConstraint;
            case sysmlBase.INSTANCE.RequirementUsage_assumedConstraint.key: return this._assumedConstraint;
            case sysmlBase.INSTANCE.RequirementUsage_subjectParameter.key: return this._subjectParameter;
            case sysmlBase.INSTANCE.RequirementUsage_framedConcern.key: return this._framedConcern;
            case sysmlBase.INSTANCE.RequirementUsage_actorParameter.key: return this._actorParameter;
            case sysmlBase.INSTANCE.RequirementUsage_stakeholderParameter.key: return this._stakeholderParameter;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class ConcernUsage extends RequirementUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ConcernUsage {
        return new ConcernUsage(sysmlBase.INSTANCE.ConcernUsage, id, receiveDelta, parentInfo);
    }

    private readonly _concernDefinition: RequiredMultiContainmentValueManager<ConcernDefinition>;
    get concernDefinition(): ConcernDefinition[] {
        return this._concernDefinition.get();
    }
    addConcernDefinition(newValue: ConcernDefinition) {
        this._concernDefinition.add(newValue);
    }
    removeConcernDefinition(valueToRemove: ConcernDefinition) {
        this._concernDefinition.remove(valueToRemove);
    }
    addConcernDefinitionAtIndex(newValue: ConcernDefinition, index: number) {
        this._concernDefinition.insertAtIndex(newValue, index);
    }
    moveConcernDefinition(oldIndex: number, newIndex: number) {
        this._concernDefinition.move(oldIndex, newIndex);
    }
    replaceConcernDefinitionAtIndex(movedChild: ConcernDefinition, newIndex: number) {
        this._concernDefinition.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._concernDefinition = new RequiredMultiContainmentValueManager<ConcernDefinition>(sysmlBase.INSTANCE.ConcernUsage_concernDefinition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.ConcernUsage_concernDefinition.key) {
            return this._concernDefinition;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class PortDefinition extends OccurrenceDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): PortDefinition {
        return new PortDefinition(sysmlBase.INSTANCE.PortDefinition, id, receiveDelta, parentInfo);
    }

    private readonly _conjugatedPortDefinition: RequiredMultiContainmentValueManager<ConjugatedPortDefinition>;
    get conjugatedPortDefinition(): ConjugatedPortDefinition[] {
        return this._conjugatedPortDefinition.get();
    }
    addConjugatedPortDefinition(newValue: ConjugatedPortDefinition) {
        this._conjugatedPortDefinition.add(newValue);
    }
    removeConjugatedPortDefinition(valueToRemove: ConjugatedPortDefinition) {
        this._conjugatedPortDefinition.remove(valueToRemove);
    }
    addConjugatedPortDefinitionAtIndex(newValue: ConjugatedPortDefinition, index: number) {
        this._conjugatedPortDefinition.insertAtIndex(newValue, index);
    }
    moveConjugatedPortDefinition(oldIndex: number, newIndex: number) {
        this._conjugatedPortDefinition.move(oldIndex, newIndex);
    }
    replaceConjugatedPortDefinitionAtIndex(movedChild: ConjugatedPortDefinition, newIndex: number) {
        this._conjugatedPortDefinition.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._conjugatedPortDefinition = new RequiredMultiContainmentValueManager<ConjugatedPortDefinition>(sysmlBase.INSTANCE.PortDefinition_conjugatedPortDefinition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.PortDefinition_conjugatedPortDefinition.key) {
            return this._conjugatedPortDefinition;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class ConjugatedPortDefinition extends PortDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ConjugatedPortDefinition {
        return new ConjugatedPortDefinition(sysmlBase.INSTANCE.ConjugatedPortDefinition, id, receiveDelta, parentInfo);
    }

    private readonly _ownedPortConjugator: RequiredMultiContainmentValueManager<PortConjugation>;
    get ownedPortConjugator(): PortConjugation[] {
        return this._ownedPortConjugator.get();
    }
    addOwnedPortConjugator(newValue: PortConjugation) {
        this._ownedPortConjugator.add(newValue);
    }
    removeOwnedPortConjugator(valueToRemove: PortConjugation) {
        this._ownedPortConjugator.remove(valueToRemove);
    }
    addOwnedPortConjugatorAtIndex(newValue: PortConjugation, index: number) {
        this._ownedPortConjugator.insertAtIndex(newValue, index);
    }
    moveOwnedPortConjugator(oldIndex: number, newIndex: number) {
        this._ownedPortConjugator.move(oldIndex, newIndex);
    }
    replaceOwnedPortConjugatorAtIndex(movedChild: PortConjugation, newIndex: number) {
        this._ownedPortConjugator.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _originalPortDefinition: RequiredMultiContainmentValueManager<PortDefinition>;
    get originalPortDefinition(): PortDefinition[] {
        return this._originalPortDefinition.get();
    }
    addOriginalPortDefinition(newValue: PortDefinition) {
        this._originalPortDefinition.add(newValue);
    }
    removeOriginalPortDefinition(valueToRemove: PortDefinition) {
        this._originalPortDefinition.remove(valueToRemove);
    }
    addOriginalPortDefinitionAtIndex(newValue: PortDefinition, index: number) {
        this._originalPortDefinition.insertAtIndex(newValue, index);
    }
    moveOriginalPortDefinition(oldIndex: number, newIndex: number) {
        this._originalPortDefinition.move(oldIndex, newIndex);
    }
    replaceOriginalPortDefinitionAtIndex(movedChild: PortDefinition, newIndex: number) {
        this._originalPortDefinition.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._ownedPortConjugator = new RequiredMultiContainmentValueManager<PortConjugation>(sysmlBase.INSTANCE.ConjugatedPortDefinition_ownedPortConjugator, this);
        this._originalPortDefinition = new RequiredMultiContainmentValueManager<PortDefinition>(sysmlBase.INSTANCE.ConjugatedPortDefinition_originalPortDefinition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.ConjugatedPortDefinition_ownedPortConjugator.key: return this._ownedPortConjugator;
            case sysmlBase.INSTANCE.ConjugatedPortDefinition_originalPortDefinition.key: return this._originalPortDefinition;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Specialization extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Specialization {
        return new Specialization(sysmlBase.INSTANCE.Specialization, id, receiveDelta, parentInfo);
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
        this._general = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Specialization_general, this);
        this._specific = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Specialization_specific, this);
        this._owningType = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Specialization_owningType, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Specialization_general.key: return this._general;
            case sysmlBase.INSTANCE.Specialization_specific.key: return this._specific;
            case sysmlBase.INSTANCE.Specialization_owningType.key: return this._owningType;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class FeatureTyping extends Specialization {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureTyping {
        return new FeatureTyping(sysmlBase.INSTANCE.FeatureTyping, id, receiveDelta, parentInfo);
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
        this._typedFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.FeatureTyping_typedFeature, this);
        this._type = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.FeatureTyping_type, this);
        this._owningFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.FeatureTyping_owningFeature, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.FeatureTyping_typedFeature.key: return this._typedFeature;
            case sysmlBase.INSTANCE.FeatureTyping_type.key: return this._type;
            case sysmlBase.INSTANCE.FeatureTyping_owningFeature.key: return this._owningFeature;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class ConjugatedPortTyping extends FeatureTyping {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ConjugatedPortTyping {
        return new ConjugatedPortTyping(sysmlBase.INSTANCE.ConjugatedPortTyping, id, receiveDelta, parentInfo);
    }

    private readonly _portDefinition: RequiredMultiContainmentValueManager<PortDefinition>;
    get portDefinition(): PortDefinition[] {
        return this._portDefinition.get();
    }
    addPortDefinition(newValue: PortDefinition) {
        this._portDefinition.add(newValue);
    }
    removePortDefinition(valueToRemove: PortDefinition) {
        this._portDefinition.remove(valueToRemove);
    }
    addPortDefinitionAtIndex(newValue: PortDefinition, index: number) {
        this._portDefinition.insertAtIndex(newValue, index);
    }
    movePortDefinition(oldIndex: number, newIndex: number) {
        this._portDefinition.move(oldIndex, newIndex);
    }
    replacePortDefinitionAtIndex(movedChild: PortDefinition, newIndex: number) {
        this._portDefinition.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _conjugatedPortDefinition: RequiredMultiContainmentValueManager<ConjugatedPortDefinition>;
    get conjugatedPortDefinition(): ConjugatedPortDefinition[] {
        return this._conjugatedPortDefinition.get();
    }
    addConjugatedPortDefinition(newValue: ConjugatedPortDefinition) {
        this._conjugatedPortDefinition.add(newValue);
    }
    removeConjugatedPortDefinition(valueToRemove: ConjugatedPortDefinition) {
        this._conjugatedPortDefinition.remove(valueToRemove);
    }
    addConjugatedPortDefinitionAtIndex(newValue: ConjugatedPortDefinition, index: number) {
        this._conjugatedPortDefinition.insertAtIndex(newValue, index);
    }
    moveConjugatedPortDefinition(oldIndex: number, newIndex: number) {
        this._conjugatedPortDefinition.move(oldIndex, newIndex);
    }
    replaceConjugatedPortDefinitionAtIndex(movedChild: ConjugatedPortDefinition, newIndex: number) {
        this._conjugatedPortDefinition.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._portDefinition = new RequiredMultiContainmentValueManager<PortDefinition>(sysmlBase.INSTANCE.ConjugatedPortTyping_portDefinition, this);
        this._conjugatedPortDefinition = new RequiredMultiContainmentValueManager<ConjugatedPortDefinition>(sysmlBase.INSTANCE.ConjugatedPortTyping_conjugatedPortDefinition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.ConjugatedPortTyping_portDefinition.key: return this._portDefinition;
            case sysmlBase.INSTANCE.ConjugatedPortTyping_conjugatedPortDefinition.key: return this._conjugatedPortDefinition;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Conjugation extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Conjugation {
        return new Conjugation(sysmlBase.INSTANCE.Conjugation, id, receiveDelta, parentInfo);
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
        this._originalType = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Conjugation_originalType, this);
        this._conjugatedType = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Conjugation_conjugatedType, this);
        this._owningType = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Conjugation_owningType, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Conjugation_originalType.key: return this._originalType;
            case sysmlBase.INSTANCE.Conjugation_conjugatedType.key: return this._conjugatedType;
            case sysmlBase.INSTANCE.Conjugation_owningType.key: return this._owningType;
            default: return super.getContainmentValueManager(containment);
        }
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
        this._subsettedFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Subsetting_subsettedFeature, this);
        this._subsettingFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Subsetting_subsettingFeature, this);
        this._owningFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Subsetting_owningFeature, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Subsetting_subsettedFeature.key: return this._subsettedFeature;
            case sysmlBase.INSTANCE.Subsetting_subsettingFeature.key: return this._subsettingFeature;
            case sysmlBase.INSTANCE.Subsetting_owningFeature.key: return this._owningFeature;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class CrossSubsetting extends Subsetting {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): CrossSubsetting {
        return new CrossSubsetting(sysmlBase.INSTANCE.CrossSubsetting, id, receiveDelta, parentInfo);
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

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._crossedFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.CrossSubsetting_crossedFeature, this);
        this._crossingFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.CrossSubsetting_crossingFeature, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.CrossSubsetting_crossedFeature.key: return this._crossedFeature;
            case sysmlBase.INSTANCE.CrossSubsetting_crossingFeature.key: return this._crossingFeature;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class DataType extends sysmlClassifier {
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
        this._client = new RequiredMultiContainmentValueManager<Element>(sysmlBase.INSTANCE.Dependency_client, this);
        this._supplier = new RequiredMultiContainmentValueManager<Element>(sysmlBase.INSTANCE.Dependency_supplier, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Dependency_client.key: return this._client;
            case sysmlBase.INSTANCE.Dependency_supplier.key: return this._supplier;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Differencing extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Differencing {
        return new Differencing(sysmlBase.INSTANCE.Differencing, id, receiveDelta, parentInfo);
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
        this._differencingType = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Differencing_differencingType, this);
        this._typeDifferenced = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Differencing_typeDifferenced, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Differencing_differencingType.key: return this._differencingType;
            case sysmlBase.INSTANCE.Differencing_typeDifferenced.key: return this._typeDifferenced;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Disjoining extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Disjoining {
        return new Disjoining(sysmlBase.INSTANCE.Disjoining, id, receiveDelta, parentInfo);
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
        this._typeDisjoined = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Disjoining_typeDisjoined, this);
        this._disjoiningType = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Disjoining_disjoiningType, this);
        this._owningType = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Disjoining_owningType, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Disjoining_typeDisjoined.key: return this._typeDisjoined;
            case sysmlBase.INSTANCE.Disjoining_disjoiningType.key: return this._disjoiningType;
            case sysmlBase.INSTANCE.Disjoining_owningType.key: return this._owningType;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Documentation extends Comment {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Documentation {
        return new Documentation(sysmlBase.INSTANCE.Documentation, id, receiveDelta, parentInfo);
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
        this._documentedElement = new RequiredMultiContainmentValueManager<Element>(sysmlBase.INSTANCE.Documentation_documentedElement, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.Documentation_documentedElement.key) {
            return this._documentedElement;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class ElementFilterMembership extends OwningMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ElementFilterMembership {
        return new ElementFilterMembership(sysmlBase.INSTANCE.ElementFilterMembership, id, receiveDelta, parentInfo);
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
        this._condition = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.ElementFilterMembership_condition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.ElementFilterMembership_condition.key) {
            return this._condition;
        }
        return super.getContainmentValueManager(containment);
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

    private readonly _enumeratedValue: RequiredMultiContainmentValueManager<EnumerationUsage>;
    get enumeratedValue(): EnumerationUsage[] {
        return this._enumeratedValue.get();
    }
    addEnumeratedValue(newValue: EnumerationUsage) {
        this._enumeratedValue.add(newValue);
    }
    removeEnumeratedValue(valueToRemove: EnumerationUsage) {
        this._enumeratedValue.remove(valueToRemove);
    }
    addEnumeratedValueAtIndex(newValue: EnumerationUsage, index: number) {
        this._enumeratedValue.insertAtIndex(newValue, index);
    }
    moveEnumeratedValue(oldIndex: number, newIndex: number) {
        this._enumeratedValue.move(oldIndex, newIndex);
    }
    replaceEnumeratedValueAtIndex(movedChild: EnumerationUsage, newIndex: number) {
        this._enumeratedValue.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._enumeratedValue = new RequiredMultiContainmentValueManager<EnumerationUsage>(sysmlBase.INSTANCE.EnumerationDefinition_enumeratedValue, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.EnumerationDefinition_enumeratedValue.key) {
            return this._enumeratedValue;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class EnumerationUsage extends AttributeUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EnumerationUsage {
        return new EnumerationUsage(sysmlBase.INSTANCE.EnumerationUsage, id, receiveDelta, parentInfo);
    }

    private readonly _enumerationDefinition: RequiredMultiContainmentValueManager<EnumerationDefinition>;
    get enumerationDefinition(): EnumerationDefinition[] {
        return this._enumerationDefinition.get();
    }
    addEnumerationDefinition(newValue: EnumerationDefinition) {
        this._enumerationDefinition.add(newValue);
    }
    removeEnumerationDefinition(valueToRemove: EnumerationDefinition) {
        this._enumerationDefinition.remove(valueToRemove);
    }
    addEnumerationDefinitionAtIndex(newValue: EnumerationDefinition, index: number) {
        this._enumerationDefinition.insertAtIndex(newValue, index);
    }
    moveEnumerationDefinition(oldIndex: number, newIndex: number) {
        this._enumerationDefinition.move(oldIndex, newIndex);
    }
    replaceEnumerationDefinitionAtIndex(movedChild: EnumerationDefinition, newIndex: number) {
        this._enumerationDefinition.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._enumerationDefinition = new RequiredMultiContainmentValueManager<EnumerationDefinition>(sysmlBase.INSTANCE.EnumerationUsage_enumerationDefinition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.EnumerationUsage_enumerationDefinition.key) {
            return this._enumerationDefinition;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class EventOccurrenceUsage extends OccurrenceUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): EventOccurrenceUsage {
        return new EventOccurrenceUsage(sysmlBase.INSTANCE.EventOccurrenceUsage, id, receiveDelta, parentInfo);
    }

    private readonly _eventOccurrence: RequiredMultiContainmentValueManager<OccurrenceUsage>;
    get eventOccurrence(): OccurrenceUsage[] {
        return this._eventOccurrence.get();
    }
    addEventOccurrence(newValue: OccurrenceUsage) {
        this._eventOccurrence.add(newValue);
    }
    removeEventOccurrence(valueToRemove: OccurrenceUsage) {
        this._eventOccurrence.remove(valueToRemove);
    }
    addEventOccurrenceAtIndex(newValue: OccurrenceUsage, index: number) {
        this._eventOccurrence.insertAtIndex(newValue, index);
    }
    moveEventOccurrence(oldIndex: number, newIndex: number) {
        this._eventOccurrence.move(oldIndex, newIndex);
    }
    replaceEventOccurrenceAtIndex(movedChild: OccurrenceUsage, newIndex: number) {
        this._eventOccurrence.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._eventOccurrence = new RequiredMultiContainmentValueManager<OccurrenceUsage>(sysmlBase.INSTANCE.EventOccurrenceUsage_eventOccurrence, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.EventOccurrenceUsage_eventOccurrence.key) {
            return this._eventOccurrence;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class StateUsage extends ActionUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): StateUsage {
        return new StateUsage(sysmlBase.INSTANCE.StateUsage, id, receiveDelta, parentInfo);
    }

    private readonly _stateDefinition: RequiredMultiContainmentValueManager<Behavior>;
    get stateDefinition(): Behavior[] {
        return this._stateDefinition.get();
    }
    addStateDefinition(newValue: Behavior) {
        this._stateDefinition.add(newValue);
    }
    removeStateDefinition(valueToRemove: Behavior) {
        this._stateDefinition.remove(valueToRemove);
    }
    addStateDefinitionAtIndex(newValue: Behavior, index: number) {
        this._stateDefinition.insertAtIndex(newValue, index);
    }
    moveStateDefinition(oldIndex: number, newIndex: number) {
        this._stateDefinition.move(oldIndex, newIndex);
    }
    replaceStateDefinitionAtIndex(movedChild: Behavior, newIndex: number) {
        this._stateDefinition.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _entryAction: RequiredMultiContainmentValueManager<ActionUsage>;
    get entryAction(): ActionUsage[] {
        return this._entryAction.get();
    }
    addEntryAction(newValue: ActionUsage) {
        this._entryAction.add(newValue);
    }
    removeEntryAction(valueToRemove: ActionUsage) {
        this._entryAction.remove(valueToRemove);
    }
    addEntryActionAtIndex(newValue: ActionUsage, index: number) {
        this._entryAction.insertAtIndex(newValue, index);
    }
    moveEntryAction(oldIndex: number, newIndex: number) {
        this._entryAction.move(oldIndex, newIndex);
    }
    replaceEntryActionAtIndex(movedChild: ActionUsage, newIndex: number) {
        this._entryAction.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _doAction: RequiredMultiContainmentValueManager<ActionUsage>;
    get doAction(): ActionUsage[] {
        return this._doAction.get();
    }
    addDoAction(newValue: ActionUsage) {
        this._doAction.add(newValue);
    }
    removeDoAction(valueToRemove: ActionUsage) {
        this._doAction.remove(valueToRemove);
    }
    addDoActionAtIndex(newValue: ActionUsage, index: number) {
        this._doAction.insertAtIndex(newValue, index);
    }
    moveDoAction(oldIndex: number, newIndex: number) {
        this._doAction.move(oldIndex, newIndex);
    }
    replaceDoActionAtIndex(movedChild: ActionUsage, newIndex: number) {
        this._doAction.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _exitAction: RequiredMultiContainmentValueManager<ActionUsage>;
    get exitAction(): ActionUsage[] {
        return this._exitAction.get();
    }
    addExitAction(newValue: ActionUsage) {
        this._exitAction.add(newValue);
    }
    removeExitAction(valueToRemove: ActionUsage) {
        this._exitAction.remove(valueToRemove);
    }
    addExitActionAtIndex(newValue: ActionUsage, index: number) {
        this._exitAction.insertAtIndex(newValue, index);
    }
    moveExitAction(oldIndex: number, newIndex: number) {
        this._exitAction.move(oldIndex, newIndex);
    }
    replaceExitActionAtIndex(movedChild: ActionUsage, newIndex: number) {
        this._exitAction.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _isParallel: RequiredPropertyValueManager<boolean>;
    get isParallel(): boolean {
        return this._isParallel.get();
    }
    set isParallel(newValue: boolean) {
        this._isParallel.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._stateDefinition = new RequiredMultiContainmentValueManager<Behavior>(sysmlBase.INSTANCE.StateUsage_stateDefinition, this);
        this._entryAction = new RequiredMultiContainmentValueManager<ActionUsage>(sysmlBase.INSTANCE.StateUsage_entryAction, this);
        this._doAction = new RequiredMultiContainmentValueManager<ActionUsage>(sysmlBase.INSTANCE.StateUsage_doAction, this);
        this._exitAction = new RequiredMultiContainmentValueManager<ActionUsage>(sysmlBase.INSTANCE.StateUsage_exitAction, this);
        this._isParallel = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.StateUsage_isParallel, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === sysmlBase.INSTANCE.StateUsage_isParallel.key) {
            return this._isParallel;
        }
        return super.getPropertyValueManager(property);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.StateUsage_stateDefinition.key: return this._stateDefinition;
            case sysmlBase.INSTANCE.StateUsage_entryAction.key: return this._entryAction;
            case sysmlBase.INSTANCE.StateUsage_doAction.key: return this._doAction;
            case sysmlBase.INSTANCE.StateUsage_exitAction.key: return this._exitAction;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class ExhibitStateUsage extends StateUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ExhibitStateUsage {
        return new ExhibitStateUsage(sysmlBase.INSTANCE.ExhibitStateUsage, id, receiveDelta, parentInfo);
    }

    private readonly _exhibitedState: RequiredMultiContainmentValueManager<StateUsage>;
    get exhibitedState(): StateUsage[] {
        return this._exhibitedState.get();
    }
    addExhibitedState(newValue: StateUsage) {
        this._exhibitedState.add(newValue);
    }
    removeExhibitedState(valueToRemove: StateUsage) {
        this._exhibitedState.remove(valueToRemove);
    }
    addExhibitedStateAtIndex(newValue: StateUsage, index: number) {
        this._exhibitedState.insertAtIndex(newValue, index);
    }
    moveExhibitedState(oldIndex: number, newIndex: number) {
        this._exhibitedState.move(oldIndex, newIndex);
    }
    replaceExhibitedStateAtIndex(movedChild: StateUsage, newIndex: number) {
        this._exhibitedState.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._exhibitedState = new RequiredMultiContainmentValueManager<StateUsage>(sysmlBase.INSTANCE.ExhibitStateUsage_exhibitedState, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.ExhibitStateUsage_exhibitedState.key) {
            return this._exhibitedState;
        }
        return super.getContainmentValueManager(containment);
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

    private readonly _isRecursive: RequiredPropertyValueManager<boolean>;
    get isRecursive(): boolean {
        return this._isRecursive.get();
    }
    set isRecursive(newValue: boolean) {
        this._isRecursive.set(newValue);
    }

    private readonly _isImportAll: RequiredPropertyValueManager<boolean>;
    get isImportAll(): boolean {
        return this._isImportAll.get();
    }
    set isImportAll(newValue: boolean) {
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
        this._visibility = new RequiredPropertyValueManager<VisibilityKind>(sysmlBase.INSTANCE.Import_visibility, this);
        this._isRecursive = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.Import_isRecursive, this);
        this._isImportAll = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.Import_isImportAll, this);
        this._importedElement = new RequiredMultiContainmentValueManager<Element>(sysmlBase.INSTANCE.Import_importedElement, this);
        this._importOwningNamespace = new RequiredMultiContainmentValueManager<Namespace>(sysmlBase.INSTANCE.Import_importOwningNamespace, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case sysmlBase.INSTANCE.Import_visibility.key: return this._visibility;
            case sysmlBase.INSTANCE.Import_isRecursive.key: return this._isRecursive;
            case sysmlBase.INSTANCE.Import_isImportAll.key: return this._isImportAll;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Import_importedElement.key: return this._importedElement;
            case sysmlBase.INSTANCE.Import_importOwningNamespace.key: return this._importOwningNamespace;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export abstract class Expose extends Import {
}

export class FeatureChainExpression extends OperatorExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureChainExpression {
        return new FeatureChainExpression(sysmlBase.INSTANCE.FeatureChainExpression, id, receiveDelta, parentInfo);
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
        this._targetFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.FeatureChainExpression_targetFeature, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.FeatureChainExpression_targetFeature.key) {
            return this._targetFeature;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class FeatureChaining extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureChaining {
        return new FeatureChaining(sysmlBase.INSTANCE.FeatureChaining, id, receiveDelta, parentInfo);
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
        this._chainingFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.FeatureChaining_chainingFeature, this);
        this._featureChained = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.FeatureChaining_featureChained, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.FeatureChaining_chainingFeature.key: return this._chainingFeature;
            case sysmlBase.INSTANCE.FeatureChaining_featureChained.key: return this._featureChained;
            default: return super.getContainmentValueManager(containment);
        }
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
        this._featureInverted = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.FeatureInverting_featureInverted, this);
        this._invertingFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.FeatureInverting_invertingFeature, this);
        this._owningFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.FeatureInverting_owningFeature, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.FeatureInverting_featureInverted.key: return this._featureInverted;
            case sysmlBase.INSTANCE.FeatureInverting_invertingFeature.key: return this._invertingFeature;
            case sysmlBase.INSTANCE.FeatureInverting_owningFeature.key: return this._owningFeature;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class FeatureReferenceExpression extends Expression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureReferenceExpression {
        return new FeatureReferenceExpression(sysmlBase.INSTANCE.FeatureReferenceExpression, id, receiveDelta, parentInfo);
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
        this._referent = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.FeatureReferenceExpression_referent, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.FeatureReferenceExpression_referent.key) {
            return this._referent;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class FeatureValue extends OwningMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FeatureValue {
        return new FeatureValue(sysmlBase.INSTANCE.FeatureValue, id, receiveDelta, parentInfo);
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

    private readonly _isInitial: RequiredPropertyValueManager<boolean>;
    get isInitial(): boolean {
        return this._isInitial.get();
    }
    set isInitial(newValue: boolean) {
        this._isInitial.set(newValue);
    }

    private readonly _isDefault: RequiredPropertyValueManager<boolean>;
    get isDefault(): boolean {
        return this._isDefault.get();
    }
    set isDefault(newValue: boolean) {
        this._isDefault.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._featureWithValue = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.FeatureValue_featureWithValue, this);
        this._value = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.FeatureValue_value, this);
        this._isInitial = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.FeatureValue_isInitial, this);
        this._isDefault = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.FeatureValue_isDefault, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case sysmlBase.INSTANCE.FeatureValue_isInitial.key: return this._isInitial;
            case sysmlBase.INSTANCE.FeatureValue_isDefault.key: return this._isDefault;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.FeatureValue_featureWithValue.key: return this._featureWithValue;
            case sysmlBase.INSTANCE.FeatureValue_value.key: return this._value;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Flow extends Connector {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Flow {
        return new Flow(sysmlBase.INSTANCE.Flow, id, receiveDelta, parentInfo);
    }

    private readonly _payloadType: RequiredMultiContainmentValueManager<sysmlClassifier>;
    get payloadType(): sysmlClassifier[] {
        return this._payloadType.get();
    }
    addPayloadType(newValue: sysmlClassifier) {
        this._payloadType.add(newValue);
    }
    removePayloadType(valueToRemove: sysmlClassifier) {
        this._payloadType.remove(valueToRemove);
    }
    addPayloadTypeAtIndex(newValue: sysmlClassifier, index: number) {
        this._payloadType.insertAtIndex(newValue, index);
    }
    movePayloadType(oldIndex: number, newIndex: number) {
        this._payloadType.move(oldIndex, newIndex);
    }
    replacePayloadTypeAtIndex(movedChild: sysmlClassifier, newIndex: number) {
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
        this._payloadType = new RequiredMultiContainmentValueManager<sysmlClassifier>(sysmlBase.INSTANCE.Flow_payloadType, this);
        this._targetInputFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Flow_targetInputFeature, this);
        this._sourceOutputFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Flow_sourceOutputFeature, this);
        this._flowEnd = new RequiredMultiContainmentValueManager<FlowEnd>(sysmlBase.INSTANCE.Flow_flowEnd, this);
        this._payloadFeature = new RequiredMultiContainmentValueManager<PayloadFeature>(sysmlBase.INSTANCE.Flow_payloadFeature, this);
        this._interaction = new RequiredMultiContainmentValueManager<Interaction>(sysmlBase.INSTANCE.Flow_interaction, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Flow_payloadType.key: return this._payloadType;
            case sysmlBase.INSTANCE.Flow_targetInputFeature.key: return this._targetInputFeature;
            case sysmlBase.INSTANCE.Flow_sourceOutputFeature.key: return this._sourceOutputFeature;
            case sysmlBase.INSTANCE.Flow_flowEnd.key: return this._flowEnd;
            case sysmlBase.INSTANCE.Flow_payloadFeature.key: return this._payloadFeature;
            case sysmlBase.INSTANCE.Flow_interaction.key: return this._interaction;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class FlowDefinition extends ActionDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FlowDefinition {
        return new FlowDefinition(sysmlBase.INSTANCE.FlowDefinition, id, receiveDelta, parentInfo);
    }

    private readonly _flowEnd: RequiredMultiContainmentValueManager<Usage>;
    get flowEnd(): Usage[] {
        return this._flowEnd.get();
    }
    addFlowEnd(newValue: Usage) {
        this._flowEnd.add(newValue);
    }
    removeFlowEnd(valueToRemove: Usage) {
        this._flowEnd.remove(valueToRemove);
    }
    addFlowEndAtIndex(newValue: Usage, index: number) {
        this._flowEnd.insertAtIndex(newValue, index);
    }
    moveFlowEnd(oldIndex: number, newIndex: number) {
        this._flowEnd.move(oldIndex, newIndex);
    }
    replaceFlowEndAtIndex(movedChild: Usage, newIndex: number) {
        this._flowEnd.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._flowEnd = new RequiredMultiContainmentValueManager<Usage>(sysmlBase.INSTANCE.FlowDefinition_flowEnd, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.FlowDefinition_flowEnd.key) {
            return this._flowEnd;
        }
        return super.getContainmentValueManager(containment);
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

    private readonly _flowDefinition: RequiredMultiContainmentValueManager<Interaction>;
    get flowDefinition(): Interaction[] {
        return this._flowDefinition.get();
    }
    addFlowDefinition(newValue: Interaction) {
        this._flowDefinition.add(newValue);
    }
    removeFlowDefinition(valueToRemove: Interaction) {
        this._flowDefinition.remove(valueToRemove);
    }
    addFlowDefinitionAtIndex(newValue: Interaction, index: number) {
        this._flowDefinition.insertAtIndex(newValue, index);
    }
    moveFlowDefinition(oldIndex: number, newIndex: number) {
        this._flowDefinition.move(oldIndex, newIndex);
    }
    replaceFlowDefinitionAtIndex(movedChild: Interaction, newIndex: number) {
        this._flowDefinition.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._flowDefinition = new RequiredMultiContainmentValueManager<Interaction>(sysmlBase.INSTANCE.FlowUsage_flowDefinition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.FlowUsage_flowDefinition.key) {
            return this._flowDefinition;
        }
        return super.getContainmentValueManager(containment);
    }
}

export abstract class LoopActionUsage extends ActionUsage {

    private readonly _bodyAction: RequiredMultiContainmentValueManager<ActionUsage>;
    get bodyAction(): ActionUsage[] {
        return this._bodyAction.get();
    }
    addBodyAction(newValue: ActionUsage) {
        this._bodyAction.add(newValue);
    }
    removeBodyAction(valueToRemove: ActionUsage) {
        this._bodyAction.remove(valueToRemove);
    }
    addBodyActionAtIndex(newValue: ActionUsage, index: number) {
        this._bodyAction.insertAtIndex(newValue, index);
    }
    moveBodyAction(oldIndex: number, newIndex: number) {
        this._bodyAction.move(oldIndex, newIndex);
    }
    replaceBodyActionAtIndex(movedChild: ActionUsage, newIndex: number) {
        this._bodyAction.replaceAtIndex(movedChild, newIndex);
    }

    protected constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._bodyAction = new RequiredMultiContainmentValueManager<ActionUsage>(sysmlBase.INSTANCE.LoopActionUsage_bodyAction, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.LoopActionUsage_bodyAction.key) {
            return this._bodyAction;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class ForLoopActionUsage extends LoopActionUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ForLoopActionUsage {
        return new ForLoopActionUsage(sysmlBase.INSTANCE.ForLoopActionUsage, id, receiveDelta, parentInfo);
    }

    private readonly _seqArgument: RequiredMultiContainmentValueManager<Expression>;
    get seqArgument(): Expression[] {
        return this._seqArgument.get();
    }
    addSeqArgument(newValue: Expression) {
        this._seqArgument.add(newValue);
    }
    removeSeqArgument(valueToRemove: Expression) {
        this._seqArgument.remove(valueToRemove);
    }
    addSeqArgumentAtIndex(newValue: Expression, index: number) {
        this._seqArgument.insertAtIndex(newValue, index);
    }
    moveSeqArgument(oldIndex: number, newIndex: number) {
        this._seqArgument.move(oldIndex, newIndex);
    }
    replaceSeqArgumentAtIndex(movedChild: Expression, newIndex: number) {
        this._seqArgument.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _loopVariable: RequiredMultiContainmentValueManager<ReferenceUsage>;
    get loopVariable(): ReferenceUsage[] {
        return this._loopVariable.get();
    }
    addLoopVariable(newValue: ReferenceUsage) {
        this._loopVariable.add(newValue);
    }
    removeLoopVariable(valueToRemove: ReferenceUsage) {
        this._loopVariable.remove(valueToRemove);
    }
    addLoopVariableAtIndex(newValue: ReferenceUsage, index: number) {
        this._loopVariable.insertAtIndex(newValue, index);
    }
    moveLoopVariable(oldIndex: number, newIndex: number) {
        this._loopVariable.move(oldIndex, newIndex);
    }
    replaceLoopVariableAtIndex(movedChild: ReferenceUsage, newIndex: number) {
        this._loopVariable.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._seqArgument = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.ForLoopActionUsage_seqArgument, this);
        this._loopVariable = new RequiredMultiContainmentValueManager<ReferenceUsage>(sysmlBase.INSTANCE.ForLoopActionUsage_loopVariable, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.ForLoopActionUsage_seqArgument.key: return this._seqArgument;
            case sysmlBase.INSTANCE.ForLoopActionUsage_loopVariable.key: return this._loopVariable;
            default: return super.getContainmentValueManager(containment);
        }
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

    private readonly _kind: RequiredPropertyValueManager<RequirementConstraintKind>;
    get kind(): RequirementConstraintKind {
        return this._kind.get();
    }
    set kind(newValue: RequirementConstraintKind) {
        this._kind.set(newValue);
    }

    private readonly _ownedConstraint: RequiredMultiContainmentValueManager<ConstraintUsage>;
    get ownedConstraint(): ConstraintUsage[] {
        return this._ownedConstraint.get();
    }
    addOwnedConstraint(newValue: ConstraintUsage) {
        this._ownedConstraint.add(newValue);
    }
    removeOwnedConstraint(valueToRemove: ConstraintUsage) {
        this._ownedConstraint.remove(valueToRemove);
    }
    addOwnedConstraintAtIndex(newValue: ConstraintUsage, index: number) {
        this._ownedConstraint.insertAtIndex(newValue, index);
    }
    moveOwnedConstraint(oldIndex: number, newIndex: number) {
        this._ownedConstraint.move(oldIndex, newIndex);
    }
    replaceOwnedConstraintAtIndex(movedChild: ConstraintUsage, newIndex: number) {
        this._ownedConstraint.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _referencedConstraint: RequiredMultiContainmentValueManager<ConstraintUsage>;
    get referencedConstraint(): ConstraintUsage[] {
        return this._referencedConstraint.get();
    }
    addReferencedConstraint(newValue: ConstraintUsage) {
        this._referencedConstraint.add(newValue);
    }
    removeReferencedConstraint(valueToRemove: ConstraintUsage) {
        this._referencedConstraint.remove(valueToRemove);
    }
    addReferencedConstraintAtIndex(newValue: ConstraintUsage, index: number) {
        this._referencedConstraint.insertAtIndex(newValue, index);
    }
    moveReferencedConstraint(oldIndex: number, newIndex: number) {
        this._referencedConstraint.move(oldIndex, newIndex);
    }
    replaceReferencedConstraintAtIndex(movedChild: ConstraintUsage, newIndex: number) {
        this._referencedConstraint.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._kind = new RequiredPropertyValueManager<RequirementConstraintKind>(sysmlBase.INSTANCE.RequirementConstraintMembership_kind, this);
        this._ownedConstraint = new RequiredMultiContainmentValueManager<ConstraintUsage>(sysmlBase.INSTANCE.RequirementConstraintMembership_ownedConstraint, this);
        this._referencedConstraint = new RequiredMultiContainmentValueManager<ConstraintUsage>(sysmlBase.INSTANCE.RequirementConstraintMembership_referencedConstraint, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === sysmlBase.INSTANCE.RequirementConstraintMembership_kind.key) {
            return this._kind;
        }
        return super.getPropertyValueManager(property);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.RequirementConstraintMembership_ownedConstraint.key: return this._ownedConstraint;
            case sysmlBase.INSTANCE.RequirementConstraintMembership_referencedConstraint.key: return this._referencedConstraint;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class FramedConcernMembership extends RequirementConstraintMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): FramedConcernMembership {
        return new FramedConcernMembership(sysmlBase.INSTANCE.FramedConcernMembership, id, receiveDelta, parentInfo);
    }

    private readonly _ownedConcern: RequiredMultiContainmentValueManager<ConcernUsage>;
    get ownedConcern(): ConcernUsage[] {
        return this._ownedConcern.get();
    }
    addOwnedConcern(newValue: ConcernUsage) {
        this._ownedConcern.add(newValue);
    }
    removeOwnedConcern(valueToRemove: ConcernUsage) {
        this._ownedConcern.remove(valueToRemove);
    }
    addOwnedConcernAtIndex(newValue: ConcernUsage, index: number) {
        this._ownedConcern.insertAtIndex(newValue, index);
    }
    moveOwnedConcern(oldIndex: number, newIndex: number) {
        this._ownedConcern.move(oldIndex, newIndex);
    }
    replaceOwnedConcernAtIndex(movedChild: ConcernUsage, newIndex: number) {
        this._ownedConcern.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _referencedConcern: RequiredMultiContainmentValueManager<ConcernUsage>;
    get referencedConcern(): ConcernUsage[] {
        return this._referencedConcern.get();
    }
    addReferencedConcern(newValue: ConcernUsage) {
        this._referencedConcern.add(newValue);
    }
    removeReferencedConcern(valueToRemove: ConcernUsage) {
        this._referencedConcern.remove(valueToRemove);
    }
    addReferencedConcernAtIndex(newValue: ConcernUsage, index: number) {
        this._referencedConcern.insertAtIndex(newValue, index);
    }
    moveReferencedConcern(oldIndex: number, newIndex: number) {
        this._referencedConcern.move(oldIndex, newIndex);
    }
    replaceReferencedConcernAtIndex(movedChild: ConcernUsage, newIndex: number) {
        this._referencedConcern.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._ownedConcern = new RequiredMultiContainmentValueManager<ConcernUsage>(sysmlBase.INSTANCE.FramedConcernMembership_ownedConcern, this);
        this._referencedConcern = new RequiredMultiContainmentValueManager<ConcernUsage>(sysmlBase.INSTANCE.FramedConcernMembership_referencedConcern, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.FramedConcernMembership_ownedConcern.key: return this._ownedConcern;
            case sysmlBase.INSTANCE.FramedConcernMembership_referencedConcern.key: return this._referencedConcern;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Function extends Behavior {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Function {
        return new Function(sysmlBase.INSTANCE.Function, id, receiveDelta, parentInfo);
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

    private readonly _isModelLevelEvaluable: RequiredPropertyValueManager<boolean>;
    get isModelLevelEvaluable(): boolean {
        return this._isModelLevelEvaluable.get();
    }
    set isModelLevelEvaluable(newValue: boolean) {
        this._isModelLevelEvaluable.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._expression = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.Function_expression, this);
        this._result = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Function_result, this);
        this._isModelLevelEvaluable = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.Function_isModelLevelEvaluable, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === sysmlBase.INSTANCE.Function_isModelLevelEvaluable.key) {
            return this._isModelLevelEvaluable;
        }
        return super.getPropertyValueManager(property);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Function_expression.key: return this._expression;
            case sysmlBase.INSTANCE.Function_result.key: return this._result;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class IfActionUsage extends ActionUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): IfActionUsage {
        return new IfActionUsage(sysmlBase.INSTANCE.IfActionUsage, id, receiveDelta, parentInfo);
    }

    private readonly _elseAction: RequiredMultiContainmentValueManager<ActionUsage>;
    get elseAction(): ActionUsage[] {
        return this._elseAction.get();
    }
    addElseAction(newValue: ActionUsage) {
        this._elseAction.add(newValue);
    }
    removeElseAction(valueToRemove: ActionUsage) {
        this._elseAction.remove(valueToRemove);
    }
    addElseActionAtIndex(newValue: ActionUsage, index: number) {
        this._elseAction.insertAtIndex(newValue, index);
    }
    moveElseAction(oldIndex: number, newIndex: number) {
        this._elseAction.move(oldIndex, newIndex);
    }
    replaceElseActionAtIndex(movedChild: ActionUsage, newIndex: number) {
        this._elseAction.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _thenAction: RequiredMultiContainmentValueManager<ActionUsage>;
    get thenAction(): ActionUsage[] {
        return this._thenAction.get();
    }
    addThenAction(newValue: ActionUsage) {
        this._thenAction.add(newValue);
    }
    removeThenAction(valueToRemove: ActionUsage) {
        this._thenAction.remove(valueToRemove);
    }
    addThenActionAtIndex(newValue: ActionUsage, index: number) {
        this._thenAction.insertAtIndex(newValue, index);
    }
    moveThenAction(oldIndex: number, newIndex: number) {
        this._thenAction.move(oldIndex, newIndex);
    }
    replaceThenActionAtIndex(movedChild: ActionUsage, newIndex: number) {
        this._thenAction.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _ifArgument: RequiredMultiContainmentValueManager<Expression>;
    get ifArgument(): Expression[] {
        return this._ifArgument.get();
    }
    addIfArgument(newValue: Expression) {
        this._ifArgument.add(newValue);
    }
    removeIfArgument(valueToRemove: Expression) {
        this._ifArgument.remove(valueToRemove);
    }
    addIfArgumentAtIndex(newValue: Expression, index: number) {
        this._ifArgument.insertAtIndex(newValue, index);
    }
    moveIfArgument(oldIndex: number, newIndex: number) {
        this._ifArgument.move(oldIndex, newIndex);
    }
    replaceIfArgumentAtIndex(movedChild: Expression, newIndex: number) {
        this._ifArgument.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._elseAction = new RequiredMultiContainmentValueManager<ActionUsage>(sysmlBase.INSTANCE.IfActionUsage_elseAction, this);
        this._thenAction = new RequiredMultiContainmentValueManager<ActionUsage>(sysmlBase.INSTANCE.IfActionUsage_thenAction, this);
        this._ifArgument = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.IfActionUsage_ifArgument, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.IfActionUsage_elseAction.key: return this._elseAction;
            case sysmlBase.INSTANCE.IfActionUsage_thenAction.key: return this._thenAction;
            case sysmlBase.INSTANCE.IfActionUsage_ifArgument.key: return this._ifArgument;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class UseCaseUsage extends CaseUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): UseCaseUsage {
        return new UseCaseUsage(sysmlBase.INSTANCE.UseCaseUsage, id, receiveDelta, parentInfo);
    }

    private readonly _useCaseDefinition: RequiredMultiContainmentValueManager<UseCaseDefinition>;
    get useCaseDefinition(): UseCaseDefinition[] {
        return this._useCaseDefinition.get();
    }
    addUseCaseDefinition(newValue: UseCaseDefinition) {
        this._useCaseDefinition.add(newValue);
    }
    removeUseCaseDefinition(valueToRemove: UseCaseDefinition) {
        this._useCaseDefinition.remove(valueToRemove);
    }
    addUseCaseDefinitionAtIndex(newValue: UseCaseDefinition, index: number) {
        this._useCaseDefinition.insertAtIndex(newValue, index);
    }
    moveUseCaseDefinition(oldIndex: number, newIndex: number) {
        this._useCaseDefinition.move(oldIndex, newIndex);
    }
    replaceUseCaseDefinitionAtIndex(movedChild: UseCaseDefinition, newIndex: number) {
        this._useCaseDefinition.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _includedUseCase: RequiredMultiContainmentValueManager<UseCaseUsage>;
    get includedUseCase(): UseCaseUsage[] {
        return this._includedUseCase.get();
    }
    addIncludedUseCase(newValue: UseCaseUsage) {
        this._includedUseCase.add(newValue);
    }
    removeIncludedUseCase(valueToRemove: UseCaseUsage) {
        this._includedUseCase.remove(valueToRemove);
    }
    addIncludedUseCaseAtIndex(newValue: UseCaseUsage, index: number) {
        this._includedUseCase.insertAtIndex(newValue, index);
    }
    moveIncludedUseCase(oldIndex: number, newIndex: number) {
        this._includedUseCase.move(oldIndex, newIndex);
    }
    replaceIncludedUseCaseAtIndex(movedChild: UseCaseUsage, newIndex: number) {
        this._includedUseCase.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._useCaseDefinition = new RequiredMultiContainmentValueManager<UseCaseDefinition>(sysmlBase.INSTANCE.UseCaseUsage_useCaseDefinition, this);
        this._includedUseCase = new RequiredMultiContainmentValueManager<UseCaseUsage>(sysmlBase.INSTANCE.UseCaseUsage_includedUseCase, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.UseCaseUsage_useCaseDefinition.key: return this._useCaseDefinition;
            case sysmlBase.INSTANCE.UseCaseUsage_includedUseCase.key: return this._includedUseCase;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class IncludeUseCaseUsage extends UseCaseUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): IncludeUseCaseUsage {
        return new IncludeUseCaseUsage(sysmlBase.INSTANCE.IncludeUseCaseUsage, id, receiveDelta, parentInfo);
    }

    private readonly _useCaseIncluded: RequiredMultiContainmentValueManager<UseCaseUsage>;
    get useCaseIncluded(): UseCaseUsage[] {
        return this._useCaseIncluded.get();
    }
    addUseCaseIncluded(newValue: UseCaseUsage) {
        this._useCaseIncluded.add(newValue);
    }
    removeUseCaseIncluded(valueToRemove: UseCaseUsage) {
        this._useCaseIncluded.remove(valueToRemove);
    }
    addUseCaseIncludedAtIndex(newValue: UseCaseUsage, index: number) {
        this._useCaseIncluded.insertAtIndex(newValue, index);
    }
    moveUseCaseIncluded(oldIndex: number, newIndex: number) {
        this._useCaseIncluded.move(oldIndex, newIndex);
    }
    replaceUseCaseIncludedAtIndex(movedChild: UseCaseUsage, newIndex: number) {
        this._useCaseIncluded.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._useCaseIncluded = new RequiredMultiContainmentValueManager<UseCaseUsage>(sysmlBase.INSTANCE.IncludeUseCaseUsage_useCaseIncluded, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.IncludeUseCaseUsage_useCaseIncluded.key) {
            return this._useCaseIncluded;
        }
        return super.getContainmentValueManager(containment);
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

    private readonly _interfaceEnd: RequiredMultiContainmentValueManager<PortUsage>;
    get interfaceEnd(): PortUsage[] {
        return this._interfaceEnd.get();
    }
    addInterfaceEnd(newValue: PortUsage) {
        this._interfaceEnd.add(newValue);
    }
    removeInterfaceEnd(valueToRemove: PortUsage) {
        this._interfaceEnd.remove(valueToRemove);
    }
    addInterfaceEndAtIndex(newValue: PortUsage, index: number) {
        this._interfaceEnd.insertAtIndex(newValue, index);
    }
    moveInterfaceEnd(oldIndex: number, newIndex: number) {
        this._interfaceEnd.move(oldIndex, newIndex);
    }
    replaceInterfaceEndAtIndex(movedChild: PortUsage, newIndex: number) {
        this._interfaceEnd.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._interfaceEnd = new RequiredMultiContainmentValueManager<PortUsage>(sysmlBase.INSTANCE.InterfaceDefinition_interfaceEnd, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.InterfaceDefinition_interfaceEnd.key) {
            return this._interfaceEnd;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class InterfaceUsage extends ConnectionUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): InterfaceUsage {
        return new InterfaceUsage(sysmlBase.INSTANCE.InterfaceUsage, id, receiveDelta, parentInfo);
    }

    private readonly _interfaceDefinition: RequiredMultiContainmentValueManager<InterfaceDefinition>;
    get interfaceDefinition(): InterfaceDefinition[] {
        return this._interfaceDefinition.get();
    }
    addInterfaceDefinition(newValue: InterfaceDefinition) {
        this._interfaceDefinition.add(newValue);
    }
    removeInterfaceDefinition(valueToRemove: InterfaceDefinition) {
        this._interfaceDefinition.remove(valueToRemove);
    }
    addInterfaceDefinitionAtIndex(newValue: InterfaceDefinition, index: number) {
        this._interfaceDefinition.insertAtIndex(newValue, index);
    }
    moveInterfaceDefinition(oldIndex: number, newIndex: number) {
        this._interfaceDefinition.move(oldIndex, newIndex);
    }
    replaceInterfaceDefinitionAtIndex(movedChild: InterfaceDefinition, newIndex: number) {
        this._interfaceDefinition.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._interfaceDefinition = new RequiredMultiContainmentValueManager<InterfaceDefinition>(sysmlBase.INSTANCE.InterfaceUsage_interfaceDefinition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.InterfaceUsage_interfaceDefinition.key) {
            return this._interfaceDefinition;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class Intersecting extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Intersecting {
        return new Intersecting(sysmlBase.INSTANCE.Intersecting, id, receiveDelta, parentInfo);
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
        this._intersectingType = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Intersecting_intersectingType, this);
        this._typeIntersected = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Intersecting_typeIntersected, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Intersecting_intersectingType.key: return this._intersectingType;
            case sysmlBase.INSTANCE.Intersecting_typeIntersected.key: return this._typeIntersected;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Invariant extends BooleanExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Invariant {
        return new Invariant(sysmlBase.INSTANCE.Invariant, id, receiveDelta, parentInfo);
    }

    private readonly _isNegated: RequiredPropertyValueManager<boolean>;
    get isNegated(): boolean {
        return this._isNegated.get();
    }
    set isNegated(newValue: boolean) {
        this._isNegated.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._isNegated = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.Invariant_isNegated, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === sysmlBase.INSTANCE.Invariant_isNegated.key) {
            return this._isNegated;
        }
        return super.getPropertyValueManager(property);
    }
}

export class ItemUsage extends OccurrenceUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ItemUsage {
        return new ItemUsage(sysmlBase.INSTANCE.ItemUsage, id, receiveDelta, parentInfo);
    }

    private readonly _itemDefinition: RequiredMultiContainmentValueManager<Structure>;
    get itemDefinition(): Structure[] {
        return this._itemDefinition.get();
    }
    addItemDefinition(newValue: Structure) {
        this._itemDefinition.add(newValue);
    }
    removeItemDefinition(valueToRemove: Structure) {
        this._itemDefinition.remove(valueToRemove);
    }
    addItemDefinitionAtIndex(newValue: Structure, index: number) {
        this._itemDefinition.insertAtIndex(newValue, index);
    }
    moveItemDefinition(oldIndex: number, newIndex: number) {
        this._itemDefinition.move(oldIndex, newIndex);
    }
    replaceItemDefinitionAtIndex(movedChild: Structure, newIndex: number) {
        this._itemDefinition.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._itemDefinition = new RequiredMultiContainmentValueManager<Structure>(sysmlBase.INSTANCE.ItemUsage_itemDefinition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.ItemUsage_itemDefinition.key) {
            return this._itemDefinition;
        }
        return super.getContainmentValueManager(containment);
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
        this._filterCondition = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.Package_filterCondition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.Package_filterCondition.key) {
            return this._filterCondition;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class LibraryPackage extends Package {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): LibraryPackage {
        return new LibraryPackage(sysmlBase.INSTANCE.LibraryPackage, id, receiveDelta, parentInfo);
    }

    private readonly _isStandard: RequiredPropertyValueManager<boolean>;
    get isStandard(): boolean {
        return this._isStandard.get();
    }
    set isStandard(newValue: boolean) {
        this._isStandard.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._isStandard = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.LibraryPackage_isStandard, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === sysmlBase.INSTANCE.LibraryPackage_isStandard.key) {
            return this._isStandard;
        }
        return super.getPropertyValueManager(property);
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

    private readonly _value: RequiredPropertyValueManager<boolean>;
    get value(): boolean {
        return this._value.get();
    }
    set value(newValue: boolean) {
        this._value.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._value = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.LiteralBoolean_value, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === sysmlBase.INSTANCE.LiteralBoolean_value.key) {
            return this._value;
        }
        return super.getPropertyValueManager(property);
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

    private readonly _value: RequiredPropertyValueManager<string>;
    get value(): string {
        return this._value.get();
    }
    set value(newValue: string) {
        this._value.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._value = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.LiteralInteger_value, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === sysmlBase.INSTANCE.LiteralInteger_value.key) {
            return this._value;
        }
        return super.getPropertyValueManager(property);
    }
}

export class LiteralRational extends LiteralExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): LiteralRational {
        return new LiteralRational(sysmlBase.INSTANCE.LiteralRational, id, receiveDelta, parentInfo);
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
        this._value = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.LiteralRational_value, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === sysmlBase.INSTANCE.LiteralRational_value.key) {
            return this._value;
        }
        return super.getPropertyValueManager(property);
    }
}

export class LiteralString extends LiteralExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): LiteralString {
        return new LiteralString(sysmlBase.INSTANCE.LiteralString, id, receiveDelta, parentInfo);
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
        this._value = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.LiteralString_value, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === sysmlBase.INSTANCE.LiteralString_value.key) {
            return this._value;
        }
        return super.getPropertyValueManager(property);
    }
}

export class MembershipImport extends Import {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): MembershipImport {
        return new MembershipImport(sysmlBase.INSTANCE.MembershipImport, id, receiveDelta, parentInfo);
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
        this._importedMembership = new RequiredMultiContainmentValueManager<Membership>(sysmlBase.INSTANCE.MembershipImport_importedMembership, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.MembershipImport_importedMembership.key) {
            return this._importedMembership;
        }
        return super.getContainmentValueManager(containment);
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
        this._referencedElement = new RequiredMultiContainmentValueManager<Element>(sysmlBase.INSTANCE.MetadataAccessExpression_referencedElement, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.MetadataAccessExpression_referencedElement.key) {
            return this._referencedElement;
        }
        return super.getContainmentValueManager(containment);
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
        this._metaclass = new RequiredMultiContainmentValueManager<Metaclass>(sysmlBase.INSTANCE.MetadataFeature_metaclass, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.MetadataFeature_metaclass.key) {
            return this._metaclass;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class MetadataUsage extends ItemUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): MetadataUsage {
        return new MetadataUsage(sysmlBase.INSTANCE.MetadataUsage, id, receiveDelta, parentInfo);
    }

    private readonly _metadataDefinition: RequiredMultiContainmentValueManager<Metaclass>;
    get metadataDefinition(): Metaclass[] {
        return this._metadataDefinition.get();
    }
    addMetadataDefinition(newValue: Metaclass) {
        this._metadataDefinition.add(newValue);
    }
    removeMetadataDefinition(valueToRemove: Metaclass) {
        this._metadataDefinition.remove(valueToRemove);
    }
    addMetadataDefinitionAtIndex(newValue: Metaclass, index: number) {
        this._metadataDefinition.insertAtIndex(newValue, index);
    }
    moveMetadataDefinition(oldIndex: number, newIndex: number) {
        this._metadataDefinition.move(oldIndex, newIndex);
    }
    replaceMetadataDefinitionAtIndex(movedChild: Metaclass, newIndex: number) {
        this._metadataDefinition.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._metadataDefinition = new RequiredMultiContainmentValueManager<Metaclass>(sysmlBase.INSTANCE.MetadataUsage_metadataDefinition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.MetadataUsage_metadataDefinition.key) {
            return this._metadataDefinition;
        }
        return super.getContainmentValueManager(containment);
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
        this._lowerBound = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.MultiplicityRange_lowerBound, this);
        this._upperBound = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.MultiplicityRange_upperBound, this);
        this._bound = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.MultiplicityRange_bound, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.MultiplicityRange_lowerBound.key: return this._lowerBound;
            case sysmlBase.INSTANCE.MultiplicityRange_upperBound.key: return this._upperBound;
            case sysmlBase.INSTANCE.MultiplicityRange_bound.key: return this._bound;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class NamespaceImport extends Import {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): NamespaceImport {
        return new NamespaceImport(sysmlBase.INSTANCE.NamespaceImport, id, receiveDelta, parentInfo);
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
        this._importedNamespace = new RequiredMultiContainmentValueManager<Namespace>(sysmlBase.INSTANCE.NamespaceImport_importedNamespace, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.NamespaceImport_importedNamespace.key) {
            return this._importedNamespace;
        }
        return super.getContainmentValueManager(containment);
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

    private readonly _ownedObjectiveRequirement: RequiredMultiContainmentValueManager<RequirementUsage>;
    get ownedObjectiveRequirement(): RequirementUsage[] {
        return this._ownedObjectiveRequirement.get();
    }
    addOwnedObjectiveRequirement(newValue: RequirementUsage) {
        this._ownedObjectiveRequirement.add(newValue);
    }
    removeOwnedObjectiveRequirement(valueToRemove: RequirementUsage) {
        this._ownedObjectiveRequirement.remove(valueToRemove);
    }
    addOwnedObjectiveRequirementAtIndex(newValue: RequirementUsage, index: number) {
        this._ownedObjectiveRequirement.insertAtIndex(newValue, index);
    }
    moveOwnedObjectiveRequirement(oldIndex: number, newIndex: number) {
        this._ownedObjectiveRequirement.move(oldIndex, newIndex);
    }
    replaceOwnedObjectiveRequirementAtIndex(movedChild: RequirementUsage, newIndex: number) {
        this._ownedObjectiveRequirement.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._ownedObjectiveRequirement = new RequiredMultiContainmentValueManager<RequirementUsage>(sysmlBase.INSTANCE.ObjectiveMembership_ownedObjectiveRequirement, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.ObjectiveMembership_ownedObjectiveRequirement.key) {
            return this._ownedObjectiveRequirement;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class PartUsage extends ItemUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): PartUsage {
        return new PartUsage(sysmlBase.INSTANCE.PartUsage, id, receiveDelta, parentInfo);
    }

    private readonly _partDefinition: RequiredMultiContainmentValueManager<PartDefinition>;
    get partDefinition(): PartDefinition[] {
        return this._partDefinition.get();
    }
    addPartDefinition(newValue: PartDefinition) {
        this._partDefinition.add(newValue);
    }
    removePartDefinition(valueToRemove: PartDefinition) {
        this._partDefinition.remove(valueToRemove);
    }
    addPartDefinitionAtIndex(newValue: PartDefinition, index: number) {
        this._partDefinition.insertAtIndex(newValue, index);
    }
    movePartDefinition(oldIndex: number, newIndex: number) {
        this._partDefinition.move(oldIndex, newIndex);
    }
    replacePartDefinitionAtIndex(movedChild: PartDefinition, newIndex: number) {
        this._partDefinition.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._partDefinition = new RequiredMultiContainmentValueManager<PartDefinition>(sysmlBase.INSTANCE.PartUsage_partDefinition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.PartUsage_partDefinition.key) {
            return this._partDefinition;
        }
        return super.getContainmentValueManager(containment);
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

    private readonly _performedAction: RequiredMultiContainmentValueManager<ActionUsage>;
    get performedAction(): ActionUsage[] {
        return this._performedAction.get();
    }
    addPerformedAction(newValue: ActionUsage) {
        this._performedAction.add(newValue);
    }
    removePerformedAction(valueToRemove: ActionUsage) {
        this._performedAction.remove(valueToRemove);
    }
    addPerformedActionAtIndex(newValue: ActionUsage, index: number) {
        this._performedAction.insertAtIndex(newValue, index);
    }
    movePerformedAction(oldIndex: number, newIndex: number) {
        this._performedAction.move(oldIndex, newIndex);
    }
    replacePerformedActionAtIndex(movedChild: ActionUsage, newIndex: number) {
        this._performedAction.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._performedAction = new RequiredMultiContainmentValueManager<ActionUsage>(sysmlBase.INSTANCE.PerformActionUsage_performedAction, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.PerformActionUsage_performedAction.key) {
            return this._performedAction;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class PortConjugation extends Conjugation {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): PortConjugation {
        return new PortConjugation(sysmlBase.INSTANCE.PortConjugation, id, receiveDelta, parentInfo);
    }

    private readonly _originalPortDefinition: RequiredMultiContainmentValueManager<PortDefinition>;
    get originalPortDefinition(): PortDefinition[] {
        return this._originalPortDefinition.get();
    }
    addOriginalPortDefinition(newValue: PortDefinition) {
        this._originalPortDefinition.add(newValue);
    }
    removeOriginalPortDefinition(valueToRemove: PortDefinition) {
        this._originalPortDefinition.remove(valueToRemove);
    }
    addOriginalPortDefinitionAtIndex(newValue: PortDefinition, index: number) {
        this._originalPortDefinition.insertAtIndex(newValue, index);
    }
    moveOriginalPortDefinition(oldIndex: number, newIndex: number) {
        this._originalPortDefinition.move(oldIndex, newIndex);
    }
    replaceOriginalPortDefinitionAtIndex(movedChild: PortDefinition, newIndex: number) {
        this._originalPortDefinition.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _conjugatedPortDefinition: RequiredMultiContainmentValueManager<ConjugatedPortDefinition>;
    get conjugatedPortDefinition(): ConjugatedPortDefinition[] {
        return this._conjugatedPortDefinition.get();
    }
    addConjugatedPortDefinition(newValue: ConjugatedPortDefinition) {
        this._conjugatedPortDefinition.add(newValue);
    }
    removeConjugatedPortDefinition(valueToRemove: ConjugatedPortDefinition) {
        this._conjugatedPortDefinition.remove(valueToRemove);
    }
    addConjugatedPortDefinitionAtIndex(newValue: ConjugatedPortDefinition, index: number) {
        this._conjugatedPortDefinition.insertAtIndex(newValue, index);
    }
    moveConjugatedPortDefinition(oldIndex: number, newIndex: number) {
        this._conjugatedPortDefinition.move(oldIndex, newIndex);
    }
    replaceConjugatedPortDefinitionAtIndex(movedChild: ConjugatedPortDefinition, newIndex: number) {
        this._conjugatedPortDefinition.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._originalPortDefinition = new RequiredMultiContainmentValueManager<PortDefinition>(sysmlBase.INSTANCE.PortConjugation_originalPortDefinition, this);
        this._conjugatedPortDefinition = new RequiredMultiContainmentValueManager<ConjugatedPortDefinition>(sysmlBase.INSTANCE.PortConjugation_conjugatedPortDefinition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.PortConjugation_originalPortDefinition.key: return this._originalPortDefinition;
            case sysmlBase.INSTANCE.PortConjugation_conjugatedPortDefinition.key: return this._conjugatedPortDefinition;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class PortUsage extends OccurrenceUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): PortUsage {
        return new PortUsage(sysmlBase.INSTANCE.PortUsage, id, receiveDelta, parentInfo);
    }

    private readonly _portDefinition: RequiredMultiContainmentValueManager<PortDefinition>;
    get portDefinition(): PortDefinition[] {
        return this._portDefinition.get();
    }
    addPortDefinition(newValue: PortDefinition) {
        this._portDefinition.add(newValue);
    }
    removePortDefinition(valueToRemove: PortDefinition) {
        this._portDefinition.remove(valueToRemove);
    }
    addPortDefinitionAtIndex(newValue: PortDefinition, index: number) {
        this._portDefinition.insertAtIndex(newValue, index);
    }
    movePortDefinition(oldIndex: number, newIndex: number) {
        this._portDefinition.move(oldIndex, newIndex);
    }
    replacePortDefinitionAtIndex(movedChild: PortDefinition, newIndex: number) {
        this._portDefinition.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._portDefinition = new RequiredMultiContainmentValueManager<PortDefinition>(sysmlBase.INSTANCE.PortUsage_portDefinition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.PortUsage_portDefinition.key) {
            return this._portDefinition;
        }
        return super.getContainmentValueManager(containment);
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
        this._redefiningFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Redefinition_redefiningFeature, this);
        this._redefinedFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.Redefinition_redefinedFeature, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Redefinition_redefiningFeature.key: return this._redefiningFeature;
            case sysmlBase.INSTANCE.Redefinition_redefinedFeature.key: return this._redefinedFeature;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class ReferenceSubsetting extends Subsetting {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ReferenceSubsetting {
        return new ReferenceSubsetting(sysmlBase.INSTANCE.ReferenceSubsetting, id, receiveDelta, parentInfo);
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
        this._referencedFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.ReferenceSubsetting_referencedFeature, this);
        this._referencingFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.ReferenceSubsetting_referencingFeature, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.ReferenceSubsetting_referencedFeature.key: return this._referencedFeature;
            case sysmlBase.INSTANCE.ReferenceSubsetting_referencingFeature.key: return this._referencingFeature;
            default: return super.getContainmentValueManager(containment);
        }
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

    private readonly _rendering: RequiredMultiContainmentValueManager<RenderingUsage>;
    get rendering(): RenderingUsage[] {
        return this._rendering.get();
    }
    addRendering(newValue: RenderingUsage) {
        this._rendering.add(newValue);
    }
    removeRendering(valueToRemove: RenderingUsage) {
        this._rendering.remove(valueToRemove);
    }
    addRenderingAtIndex(newValue: RenderingUsage, index: number) {
        this._rendering.insertAtIndex(newValue, index);
    }
    moveRendering(oldIndex: number, newIndex: number) {
        this._rendering.move(oldIndex, newIndex);
    }
    replaceRenderingAtIndex(movedChild: RenderingUsage, newIndex: number) {
        this._rendering.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._rendering = new RequiredMultiContainmentValueManager<RenderingUsage>(sysmlBase.INSTANCE.RenderingDefinition_rendering, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.RenderingDefinition_rendering.key) {
            return this._rendering;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class RenderingUsage extends PartUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): RenderingUsage {
        return new RenderingUsage(sysmlBase.INSTANCE.RenderingUsage, id, receiveDelta, parentInfo);
    }

    private readonly _renderingDefinition: RequiredMultiContainmentValueManager<RenderingDefinition>;
    get renderingDefinition(): RenderingDefinition[] {
        return this._renderingDefinition.get();
    }
    addRenderingDefinition(newValue: RenderingDefinition) {
        this._renderingDefinition.add(newValue);
    }
    removeRenderingDefinition(valueToRemove: RenderingDefinition) {
        this._renderingDefinition.remove(valueToRemove);
    }
    addRenderingDefinitionAtIndex(newValue: RenderingDefinition, index: number) {
        this._renderingDefinition.insertAtIndex(newValue, index);
    }
    moveRenderingDefinition(oldIndex: number, newIndex: number) {
        this._renderingDefinition.move(oldIndex, newIndex);
    }
    replaceRenderingDefinitionAtIndex(movedChild: RenderingDefinition, newIndex: number) {
        this._renderingDefinition.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._renderingDefinition = new RequiredMultiContainmentValueManager<RenderingDefinition>(sysmlBase.INSTANCE.RenderingUsage_renderingDefinition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.RenderingUsage_renderingDefinition.key) {
            return this._renderingDefinition;
        }
        return super.getContainmentValueManager(containment);
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

    private readonly _ownedRequirement: RequiredMultiContainmentValueManager<RequirementUsage>;
    get ownedRequirement(): RequirementUsage[] {
        return this._ownedRequirement.get();
    }
    addOwnedRequirement(newValue: RequirementUsage) {
        this._ownedRequirement.add(newValue);
    }
    removeOwnedRequirement(valueToRemove: RequirementUsage) {
        this._ownedRequirement.remove(valueToRemove);
    }
    addOwnedRequirementAtIndex(newValue: RequirementUsage, index: number) {
        this._ownedRequirement.insertAtIndex(newValue, index);
    }
    moveOwnedRequirement(oldIndex: number, newIndex: number) {
        this._ownedRequirement.move(oldIndex, newIndex);
    }
    replaceOwnedRequirementAtIndex(movedChild: RequirementUsage, newIndex: number) {
        this._ownedRequirement.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _verifiedRequirement: RequiredMultiContainmentValueManager<RequirementUsage>;
    get verifiedRequirement(): RequirementUsage[] {
        return this._verifiedRequirement.get();
    }
    addVerifiedRequirement(newValue: RequirementUsage) {
        this._verifiedRequirement.add(newValue);
    }
    removeVerifiedRequirement(valueToRemove: RequirementUsage) {
        this._verifiedRequirement.remove(valueToRemove);
    }
    addVerifiedRequirementAtIndex(newValue: RequirementUsage, index: number) {
        this._verifiedRequirement.insertAtIndex(newValue, index);
    }
    moveVerifiedRequirement(oldIndex: number, newIndex: number) {
        this._verifiedRequirement.move(oldIndex, newIndex);
    }
    replaceVerifiedRequirementAtIndex(movedChild: RequirementUsage, newIndex: number) {
        this._verifiedRequirement.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._ownedRequirement = new RequiredMultiContainmentValueManager<RequirementUsage>(sysmlBase.INSTANCE.RequirementVerificationMembership_ownedRequirement, this);
        this._verifiedRequirement = new RequiredMultiContainmentValueManager<RequirementUsage>(sysmlBase.INSTANCE.RequirementVerificationMembership_verifiedRequirement, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.RequirementVerificationMembership_ownedRequirement.key: return this._ownedRequirement;
            case sysmlBase.INSTANCE.RequirementVerificationMembership_verifiedRequirement.key: return this._verifiedRequirement;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class ResultExpressionMembership extends FeatureMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ResultExpressionMembership {
        return new ResultExpressionMembership(sysmlBase.INSTANCE.ResultExpressionMembership, id, receiveDelta, parentInfo);
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
        this._ownedResultExpression = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.ResultExpressionMembership_ownedResultExpression, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.ResultExpressionMembership_ownedResultExpression.key) {
            return this._ownedResultExpression;
        }
        return super.getContainmentValueManager(containment);
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

    private readonly _satisfiedRequirement: RequiredMultiContainmentValueManager<RequirementUsage>;
    get satisfiedRequirement(): RequirementUsage[] {
        return this._satisfiedRequirement.get();
    }
    addSatisfiedRequirement(newValue: RequirementUsage) {
        this._satisfiedRequirement.add(newValue);
    }
    removeSatisfiedRequirement(valueToRemove: RequirementUsage) {
        this._satisfiedRequirement.remove(valueToRemove);
    }
    addSatisfiedRequirementAtIndex(newValue: RequirementUsage, index: number) {
        this._satisfiedRequirement.insertAtIndex(newValue, index);
    }
    moveSatisfiedRequirement(oldIndex: number, newIndex: number) {
        this._satisfiedRequirement.move(oldIndex, newIndex);
    }
    replaceSatisfiedRequirementAtIndex(movedChild: RequirementUsage, newIndex: number) {
        this._satisfiedRequirement.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _satisfyingFeature: RequiredMultiContainmentValueManager<Feature>;
    get satisfyingFeature(): Feature[] {
        return this._satisfyingFeature.get();
    }
    addSatisfyingFeature(newValue: Feature) {
        this._satisfyingFeature.add(newValue);
    }
    removeSatisfyingFeature(valueToRemove: Feature) {
        this._satisfyingFeature.remove(valueToRemove);
    }
    addSatisfyingFeatureAtIndex(newValue: Feature, index: number) {
        this._satisfyingFeature.insertAtIndex(newValue, index);
    }
    moveSatisfyingFeature(oldIndex: number, newIndex: number) {
        this._satisfyingFeature.move(oldIndex, newIndex);
    }
    replaceSatisfyingFeatureAtIndex(movedChild: Feature, newIndex: number) {
        this._satisfyingFeature.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._satisfiedRequirement = new RequiredMultiContainmentValueManager<RequirementUsage>(sysmlBase.INSTANCE.SatisfyRequirementUsage_satisfiedRequirement, this);
        this._satisfyingFeature = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.SatisfyRequirementUsage_satisfyingFeature, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.SatisfyRequirementUsage_satisfiedRequirement.key: return this._satisfiedRequirement;
            case sysmlBase.INSTANCE.SatisfyRequirementUsage_satisfyingFeature.key: return this._satisfyingFeature;
            default: return super.getContainmentValueManager(containment);
        }
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

    private readonly _receiverArgument: RequiredMultiContainmentValueManager<Expression>;
    get receiverArgument(): Expression[] {
        return this._receiverArgument.get();
    }
    addReceiverArgument(newValue: Expression) {
        this._receiverArgument.add(newValue);
    }
    removeReceiverArgument(valueToRemove: Expression) {
        this._receiverArgument.remove(valueToRemove);
    }
    addReceiverArgumentAtIndex(newValue: Expression, index: number) {
        this._receiverArgument.insertAtIndex(newValue, index);
    }
    moveReceiverArgument(oldIndex: number, newIndex: number) {
        this._receiverArgument.move(oldIndex, newIndex);
    }
    replaceReceiverArgumentAtIndex(movedChild: Expression, newIndex: number) {
        this._receiverArgument.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _payloadArgument: RequiredMultiContainmentValueManager<Expression>;
    get payloadArgument(): Expression[] {
        return this._payloadArgument.get();
    }
    addPayloadArgument(newValue: Expression) {
        this._payloadArgument.add(newValue);
    }
    removePayloadArgument(valueToRemove: Expression) {
        this._payloadArgument.remove(valueToRemove);
    }
    addPayloadArgumentAtIndex(newValue: Expression, index: number) {
        this._payloadArgument.insertAtIndex(newValue, index);
    }
    movePayloadArgument(oldIndex: number, newIndex: number) {
        this._payloadArgument.move(oldIndex, newIndex);
    }
    replacePayloadArgumentAtIndex(movedChild: Expression, newIndex: number) {
        this._payloadArgument.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _senderArgument: RequiredMultiContainmentValueManager<Expression>;
    get senderArgument(): Expression[] {
        return this._senderArgument.get();
    }
    addSenderArgument(newValue: Expression) {
        this._senderArgument.add(newValue);
    }
    removeSenderArgument(valueToRemove: Expression) {
        this._senderArgument.remove(valueToRemove);
    }
    addSenderArgumentAtIndex(newValue: Expression, index: number) {
        this._senderArgument.insertAtIndex(newValue, index);
    }
    moveSenderArgument(oldIndex: number, newIndex: number) {
        this._senderArgument.move(oldIndex, newIndex);
    }
    replaceSenderArgumentAtIndex(movedChild: Expression, newIndex: number) {
        this._senderArgument.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._receiverArgument = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.SendActionUsage_receiverArgument, this);
        this._payloadArgument = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.SendActionUsage_payloadArgument, this);
        this._senderArgument = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.SendActionUsage_senderArgument, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.SendActionUsage_receiverArgument.key: return this._receiverArgument;
            case sysmlBase.INSTANCE.SendActionUsage_payloadArgument.key: return this._payloadArgument;
            case sysmlBase.INSTANCE.SendActionUsage_senderArgument.key: return this._senderArgument;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class StakeholderMembership extends ParameterMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): StakeholderMembership {
        return new StakeholderMembership(sysmlBase.INSTANCE.StakeholderMembership, id, receiveDelta, parentInfo);
    }

    private readonly _ownedStakeholderParameter: RequiredMultiContainmentValueManager<PartUsage>;
    get ownedStakeholderParameter(): PartUsage[] {
        return this._ownedStakeholderParameter.get();
    }
    addOwnedStakeholderParameter(newValue: PartUsage) {
        this._ownedStakeholderParameter.add(newValue);
    }
    removeOwnedStakeholderParameter(valueToRemove: PartUsage) {
        this._ownedStakeholderParameter.remove(valueToRemove);
    }
    addOwnedStakeholderParameterAtIndex(newValue: PartUsage, index: number) {
        this._ownedStakeholderParameter.insertAtIndex(newValue, index);
    }
    moveOwnedStakeholderParameter(oldIndex: number, newIndex: number) {
        this._ownedStakeholderParameter.move(oldIndex, newIndex);
    }
    replaceOwnedStakeholderParameterAtIndex(movedChild: PartUsage, newIndex: number) {
        this._ownedStakeholderParameter.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._ownedStakeholderParameter = new RequiredMultiContainmentValueManager<PartUsage>(sysmlBase.INSTANCE.StakeholderMembership_ownedStakeholderParameter, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.StakeholderMembership_ownedStakeholderParameter.key) {
            return this._ownedStakeholderParameter;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class StateDefinition extends ActionDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): StateDefinition {
        return new StateDefinition(sysmlBase.INSTANCE.StateDefinition, id, receiveDelta, parentInfo);
    }

    private readonly _state: RequiredMultiContainmentValueManager<StateUsage>;
    get state(): StateUsage[] {
        return this._state.get();
    }
    addState(newValue: StateUsage) {
        this._state.add(newValue);
    }
    removeState(valueToRemove: StateUsage) {
        this._state.remove(valueToRemove);
    }
    addStateAtIndex(newValue: StateUsage, index: number) {
        this._state.insertAtIndex(newValue, index);
    }
    moveState(oldIndex: number, newIndex: number) {
        this._state.move(oldIndex, newIndex);
    }
    replaceStateAtIndex(movedChild: StateUsage, newIndex: number) {
        this._state.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _entryAction: RequiredMultiContainmentValueManager<ActionUsage>;
    get entryAction(): ActionUsage[] {
        return this._entryAction.get();
    }
    addEntryAction(newValue: ActionUsage) {
        this._entryAction.add(newValue);
    }
    removeEntryAction(valueToRemove: ActionUsage) {
        this._entryAction.remove(valueToRemove);
    }
    addEntryActionAtIndex(newValue: ActionUsage, index: number) {
        this._entryAction.insertAtIndex(newValue, index);
    }
    moveEntryAction(oldIndex: number, newIndex: number) {
        this._entryAction.move(oldIndex, newIndex);
    }
    replaceEntryActionAtIndex(movedChild: ActionUsage, newIndex: number) {
        this._entryAction.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _doAction: RequiredMultiContainmentValueManager<ActionUsage>;
    get doAction(): ActionUsage[] {
        return this._doAction.get();
    }
    addDoAction(newValue: ActionUsage) {
        this._doAction.add(newValue);
    }
    removeDoAction(valueToRemove: ActionUsage) {
        this._doAction.remove(valueToRemove);
    }
    addDoActionAtIndex(newValue: ActionUsage, index: number) {
        this._doAction.insertAtIndex(newValue, index);
    }
    moveDoAction(oldIndex: number, newIndex: number) {
        this._doAction.move(oldIndex, newIndex);
    }
    replaceDoActionAtIndex(movedChild: ActionUsage, newIndex: number) {
        this._doAction.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _exitAction: RequiredMultiContainmentValueManager<ActionUsage>;
    get exitAction(): ActionUsage[] {
        return this._exitAction.get();
    }
    addExitAction(newValue: ActionUsage) {
        this._exitAction.add(newValue);
    }
    removeExitAction(valueToRemove: ActionUsage) {
        this._exitAction.remove(valueToRemove);
    }
    addExitActionAtIndex(newValue: ActionUsage, index: number) {
        this._exitAction.insertAtIndex(newValue, index);
    }
    moveExitAction(oldIndex: number, newIndex: number) {
        this._exitAction.move(oldIndex, newIndex);
    }
    replaceExitActionAtIndex(movedChild: ActionUsage, newIndex: number) {
        this._exitAction.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _isParallel: RequiredPropertyValueManager<boolean>;
    get isParallel(): boolean {
        return this._isParallel.get();
    }
    set isParallel(newValue: boolean) {
        this._isParallel.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._state = new RequiredMultiContainmentValueManager<StateUsage>(sysmlBase.INSTANCE.StateDefinition_state, this);
        this._entryAction = new RequiredMultiContainmentValueManager<ActionUsage>(sysmlBase.INSTANCE.StateDefinition_entryAction, this);
        this._doAction = new RequiredMultiContainmentValueManager<ActionUsage>(sysmlBase.INSTANCE.StateDefinition_doAction, this);
        this._exitAction = new RequiredMultiContainmentValueManager<ActionUsage>(sysmlBase.INSTANCE.StateDefinition_exitAction, this);
        this._isParallel = new RequiredPropertyValueManager<boolean>(sysmlBase.INSTANCE.StateDefinition_isParallel, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === sysmlBase.INSTANCE.StateDefinition_isParallel.key) {
            return this._isParallel;
        }
        return super.getPropertyValueManager(property);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.StateDefinition_state.key: return this._state;
            case sysmlBase.INSTANCE.StateDefinition_entryAction.key: return this._entryAction;
            case sysmlBase.INSTANCE.StateDefinition_doAction.key: return this._doAction;
            case sysmlBase.INSTANCE.StateDefinition_exitAction.key: return this._exitAction;
            default: return super.getContainmentValueManager(containment);
        }
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

    private readonly _kind: RequiredPropertyValueManager<StateSubactionKind>;
    get kind(): StateSubactionKind {
        return this._kind.get();
    }
    set kind(newValue: StateSubactionKind) {
        this._kind.set(newValue);
    }

    private readonly _action: RequiredMultiContainmentValueManager<ActionUsage>;
    get action(): ActionUsage[] {
        return this._action.get();
    }
    addAction(newValue: ActionUsage) {
        this._action.add(newValue);
    }
    removeAction(valueToRemove: ActionUsage) {
        this._action.remove(valueToRemove);
    }
    addActionAtIndex(newValue: ActionUsage, index: number) {
        this._action.insertAtIndex(newValue, index);
    }
    moveAction(oldIndex: number, newIndex: number) {
        this._action.move(oldIndex, newIndex);
    }
    replaceActionAtIndex(movedChild: ActionUsage, newIndex: number) {
        this._action.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._kind = new RequiredPropertyValueManager<StateSubactionKind>(sysmlBase.INSTANCE.StateSubactionMembership_kind, this);
        this._action = new RequiredMultiContainmentValueManager<ActionUsage>(sysmlBase.INSTANCE.StateSubactionMembership_action, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === sysmlBase.INSTANCE.StateSubactionMembership_kind.key) {
            return this._kind;
        }
        return super.getPropertyValueManager(property);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.StateSubactionMembership_action.key) {
            return this._action;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class Subclassification extends Specialization {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Subclassification {
        return new Subclassification(sysmlBase.INSTANCE.Subclassification, id, receiveDelta, parentInfo);
    }

    private readonly _superclassifier: RequiredMultiContainmentValueManager<sysmlClassifier>;
    get superclassifier(): sysmlClassifier[] {
        return this._superclassifier.get();
    }
    addSuperclassifier(newValue: sysmlClassifier) {
        this._superclassifier.add(newValue);
    }
    removeSuperclassifier(valueToRemove: sysmlClassifier) {
        this._superclassifier.remove(valueToRemove);
    }
    addSuperclassifierAtIndex(newValue: sysmlClassifier, index: number) {
        this._superclassifier.insertAtIndex(newValue, index);
    }
    moveSuperclassifier(oldIndex: number, newIndex: number) {
        this._superclassifier.move(oldIndex, newIndex);
    }
    replaceSuperclassifierAtIndex(movedChild: sysmlClassifier, newIndex: number) {
        this._superclassifier.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _subclassifier: RequiredMultiContainmentValueManager<sysmlClassifier>;
    get subclassifier(): sysmlClassifier[] {
        return this._subclassifier.get();
    }
    addSubclassifier(newValue: sysmlClassifier) {
        this._subclassifier.add(newValue);
    }
    removeSubclassifier(valueToRemove: sysmlClassifier) {
        this._subclassifier.remove(valueToRemove);
    }
    addSubclassifierAtIndex(newValue: sysmlClassifier, index: number) {
        this._subclassifier.insertAtIndex(newValue, index);
    }
    moveSubclassifier(oldIndex: number, newIndex: number) {
        this._subclassifier.move(oldIndex, newIndex);
    }
    replaceSubclassifierAtIndex(movedChild: sysmlClassifier, newIndex: number) {
        this._subclassifier.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _owningClassifier: RequiredMultiContainmentValueManager<sysmlClassifier>;
    get owningClassifier(): sysmlClassifier[] {
        return this._owningClassifier.get();
    }
    addOwningClassifier(newValue: sysmlClassifier) {
        this._owningClassifier.add(newValue);
    }
    removeOwningClassifier(valueToRemove: sysmlClassifier) {
        this._owningClassifier.remove(valueToRemove);
    }
    addOwningClassifierAtIndex(newValue: sysmlClassifier, index: number) {
        this._owningClassifier.insertAtIndex(newValue, index);
    }
    moveOwningClassifier(oldIndex: number, newIndex: number) {
        this._owningClassifier.move(oldIndex, newIndex);
    }
    replaceOwningClassifierAtIndex(movedChild: sysmlClassifier, newIndex: number) {
        this._owningClassifier.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._superclassifier = new RequiredMultiContainmentValueManager<sysmlClassifier>(sysmlBase.INSTANCE.Subclassification_superclassifier, this);
        this._subclassifier = new RequiredMultiContainmentValueManager<sysmlClassifier>(sysmlBase.INSTANCE.Subclassification_subclassifier, this);
        this._owningClassifier = new RequiredMultiContainmentValueManager<sysmlClassifier>(sysmlBase.INSTANCE.Subclassification_owningClassifier, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Subclassification_superclassifier.key: return this._superclassifier;
            case sysmlBase.INSTANCE.Subclassification_subclassifier.key: return this._subclassifier;
            case sysmlBase.INSTANCE.Subclassification_owningClassifier.key: return this._owningClassifier;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class SubjectMembership extends ParameterMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): SubjectMembership {
        return new SubjectMembership(sysmlBase.INSTANCE.SubjectMembership, id, receiveDelta, parentInfo);
    }

    private readonly _ownedSubjectParameter: RequiredMultiContainmentValueManager<Usage>;
    get ownedSubjectParameter(): Usage[] {
        return this._ownedSubjectParameter.get();
    }
    addOwnedSubjectParameter(newValue: Usage) {
        this._ownedSubjectParameter.add(newValue);
    }
    removeOwnedSubjectParameter(valueToRemove: Usage) {
        this._ownedSubjectParameter.remove(valueToRemove);
    }
    addOwnedSubjectParameterAtIndex(newValue: Usage, index: number) {
        this._ownedSubjectParameter.insertAtIndex(newValue, index);
    }
    moveOwnedSubjectParameter(oldIndex: number, newIndex: number) {
        this._ownedSubjectParameter.move(oldIndex, newIndex);
    }
    replaceOwnedSubjectParameterAtIndex(movedChild: Usage, newIndex: number) {
        this._ownedSubjectParameter.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._ownedSubjectParameter = new RequiredMultiContainmentValueManager<Usage>(sysmlBase.INSTANCE.SubjectMembership_ownedSubjectParameter, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.SubjectMembership_ownedSubjectParameter.key) {
            return this._ownedSubjectParameter;
        }
        return super.getContainmentValueManager(containment);
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

    private readonly _terminatedOccurrenceArgument: RequiredMultiContainmentValueManager<Expression>;
    get terminatedOccurrenceArgument(): Expression[] {
        return this._terminatedOccurrenceArgument.get();
    }
    addTerminatedOccurrenceArgument(newValue: Expression) {
        this._terminatedOccurrenceArgument.add(newValue);
    }
    removeTerminatedOccurrenceArgument(valueToRemove: Expression) {
        this._terminatedOccurrenceArgument.remove(valueToRemove);
    }
    addTerminatedOccurrenceArgumentAtIndex(newValue: Expression, index: number) {
        this._terminatedOccurrenceArgument.insertAtIndex(newValue, index);
    }
    moveTerminatedOccurrenceArgument(oldIndex: number, newIndex: number) {
        this._terminatedOccurrenceArgument.move(oldIndex, newIndex);
    }
    replaceTerminatedOccurrenceArgumentAtIndex(movedChild: Expression, newIndex: number) {
        this._terminatedOccurrenceArgument.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._terminatedOccurrenceArgument = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.TerminateActionUsage_terminatedOccurrenceArgument, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.TerminateActionUsage_terminatedOccurrenceArgument.key) {
            return this._terminatedOccurrenceArgument;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class TextualRepresentation extends AnnotatingElement {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): TextualRepresentation {
        return new TextualRepresentation(sysmlBase.INSTANCE.TextualRepresentation, id, receiveDelta, parentInfo);
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

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._language = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.TextualRepresentation_language, this);
        this._body = new RequiredPropertyValueManager<string>(sysmlBase.INSTANCE.TextualRepresentation_body, this);
        this._representedElement = new RequiredMultiContainmentValueManager<Element>(sysmlBase.INSTANCE.TextualRepresentation_representedElement, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case sysmlBase.INSTANCE.TextualRepresentation_language.key: return this._language;
            case sysmlBase.INSTANCE.TextualRepresentation_body.key: return this._body;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.TextualRepresentation_representedElement.key) {
            return this._representedElement;
        }
        return super.getContainmentValueManager(containment);
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

    private readonly _kind: RequiredPropertyValueManager<TransitionFeatureKind>;
    get kind(): TransitionFeatureKind {
        return this._kind.get();
    }
    set kind(newValue: TransitionFeatureKind) {
        this._kind.set(newValue);
    }

    private readonly _transitionFeature: RequiredMultiContainmentValueManager<Step>;
    get transitionFeature(): Step[] {
        return this._transitionFeature.get();
    }
    addTransitionFeature(newValue: Step) {
        this._transitionFeature.add(newValue);
    }
    removeTransitionFeature(valueToRemove: Step) {
        this._transitionFeature.remove(valueToRemove);
    }
    addTransitionFeatureAtIndex(newValue: Step, index: number) {
        this._transitionFeature.insertAtIndex(newValue, index);
    }
    moveTransitionFeature(oldIndex: number, newIndex: number) {
        this._transitionFeature.move(oldIndex, newIndex);
    }
    replaceTransitionFeatureAtIndex(movedChild: Step, newIndex: number) {
        this._transitionFeature.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._kind = new RequiredPropertyValueManager<TransitionFeatureKind>(sysmlBase.INSTANCE.TransitionFeatureMembership_kind, this);
        this._transitionFeature = new RequiredMultiContainmentValueManager<Step>(sysmlBase.INSTANCE.TransitionFeatureMembership_transitionFeature, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === sysmlBase.INSTANCE.TransitionFeatureMembership_kind.key) {
            return this._kind;
        }
        return super.getPropertyValueManager(property);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.TransitionFeatureMembership_transitionFeature.key) {
            return this._transitionFeature;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class TransitionUsage extends ActionUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): TransitionUsage {
        return new TransitionUsage(sysmlBase.INSTANCE.TransitionUsage, id, receiveDelta, parentInfo);
    }

    private readonly _source: RequiredMultiContainmentValueManager<ActionUsage>;
    get source(): ActionUsage[] {
        return this._source.get();
    }
    addSource(newValue: ActionUsage) {
        this._source.add(newValue);
    }
    removeSource(valueToRemove: ActionUsage) {
        this._source.remove(valueToRemove);
    }
    addSourceAtIndex(newValue: ActionUsage, index: number) {
        this._source.insertAtIndex(newValue, index);
    }
    moveSource(oldIndex: number, newIndex: number) {
        this._source.move(oldIndex, newIndex);
    }
    replaceSourceAtIndex(movedChild: ActionUsage, newIndex: number) {
        this._source.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _target: RequiredMultiContainmentValueManager<ActionUsage>;
    get target(): ActionUsage[] {
        return this._target.get();
    }
    addTarget(newValue: ActionUsage) {
        this._target.add(newValue);
    }
    removeTarget(valueToRemove: ActionUsage) {
        this._target.remove(valueToRemove);
    }
    addTargetAtIndex(newValue: ActionUsage, index: number) {
        this._target.insertAtIndex(newValue, index);
    }
    moveTarget(oldIndex: number, newIndex: number) {
        this._target.move(oldIndex, newIndex);
    }
    replaceTargetAtIndex(movedChild: ActionUsage, newIndex: number) {
        this._target.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _triggerAction: RequiredMultiContainmentValueManager<AcceptActionUsage>;
    get triggerAction(): AcceptActionUsage[] {
        return this._triggerAction.get();
    }
    addTriggerAction(newValue: AcceptActionUsage) {
        this._triggerAction.add(newValue);
    }
    removeTriggerAction(valueToRemove: AcceptActionUsage) {
        this._triggerAction.remove(valueToRemove);
    }
    addTriggerActionAtIndex(newValue: AcceptActionUsage, index: number) {
        this._triggerAction.insertAtIndex(newValue, index);
    }
    moveTriggerAction(oldIndex: number, newIndex: number) {
        this._triggerAction.move(oldIndex, newIndex);
    }
    replaceTriggerActionAtIndex(movedChild: AcceptActionUsage, newIndex: number) {
        this._triggerAction.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _guardExpression: RequiredMultiContainmentValueManager<Expression>;
    get guardExpression(): Expression[] {
        return this._guardExpression.get();
    }
    addGuardExpression(newValue: Expression) {
        this._guardExpression.add(newValue);
    }
    removeGuardExpression(valueToRemove: Expression) {
        this._guardExpression.remove(valueToRemove);
    }
    addGuardExpressionAtIndex(newValue: Expression, index: number) {
        this._guardExpression.insertAtIndex(newValue, index);
    }
    moveGuardExpression(oldIndex: number, newIndex: number) {
        this._guardExpression.move(oldIndex, newIndex);
    }
    replaceGuardExpressionAtIndex(movedChild: Expression, newIndex: number) {
        this._guardExpression.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _effectAction: RequiredMultiContainmentValueManager<ActionUsage>;
    get effectAction(): ActionUsage[] {
        return this._effectAction.get();
    }
    addEffectAction(newValue: ActionUsage) {
        this._effectAction.add(newValue);
    }
    removeEffectAction(valueToRemove: ActionUsage) {
        this._effectAction.remove(valueToRemove);
    }
    addEffectActionAtIndex(newValue: ActionUsage, index: number) {
        this._effectAction.insertAtIndex(newValue, index);
    }
    moveEffectAction(oldIndex: number, newIndex: number) {
        this._effectAction.move(oldIndex, newIndex);
    }
    replaceEffectActionAtIndex(movedChild: ActionUsage, newIndex: number) {
        this._effectAction.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _succession: RequiredMultiContainmentValueManager<Succession>;
    get succession(): Succession[] {
        return this._succession.get();
    }
    addSuccession(newValue: Succession) {
        this._succession.add(newValue);
    }
    removeSuccession(valueToRemove: Succession) {
        this._succession.remove(valueToRemove);
    }
    addSuccessionAtIndex(newValue: Succession, index: number) {
        this._succession.insertAtIndex(newValue, index);
    }
    moveSuccession(oldIndex: number, newIndex: number) {
        this._succession.move(oldIndex, newIndex);
    }
    replaceSuccessionAtIndex(movedChild: Succession, newIndex: number) {
        this._succession.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._source = new RequiredMultiContainmentValueManager<ActionUsage>(sysmlBase.INSTANCE.TransitionUsage_source, this);
        this._target = new RequiredMultiContainmentValueManager<ActionUsage>(sysmlBase.INSTANCE.TransitionUsage_target, this);
        this._triggerAction = new RequiredMultiContainmentValueManager<AcceptActionUsage>(sysmlBase.INSTANCE.TransitionUsage_triggerAction, this);
        this._guardExpression = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.TransitionUsage_guardExpression, this);
        this._effectAction = new RequiredMultiContainmentValueManager<ActionUsage>(sysmlBase.INSTANCE.TransitionUsage_effectAction, this);
        this._succession = new RequiredMultiContainmentValueManager<Succession>(sysmlBase.INSTANCE.TransitionUsage_succession, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.TransitionUsage_source.key: return this._source;
            case sysmlBase.INSTANCE.TransitionUsage_target.key: return this._target;
            case sysmlBase.INSTANCE.TransitionUsage_triggerAction.key: return this._triggerAction;
            case sysmlBase.INSTANCE.TransitionUsage_guardExpression.key: return this._guardExpression;
            case sysmlBase.INSTANCE.TransitionUsage_effectAction.key: return this._effectAction;
            case sysmlBase.INSTANCE.TransitionUsage_succession.key: return this._succession;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class TriggerInvocationExpression extends InvocationExpression {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): TriggerInvocationExpression {
        return new TriggerInvocationExpression(sysmlBase.INSTANCE.TriggerInvocationExpression, id, receiveDelta, parentInfo);
    }

    private readonly _kind: RequiredPropertyValueManager<TriggerKind>;
    get kind(): TriggerKind {
        return this._kind.get();
    }
    set kind(newValue: TriggerKind) {
        this._kind.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._kind = new RequiredPropertyValueManager<TriggerKind>(sysmlBase.INSTANCE.TriggerInvocationExpression_kind, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === sysmlBase.INSTANCE.TriggerInvocationExpression_kind.key) {
            return this._kind;
        }
        return super.getPropertyValueManager(property);
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
        this._featureOfType = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.TypeFeaturing_featureOfType, this);
        this._featuringType = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.TypeFeaturing_featuringType, this);
        this._owningFeatureOfType = new RequiredMultiContainmentValueManager<Feature>(sysmlBase.INSTANCE.TypeFeaturing_owningFeatureOfType, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.TypeFeaturing_featureOfType.key: return this._featureOfType;
            case sysmlBase.INSTANCE.TypeFeaturing_featuringType.key: return this._featuringType;
            case sysmlBase.INSTANCE.TypeFeaturing_owningFeatureOfType.key: return this._owningFeatureOfType;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Unioning extends Relationship {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Unioning {
        return new Unioning(sysmlBase.INSTANCE.Unioning, id, receiveDelta, parentInfo);
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
        this._unioningType = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Unioning_unioningType, this);
        this._typeUnioned = new RequiredMultiContainmentValueManager<Type>(sysmlBase.INSTANCE.Unioning_typeUnioned, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.Unioning_unioningType.key: return this._unioningType;
            case sysmlBase.INSTANCE.Unioning_typeUnioned.key: return this._typeUnioned;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class UseCaseDefinition extends CaseDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): UseCaseDefinition {
        return new UseCaseDefinition(sysmlBase.INSTANCE.UseCaseDefinition, id, receiveDelta, parentInfo);
    }

    private readonly _includedUseCase: RequiredMultiContainmentValueManager<UseCaseUsage>;
    get includedUseCase(): UseCaseUsage[] {
        return this._includedUseCase.get();
    }
    addIncludedUseCase(newValue: UseCaseUsage) {
        this._includedUseCase.add(newValue);
    }
    removeIncludedUseCase(valueToRemove: UseCaseUsage) {
        this._includedUseCase.remove(valueToRemove);
    }
    addIncludedUseCaseAtIndex(newValue: UseCaseUsage, index: number) {
        this._includedUseCase.insertAtIndex(newValue, index);
    }
    moveIncludedUseCase(oldIndex: number, newIndex: number) {
        this._includedUseCase.move(oldIndex, newIndex);
    }
    replaceIncludedUseCaseAtIndex(movedChild: UseCaseUsage, newIndex: number) {
        this._includedUseCase.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._includedUseCase = new RequiredMultiContainmentValueManager<UseCaseUsage>(sysmlBase.INSTANCE.UseCaseDefinition_includedUseCase, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.UseCaseDefinition_includedUseCase.key) {
            return this._includedUseCase;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class VariantMembership extends OwningMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): VariantMembership {
        return new VariantMembership(sysmlBase.INSTANCE.VariantMembership, id, receiveDelta, parentInfo);
    }

    private readonly _ownedVariantUsage: RequiredMultiContainmentValueManager<Usage>;
    get ownedVariantUsage(): Usage[] {
        return this._ownedVariantUsage.get();
    }
    addOwnedVariantUsage(newValue: Usage) {
        this._ownedVariantUsage.add(newValue);
    }
    removeOwnedVariantUsage(valueToRemove: Usage) {
        this._ownedVariantUsage.remove(valueToRemove);
    }
    addOwnedVariantUsageAtIndex(newValue: Usage, index: number) {
        this._ownedVariantUsage.insertAtIndex(newValue, index);
    }
    moveOwnedVariantUsage(oldIndex: number, newIndex: number) {
        this._ownedVariantUsage.move(oldIndex, newIndex);
    }
    replaceOwnedVariantUsageAtIndex(movedChild: Usage, newIndex: number) {
        this._ownedVariantUsage.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._ownedVariantUsage = new RequiredMultiContainmentValueManager<Usage>(sysmlBase.INSTANCE.VariantMembership_ownedVariantUsage, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.VariantMembership_ownedVariantUsage.key) {
            return this._ownedVariantUsage;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class VerificationCaseDefinition extends CaseDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): VerificationCaseDefinition {
        return new VerificationCaseDefinition(sysmlBase.INSTANCE.VerificationCaseDefinition, id, receiveDelta, parentInfo);
    }

    private readonly _verifiedRequirement: RequiredMultiContainmentValueManager<RequirementUsage>;
    get verifiedRequirement(): RequirementUsage[] {
        return this._verifiedRequirement.get();
    }
    addVerifiedRequirement(newValue: RequirementUsage) {
        this._verifiedRequirement.add(newValue);
    }
    removeVerifiedRequirement(valueToRemove: RequirementUsage) {
        this._verifiedRequirement.remove(valueToRemove);
    }
    addVerifiedRequirementAtIndex(newValue: RequirementUsage, index: number) {
        this._verifiedRequirement.insertAtIndex(newValue, index);
    }
    moveVerifiedRequirement(oldIndex: number, newIndex: number) {
        this._verifiedRequirement.move(oldIndex, newIndex);
    }
    replaceVerifiedRequirementAtIndex(movedChild: RequirementUsage, newIndex: number) {
        this._verifiedRequirement.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._verifiedRequirement = new RequiredMultiContainmentValueManager<RequirementUsage>(sysmlBase.INSTANCE.VerificationCaseDefinition_verifiedRequirement, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.VerificationCaseDefinition_verifiedRequirement.key) {
            return this._verifiedRequirement;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class VerificationCaseUsage extends CaseUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): VerificationCaseUsage {
        return new VerificationCaseUsage(sysmlBase.INSTANCE.VerificationCaseUsage, id, receiveDelta, parentInfo);
    }

    private readonly _verificationCaseDefinition: RequiredMultiContainmentValueManager<VerificationCaseDefinition>;
    get verificationCaseDefinition(): VerificationCaseDefinition[] {
        return this._verificationCaseDefinition.get();
    }
    addVerificationCaseDefinition(newValue: VerificationCaseDefinition) {
        this._verificationCaseDefinition.add(newValue);
    }
    removeVerificationCaseDefinition(valueToRemove: VerificationCaseDefinition) {
        this._verificationCaseDefinition.remove(valueToRemove);
    }
    addVerificationCaseDefinitionAtIndex(newValue: VerificationCaseDefinition, index: number) {
        this._verificationCaseDefinition.insertAtIndex(newValue, index);
    }
    moveVerificationCaseDefinition(oldIndex: number, newIndex: number) {
        this._verificationCaseDefinition.move(oldIndex, newIndex);
    }
    replaceVerificationCaseDefinitionAtIndex(movedChild: VerificationCaseDefinition, newIndex: number) {
        this._verificationCaseDefinition.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _verifiedRequirement: RequiredMultiContainmentValueManager<RequirementUsage>;
    get verifiedRequirement(): RequirementUsage[] {
        return this._verifiedRequirement.get();
    }
    addVerifiedRequirement(newValue: RequirementUsage) {
        this._verifiedRequirement.add(newValue);
    }
    removeVerifiedRequirement(valueToRemove: RequirementUsage) {
        this._verifiedRequirement.remove(valueToRemove);
    }
    addVerifiedRequirementAtIndex(newValue: RequirementUsage, index: number) {
        this._verifiedRequirement.insertAtIndex(newValue, index);
    }
    moveVerifiedRequirement(oldIndex: number, newIndex: number) {
        this._verifiedRequirement.move(oldIndex, newIndex);
    }
    replaceVerifiedRequirementAtIndex(movedChild: RequirementUsage, newIndex: number) {
        this._verifiedRequirement.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._verificationCaseDefinition = new RequiredMultiContainmentValueManager<VerificationCaseDefinition>(sysmlBase.INSTANCE.VerificationCaseUsage_verificationCaseDefinition, this);
        this._verifiedRequirement = new RequiredMultiContainmentValueManager<RequirementUsage>(sysmlBase.INSTANCE.VerificationCaseUsage_verifiedRequirement, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.VerificationCaseUsage_verificationCaseDefinition.key: return this._verificationCaseDefinition;
            case sysmlBase.INSTANCE.VerificationCaseUsage_verifiedRequirement.key: return this._verifiedRequirement;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class ViewDefinition extends PartDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ViewDefinition {
        return new ViewDefinition(sysmlBase.INSTANCE.ViewDefinition, id, receiveDelta, parentInfo);
    }

    private readonly _view: RequiredMultiContainmentValueManager<ViewUsage>;
    get view(): ViewUsage[] {
        return this._view.get();
    }
    addView(newValue: ViewUsage) {
        this._view.add(newValue);
    }
    removeView(valueToRemove: ViewUsage) {
        this._view.remove(valueToRemove);
    }
    addViewAtIndex(newValue: ViewUsage, index: number) {
        this._view.insertAtIndex(newValue, index);
    }
    moveView(oldIndex: number, newIndex: number) {
        this._view.move(oldIndex, newIndex);
    }
    replaceViewAtIndex(movedChild: ViewUsage, newIndex: number) {
        this._view.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _satisfiedViewpoint: RequiredMultiContainmentValueManager<ViewpointUsage>;
    get satisfiedViewpoint(): ViewpointUsage[] {
        return this._satisfiedViewpoint.get();
    }
    addSatisfiedViewpoint(newValue: ViewpointUsage) {
        this._satisfiedViewpoint.add(newValue);
    }
    removeSatisfiedViewpoint(valueToRemove: ViewpointUsage) {
        this._satisfiedViewpoint.remove(valueToRemove);
    }
    addSatisfiedViewpointAtIndex(newValue: ViewpointUsage, index: number) {
        this._satisfiedViewpoint.insertAtIndex(newValue, index);
    }
    moveSatisfiedViewpoint(oldIndex: number, newIndex: number) {
        this._satisfiedViewpoint.move(oldIndex, newIndex);
    }
    replaceSatisfiedViewpointAtIndex(movedChild: ViewpointUsage, newIndex: number) {
        this._satisfiedViewpoint.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _viewRendering: RequiredMultiContainmentValueManager<RenderingUsage>;
    get viewRendering(): RenderingUsage[] {
        return this._viewRendering.get();
    }
    addViewRendering(newValue: RenderingUsage) {
        this._viewRendering.add(newValue);
    }
    removeViewRendering(valueToRemove: RenderingUsage) {
        this._viewRendering.remove(valueToRemove);
    }
    addViewRenderingAtIndex(newValue: RenderingUsage, index: number) {
        this._viewRendering.insertAtIndex(newValue, index);
    }
    moveViewRendering(oldIndex: number, newIndex: number) {
        this._viewRendering.move(oldIndex, newIndex);
    }
    replaceViewRenderingAtIndex(movedChild: RenderingUsage, newIndex: number) {
        this._viewRendering.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _viewCondition: RequiredMultiContainmentValueManager<Expression>;
    get viewCondition(): Expression[] {
        return this._viewCondition.get();
    }
    addViewCondition(newValue: Expression) {
        this._viewCondition.add(newValue);
    }
    removeViewCondition(valueToRemove: Expression) {
        this._viewCondition.remove(valueToRemove);
    }
    addViewConditionAtIndex(newValue: Expression, index: number) {
        this._viewCondition.insertAtIndex(newValue, index);
    }
    moveViewCondition(oldIndex: number, newIndex: number) {
        this._viewCondition.move(oldIndex, newIndex);
    }
    replaceViewConditionAtIndex(movedChild: Expression, newIndex: number) {
        this._viewCondition.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._view = new RequiredMultiContainmentValueManager<ViewUsage>(sysmlBase.INSTANCE.ViewDefinition_view, this);
        this._satisfiedViewpoint = new RequiredMultiContainmentValueManager<ViewpointUsage>(sysmlBase.INSTANCE.ViewDefinition_satisfiedViewpoint, this);
        this._viewRendering = new RequiredMultiContainmentValueManager<RenderingUsage>(sysmlBase.INSTANCE.ViewDefinition_viewRendering, this);
        this._viewCondition = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.ViewDefinition_viewCondition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.ViewDefinition_view.key: return this._view;
            case sysmlBase.INSTANCE.ViewDefinition_satisfiedViewpoint.key: return this._satisfiedViewpoint;
            case sysmlBase.INSTANCE.ViewDefinition_viewRendering.key: return this._viewRendering;
            case sysmlBase.INSTANCE.ViewDefinition_viewCondition.key: return this._viewCondition;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class ViewRenderingMembership extends FeatureMembership {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ViewRenderingMembership {
        return new ViewRenderingMembership(sysmlBase.INSTANCE.ViewRenderingMembership, id, receiveDelta, parentInfo);
    }

    private readonly _ownedRendering: RequiredMultiContainmentValueManager<RenderingUsage>;
    get ownedRendering(): RenderingUsage[] {
        return this._ownedRendering.get();
    }
    addOwnedRendering(newValue: RenderingUsage) {
        this._ownedRendering.add(newValue);
    }
    removeOwnedRendering(valueToRemove: RenderingUsage) {
        this._ownedRendering.remove(valueToRemove);
    }
    addOwnedRenderingAtIndex(newValue: RenderingUsage, index: number) {
        this._ownedRendering.insertAtIndex(newValue, index);
    }
    moveOwnedRendering(oldIndex: number, newIndex: number) {
        this._ownedRendering.move(oldIndex, newIndex);
    }
    replaceOwnedRenderingAtIndex(movedChild: RenderingUsage, newIndex: number) {
        this._ownedRendering.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _referencedRendering: RequiredMultiContainmentValueManager<RenderingUsage>;
    get referencedRendering(): RenderingUsage[] {
        return this._referencedRendering.get();
    }
    addReferencedRendering(newValue: RenderingUsage) {
        this._referencedRendering.add(newValue);
    }
    removeReferencedRendering(valueToRemove: RenderingUsage) {
        this._referencedRendering.remove(valueToRemove);
    }
    addReferencedRenderingAtIndex(newValue: RenderingUsage, index: number) {
        this._referencedRendering.insertAtIndex(newValue, index);
    }
    moveReferencedRendering(oldIndex: number, newIndex: number) {
        this._referencedRendering.move(oldIndex, newIndex);
    }
    replaceReferencedRenderingAtIndex(movedChild: RenderingUsage, newIndex: number) {
        this._referencedRendering.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._ownedRendering = new RequiredMultiContainmentValueManager<RenderingUsage>(sysmlBase.INSTANCE.ViewRenderingMembership_ownedRendering, this);
        this._referencedRendering = new RequiredMultiContainmentValueManager<RenderingUsage>(sysmlBase.INSTANCE.ViewRenderingMembership_referencedRendering, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.ViewRenderingMembership_ownedRendering.key: return this._ownedRendering;
            case sysmlBase.INSTANCE.ViewRenderingMembership_referencedRendering.key: return this._referencedRendering;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class ViewUsage extends PartUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ViewUsage {
        return new ViewUsage(sysmlBase.INSTANCE.ViewUsage, id, receiveDelta, parentInfo);
    }

    private readonly _viewDefinition: RequiredMultiContainmentValueManager<ViewDefinition>;
    get viewDefinition(): ViewDefinition[] {
        return this._viewDefinition.get();
    }
    addViewDefinition(newValue: ViewDefinition) {
        this._viewDefinition.add(newValue);
    }
    removeViewDefinition(valueToRemove: ViewDefinition) {
        this._viewDefinition.remove(valueToRemove);
    }
    addViewDefinitionAtIndex(newValue: ViewDefinition, index: number) {
        this._viewDefinition.insertAtIndex(newValue, index);
    }
    moveViewDefinition(oldIndex: number, newIndex: number) {
        this._viewDefinition.move(oldIndex, newIndex);
    }
    replaceViewDefinitionAtIndex(movedChild: ViewDefinition, newIndex: number) {
        this._viewDefinition.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _satisfiedViewpoint: RequiredMultiContainmentValueManager<ViewpointUsage>;
    get satisfiedViewpoint(): ViewpointUsage[] {
        return this._satisfiedViewpoint.get();
    }
    addSatisfiedViewpoint(newValue: ViewpointUsage) {
        this._satisfiedViewpoint.add(newValue);
    }
    removeSatisfiedViewpoint(valueToRemove: ViewpointUsage) {
        this._satisfiedViewpoint.remove(valueToRemove);
    }
    addSatisfiedViewpointAtIndex(newValue: ViewpointUsage, index: number) {
        this._satisfiedViewpoint.insertAtIndex(newValue, index);
    }
    moveSatisfiedViewpoint(oldIndex: number, newIndex: number) {
        this._satisfiedViewpoint.move(oldIndex, newIndex);
    }
    replaceSatisfiedViewpointAtIndex(movedChild: ViewpointUsage, newIndex: number) {
        this._satisfiedViewpoint.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _exposedElement: RequiredMultiContainmentValueManager<Element>;
    get exposedElement(): Element[] {
        return this._exposedElement.get();
    }
    addExposedElement(newValue: Element) {
        this._exposedElement.add(newValue);
    }
    removeExposedElement(valueToRemove: Element) {
        this._exposedElement.remove(valueToRemove);
    }
    addExposedElementAtIndex(newValue: Element, index: number) {
        this._exposedElement.insertAtIndex(newValue, index);
    }
    moveExposedElement(oldIndex: number, newIndex: number) {
        this._exposedElement.move(oldIndex, newIndex);
    }
    replaceExposedElementAtIndex(movedChild: Element, newIndex: number) {
        this._exposedElement.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _viewRendering: RequiredMultiContainmentValueManager<RenderingUsage>;
    get viewRendering(): RenderingUsage[] {
        return this._viewRendering.get();
    }
    addViewRendering(newValue: RenderingUsage) {
        this._viewRendering.add(newValue);
    }
    removeViewRendering(valueToRemove: RenderingUsage) {
        this._viewRendering.remove(valueToRemove);
    }
    addViewRenderingAtIndex(newValue: RenderingUsage, index: number) {
        this._viewRendering.insertAtIndex(newValue, index);
    }
    moveViewRendering(oldIndex: number, newIndex: number) {
        this._viewRendering.move(oldIndex, newIndex);
    }
    replaceViewRenderingAtIndex(movedChild: RenderingUsage, newIndex: number) {
        this._viewRendering.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _viewCondition: RequiredMultiContainmentValueManager<Expression>;
    get viewCondition(): Expression[] {
        return this._viewCondition.get();
    }
    addViewCondition(newValue: Expression) {
        this._viewCondition.add(newValue);
    }
    removeViewCondition(valueToRemove: Expression) {
        this._viewCondition.remove(valueToRemove);
    }
    addViewConditionAtIndex(newValue: Expression, index: number) {
        this._viewCondition.insertAtIndex(newValue, index);
    }
    moveViewCondition(oldIndex: number, newIndex: number) {
        this._viewCondition.move(oldIndex, newIndex);
    }
    replaceViewConditionAtIndex(movedChild: Expression, newIndex: number) {
        this._viewCondition.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._viewDefinition = new RequiredMultiContainmentValueManager<ViewDefinition>(sysmlBase.INSTANCE.ViewUsage_viewDefinition, this);
        this._satisfiedViewpoint = new RequiredMultiContainmentValueManager<ViewpointUsage>(sysmlBase.INSTANCE.ViewUsage_satisfiedViewpoint, this);
        this._exposedElement = new RequiredMultiContainmentValueManager<Element>(sysmlBase.INSTANCE.ViewUsage_exposedElement, this);
        this._viewRendering = new RequiredMultiContainmentValueManager<RenderingUsage>(sysmlBase.INSTANCE.ViewUsage_viewRendering, this);
        this._viewCondition = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.ViewUsage_viewCondition, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.ViewUsage_viewDefinition.key: return this._viewDefinition;
            case sysmlBase.INSTANCE.ViewUsage_satisfiedViewpoint.key: return this._satisfiedViewpoint;
            case sysmlBase.INSTANCE.ViewUsage_exposedElement.key: return this._exposedElement;
            case sysmlBase.INSTANCE.ViewUsage_viewRendering.key: return this._viewRendering;
            case sysmlBase.INSTANCE.ViewUsage_viewCondition.key: return this._viewCondition;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class ViewpointDefinition extends RequirementDefinition {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ViewpointDefinition {
        return new ViewpointDefinition(sysmlBase.INSTANCE.ViewpointDefinition, id, receiveDelta, parentInfo);
    }

    private readonly _viewpointStakeholder: RequiredMultiContainmentValueManager<PartUsage>;
    get viewpointStakeholder(): PartUsage[] {
        return this._viewpointStakeholder.get();
    }
    addViewpointStakeholder(newValue: PartUsage) {
        this._viewpointStakeholder.add(newValue);
    }
    removeViewpointStakeholder(valueToRemove: PartUsage) {
        this._viewpointStakeholder.remove(valueToRemove);
    }
    addViewpointStakeholderAtIndex(newValue: PartUsage, index: number) {
        this._viewpointStakeholder.insertAtIndex(newValue, index);
    }
    moveViewpointStakeholder(oldIndex: number, newIndex: number) {
        this._viewpointStakeholder.move(oldIndex, newIndex);
    }
    replaceViewpointStakeholderAtIndex(movedChild: PartUsage, newIndex: number) {
        this._viewpointStakeholder.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._viewpointStakeholder = new RequiredMultiContainmentValueManager<PartUsage>(sysmlBase.INSTANCE.ViewpointDefinition_viewpointStakeholder, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === sysmlBase.INSTANCE.ViewpointDefinition_viewpointStakeholder.key) {
            return this._viewpointStakeholder;
        }
        return super.getContainmentValueManager(containment);
    }
}

export class ViewpointUsage extends RequirementUsage {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): ViewpointUsage {
        return new ViewpointUsage(sysmlBase.INSTANCE.ViewpointUsage, id, receiveDelta, parentInfo);
    }

    private readonly _viewpointDefinition: RequiredMultiContainmentValueManager<ViewpointDefinition>;
    get viewpointDefinition(): ViewpointDefinition[] {
        return this._viewpointDefinition.get();
    }
    addViewpointDefinition(newValue: ViewpointDefinition) {
        this._viewpointDefinition.add(newValue);
    }
    removeViewpointDefinition(valueToRemove: ViewpointDefinition) {
        this._viewpointDefinition.remove(valueToRemove);
    }
    addViewpointDefinitionAtIndex(newValue: ViewpointDefinition, index: number) {
        this._viewpointDefinition.insertAtIndex(newValue, index);
    }
    moveViewpointDefinition(oldIndex: number, newIndex: number) {
        this._viewpointDefinition.move(oldIndex, newIndex);
    }
    replaceViewpointDefinitionAtIndex(movedChild: ViewpointDefinition, newIndex: number) {
        this._viewpointDefinition.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _viewpointStakeholder: RequiredMultiContainmentValueManager<PartUsage>;
    get viewpointStakeholder(): PartUsage[] {
        return this._viewpointStakeholder.get();
    }
    addViewpointStakeholder(newValue: PartUsage) {
        this._viewpointStakeholder.add(newValue);
    }
    removeViewpointStakeholder(valueToRemove: PartUsage) {
        this._viewpointStakeholder.remove(valueToRemove);
    }
    addViewpointStakeholderAtIndex(newValue: PartUsage, index: number) {
        this._viewpointStakeholder.insertAtIndex(newValue, index);
    }
    moveViewpointStakeholder(oldIndex: number, newIndex: number) {
        this._viewpointStakeholder.move(oldIndex, newIndex);
    }
    replaceViewpointStakeholderAtIndex(movedChild: PartUsage, newIndex: number) {
        this._viewpointStakeholder.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._viewpointDefinition = new RequiredMultiContainmentValueManager<ViewpointDefinition>(sysmlBase.INSTANCE.ViewpointUsage_viewpointDefinition, this);
        this._viewpointStakeholder = new RequiredMultiContainmentValueManager<PartUsage>(sysmlBase.INSTANCE.ViewpointUsage_viewpointStakeholder, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.ViewpointUsage_viewpointDefinition.key: return this._viewpointDefinition;
            case sysmlBase.INSTANCE.ViewpointUsage_viewpointStakeholder.key: return this._viewpointStakeholder;
            default: return super.getContainmentValueManager(containment);
        }
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

    private readonly _whileArgument: RequiredMultiContainmentValueManager<Expression>;
    get whileArgument(): Expression[] {
        return this._whileArgument.get();
    }
    addWhileArgument(newValue: Expression) {
        this._whileArgument.add(newValue);
    }
    removeWhileArgument(valueToRemove: Expression) {
        this._whileArgument.remove(valueToRemove);
    }
    addWhileArgumentAtIndex(newValue: Expression, index: number) {
        this._whileArgument.insertAtIndex(newValue, index);
    }
    moveWhileArgument(oldIndex: number, newIndex: number) {
        this._whileArgument.move(oldIndex, newIndex);
    }
    replaceWhileArgumentAtIndex(movedChild: Expression, newIndex: number) {
        this._whileArgument.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _untilArgument: RequiredMultiContainmentValueManager<Expression>;
    get untilArgument(): Expression[] {
        return this._untilArgument.get();
    }
    addUntilArgument(newValue: Expression) {
        this._untilArgument.add(newValue);
    }
    removeUntilArgument(valueToRemove: Expression) {
        this._untilArgument.remove(valueToRemove);
    }
    addUntilArgumentAtIndex(newValue: Expression, index: number) {
        this._untilArgument.insertAtIndex(newValue, index);
    }
    moveUntilArgument(oldIndex: number, newIndex: number) {
        this._untilArgument.move(oldIndex, newIndex);
    }
    replaceUntilArgumentAtIndex(movedChild: Expression, newIndex: number) {
        this._untilArgument.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._whileArgument = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.WhileLoopActionUsage_whileArgument, this);
        this._untilArgument = new RequiredMultiContainmentValueManager<Expression>(sysmlBase.INSTANCE.WhileLoopActionUsage_untilArgument, this);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case sysmlBase.INSTANCE.WhileLoopActionUsage_whileArgument.key: return this._whileArgument;
            case sysmlBase.INSTANCE.WhileLoopActionUsage_untilArgument.key: return this._untilArgument;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

