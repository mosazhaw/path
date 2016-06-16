import * as forms from './../generated/forms';
import * as path from './../../path-framework/pathinterface';
import {Http, Response} from '@angular/http';
import * as pathtemp from './../../path-framework/path';
import {IPathApp} from "../../path-framework/pathinterface"; // TODO remove

export class ProjectFormQuickScanHandler implements path.IFormHandler {

    public doLoad(form:forms.ProjectForm) {
        console.log("loading quick scan form");
        form.quickScanCase.visible = true;
    }

    public doSave(form:forms.ProjectForm) {
        console.log("saving quick scan form");
    }

    public doValidate(form:forms.ProjectForm) {
        console.log("validating quick scan form");
    }

}

export class ProjectFormDeepScanHandler implements path.IFormHandler {

    public doLoad(form:forms.ProjectForm) {
        console.log("loading deep scan form");
    }

    public doSave(form:forms.ProjectForm) {
        console.log("saving deep scan form");
    }

    public doValidate(form:forms.ProjectForm) {
        console.log("validating deep scan form");
    }

}

export class CompanyFormHandler implements path.IFormHandler {

    public doLoad(form:forms.CompanyForm) {
        console.log("loading company form");
    }

    public doSave(form:forms.CompanyForm) {
        console.log("saving company form");
    }

    public doValidate(form:forms.CompanyForm) {
        console.log("validating company form");
    }

}

export class CategoryListButtonHandler implements path.IButtonHandler {

    public doClick(button:path.IButton) {
        console.log("clicked " + button.getColor());
        if (button.getColor() == "belize-hole") {
            let yesHandler = () => {
                button.setColor("concrete");
            };
            let noHandler = () => {};
            button.getApp().yesNo("Do you really want to deselect category " + button.getName() + "?", yesHandler, noHandler);
        } else {
            button.setColor("belize-hole");
        }
    }

}

export class CompanyActionHandler implements path.IActionHandler {

    doClick(field:path.IFormField, action:path.IAction) {
        console.log("action clicked " + field["name"]);
        field.getApp().setCurrentForm("CompanyForm", "New", "CompanyFormHandler");
    }

}

export class PersonActionHandler implements path.IActionHandler {

    doClick(field:path.IFormField, action:path.IAction) {
        console.log("action clicked " + field["name"]);
        field.getApp().setCurrentForm("PersonForm", "New", null);
    }

}

export class QuickScanListHandler implements path.IListHandler {

    doLoad(list:path.IList, http:Http) {
        console.log("loading list data");

        http.get('http://localhost:4567/project')
            .map((res:Response) => res.json())
            .subscribe(
                data => {
                    let app = list.getContent()[0]["app"];
                    while (list.getContent().length > 0) {
                        list.getContent().pop();
                    }
                    for (let item of data) {
                        let b:pathtemp.Button = new pathtemp.Button(<IPathApp>app);
                        b.name = item["name"];
                        b.color = "alizarin";
                        b.icon = "fa-fast-forward";
                        list.getContent().push(b);
                    }
                },
                err => console.error(err),
                () => console.log('done')
            );
    }

}