import {Component, Input, Output, ElementRef} from "@angular/core";
import {ValueField} from "../value-field";
import {AutoCompleteFieldEntry} from "./auto-complete-field-entry";
import {Key} from "../../../page/element/page-element";
import {IForm, IFormField} from "../../../pathinterface";
import {TranslationService} from "../../../service/translation.service";
import {PathService} from "../../../service/path.service";
import {FormFunction} from "../../form-function";
import {KeyUtility} from "../../../utility/key-utility";

@Component({
    selector: "path-autocomplete",
    // tslint:disable-next-line
    host: {
        "(document:click)": "handleClick($event)",
    },
    templateUrl: "auto-complete-field.component.html"
})
export class AutoCompleteComponent {
    @Input("field")
    @Output("field")
    field: AutoCompleteField;
    private _elementRef;

    constructor(myElement: ElementRef) {
        this._elementRef = myElement;
    }

    handleClick(event) {
        if (this.field.isReadonly()) {
            return;
        }
        let clickedComponent = event.target;
        let inside = false;
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
            this.field.setValue(null);
        }
    }
}

export class AutoCompleteField extends ValueField<string> {
    private _query: AutoCompleteFieldEntry;
    private _filteredList: AutoCompleteFieldEntry[] = [];
    private _data: AutoCompleteFieldEntry[] = [];
    private _dataLoaded = false;
    private _wordSearchEnabled: boolean;
    private _valueSet = false;
    private _detailForm: string;
    private _keyType: string;
    private _url: string;

    constructor(protected form: IForm, protected translationService: TranslationService, protected pathService: PathService) {
        super(form, translationService);
    }

    public isReadonly() {
        return super.isReadonly() && this.isInitialValueSet;
    }

    filter(query: string, event) {
        // do not filter readonly fields
        if (this.isReadonly()) {
            return;
        }
        // do not filter on simple tab focus change
        if (event.keyCode === 9) {
            return;
        }

        this._valueSet = false;
        if (query !== null && query.length > 0 && query.replace(/\s/g, "").length === 0) {
            /* space: all */
            this._filteredList = this._data.filter(function (entry) {
                return entry.active;
            }.bind(this));
        } else if (query !== null && query !== "") {
            /* search term: filter */
            query = query.trim();
            this._filteredList = this._data.filter(function (entry) {
                if (!entry.active) {
                    return false;
                }
                const entryName: string = entry.text;
                if (entryName.toLowerCase().indexOf(query.toLowerCase()) > -1) {
                    return true;
                } else if (this._wordSearchEnabled) {
                    const tokens: string[] = entryName.toLowerCase().split(" ");
                    for (const token of tokens) {
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

    select(item: AutoCompleteFieldEntry) {
        this.setValue(item.key);
    }

    focusLost() {
        window.setTimeout(() => {
            if (!this.valueSet) {
                // force angular to update query.text value
                if (this.value == null) {
                    this.resetDisplay(null);
                } else {
                    this.resetDisplay(this.value["key"]);
                }
            }
        }, 1);
    }

    public setValue(value: string) {
        const oldValue: string = this.value;

        // accept key values and complex objects
        if (value != null && value["key"] != null) {
            value = value["key"];
            this._keyType = value["name"];
        }
        this._valueSet = value != null;
        this.clearFilteredList();
        super.setValue(value);
        this.query = null;
        this.resetDisplay(value);
        // reload dependent autocomplete fields
        if (oldValue !== this.value) {
            for (const field of this.getForm().getFields()) {
                if (field instanceof AutoCompleteField) {
                    if ((<AutoCompleteField>field).id !== this.id) {
                        const autoCompleteField = <AutoCompleteField>field;
                        if (KeyUtility.variableExists(autoCompleteField.url, this.id)) {
                            autoCompleteField.load();
                        }
                    }
                }
            }
        }
    }

    public load() {
        this.dataLoaded = false;
        let url: string = this.url;
        for (const field of this.getForm().getFields()) {
            if (field instanceof ValueField) {
                const valueField = <ValueField<any>>field;
                url = KeyUtility.replaceVariable(url, valueField.id, valueField.value);
                console.log(url);
            }
        }
        this.pathService.serverGet(this.getForm().getApp().getBackendUrl(), url, (data: any) => {
            const dynamicData = [];
            for (const item of data) {
                const entry = new AutoCompleteFieldEntry();
                entry.key = item["key"]["key"];
                entry.text = item["name"];
                if (item["active"] != null) {
                    entry.active = item["active"];
                } else {
                    entry.active = true;
                }
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
        let form: IForm = null;

        const formFunction = new FormFunction();
        formFunction.save = (data: any) => {
            this.getForm().getApp().closeCurrentForm();
            if (data["key"] != null) {
                this.setValue(data["key"]);
            }
            this.load();
        };
        formFunction.cancel = () => {
            this.getForm().getApp().closeCurrentForm();
        };
        formFunction.delete = (data: any) => {
            this.getForm().getApp().closeCurrentForm();
            this.setValue(null);
            this.load();
        };

        if (this.value == null) {
            form = this.getForm().getApp().createForm(this.detailForm, null, null, formFunction, null);
        } else {
            form = this.getForm().getApp().createForm(this.detailForm, new Key(this.value, this._keyType), null, formFunction, null);
        }
        this.form.getApp()["_formStack"].push(form); // TODO
    }

    public clearFilteredList() {
        this._filteredList = [];
    }

    private resetDisplay(value: string) {
        // must wait with display update until data is loaded
        const displaySetter = () => {
            const keyValue = value;
            if (!this.dataLoaded) {
                console.log("waiting...");
                window.setTimeout(function () {
                    displaySetter();
                }, 250);
            } else {
                if (keyValue == null) {
                    window.setTimeout(() => {
                        // check value again, may have changed since reset was triggered
                        if (this.value == null) {
                            this.query = new AutoCompleteFieldEntry();
                        }
                    }, 1);
                } else {
                    for (const item of this._data) {
                        // tslint:disable:triple-equals
                        if (item.key == keyValue) {
                            window.setTimeout(() => {
                                this.query = item;
                            }, 1);
                            break;
                        }
                    }
                }
            }
        };
        displaySetter();
    }

    get query(): AutoCompleteFieldEntry {
        return this._query;
    }

    set query(value: AutoCompleteFieldEntry) {
        this._query = value;
    }

    set data(value: AutoCompleteFieldEntry[]) {
        this._data = value;
    }

    get filteredList(): AutoCompleteFieldEntry[] {
        return this._filteredList;
    }

    set wordSearchEnabled(value: boolean) {
        this._wordSearchEnabled = value;
    }

    get valueSet(): boolean {
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
