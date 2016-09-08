import {Button} from "./button";
import {PathService} from "../../../service/path.service";
import {IPathApp} from "../../../pathinterface";
import {TranslationService} from "../../../service/translation.service";

export class PageDeleteButton extends Button {

    private _url:string;

    constructor(private pathService:PathService, app:IPathApp, protected translationService:TranslationService) {
        super(app);
        this.name = translationService.getText("Delete");
    }

    public onClick() {
        this.getApp().yesNo(this.translationService.getText("Do you really want to delete this item?"), () => {
            this.pathService.serverDelete(this.getApp().getBackendUrl(), this.url, () => {
                this.getApp().navigateBack();
                this.getApp().refreshCurrentPage();
            });
        }, () => {} );
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }
}