import {Component} from "@angular/core";
import { CustomPageElement } from "../page/element/custom/custom-container.component";


@Component({
    templateUrl: "example.component.html"
})
export class ExampleComponent extends CustomPageElement {

    constructor() {
        super();
        console.log("example component");
    }

    public getText(): string {
        if (this.pageElement != null && this.pageElement.parentPageElement != null) {
            return this.pageElement.parentPageElement.name;
        }
        return <any>null;
    }
}
