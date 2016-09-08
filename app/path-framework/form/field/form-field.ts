import {Action} from './../../form/field/button/action';
import {IFormField, IForm} from "../../pathinterface";
import {TranslationService} from "../../service/translation.service";

export class FormField implements IFormField {
    private _id:string;
    private _name:string;
    private _type:string;
    private _height:number;
    private _width:number;
    private _newRow:boolean;
    private _visible:boolean;
    private _labelVisible:boolean;
    private _required:boolean;
    private _readonly:boolean;
    private _actions:Action[] = [];

    constructor(protected form:IForm, protected translationService:TranslationService) {
    }

    getForm():IForm {
        return this.form;
    }

    get actions():Action[] {
        return this._actions;
    }

    set actions(value:Action[]) {
        this._actions = value;
    }

    get height():number {
        return this._height;
    }

    set height(value:number) {
        this._height = value;
    }

    get visible():boolean {
        return this._visible;
    }

    set visible(value:boolean) {
        this._visible = value;
    }

    get width():number {
        return this._width;
    }

    set width(value:number) {
        this._width = value;
    }

    get newRow():boolean {
        return this._newRow;
    }

    set newRow(value:boolean) {
        this._newRow = value;
    }

    get required():boolean {
        return this._required;
    }

    set required(value:boolean) {
        this._required = value;
    }

    get readonly(): boolean {
        return this._readonly;
    }

    set readonly(value: boolean) {
        this._readonly = value;
    }

    get id():string {
        return this._id;
    }

    set id(value:string) {
        this._id = value;
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

    get labelVisible():boolean {
        return this._labelVisible;
    }

    set labelVisible(value:boolean) {
        this._labelVisible = value;
    }

    public isReadonly():boolean {
        return this.readonly;
    }

    public fromJson(modelFormField) {
        this.visible = true;
        if (modelFormField["visible"] != null) {
            this.visible = modelFormField["visible"];
        }
        this.labelVisible = true;
        if (modelFormField["labelVisible"] != null) {
            this.labelVisible = modelFormField["labelVisible"];
        }
        this.width = 1;
        if (modelFormField["width"] != null) {
            this.width = modelFormField["width"];
        }
        this.newRow = false;
        if (modelFormField["newRow"] != null) {
            this.newRow = modelFormField["newRow"];
        }
        this.required = false;
        if (modelFormField["required"] != null) {
            this.required = modelFormField["required"];
        }
        this.readonly = false;
        if (modelFormField["readonly"] != null) {
            this.readonly = modelFormField["readonly"];
        }
        this.id = modelFormField["id"];
        this.name = this.translationService.getText(modelFormField.name);
        this.type = modelFormField.type;
        this.height = modelFormField["height"];
    }
}