import {Component, Input, Output} from "@angular/core";
import {ValueField} from "../value-field";
import {HttpClient, HttpEvent, HttpEventType, HttpParams, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {IForm} from "../../../pathinterface";
import {TranslationService} from "../../../service/translation.service";

@Component({
    selector: "path-file-upload",
    templateUrl: "file-upload.component.html"
})
export class FileUploadComponent {
    @Input("field")
    @Output("field")
    field: FileUploadField;

    constructor(private http: HttpClient) {
    }

    // At the drag drop area
    // (drop)="onDropFile($event)"
    onDropFile(event: DragEvent) {
        event.preventDefault();
        this.uploadFile(event.dataTransfer.files);
    }

    // At the drag drop area
    // (dragover)="onDragOverFile($event)"
    onDragOverFile(event) {
        event.stopPropagation();
        event.preventDefault();
    }

    // At the file input element
    // (change)="selectFile($event)"
    selectFile(event) {
        this.uploadFile(event.target.files);
    }

    uploadFile(files: FileList) {
        if (files.length === 0) {
            console.log("No file selected!");
            return;

        }
        const file: File = files[0];

        this.doUpload(this.field.getForm().getApp().getBackendUrl() + this.field.url, file)
            .subscribe(
                event => {
                    if (event.type === HttpEventType.UploadProgress) {
                        const percentDone = Math.round(100 * event.loaded / event.total);
                        console.log(`File is ${percentDone}% loaded.`);

                    } else if (event instanceof HttpResponse) {
                        console.log("File is completely loaded!");
                        const key: PathFileKey = new PathFileKey(event.body["key"]["key"], event.body["key"]["name"]); // TODO handle errors
                        const newFile = new PathFile();
                        newFile.key = key;
                        newFile.name = file.name;
                        newFile.sizeString = this.getReadableFileSizeString(file.size);
                        newFile.active = true;
                        this.field.value.push(newFile);
                    }
                },
                (err) => {
                    console.log("Upload Error:", err);
                }, () => {
                    console.log("Upload done");
                }
            );
    }

    // file from event.target.files[0]
    private doUpload(url: string, file: File): Observable<HttpEvent<any>> {

        const formData = new FormData();
        formData.append("upload", file);

        const params = new HttpParams();

        const options = {
            params: params,
            reportProgress: true,
        };

        const req = new HttpRequest("POST", url, formData, options);
        return this.http.request(req);
    }

    private getReadableFileSizeString(byteSize: number): string {
        let i = -1;
        const byteUnits = [" kB", " MB", " GB", " TB", " PB", " EB", " ZB", " YB"];
        do {
            byteSize = byteSize / 1024;
            i++;
        } while (byteSize > 1024);

        return Math.max(byteSize, 0.1).toFixed(1) + byteUnits[i];
    }

}

export class FileUploadField extends ValueField<PathFile[]> {

    private _url: string;
    private _multiple: boolean;

    constructor(form: IForm, translationService: TranslationService) {
        super(form, translationService);
        this.value = [];
    }

    setValue(value: PathFile[]): void {
        const files: PathFile[] = [];
        for (const item of value) {
            const file = Object.assign(new PathFile(), item);
            file.key = Object.assign(new PathFileKey(null, null), item.key);
            files.push(file);
        }
        super.setValue(files);
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    get multiple(): boolean {
        return this._multiple;
    }

    set multiple(value: boolean) {
        this._multiple = value;
    }

    public remove(key: PathFileKey): void {
        const file: PathFile = this.find(key);
        if (file) {
            file.active = false;
        }
    }

    public find(key: PathFileKey): PathFile {
        for (const file of this.value) {
            if (file.key.equals(key)) {
                return file;
            }
        }
        return null;
    }

    public download(key: PathFileKey) {
        window.location.assign(this.getForm().getApp().getBackendUrl() + this.url + "/" + key.key);
    }

    public fromJson(modelFormField) {
        super.fromJson(modelFormField);
        this.type = "fileUpload";
        if (modelFormField["url"]) {
            this.url = modelFormField["url"];
        }
        if (modelFormField["multiple"]) {
            this.multiple = modelFormField["multiple"];
        }
    }

}

export class PathFile {
    active: boolean;
    name: string;
    sizeString: string;
    key: PathFileKey;
}

// TODO unify with list key
// tslint:disable:max-classes-per-file
export class PathFileKey {
    key: string;
    name: any;

    constructor(key: string, name: any) {
        this.key = key;
        this.name = name;
    }

    public equals(otherKey: PathFileKey): boolean {
        if (otherKey != null &&
            otherKey.name &&
            otherKey.key &&
            this.name &&
            this.key &&
            otherKey.name === this.name &&
            otherKey.key === this.key) {
            return true;
        }
        return false;
    }

}
