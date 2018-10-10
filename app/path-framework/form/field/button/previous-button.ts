import * as path from "./../../../path";

export class PreviousButton extends path.FormField {
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
        this.form.close(false, true);
    }
}
