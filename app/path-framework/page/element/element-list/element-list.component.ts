import {IPathApp} from "../../../pathinterface";
import {TranslationService} from "../../../service/translation.service";
import {PathService} from "../../../service/path.service";
import {Component, Input, Output} from "@angular/core";
import {PageElement} from "../page-element";

@Component({
    selector: 'path-element-list',
    templateUrl: 'element-list.component.html'
})
export class ElementListComponent {
    @Input('elementList')
    @Output('elementList')
    elementList:ElementList;
}

export class ElementList extends PageElement {

    constructor(app:IPathApp, pathService:PathService, translationService:TranslationService) {
        super(app);
    }

    public fromJson(modelElement) {
        super.fromJson(modelElement);
        this.type = "elementList";
    }
}