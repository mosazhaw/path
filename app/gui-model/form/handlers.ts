import * as forms from './../generated/forms';
import {IFormHandler} from './../../path-framework/path';

export class ProjectFormQuickScanHandler implements IFormHandler {

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

export class ProjectFormDeepScanHandler implements IFormHandler {

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

export class CustomerFormHandler implements IFormHandler {

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