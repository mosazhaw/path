import * as path from '../../../path';
import {Key} from "../page-element";
import {PathService} from "../../../service/path.service";
import {IPathApp} from "../../../pathinterface";

export class Button extends path.PageElement implements path.IButton {
    private _icon:string;
    private _color:string;
    private _visible:boolean = true;
    private _handler:path.IButtonHandler;
    private _details:path.ButtonDetail[] = [];

    // TODO refactor prototype stuff
    private _url:string;
    private _page:string;
    private _form:string;
    private _formHandler:string;

    constructor(app:IPathApp, protected pathService:PathService) {
        super(app);
    }

    public onClick() {
        if (this._handler != null) {
            this._handler.doClick(this);
            return;
        }

        if (this._url != null) {
            this.pathService.serverGet(this.app.getBackendUrl(), this._url, () => {
                this.app.refreshCurrentPage();
            }, null);
        }

        if (this._page != null) {
            this.app.setCurrentPage(this._page, this);
            return;
        }

        if (this._form != null) {
            this.app.setCurrentForm(this._form, this.key, this._formHandler, this);
            return;
        }
    }

    public setColor(color:string) {
        this.color = color;
    }

    public getColor() {
        return this.color;
    }

    public setIcon(icon:string) {
        this.icon = icon;
    }

    public setForm(form:string) {
        this.form = form;
    }

    public setFormHandler(formHandler:string) {
        this.formHandler = formHandler;
    }

    public setPage(page:string) {
        this.page = page;
    }

    public setKey(key:Key) {
        this.key = key;
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

    get details():path.ButtonDetail[] {
        return this._details;
    }

    set details(value:path.ButtonDetail[]) {
        this._details = value;
    }

    get page():string {
        return this._page;
    }

    set page(value:string) {
        this._page = value;
    }

    get form():string {
        return this._form;
    }

    set form(value:string) {
        this._form = value;
    }

    get formHandler():string {
        return this._formHandler;
    }

    set formHandler(value:string) {
        this._formHandler = value;
    }

    get visible(): boolean {
        return this._visible;
    }

    set visible(value: boolean) {
        this._visible = value;
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }
}
