import {Button} from './button';
import {IPathApp} from "../../../pathinterface";
import {TranslationService} from "../../../service/translation.service";

export class BackButton extends Button {

    constructor(app:IPathApp, translationService:TranslationService) {
        super(app);
        this.name = translationService.getText("Back");
    }

    public onClick() {
        this.app.navigateBack();
    }

}