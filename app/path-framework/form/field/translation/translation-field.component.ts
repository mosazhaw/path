import {Component, Input, Output, ElementRef, Inject} from '@angular/core';
import {ValueField} from "../value-field";
import {FormFunction} from "../../form-function";
import {Form} from "../../form.component";
import {OkButton} from "../button/ok-button";
import {CancelButton} from "../button/cancel-button";
import {PathService} from "../../../service/path.service";
import {TextField} from "../text/text-field.component";
import {IButton} from "../../../pathinterface";
import {TranslationService} from "../../../service/translation.service";

@Component({
    moduleId: module.id,
    selector: 'path-translationfield',
    templateUrl: 'translation-field.component.html'
})
export class TranslationFieldComponent {
    @Input('field')
    @Output('field')
    field:TranslationField;
}

export class TranslationField extends ValueField<any[][]> {

    private languages:string[] = ["de", "en"];
    private userLanguage:string = sessionStorage.getItem("languageCode");
    private defaultTranslation:string = null;
    private translationLabel:string;

    constructor(form:Form, private pathService:PathService, protected translationService:TranslationService) {
        super(form, translationService);
        let initialList:any[][] = [];
        for (let language of this.languages) {
            initialList.push([{"key": language}, ""]);
        }
        this.setValue(initialList);
        this.translationLabel = translationService.getText("Translation");
    }

    public setValue(value:any[][]) {
        super.setValue(value);
        this.defaultTranslation = this.getDefaultTranslation();
    }

    private getDefaultTranslation():string {
        if (this.value != null) {
            for (let item of this.value) {
                if (item[0] != null && item[0]["key"] == this.userLanguage) {
                    return item[1];
                }
            }
        }
        return null;
    }

    public editTranslations() {
        let form:Form = new Form(this.pathService, this.form.getApp());
        let translationFields:TextField[] = [];
        form.title = this.name + " " + this.translationService.getText("Translations");
        form.formFunction = new FormFunction();
        form.formFunction.save = (data:any) => {
            let resultList:any[][] = [];
            for (let field of translationFields) {
                resultList.push([{"key": field.id}, field.value]);
            }
            this.setValue(resultList);
            this.getForm().getApp().closeCurrentForm();
        };
        form.formFunction.cancel = () => {
            this.getForm().getApp().closeCurrentForm();
        };
        let translations = this.value;
        for (let key of translations) {
                let textField:TextField = new TextField(form, this.translationService);
                textField.type = "text";
                textField.id = key[0]["key"];
                textField.name = this.translationService.getText(key[0]["key"]);
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

        let cancelButton:CancelButton = new CancelButton(form, this.translationService);
        cancelButton.type = "cancelButton";
        cancelButton.name = this.translationService.getText("Cancel");
        cancelButton.visible = true;
        form.fields.push(cancelButton);

        let okButton:OkButton = new OkButton(form, this.translationService);
        okButton.type = "okButton";
        okButton.name = this.translationService.getText("Ok");
        okButton.visible = true;
        form.fields.push(okButton);

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