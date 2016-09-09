import {Component, Input, Output, ElementRef} from '@angular/core';
import {FormFieldLabelComponent} from './../form-field-label.component';
import {ValueField} from "../value-field";

@Component({
    selector: 'path-textfield',
    templateUrl: 'app/path-framework/form/field/text/text-field.component.html'
})
export class TextFieldComponent {
    @Input('field')
    @Output('field')
    field:TextField;
}

export class TextField extends ValueField<string> {

    private _isPassword:boolean = false;

    get isPassword(): boolean {
        return this._isPassword;
    }

    set isPassword(value: boolean) {
        this._isPassword = value;
    }

    public fromJson(modelFormField) {
        super.fromJson(modelFormField);
        if (modelFormField["isPassword"] != null) {
            this.isPassword = (modelFormField["isPassword"]);
        }
    }

}