import {FormField} from "./form-field";

export class ValueField<T> extends FormField {
    private _value:T;
    private _isInitialValueSet:boolean = false;
    private _created:boolean = false;

    get value():T {
        return this._value;
    }

    public setValue(value:T) {
        this._value = value;
    }

    get created(): boolean {
        return this._created;
    }

    set created(value: boolean) {
        this._created = value;
    }

    public isReadonly():boolean {
        return this.readonly;
    }

    get isInitialValueSet(): boolean {
        return this._isInitialValueSet;
    }

    set isInitialValueSet(value: boolean) {
        this._isInitialValueSet = value;
    }

    public fromJson(modelFormField) {
        super.fromJson(modelFormField);
        if (modelFormField["value"] != null) {
            this.setValue(modelFormField["value"]);
        }
    }
}
