import {Component, Input, Output} from '@angular/core';
import {FormFieldLabelComponent} from './../form-field-label.component';
import {ValueField} from "../value-field";

@Component({
    selector: 'path-checkbox-group',
    templateUrl: 'checkbox-group.component.html'
})
export class CheckboxGroupComponent {
    @Input('field')
    @Output('field')
    field:CheckboxGroupField;
}

export class CheckboxGroupField extends ValueField<any[]> {
    private _entries:CheckboxGroupEntry[] = [];

    get entries():CheckboxGroupEntry[] {
        return this._entries;
    }

    set entries(value:CheckboxGroupEntry[]) {
        this._entries = value;
    }

    public doClick() {
        let values:any[] = [];
        for (let entry of this.entries) {
            if (entry.selected) {
                values.push(entry.key);
            }
        }
        this.setValue(values);
    }

    public setValue(values:any[]) {
        super.setValue(values);
        for (let entry of this.entries) {
            entry.selected = false;
        }
        for (let value of values) {
            for (let entry of this.entries) {
                if (entry.key == value) {
                    entry.selected = true;
                }
            }
        }
    }

    public fromJson(modelFormField) {
        super.fromJson(modelFormField);
        for (var entryModel of modelFormField["data"]) {
            let entry = new CheckboxGroupEntry();
            entry.name = entryModel.name;
            entry.key = entryModel.key;
            entry.selected = false;
            this.entries.push(entry);
        }
    }
}

export class CheckboxGroupEntry {
    private _key:any;
    private _name:string;
    private _selected:boolean;

    get key():any {
        return this._key;
    }

    set key(value:any) {
        this._key = value;
    }

    get name():string {
        return this._name;
    }

    set name(value:string) {
        this._name = value;
    }

    get selected():boolean {
        return this._selected;
    }

    set selected(value:boolean) {
        this._selected = value;
    }
}