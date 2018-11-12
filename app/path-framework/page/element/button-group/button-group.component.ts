import {Component, Input, Output} from "@angular/core";
import {IPathApp} from "../../../pathinterface";
import {Button} from "../button/button.component";
import {PageElement} from "../page-element";

@Component({
    selector: "path-button-group",
    templateUrl: "button-group.component.html"
})
export class ButtonGroupComponent {
    @Input("buttonGroup")
    @Output("buttonGroup")
    buttonGroup: ButtonGroup;
}

export class ButtonGroup extends PageElement {

    private _buttons: Button[] = [];

    constructor(app: IPathApp) {
        super(app);
    }

    get buttons(): Button[] {
        return this._buttons;
    }

    public addButton(button: Button): void {
        this._buttons.push(button);
    }

    public updateButtonBorders(): void {
        if (this._buttons.length === 1) {
            // single button has no special border
            this._buttons[0].cssGroupBorder = "";
        } else {
            for (const button of this._buttons) {
                button.cssGroupBorder = "tile-grouped-middle";
            }
            if (this._buttons.length >= 1) {
                // set first and last button border
                this._buttons[0].cssGroupBorder = "tile-grouped-left";
                this._buttons[this._buttons.length - 1].cssGroupBorder = "tile-grouped-right";
            }
        }
    }

    public fromJson(modelElement) {
        super.fromJson(modelElement);
        this.type = "buttonGroup";
    }

}
