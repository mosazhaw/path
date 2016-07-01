import {FormField} from "../form-field";

export class Radio extends FormField {
    private _value:boolean;
    private _key:any;

    get value():boolean {
        return this._value;
    }

    set value(value:boolean) {
        this._value = value;
    }

    get key():any {
        return this._key;
    }

    set key(value:any) {
        this._key = value;
    }
}