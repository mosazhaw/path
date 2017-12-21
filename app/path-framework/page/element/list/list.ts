import * as path from '../../../path';
import {IListHandler, IList, IButtonHandler, IKey} from "../../../pathinterface";
import {ButtonDetail} from "../button/button-detail";
import {PathService} from "../../../service/path.service";
import {Inject} from "@angular/core";
import {Key} from "../page-element";
import {TranslationService} from "../../../service/translation.service";
import {KeyUtility} from "../../../key-utility";

export class List extends path.PageElement implements IList {
    private _buttons:path.Button[] = [];
    private _search:boolean;
    private _searchLabel:string;
    private _searchInputLabel:string;
    private _searchText:string;
    private _handler:IListHandler;
    private _buttonHandler:IButtonHandler;
    private _icon:string;
    private _color:string;
    private _form:string;
    private _formHandler:string;
    private _page:string;
    private _mockData:any;
    private _url;

    constructor(app:path.IPathApp, private pathService:PathService, private translationService:TranslationService) {
        super(app);
        this._searchLabel = translationService.getText("Search");
        this._searchInputLabel = translationService.getText("SearchInputLabel");
    }

    public getContent():path.IButton[] {
        return this.buttons;
    }

    public refresh() {
        // callback function for data
        console.log("refresh list");
        let dataHandler = (data:any) => {
            let oldButtons = this.buttons;
            this.buttons = [];
            for (let item of data) {
                let itemKey:Key = new Key(item["key"]["key"], item["key"]["name"]);
                let button:path.Button = this.findButton(itemKey, oldButtons);
                if (button == null) {
                    // create button
                    if (item["type"] == null || item["type"] == "button") {
                        button = new path.Button(this.app, this.pathService, this.translationService);
                    } else if (item["type"] == "linkButton") {
                        button = new path.LinkButton(this.app, this.pathService, this.translationService);
                    }
                }
                // build button from json
                button.parentPageElement = this.parentPageElement;
                button.listElement = true;
                button.fromJson(item);

                // special defaults for list buttons
                button.setKey(itemKey);
                button.handler = this._buttonHandler;
                button.name = item.name; // no translation
                button.url = KeyUtility.translateUrl(item["url"] != null ? item["url"] : button.url, null, false, button);
                button.setIcon(item["icon"] != null ? item["icon"] : (button.icon == null ? this.icon : button.icon));
                button.setColor(item["color"] != null ? item["color"] : (button.color == null ? this.color : button.color));
                // special default width (2 instead of 1) for buttons in list
                if (item["width"] == null) {
                    button.width = 2;
                }
                // form button
                if (this.form != null) {
                    button.setForm(this.form);
                    button.setFormHandler(this.formHandler);
                }
                // page button
                button.setPage(item["page"] != null ? item["page"] : this.page);
                this.buttons.push(button);
            }
            if (this.handler != null) {
                this.handler.doLoad(this); // TODO useful?
            }
        }
        let listHandlerDoLoad = (list:path.IList) => (data:any) => dataHandler(data);
        // backend data
        if (this._url != null) {
            this.pathService.serverGet(this.app.getBackendUrl(), this.url, listHandlerDoLoad(this), null);
        }
        // mock data
        if (this._mockData != null) {
            let count:number = 0;
            // fake a key for mock data
            for (let mock of this.mockData) {
                count++;
                if (mock["key"] == null) {
                    mock["key"] = count;
                }
            }
            dataHandler(this.mockData);
        }
    }

    private findButton(key:IKey, buttons:path.Button[]):path.Button {
        for (let button of buttons) {
            if (button.key.getKey() == key.getKey() && button.key.getName() == key.getName()) {
                return button;
            }
        }
        return null;
    }

    public filter() {
        let searchText:string = this._searchText.toLowerCase();
        for (let button of this._buttons) {
            button.visible = true;
            if (searchText.length > 0) {
                let newVisible:boolean = button.name.toLowerCase().indexOf(searchText) != -1;
                if (!newVisible) {
                    for (let detail of button.details) {
                        if (detail.text.toLowerCase().indexOf(searchText) != -1) {
                            newVisible = true;
                            break;
                        }
                    }
                }
                button.visible = newVisible;
            }
        }
    }

    get buttons():path.Button[] {
        return this._buttons;
    }

    set buttons(value:path.Button[]) {
        this._buttons = value;
    }

    get search():boolean {
        return this._search;
    }

    set search(value:boolean) {
        this._search = value;
    }

    get handler():IListHandler {
        return this._handler;
    }

    set handler(value:IListHandler) {
        this._handler = value;
    }

    get buttonHandler():IButtonHandler {
        return this._buttonHandler;
    }

    set buttonHandler(value:IButtonHandler) {
        this._buttonHandler = value;
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

    get page():string {
        return this._page;
    }

    set page(value:string) {
        this._page = value;
    }

    get mockData():any {
        return this._mockData;
    }

    set mockData(value:any) {
        this._mockData = value;
    }

    get url() {
        return this._url;
    }

    set url(value) {
        this._url = value;
    }
}