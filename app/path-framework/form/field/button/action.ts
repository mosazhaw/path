import * as path from './../../../path';

export class Action implements path.IAction {
    private _name:String;
    private _handler:path.IActionHandler;

    get name():String {
        return this._name;
    }

    set name(value:String) {
        this._name = value;
    }

    get handler():path.IActionHandler {
        return this._handler;
    }

    set handler(value:path.IActionHandler) {
        this._handler = value;
    }
}