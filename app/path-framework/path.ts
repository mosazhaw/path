export interface PathApp {
    setCurrentForm(d:String);
    setCurrentPage(d:String);
}

export class Column {
    private elements:FormField[] = [];

    public addElement(element:FormField) {
        this.elements.push(element);
    }

    public getElements() {
        return this.elements;
    }
}

export class Page {
    private _title:String;

    get title():String {
        return this._title;
    }

    set title(value:String) {
        this._title = value;
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

export class FormField {
    private _app:PathApp;
    private _name:String;
    private _type:String;
    private _actions:Action[] = [];

    constructor(app:PathApp) {
        this._app = app;
    }

    get app():PathApp {
        return this._app;
    }

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

    get actions():Action[] {
        return this._actions;
    }

    set actions(value:Array) {
        this._actions = value;
    }
}

export class AutoComplete extends FormField {
    public query = '';
    public data = [];
    public filteredList = [];
    public elementRef;

    filter(value) {
        this.query = value;
        if (this.query !== "") {
            this.filteredList = this.data.filter(function (entry) {
                if (this.data.length > 5) {
                    return entry.toLowerCase().startsWith(this.query.toLowerCase());
                } else {
                    return entry.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                }
            }.bind(this));
        } else {
            this.filteredList = [];
        }
        this.filteredList.sort();
    }

    select(item) {
        this.query = item;
        this.filteredList = [];
    }

}

export class Button extends FormField {
    private _icon:String;
    private _color:String;
    private _page:String;
    private _form:String;

    public onClick() {
        if (this._page != null) {
            this.app.setCurrentPage(this._page);
        }
        if (this._form != null) {
            this.app.setCurrentForm(this._form);
        }
    }

    get icon():String {
        return this._icon;
    }

    set icon(value:String) {
        this._icon = value;
    }

    get color():String {
        return this._color;
    }

    set color(value:String) {
        this._color = value;
    }

    get page():String {
        return this._page;
    }

    set page(value:String) {
        this._page = value;
    }

    get form():String {
        return this._form;
    }

    set form(value:String) {
        this._form = value;
    }
}