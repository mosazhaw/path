import {Button} from "./button";
import {PathService} from "../../../service/path.service";
import {IPathApp} from "../../../pathinterface";
import {TranslationService} from "../../../service/translation.service";

export class PageDeleteButton extends Button {

    constructor(app:IPathApp, pathService:PathService, protected translationService:TranslationService) {
        super(app, pathService);
        this.name = translationService.getText("Delete");
    }

    public onClick() {
        this.getApp().yesNo(this.translationService.getText("DeleteWarningQuestion"), () => {
            this.pathService.serverDelete(this.getApp().getBackendUrl(), this.url, () => {
                this.getApp().navigateBack();
                this.getApp().refreshCurrentPage();
            });
        }, () => {} );
    }

}