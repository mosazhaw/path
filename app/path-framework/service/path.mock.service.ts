import {Injectable, Inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PathService} from "./path.service";
import {TranslationService} from "./translation.service";

@Injectable()
export class PathMockService extends PathService {

    constructor(@Inject(HttpClient) http: HttpClient, translationService: TranslationService) {
        super(http, translationService);
    }

    serverRequest(server: string, url: string, processor: (data: any) => any) {
        console.log("mock service called");
    }
}
