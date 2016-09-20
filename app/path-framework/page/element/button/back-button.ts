import {Button} from './button';
import {IPathApp} from "../../../pathinterface";
import {TranslationService} from "../../../service/translation.service";
import {PathService} from "../../../service/path.service";

export class BackButton extends Button {

    constructor(app:IPathApp, pathService:PathService, translationService:TranslationService) {
        super(app, pathService);
        this.name = translationService.getText("Back");
    }

    public onClick() {
        this.app.navigateBack();
    }

}