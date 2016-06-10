import * as path from '../../../path';

export class List extends path.PageElement {
    private _content:path.Button[] = [];
    private _search:boolean;

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
}