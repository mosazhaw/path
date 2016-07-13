import * as forms from './../generated/forms';
import * as path from './../../path-framework/pathinterface';

export class ProjectFormQuickScanHandler implements path.IFormHandler {

    public doLoad(form:forms.ProjectForm) {
        console.log("loading quick scan form");
        if (form.caseKey != null) {
            form.caseKey.visible = true;
        }
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

export class DeepScanQuestionFormHandler implements path.IFormHandler {

    public doLoad(form:forms.QuestionForm) {
        console.log("loading question form");
        form.formula.visible = false;
        form.input1.visible = false;
        form.input2.visible = false;
        form.unit1.visible = false;
        form.unit2.visible = false;
        form.comment.visible = false;
    }

    public doSave(form:forms.QuestionForm) {
        console.log("saving question form");
        form.questionActual.visible = false;
        form.questionTarget.visible = false;
        form.answer1.visible = false;
        form.answer2.visible = false;
        form.answer3.visible = false;
        form.answer4.visible = false;
        form.answer5.visible = false;

        form.formula.visible = true;
        form.input1.visible = true;
        form.input2.visible = true;
        form.unit1.visible = true;
        form.unit2.visible = true;
        form.comment.visible = true;
        form.progress.setValue(form.progress.value + 10);
    }

    public doValidate(form:forms.QuestionForm) {
        console.log("validating question form");
    }

}

export class InputParameterQuestionFormHandler implements path.IFormHandler {

    public doLoad(form:forms.QuestionForm) {
        console.log("loading question form");
        form.cancelButton.name = 'Cancel';
        form.okButton.name = 'OK';
        form.deleteButton.visible = false;
        form.questionActual.visible = false;
        form.questionTarget.visible = false;
        form.answer1.visible = false;
        form.answer2.visible = false;
        form.answer3.visible = false;
        form.answer4.visible = false;
        form.answer5.visible = false;
        form.progress.visible = false;
        form.formula.visible = false;
        form.input2.visible = false;
        form.unit2.visible = false;
        form.comment.visible = false;
    }

    public doSave(form:forms.QuestionForm) {
        console.log("saving question form");
    }

    public doValidate(form:forms.QuestionForm) {
        console.log("validating question form");
    }

}

export class KPIQuestionFormHandler implements path.IFormHandler {

    public doLoad(form:forms.QuestionForm) {
        form.cancelButton.name = 'Cancel';
        form.okButton.name = 'OK';
        form.deleteButton.visible = false;
        form.progress.visible = false;
        form.questionActual.visible = false;
        form.questionTarget.visible = false;
        form.answer1.visible = false;
        form.answer2.visible = false;
        form.answer3.visible = false;
        form.answer4.visible = false;
        form.answer5.visible = false;
        console.log("loading question form");
    }

    public doSave(form:forms.QuestionForm) {
        console.log("saving question form");
    }

    public doValidate(form:forms.QuestionForm) {
        console.log("validating question form");
    }

}

export class QuickScanQuestionFormHandler implements path.IFormHandler {

    public doLoad(form:forms.QuestionForm) {
        console.log("loading question form");
        form.formula.visible = false;
        form.input1.visible = false;
        form.input2.visible = false;
        form.unit1.visible = false;
        form.unit2.visible = false;
        form.comment.visible = false;
    }

    public doSave(form:forms.QuestionForm) {
        console.log("saving question form");
        form.progress.setValue(form.progress.value + 10);
    }

    public doValidate(form:forms.QuestionForm) {
        console.log("validating question form");
    }

}

export class CategoryListButtonHandler implements path.IButtonHandler {

    public doClick(button:path.IButton) {
        console.log("clicked " + button.getColor());
        if (button.getColor() == "pumpkin") {
            let yesHandler = () => {
                button.setColor("asbestos");
            };
            let noHandler = () => {};
            button.getApp().yesNo("Do you really want to deselect category " + button.getName() + "?", yesHandler, noHandler);
        } else {
            button.setColor("pumpkin");
        }
    }

}

export class SupportProcessListButtonHandler implements path.IButtonHandler {

    public doClick(button:path.IButton) {
        console.log("clicked " + button.getColor());
        if (button.getColor() == "pumpkin") {
            let yesHandler = () => {
                button.setColor("asbestos");
            };
            let noHandler = () => {};
            button.getApp().yesNo("Do you really want to deselect support process " + button.getName() + "?", yesHandler, noHandler);
        } else {
            button.setColor("pumpkin");
        }
    }

}

export class ReportDownloadButtonHandler implements path.IButtonHandler {

    public doClick(button:path.IButton) {
        console.log("open excel doc");
        window.location.assign(button.getApp().getBackendUrl() + "/report/completenesscheck");
    }

}

export class CompanyActionHandler implements path.IActionHandler {

    doClick(field:path.IFormField, action:path.IAction) {
        console.log("action clicked " + field["name"]);
        field.getForm().getApp().setCurrentForm("CompanyForm", null, "CompanyFormHandler");
    }

}

export class PersonActionHandler implements path.IActionHandler {

    doClick(field:path.IFormField, action:path.IAction) {
        console.log("action clicked " + field["name"]);
        field.getForm().getApp().setCurrentForm("PersonForm", null, null);
    }

}

export class QuickScanListHandler implements path.IListHandler {

    doLoad(list:path.IList) {
        console.log("loading quickscan projects list");
    }

}