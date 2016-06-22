import * as path from './path';
import * as autocomplete from './form/field/auto-complete/auto-complete.component';
import 'rxjs/add/operator/map';

export abstract class PathAppComponent implements path.IPathApp {

    private _pageStack:path.Page[] = [];
    private _formStack:path.Form[] = [];

    constructor(private pathService:path.PathService) {
    }

    protected abstract getGuiModel();

    protected abstract getBeans();

    protected abstract getHandlers();

    public abstract getBackendUrl():string;

    public getPageStack():path.Page[] {
        return this._pageStack;
    }

    public getFormStack():path.Form[] {
        return this._formStack;
    }
    
    public yesNo(text:string, yesHandler : () => void, noHandler : () => void) {
        let form:path.Form = new path.Form(this.pathService, this);
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
        // close form
        this._formStack[this._formStack.length-1].close();
        this._formStack.pop();
    }

    public refreshCurrentPage() {
        for (let element of this.getCurrentPage().content) {
            if (element instanceof path.List) {
                console.log("reload list " + element.id);
                (<path.List>element).refresh();
            }
        }
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

    private getCurrentPage():path.Page {
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
                            if (parentPageElement != null) {
                                (<path.Button>element).key = (<path.Button>parentPageElement).key; // TODO
                            }
                            break;
                        case "backbutton":
                            let backButton:path.BackButton = new path.BackButton(this);
                            backButton.icon = modelElement["icon"];
                            backButton.color = modelElement["color"];
                            element = backButton;
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
                                dynamicList.formHandler = modelElement["form"]["formHandler"];
                            }
                            dynamicList.page = modelElement["page"];
                            dynamicList.icon = modelElement["icon"];
                            dynamicList.mockData = modelElement["data"];
                            dynamicList.refresh();
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
            button.setFormHandler(modelElement["form"]["handler"]);
        }
        button.setPage(modelElement["page"]);
    }

    public setCurrentForm(formId:string, key:number, handler:string) {
        let form:path.Form = null;
        for (var modelForm of this.getGuiModel().application.formList) {
            if (modelForm.id === formId) {
                // create form
                form = new path.Form(this.pathService, this);
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

                // fetch data from backend
                if (modelForm["url"] != null && key != null) {
                    this.pathService.serverRequest(this.getBackendUrl(),modelForm["url"] + "/" + key, (data:any) => {
                        console.log(data);
                        for (let field of form.fields) {
                            if (data[field.id] != null && field.type == "text") { // TODO poc
                                (<path.TextField>field).value = data[field.id];
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
                    formHandler.doLoad(formBean);
                    form.handler = formHandler;
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