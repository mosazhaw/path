export interface PathApp {
    setCurrentForm(d:String);
    setCurrentPage(d:String);
}

export class PageElement {
    private _app:PathApp;
    private _name:String;
    private _type:String;

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
}

export class Page {
    private _title:String;
    private _content:PageElement[] = [];

    get title():String {
        return this._title;
    }

    set title(value:String) {
        this._title = value;
    }

    get content():PageElement[] {
        return this._content;
    }

    set content(value:PageElement[]) {
        this._content = value;
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

export class AutoComplete extends FormField {
    public query = '';
    public data = [];
    public filteredList = [];
    public elementRef;

    filter(value) {
        this.query = value;
        if (this.query.length > 0 && this.query.replace(/\s/g, '').length == 0) {
            /* space: all */
            this.filteredList = this.data;
        }
        else if (this.query !== "") {
            /* search term: filter */
            this.filteredList = this.data.filter(function (entry) {
                if (this.data.length > 15) {
                    return entry.toLowerCase().startsWith(this.query.toLowerCase());
                } else {
                    return entry.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                }
            }.bind(this));
        } else {
            /* empty: nothing */
            this.filteredList = [];
        }
        this.filteredList.sort();
    }

    select(item) {
        this.query = item;
        this.filteredList = [];
    }

}

export class PageButton extends PageElement {
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