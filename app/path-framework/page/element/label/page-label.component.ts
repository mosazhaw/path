import {IPathApp} from "../../../pathinterface";
import {TranslationService} from "../../../service/translation.service";
import {PathService} from "../../../service/path.service";
import {Component, Input, Output} from "@angular/core";
import {PageElement} from "../page-element";

@Component({
    selector: 'path-page-label',
    templateUrl: 'page-label.component.html'
})
export class PageLabelComponent {
    @Input('pageLabel')
    @Output('pageLabel')
    pageLabel:PageLabel;
}

export class PageLabel extends PageElement {

    private _value:string;

    constructor(app:IPathApp, pathService:PathService, translationService:TranslationService) {
        super(app);
    }

    get value(): string {
        return this._value;
    }

    public onClick() {
        this.app.navigateBack();
    }

    public fromJson(modelElement) {
        super.fromJson(modelElement);
        this.type = "pageLabel";
        if (modelElement["value"] != null) {
            this._value = modelElement["value"];
        }
    }
}