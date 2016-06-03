import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/common';
import {GuiModel} from './gui-model/guimodel';
import {PageElement, Page, Form, FormField, Action, PageButton, BackButton, PathApp, AutoComplete, RadioGroup, Radio, List} from './path-framework/path';


@Component({
    selector: 'path-application',
    templateUrl: 'app/app.html'
})

export class AppComponent implements PathApp {

    private _appConfig = new GuiModel().guiModel;
    private _pageStack:Page[] = [];
    private _formStack:Form[] = [];

    constructor() {
        this.setCurrentPage("mainmenu", null); // set start page
    }

    public getPageStack():Page[] {
        return this._pageStack;
    }

    public getFormStack():Form[] {
        return this._formStack;
    }

// TODO move ok and cancel to button object
    public doOk() {
        this._formStack = [];
    }

    public doCancel() {
        this._formStack = [];
    }

    public getCurrentPage() {
        return this._pageStack[this._pageStack.length - 1];
    }

    public navigateBack() {
        this._pageStack.pop();
    }

    public goToPage(pageNumber:number) {
        for (let k = this.getPageStack().length-1; k > pageNumber; k--) {
            console.log("back");
            this.navigateBack();
        }
    }

    public setCurrentPage(pageId:string, parentPageElement:PageElement) {
        let page:Page = new Page();
        page.id=pageId;
        page.parentPageElement=parentPageElement;

        for (var modelPage of this._appConfig.application.pageList) {
            if (modelPage.id == pageId) {
                page.title = modelPage.title;
                for (var modelElement of modelPage.elementList) {
                    // element
                    let element:PageElement = null;
                    switch (modelElement.type) {
                        case "button":
                            let pageButton:PageButton = new PageButton(this);
                            pageButton.icon = modelElement["icon"];
                            pageButton.color = modelElement["color"];
                            pageButton.page = modelElement["page"];
                            pageButton.form = modelElement["form"];
                            element = pageButton;
                            break;
                        case "backbutton":
                            let backButton:BackButton = new BackButton(this);
                            backButton.icon = modelElement["icon"];
                            backButton.color = modelElement["color"];
                            element = backButton;
                            break;
                        case "list":
                            let dynamicList:List = new List(this);
                            dynamicList.search = modelElement["search"];
                            for (var listElement of modelElement["data"]) {
                                let button:PageButton = new PageButton(this);
                                button.name = listElement.name;
                                button.color = modelElement["color"];
                                button.icon = modelElement["icon"];
                                button.page = modelElement["page"];
                                button.form = modelElement["form"];
                                dynamicList.content.push(button);
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

        this._pageStack.push(page);
    }

    public setCurrentForm(formId:string) {
        let forms:Form[] = [];
        let form:Form = null;
        for (var modelForm of this._appConfig.application.formList) {
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
                            autoCompleteFormField.wordSearchEnabled = modelFormField["wordSearchEnabled"];
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
        this._formStack = forms;
    }

}