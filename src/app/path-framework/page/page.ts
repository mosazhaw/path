import {PageElement} from "./element/page-element";

export class Page {
    protected _name!: string;
    protected _id!: string;
    protected _content: PageElement[] = [];
    protected _rows: PageRow[] = [];
    protected readonly _parentPageElement: PageElement;

    constructor(parentPageElement: PageElement) {
        this._parentPageElement = parentPageElement;
    }

    public getShortName(): string {
        return PageElement.buildShortName(this.name);
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get content(): PageElement[] {
        return this._content;
    }

    set content(value: PageElement[]) {
        this._content = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get parentPageElement(): PageElement {
        return this._parentPageElement;
    }

    public updateRows() {
        const rows: PageRow[] = [];

        let currentPageRow: PageRow = <any>null;
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
