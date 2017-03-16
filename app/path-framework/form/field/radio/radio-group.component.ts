import {Component, Input, Output, ElementRef} from '@angular/core';
import {Radio} from './radio';
import {FormFieldLabelComponent} from './../form-field-label.component';
import {ValueField} from "../value-field";

@Component({
    selector: 'path-radio-group',
    templateUrl: 'radio-group.component.html'
})
export class RadioGroupComponent {
    @Input('field')
    @Output('field')
    field:RadioGroupField;
}

export class RadioGroupField extends ValueField<string> {
    private _radios:Radio[] = [];
    private _horizontal:boolean;

    get radios():Radio[] {
        return this._radios;
    }

    set radios(value:Radio[]) {
        this._radios = value;
    }

    get horizontal():boolean {
        return this._horizontal;
    }

    set horizontal(value:boolean) {
        this._horizontal = value;
    }

    public setValue(value:string) {
        if (value != null) {
            value = value.toString();
        }
        super.setValue(value);
    }

    public updateValueFromGui(value:string) {
        this.setValue(value.toString());
    }

    public isReadonly() {
        return super.isReadonly() && this.isInitialValueSet;
    }

    public fromJson(modelFormField) {
        super.fromJson(modelFormField);
        this._horizontal = true;
        if (modelFormField["alignment"] != null) {
            if (modelFormField["alignment"] == "vertical") {
                this._horizontal = false;
            }
        }
        if (modelFormField["radios"] != null) {
            for (var radioModel of modelFormField["radios"]) {
                let radio = new Radio(this.getForm(), this.translationService);
                radio.name = radioModel.name;
                radio.key = radioModel.key;
                if (radio.key == modelFormField["defaultKey"]) {
                    this.setValue(radio.key);
                }
                this.radios.push(radio);
            }
        }
    }
}
