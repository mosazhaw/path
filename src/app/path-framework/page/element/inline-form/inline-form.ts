import {Form} from "../../../form/form.component";
import {PageElement, Key} from "../page-element";
import {PathService} from "../../../service/path.service";
import {Inject} from "@angular/core";
import {FormFunction} from "../../../form/form-function";
import {TranslationService} from "../../../service/translation.service";
import {FocusUtility} from "../../../form/focus-utility";
import {IPathApp} from "../../../pathinterface";

export class InlineForm extends PageElement {
    private _formId!: string;
    private _url!: string;
    private _form!: Form;
    private _currentKey!: Key;
    private _page!: string;

    constructor(app: IPathApp,
                @Inject(PathService) private pathService: PathService,
                @Inject(TranslationService) private translationService: TranslationService) {
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

    get page(): string {
        return this._page;
    }

    set page(value: string) {
        this._page = value;
    }

    public override fromJson(modelFormField: any) {
        super.fromJson(modelFormField);
        if (modelFormField["form"] != null) {
            this.formId = modelFormField["form"];
        }
        if (modelFormField["page"] != null) {
            this.page = modelFormField["page"];
        }
        if (modelFormField["key"] == null) {
            // only set key if not set by model
            this.key = this.parentPageElement != null ? this.parentPageElement.key : <any>null;
        }
    }

    public loadNextForm(forward: boolean) {
        if (this._url != null) {
            this.pathService.serverGet(this.app.getBackendUrl(), this.url, (data: any) => {
                if (data != null && data["length"] != null && data.length > 0) {
                    let foundNewKey = false;
                    if (this._currentKey == null) {
                        const firstItem = data[0];
                        this._currentKey = new Key(firstItem["key"]["key"], firstItem["key"]["name"]);
                        foundNewKey = true;
                    } else {
                        let counter = 0;
                        for (const item of data) {
                            counter++;
                            if (item["key"]["key"] === this._currentKey.getKey() && item["key"]["name"] === this._currentKey.getName()) {
                                if (forward && data.length > counter) {
                                    this._currentKey = new Key(data[counter]["key"]["key"], data[counter]["key"]["name"]);
                                    foundNewKey = true;
                                } else if (!forward && counter > 1) {
                                    this._currentKey = new Key(data[counter - 2]["key"]["key"], data[counter - 2]["key"]["name"]);
                                    foundNewKey = true;
                                }
                                break;
                            }
                        }
                    }
                    if (this._currentKey != null && foundNewKey) {
                        console.log("load next inline form with key " + this._currentKey.getKey() + "/" + this._currentKey.getName());
                        const formFunction: FormFunction = new FormFunction();
                        formFunction.save = (formdata: any) => {
                            this.loadNextForm(true);
                        };
                        formFunction.cancel = () => {
                            this.loadNextForm(true);
                        };
                        formFunction.delete = (formdata: any) => {
                            this.loadNextForm(false);
                        };
                        this._form = this.app.createForm(this._formId, this._currentKey, <any>null, formFunction, this);
                        this.name = this._form.title;
                        window.setTimeout(() => { FocusUtility.focusFirstField(this.form); }, 1);
                    } else {
                        this._form = <any>null;
                        if (this.page == null) {
                            this.app.navigateBack();
                        } else {
                            this.app.setCurrentPage(this.page, this);
                        }
                    }
                } else {
                    window.alert(this.translationService.getText("NoDataError"));
                    this.app.navigateBack();
                }
            }, <any>null);
        }
    }
}
