import {Component, Input, Output, ElementRef} from '@angular/core';
import {FormField} from './../form-field';
import {Radio} from './radio';
import {FormFieldLabelComponent} from './../form-field-label.component';

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

export class RadioGroupField extends FormField {
    private _radios:Radio[] = [];

    get radios():Radio[] {
        return this._radios;
    }

    set radios(value:Radio[]) {
        this._radios = value;
    }

    public doClick(name:string) {
        for (let radio of this.radios) {
            if (radio.name == name) {
                radio.value = true;
            } else {
                radio.value = false;
            }
        }
    }
}
