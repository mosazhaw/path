import * as path from '../../../path';

export class Button extends path.PageElement implements path.IButton {
    private _icon:string;
    private _color:string;
    private _handler:path.IButtonHandler;

    public onClick() {
        if (this._handler != null) {
            this._handler.doClick(this);
        }
    }

    public setColor(color:string) {
        this.color = color;
    }

    public getColor() {
        return this.color;
    }

    public getApp() {
        return this.app;
    }

    public getName() {
        return this.name;
    }

    get icon():string {
        return this._icon;
    }

    set icon(value:string) {
        this._icon = value;
    }

    get color():string {
        return this._color;
    }

    set color(value:string) {
        this._color = value;
    }

    get handler():path.IButtonHandler {
        return this._handler;
    }

    set handler(value:path.IButtonHandler) {
        this._handler = value;
    }
}
