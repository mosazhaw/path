import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/common';
import {GuiModel} from './gui-model/guimodel';
import {PageElement, Page, Form, FormField, Action, PageButton, BackButton, PathApp, AutoComplete, RadioGroup, Radio, List} from './path-framework/path';


@Component({
    selector: 'path-application',
    templateUrl: 'app/app.html'
})

export class AppComponent implements PathApp {

    private appConfig = new GuiModel().guiModel;
    private dynamicForm;

    constructor(fb:FormBuilder) {
        this.dynamicForm = fb.group({
            email: ["", Validators.required],
            password: ["", Validators.required]
        });

        this.setCurrentPage("mainmenu"); // start page
    }

    private currentPage:Page = null;
    private pageStack:Page[] = [];
    private currentForms:Form[] = [];

    // TODO move ok and cancel to button object
    public doOk() {
        this.currentForms = [];
    }

    public doCancel() {
        this.currentForms = [];
    }

    public getCurrentPage() {
        return this.currentPage;
    }

    public navigateBack() {
        let lastPage = this.pageStack[this.pageStack.length - 2];
        console.log(lastPage.id);
        this.pageStack.pop();
        this.pageStack.pop(); // TODO use same page instead of creating a new page
        this.setCurrentPage(lastPage.id);
    }

    public displayPath() {
        let string:String = "";
        for (var element of this.pageStack) {
            if (string.length > 0) {
                string += " > ";
            }
            string += element.title;
        }

        return string;
    }

    public getCurrentForms() {
        return this.currentForms;
    }

    public setCurrentPage(pageId:String) {
        let page:Page = new Page();
        page.id=pageId;

        for (var modelPage of this.appConfig.application.pageList) {
            if (modelPage.id == pageId) {
                page.title = modelPage.title;
                for (var modelElement of modelPage.elementList) {
                    // element
                    let element:PageElement = null;
                    switch (modelElement.type) {
                        case "button":
                            let pageButton:PageButton = new PageButton(this);
                            pageButton.icon = modelElement.icon;
                            pageButton.color = modelElement.color;
                            pageButton.page = modelElement["page"];
                            pageButton.form = modelElement["form"];
                            element = pageButton;
                            break;
                        case "backbutton":
                            let backButton:BackButton = new BackButton(this);
                            backButton.icon = modelElement.icon;
                            backButton.color = modelElement.color;
                            element = backButton;
                            break;
                        case "list":
                            let dynamicList:List = new List(this);
                            for (var listElement of modelElement["data"]) {
                                let button:PageButton = new PageButton(this);
                                button.name = listElement.name;
                                button.color = modelElement.color;
                                button.icon = modelElement.icon;
                                button.page = modelElement["page"];
                                button.form = modelElement["form"];
                                dynamicList.content.push(button);
                            }
                            element = dynamicList;
                            break;
                    }
                    element.name = modelElement.name;
                    element.type = modelElement.type;
                    page.content.push(element);
                }
            }
        }

        this.currentPage = page;
        this.pageStack.push(page);
    }

    public setCurrentForm(formId:String) {
        let forms:Form[] = [];
        let form:Form = null;
        for (var modelForm of this.appConfig.application.formList) {
            if (modelForm.id === formId) {
                // create form
                form = new Form();
                form.title = modelForm.title;
                for (var modelFormField of modelForm.formFieldList) {
                    // create form fields
                    let formField:FormField = null;
                    switch (modelFormField.type) {
                        case "autocomplete":
                        {
                            let autoCompleteFormField = new AutoComplete(this);
                            autoCompleteFormField.data = modelFormField["data"];
                            formField = autoCompleteFormField;
                            break;
                        }
                        case "radiogroup":
                        {
                            let radioGroupFormField = new RadioGroup(this);
                            for (var radioModel of modelFormField["radios"]) {
                                let radio = new Radio(this);
                                radio.name = radioModel.name;
                                radioGroupFormField.radios.push(radio);
                            }
                            formField = radioGroupFormField;
                            break;
                        }
                        default:
                        {
                            formField = new FormField(this);
                        }
                    }
                    formField.name = modelFormField.name;
                    formField.type = modelFormField.type;
                    formField.height = modelFormField["height"];
                    if (modelFormField["actions"] != null) {
                        for (var action of modelFormField["actions"]) {
                            let actionObject:Action = new Action();
                            actionObject.name = action.name;
                            actionObject.type = action.type;
                            formField.actions.push(actionObject);
                        }
                    }
                    form.fields.push(formField);
                }
                forms.push(form)
            }
        }
        if (form == null && formId != null) {
            alert("Missing form: " + formId);
        }
        this.currentForms = forms;
    }

}