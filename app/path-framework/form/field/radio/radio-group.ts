import * as path from './../../../path';

export class RadioGroup extends path.FormField {
    private _radios:path.Radio[] = [];

    get radios():path.Radio[] {
        return this._radios;
    }

    set radios(value:path.Radio[]) {
        this._radios = value;
    }
}
