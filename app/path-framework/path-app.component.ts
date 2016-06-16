import * as path from './path';
import * as autocomplete from './form/field/auto-complete/auto-complete.component';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

export abstract class PathAppComponent implements path.IPathApp {

    private _pageStack:path.Page[] = [];
    private _formStack:path.Form[] = [];

    constructor(private http: Http) {
    }

    protected abstract getGuiModel();

    protected abstract getBeans();

    protected abstract getHandlers();

    public getPageStack():path.Page[] {
        return this._pageStack;
    }

    public getFormStack():path.Form[] {
        return this._formStack;
    }
    
    public yesNo(text:string, yesHandler : () => void, noHandler : () => void) {
        let form:path.Form = new path.Form();
        let message:path.TextField = new path.TextField(this);
        message.type = "label";
        message.visible = true;
        message.value = text;
        form.fields.push(message);
        let okButton:path.OkButton = new path.OkButton(this);
        okButton.type = "okButton";
        okButton.name = "Ok";
        okButton.handler = {
            doClick(button:path.IButton) {
                yesHandler();
            }
        };
        form.fields.push(okButton);

        let cancelButton:path.CancelButton = new path.CancelButton(this);
        cancelButton.type = "cancelButton";
        cancelButton.name = "Cancel";
        form.fields.push(cancelButton);
        form.updateRows();

        this.getFormStack().push(form);
    }

    public closeForm() {
        this._formStack.pop();
    }

    // TODO remove
    public doCancel() {
        this._formStack.pop();
    }

    public onKey(event) {
        if (event.keyCode == 27) {
            this.doCancel();
        }
    }

    public getCurrentPage() {
        return this._pageStack[this._pageStack.length - 1];
    }

    public navigateBack() {
        this._pageStack.pop();
    }

    public goToPage(pageNumber:number) {
        for (let k = this.getPageStack().length - 1; k > pageNumber; k--) {
            console.log("back");
            this.navigateBack();
        }
    }

    public setCurrentPage(pageId:string, parentPageElement:path.PageElement) {
        let page:path.Page = null;

        for (var modelPage of this.getGuiModel().application.pageList) {
            if (modelPage.id == pageId) {
                page = new path.Page();
                page.id = pageId;
                page.parentPageElement = parentPageElement;
                page.title = modelPage.title;
                for (var modelElement of modelPage.elementList) {
                    // element
                    let element:path.PageElement = null;
                    switch (modelElement.type) {
                        case "button":
                            element = new path.Button(this);
                            this.updateButton(<path.Button>element, modelElement);
                            break;
                        case "backbutton":
                            let backButton:path.BackButton = new path.BackButton(this);
                            backButton.icon = modelElement["icon"];
                            backButton.color = modelElement["color"];
                            element = backButton;
                            break;
                        case "list":
                            let dynamicList:path.List = new path.List(this);
                            dynamicList.search = modelElement["search"];
                            if (modelElement["handler"] != null) {
                                dynamicList.handler = new (this.getHandlers()[modelElement["handler"]]);
                                // TODO
                                dynamicList.handler.doLoad(dynamicList, this.http);
                            }
                            for (var listElement of modelElement["data"]) {
                                let buttonHandler:path.IButtonHandler;
                                if (modelElement["buttonhandler"] != null) {
                                    buttonHandler = new (this.getHandlers()[modelElement["buttonhandler"]]);
                                }
                                let button:path.IButton = dynamicList.addButton(1, listElement.name, buttonHandler, listElement["details"]);
                                this.updateButton(button, modelElement);
                                button.setColor(listElement["color"] != null ? listElement["color"] : button.getColor());
                            }
                            element = dynamicList;
                            break;
                    }
                    element.name = modelElement["name"];
                    element.type = modelElement.type;
                    page.content.push(element);
                }
            }
        }

        if (page == null && pageId != null) {
            alert("Missing page: " + pageId);
        }
        this._pageStack.push(page);
    }

    private updateButton(button:path.IButton,modelElement) {
        button.setIcon(modelElement["icon"]);
        button.setColor(modelElement["color"]);
        if (modelElement["form"] != null) {
            button.setForm(modelElement["form"]["form"]);
            button.setMode(modelElement["form"]["mode"]);
            button.setFormHandler(modelElement["form"]["handler"]);
        }
        button.setPage(modelElement["page"]);
    }

    public setCurrentForm(formId:string, mode:string, handler:string) {
        let form:path.Form = null;
        for (var modelForm of this.getGuiModel().application.formList) {
            if (modelForm.id === formId) {
                // create form
                form = new path.Form();
                form.title = modelForm.title;
                for (var modelFormField of modelForm.formFieldList) {
                    // create form fields
                    let formField:path.FormField = null;
                    switch (modelFormField.type) {
                        case "text":
                        {
                            formField = new path.TextField(this);
                            formField.fromJson(modelFormField);
                            break;
                        }
                        case "okButton":
                        {
                            formField = new path.OkButton(this);
                            formField.fromJson(modelFormField);
                            break;
                        }
                        case "cancelButton":
                        {
                            formField = new path.CancelButton(this);
                            formField.fromJson(modelFormField);
                            break;
                        }
                        case "autocomplete":
                        {
                            let autoCompleteFormField = new autocomplete.AutoCompleteField(this);
                            autoCompleteFormField.data = modelFormField["data"];
                            autoCompleteFormField.wordSearchEnabled = modelFormField["wordSearchEnabled"];
                            formField = autoCompleteFormField;
                            formField.fromJson(modelFormField);
                            break;
                        }
                        case "RadioGroupField":
                        {
                            let radioGroupFormField = new path.RadioGroupField(this);
                            radioGroupFormField.fromJson(modelFormField);
                            formField = radioGroupFormField;
                            break;
                        }
                        case "CheckboxGroupField":
                        {
                            let checkboxGroupField = new path.CheckboxGroupField(this);
                            checkboxGroupField.fromJson(modelFormField);
                            formField = checkboxGroupField;
                            break;
                        }
                        default:
                        {
                            formField = new path.FormField(this);
                            formField.fromJson(modelFormField);
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

                // get handler and execute load
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
                    formHandler.doLoad(formBean);
                }
            }
        }
        if (form == null && formId != null) {
            alert("Missing form: " + formId);
        } else {
            this._formStack.push(form);
        }
    }

}