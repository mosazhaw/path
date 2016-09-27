import {Component, Input, Output, ElementRef} from '@angular/core';
import {FormFieldLabelComponent} from './../form-field-label.component';
import {ValueField} from "../value-field";
import {AutoCompleteFieldEntry} from "./auto-complete-field-entry";
import {Key} from "../../../page/element/page-element";
import {IForm} from "../../../pathinterface";
import {TranslationService} from "../../../service/translation.service";
import {PathService} from "../../../service/path.service";
import {Form} from "../../form.component";
import {FormFunction} from "../../form-function";

@Component({
    selector: 'path-autocomplete',
    host: {
        '(document:click)': 'handleClick($event)',
    },
    templateUrl: 'app/path-framework/form/field/auto-complete/auto-complete-field.component.html'
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
        if (this.field.isReadonly()) {
            return;
        }
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
    private _dataLoaded:boolean = false;
    private _wordSearchEnabled:boolean;
    private _valueSet:boolean = false;
    private _detailForm:string;
    private _keyType:string;
    private _url:string;

    constructor(protected form:IForm, protected translationService:TranslationService, protected pathService:PathService) {
        super(form, translationService);
    }

    public isReadonly() {
        return super.isReadonly() && this.isInitialValueSet;
    }

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
        if (value != null && value["key"] != null) {
            value = value["key"];
            this._keyType = value["name"];
        }
        this._valueSet = true;
        this.clearFilteredList();
        super.setValue(value);
        this.query = null;
        // must wait with display update until data is loaded
        let displaySetter = () => {
            if (!this.dataLoaded) {
                console.log("waiting...");
                window.setTimeout(function() { displaySetter() }, 250);
            } else {
                for (let item of this._data) {
                    if (item.key == value) {
                        this.query = item;
                    }
                }
            }
        }
        displaySetter();
    }

    public load() {
        this.pathService.serverGet(this.getForm().getApp().getBackendUrl(), this.url, (data:any) => {
            let dynamicData = [];
            for (let item of data) {
                let entry = new AutoCompleteFieldEntry();
                entry.key = item["key"]["key"];
                entry.text = item["name"];
                dynamicData.push(entry);
            }
            this.data = dynamicData;
            this.dataLoaded = true;
            this.setValue(this.value); // force display refresh
        }, null);
    }

    public getDetailButtonName() {
        if (this.value == null) {
            return this.translationService.getText("New") + "...";
        } else {
            return this.translationService.getText("Detail") + "...";
        }
    }

    public showDetailForm() {
        let form:Form = null;

        let formFunction = new FormFunction();
        formFunction.save = (data:any) => {
            this.getForm().getApp().closeCurrentForm();
            if (data["key"] != null) {
                this.setValue(data["key"]);
            }
            this.load();
        };
        formFunction.cancel = () => {
            this.getForm().getApp().closeCurrentForm();
        };

        if (this.value == null) {
            form = this.getForm().getApp().createForm(this.detailForm, null, null, formFunction, null);
        } else {
            form = this.getForm().getApp().createForm(this.detailForm, new Key(Number(this.value), this._keyType), null, formFunction, null);
        }
        this.form.getApp()["_formStack"].push(form); // TODO
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

    get dataLoaded(): boolean {
        return this._dataLoaded;
    }

    set dataLoaded(value: boolean) {
        this._dataLoaded = value;
    }

    get detailForm(): string {
        return this._detailForm;
    }

    set detailForm(value: string) {
        this._detailForm = value;
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }
}