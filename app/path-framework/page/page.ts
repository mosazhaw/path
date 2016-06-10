import * as path from './../path';

export class Page {
    private _title:string;
    private _id:string;
    private _parentPageElement:path.PageElement;
    private _content:path.PageElement[] = [];

    get title():string {
        return this._title;
    }

    set title(value:string) {
        this._title = value;
    }

    get content():path.PageElement[] {
        return this._content;
    }

    set content(value:path.PageElement[]) {
        this._content = value;
    }

    get id():string {
        return this._id;
    }

    set id(value:string) {
        this._id = value;
    }

    get parentPageElement():path.PageElement {
        return this._parentPageElement;
    }

    set parentPageElement(value:path.PageElement) {
        this._parentPageElement = value;
    }
}
