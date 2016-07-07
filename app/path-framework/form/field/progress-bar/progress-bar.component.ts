import {Component, Input, Output} from '@angular/core';
import {FormFieldLabelComponent} from './../form-field-label.component';
import {ValueField} from "../value-field";

@Component({
    selector: 'path-progress-bar',
    templateUrl: 'app/path-framework/form/field/progress-bar/progress-bar.component.html',
    directives: [FormFieldLabelComponent]
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