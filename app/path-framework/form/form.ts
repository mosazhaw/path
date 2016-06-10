import * as path from './../path';

export class Form {
    private _title:String;
    private _fields:path.FormField[] = [];

    get title():String {
        return this._title;
    }

    set title(value:String) {
        this._title = value;
    }

    get fields():path.FormField[] {
        return this._fields;
    }

    set fields(value:path.FormField[]) {
        this._fields = value;
    }
}
