import * as forms from './../generated/forms';
import * as path from './../../path-framework/pathinterface';

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

export class KPIQuestionFormHandler implements path.IFormHandler {

    public doLoad(form:forms.KPIAnswerForm) {
        form.cancelButton.name = 'Cancel';
        form.okButton.name = 'OK';
        form.deleteButton.visible = false;
        form.progress.visible = false;
        console.log("loading question form");
    }

    public doSave(form:forms.KPIAnswerForm) {
        console.log("saving question form");
    }

    public doValidate(form:forms.KPIAnswerForm) {
        console.log("validating question form");
    }

}

export class IntroductionHandbookDownloadButtonHandler implements path.IButtonHandler {

    public doClick(button:path.IButton) {
        console.log("open excel doc");
        window.location.assign(button.getApp().getBackendUrl() + "/report/introductionhandbook" + "?token=" + localStorage.getItem("pathAppId"));
    }

}

export class CompanyActionHandler implements path.IActionHandler {

    doClick(field:path.IFormField, action:path.IAction) {
        console.log("action clicked " + field["name"]);
        field.getForm().getApp().setCurrentForm("CompanyForm", null, "CompanyFormHandler", null);
    }

}

export class PersonActionHandler implements path.IActionHandler {

    doClick(field:path.IFormField, action:path.IAction) {
        console.log("action clicked " + field["name"]);
        field.getForm().getApp().setCurrentForm("PersonForm", null, null, null);
    }

}

export class QuickScanListHandler implements path.IListHandler {

    doLoad(list:path.IList) {
        console.log("loading quickscan projects list");
    }

}