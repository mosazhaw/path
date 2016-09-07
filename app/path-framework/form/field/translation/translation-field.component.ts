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

export class TranslationField extends ValueField<{[key:string]:string}> {

    private languages:string[] = ["de", "en"];
    private userLanguage:string = "en"; // TODO get user language

    constructor(form:Form, @Inject(PathService) private pathService:PathService) {
        super(form);
        let map:{[key:string]:string} = {};
        for (let language of this.languages) {
            map[language] = "";
        }
        this.setValue(map);
    }

    public isValueSet() {
        for (let language of this.languages) {
            if (this.value[language] != null && this.value[language] != "") {
                return true;
            }
        }
       return false;
    }

    public getDefaultTranslation() {
        if (this.value != null) {
            return this.value[this.userLanguage];
        }
        return ""
    }

    public editTranslations() {
        let form:Form = new Form(this.pathService, this.form.getApp());
        form.title = this.name + " Translations";
        form.formFunction = new FormFunction();
        form.formFunction.save = () => {
            let map:{[key:string]:string} = {};
            for (let field of translationFields) {
                map[field.name] = field.value;
            }
            console.log(map);
            this.setValue(map);
            this.getForm().getApp().closeCurrentForm();
        };
        form.formFunction.cancel = () => {
            this.getForm().getApp().closeCurrentForm();
        };
        let translations = this.value;
        let translationFields:TextField[] = [];
        for (var key in translations) {
            if (translations.hasOwnProperty(key)) {
                let text:TextField = new TextField(form);
                text.type = "text";
                text.name = key;
                text.visible = true;
                text.newRow = true;
                text.width = 2;
                text.labelVisible = true;
                text.setValue(translations[key]);
                text.required = true;
                form.fields.push(text);
                translationFields.push(text);
            }
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