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
    directives: [path.AutoCompleteComponent, path.TextFieldComponent, path.RadioGroupComponent, path.CheckboxGroupComponent, path.FormFieldLabelComponent],
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

    protected getBackendUrl() {
        return "http://private-7286d4-deloitteassessmenttool.apiary-mock.com";
        // return "http://localhost:4567/services";
    }
    
    protected getBeans() {
        return beans;
    }
    
    protected getHandlers() {
        return handler;
    }

}