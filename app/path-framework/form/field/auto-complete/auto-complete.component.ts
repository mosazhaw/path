import {Component, Input, Output, ElementRef} from '@angular/core';
import {FormFieldLabelComponent} from './../form-field-label.component';
import {ValueField} from "../value-field";

@Component({
    selector: 'path-autocomplete',
    host: {
        '(document:click)': 'handleClick($event)',
    },
    templateUrl: 'app/path-framework/form/field/auto-complete/auto-complete.component.html',
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
    private _query = '';
    private _filteredList:string[] = [];
    private _data = [];
    private _wordSearchEnabled:boolean;
    private _valueSet:boolean = false;

    filter() {
        console.log("filter: " + this.query);
        this._valueSet = false;
        if (this.query !== "" && this.query.length > 0 && this.query.replace(/\s/g, '').length == 0) {
            /* space: all */
            this._filteredList = this._data;
        }
        else if (this.query !== "") {
            /* search term: filter */
            this._filteredList = this._data.filter(function (entry) {
                if (entry.toLowerCase().indexOf(this.query.toLowerCase()) > -1) {
                    return true;
                } else if (this._wordSearchEnabled) {
                    let tokens:string[] = entry.toLowerCase().split(" ");
                    for (let token of tokens) {
                        if (token.startsWith(this.query.toLowerCase())) {
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

    select(item) {
        this._valueSet = true;
        this.setValue(item);
        this.clearFilteredList();
    }

    public setValue(value:string) {
        this._valueSet = true;
        this.clearFilteredList();
        super.setValue(value);
        this.query = value;
    }

    public clearFilteredList() {
        this._filteredList = [];
    }

    get query():string {
        return this._query;
    }

    set query(value:string) {
        this._query = value;
    }

    set data(value:string[]) {
        this._data = value;
    }

    get filteredList():string[] {
        return this._filteredList;
    }

    set wordSearchEnabled(value:boolean) {
        this._wordSearchEnabled = value;
    }

    get valueSet():boolean {
        return this._valueSet;
    }
}