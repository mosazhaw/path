import {Component, Input, Output, ElementRef} from '@angular/core';
import {FormFieldLabelComponent} from './../form-field-label.component';
import {ValueField} from "../value-field";
import {IForm} from "../../../pathinterface";
import {TranslationService} from "../../../service/translation.service";
import moment = require("moment");

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

    private _isDatePickerVisible:boolean = false;
    private _formattedValue:string;

    constructor(protected form:IForm, protected translationService:TranslationService) {
        super(form, translationService);
    }

    public setValue(value:Date) {
        console.log("setting value " + value);
        if (typeof value === "string") {
            value = moment(value).toDate();
            console.log("setting date " + value);
        }
        super.setValue(value);
        this.formatDate();
    }

    public updateValueFromGui(value:string) {
        console.log(value);
        let dateValue:Date = moment(value, "DD.MM.YYYY").toDate();
        this.setValue(dateValue);
        console.log(dateValue);
    }

    public toggleDatePicker() {
        if (!this._isDatePickerVisible) {
            let date = moment(this.value);
            if(date == null || !date.isValid()) {
                this.setValue(new Date());
            }
        }
        this._isDatePickerVisible = !this._isDatePickerVisible;
    }

    public closeDatePicker() {
        this._isDatePickerVisible = false;
        // need to wait for updated model
        window.setTimeout(() => {
            this.formatDate();
        }, 1);
    }

    private formatDate() {
        if (this.value == null) {
            this._formattedValue = null;
        }
        try {
            this._formattedValue = new Intl.DateTimeFormat().format(this.value);
        } catch (e) {
            console.log("failed formatting date " + this.value);
        }
    }
}