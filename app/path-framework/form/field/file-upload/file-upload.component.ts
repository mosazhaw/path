import {Component, ElementRef, Input, Output, ViewChild} from "@angular/core";
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

    @ViewChild("fileInput")
    fileInputReference: ElementRef;

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
        Array.from(files).forEach((file) => {
            this.doUpload(this.field.getForm().getApp().getBackendUrl() + this.field.url, file)
                .subscribe(
                    event => {
                        if (event.type === HttpEventType.UploadProgress) {
                            const percentDone: number = Math.round(100 * event.loaded / event.total);
                            console.log(`File is ${percentDone}% loaded.`);
                            let uploadFile = this.field.findCurrentUpload(file.name);
                            if (uploadFile == null) {
                                uploadFile = new PathFile();
                                uploadFile.name = file.name;
                                uploadFile.sizeString = this.getReadableFileSizeString(file.size);
                                uploadFile.active = true;
                                this.field.value.push(uploadFile);
                                this.field.sortValues();
                            }
                            uploadFile.uploadProgress = percentDone;

                        } else if (event instanceof HttpResponse) {
                            console.log("File is completely loaded!");
                            const uploadFile = this.field.findCurrentUpload(file.name);
                            if (uploadFile) {
                                const key: PathFileKey = new PathFileKey(event.body["key"]["key"], event.body["key"]["name"]);
                                uploadFile.key = key;
                                uploadFile.uploadFinished = true;
                                uploadFile.uploadSuccessful = true;
                                this.field.updateRequiredStatus();
                            } else {
                                console.log("error: file should exist (" + file.name + ")");
                            }
                        }
                    },
                    (err) => {
                        console.log("Upload Error:", err);
                        const uploadFile = this.field.findCurrentUpload(file.name);
                        if (uploadFile) {
                            uploadFile.sizeString = "Error";
                            uploadFile.uploadFinished = true;
                        } else {
                            console.log("error: file should exist (" + file.name + ")");
                        }
                    }, () => {
                        console.log("Upload done");
                        const count = this.field.value.reduce((acc, cur) => !cur.uploadFinished ? ++acc : acc, 0);
                        if (count === 0) {
                            this.fileInputReference.nativeElement.value = "";
                        }
                    }
                );
        });
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
    private _acceptedFileTypes: string[] = [];
    private _fileUploadRequired: boolean;

    constructor(form: IForm, translationService: TranslationService) {
        super(form, translationService);
        this.value = [];
        this._acceptedFileTypes.push("*.*");
        this.updateRequiredStatus();
    }

    setValue(value: PathFile[]): void {
        const files: PathFile[] = [];
        for (const item of value) {
            const file = Object.assign(new PathFile(), item);
            file.key = Object.assign(new PathFileKey(null, null), item.key);
            files.push(file);
        }
        this.sortValues();
        super.setValue(files);
        this.updateRequiredStatus();
    }

    public sortValues() {
        this.value.sort((a, b) => a.name.localeCompare(b.name));
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

    get acceptedFileTypes(): string[] {
        return this._acceptedFileTypes;
    }

    set acceptedFileTypes(value: string[]) {
        this._acceptedFileTypes = value;
    }

    get fileUploadRequired(): boolean {
        return this._fileUploadRequired;
    }

    public remove(key: PathFileKey): void {
        const file: PathFile = this.find(key);
        if (file) {
            file.active = false;
        }
        this.updateRequiredStatus();
    }

    public find(key: PathFileKey): PathFile {
        for (const file of this.value) {
            if (file.key.equals(key)) {
                return file;
            }
        }
        return null;
    }

    public findCurrentUpload(name: string): PathFile {
        for (const file of this.value) {
            if (file.name === name && !file.uploadFinished) {
                return file;
            }
        }
        return null;
    }

    public updateRequiredStatus() {
        let uploadInProgressCount = 0;
        let uploadSuccessfulCount = 0;
        this.value.forEach((file) => {
            if (file.active && !file.uploadFinished) {
                uploadInProgressCount++;
            }
            if (file.active && file.uploadSuccessful) {
                uploadSuccessfulCount++;
            }
        });
        let newStatus = false;
        if (uploadInProgressCount > 0) {
            // always required if upload in progress
            newStatus = true;
        } else if (this.required && uploadSuccessfulCount <= 0) {
            newStatus = true;
        }
        this._fileUploadRequired = newStatus;
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
        if (modelFormField["acceptedFileTypes"]) {
            this.acceptedFileTypes = modelFormField["acceptedFileTypes"];
        }
        this.updateRequiredStatus();
    }

}

export class PathFile {
    active: boolean; // file deleted: active === false
    uploadFinished = false;
    uploadSuccessful = false;
    uploadProgress = 0;
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
