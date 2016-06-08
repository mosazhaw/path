export interface IPathApp {
    setCurrentForm(formId:string, mode:string, handler:string);
    setCurrentPage(pageId:string, parentPageElement:PageElement);
    navigateBack();
}

export interface IFormHandler {
    doLoad(form:IForm);
    doSave(form:IForm);
    doValidate(form:IForm);
}

export interface IForm {
}

export class Page {
    private _title:string;
    private _id:string;
    private _parentPageElement:PageElement;
    private _content:PageElement[] = [];

    get title():string {
        return this._title;
    }

    set title(value:string) {
        this._title = value;
    }

    get content():PageElement[] {
        return this._content;
    }

    set content(value:PageElement[]) {
        this._content = value;
    }

    get id():string {
        return this._id;
    }

    set id(value:string) {
        this._id = value;
    }

    get parentPageElement():PageElement {
        return this._parentPageElement;
    }

    set parentPageElement(value:PageElement) {
        this._parentPageElement = value;
    }
}

export class PageElement {
    private _app:IPathApp;
    private _id:string;
    private _name:string;
    private _type:string;

    constructor(app:IPathApp) {
        this._app = app;
    }

    get app():IPathApp {
        return this._app;
    }

    get name():string {
        return this._name;
    }

    set name(value:string) {
        this._name = value;
    }

    get type():string {
        return this._type;
    }

    set type(value:string) {
        this._type = value;
    }

    get id():string {
        return this._id;
    }

    set id(value:string) {
        this._id = value;
    }
}

export class List extends PageElement {
    private _content:Button[] = [];
    private _search:boolean;

    get content():Button[] {
        return this._content;
    }

    set content(value:Button[]) {
        this._content = value;
    }

    get search():boolean {
        return this._search;
    }

    set search(value:boolean) {
        this._search = value;
    }
}

export class Button extends PageElement {
    private _icon:string;
    private _color:string;

    get icon():string {
        return this._icon;
    }

    set icon(value:string) {
        this._icon = value;
    }

    get color():string {
        return this._color;
    }

    set color(value:string) {
        this._color = value;
    }
}

export class PageButton extends Button {
    private _page:string;

    public onClick() {
        if (this._page != null) {
            this.app.setCurrentPage(this._page, this);
        }
    }

    get page():string {
        return this._page;
    }

    set page(value:string) {
        this._page = value;
    }
}

export class FormButton extends Button {
    private _form:string;
    private _mode:string;
    private _handler:string;

    public onClick() {
        if (this._form != null) {
            this.app.setCurrentForm(this._form, this._form, this.handler);
        }
    }

    get form():string {
        return this._form;
    }

    set form(value:string) {
        this._form = value;
    }

    get mode():string {
        return this._mode;
    }

    set mode(value:string) {
        this._mode = value;
    }

    get handler():string {
        return this._handler;
    }

    set handler(value:string) {
        this._handler = value;
    }
}

export class BackButton extends PageButton {

    public onClick() {
        this.app.navigateBack();
    }

}

export class Form {
    private _title:String;
    private _fields:FormField[] = [];

    get title():String {
        return this._title;
    }

    set title(value:String) {
        this._title = value;
    }

    get fields():FormField[] {
        return this._fields;
    }

    set fields(value:FormField[]) {
        this._fields = value;
    }
}

export class Action {
    private _name:String;
    private _type:String;

    get name():String {
        return this._name;
    }

    set name(value:String) {
        this._name = value;
    }

    get type():String {
        return this._type;
    }

    set type(value:String) {
        this._type = value;
    }
}

export class FormField extends PageElement {
    private _height:Number;
    private _visible:boolean;
    private _actions:Action[] = [];

    get actions():Action[] {
        return this._actions;
    }

    set actions(value:Action[]) {
        this._actions = value;
    }

    get height():Number {
        return this._height;
    }

    set height(value:Number) {
        this._height = value;
    }

    get visible():boolean {
        return this._visible;
    }

    set visible(value:boolean) {
        this._visible = value;
    }
}

export class TextField extends FormField {
    private _value:string;

    get value():string {
        return this._value;
    }

    set value(value:string) {
        this._value = value;
    }
}

export class RadioGroup extends FormField {
    private _radios:Radio[] = [];

    get radios():Radio[] {
        return this._radios;
    }

    set radios(value:Radio[]) {
        this._radios = value;
    }
}

export class Radio extends FormField {

}