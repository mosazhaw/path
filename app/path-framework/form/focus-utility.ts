import {IForm} from "../pathinterface";

export class FocusUtility {

    public static focusFirstField(currentForm: IForm) {
        window.setTimeout(() => {
            let focusDone: boolean = false;

            let forms = <any>document.forms;
            if (currentForm != null) {
                forms = [forms[forms.length - 1]]; // only last form on form stack
            }
            for (let form of forms) {
                for (let element of <any>form.elements) {
                    if (element instanceof HTMLInputElement && (<HTMLInputElement>element).type == "text") {
                        let input = <HTMLInputElement>element;
                        if (input.outerHTML.indexOf('readonly-with-required') < 0) { // no focus on readonly fields
                            input.focus();
                            focusDone = true;
                        }
                        break;
                    }
                }
                if (focusDone) {
                    break;
                }
            }
        }, 1)
    }

}