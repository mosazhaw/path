import * as path from './path';
import * as autocomplete from './form/field/auto-complete/auto-complete.component';
import 'rxjs/add/operator/map';
import {AutoCompleteField} from "./form/field/auto-complete/auto-complete.component";

export abstract class PathAppComponent implements path.IPathApp {

    private _pageStack:path.Page[] = [];
    private _formStack:path.Form[] = [];

    constructor(private pathService:path.PathService) {
    }

    protected abstract getGuiModel();

    protected abstract getBeans();

    protected abstract getHandlers();

    public abstract getBackendUrl():string;

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
        message.setValue(text);
        form.fields.push(message);
        let okButton:path.OkButton = new path.OkButton(form);
        okButton.type = "okButton";
        okButton.name = "Ok";
        okButton.handler = {
            doClick(button:path.IButton) {
                yesHandler();
            }
        };
        form.fields.push(okButton);

        let cancelButton:path.CancelButton = new path.CancelButton(form);
        cancelButton.type = "cancelButton";
        cancelButton.name = "Cancel";
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
                page.parentPageElement = parentPageElement;
                page.title = modelPage.title;
                for (var modelElement of modelPage.elementList) {
                    // element
                    let element:path.PageElement = null;
                    switch (modelElement.type) {
                        case "button":
                            let button = new path.Button(this);
                            button.setIcon(modelElement["icon"]);
                            button.setColor(modelElement["color"]);
                            if (modelElement["form"] != null) {
                                button.setForm(modelElement["form"]["form"]);
                                button.setFormHandler(modelElement["form"]["handler"]);
                            }
                            button.setPage(modelElement["page"]);
                            if (parentPageElement != null) {
                                button.key = (<path.Button>parentPageElement).key; // TODO
                            }
                            element = button;
                            break;
                        case "backbutton":
                            let backButton:path.BackButton = new path.BackButton(this);
                            backButton.icon = modelElement["icon"];
                            backButton.color = modelElement["color"];
                            element = backButton;
                            break;
                        case "form":
                            let form = new path.InlineForm(this);
                            form.form = this.createForm(modelElement["form"], null, modelElement["handler"]);
                            element = form;
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
                            let chart = new path.RadarChartElement(this);
                            chart.chartType = modelElement["chartType"];
                            element = chart;
                            break;
                    }
                    element.name = modelElement["name"];
                    element.type = modelElement.type;
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

    public setCurrentForm(formId:string, key:number, handler:string) {
        let form:path.Form = this.createForm(formId,key,handler);
        if (form != null) {
            this._formStack.push(form);
        }
    }

    private createForm(formId:string, key:number, handler:string):path.Form {
        let form:path.Form = null;
        for (var modelForm of this.getGuiModel().application.formList) {
            if (modelForm.id === formId) {
                // create form
                form = new path.Form(this.pathService, this);
                form.key = key;
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
                        case "date":
                        {
                            formField = new path.DateField(form);
                            formField.fromJson(modelFormField);
                            break;
                        }
                        case "autocomplete":
                        {
                            let autoCompleteFormField = new autocomplete.AutoCompleteField(form);
                            autoCompleteFormField.data = modelFormField["data"];
                            autoCompleteFormField.wordSearchEnabled = modelFormField["wordSearchEnabled"];
                            formField = autoCompleteFormField;
                            formField.fromJson(modelFormField);
                            break;
                        }
                        case "RadioGroupField":
                        {
                            let radioGroupFormField = new path.RadioGroupField(form);
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
                        default:
                        {
                            formField = new path.FormField(form);
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

                // fetch data from backend
                if (form.url != null && form.key != null) {
                    this.pathService.serverGet(this.getBackendUrl(), form.url + "/" + form.key, (data:any) => {
                        for (let field of form.fields) {
                            if (data[field.id] != null && field instanceof path.ValueField) {
                                (<path.ValueField<any>>field).setValue(data[field.id]);
                            }
                        }
                    })
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