import {PageButton} from './../../page/element/page-button';

export class BackButton extends PageButton {

    public onClick() {
        this.app.navigateBack();
    }

}