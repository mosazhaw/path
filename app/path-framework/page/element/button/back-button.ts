import {Button} from './button';

export class BackButton extends Button {

    public onClick() {
        this.app.navigateBack();
    }

}