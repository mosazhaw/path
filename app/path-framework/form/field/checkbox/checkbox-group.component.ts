import {Component, Input, Output} from '@angular/core';
import {FormField} from './../form-field';
import {FormFieldLabelComponent} from './../form-field-label.component';

@Component({
    selector: 'path-checkbox-group',
    templateUrl: 'app/path-framework/form/field/checkbox/checkbox-group.component.html',
    directives: [FormFieldLabelComponent]
})
export class CheckboxGroupComponent {
    @Input('field')
    @Output('field')
    field:CheckboxGroupField;
}

export class CheckboxGroupField extends FormField {
    private _entries:CheckboxGroupEntry[] = [];

    get entries():CheckboxGroupEntry[] {
        return this._entries;
    }

    set entries(value:CheckboxGroupEntry[]) {
        this._entries = value;
    }

    public fromJson(modelFormField) {
        super.fromJson(modelFormField);
        for (var entryModel of modelFormField["data"]) {
            let entry = new CheckboxGroupEntry();
            entry.name = entryModel.name;
            entry.id = entryModel.id;
            entry.selected = false;
            this.entries.push(entry);
        }
    }
}

export class CheckboxGroupEntry {
    private _id:string;
    private _name:string;
    private _selected:boolean;

    get id():string {
        return this._id;
    }

    set id(value:string) {
        this._id = value;
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