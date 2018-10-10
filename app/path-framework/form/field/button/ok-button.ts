import * as path from "./../../../path";

export class OkButton extends path.FormField {
    private _handler: path.IButtonHandler;

    get handler(): path.IButtonHandler {
        return this._handler;
    }

    set handler(value: path.IButtonHandler) {
        this._handler = value;
    }

    public onClick() {
        if (this._handler != null) {
            this._handler.doClick(null); // TODO
        }
        // closing/saving is done in submit function on form component
    }
}
