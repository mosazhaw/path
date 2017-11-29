import * as path from './path';
import * as autocomplete from './form/field/auto-complete/auto-complete-field.component';
import 'rxjs/add/operator/map';
import {AutoCompleteFieldEntry} from "./form/field/auto-complete/auto-complete-field-entry";
import {ValueField} from "./form/field/value-field";
import {FieldListField} from "./form/field/fieldList/field-list-field.component";
import {LabelField} from "./form/field/label/label-field.component";
import {IPageElement} from "./pathinterface";
import {RadioGroupField} from "./form/field/radio/radio-group.component";
import {Key} from "./page/element/page-element";
import {KeyUtility} from "./key-utility";
import {FormFunction} from "./form/form-function";
import {TranslationService} from "./service/translation.service";

export abstract class PathAppComponent implements path.IPathApp {

    private _pageStack:path.Page[] = [];
    private _formStack:path.Form[] = [];
    private _userId:string;
    private _texts:string[]= [];
    private _version:string;

    constructor(private pathService:path.PathService, private translationService:TranslationService) {
        this.pathService.serverGet(this.getBackendUrl(), "/ping", (data:any) => {
            let backendVersion = data["version"];
            if (backendVersion != this.getFrontendVersion()) {
                backendVersion = "Version mismatch: Backend (" + backendVersion + "), Frontend (" + this.getFrontendVersion() + "). Please clear cache or check server installation.";
                window.alert(backendVersion);
            }
            this._version = backendVersion;
            if (data["userId"] != null && data["userId"] != "") {
                this._userId = data["userId"];
                this.setCurrentPage(this.getStartPage(), null);
            }
        }, (err:any) => { console.error(err); });
        this.loadApplicationTexts();
    }

    protected abstract getStartPage():string;

    protected getApplicationLogo():string {
        return null;
    }

    protected abstract getOwnUserForm():string;

    protected abstract getGuiModel();

    protected abstract getBeans();

    protected abstract getHandlers();

    public abstract getBackendUrl():string;

    protected abstract getFrontendVersion():string;

    public isLoading():boolean {
        return this.pathService.isLoading();
    }

    private loadApplicationTexts() {
        this._texts["Logout"] = this.translationService.getText("Logout");
        this._texts["NotSignedIn"] = this.translationService.getText("NotSignedIn");
        this._texts["SignedInAs"] = this.translationService.getText("SignedInAs");
    }

    public getUserId():string {
        return this._userId;
    }

    public login(event, userId:string, password:string) {
        let credentials:any = {};
        credentials["username"] = userId;
        credentials["password"] = password;
        this.pathService.serverPost(this.getBackendUrl(), "/login", credentials, (data:any) => {
            console.log("login ok, language code: " + data["languageCode"] + ", jwt:" + data["jwt"]);
            sessionStorage.setItem("languageCode", data["languageCode"]);
            this._userId = userId;
            this.loadApplicationTexts();
            this.setCurrentPage(this.getStartPage(), null); // set start page
        }, (err:any) => {
            this.pathService.hideLoading();
            if (this.getBackendUrl().indexOf("heroku") > 0) {
                alert("Login failed. Please try again after 30sec, because the Heroku backend server may be sleeping due to inactivity.")
            } else {
                alert("Login failed.")
            }
            console.error("failed login");
        });
    }

    public logout() {
        sessionStorage.clear();
        this._userId == null;
        console.log("logout user " + this._userId);
        location.reload();
    }

    public showUserForm() {
        this.setCurrentForm(this.getOwnUserForm(), new Key(0, "userId"), null, null); // TODO set correct key
    }

    public closeCurrentForm() {
        this._formStack.pop();
    }

    public refreshCurrentPage() {
        for (let element of this._pageStack[this._pageStack.length - 1].content) {
            if (element instanceof path.List) {
                (<path.List>element).refresh();
            }
        }
        // breadcrumbs
        if (this._pageStack[this._pageStack.length - 2] != null) {
            for (let element of this._pageStack[this._pageStack.length - 2].content) {
                if (element instanceof path.List) {
                    (<path.List>element).refresh();
                }
            }
        }
    }

    public navigateBack() {
        this._pageStack.pop();
        this.refreshCurrentPage();
    }

    public navigateToPage(pageNumber:number) {
        for (let k = this._pageStack.length - 1; k > pageNumber; k--) {
            console.log("back");
            this.navigateBack();
        }
    }

    public yesNo(text:string, yesHandler : () => void, noHandler : () => void) {
        let form:path.Form = new path.Form(this.pathService, this);
        form.formFunction = new FormFunction();
        form.formFunction.save = (data:any) => {
            this.closeCurrentForm();
            this.refreshCurrentPage();
        };
        form.formFunction.cancel = () => {
            this.closeCurrentForm();
        };
        let message:path.TextField = new path.TextField(form, this.translationService);
        message.type = "label";
        message.visible = true;
        message.labelVisible = false;
        message.setValue(text);
        form.fields.push(message);

        let cancelButton:path.CancelButton = new path.CancelButton(form, this.translationService);
        cancelButton.type = "cancelButton";
        cancelButton.name = this.translationService.getText("Cancel");
        cancelButton.visible = true;
        form.fields.push(cancelButton);

        let okButton:path.OkButton = new path.OkButton(form, this.translationService);
        okButton.type = "okButton";
        okButton.name = this.translationService.getText("Ok");
        okButton.visible = true;
        okButton.handler = {
            doClick(button:path.IButton) {
                yesHandler();
            }
        };
        form.fields.push(okButton);

        form.updateRows();
        this._formStack.push(form);
    }

    public setCurrentPage(pageId:string, parentPageElement:path.PageElement) {
        let page:path.Page = null;

        for (var modelPage of this.getGuiModel().application.pageList) {
            if (modelPage.id == pageId) {
                page = new path.Page();
                page.id = pageId;
                page.name = this.translationService.getText(modelPage.name);
                if (parentPageElement != null) {
                    page.name = parentPageElement.name;
                }
                for (var modelElement of modelPage.elementList) {
                    // element
                    let element:path.PageElement = null;
                    switch (modelElement.type) {
                        case "button":
                        case "newButton":
                            let button = new path.Button(this, this.pathService);
                            button.setIcon(modelElement["icon"]);
                            button.setColor(modelElement["color"]);
                            if (modelElement["form"] != null) {
                                button.setForm(modelElement["form"]["form"]);
                                button.setFormHandler(modelElement["form"]["handler"]);
                            }
                            button.setPage(modelElement["page"]);
                            if (modelElement["buttonhandler"] != null) {
                                button.handler = new (this.getHandlers()[modelElement["buttonhandler"]]);
                            }
                            if (parentPageElement != null && modelElement.type == "button") {
                                    button.key = parentPageElement.key;
                            }
                            button.name = this.translationService.getText(modelElement["name"]);
                            button.url = KeyUtility.translateUrl(modelElement["url"], null, false, parentPageElement);
                            element = button;
                            break;
                        case "deleteButton":
                            let deleteButton = new path.PageDeleteButton(this, this.pathService, this.translationService);
                            deleteButton.url = KeyUtility.translateUrl(modelElement["url"], null, false, parentPageElement);
                            element = deleteButton;
                            break;
                        case "downloadButton": // deprecated
                        case "linkButton":
                            let downloadButton = new path.LinkButton(this, this.pathService);
                            downloadButton.url = KeyUtility.translateUrl(modelElement["url"], null, false, parentPageElement);
                            downloadButton.setIcon(modelElement["icon"]);
                            downloadButton.setColor(modelElement["color"]);
                            downloadButton.name = this.translationService.getText(modelElement["name"]);
                            element = downloadButton;
                            break;
                        case "backbutton":
                            element = new path.BackButton(this, this.pathService, this.translationService);
                            break;
                        case "inlineForm":
                            let inlineForm = new path.InlineForm(this, this.pathService, this.translationService);
                            inlineForm.url = KeyUtility.translateUrl(modelElement["url"], inlineForm.getKey(), true, parentPageElement);
                            inlineForm.formId = modelElement["form"];
                            inlineForm.key = parentPageElement.key;
                            inlineForm.loadNextForm(true);
                            element = inlineForm;
                            break;
                        case "list":
                            let dynamicList:path.List = new path.List(this, this.pathService, this.translationService);
                            dynamicList.search = modelElement["search"];
                            // handler
                            if (modelElement["handler"] != null) {
                                dynamicList.handler = new (this.getHandlers()[modelElement["handler"]]);
                            }
                            if (modelElement["buttonhandler"] != null) {
                                dynamicList.buttonHandler = new (this.getHandlers()[modelElement["buttonhandler"]]);
                            }
                            dynamicList.url = KeyUtility.translateUrl(modelElement["url"], null, false, parentPageElement);
                            dynamicList.color = modelElement["color"];
                            if (modelElement["form"] != null) {
                                dynamicList.form = modelElement["form"]["form"];
                                dynamicList.formHandler = modelElement["form"]["handler"];
                            }
                            dynamicList.page = modelElement["page"];
                            dynamicList.icon = modelElement["icon"];
                            dynamicList.mockData = modelElement["data"];
                            dynamicList.name = this.translationService.getText(modelElement["name"]);
                            dynamicList.refresh();
                            element = dynamicList;
                            break;
                        case "ChartElement":
                            let chart = new path.ChartElement(this, this.pathService, this.translationService);
                            chart.url = KeyUtility.translateUrl(modelElement["url"], null, false, parentPageElement);
                            element = chart;
                            break;
                    }
                    if (modelElement["permissionUrl"] != null) {
                        element.visible = false;
                        let permissionUrl:string = KeyUtility.translateUrl(modelElement["permissionUrl"], null, false, parentPageElement);
                        let permissionHandler = (permissionElement:path.PageElement) => (data:any) => {
                            permissionElement.visible = data["permission"];
                        }
                        this.pathService.serverGet(this.getBackendUrl(), permissionUrl, permissionHandler(element), null);
                    }
                    element.type = modelElement.type;
                    element.parentPageElement = parentPageElement;
                    if (modelElement["width"] != null) {
                        element.width = modelElement["width"];
                    } else {
                        element.width = 1;
                    }
                    page.content.push(element);
                }
            }
        }

        if (page == null && pageId != null) {
            this.pathService.addAlert("Missing page", pageId);
        } else {
            this._pageStack.push(page);
        }
    }

    public setCurrentForm(formId:string, key:Key, handler:string, parentPageElement:path.IPageElement) {
        let setCurrentForm = () => {
            // build form function
            let formFunction:FormFunction  = new FormFunction();
            formFunction.save = () => {
                this.closeCurrentForm();
                this.refreshCurrentPage();
            };
            formFunction.cancel = () => {
                this.closeCurrentForm();
            };
            formFunction.delete = () => {
                this.closeCurrentForm();
                let parent:path.IPageElement = parentPageElement;
                if (parent != null && parent instanceof path.PageElement && (<path.PageElement>parent).listElement) {
                    this.refreshCurrentPage();
                } else {
                    this.navigateBack();
                    this.refreshCurrentPage();
                }
            };
            let form:path.Form = this.createForm(formId,key,handler,formFunction, parentPageElement);
            if (form != null) {
                this._formStack.push(form);
            }
        }

        // check permission
        let modelForm = this.getModelForm(formId);
        if (modelForm != null && modelForm["permissionUrl"] != null) {
            let suffix:string = "/update";
            if (key == null) {
                suffix = "/create";
            }
            let permissionUrl:string = KeyUtility.translateUrl(modelForm["permissionUrl"] + suffix, key, false, parentPageElement);
                this.pathService.serverGet(this.getBackendUrl(), permissionUrl, (data:any) => {
                    if (!data["permission"]) {
                        window.alert(this.translationService.getText("NoPermissionError"));
                    } else {
                        setCurrentForm();
                    }
                }, null);
        } else {
            setCurrentForm();
        }
    }

    private getModelForm(formId:string) {
        let result = null;
        for (var modelForm of this.getGuiModel().application.formList) {
            if (modelForm.id === formId) {
                result = modelForm;
            }
        }
        if (result == null && formId != null) {
            this.pathService.addAlert("Missing form", formId);
        }
        return result;
    }

    public createForm(formId:string, key:Key, handler:string, formFunction:FormFunction, parentPageElement:path.IPageElement):path.Form {
        let form:path.Form = null;
        let modelForm = this.getModelForm(formId);
            if (modelForm != null) {
                // create form
                form = new path.Form(this.pathService, this);
                form.key = key;
                form.formFunction = formFunction;
                form.title = this.translationService.getText(modelForm.title);
                form.url = modelForm["url"];
                for (var modelFormField of modelForm.formFieldList) {
                    // create form fields
                    let formField:path.FormField = null;
                    switch (modelFormField.type) {
                        case "text":
                        {
                            formField = new path.TextField(form, this.translationService);
                            formField.fromJson(modelFormField);
                            break;
                        }
                        case "translation":
                        {
                            formField = new path.TranslationField(form, this.pathService, this.translationService);
                            formField.fromJson(modelFormField);
                            break;
                        }
                        case "number":
                        {
                            formField = new path.NumberField(form, this.translationService);
                            formField.fromJson(modelFormField);
                            break;
                        }
                        case "label":
                        {
                            formField = new path.LabelField(form, this.translationService);
                            formField.fromJson(modelFormField);
                            break;
                        }
                        case "fieldList":
                        {
                            formField = new path.FieldListField(form, this.translationService);
                            formField.name = "list";
                            formField.fromJson(modelFormField);
                            if (modelFormField["url"] != null) {
                                let fieldListUrl:any = KeyUtility.translateUrl(modelFormField["url"], form.getKey(), false, parentPageElement);
                                let modelId:string = modelFormField["id"];
                                this.pathService.serverGet(this.getBackendUrl(), fieldListUrl, (data:any) => {
                                    let counter:number = 1;
                                    for (let item of data) {
                                        let dynamicField:ValueField<any> = null;
                                        if (item["type"] == "label") {
                                            dynamicField = new LabelField(form, this.translationService);
                                        } else if (item["type"] == "text") {
                                            dynamicField = new path.TextField(form, this.translationService);
                                        } else if (item["type"] == "translation") {
                                            dynamicField = new path.TranslationField(form, this.pathService, this.translationService);
                                        } else if (item["type"] == "number") {
                                            dynamicField = new path.NumberField(form, this.translationService);
                                        }
                                        dynamicField.fromJson(item);
                                        dynamicField.name = item["name"]; // do not use translation service
                                        dynamicField.id = modelId + counter;
                                        (<FieldListField>formField).subfields.push(dynamicField);
                                        counter++;
                                    }
                                    form.updateRows();
                                    (<FieldListField>formField).created = true;
                                }, null);
                            }
                            break;
                        }
                        case "date":
                        {
                            formField = new path.DateField(form, this.translationService);
                            formField.fromJson(modelFormField);
                            break;
                        }
                        case "autocomplete":
                        {
                            let autoCompleteFormField = new autocomplete.AutoCompleteField(form, this.translationService, this.pathService);
                            autoCompleteFormField.detailForm = modelFormField["form"];
                            autoCompleteFormField.wordSearchEnabled = modelFormField["wordSearchEnabled"];
                            if (modelFormField["data"] != null) {
                                let data = [];
                                let k:number = 0;
                                for (let item of modelFormField["data"]) {
                                    let entry = new AutoCompleteFieldEntry();
                                    entry.text = item;
                                    entry.key = k;
                                    data.push(entry);
                                    k++;
                                }
                                autoCompleteFormField.data = data;
                                autoCompleteFormField.dataLoaded = true;
                            }
                            else if (modelFormField["url"] != null) {
                                let autoCompleteFormFieldUrl:string = KeyUtility.translateUrl(modelFormField["url"], form.key, false, parentPageElement);
                                autoCompleteFormField.url = autoCompleteFormFieldUrl;
                                autoCompleteFormField.load();
                            }
                            else {
                                autoCompleteFormField.dataLoaded = true;
                            }
                            formField = autoCompleteFormField;
                            formField.fromJson(modelFormField);
                            break;
                        }
                        case "RadioGroupField":
                        {
                            let radioGroupFormField = new path.RadioGroupField(form, this.translationService);
                            if (modelFormField["url"] != null) {
                                let radiosUrl:any = KeyUtility.translateUrl(modelFormField["url"], form.getKey(), false, parentPageElement);
                                let radioLoader = (rgField:RadioGroupField) => (data:any) => {
                                    for (let item of data) {
                                        let radio = new path.Radio(form, this.translationService);
                                        radio.name = item["name"];
                                        radio.key = item["key"]["key"].toString(); // force radio key type string for angular2
                                        if (radio.key == item["defaultKey"]) {
                                            rgField.setValue(radio.key);
                                        }
                                        rgField.radios.push(radio);
                                    }
                                    rgField.created = true;
                                    console.log("radio group field created: " + rgField.id);
                                }
                                let radioLoaderForField = radioLoader(radioGroupFormField);
                                this.pathService.serverGet(this.getBackendUrl(), radiosUrl, radioLoaderForField, null);
                            } else {
                                radioGroupFormField.created = true;
                            }
                            radioGroupFormField.fromJson(modelFormField);
                            formField = radioGroupFormField;
                            break;
                        }
                        case "CheckboxGroupField":
                        {
                            let checkboxGroupField = new path.CheckboxGroupField(form, this.translationService);
                            checkboxGroupField.fromJson(modelFormField);
                            formField = checkboxGroupField;
                            break;
                        }
                        case "ProgressBarField":
                        {
                            let progressBarField = new path.ProgressBarField(form, this.translationService);
                            progressBarField.fromJson(modelFormField);
                            formField = progressBarField;
                            break;
                        }
                        case "okButton":
                        {
                            formField = new path.OkButton(form, this.translationService);
                            formField.fromJson(modelFormField);
                            break;
                        }
                        case "cancelButton":
                        {
                            formField = new path.CancelButton(form, this.translationService);
                            formField.fromJson(modelFormField);
                            break;
                        }
                        case "deleteButton":
                        {
                            formField = new path.FormDeleteButton(form, this.translationService);
                            formField.fromJson(modelFormField);
                            if (form.key == null) {
                                formField.visible = false;
                            }
                            break;
                        }
                        case "previousButton":
                        {
                            formField = new path.PreviousButton(form, this.translationService);
                            formField.fromJson(modelFormField);
                            if (form.key == null) {
                                formField.visible = false;
                            }
                            break;
                        }
                        default:
                        {
                            formField = new path.FormField(form, this.translationService);
                            formField.fromJson(modelFormField);
                        }
                    }
                    // Field permission (move code to FormField)
                    if (modelFormField["permissionUrl"] != null) {
                        formField.readonly = false;
                        let permissionUrl:string = KeyUtility.translateUrl(modelFormField["permissionUrl"], formField.getForm().getKey(), false, parentPageElement);
                        let permissionHandler = (permissionElement:path.FormField) => (data:any) => {
                            permissionElement.readonly = !data["permission"];
                        }
                        this.pathService.serverGet(formField.getForm().getApp().getBackendUrl(), permissionUrl, permissionHandler(formField), null);
                    }
                    // search parents for defaultKey
                    if (formField instanceof ValueField && modelFormField["defaultKey"] != null) {
                        let pageElement:IPageElement = parentPageElement;
                        while (pageElement != null) {
                            if (pageElement.getKey() != null && pageElement.getKey().getName() == modelFormField["defaultKey"]) {
                                (<ValueField<any>>formField).setValue(pageElement.getKey().getKey());
                                (<ValueField<any>>formField).isInitialValueSet = true;
                                pageElement = null;
                            } else {
                                pageElement = pageElement.getParent();
                            }
                        }
                    }
                    form.fields.push(formField);
                }
                form.updateRows();

                // fetch data from backend
                if (form.url != null && form.key != null) {
                    form.url = KeyUtility.translateUrl(form.url, form.getKey(), true, parentPageElement);
                    this.pathService.serverGet(this.getBackendUrl(), form.url, (data:any) => {
                        for (let field of form.fields) {
                            if (data[field.id] != null && field instanceof path.ValueField) {
                                if (field instanceof RadioGroupField) {
                                    // TODO general solution
                                    let setValueOfRadioGroupFieldContextWrapper = () => {
                                        let f:RadioGroupField = <RadioGroupField>field;
                                        let v:any = data[field.id];
                                        //noinspection TypeScriptUnresolvedFunction
                                        setValueOfRadioGroupField(f, v);
                                    }
                                    let setValueOfRadioGroupField = (radioGroupField:RadioGroupField, value:any) => {
                                        if(!radioGroupField.created) {
                                            console.log("Waiting for RadioGroupField " + radioGroupField.id);
                                            console.log(radioGroupField.created);
                                            window.setTimeout(setValueOfRadioGroupFieldContextWrapper, 50); // wait then try again
                                            return;
                                        }
                                        console.log("setting radiogroupfield value");
                                        if (value != null) {
                                            value = value.toString(); // force radio key type string for angular2
                                        }
                                        radioGroupField.setValue(value);
                                        radioGroupField.isInitialValueSet = true;
                                    }
                                    setValueOfRadioGroupFieldContextWrapper();
                                } else {
                                    (<path.ValueField<any>>field).setValue(data[field.id]);
                                    (<path.ValueField<any>>field).isInitialValueSet = true;
                                }
                            }
                            if (field instanceof FieldListField) {
                                let setValueOfFieldListFieldContextWrapper = () => {
                                    let f:FieldListField = <FieldListField>field;
                                    let d:any = data;
                                    //noinspection TypeScriptUnresolvedFunction
                                    setValueOfFieldListField(f, d);
                                }
                                let setValueOfFieldListField = (fieldListField:FieldListField, value:any) => {
                                    if(!(<FieldListField>field).created) {
                                        console.log("Waiting for FieldListField... ");
                                        setTimeout(setValueOfFieldListFieldContextWrapper, 50); // wait then try again
                                        return;
                                    }
                                    // update fields
                                    for (let subfield of (<FieldListField>field).subfields) {
                                        if (data[subfield.id] != null) {
                                            subfield.setValue(data[subfield.id]);
                                            subfield.isInitialValueSet = true;
                                        }
                                    }
                                }
                                setValueOfFieldListFieldContextWrapper();
                            }
                        }
                    }, null)
                }
                // execute handler
                let handlerName = handler;
                if (handlerName == null) {
                    handlerName = formId + 'Handler';
                }
                if (this.getBeans()[formId] != null && this.getHandlers()[handlerName] != null) {
                    let formBean:path.IForm = new (this.getBeans()[formId]);
                    let formHandler:path.IFormHandler = new (this.getHandlers()[handlerName]);
                    for (let a = 0; a < form.fields.length; a++) {
                        if (form.fields[a].id != null) {
                            formBean[form.fields[a].id] = form.fields[a];
                        }
                    }
                    form.bean = formBean;
                    formHandler.doLoad(form.bean);
                    form.handler = formHandler;
                }
            }
        return form;
    }

}