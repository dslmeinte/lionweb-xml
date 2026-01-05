/*
 * language's metadata:
 *     name:    library
 *     version: 1
 *     key:     library
 *     id:      library
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


export class libraryBase implements ILanguageBase {

    private readonly _language: Language = new Language("library", "1", "library", "library");
    get language(): Language {
        this.ensureWiredUp();
        return this._language;
    }

    public readonly _Employee = new Concept(this._language, "Employee", "library-Employee", "library-Employee", false);
    get Employee(): Concept {
        this.ensureWiredUp();
        return this._Employee;
    }

    public readonly _Library = new Concept(this._language, "Library", "library-Library", "library-Library", false);
    get Library(): Concept {
        this.ensureWiredUp();
        return this._Library;
    }

    public readonly _Writer = new Concept(this._language, "Writer", "library-Writer", "library-Writer", false);
    get Writer(): Concept {
        this.ensureWiredUp();
        return this._Writer;
    }

    public readonly _Book = new Concept(this._language, "Book", "library-Book", "library-Book", false);
    get Book(): Concept {
        this.ensureWiredUp();
        return this._Book;
    }

    public readonly _BookCategory = new Enumeration(this._language, "BookCategory", "library-BookCategory", "library-BookCategory");
    get BookCategory(): Enumeration {
        this.ensureWiredUp();
        return this._BookCategory;
    }
    private readonly _BookCategory_ScienceFiction = new EnumerationLiteral(this._BookCategory, "ScienceFiction", "library-BookCategory-ScienceFiction", "library-BookCategory-ScienceFiction");
    get BookCategory_ScienceFiction(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._BookCategory_ScienceFiction;
    }
    private readonly _BookCategory_Biographie = new EnumerationLiteral(this._BookCategory, "Biographie", "library-BookCategory-Biographie", "library-BookCategory-Biographie");
    get BookCategory_Biographie(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._BookCategory_Biographie;
    }
    private readonly _BookCategory_Mistery = new EnumerationLiteral(this._BookCategory, "Mistery", "library-BookCategory-Mistery", "library-BookCategory-Mistery");
    get BookCategory_Mistery(): EnumerationLiteral {
        this.ensureWiredUp();
        return this._BookCategory_Mistery;
    }

    private _wiredUp: boolean = false;
    private ensureWiredUp() {
        if (this._wiredUp) {
            return;
        }
        this._language.havingEntities(this._Employee, this._Library, this._Writer, this._Book, this._BookCategory);
        this._BookCategory.havingLiterals(this._BookCategory_ScienceFiction, this._BookCategory_Biographie, this._BookCategory_Mistery);
        this._wiredUp = true;
    }

    factory(receiveDelta?: DeltaReceiver): NodeBaseFactory {
        return (classifier: Classifier, id: LionWebId) => {
            switch (classifier.key) {
                case this._Employee.key: return Employee.create(id, receiveDelta);
                case this._Library.key: return Library.create(id, receiveDelta);
                case this._Writer.key: return Writer.create(id, receiveDelta);
                case this._Book.key: return Book.create(id, receiveDelta);
                default: {
                    const {language} = classifier;
                    throw new Error(`can't instantiate ${classifier.name} (key=${classifier.key}): classifier is not known in language ${language.name} (key=${language.key}, version=${language.version})`);
                }
            }
        }
    }

    enumLiteralFrom<EnumType>(enumerationLiteral: EnumerationLiteral): EnumType {
        const {enumeration} = enumerationLiteral;
        if (enumeration.key === this._BookCategory.key) {
            return enumerationLiteral.key as EnumType;
        }
        const {language} = enumeration;
        throw new Error(`enumeration with key ${enumeration.key} is not known in language ${language.name} (key=${language.key}, version=${language.version})`);
    }

    public static readonly INSTANCE = new libraryBase();
}


export class Employee extends NodeBase {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Employee {
        return new Employee(libraryBase.INSTANCE.Employee, id, receiveDelta, parentInfo);
    }
}

export class Library extends NodeBase {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Library {
        return new Library(libraryBase.INSTANCE.Library, id, receiveDelta, parentInfo);
    }
}

export class Writer extends NodeBase {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Writer {
        return new Writer(libraryBase.INSTANCE.Writer, id, receiveDelta, parentInfo);
    }
}

export class Book extends NodeBase {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Book {
        return new Book(libraryBase.INSTANCE.Book, id, receiveDelta, parentInfo);
    }
}

export enum BookCategory {
    ScienceFiction = "library-BookCategory-ScienceFiction",
    Biographie = "library-BookCategory-Biographie",
    Mistery = "library-BookCategory-Mistery"
}

