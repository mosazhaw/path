import {Button} from "./button";
import {PathService} from "../../../service/path.service";
import {IPathApp} from "../../../pathinterface";

export class DownloadButton extends Button {

    constructor(app:IPathApp, pathService:PathService) {
        super(app, pathService);
    }

    public onClick() {
        window.location.assign(this.getApp().getBackendUrl() + this.url + "?token=" + sessionStorage.getItem("pathAppId"));
    }

}