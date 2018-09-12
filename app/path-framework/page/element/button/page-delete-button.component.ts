import {Button} from "./button.component";
import {PathService} from "../../../service/path.service";
import {IPathApp} from "../../../pathinterface";
import {TranslationService} from "../../../service/translation.service";
import {Output, Input, Component} from "@angular/core";
import {KeyUtility} from "../../../utility/key-utility";

@Component({
    selector: 'path-page-delete-button',
    templateUrl: 'page-delete-button.component.html'
})
export class PageDeleteButtonComponent {
    @Input('button')
    @Output('button')
    button:PageDeleteButton;
}

export class PageDeleteButton extends Button {

    constructor(app: IPathApp, pathService: PathService, translationService: TranslationService) {
        super(app, pathService, translationService);
        this.name = translationService.getText("Delete");
    }

    public onClick() {
        this.getApp().yesNo(this.translationService.getText("DeleteWarningQuestion"), () => {
            this.pathService.serverDelete(this.getApp().getBackendUrl(), this.url, () => {
                this.getApp().navigateBack();
                this.getApp().refreshCurrentPage();
            });
        }, () => {
        });
    }

    public fromJson(modelElement) {
        super.fromJson(modelElement);
        this.type = "deleteButton";
        this.url = KeyUtility.translateUrl(modelElement["url"], null, false, this.parentPageElement);
    }
}