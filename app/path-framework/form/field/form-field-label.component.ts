import {Component, Input, Output, ElementRef} from '@angular/core';

@Component({
    selector: 'path-form-field-label',
    templateUrl: 'form-field-label.component.html'
})
export class FormFieldLabelComponent {
    @Input('label')
    label:string;

    @Input('required')
    required:boolean;
}

