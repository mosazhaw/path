import {Button} from "./button";
import {PathService} from "../../../service/path.service";
import {IPathApp} from "../../../pathinterface";

export class PageDeleteButton extends Button {

    private _url:string;

    constructor(private pathService:PathService, app:IPathApp) {
        super(app);
    }

    public onClick() {
        this.getApp().yesNo("Do you really want to delete this item?", () => {
            this.pathService.serverDelete(this.getApp().getBackendUrl(), this.url, () => {
                console.log("delete done");
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