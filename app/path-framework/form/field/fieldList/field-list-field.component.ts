import {Component, Input, Output, ElementRef} from '@angular/core';
import {ValueField} from "../value-field";
import {FormField} from "../form-field";

@Component({
    selector: 'path-field-list',
    templateUrl: 'app/path-framework/form/field/fieldList/field-list-field.component.html'
})
export class FieldListFieldComponent {
    @Input('field')
    @Output('field')
    field:FieldListField;
}

export class FieldListField extends ValueField<string[]> {
    private _labels:FormField[] = [];

    get labels(): FormField[] {
        return this._labels;
    }

    set labels(value: FormField[]) {
        this._labels = value;
    }
}