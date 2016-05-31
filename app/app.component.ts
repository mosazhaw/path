import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/common';
import {GuiModel} from './gui-model/guimodel';
import {Column, Page, Form, FormField, Button, PathApp} from './path-framework/path';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html'
})

export class AppComponent implements PathApp {

  private appConfig = new GuiModel().guiModel;
  private loginForm;

  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  private currentPage:String = "mainmenu"; // TODO use page object instead of string
  private currentForm:String = null;
  private showMenu:boolean = true;

  public itemSelected = () => {
    this.showMenu = false;
  };

  public setCurrentPage(page:String) {
    this.currentPage = page;
  }

  public setCurrentForm(form:String) {
    this.currentForm = form;
  }

  public getCurrentPage() {
    let page:Page = new Page();
    for (var item of this.appConfig.application.pageList) {
      if (item.id === this.currentPage) {
        page.title = item.title;
      }
    }
    return page;
  }

  public getCurrentForm() {
    let forms:Form[] = [];
    let form:Form = null;
    for (var item of this.appConfig.application.formList) {
      if (item.id === this.currentForm) {
        form = new Form();
        form.title = item.title;
        for (var formFieldItem of item.formFieldList) {
          let formField:FormField = new FormField(this);
          formField.name = formFieldItem.name;
          formField.type = formFieldItem.type;
          form.fields.push(formField);
        }
        forms.push(form)
      }
    }
    console.log("Form displayed");
    console.log(forms);
    return forms;
  }

  // TODO move to current page
  public getCurrentPageContent() {
    let lastColumn:number = null;
    let currentCol:Column = null;
    let content = [];
    for (var page of this.appConfig.application.pageList) {
      if (page.id === this.currentPage) {
        for (var item of page.elementList) {
          // column layout
          if (currentCol == null || item.column != lastColumn) {
            currentCol = new Column();
            content.push(currentCol);
          }
          // element
          let element:Button = new Button(this);
          element.name = item.name;
          element.icon = item.icon;
          element.type = item.type;
          element.color = item.color;
          element.page = item["page"];
          element.form = item["form"];
          currentCol.addElement(element);
          lastColumn = item.column;
        }
      }
    }
    console.log("fetching page content: ".concat("" + content.length));
    return content;
  }

}