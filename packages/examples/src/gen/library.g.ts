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


export class libraryBase implements ILanguageBase {

    private readonly _language: Language = new Language("library", "1", "library", "library");
    get language(): Language {
        this.ensureWiredUp();
        return this._language;
    }

    public readonly _Book = new Concept(this._language, "Book", "library-Book", "library-Book", false);
    get Book(): Concept {
        this.ensureWiredUp();
        return this._Book;
    }
    private readonly _Book_title = new Property(this._Book, "title", "library-Book-title", "library-Book-title");
    get Book_title(): Property {
        this.ensureWiredUp();
        return this._Book_title;
    }
    private readonly _Book_pages = new Property(this._Book, "pages", "library-Book-pages", "library-Book-pages");
    get Book_pages(): Property {
        this.ensureWiredUp();
        return this._Book_pages;
    }
    private readonly _Book_category = new Property(this._Book, "category", "library-Book-category", "library-Book-category");
    get Book_category(): Property {
        this.ensureWiredUp();
        return this._Book_category;
    }
    private readonly _Book_authors = new Containment(this._Book, "authors", "library-Book-authors", "library-Book-authors").isMultiple();
    get Book_authors(): Containment {
        this.ensureWiredUp();
        return this._Book_authors;
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

    public readonly _Employee = new Concept(this._language, "Employee", "library-Employee", "library-Employee", false);
    get Employee(): Concept {
        this.ensureWiredUp();
        return this._Employee;
    }
    private readonly _Employee_name = new Property(this._Employee, "name", "library-Employee-name", "library-Employee-name");
    get Employee_name(): Property {
        this.ensureWiredUp();
        return this._Employee_name;
    }
    private readonly _Employee_age = new Property(this._Employee, "age", "library-Employee-age", "library-Employee-age");
    get Employee_age(): Property {
        this.ensureWiredUp();
        return this._Employee_age;
    }

    public readonly _Library = new Concept(this._language, "Library", "library-Library", "library-Library", false);
    get Library(): Concept {
        this.ensureWiredUp();
        return this._Library;
    }
    private readonly _Library_name = new Property(this._Library, "name", "library-Library-name", "library-Library-name");
    get Library_name(): Property {
        this.ensureWiredUp();
        return this._Library_name;
    }
    private readonly _Library_address = new Property(this._Library, "address", "library-Library-address", "library-Library-address");
    get Library_address(): Property {
        this.ensureWiredUp();
        return this._Library_address;
    }
    private readonly _Library_employees = new Containment(this._Library, "employees", "library-Library-employees", "library-Library-employees").isMultiple();
    get Library_employees(): Containment {
        this.ensureWiredUp();
        return this._Library_employees;
    }
    private readonly _Library_writers = new Containment(this._Library, "writers", "library-Library-writers", "library-Library-writers").isMultiple();
    get Library_writers(): Containment {
        this.ensureWiredUp();
        return this._Library_writers;
    }
    private readonly _Library_books = new Containment(this._Library, "books", "library-Library-books", "library-Library-books").isMultiple();
    get Library_books(): Containment {
        this.ensureWiredUp();
        return this._Library_books;
    }

    public readonly _Writer = new Concept(this._language, "Writer", "library-Writer", "library-Writer", false);
    get Writer(): Concept {
        this.ensureWiredUp();
        return this._Writer;
    }
    private readonly _Writer_name = new Property(this._Writer, "name", "library-Writer-name", "library-Writer-name");
    get Writer_name(): Property {
        this.ensureWiredUp();
        return this._Writer_name;
    }
    private readonly _Writer_books = new Containment(this._Writer, "books", "library-Writer-books", "library-Writer-books").isMultiple();
    get Writer_books(): Containment {
        this.ensureWiredUp();
        return this._Writer_books;
    }

    private _wiredUp: boolean = false;
    private ensureWiredUp() {
        if (this._wiredUp) {
            return;
        }
        this._language.havingEntities(this._Book, this._BookCategory, this._Employee, this._Library, this._Writer);
        this._Book.havingFeatures(this._Book_title, this._Book_pages, this._Book_category, this._Book_authors);
        this._Book_title.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Book_pages.ofType(LionCore_builtinsBase.INSTANCE._Integer);
        this._Book_category.ofType(this._BookCategory);
        this._Book_authors.ofType(this._Writer);
        this._BookCategory.havingLiterals(this._BookCategory_ScienceFiction, this._BookCategory_Biographie, this._BookCategory_Mistery);
        this._Employee.havingFeatures(this._Employee_name, this._Employee_age);
        this._Employee_name.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Employee_age.ofType(LionCore_builtinsBase.INSTANCE._Integer);
        this._Library.havingFeatures(this._Library_name, this._Library_address, this._Library_employees, this._Library_writers, this._Library_books);
        this._Library_name.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Library_address.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Library_employees.ofType(this._Employee);
        this._Library_writers.ofType(this._Writer);
        this._Library_books.ofType(this._Book);
        this._Writer.havingFeatures(this._Writer_name, this._Writer_books);
        this._Writer_name.ofType(LionCore_builtinsBase.INSTANCE._String);
        this._Writer_books.ofType(this._Book);
        this._wiredUp = true;
    }

    factory(receiveDelta?: DeltaReceiver): NodeBaseFactory {
        return (classifier: Classifier, id: LionWebId) => {
            switch (classifier.key) {
                case this._Book.key: return Book.create(id, receiveDelta);
                case this._Employee.key: return Employee.create(id, receiveDelta);
                case this._Library.key: return Library.create(id, receiveDelta);
                case this._Writer.key: return Writer.create(id, receiveDelta);
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


export class Book extends NodeBase {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Book {
        return new Book(libraryBase.INSTANCE.Book, id, receiveDelta, parentInfo);
    }

    private readonly _title: RequiredPropertyValueManager<string>;
    get title(): string {
        return this._title.get();
    }
    set title(newValue: string) {
        this._title.set(newValue);
    }

    private readonly _pages: RequiredPropertyValueManager<number>;
    get pages(): number {
        return this._pages.get();
    }
    set pages(newValue: number) {
        this._pages.set(newValue);
    }

    private readonly _category: RequiredPropertyValueManager<BookCategory>;
    get category(): BookCategory {
        return this._category.get();
    }
    set category(newValue: BookCategory) {
        this._category.set(newValue);
    }

    private readonly _authors: RequiredMultiContainmentValueManager<Writer>;
    get authors(): Writer[] {
        return this._authors.get();
    }
    addAuthors(newValue: Writer) {
        this._authors.add(newValue);
    }
    removeAuthors(valueToRemove: Writer) {
        this._authors.remove(valueToRemove);
    }
    addAuthorsAtIndex(newValue: Writer, index: number) {
        this._authors.insertAtIndex(newValue, index);
    }
    moveAuthors(oldIndex: number, newIndex: number) {
        this._authors.move(oldIndex, newIndex);
    }
    replaceAuthorsAtIndex(movedChild: Writer, newIndex: number) {
        this._authors.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._title = new RequiredPropertyValueManager<string>(libraryBase.INSTANCE.Book_title, this);
        this._pages = new RequiredPropertyValueManager<number>(libraryBase.INSTANCE.Book_pages, this);
        this._category = new RequiredPropertyValueManager<BookCategory>(libraryBase.INSTANCE.Book_category, this);
        this._authors = new RequiredMultiContainmentValueManager<Writer>(libraryBase.INSTANCE.Book_authors, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case libraryBase.INSTANCE.Book_title.key: return this._title;
            case libraryBase.INSTANCE.Book_pages.key: return this._pages;
            case libraryBase.INSTANCE.Book_category.key: return this._category;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === libraryBase.INSTANCE.Book_authors.key) {
            return this._authors;
        }
        return super.getContainmentValueManager(containment);
    }
}

export enum BookCategory {
    ScienceFiction = "library-BookCategory-ScienceFiction",
    Biographie = "library-BookCategory-Biographie",
    Mistery = "library-BookCategory-Mistery"
}

export class Employee extends NodeBase {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Employee {
        return new Employee(libraryBase.INSTANCE.Employee, id, receiveDelta, parentInfo);
    }

    private readonly _name: RequiredPropertyValueManager<string>;
    get name(): string {
        return this._name.get();
    }
    set name(newValue: string) {
        this._name.set(newValue);
    }

    private readonly _age: RequiredPropertyValueManager<number>;
    get age(): number {
        return this._age.get();
    }
    set age(newValue: number) {
        this._age.set(newValue);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._name = new RequiredPropertyValueManager<string>(libraryBase.INSTANCE.Employee_name, this);
        this._age = new RequiredPropertyValueManager<number>(libraryBase.INSTANCE.Employee_age, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case libraryBase.INSTANCE.Employee_name.key: return this._name;
            case libraryBase.INSTANCE.Employee_age.key: return this._age;
            default: return super.getPropertyValueManager(property);
        }
    }
}

export class Library extends NodeBase {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Library {
        return new Library(libraryBase.INSTANCE.Library, id, receiveDelta, parentInfo);
    }

    private readonly _name: RequiredPropertyValueManager<string>;
    get name(): string {
        return this._name.get();
    }
    set name(newValue: string) {
        this._name.set(newValue);
    }

    private readonly _address: RequiredPropertyValueManager<string>;
    get address(): string {
        return this._address.get();
    }
    set address(newValue: string) {
        this._address.set(newValue);
    }

    private readonly _employees: RequiredMultiContainmentValueManager<Employee>;
    get employees(): Employee[] {
        return this._employees.get();
    }
    addEmployees(newValue: Employee) {
        this._employees.add(newValue);
    }
    removeEmployees(valueToRemove: Employee) {
        this._employees.remove(valueToRemove);
    }
    addEmployeesAtIndex(newValue: Employee, index: number) {
        this._employees.insertAtIndex(newValue, index);
    }
    moveEmployees(oldIndex: number, newIndex: number) {
        this._employees.move(oldIndex, newIndex);
    }
    replaceEmployeesAtIndex(movedChild: Employee, newIndex: number) {
        this._employees.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _writers: RequiredMultiContainmentValueManager<Writer>;
    get writers(): Writer[] {
        return this._writers.get();
    }
    addWriters(newValue: Writer) {
        this._writers.add(newValue);
    }
    removeWriters(valueToRemove: Writer) {
        this._writers.remove(valueToRemove);
    }
    addWritersAtIndex(newValue: Writer, index: number) {
        this._writers.insertAtIndex(newValue, index);
    }
    moveWriters(oldIndex: number, newIndex: number) {
        this._writers.move(oldIndex, newIndex);
    }
    replaceWritersAtIndex(movedChild: Writer, newIndex: number) {
        this._writers.replaceAtIndex(movedChild, newIndex);
    }

    private readonly _books: RequiredMultiContainmentValueManager<Book>;
    get books(): Book[] {
        return this._books.get();
    }
    addBooks(newValue: Book) {
        this._books.add(newValue);
    }
    removeBooks(valueToRemove: Book) {
        this._books.remove(valueToRemove);
    }
    addBooksAtIndex(newValue: Book, index: number) {
        this._books.insertAtIndex(newValue, index);
    }
    moveBooks(oldIndex: number, newIndex: number) {
        this._books.move(oldIndex, newIndex);
    }
    replaceBooksAtIndex(movedChild: Book, newIndex: number) {
        this._books.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._name = new RequiredPropertyValueManager<string>(libraryBase.INSTANCE.Library_name, this);
        this._address = new RequiredPropertyValueManager<string>(libraryBase.INSTANCE.Library_address, this);
        this._employees = new RequiredMultiContainmentValueManager<Employee>(libraryBase.INSTANCE.Library_employees, this);
        this._writers = new RequiredMultiContainmentValueManager<Writer>(libraryBase.INSTANCE.Library_writers, this);
        this._books = new RequiredMultiContainmentValueManager<Book>(libraryBase.INSTANCE.Library_books, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        switch (property.key) {
            case libraryBase.INSTANCE.Library_name.key: return this._name;
            case libraryBase.INSTANCE.Library_address.key: return this._address;
            default: return super.getPropertyValueManager(property);
        }
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        switch (containment.key) {
            case libraryBase.INSTANCE.Library_employees.key: return this._employees;
            case libraryBase.INSTANCE.Library_writers.key: return this._writers;
            case libraryBase.INSTANCE.Library_books.key: return this._books;
            default: return super.getContainmentValueManager(containment);
        }
    }
}

export class Writer extends NodeBase {
    static create(id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage): Writer {
        return new Writer(libraryBase.INSTANCE.Writer, id, receiveDelta, parentInfo);
    }

    private readonly _name: RequiredPropertyValueManager<string>;
    get name(): string {
        return this._name.get();
    }
    set name(newValue: string) {
        this._name.set(newValue);
    }

    private readonly _books: RequiredMultiContainmentValueManager<Book>;
    get books(): Book[] {
        return this._books.get();
    }
    addBooks(newValue: Book) {
        this._books.add(newValue);
    }
    removeBooks(valueToRemove: Book) {
        this._books.remove(valueToRemove);
    }
    addBooksAtIndex(newValue: Book, index: number) {
        this._books.insertAtIndex(newValue, index);
    }
    moveBooks(oldIndex: number, newIndex: number) {
        this._books.move(oldIndex, newIndex);
    }
    replaceBooksAtIndex(movedChild: Book, newIndex: number) {
        this._books.replaceAtIndex(movedChild, newIndex);
    }

    public constructor(classifier: Classifier, id: LionWebId, receiveDelta?: DeltaReceiver, parentInfo?: Parentage) {
        super(classifier, id, receiveDelta, parentInfo);
        this._name = new RequiredPropertyValueManager<string>(libraryBase.INSTANCE.Writer_name, this);
        this._books = new RequiredMultiContainmentValueManager<Book>(libraryBase.INSTANCE.Writer_books, this);
    }

    getPropertyValueManager(property: Property): PropertyValueManager<unknown> {
        if (property.key === libraryBase.INSTANCE.Writer_name.key) {
            return this._name;
        }
        return super.getPropertyValueManager(property);
    }

    getContainmentValueManager(containment: Containment): ContainmentValueManager<INodeBase> {
        if (containment.key === libraryBase.INSTANCE.Writer_books.key) {
            return this._books;
        }
        return super.getContainmentValueManager(containment);
    }
}

