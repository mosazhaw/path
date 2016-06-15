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
    directives: [path.AutoCompleteComponent, path.TextFieldComponent]
})
export class AppComponent extends path.PathAppComponent {

    private _appConfig;

    constructor() {
        super();
        this._appConfig = new GuiModel();
        this.setCurrentPage("mainmenu", null); // set start page
    }

    protected getGuiModel() {
        return this._appConfig.guiModel;
    }
    
    protected getBeans() {
        return beans;
    }
    
    protected getHandlers() {
        return handler;
    }

}