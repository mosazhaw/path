import * as path from "./../path";
import {PageElement} from "./element/page-element";

export class Page {
    private _name: string;
    private _id: string;
    private _content: path.PageElement[] = [];
    private _rows: PageRow[] = [];

    public getShortName(): string {
        return path.PageElement.buildShortName(this.name);
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get content(): path.PageElement[] {
        return this._content;
    }

    set content(value: path.PageElement[]) {
        this._content = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    public updateRows() {
        const rows: PageRow[] = [];

        let currentPageRow: PageRow = null;
        for (const pageElement of this.content) {
            if (pageElement.newRow === true || currentPageRow == null) {
                currentPageRow = new PageRow();
                rows.push(currentPageRow);
            }
            currentPageRow.pageElements.push(pageElement);
        }
        this._rows = rows;
    }
}

class PageRow {
    private _pageElements: PageElement[] = [];

    get pageElements(): PageElement[] {
        return this._pageElements;
    }

    public isVisible(): boolean {
        for (const pageElement of this.pageElements) {
            if (pageElement.visible) {
                return true;
            }
        }
        return false;
    }
}
