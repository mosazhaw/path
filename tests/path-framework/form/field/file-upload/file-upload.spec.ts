import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {async, TestBed} from "@angular/core/testing";
import {FileUploadComponent,
    FileUploadField,
    PathFileKey} from "../../../../../app/path-framework/form/field/file-upload/file-upload.component";
import {FormFieldLabelComponent} from "../../../../../app/path-framework/form/field/form-field-label.component";
import {Form} from "../../../../../app/path-framework/form/form.component";
import {PathService} from "../../../../../app/path-framework/service/path.service";
import {TranslationService} from "../../../../../app/path-framework/service/translation.service";
import {TestAppComponent} from "../../../TestAppComponent";

describe("FileUpload", () => {
    let path: PathService;
    let translate: TranslationService;
    let httpMock: HttpTestingController;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            declarations: [FileUploadComponent, FormFieldLabelComponent],
            providers: [PathService, TranslationService]
        }).compileComponents();
        path = TestBed.get(PathService);
        translate = TestBed.get(TranslationService);
        httpMock = TestBed.get(HttpTestingController);
    }));

    afterEach(() => {
        httpMock.verify();
    });

    it("uploadFile", () => {
        const fixture = TestBed.createComponent(FileUploadComponent);
        const fileUploadComponent = fixture.componentInstance;

        const testApp = new TestAppComponent(path, translate);
        const form = new Form(path, testApp);
        fileUploadComponent.field = new FileUploadField(form, translate);
        fileUploadComponent.field.url = "fileUpload";

        const modifiedDate = new Date();
        const file = new File(<any>[3555], "test-file.jpg", {lastModified : modifiedDate.getMilliseconds(), type: "image/jpeg"});
        fileUploadComponent.uploadFile(<any>[file]);

        const req = httpMock.expectOne(fileUploadComponent.field.url);
        expect(req.request.method).toBe("POST");
        const key = new PathFileKey("1", "fileKey");
        req.flush({key});

        expect(fileUploadComponent.field.value.length).toBe(1);
        expect(fileUploadComponent.field.value[0].key.key === "1").toBe(true);
        expect(fileUploadComponent.field.value[0].key.name === "fileKey").toBe(true);
        expect(fileUploadComponent.field.value[0].name).toBe("test-file.jpg");
    });

    it("getReadableFileSizeString", () => {
        const field = new FileUploadField(null, null);
        expect(field.getReadableFileSizeString(2000)).toBe("2.0 kB");
    });

});
