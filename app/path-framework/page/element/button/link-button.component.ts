import {Button} from "./button.component";
import {PathService} from "../../../service/path.service";
import {IPathApp} from "../../../pathinterface";
import {Component, Input, Output} from "@angular/core";
import {TranslationService} from "../../../service/translation.service";
import {KeyUtility} from "../../../utility/key-utility";

@Component({
    selector: "path-link-button",
    templateUrl: "link-button.component.html"
})
export class LinkButtonComponent {
    @Input("button")
    @Output("button")
    button: LinkButton;
}

export class LinkButton extends Button {

    constructor(app: IPathApp, pathService: PathService, translationService: TranslationService) {
        super(app, pathService, translationService);
    }

    public onClick() {
        let url: string = null;
        if (this.url.startsWith("/")) {
            // local relative url
            url = this.getApp().getBackendUrl() + this.url + "?token=" + sessionStorage.getItem("pathAppId");
        } else {
            // remote absolute url
            url = this.url;
        }
        window.location.assign(url);
    }

    public fromJson(modelElement) {
        super.fromJson(modelElement);
        this.type = "linkButton";
        this.url = KeyUtility.translateUrl(modelElement["url"], null, false, this.parentPageElement);
    }
}
