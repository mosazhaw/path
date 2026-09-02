import {IForm} from "../pathinterface";

export class FocusUtility {

    public static focusFirstField(currentForm: IForm) {
        window.setTimeout(() => {
            let focusDone = false;

            const forms = <any>document.forms;
            // reverse order
            for (let i=forms.length-1; i >= 0; i--) {
                const form = forms[i];
                if (currentForm == null || form.name !== "search") {
                    for (const element of <any>form.elements) {
                        if (element instanceof HTMLInputElement) {
                            const input = <HTMLInputElement>element;
                            if (input.type === "text" || input.type === "number" || input.type === "textarea") {
                                if (!this.isReadonly(input)) {
                                    input.focus();
                                    focusDone = true;
                                    break;
                                }
                            }
                        } else if (element instanceof HTMLTextAreaElement) {
                            const textarea = <HTMLTextAreaElement>element;
                            if (!this.isReadonly(textarea)) {
                                textarea.focus();
                                focusDone = true;
                                break;
                            }
                        }
                    }
                    if (focusDone) {
                        break;
                    }
                }
            }
        }, 1);
    }

    private static isReadonly(element: HTMLElement) {
        if (element.outerHTML.indexOf("readonly-with-required") > 0) {
            // no focus on readonly fields (translation)
            return true;
        } else if (element.hasAttribute("readonly")) {
            return true;
        }
        return false;
    }

}
