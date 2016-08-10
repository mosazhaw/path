import {FormField} from "./form-field";

export class ValueField<T> extends FormField {
    private _value:T;

    get value():T {
        return this._value;
    }

    public setValue(value:T) {
        this._value = value;
    }

    public isReadonly():boolean {
        return this.readonly && this._value != null;
    }

    public fromJson(modelFormField) {
        super.fromJson(modelFormField);
        if (modelFormField["value"] != null) {
            this.setValue(modelFormField["value"]);
        }
    }
}
