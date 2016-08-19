import * as path from './path';
import * as autocomplete from './form/field/auto-complete/auto-complete-field.component';
import 'rxjs/add/operator/map';
import {AutoCompleteFieldEntry} from "./form/field/auto-complete/auto-complete-field-entry";
import {ValueField} from "./form/field/value-field";
import {FieldListField} from "./form/field/fieldList/field-list-field.component";
import {LabelField} from "./form/field/label/label-field.component";
import {IPathApp} from "./pathinterface";

export abstract class PathAppComponent implements path.IPathApp {

    private _pageStack:path.Page[] = [];
    private _formStack:path.Form[] = [];
    private _userId:string;

    constructor(private pathService:path.PathService) {
        this.pathService.serverGet(this.getBackendUrl(), "/ping", (data:any) => {
            if (data["userId"] != null && data["userId"] != "") {
                this._userId = data["userId"];
            }
        }, (err:any) => { console.error(err); });
    }

    protected abstract getGuiModel();

    protected abstract getBeans();

    protected abstract getHandlers();

    public abstract getBackendUrl():string;

    public getUserId():string {
        return this._userId;
    }

    public login(event, userId:string, password:string) {
        this.pathService.serverGet(this.getBackendUrl(), "/login/" + userId + "/" + password, (data:any) => {
            console.log("jwt: " + data["jwt"]);
            this._userId = userId;
        }, (err:any) => {
            if (this.getBackendUrl().indexOf("heroku") > 0) {
                alert("Login failed. Please try again after 30sec, because the Heroku backend server may be sleeping due to inactivity.")
            } else {
                alert("Login failed.")
            }
            console.error("failed login");
        });
    }

    public logout() {
        localStorage.clear();
        this._userId == null;
        console.log("logout user " + this._userId);
        location.reload();
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
        let message:path.TextField = new path.TextField(form);
        message.type = "label";
        message.visible = true;
        message.labelVisible = false;
        message.setValue(text);
        form.fields.push(message);
        let okButton:path.OkButton = new path.OkButton(form);
        okButton.type = "okButton";
        okButton.name = "Ok";
        okButton.visible = true;
        okButton.handler = {
            doClick(button:path.IButton) {
                yesHandler();
            }
        };
        form.fields.push(okButton);

        let cancelButton:path.CancelButton = new path.CancelButton(form);
        cancelButton.type = "cancelButton";
        cancelButton.name = "Cancel";
        cancelButton.visible = true;
        form.fields.push(cancelButton);
        form.updateRows();

        this._formStack.push(form);
    }

    public setCurrentPage(pageId:string, parentPageElement:path.PageElement) {
        let page:path.Page = null;

        for (var modelPage of this.getGuiModel().application.pageList) {
            if (modelPage.id == pageId) {
                page = new path.Page();
                page.id = pageId;
                page.title = modelPage.title;
                if (parentPageElement != null) {
                    page.title = parentPageElement.name;
                }
                for (var modelElement of modelPage.elementList) {
                    // element
                    let element:path.PageElement = null;
                    switch (modelElement.type) {
                        case "button":
                        case "newButton":
                            let button = new path.Button(this);
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
                            element = button;
                            break;
                        case "backbutton":
                            let backButton:path.BackButton = new path.BackButton(this);
                            backButton.icon = modelElement["icon"];
                            backButton.color = modelElement["color"];
                            element = backButton;
                            break;
                        case "inlineForm":
                            let inlineForm = new path.InlineForm(this, this.pathService);
                            let keyUrl:any = modelElement["url"];
                            inlineForm.url = keyUrl.replace(":key",parentPageElement.key);
                            inlineForm.formId = modelElement["form"];
                            inlineForm.key = parentPageElement.key;
                            inlineForm.loadNextForm();
                            element = inlineForm;
                            break;
                        case "list":
                            let dynamicList:path.List = new path.List(this, this.pathService);
                            dynamicList.search = modelElement["search"];
                            // handler
                            if (modelElement["handler"] != null) {
                                dynamicList.handler = new (this.getHandlers()[modelElement["handler"]]);
                            }
                            if (modelElement["buttonhandler"] != null) {
                                dynamicList.buttonHandler = new (this.getHandlers()[modelElement["buttonhandler"]]);
                            }
                            dynamicList.url = modelElement["url"];
                            if (parentPageElement != null) {
                                dynamicList.key = parentPageElement.key;
                                if (dynamicList.url != null) {
                                    dynamicList.url = dynamicList.url.replace(":key",parentPageElement.key);
                                    if (parentPageElement.parentPageElement != null) {
                                        // TODO support unlimited number of hierarchical parentKeys
                                        dynamicList.url = dynamicList.url.replace(":parentKey",parentPageElement.parentPageElement.key);
                                    }
                                }
                            }
                            dynamicList.color = modelElement["color"];
                            if (modelElement["form"] != null) {
                                dynamicList.form = modelElement["form"]["form"];
                                dynamicList.formHandler = modelElement["form"]["handler"];
                            }
                            dynamicList.page = modelElement["page"];
                            dynamicList.icon = modelElement["icon"];
                            dynamicList.mockData = modelElement["data"];
                            dynamicList.refresh();
                            element = dynamicList;
                            break;
                        case "ChartElement":
                            let chart = new path.ChartElement(this);
                            chart.chartType = modelElement["chartType"];
                            element = chart;
                            break;
                    }
                    element.name = modelElement["name"];
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
            alert("Missing page: " + pageId);
        }
        this._pageStack.push(page);
    }

    public setCurrentForm(formId:string, key:number, handler:string, parentPageElement:path.IPageElement) {
        let closeFunction = () => {
            this.closeCurrentForm();
            this.refreshCurrentPage();
        };
        let form:path.Form = this.createForm(formId,key,handler,closeFunction, parentPageElement);
        if (form != null) {
            this._formStack.push(form);
        }
    }

    public createForm(formId:string, key:number, handler:string, closeFunction:()=>void, parentPageElement:path.IPageElement):path.Form {
        let form:path.Form = null;
        for (var modelForm of this.getGuiModel().application.formList) {
            if (modelForm.id === formId) {
                // create form
                form = new path.Form(this.pathService, this);
                form.key = key;
                form.closeFunction = closeFunction;
                form.title = modelForm.title;
                form.url = modelForm["url"];
                for (var modelFormField of modelForm.formFieldList) {
                    // create form fields
                    let formField:path.FormField = null;
                    switch (modelFormField.type) {
                        case "text":
                        {
                            formField = new path.TextField(form);
                            formField.fromJson(modelFormField);
                            break;
                        }
                        case "label":
                        {
                            formField = new path.LabelField(form);
                            formField.fromJson(modelFormField);
                            break;
                        }
                        case "fieldList":
                        {
                            formField = new path.FieldListField(form);
                            formField.name = "list";
                            formField.fromJson(modelFormField);
                            if (modelFormField["url"] != null) {
                                let fieldListUrl:any = modelFormField["url"];
                                let modelId:string = modelFormField["id"];
                                if (parentPageElement != null && parentPageElement.getKey() != null) {
                                    fieldListUrl = fieldListUrl.replace(":key",parentPageElement.getKey());
                                }
                                if (parentPageElement != null && parentPageElement.getParent() != null) {
                                    // TODO support unlimited number of hierarchical parentKeys
                                    fieldListUrl = fieldListUrl.replace(":parentKey",parentPageElement.getParent().getKey());
                                }
                                if (form.key != null) {
                                    fieldListUrl = fieldListUrl.replace(":formKey",form.key);
                                }
                                this.pathService.serverGet(this.getBackendUrl(), fieldListUrl, (data:any) => {
                                    let counter:number = 1;
                                    for (let item of data) {
                                        let dynamicField:ValueField<any> = null;
                                        if (item["type"] == "label") {
                                            dynamicField = new LabelField(form);
                                        } else if (item["type"] == "text") {
                                            dynamicField = new path.TextField(form);
                                        }
                                        dynamicField.fromJson(item);
                                        dynamicField.id = modelId + counter;
                                        (<FieldListField>formField).subfields.push(dynamicField);
                                        counter++;
                                    }
                                    form.updateRows();
                                    (<FieldListField>formField).fieldsCreated = true;
                                }, null);
                            }
                            break;
                        }
                        case "date":
                        {
                            formField = new path.DateField(form);
                            formField.fromJson(modelFormField);
                            break;
                        }
                        case "autocomplete":
                        {
                            let autoCompleteFormField = new autocomplete.AutoCompleteField(form);
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
                                let autoCompleteFormFieldUrl:string = modelFormField["url"];
                                this.pathService.serverGet(this.getBackendUrl(), autoCompleteFormFieldUrl, (data:any) => {
                                    let dynamicData = [];
                                    for (let item of data) {
                                        let entry = new AutoCompleteFieldEntry();
                                        entry.key = item["key"];
                                        entry.text = item["name"];
                                        dynamicData.push(entry);
                                    }
                                    autoCompleteFormField.data = dynamicData;
                                    autoCompleteFormField.dataLoaded = true;
                                }, null);
                            }
                            else {
                                autoCompleteFormField.dataLoaded = true;
                            }
                            autoCompleteFormField.wordSearchEnabled = modelFormField["wordSearchEnabled"];
                            formField = autoCompleteFormField;
                            formField.fromJson(modelFormField);
                            break;
                        }
                        case "RadioGroupField":
                        {
                            let radioGroupFormField = new path.RadioGroupField(form);
                            if (modelFormField["url"] != null) {
                                let radiosUrl:any = modelFormField["url"];
                                if (parentPageElement != null && parentPageElement.getKey() != null) {
                                    radiosUrl = radiosUrl.replace(":key",parentPageElement.getKey());
                                }
                                this.pathService.serverGet(this.getBackendUrl(), radiosUrl, (data:any) => {
                                    for (let item of data) {
                                        let radio = new path.Radio(form);
                                        radio.name = item["name"];
                                        radio.key = item["key"];
                                        if (radio.key == item["defaultKey"]) {
                                            radio.value = true;
                                            radioGroupFormField.setValue(radio.key);
                                        } else {
                                            radio.value = false;
                                        }
                                        radioGroupFormField.radios.push(radio);
                                    }
                                }, null);
                            }
                            radioGroupFormField.fromJson(modelFormField);
                            formField = radioGroupFormField;
                            break;
                        }
                        case "CheckboxGroupField":
                        {
                            let checkboxGroupField = new path.CheckboxGroupField(form);
                            checkboxGroupField.fromJson(modelFormField);
                            formField = checkboxGroupField;
                            break;
                        }
                        case "ProgressBarField":
                        {
                            let progressBarField = new path.ProgressBarField(form);
                            progressBarField.fromJson(modelFormField);
                            formField = progressBarField;
                            break;
                        }
                        case "okButton":
                        {
                            formField = new path.OkButton(form);
                            formField.fromJson(modelFormField);
                            break;
                        }
                        case "cancelButton":
                        {
                            formField = new path.CancelButton(form);
                            formField.fromJson(modelFormField);
                            break;
                        }
                        case "deleteButton":
                        {
                            formField = new path.DeleteButton(form);
                            formField.fromJson(modelFormField);
                            if (form.key == null) {
                                formField.visible = false;
                            }
                            break;
                        }
                        default:
                        {
                            formField = new path.FormField(form);
                            formField.fromJson(modelFormField);
                        }
                    }
                    // use parent value
                    if (formField instanceof ValueField && modelFormField["defaultParentKey"] == true) {
                        if (parentPageElement != null && parentPageElement.getParent() != null) {
                            (<ValueField<any>>formField).setValue(parentPageElement.getParent().getKey());
                        }
                    }
                    // form field actions
                    if (modelFormField["actions"] != null) {
                        for (var actionModel of modelFormField["actions"]) {
                            let action:path.Action = new path.Action();
                            action.name = actionModel.name;
                            if (actionModel["handler"] != null && this.getHandlers()[actionModel["handler"]] != null) {
                                action.handler = new (this.getHandlers()[actionModel["handler"]]);
                            }
                            formField.actions.push(action);
                        }
                    }
                    form.fields.push(formField);
                }
                form.updateRows(); // TODO check if this can be done automatically

                // fetch data from backend
                if (form.url != null && form.key != null) {
                    let url:any = form.url;
                    // TODO refactor :key replacement semantic and code
                    // TODO idea: use named key/value pairs, e.g. :personKey instead of :parentKey
                    if (url.indexOf(":key") < 0) {
                        url = url + "/" + form.key;
                    } else if (parentPageElement != null && parentPageElement.getKey() != null) {
                        url = url.replace(":key",parentPageElement.getKey());
                        url = url.replace(":formKey",form.key);
                        if (parentPageElement.getParent() != null && parentPageElement.getParent().getKey() != null) {
                            if (parentPageElement.getParent().getParent() != null && parentPageElement.getParent().getParent().getKey() != null) {
                                url = url.replace(":parentKey",parentPageElement.getParent().getParent().getKey());
                            }
                        }
                    }
                    form.url = url;
                    this.pathService.serverGet(this.getBackendUrl(), url, (data:any) => {
                        for (let field of form.fields) {
                            if (data[field.id] != null && field instanceof path.ValueField) {
                                (<path.ValueField<any>>field).setValue(data[field.id]);
                            }
                            if (field instanceof FieldListField) {
                                function setValueOfFieldListField() {
                                    if(!(<FieldListField>field).fieldsCreated) {
                                        console.log("Waiting... ");
                                        setTimeout(setValueOfFieldListField, 50); // wait then try again
                                        return;
                                    }
                                    // update fields
                                    for (let subfield of (<FieldListField>field).subfields) {
                                        if (data[subfield.id] != null) {
                                            subfield.setValue(data[subfield.id]);
                                        }
                                    }
                                }
                                setValueOfFieldListField();
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
        }
        if (form == null && formId != null) {
            alert("Missing form: " + formId);
        }
        return form;
    }

}