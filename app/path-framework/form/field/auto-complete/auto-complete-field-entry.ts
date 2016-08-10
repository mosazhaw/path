export class AutoCompleteFieldEntry {

    private _key:any;
    private _text:string;

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
}
