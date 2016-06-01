import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/common';
import {GuiModel} from './gui-model/guimodel';
import {Column, Page, Form, FormField, Action, Button, PathApp, AutoComplete, RadioGroup, Radio} from './path-framework/path';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html'
})

export class AppComponent implements PathApp {

  private appConfig = new GuiModel().guiModel;
  private dynamicForm;

  constructor(fb: FormBuilder) {
    this.dynamicForm = fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });

    this.setCurrentPage("mainmenu"); // start page
  }

  private currentPage:Page = null;
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

  public getCurrentForms() {
    return this.currentForms;
  }

  public setCurrentPage(pageId:String) {
    let page:Page = new Page();
    let lastColumn:number = null;
    let currentCol:Column = null;
    let content = [];

    for (var modelPage of this.appConfig.application.pageList) {
      if (modelPage.id == pageId) {
        page.title = modelPage.title;
        for (var modelElement of modelPage.elementList) {
          // column layout
          if (currentCol == null || modelElement.column != lastColumn) {
            currentCol = new Column();
            content.push(currentCol);
          }
          // element
          let element:Button = new Button(this);
          element.name = modelElement.name;
          element.icon = modelElement.icon;
          element.type = modelElement.type;
          element.color = modelElement.color;
          element.page = modelElement["page"];
          element.form = modelElement["form"];
          currentCol.addElement(element);
          lastColumn = modelElement.column;
        }
      }
    }
    page.content = content;

    this.currentPage = page;
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
            case "autocomplete": {
              let autoCompleteFormField = new AutoComplete(this);
              autoCompleteFormField.data = modelFormField["data"];
              formField = autoCompleteFormField;
              break;
            }
            case "radiogroup": {
              let radioGroupFormField = new RadioGroup(this);
              for (var radioModel of modelFormField["radios"]) {
                let radio = new Radio(this);
                radio.name = radioModel.name;
                radioGroupFormField.radios.push(radio);
              }
              formField = radioGroupFormField;
              break;
            }
            default: {
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
    this.currentForms = forms;
  }

}