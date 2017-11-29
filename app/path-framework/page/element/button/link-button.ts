import {Button} from "./button";
import {PathService} from "../../../service/path.service";
import {IPathApp} from "../../../pathinterface";

export class LinkButton extends Button {

    constructor(app:IPathApp, pathService:PathService) {
        super(app, pathService);
    }

    public onClick() {
        let url:string = null;
        if (this.url.startsWith("/")) {
            // local relative url
            url = this.getApp().getBackendUrl() + this.url + "?token=" + sessionStorage.getItem("pathAppId");
        } else {
            // remote absolute url
            url = this.url;
        }
        window.location.assign(url);
    }

}