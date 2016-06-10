import * as path from './../../path';

export class PageButton extends path.Button {
    private _page:string;

    public onClick() {
        super.onClick();
        if (this._page != null) {
            this.app.setCurrentPage(this._page, this);
        }
    }

    get page():string {
        return this._page;
    }

    set page(value:string) {
        this._page = value;
    }
}