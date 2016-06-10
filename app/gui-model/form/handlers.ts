import * as forms from './../generated/forms';
import * as path from './../../path-framework/path';

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

export class CustomerFormHandler implements path.IFormHandler {

    public doLoad(form:forms.CustomerForm) {
        console.log("loading customer form");
    }

    public doSave(form:forms.CustomerForm) {
        console.log("saving customer form");
    }

    public doValidate(form:forms.CustomerForm) {
        console.log("validating customer form");
    }

}

export class CategoryListButtonHandler implements path.IButtonHandler {

    public doClick(button:path.IButton) {
        console.log("clicked " + button.getColor());
        if (button.getColor() == "silver") {
            button.setColor("wet-asphalt");
        } else {
            button.setColor("silver");
        }
    }

}