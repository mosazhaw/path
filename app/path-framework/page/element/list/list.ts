import * as path from '../../../path';
import {IListHandler, IList} from "../../../pathinterface";
import {ButtonDetail} from "../button/button-detail";

export class List extends path.PageElement implements IList {
    private _buttons:path.Button[] = [];
    private _search:boolean;
    private _handler:IListHandler;

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
}