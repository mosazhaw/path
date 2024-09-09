import {IButtonHandler} from "../../../pathinterface";
import {FormField} from "../form-field";

export class PreviousButton extends FormField {
    private _handler!: IButtonHandler;

    get handler(): IButtonHandler {
        return this._handler;
    }

    set handler(value: IButtonHandler) {
        this._handler = value;
    }

    public onClick() {
        if (this._handler != null) {
            this._handler.doClick(<any>null); // TODO
        }
        this.form.close(false, true);
    }
}
