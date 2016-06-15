import {Component, Input, Output, ElementRef} from '@angular/core';
import {FormField} from './../form-field';
import {FormFieldLabelComponent} from './../form-field-label.component';

@Component({
    selector: 'path-checkbox-list',
    templateUrl: 'app/path-framework/form/field/checkbox-list/checkbox-list.component.html',
    directives: [FormFieldLabelComponent]
})
export class CheckboxListComponent {
    @Input('field')
    @Output('field')
    field:CheckboxListField;
}

export class CheckboxListField extends FormField {
    private _entries:CheckboxListEntry[] = [];

    get entries():CheckboxListEntry[] {
        return this._entries;
    }

    set entries(value:CheckboxListEntry[]) {
        this._entries = value;
    }
}

export class CheckboxListEntry {
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