import {Component, Input} from "@angular/core";
import {PageElement} from "../page-element";
import {PathAppComponent} from "../../../path-app.component";

@Component({
    selector: "path-breadcrumb",
    templateUrl: "breadcrumb.component.html"
})
export class BreadcrumbComponent {
    @Input("app")
    app;
}

// breadcrumb is a special element since it uses app directly
export class Breadcrumb extends PageElement {

    public _pageStack;

    constructor(app: PathAppComponent) {
        super(app);
    }

}
