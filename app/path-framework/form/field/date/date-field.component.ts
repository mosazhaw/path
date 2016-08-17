import {Component, Input, Output, ElementRef} from '@angular/core';
import {FormFieldLabelComponent} from './../form-field-label.component';
import {ValueField} from "../value-field";

@Component({
    selector: 'path-datefield',
    templateUrl: 'app/path-framework/form/field/date/date-field.component.html'
})
export class DateFieldComponent {
    @Input('field')
    @Output('field')
    field:DateField;
}

export class DateField extends ValueField<Date> {
}