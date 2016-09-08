import {Component, Input, Output, ElementRef, Inject} from '@angular/core';
import {ValueField} from "../value-field";
import {FormFunction} from "../../form-function";
import {Form} from "../../form.component";
import {OkButton} from "../button/ok-button";
import {CancelButton} from "../button/cancel-button";
import {PathService} from "../../../service/path.service";
import {TextField} from "../text/text-field.component";
import {IButton} from "../../../pathinterface";

@Component({
    selector: 'path-translationfield',
    templateUrl: 'app/path-framework/form/field/translation/translation-field.component.html'
})
export class TranslationFieldComponent {
    @Input('field')
    @Output('field')
    field:TranslationField;
}

export class TranslationField extends ValueField<any[][]> {

    private languages:string[] = ["de", "en"];
    private userLanguage:string = "en"; // TODO get user language
    private defaultTranslation:string = null;

    constructor(form:Form, @Inject(PathService) private pathService:PathService) {
        super(form);
        let initialList:any[][] = [];
        for (let language of this.languages) {
            initialList.push([{"code": language}, ""]);
        }
        this.setValue(initialList);
    }

    public setValue(value:any[][]) {
        super.setValue(value);
        this.defaultTranslation = this.getDefaultTranslation();
    }

    private getDefaultTranslation():string {
        if (this.value != null) {
            for (let item of this.value) {
                if (item[0] != null && item[0]["code"] == this.userLanguage) {
                    return item[1];
                }
            }
        }
        return null;
    }

    public editTranslations() {
        let form:Form = new Form(this.pathService, this.form.getApp());
        let translationFields:TextField[] = [];
        form.title = this.name + " Translations";
        form.formFunction = new FormFunction();
        form.formFunction.save = () => {
            let resultList:any[][] = [];
            for (let field of translationFields) {
                resultList.push([{"code": field.id}, field.value]);
            }
            this.setValue(resultList);
            this.getForm().getApp().closeCurrentForm();
        };
        form.formFunction.cancel = () => {
            this.getForm().getApp().closeCurrentForm();
        };
        let translations = this.value;
        for (let key of translations) {
                let textField:TextField = new TextField(form);
                textField.type = "text";
                textField.id = key[0]["code"];
                textField.name = key[0]["code"];
                textField.visible = true;
                textField.newRow = true;
                textField.width = 2;
                textField.height = this.height;
                textField.labelVisible = true;
                textField.required = true;
                textField.setValue(key[1]);
                form.fields.push(textField);
                translationFields.push(textField);
        }
        let okButton:OkButton = new OkButton(form);
        okButton.type = "okButton";
        okButton.name = "Ok";
        okButton.visible = true;
        form.fields.push(okButton);

        let cancelButton:CancelButton = new CancelButton(form);
        cancelButton.type = "cancelButton";
        cancelButton.name = "Cancel";
        cancelButton.visible = true;
        form.fields.push(cancelButton);
        form.updateRows();

        this.form.getApp()["_formStack"].push(form); // TODO
    }

}

export class TranslationEntry {
    private _text:string;
    private _code:string;

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }

    get code(): string {
        return this._code;
    }

    set code(value: string) {
        this._code = value;
    }
}