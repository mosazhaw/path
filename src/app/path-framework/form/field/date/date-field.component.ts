import {Component, Input, Output} from "@angular/core";
import {ValueField} from "../value-field";
import {IForm} from "../../../pathinterface";
import {TranslationService} from "../../../service/translation.service";
import momentImported from "moment";

const moment = momentImported;

@Component({
    selector: "path-datefield",
    templateUrl: "date-field.component.html"
})
export class DateFieldComponent {
    @Input("field")
    @Output("field")
    field!: DateField;
}

export class DateField extends ValueField<Date> {

    private _datePickerValue!: Date;
    private _initialValueSet = false;
    private _datePickerInitialValue!: Date;
    private _dateInputFormat: string;

    constructor(protected override form: IForm, protected override translationService: TranslationService) {
        super(form, translationService);
        this._dateInputFormat = translationService.getUserDateFormat();
    }

    get datePickerValue(): Date {
        return this._datePickerValue;
    }

    set datePickerValue(value: Date) {
        this._datePickerValue = value;
    }

    get initialValueSet(): boolean {
        return this._initialValueSet;
    }

    get datePickerInitialValue(): Date {
        return this._datePickerInitialValue;
    }

    get dateInputFormat(): string {
        return this._dateInputFormat;
    }

    public override setValue(value: Date) {
        if (typeof value === "string") {
            value = moment(value).toDate();
        }
        if (value != null && Object.prototype.toString.call(value) === "[object Date]") {
            // it is a date
            if (isNaN(value.getTime())) {
                value = <any>null;
            } else {
                // cut off local timezone
                value = new Date(value.toDateString() + " 00:00:00 GMT");
            }
        } else {
            value = <any>null;
        }
        // update ui
        this._datePickerValue = value;
        super.setValue(value);
        if (!this._initialValueSet) {
            this._datePickerInitialValue = value;
            this._initialValueSet = true;
        }
    }

    public updateValueFromGui(value: Date) {
        if (value != null && isNaN(value.getDate())) {
            value = <any>null;
        }
        if (value != null) {
            this.setValue(value);
            this._datePickerValue = this.value;
        }
    }
}
