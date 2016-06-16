import * as path from '../../../path';
import {IListHandler, IList} from "../../../pathinterface";

export class List extends path.PageElement implements IList {
    private _content:path.Button[] = [];
    private _search:boolean;
    private _handler:IListHandler;

    public getContent():path.IButton[] {
        return this.content;
    }

    get content():path.Button[] {
        return this._content;
    }

    set content(value:path.Button[]) {
        this._content = value;
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