import {HttpClientTestingModule} from "@angular/common/http/testing";
import {async, TestBed} from "@angular/core/testing";
import {List} from "../../../../../app/path-framework/page/element/list/list.component";
import {PathService} from "../../../../../app/path-framework/service/path.service";
import {TranslationService} from "../../../../../app/path-framework/service/translation.service";

describe("ListElement", () => {

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

    it("fromJson (defaults)", () => {
        const field = new List(null, pathService, translationService);
        field.fromJson({});
        expect(field.width).toBe(2);
        expect(field.searchButton.width).toBe(2);
    });

    it("fromJson (width)", () => {
        const field = new List(null, pathService, translationService);
        field.fromJson({
            width: 3
        });
        expect(field.width).toBe(3);
        expect(field.searchButton.width).toBe(3);
    });

    it("fromJson (width search field)", () => {
        const field = new List(null, pathService, translationService);
        field.fromJson({
            width: 3,
            searchWidth: 4,
        });
        expect(field.width).toBe(3);
        expect(field.searchButton.width).toBe(4);
    });

    it("fromJson (color)", () => {
        const field = new List(null, pathService, translationService);
        field.fromJson({
            color: "silver"
        });
        expect(field.color).toBe("silver");
        expect(field.searchButton.cssClass).toBe("tile-search");
    });

    it("fromJson (color search field)", () => {
        const field = new List(null, pathService, translationService);
        field.fromJson({
            color: "silver",
            searchColor: "lime"
        });
        expect(field.color).toBe("silver");
        expect(field.searchButton.cssClass).toBe("tile-lime");
    });

});
