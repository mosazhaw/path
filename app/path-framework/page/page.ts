import * as path from './../path';

export class Page {
    private _name:string;
    private _id:string;
    private _content:path.PageElement[] = [];

    public getShortName():string {
        if (this.name.length > 23) {
            return this.name.substr(0, 20) + "...";
        }
        return this.name;
    }

    get name():string {
        return this._name;
    }

    set name(value:string) {
        this._name = value;
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
}
