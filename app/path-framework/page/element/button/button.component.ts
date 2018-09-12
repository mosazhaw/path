import * as path from '../../../path';
import {Key} from "../page-element";
import {PathService} from "../../../service/path.service";
import {IPathApp} from "../../../pathinterface";
import {Input, Output, Component} from "@angular/core";
import {TranslationService} from "../../../service/translation.service";
import {KeyUtility} from "../../../key-utility";
import {ButtonDetail} from "./button-detail";
import {StringUtility} from "../../../string-utility";

@Component({
    selector: 'path-button',
    templateUrl: 'button.component.html'
})
export class ButtonComponent {
    @Input('button')
    @Output('button')
    button:Button;
}

export class Button extends path.PageElement implements path.IButton {
    private _icon:string;
    private _color:string;
    private _handler:path.IButtonHandler;
    private _details:path.ButtonDetail[] = [];
    private _tooltip:string;

    // TODO refactor prototype stuff
    private _url:string;
    private _page:string;
    private _form:string;
    private _formHandler:string;

    constructor(app:IPathApp, protected pathService:PathService, protected translationService:TranslationService) {
        super(app);
    }

    public onClick() {
        if (this._handler != null) {
            this._handler.doClick(this);
            return;
        }

        if (!StringUtility.isEmpty(this._url)) {
            this.pathService.serverGet(this.app.getBackendUrl(), this._url, () => {
                this.app.refreshCurrentPage();
            }, null);
        }

        if (!StringUtility.isEmpty(this._page)) {
            this.app.setCurrentPage(this._page, this);
            return;
        }

        if (!StringUtility.isEmpty(this._form)) {
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

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    get tooltip(): string {
        return this._tooltip;
    }

    set tooltip(value: string) {
        this._tooltip = value;
    }

    public isClickableButton():boolean {
        if (this.type == "button") {
            if (StringUtility.isEmpty(this.form) && StringUtility.isEmpty(this.page)) {
                return false;
            }
        }
        return true;
    }

    public fromJson(modelElement) {
        super.fromJson(modelElement);

        // general attributes
        this.type = "button";
        this.setIcon(modelElement["icon"]);
        this.setColor(modelElement["color"]);
        if (modelElement["form"] != null) {
            this.setForm(modelElement["form"]["form"]);
            this.setFormHandler(modelElement["form"]["handler"]);
        }
        this.setPage(modelElement["page"]);
        if (this.key == null && this.parentPageElement != null && modelElement.type == "button") {
            this.key = this.parentPageElement.key;
        }
        this.name = this.translationService.getText(modelElement["name"]);
        this.url = KeyUtility.translateUrl(modelElement["url"], null, false, this.parentPageElement);
        if (modelElement["tooltip"] != null) {
            this.tooltip = this.translationService.getText(modelElement["tooltip"]);
        }
        // button details
        if (modelElement["details"] != null) {
            this.details = [];
            for (let detail of modelElement["details"]) {
                let bd:path.ButtonDetail = new ButtonDetail();
                bd.text = detail;
                this.details.push(bd);
            }
        }
    }
}
