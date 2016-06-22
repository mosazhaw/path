import * as path from '../../../path';
import {IListHandler, IList, IButtonHandler} from "../../../pathinterface";
import {ButtonDetail} from "../button/button-detail";
import {PathService} from "../../../service/path.service";
import {Inject} from "@angular/core";

export class List extends path.PageElement implements IList {
    private _buttons:path.Button[] = [];
    private _search:boolean;
    private _handler:IListHandler;
    private _buttonHandler:IButtonHandler;
    private _icon:string;
    private _color:string;
    private _form:string;
    private _formHandler:string;
    private _page:string;
    private _mockData:any;
    private _url;

    constructor(app:path.IPathApp, @Inject(PathService) private pathService:PathService) {
        super(app);
    }

    public getContent():path.IButton[] {
        return this.buttons;
    }

    public addButton(id:number,name:string,handler:path.IButtonHandler,details:string[]):path.IButton {
        let button:path.Button = new path.Button(this.app);
        button.handler = handler;
        button.name = name;
        if (details != null) {
            for (let detail of details) {
                let bd:path.ButtonDetail = new ButtonDetail();
                bd.text = detail;
                button.details.push(bd);
            }
        }
        this.buttons.push(button);
        return button;
    }

    public refresh() {
        this.buttons = [];
        // callback function for data
        let dataHandler = (data:any) => {
            for (let item of data) {
                let button:path.IButton = this.addButton(item.id, item.name, this.buttonHandler, item["details"]);
                button.setIcon(this.icon);
                button.setColor(this.color);
                if (this.form != null) {
                    button.setForm(this.form);
                    button.setFormHandler(this.formHandler);
                }
                button.setPage(this.page);
                button.setKey(item["key"]);
                button.setColor(item["color"] != null ? item["color"] : button.getColor());
            }
            if (this.handler != null) {
                this.handler.doLoad(this); // TODO useful?
            }
        }
        let listHandlerDoLoad = (list:path.IList) => (data:any) => dataHandler(data);
        // backend data
        if (this._url != null) {
            this.pathService.serverGet(this.app.getBackendUrl(), this.url, listHandlerDoLoad(this));
        }
        // mock data
        if (this._mockData != null) {
            dataHandler(this.mockData);
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