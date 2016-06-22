import {Component, Input, Output, ElementRef} from '@angular/core';
import {FormFieldLabelComponent} from './../form-field-label.component';
import {ValueField} from "../value-field";

@Component({
    selector: 'path-textfield',
    templateUrl: 'app/path-framework/form/field/text/text-field.component.html',
    directives: [FormFieldLabelComponent]
})
export class TextFieldComponent {
    @Input('field')
    @Output('field')
    field:TextField;
}

export class TextField extends ValueField<string> {
}