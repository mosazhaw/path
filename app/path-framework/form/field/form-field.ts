import {PageElement} from './../../page/element/page-element';
import {Action} from './../../form/field/button/action';

export class FormField extends PageElement {
    private _height:Number;
    private _width:Number;
    private _newRow:boolean;
    private _visible:boolean;
    private _actions:Action[] = [];

    get actions():Action[] {
        return this._actions;
    }

    set actions(value:Action[]) {
        this._actions = value;
    }

    get height():Number {
        return this._height;
    }

    set height(value:Number) {
        this._height = value;
    }

    get visible():boolean {
        return this._visible;
    }

    set visible(value:boolean) {
        this._visible = value;
    }

    get width():Number {
        return this._width;
    }

    set width(value:Number) {
        this._width = value;
    }

    get newRow():boolean {
        return this._newRow;
    }

    set newRow(value:boolean) {
        this._newRow = value;
    }
}