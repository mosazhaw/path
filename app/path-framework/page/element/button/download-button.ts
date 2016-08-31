import {Button} from "./button";
import {PathService} from "../../../service/path.service";
import {IPathApp} from "../../../pathinterface";

export class DownloadButton extends Button {

    private _url:string;

    constructor(private pathService:PathService, app:IPathApp) {
        super(app);
    }

    public onClick() {
        window.location.assign(this.getApp().getBackendUrl() + this.url + "?token=" + localStorage.getItem("pathAppId"));
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }
}