import {Component, Input, Output} from '@angular/core';
import {ValueField} from "../value-field";
import {IForm} from "../../../pathinterface";
import {TranslationService} from "../../../service/translation.service";
import * as momentImported from 'moment'; const moment = momentImported;

@Component({
    selector: 'path-datefield',
    templateUrl: 'date-field.component.html'
})
export class DateFieldComponent {
    @Input('field')
    @Output('field')
    field:DateField;
}

export class DateField extends ValueField<Date> {

    private datePickerValue:Date;
    private initialValueSet:boolean = false;
    private datePickerInitialValue:Date;
    private dateInputFormat:string;

    constructor(protected form:IForm, protected translationService:TranslationService) {
        super(form, translationService);
        this.dateInputFormat = translationService.getUserDateFormat();
    }

    public setValue(value:Date) {
        if (typeof value === "string") {
            value = moment(value).toDate();
        }
        if (value != null && Object.prototype.toString.call(value) === "[object Date]") {
            // it is a date
            if ( isNaN( value.getTime() ) ) {
                value = null;
            } else {
                // cut off local timezone
                value = new Date(value.toDateString() + ' 00:00:00 GMT');
            }
        }
        else {
            value = null;
        }
        // update ui
        this.datePickerValue = value;
        super.setValue(value);
        if (!this.initialValueSet) {
            this.datePickerInitialValue = value;
            this.initialValueSet = true;
        }
    }

    public updateValueFromGui(value:Date) {
        if(value != null && isNaN(value.getDate())) {
            value == null;
            //this.datePickerValue = null;
        }
        if (value != null) {
            this.setValue(value);
            this.datePickerValue = this.value;
        }
    }
}