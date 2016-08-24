import {Component, Input, Output, ElementRef} from '@angular/core';
import {ValueField} from "../value-field";

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
    private _subfields:ValueField<any>[] = [];

    get subfields(): ValueField<any>[] {
        return this._subfields;
    }

    set subfields(value: ValueField<any>[]) {
        this._subfields = value;
    }
}