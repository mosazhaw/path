import * as path from './../path';
import {ValueField} from "./field/value-field";
import {IForm, IPathApp} from "../pathinterface";

export class Form implements IForm {
    private _title:string;
    private _fields:path.FormField[] = [];
    private _rows:FormRow[] = [];
    private _handler:path.IFormHandler;
    private _url:string;

    constructor(private pathService:path.PathService, private app:path.IPathApp) {
    }

    getApp():IPathApp {
        return this.app;
    }

    get title():string {
        return this._title;
    }

    set title(value:string) {
        this._title = value;
    }

    get fields():path.FormField[] {
        return this._fields;
    }

    set fields(value:path.FormField[]) {
        this._fields = value;
    }

    get rows():FormRow[] {
        return this._rows;
    }

    set rows(value:FormRow[]) {
        this._rows = value;
    }

    get handler():path.IFormHandler {
        return this._handler;
    }

    set handler(value:path.IFormHandler) {
        this._handler = value;
    }

    get url():string {
        return this._url;
    }

    set url(value:string) {
        this._url = value;
    }

    public updateRows() {
        let rows:FormRow[] = [];

        let currentFormRow:FormRow;
        for (let field of this.fields) {
            // auto-start new row with form width 2
            if (currentFormRow == null || field.newRow || currentFormRow.fields.length >= 2 || field.width >= 2 || currentFormRow.getWidth() >= 2) {
                field.newRow = true;
                currentFormRow = new FormRow();
                rows.push(currentFormRow);
            }
            currentFormRow.fields.push(field);
        }
        this._rows = rows;
    }

    public close(save:boolean) {
        if (save) {
            // call close handler
            if (this.handler != null) {
                this.handler.doSave(this);
            }
            let data = {};
            for (let field of this._fields) {
                // TODO refactor valueField
                if (field instanceof ValueField && field.id != null) {
                    data[field.id] = (<ValueField<any>>field).value;
                }
            }
            console.log(data);
            this.pathService.serverPost(this.app.getBackendUrl(), this.url, data, () => {
                console.log("saved on backend");
                this.app.closeCurrentForm();
                this.app.refreshCurrentPage();
            });
        } else {
            this.app.closeCurrentForm();
        }
    }

    public onKey(event) {
        if (event.keyCode == 27) { // esc
            this.close(false);
        }
    }
}

class FormRow {
    private _fields:path.FormField[] = [];

    get fields():path.FormField[] {
        return this._fields;
    }

    set fields(value:path.FormField[]) {
        this._fields = value;
    }

    public getWidth():number {
        let sum:number = 0;
        for (let field of this.fields) {
            sum += field.width;
        }
        return sum;
    }

    public isVisible():boolean {
        for (let field of this.fields) {
            if (field.visible) {
                return true;
            }
        }
        return false;
    }
}
