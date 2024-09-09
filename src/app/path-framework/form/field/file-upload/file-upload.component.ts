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
    field!: FileUploadField;

    @ViewChild("fileInput", { static: true })
    fileInputReference!: ElementRef;
    dragActive = false;

    constructor(private http: HttpClient) {
    }

    onDropFile(event: DragEvent) {
        this.dragActive = false;
        event.preventDefault();
        if (event.dataTransfer) {
            this.uploadFile(event.dataTransfer.files);
        }
    }

    onDragOverFile(event: { stopPropagation: () => void; preventDefault: () => void; }) {
        this.dragActive = true;
        event.stopPropagation();
        event.preventDefault();
    }

    onDragLeave() {
        this.dragActive = false;
    }

    selectFile(event: any) {
        this.uploadFile(event.target.files);
    }

    uploadFile(files: FileList) {
        if (files.length === 0) {
            console.log("No file selected!");
            return;

        }
        // check if file limit is exceeded
        if (!this.field.checkFileLimit(files.length)) {
            this.resetFileUploadElement();
            return;
        }
        // check file sizes
        if (!this.field.checkFileSize(files)) {
            this.resetFileUploadElement();
            return;
        }
        // upload submitted files
        Array.from(files).forEach((file) => {
            this.doUpload(this.field.getForm().getApp().getBackendUrl() + this.field.url, file)
                .subscribe(
                    event => {
                        if (event.type === HttpEventType.UploadProgress) {
                            let total = 1 || event.total;
                            const percentDone: number = Math.round(100 * event.loaded / total);
                            let uploadFile = this.field.findCurrentUpload(file.name);
                            if (uploadFile == null) {
                                uploadFile = this.addNewPathFile(file);
                            }
                            uploadFile.uploadProgress = percentDone;

                        } else if (event instanceof HttpResponse) {
                            let uploadFile = this.field.findCurrentUpload(file.name);
                            if (uploadFile == null) {
                                uploadFile = this.addNewPathFile(file);
                            }
                            const key: PathFileKey = new PathFileKey(event.body["key"]["key"], event.body["key"]["name"]);
                            uploadFile.key = key;
                            uploadFile.uploadFinished = true;
                            uploadFile.uploadSuccessful = true;
                            this.field.updateRequiredStatus();
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
                        this.resetFileUploadElement();
                    }, () => {
                        this.resetFileUploadElement();
                    }
                );
        });
    }

    private addNewPathFile(file: File): PathFile {
        const uploadFile = new PathFile();
        uploadFile.name = file.name;
        uploadFile.size = file.size;
        uploadFile.sizeString = this.field.getReadableFileSizeString(file.size);
        uploadFile.active = true;
        this.field.value.push(uploadFile);
        this.field.sortValues();
        return uploadFile;
    }

    private resetFileUploadElement(): void {
        const count = this.field.value.reduce((acc, cur) => !cur.uploadFinished ? ++acc : acc, 0);
        if (count === 0) {
            this.fileInputReference.nativeElement.value = "";
        }
    }

    private doUpload(url: string, file: File): Observable<HttpEvent<any>> {

        const formData = new FormData();
        formData.append("upload", file);

        const params = new HttpParams();

        const options = {
            params: params,
            reportProgress: true,
        };

        const req = new HttpRequest("POST", url, formData, options);
        return <any>this.http.request(req); // <any> fixes TS2719
    }

}

export class FileUploadField extends ValueField<PathFile[]> {

    private _url!: string;
    private _multiple = true;
    private _acceptedFileTypes: string[] = [];
    private _fileUploadRequired!: boolean;
    private _fileLimit = 0;
    private _singleFileSizeLimit = 0;
    private _allFilesSizeLimit = 0;

    constructor(form: IForm, translationService: TranslationService) {
        super(form, translationService);
        this.value = [];
        this._acceptedFileTypes.push("*.*");
        this.updateRequiredStatus();
    }

    override setValue(value: PathFile[]): void {
        const files: PathFile[] = [];
        for (const item of value) {
            const file = Object.assign(new PathFile(), item);
            file.key = Object.assign(new PathFileKey(<any>null, null), item.key);
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

    get fileLimit(): number {
        return this._fileLimit;
    }

    get singleFileSizeLimit(): number {
        return this._singleFileSizeLimit;
    }

    get allFilesSizeLimit(): number {
        return this._allFilesSizeLimit;
    }

    public remove(index: number, key: PathFileKey): void {
        if (key) {
            const file: PathFile = this.find(key);
            if (file) {
                file.active = false;
            }
            this.updateRequiredStatus();
        } else {
            this.value.splice(index, 1);
        }
    }

    public find(key: PathFileKey): PathFile {
        for (const file of this.value) {
            if (file.key.equals(key)) {
                return file;
            }
        }
        return <any>null;
    }

    public findCurrentUpload(name: string): PathFile {
        for (const file of this.value) {
            if (file.name === name && !file.uploadFinished) {
                return file;
            }
        }
        return <any>null;
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

    public checkFileLimit(newFilesLength: number): boolean {
        let activeFileCount = 0;
        this.value.forEach((file) => {
            if (file.active) {
                activeFileCount++;
            }
        });
        if (this.fileLimit > 0 && ((activeFileCount + newFilesLength) > this.fileLimit)) {
            const message = this.translationService.getText("FileLimitMessage", String(this.fileLimit));
            this.getForm().getApp().yesNo(message, () => {}, () => {});
            return false;
        }
        return true;
    }

    public checkFileSize(files: FileList): boolean {
        if (this._singleFileSizeLimit || this._allFilesSizeLimit) {
            // check single file limit
            let sizeSum = 0;
            const fileArray = Array.from(files);
            for (const file of fileArray) {
                sizeSum += file.size;
                if (this._singleFileSizeLimit > 0 && file.size > this._singleFileSizeLimit) {
                    const message = this.translationService.getText("FileSingleSizeMessage",
                        this.getReadableFileSizeString(this._singleFileSizeLimit));
                    this.getForm().getApp().yesNo(message, () => {}, () => {});
                    return false;
                }
            }
            // check sum limit
            if (this._allFilesSizeLimit > 0) {
                this.value.forEach((file) => {
                    if (file.active) {
                        sizeSum += file.size;
                    }
                });
                if (this._allFilesSizeLimit > 0 && sizeSum > this._allFilesSizeLimit) {
                    const message = this.translationService.getText("FileAllSizeMessage",
                        this.getReadableFileSizeString(this._allFilesSizeLimit));
                    this.getForm().getApp().yesNo(message, () => {}, () => {});
                    return false;
                }
            }
        }
        return true;
    }

    public getReadableFileSizeString(byteSize: number): string {
        let i = -1;
        const byteUnits = [" kB", " MB", " GB", " TB", " PB", " EB", " ZB", " YB"];
        do {
            byteSize = byteSize / 1024;
            i++;
        } while (byteSize > 1024);

        return Math.max(byteSize, 0.1).toFixed(1) + byteUnits[i];
    }

    public download(key: PathFileKey) {
        window.location.assign(this.getForm().getApp().getBackendUrl() + this.url + "/" + key.key);
    }

    public override fromJson(modelFormField: any) {
        super.fromJson(modelFormField);
        this.type = "fileUpload";
        if (modelFormField["url"]) {
            this.url = modelFormField["url"];
        }
        if (modelFormField["multiple"] != null) {
            this.multiple = modelFormField["multiple"];
        }
        if (modelFormField["acceptedFileTypes"]) {
            this.acceptedFileTypes = modelFormField["acceptedFileTypes"];
        }
        if (modelFormField["fileLimit"]) {
            this._fileLimit = modelFormField["fileLimit"];
        }
        if (modelFormField["singleFileSizeLimit"]) {
            this._singleFileSizeLimit = modelFormField["singleFileSizeLimit"];
        }
        if (modelFormField["allFilesSizeLimit"]) {
            this._allFilesSizeLimit = modelFormField["allFilesSizeLimit"];
        }
        this.updateRequiredStatus();
    }

}

export class PathFile {
    active!: boolean; // file deleted: active === false
    uploadFinished = false;
    uploadSuccessful = false;
    uploadProgress = 0;
    name!: string;
    sizeString!: string;
    size = 0;
    key!: PathFileKey;
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
