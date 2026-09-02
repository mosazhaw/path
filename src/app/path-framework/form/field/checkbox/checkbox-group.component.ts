import {Component, Input, Output} from "@angular/core";
import {ValueField} from "../value-field";

@Component({
    selector: "path-checkbox-group",
    templateUrl: "checkbox-group.component.html"
})
export class CheckboxGroupComponent {
    @Input("field")
    @Output("field")
    field!: CheckboxGroupField;
}

export class CheckboxGroupField extends ValueField<any[]> {
    private _entries: CheckboxGroupEntry[] = [];

    get entries(): CheckboxGroupEntry[] {
        return this._entries;
    }

    set entries(value: CheckboxGroupEntry[]) {
        this._entries = value;
    }

    public doClick() {
        const values: any[] = [];
        for (const entry of this.entries) {
            if (entry.selected) {
                values.push(entry.key);
            }
        }
        this.setValue(values);
    }

    public override setValue(values: any[]) {
        super.setValue(values);
        for (const entry of this.entries) {
            entry.selected = false;
        }
        for (const value of values) {
            for (const entry of this.entries) {
                if (entry.key === value) {
                    entry.selected = true;
                }
            }
        }
    }

    public override fromJson(modelFormField: { [x: string]: any; }) {
        super.fromJson(modelFormField);
        for (const entryModel of modelFormField["data"]) {
            const entry = new CheckboxGroupEntry();
            entry.name = entryModel.name;
            entry.key = entryModel.key;
            entry.selected = false;
            this.entries.push(entry);
        }
    }
}

export class CheckboxGroupEntry {
    private _key: any;
    private _name!: string;
    private _selected!: boolean;

    get key(): any {
        return this._key;
    }

    set key(value: any) {
        this._key = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get selected(): boolean {
        return this._selected;
    }

    set selected(value: boolean) {
        this._selected = value;
    }
}
