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

describe("FileUploadComponent", () => {
    let pathService: PathService;
    let translationService: TranslationService;
    let httpMock: HttpTestingController;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            declarations: [FileUploadComponent, FormFieldLabelComponent],
            providers: [PathService, TranslationService]
        }).compileComponents();
        pathService = TestBed.get(PathService);
        translationService = TestBed.get(TranslationService);
        httpMock = TestBed.get(HttpTestingController);
    }));

    afterEach(() => {
        httpMock.verify();
    });

    it("uploadFile", () => {
        const fixture = TestBed.createComponent(FileUploadComponent);
        const fileUploadComponent = fixture.componentInstance;

        const testApp = new TestAppComponent(pathService, translationService);
        const form = new Form(pathService, testApp);
        fileUploadComponent.field = new FileUploadField(form, translationService);
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

});

describe("FileUploadField", () => {

    let translationService: TranslationService;
    let pathService: PathService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [PathService, TranslationService]
        }).compileComponents();
        translationService = TestBed.get(TranslationService);
        pathService = TestBed.get(PathService);
    }));

    it("getReadableFileSizeString", () => {
        const field = new FileUploadField(null, null);
        expect(field.getReadableFileSizeString(2000)).toBe("2.0 kB");
    });

    it("fromJson (defaults)", () => {
        const field = new FileUploadField(null, translationService);
        field.fromJson({});
        expect(field.fileLimit).toBe(0);
        expect(field.singleFileSizeLimit).toBe(0);
        expect(field.allFilesSizeLimit).toBe(0);
        expect(field.multiple).toBe(true);
    });

    it("fromJson (values)", () => {
        const field = new FileUploadField(null, translationService);
        field.fromJson({
            url: "/test",
            fileLimit: 4,
            singleFileSizeLimit: 10000,
            allFilesSizeLimit: 100000,
            multiple: false
        });
        expect(field.url).toBe("/test");
        expect(field.fileLimit).toBe(4);
        expect(field.singleFileSizeLimit).toBe(10000);
        expect(field.allFilesSizeLimit).toBe(100000);
        expect(field.multiple).toBeFalsy();
    });

    it("checkFileLimit", () => {
        let app = jasmine.createSpyObj('app', ['yesNo']);
        app.yesNo.and.returnValue(() => true);
        let form = new Form(pathService, app);

        const field = new FileUploadField(form, translationService);
        field.fromJson({
            fileLimit: 4
        });
        expect(field.checkFileLimit(4)).toBeTruthy();
        expect(app.yesNo).toHaveBeenCalledTimes(0);

        field.fromJson({
            fileLimit: 3
        });
        expect(field.checkFileLimit(4)).toBeFalsy();
        expect(app.yesNo).toHaveBeenCalledTimes(1);
    });

}
