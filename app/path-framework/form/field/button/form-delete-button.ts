import {FormField} from "../form-field";
import {IButtonHandler} from "../../../pathinterface";

export class FormDeleteButton extends FormField {
    private _handler: IButtonHandler;

    get handler(): IButtonHandler {
        return this._handler;
    }

    set handler(value: IButtonHandler) {
        this._handler = value;
    }

    public onClick() {
        this.getForm().getApp().yesNo(this.translationService.getText("DeleteWarningQuestion"), () => {
            if (this._handler != null) {
                this._handler.doClick(null); // TODO
            }
            this.form.close(false, true);
        }, () => {
        });
    }
}
