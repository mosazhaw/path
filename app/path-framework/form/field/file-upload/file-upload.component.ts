import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from "@angular/core";
import {UploaderOptions, UploadFile, UploadInput, UploadOutput} from "ngx-uploader";
import {ValueField} from "../value-field";

@Component({
    selector: "path-file-upload",
    templateUrl: "file-upload.component.html"
})
export class FileUploadComponent implements OnChanges {
    @Input("field")
    @Output("field")
    field: FileUploadField;

    options: UploaderOptions;
    formData: FormData;
    files: UploadFile[];
    uploadInput: EventEmitter<UploadInput>;
    humanizeBytes: Function;
    dragOver: boolean;

    constructor() {
        console.log("file upload constructor called");
        this.options = {concurrency: 1, maxUploads: 3};
        this.files = []; // local uploading files array
        this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
        this.humanizeBytes = this.humanizeBytes;
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("ngOnChanges");
        this.files = [];
        if (this.field) {
            this.field.setValue(null);
            console.log("this.field.value" + this.field.value);
        } else {
            console.log("field not available");
        }
        console.log(this.files);
    }

    onUploadOutput(output: UploadOutput): void {
        switch (output.type) {
            case "allAddedToQueue":
                // uncomment this if you want to auto upload files when added
                const event: UploadInput = {
                    type: "uploadAll",
                    url: this.getConfiguredUrl(),
                    method: "POST",
                    data: {foo: "bar"}
                };
                this.uploadInput.emit(event);
                break;
            case "addedToQueue":
                if (typeof output.file !== "undefined") {
                    this.files.push(output.file);
                }
                break;
            case "uploading":
                if (typeof output.file !== "undefined") {
                    // update current data in files array for uploading file
                    const index = this.files.findIndex((file) => typeof output.file !== "undefined" && file.id === output.file.id);
                    this.files[index] = output.file;
                }
                break;
            case "removed":
                // remove file from array when removed
                this.files = this.files.filter((file: UploadFile) => file !== output.file);
                break;
            case "dragOver":
                this.dragOver = true;
                break;
            case "dragOut":
            case "drop":
                this.dragOver = false;
                break;
            case "done":
                // the files are uploaded
                console.log("file upload done");
                const fileNames: string[] = [];
                for (const file of this.files) {
                    fileNames.push(file.name);
                }
                this.field.setValue(fileNames);
                break;
        }
    }

    startUpload(): void {
        const event: UploadInput = {
            type: "uploadAll",
            url: this.getConfiguredUrl(),
            method: "POST",
            data: {foo: "bar"}
        };

        this.uploadInput.emit(event);
    }

    cancelUpload(id: string): void {
        this.uploadInput.emit({type: "cancel", id: id});
    }

    removeFile(id: string): void {
        this.uploadInput.emit({type: "remove", id: id});
    }

    removeAllFiles(): void {
        this.uploadInput.emit({type: "removeAll"});
    }

    getConfiguredUrl(): string {
        return this.field.getForm().getApp().getBackendUrl() + this.field.url;
    }
}

export class FileUploadField extends ValueField<string[]> {

    private _url: string;

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    public fromJson(modelFormField) {
        super.fromJson(modelFormField);
        this.type = "fileUpload";
        if (modelFormField["url"]) {
            this.url = modelFormField["url"];
        }
    }

}
