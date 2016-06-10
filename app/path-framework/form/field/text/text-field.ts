import * as path from './../../../path';

export class TextField extends path.FormField {
    private _value:string;

    get value():string {
        return this._value;
    }

    set value(value:string) {
        this._value = value;
    }
}