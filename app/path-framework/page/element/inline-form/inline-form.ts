import {Form} from "../../../form/form.component";
import {PageElement} from "../page-element";

export class InlineForm extends PageElement {
    private _form:Form;

    get form():Form {
        return this._form;
    }

    set form(value:Form) {
        this._form = value;
    }
}
