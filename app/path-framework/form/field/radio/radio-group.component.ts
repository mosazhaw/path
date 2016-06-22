import {Component, Input, Output, ElementRef} from '@angular/core';
import {Radio} from './radio';
import {FormFieldLabelComponent} from './../form-field-label.component';
import {ValueField} from "../value-field";

@Component({
    selector: 'path-radio-group',
    templateUrl: 'app/path-framework/form/field/radio/radio-group.component.html',
    directives: [FormFieldLabelComponent]
})
export class RadioGroupComponent {
    @Input('field')
    @Output('field')
    field:RadioGroupField;
}

export class RadioGroupField extends ValueField<any> {
    private _radios:Radio[] = [];

    get radios():Radio[] {
        return this._radios;
    }

    set radios(value:Radio[]) {
        this._radios = value;
    }

    public doClick(key:string) {
        for (let radio of this.radios) {
            if (radio.key == key) {
                this.setValue(key);
            }
        }
    }

    public setValue(value:string) {
        super.setValue(value);
        for (let radio of this.radios) {
            if (radio.key == value) {
                radio.value = true;
            } else {
                radio.value = false;
            }
        }
    }

    public fromJson(modelFormField) {
        super.fromJson(modelFormField);
        for (var radioModel of modelFormField["radios"]) {
            let radio = new Radio(this.getForm());
            radio.name = radioModel.name;
            radio.key = radioModel.key;
            if (radio.key == modelFormField["defaultKey"]) {
                radio.value = true;
            } else {
                radio.value = false;
            }
            this.radios.push(radio);
        }
    }
}
