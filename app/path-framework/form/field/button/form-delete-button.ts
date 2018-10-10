import * as path from "./../../../path";

export class FormDeleteButton extends path.FormField {
    private _handler: path.IButtonHandler;

    get handler(): path.IButtonHandler {
        return this._handler;
    }

    set handler(value: path.IButtonHandler) {
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
