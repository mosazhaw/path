import * as path from './../../path';
import {IPageElement, IKey} from "../../pathinterface";

export class PageElement implements IPageElement {
    private _app:path.IPathApp;
    private _id:string;
    private _key:Key;
    private _name:string;
    private _type:string;
    private _width:number;
    private _parentPageElement:PageElement;

    constructor(app:path.IPathApp) {
        this._app = app;
    }

    public getShortName():string {
        if (this.name.length > 23) {
            return this.name.substr(0, 20) + "...";
        }
        return this.name;
    }

    get app():path.IPathApp {
        return this._app;
    }

    get name():string {
        return this._name;
    }

    set name(value:string) {
        this._name = value;
    }

    get type():string {
        return this._type;
    }

    set type(value:string) {
        this._type = value;
    }

    get id():string {
        return this._id;
    }

    set id(value:string) {
        this._id = value;
    }

    get width():number {
        return this._width;
    }

    set width(value:number) {
        this._width = value;
    }

    public getKey():IKey {
        return this._key;
    }

    get key():Key {
        return this._key;
    }

    set key(value: Key) {
        this._key = value;
    }

    public getParent():IPageElement {
        return this.parentPageElement;
    }

    get parentPageElement(): PageElement {
        return this._parentPageElement;
    }

    set parentPageElement(value: PageElement) {
        this._parentPageElement = value;
    }


}

export class Key implements IKey {
    private _key:number;
    private _name:string;

    constructor(key: number, name: string) {
        this._key = key;
        this._name = name;
    }

    public getName(): string {
        return this._name;
    }

    set key(value: number) {
        this._key = value;
    }

    public getKey(): number {
        return this._key;
    }

    set name(value: string) {
        this._name = value;
    }
}