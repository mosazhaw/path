import {Component, Input, Output} from "@angular/core";
import {ValueField} from "../value-field";

@Component({
    standalone: false,
    selector: "path-label-field",
    templateUrl: "label-field.component.html"
})
export class LabelFieldComponent {
    @Input("field")
    @Output("field")
    field!: LabelField;
}

export class LabelField extends ValueField<string> {
}
