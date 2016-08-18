import {Component, Input, Output, ElementRef} from '@angular/core';
import {FormFieldLabelComponent} from './../form-field-label.component';
import {ValueField} from "../value-field";
import {LabelField} from "../label/label-field.component";

@Component({
    selector: 'path-label-list',
    templateUrl: 'app/path-framework/form/field/labelList/label-list-field.component.html'
})
export class LabelListFieldComponent {
    @Input('field')
    @Output('field')
    field:LabelListField;
}

export class LabelListField extends ValueField<string[]> {
    private _labels:LabelField[] = [];

    get labels(): LabelField[] {
        return this._labels;
    }

    set labels(value: LabelField[]) {
        this._labels = value;
    }
}