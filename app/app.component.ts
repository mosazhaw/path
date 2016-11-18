/* angular/path imports */
import {Component} from '@angular/core';
import * as path from "./path-framework/path";

/* model imports */
import {GuiModel} from './gui-model/guimodel';
import * as handler from './gui-model/form/handlers'
import * as beans from './gui-model/generated/forms'
import {TranslationService} from "./path-framework/service/translation.service";

@Component({
    selector: 'path-application',
    templateUrl: 'app/path-framework/path-app.component.html',
    // providers: [{ provide: path.PathService, useClass: path.PathMockService }]
    providers: [path.PathService, TranslationService]
})
export class AppComponent extends path.PathAppComponent {

    private _appConfig = new GuiModel();

    constructor(pathService: path.PathService, translationService: TranslationService) {
        super(pathService, translationService);
    }

    protected getFrontendVersion():string {
        return "0.0.7-SNAPSHOT";
    }

    protected getStartPage():string {
        return "mainmenu";
    }

    protected getOwnUserForm():string {
        return "OwnUserForm";
    }

    protected getGuiModel() {
        if (this._appConfig != null) {
            return this._appConfig.guiModel;
        }
        return null;
    }

    public getBackendUrl() {
        if (window.location.hostname.indexOf("dev.herokuapp") != -1) {
            return location.protocol + "//assessment-backend-dev.herokuapp.com/services";
        } else if (window.location.hostname.indexOf("test.herokuapp") != -1) {
            return location.protocol + "//assessment-backend-test.herokuapp.com/services";
        }
        return "http://localhost:4567/services";
    }
    
    protected getBeans() {
        return beans;
    }
    
    protected getHandlers() {
        return handler;
    }

}