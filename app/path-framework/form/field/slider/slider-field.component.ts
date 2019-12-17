import {Component, Input, Output} from "@angular/core";
import {ValueField} from "../value-field";

@Component({
    selector: "path-slider",
    templateUrl: "slider-field.component.html"
})
export class SliderFieldComponent {
    @Input("field")
    @Output("field")
    field: SliderField;
}

export class SliderField extends ValueField<number> {
    private _min: number;
    private _max: number;
    public valueText = this.translationService.getText("SliderValue");

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

    public fromJson(modelFormField) {
        super.fromJson(modelFormField);
        if (modelFormField["min"] != null) {
            this.min = modelFormField["min"];
        }
        if (modelFormField["max"] != null) {
            this.max = modelFormField["max"];
        }
    }

}



