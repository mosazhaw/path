import * as forms from './../generated/forms';
import * as path from './../../path-framework/pathinterface';

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
        window.location.assign(button.getApp().getBackendUrl() + "/report/introductionhandbook" + "?token=" + sessionStorage.getItem("pathAppId"));
    }

}