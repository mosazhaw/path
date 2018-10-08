import {Component, Input, Output} from "@angular/core";
import {PathService} from "../service/path.service";
import {IForm, IPathApp, IFormHandler, IFormBean} from "../pathinterface";
import {ValueField} from "./field/value-field";
import {FormField} from "./field/form-field";
import {FieldListField} from "./field/fieldList/field-list-field.component";
import {Key} from "../page/element/page-element";
import {FormFunction} from "./form-function";
import {TranslationService} from "../service/translation.service";
import {FocusUtility} from "./focus-utility";

@Component({
    selector: 'path-form',
    templateUrl: 'form.component.html',
})
export class FormComponent {
    @Input('form')
    @Output('form')
    form:Form;

    public onSubmit() {
        this.form.close(true, false);
    }

    ngAfterViewInit() {
        FocusUtility.focusFirstField(this.form);
    }
}

export class Form implements IForm {
    private _key:Key;
    private _title:string;
    private _fields:FormField[] = [];
    private _rows:FormRow[] = [];
    private _handler:IFormHandler;
    private _url:string;
    private _bean:IFormBean;
    private _formFunction: FormFunction;
    private _headerVisible:boolean = true;
    private _footerVisible:boolean = true;
    private _borderStyle:BorderStyle = BorderStyle.Shadow;

    constructor(private pathService:PathService, private app:IPathApp) {
    }

    getApp():IPathApp {
        return this.app;
    }

    getKey():Key {
        return this.key;
    }

    get key():Key {
        return this._key;
    }

    set key(value:Key) {
        this._key = value;
    }

    get rows(): FormRow[] {
        return this._rows;
    }

    get title():string {
        return this._title;
    }

    set title(value:string) {
        this._title = value;
    }

    public getFields():FormField[] {
        return this.fields;
    }

    get fields():FormField[] {
        return this._fields;
    }

    set fields(value:FormField[]) {
        this._fields = value;
    }

    get handler():IFormHandler {
        return this._handler;
    }

    set handler(value:IFormHandler) {
        this._handler = value;
    }

    get url():string {
        return this._url;
    }

    set url(value:string) {
        this._url = value;
    }

    get bean():IFormBean {
        return this._bean;
    }

    set bean(value:IFormBean) {
        this._bean = value;
    }

    get formFunction(): FormFunction {
        return this._formFunction;
    }

    set formFunction(value: FormFunction) {
        this._formFunction = value;
    }

    get headerVisible(): boolean {
        return this._headerVisible;
    }

    set headerVisible(value: boolean) {
        this._headerVisible = value;
    }

    get footerVisible(): boolean {
        return this._footerVisible;
    }

    set footerVisible(value: boolean) {
        this._footerVisible = value;
    }

    get borderStyle(): BorderStyle {
        return this._borderStyle;
    }

    set borderStyle(value: BorderStyle) {
        this._borderStyle = value;
    }

    public fromJson(modelForm) {
        this.url = modelForm["url"];
        this.headerVisible = true;
        if (modelForm["headerVisible"] != null) {
            this.headerVisible = modelForm["headerVisible"];
        }
        this.footerVisible = true;
        if (modelForm["footerVisible"] != null) {
            this.footerVisible = modelForm["footerVisible"];
        }
        this.borderStyle = BorderStyle.Shadow;
        if (modelForm["borderStyle"] != null) {
            let borderStyleString:string = modelForm["borderStyle"];
            this.borderStyle = BorderStyle[borderStyleString];
        }
    }

    public updateRows() {
        let rows:FormRow[] = [];

        let currentFormRow:FormRow;
        for (let field of this.fields) {
            if (field instanceof FieldListField) {
                for (let subField of (<FieldListField>field).subfields) {
                    currentFormRow = this.calculateFieldRow(subField, currentFormRow, rows);
                    currentFormRow.fields.push(subField);
                }
            } else {
                currentFormRow = this.calculateFieldRow(field, currentFormRow, rows);
                currentFormRow.fields.push(field);
            }
        }
        this._rows = rows;
    }

    private calculateFieldRow(field:FormField, currentFormRow:FormRow, rows:FormRow[]):FormRow {
        // auto-start new row with form width 2
        if (currentFormRow == null || field.newRow || currentFormRow.fields.length >= 2 || field.width >= 2 || currentFormRow.getWidth() >= 2) {
            field.newRow = true;
            currentFormRow = new FormRow();
            rows.push(currentFormRow);
        }
        return currentFormRow;
    }

    public close(save:boolean, remove:boolean) {
        if (save || remove) {
            // call close handler
            if (this.handler != null) {
                this.handler.doSave(this._bean);
            }
            let data = {};
            for (let field of this._fields) {
                if (field instanceof ValueField && field.id != null) {
                    data[field.id] = (<ValueField<any>>field).value;
                }
                if (field instanceof FieldListField) {
                    for (let subfield of (<FieldListField>field).subfields) {
                        data[subfield.id] = (<ValueField<any>>subfield).value;
                    }
                }
            }
            if (remove) {
                this.pathService.serverDelete(this.app.getBackendUrl(), this.url, this.formFunction.delete);
            } else if (this.key == null) {
                // create
                this.pathService.serverPost(this.app.getBackendUrl(), this.url, data, this.formFunction.save, null);
            } else {
                // update (with key)
                this.pathService.serverPut(this.app.getBackendUrl(), this.url, data, this.formFunction.save);
            }
        } else {
            this.formFunction.cancel();
        }
    }

    public onKey(event) {
        if (event.keyCode == 27) { // esc
            this.close(false, false);
        }
    }
}

export class FormRow {
    private _fields:FormField[] = [];

    get fields():FormField[] {
        return this._fields;
    }

    set fields(value:FormField[]) {
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

export enum BorderStyle {
    // TODO use string enum after TS upgrade, then use enum in template (with member)
    None = 1,
    Shadow = 2
}