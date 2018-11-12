import {Key, PageElement} from "../page-element";
import {PathService} from "../../../service/path.service";
import {IButton, IButtonHandler, IPathApp} from "../../../pathinterface";
import {Input, Output, Component} from "@angular/core";
import {TranslationService} from "../../../service/translation.service";
import {KeyUtility} from "../../../utility/key-utility";
import {ButtonDetail} from "./button-detail";
import {StringUtility} from "../../../utility/string-utility";
import {ColorUtility} from "../../../utility/color-utility";

@Component({
    selector: "path-button",
    templateUrl: "button.component.html"
})
export class ButtonComponent {
    @Input("button")
    @Output("button")
    button: Button;
}

export class Button extends PageElement implements IButton {
    private _icon: string;
    private _cssStyle: Object;
    private _cssClass: string;
    private _cssButtonTarget: boolean;
    private _cssGroupBorder: string;
    private _handler: IButtonHandler;
    private _details: ButtonDetail[] = [];
    private _tooltip: string;

    // TODO refactor prototype stuff
    private _url: string;
    private _page: string;
    private _form: string;
    private _formHandler: string;

    constructor(app: IPathApp, protected pathService: PathService, protected translationService: TranslationService) {
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

    public setIcon(icon: string) {
        this.icon = icon;
    }

    public setForm(form: string) {
        this.form = form;
    }

    public setFormHandler(formHandler: string) {
        this.formHandler = formHandler;
    }

    public setPage(page: string) {
        this.page = page;
    }

    public setKey(key: Key) {
        this.key = key;
    }

    public getApp() {
        return this.app;
    }

    public getName() {
        return this.name;
    }

    get icon(): string {
        return this._icon;
    }

    set icon(value: string) {
        this._icon = value;
    }

    get cssStyle(): Object {
        return this._cssStyle;
    }

    get cssClass(): string {
        return this._cssClass;
    }

    get cssButtonTarget(): boolean {
        return this._cssButtonTarget;
    }

    get cssGroupBorder(): string {
        return this._cssGroupBorder;
    }

    set cssGroupBorder(value: string) {
        this._cssGroupBorder = value;
    }

    get handler(): IButtonHandler {
        return this._handler;
    }

    set handler(value: IButtonHandler) {
        this._handler = value;
    }

    get details(): ButtonDetail[] {
        return this._details;
    }

    set details(value: ButtonDetail[]) {
        this._details = value;
    }

    get page(): string {
        return this._page;
    }

    set page(value: string) {
        this._page = value;
    }

    get form(): string {
        return this._form;
    }

    set form(value: string) {
        this._form = value;
    }

    get formHandler(): string {
        return this._formHandler;
    }

    set formHandler(value: string) {
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

    public fromJson(modelElement) {
        super.fromJson(modelElement);

        // general attributes
        this.type = "button";
        this.setIcon(modelElement["icon"]);
        if (modelElement["color"] != null) {
            const color = modelElement["color"];
            if (typeof color === "object") {
                this._cssStyle = color;
            } else if (typeof color === "string") {
                if (ColorUtility.isPathDefaultColor(color)) {
                    this._cssClass = "tile-" + color;
                } else {
                    this._cssClass = color;
                }
            }
        }
        if (modelElement["form"] != null) {
            this.setForm(modelElement["form"]["form"]);
            this.setFormHandler(modelElement["form"]["handler"]);
        }
        this.setPage(modelElement["page"]);
        if (this.key == null && this.parentPageElement != null && modelElement.type === "button") {
            this.key = this.parentPageElement.key;
        }
        this.name = this.translationService.getText(modelElement["name"]);
        this.url = KeyUtility.translateUrl(modelElement["url"], null, false, this);
        if (modelElement["tooltip"] != null) {
            this.tooltip = this.translationService.getText(modelElement["tooltip"]);
        }
        // button details
        if (modelElement["details"] != null) {
            this.details = [];
            for (const detail of modelElement["details"]) {
                const bd: ButtonDetail = new ButtonDetail();
                bd.text = detail;
                this.details.push(bd);
            }
        }
        // button target
        this._cssButtonTarget = true;
        if (this.type === "button") {
            if (StringUtility.isEmpty(this.form) && StringUtility.isEmpty(this.page) && StringUtility.isEmpty(this.url)) {
                this._cssButtonTarget = false;
            }
        }
    }
}
