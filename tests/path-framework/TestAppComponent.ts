import {Component} from "@angular/core";
import {PathAppComponent} from "../../app/path-framework/path-app.component";
import {PathMockService} from "../../app/path-framework/service/path.mock.service";
import {PathService} from "../../app/path-framework/service/path.service";
import {TranslationService} from "../../app/path-framework/service/translation.service";

@Component({
    selector: "path-application",
    template: "<span></span>",
    providers: [{ provide: PathService, useClass: PathMockService }, TranslationService]
})
export class TestAppComponent extends PathAppComponent {

    getBackendUrl(): string {
        return "";
    }

    protected getBeans() {
    }

    protected getFrontendVersion(): string {
        return "";
    }

    protected getGuiModel() {
    }

    protected getHandlers() {
    }

    protected getOwnUserForm(): string {
        return "";
    }

    protected getStartPage(): string {
        return "";
    }

}
