import * as path from './../../../path';

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