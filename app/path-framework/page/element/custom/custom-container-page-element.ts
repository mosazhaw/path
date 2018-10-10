import {Type} from "@angular/core";
import {PageElement} from "../page-element";
import {CustomPageElement} from "./custom-container.component";

export class CustomContainerPageElement extends PageElement {

    private _typeClass: Type<CustomPageElement>;

    get typeClass(): Type<CustomPageElement> {
        return this._typeClass;
    }

    set typeClass(value: Type<CustomPageElement>) {
        this._typeClass = value;
    }
}
