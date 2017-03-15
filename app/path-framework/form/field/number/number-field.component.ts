import {Component, Input, Output, ElementRef} from '@angular/core';
import {ValueField} from "../value-field";

@Component({
    selector: 'path-numberfield',
    templateUrl: 'number-field.component.html'
})
export class NumberFieldComponent {
    @Input('field')
    @Output('field')
    field:NumberField;
}

export class NumberField extends ValueField<number> {
    private _min:number;
    private _max:number;
    private _digits:number;

    get min(): number {
        return this._min;
    }

    set min(value: number) {
        this._min = value;
    }

    get max(): number {
        return this._max;
    }

    set max(value: number) {
        this._max = value;
    }

    get digits(): number {
        return this._digits;
    }

    set digits(value: number) {
        this._digits = value;
    }

    public getStep():string {
        if (this._digits == null) {
            return "";
        } else if (this._digits == 0) {
            return "0";
        }
        // e.g. 3 => 0.001
        let step:string = "0.";
        for (let k=0; k<this._digits-1;k++) {
            step = step + "0";
        }
        return step + "1";
    }

    public fromJson(modelFormField) {
        super.fromJson(modelFormField);
        if (modelFormField["min"] != null) {
            this.min = modelFormField["min"];
        }
        if (modelFormField["max"] != null) {
            this.max = modelFormField["max"];
        }
        if (modelFormField["digits"] != null) {
            this.digits = modelFormField["digits"];
        }
    }
}