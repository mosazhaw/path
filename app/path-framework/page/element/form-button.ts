import * as path from './../../path';

export class FormButton extends path.Button {
    private _form:string;
    private _mode:string;
    private _formHandler:string;

    public onClick() {
        super.onClick();
        if (this._form != null) {
            this.app.setCurrentForm(this._form, this._form, this._formHandler);
        }
    }

    get form():string {
        return this._form;
    }

    set form(value:string) {
        this._form = value;
    }

    get mode():string {
        return this._mode;
    }

    set mode(value:string) {
        this._mode = value;
    }

    get formHandler():string {
        return this._formHandler;
    }

    set formHandler(value:string) {
        this._formHandler = value;
    }
}
