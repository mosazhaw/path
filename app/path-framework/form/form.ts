import * as path from './../path';
import {TextField} from "./field/text/text-field.component";

export class Form {
    private _title:String;
    private _fields:path.FormField[] = [];
    private _rows:FormRow[] = [];
    private _handler:path.IFormHandler;

    constructor(private pathService:path.PathService, private app:path.IPathApp) {
    }

    get title():String {
        return this._title;
    }

    set title(value:String) {
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

    public close() {
        // call close handler
        if (this.handler != null) {
            this.handler.doSave(this);
        }
        let data = {};
        for (let field of this._fields) {
            // TODO refactor valueField
            if (field instanceof TextField && field.id != null) {
                data[field.id] = (<TextField>field).value;
            }
        }
        console.log(data);
        this.pathService.serverPost(this.app.getBackendUrl(), "/project", data, () => {
            console.log("saved on backend");
            this.app.refreshCurrentPage();
        });
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
