/* angular/path imports */
import {Component, Type} from "@angular/core";

/* model imports */
import * as handler from "./gui-model/form/handlers";
import * as beans from "./gui-model/generated/forms";
import {ExampleTranslationService} from "./example-translation-service";
import {ExampleComponent} from "./custom/example.component";
import { PathService } from "./service/path.service";
import { TranslationService } from "./service/translation.service";
import { PathAppComponent } from "./path-app.component";
import { CustomPageElement } from "./page/element/custom/custom-container.component";

@Component({
    selector: "path-application",
    templateUrl: "path-app.component.html",
    providers: [PathService, {provide: TranslationService, useClass: ExampleTranslationService}]
})
export class ExampleAppComponent extends PathAppComponent {

    private model:any = null;

    constructor(pathService: PathService, translationService: TranslationService) {
        super(pathService, translationService);
    }

    protected getFrontendVersion(): string {
        return "0.6.1";
    }

    protected getStartPage(): string {
        return "mainmenu";
    }

    protected getOwnUserForm(): string {
        return "UserForm";
    }

    public getGuiModel() {
        if (this.model) {
            return this.model;
        }

        this.pathService.getModel().then((data) => {
            if (this.model == null) {
                this.model = data;
                console.log("setting start page " + this.getStartPage());
                this.setCurrentPage(this.getStartPage(), <any>null);
            }
        }).catch((error) => {
            console.log("error loading path-framework ui model");
            console.log(error);
            return null;
        }).finally(() => {
        });
        return this.model;
    }

    public getTitle(): string {
        if (this.model != null) {
            return this.model.application["title"];
        }
        return <any>null;
    }

    public getBackendUrl() {
        if (window.location.hostname.indexOf("localhost") !== -1) {
            return "http://localhost:8082/services";
        }
        let url: string = window.location.href;
        url = url.replace("/#", "");
        if (url.endsWith("/")) {
            return url + "services";
        }
        return url + "/services";
    }

    protected getBeans() {
        return beans;
    }

    protected getHandlers() {
        return handler;
    }

    protected override getCustomComponentClass(componentType: string): Type<CustomPageElement> {
        if (componentType === "ExampleComponent") {
            console.log("Path Example: " + componentType);
            return <any>ExampleComponent;
        }
        return super.getCustomComponentClass(componentType);
    }

}
