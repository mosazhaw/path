import * as path from './../../../path';

export class Radio extends path.FormField {
    private _value:boolean;

    get value():boolean {
        return this._value;
    }

    set value(value:boolean) {
        this._value = value;
    }
}