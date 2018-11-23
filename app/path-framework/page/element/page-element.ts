import {IPageElement, IKey, IPathApp} from "../../pathinterface";
import {KeyUtility} from "../../utility/key-utility";

export class PageElement implements IPageElement {
    private readonly _app: IPathApp;
    private _id: string;
    private _key: Key;
    private _name: string;
    private _type: string;
    private _width: number;
    private _visible = true;
    private _newRow = false;
    private _listElement = false;
    private _parentPageElement: PageElement;

    public static buildShortName(str: string) {
        if (str == null || str.length === 0) {
            return "";
        }
        if (str.length > 63) {
            return str.substr(0, 60) + "...";
        }
        return str;
    }

    constructor(app: IPathApp) {
        this._app = app;
    }

    public getShortName(): string {
        return PageElement.buildShortName(this.name);
    }

    get app(): IPathApp {
        return this._app;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    public getKey(): IKey {
        return this._key;
    }

    get key(): Key {
        return this._key;
    }

    set key(value: Key) {
        this._key = value;
    }

    public getParent(): IPageElement {
        return this.parentPageElement;
    }

    get visible(): boolean {
        return this._visible;
    }

    set visible(value: boolean) {
        this._visible = value;
    }

    get newRow(): boolean {
        return this._newRow;
    }

    set newRow(value: boolean) {
        this._newRow = value;
    }

    get parentPageElement(): PageElement {
        return this._parentPageElement;
    }

    set parentPageElement(value: PageElement) {
        this._parentPageElement = value;
    }

    get listElement(): boolean {
        return this._listElement;
    }

    set listElement(value: boolean) {
        this._listElement = value;
    }

    public fromJson(modelElement) {
        this.visible = true;
        if (modelElement["id"] != null) {
            this.id = modelElement["id"];
        }
        if (modelElement["key"] != null) {
            const name: string = modelElement["key"]["name"];
            if (name && !modelElement["key"]["key"]) {
                this.key = KeyUtility.findKey(this.parentPageElement, name);
            } else {
                this.key = new Key(modelElement["key"]["key"], name);
            }
        }
        if (modelElement["visible"] != null) {
            this.visible = modelElement["visible"];
        }
        if (modelElement["newRow"] != null) {
            this.newRow = modelElement["newRow"];
        }
        if (modelElement["width"] != null) {
            this.width = modelElement["width"];
        } else {
            this.width = 1;
        }
    }
}

export class Key implements IKey {
    private _key: any;
    private _name: string;

    constructor(key: any, name: string) {
        this._key = key;
        this._name = name;
    }

    public getName(): string {
        return this._name;
    }

    set key(value: any) {
        this._key = value;
    }

    public getKey(): any {
        return this._key;
    }

    set name(value: string) {
        this._name = value;
    }
}
