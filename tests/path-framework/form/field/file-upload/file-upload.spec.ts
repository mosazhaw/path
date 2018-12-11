import {HttpClientTestingModule} from "@angular/common/http/testing";
import {async, TestBed} from "@angular/core/testing";
import {FileUploadComponent, FileUploadField} from "../../../../../app/path-framework/form/field/file-upload/file-upload.component";
import {FormFieldLabelComponent} from "../../../../../app/path-framework/form/field/form-field-label.component";
import {Form} from "../../../../../app/path-framework/form/form.component";
import {PathMockService} from "../../../../../app/path-framework/service/path.mock.service";
import {PathService} from "../../../../../app/path-framework/service/path.service";
import {TranslationService} from "../../../../../app/path-framework/service/translation.service";
import {KeyUtility} from "../../../../../app/path-framework/utility/key-utility";
import {TestAppComponent} from "../../../TestAppComponent";

describe("FileUpload", () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            declarations: [FileUploadComponent, FormFieldLabelComponent],
            providers: [{ provide: PathService, useClass: {} }, { provide: TranslationService, useClass: {} }]
        }).compileComponents();
    }));

    it("create component", () => {
        const fixture = TestBed.createComponent(FileUploadComponent);
        /*const testApp = TestBed.createComponent(TestAppComponent);
        const fileUploadComponent = fixture.componentInstance;
        const form = new Form(null, testApp.componentInstance);
        fileUploadComponent.field = new FileUploadField(null, null);
        const modifiedDate = new Date();
        const file = new File(<any>[3555], "test-file.jpg", {lastModified : modifiedDate.getMilliseconds(), type: "image/jpeg"});
        fileUploadComponent.uploadFile(<any>[file]);*/
    });

    it("getReadableFileSizeString", () => {
        const field = new FileUploadField(null, null);
        expect(field.getReadableFileSizeString(2000)).toBe("2.0 kB");
    });

});
