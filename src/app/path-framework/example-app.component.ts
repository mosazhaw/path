/* angular/path imports */
import {Component, Input, Type} from "@angular/core";

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

    @Input() backendUrl:string = "";
    @Input() modelPath:string = "";
    @Input() translationsPath:string = "";    
    @Input() frontendVersion:string = "";
    @Input() startPage:string = "";
    @Input() currentUserForm:string = "";    
    private model:any = null;

    constructor(pathService: PathService, translationService: TranslationService) {
        super(pathService, translationService);
    }

    protected getFrontendVersion(): string {
        return this.frontendVersion;
    }

    protected getStartPage(): string {
        return this.startPage;
    }

    protected getOwnUserForm(): string {
        return this.currentUserForm;
    }

    public getGuiModel() {
        if (this.model) {
            return this.model;
        }

        this.pathService.getConfiguration(this.modelPath, this.translationsPath).then((data) => {
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

    public getBackendUrl(): string {
        if (!this.backendUrl) {
            console.error("Path-Framework: backendUrl parameter not set in html");
        }
        return this.backendUrl;
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
