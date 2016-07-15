import {Injectable, Inject} from "@angular/core";
import {Headers, Response, Http} from "@angular/http";

@Injectable()
export class PathService {

    constructor(@Inject(Http) private http:Http) {
    }

    serverGet(server:string, url:string, processor:(data:any) => any, errorHandler:(err:any) => any) {
        if (url != null) {
            // fetch json data from url
            this.http.get(server + url, { headers: this.appendHeaders() })
                .map((res:Response) => res.json())
                .subscribe(
                    data => {
                        processor(data);
                    },
                    err => {
                        if (errorHandler == null) {
                            alert(err.status);
                            console.error(err)
                        } else {
                            errorHandler(err);
                        }
                    },
                    () => {
                        console.log('server GET to ' + server + url + ' finished')
                    }
                );
        } else {
            // no url provided, therefore call processor without data
            processor(null);
        }

    }

    serverPost(server:string, url:string, data:any, processor:() => any) {
        if (url != null) {
            this.http.post(server + url, JSON.stringify(data), { headers: this.appendHeaders() })
                .map(
                    (value:Response,index:number) => {})
                .subscribe(
                    data => {
                        console.log(data);
                        processor();
                    },
                    err => {
                        alert(err.status);
                        console.error(err)
                    },
                    () => {
                        console.log('server POST to ' + server + url + ' finished:')
                        console.log(data);
                    }
            );
        } else {
            // no url provided, therefore call processor without data
            processor();
        }
    }

    serverPut(server:string, url:string, key:number, data:any, processor:() => any) {
        if (url != null) {
            this.http.put(server + url + "/" + key, JSON.stringify(data), { headers: this.appendHeaders() })
                .subscribe(
                    data => {
                        console.log(data);
                        processor();
                    },
                    err => {
                        alert(err.status);
                        console.error(err)
                    },
                    () => {
                        console.log('server PUT to ' + server + url + ' finished:')
                        console.log(data);
                    }
                );
        } else {
            // no url provided, therefore call processor without data
            processor();
        }
    }

    private appendHeaders():Headers {
        let headers = new Headers();
        let jwt:string = localStorage.getItem("assessmentToolId");
        if (jwt != null) {
            headers.append("Authorization", jwt);
        }
        return headers;
    }

}