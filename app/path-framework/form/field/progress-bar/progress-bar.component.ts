import {Component, Input, Output} from '@angular/core';
import {FormFieldLabelComponent} from './../form-field-label.component';
import {ValueField} from "../value-field";

@Component({
    selector: 'path-progress-bar',
    templateUrl: 'progress-bar.component.html'
})
export class ProgressBarComponent {
    @Input('field')
    @Output('field')
    field:ProgressBarField;
}

export class ProgressBarField extends ValueField<number> {

    public fromJson(modelFormField) {
        super.fromJson(modelFormField);
        this.setValue(modelFormField["value"]);
    }

}