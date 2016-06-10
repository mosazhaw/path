import {PageButton} from './page-button';

export class BackButton extends PageButton {

    public onClick() {
        this.app.navigateBack();
    }

}