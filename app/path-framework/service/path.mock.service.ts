import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import {PathService} from "./path.service";
import {TranslationService} from "./translation.service";

@Injectable()
export class PathMockService extends PathService {

    constructor(@Inject(Http) http:Http, translationService:TranslationService) {
        super(http, translationService);
    }

    serverRequest(server:string, url:string, processor:(data:any) => any) {
        console.log("mock service called");
    }
}