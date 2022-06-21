import {FormField} from "../form-field";
import {IButtonHandler} from "../../../pathinterface";

export class OkButton extends FormField {
    private _handler: IButtonHandler;
    private _saveEnabled: boolean = true;

    get handler(): IButtonHandler {
        return this._handler;
    }

    set handler(value: IButtonHandler) {
        this._handler = value;
    }

    get saveEnabled(): boolean {
        return this._saveEnabled;
    }

    set saveEnabled(value: boolean) {
        this._saveEnabled = value;
    }

    public onClick() {
        if (this._handler != null) {
            this._handler.doClick(null); // TODO
        }
        // closing/saving is done in submit function on form component
    }
}
