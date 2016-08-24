import {Form} from "../../../form/form.component";
import {PageElement, Key} from "../page-element";
import {PathService} from "../../../service/path.service";
import {Inject} from "@angular/core";
import * as path from '../../../path';

export class InlineForm extends PageElement {
    private _formId:string;
    private _url:string;
    private _form:Form;
    private _currentKey:Key;

    constructor(app:path.IPathApp, @Inject(PathService) private pathService:PathService) {
        super(app);
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    get formId(): string {
        return this._formId;
    }

    set formId(value: string) {
        this._formId = value;
    }

    get form(): Form {
        return this._form;
    }

    set form(value: Form) {
        this._form = value;
    }

    public loadNextForm() {
        if (this._url != null) {
            this.pathService.serverGet(this.app.getBackendUrl(), this.url, (data:any) => {
                if (data != null && data["length"] != null) {
                    let foundNewKey:boolean = false;
                    if (this._currentKey == null) {
                        let firstItem = data[0];
                        this._currentKey = new Key(firstItem["key"]["key"], firstItem["key"]["name"]);
                        foundNewKey = true;
                    } else {
                        let counter:number = 0;
                        for (let item of data) {
                            counter++;
                            if (item["key"]["key"] == this._currentKey.getKey() && item["key"]["name"] == this._currentKey.getName()) {
                                if (data.length > counter) {
                                    this._currentKey = new Key(data[counter]["key"]["key"], data[counter]["key"]["name"]);
                                    foundNewKey = true;
                                }
                                break;
                            }
                        }
                    }
                    if (this._currentKey != null && foundNewKey) {
                        console.log("load next inline form with key " + this._currentKey.getKey() + "/" + this._currentKey.getName());
                        let closeFunction = () => {
                            this.loadNextForm();
                        };
                        this._form = this.app.createForm(this._formId, this._currentKey, null, closeFunction, this);
                    } else {
                        this._form = null;
                    }
                }
            }, null);
        }
    }
}
