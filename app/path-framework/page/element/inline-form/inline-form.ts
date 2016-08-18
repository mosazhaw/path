import {Form} from "../../../form/form.component";
import {PageElement} from "../page-element";
import {PathService} from "../../../service/path.service";
import {Inject} from "@angular/core";
import * as path from '../../../path';

export class InlineForm extends PageElement {
    private _formId:string;
    private _url:string;
    private _form:Form;

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
                    let item = data[0];
                    let key = item["key"];
                    console.log("load next inline form with key " + key);
                    this._form = this.app.createForm(this._formId, key, null, this);
                }
            }, null);
        }
    }
}
