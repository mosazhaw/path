/* angular/path imports */
import {Component} from '@angular/core';
import * as path from "./path-framework/path";

/* model imports */
import {GuiModel} from './gui-model/guimodel';
import * as handler from './gui-model/form/handlers'
import * as beans from './gui-model/generated/forms'

@Component({
    selector: 'path-application',
    templateUrl: 'app/path-framework/path-app.component.html',
    directives: [path.FormComponent, path.ChartComponent],
    // providers: [{ provide: path.PathService, useClass: path.PathMockService }]
    providers: [path.PathService]
})
export class AppComponent extends path.PathAppComponent {

    private _appConfig;

    constructor(pathService: path.PathService) {
        super(pathService);
        this._appConfig = new GuiModel();
        this.setCurrentPage("mainmenu", null); // set start page
    }

    protected getGuiModel() {
        return this._appConfig.guiModel;
    }

    public getBackendUrl() {
        if (window.location.hostname.indexOf("dev.herokuapp") != -1) {
            return "https://assessment-backend-dev.herokuapp.com/services";
        } else if (window.location.hostname.indexOf("test.herokuapp") != -1) {
            return "https://assessment-backend-test.herokuapp.com/services";
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