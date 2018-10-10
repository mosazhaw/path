export class AutoCompleteFieldEntry {

    private _key: any;
    private _text: string;
    private _active: boolean;

    get key(): any {
        return this._key;
    }

    set key(value: any) {
        this._key = value;
    }

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }

    get active(): boolean {
        return this._active;
    }

    set active(value: boolean) {
        this._active = value;
    }
}
