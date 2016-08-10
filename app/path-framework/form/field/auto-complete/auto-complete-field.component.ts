import {Component, Input, Output, ElementRef} from '@angular/core';
import {FormFieldLabelComponent} from './../form-field-label.component';
import {ValueField} from "../value-field";
import {AutoCompleteFieldEntry} from "./auto-complete-field-entry";

@Component({
    selector: 'path-autocomplete',
    host: {
        '(document:click)': 'handleClick($event)',
    },
    templateUrl: 'app/path-framework/form/field/auto-complete/auto-complete-field.component.html',
    directives: [FormFieldLabelComponent]
})
export class AutoCompleteComponent {
    @Input('field')
    @Output('field')
    field:AutoCompleteField;
    private _elementRef;

    constructor(myElement:ElementRef) {
        this._elementRef = myElement;
    }

    handleClick(event) {
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this._elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (!inside) {
            this.field.clearFilteredList();
        }
        if (!this.field.valueSet) {
            this.field.query = null;
        }
    }
}

export class AutoCompleteField extends ValueField<string> {
    private _query:AutoCompleteFieldEntry;
    private _filteredList:AutoCompleteFieldEntry[] = [];
    private _data:AutoCompleteFieldEntry[] = [];
    private _wordSearchEnabled:boolean;
    private _valueSet:boolean = false;

    filter(query:string) {
        console.log("filter: " + query);
        this._valueSet = false;
        if (query !== null && query.length > 0 && query.replace(/\s/g, '').length == 0) {
            /* space: all */
            this._filteredList = this._data;
        }
        else if (query !== null && query !== "") {
            /* search term: filter */
            this._filteredList = this._data.filter(function (entry) {
                let entryName:string = entry.text;
                if (entryName.toLowerCase().indexOf(query.toLowerCase()) > -1) {
                    return true;
                } else if (this._wordSearchEnabled) {
                    let tokens:string[] = entryName.toLowerCase().split(" ");
                    for (let token of tokens) {
                        if (token.startsWith(query.toLowerCase())) {
                            return true;
                        }
                    }
                }
                return false;
            }.bind(this));
        } else {
            /* empty: nothing */
            this.clearFilteredList();
        }
        this._filteredList.sort();
    }

    select(item:AutoCompleteFieldEntry) {
        this._valueSet = true;
        this.setValue(item.key);
        this.clearFilteredList();
    }

    public setValue(value:string) {
        // accept key values and complex objects
        if (value["key"] != null) {
            value = value["key"];
        }
        this._valueSet = true;
        this.clearFilteredList();
        super.setValue(value);
        this.query = null;
        for (let item of this._data) {
            if (item.key == value) {
                this.query = item;
            }
        }
    }

    public clearFilteredList() {
        this._filteredList = [];
    }

    get query():AutoCompleteFieldEntry {
        return this._query;
    }

    set query(value:AutoCompleteFieldEntry) {
        this._query = value;
    }

    set data(value:AutoCompleteFieldEntry[]) {
        this._data = value;
    }

    get filteredList():AutoCompleteFieldEntry[] {
        return this._filteredList;
    }

    set wordSearchEnabled(value:boolean) {
        this._wordSearchEnabled = value;
    }

    get valueSet():boolean {
        return this._valueSet;
    }
}