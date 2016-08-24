import {IFormFunction} from "../pathinterface";
export class FormFunction implements IFormFunction {

    private _cancel:()=>void;
    private _save:()=>void;
    private _delete:()=>void;

    get cancel(): ()=>void {
        return this._cancel;
    }

    set cancel(value: ()=>void) {
        this._cancel = value;
    }

    get save(): ()=>void {
        return this._save;
    }

    set save(value: ()=>void) {
        this._save = value;
    }

    get delete(): ()=>void {
        return this._delete;
    }

    set delete(value: ()=>void) {
        this._delete = value;
    }
}
