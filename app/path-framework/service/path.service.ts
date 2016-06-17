import {Injectable, Inject} from "@angular/core";
import {Response, Http} from "@angular/http";
import {IList} from "../pathinterface";

@Injectable()
export class PathService {

    constructor(@Inject(Http) private http:Http) {
    }

    serverRequest<T>(url:string, element:T, processor:(element:T , data:any) => any) {
        this.http.get(url)
            .map((res:Response) => res.json())
            .subscribe(
                data => {
                    processor(element, data);
                },
                err => {
                    alert(err.status);
                    console.error(err)
                },
                () => console.log('server request to ' + url + ' finished')
            );
    }
}