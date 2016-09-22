import {IFormFunction} from "../pathinterface";
export class FormFunction implements IFormFunction {

    private _cancel:()=>void;
    private _save:(data:any)=>void;
    private _delete:(data:any)=>void;

    get cancel(): ()=>void {
        return this._cancel;
    }

    set cancel(value: ()=>void) {
        this._cancel = value;
    }

    get save(): (data:any)=>void {
        return this._save;
    }

    set save(value: (data:any)=>void) {
        this._save = value;
    }

    get delete(): (data:any)=>void {
        return this._delete;
    }

    set delete(value: (data:any)=>void) {
        this._delete = value;
    }
}
