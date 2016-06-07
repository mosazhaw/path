import * as forms from './../generated/forms';
import {IFormHandler} from './../../path-framework/path';

export class ProjectFormHandler implements IFormHandler {

    public doLoad(form:forms.ProjectForm) {
        console.log("loading project form");
    }

    public doSave(form:forms.ProjectForm) {
        console.log("saving project form");
    }

    public doValidate(form:forms.ProjectForm) {
        console.log("validating project form");
    }

}

export class CustomerFormHandler implements IFormHandler {

    public doLoad(form:forms.CustomerForm) {
        console.log("loading customer form");
        console.log(form);
        // form.companyName.name = "Changed";
        // form.companyName.value = "value updated";
    }

    public doSave(form:forms.CustomerForm) {
        console.log("saving customer form");
    }

    public doValidate(form:forms.CustomerForm) {
        console.log("validating customer form");
    }

}
