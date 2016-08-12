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
                .subscribe(
                    data => {
                        let jwt = data.headers.get("Authorization");
                        if (jwt != null && jwt != "") {
                            localStorage.setItem("pathAppId", data.headers.get("Authorization"));
                        } else {
                            localStorage.clear();
                        }
                        processor(data.json());
                    },
                    err => {
                        if (errorHandler == null) {
                            this.handleError(err);
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
                .subscribe(
                    data => {
                        localStorage.setItem("pathAppId", data.headers.get("Authorization"));
                        console.log(data);
                        processor();
                    },
                    err => {
                        this.handleError(err);
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

    serverPut(server:string, url:string, data:any, processor:() => any) {
        if (url != null) {
            this.http.put(server + url, JSON.stringify(data), { headers: this.appendHeaders() })
                .subscribe(
                    data => {
                        localStorage.setItem("pathAppId", data.headers.get("Authorization"));
                        console.log(data);
                        processor();
                    },
                    err => {
                        this.handleError(err);
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

    private handleError(err) {
        if (err.status == 401) {
            alert("Unauthorized. Please login again.");
            location.reload();
        } else {
            alert(err.status);
            console.error(err)
        }
    }

    private appendHeaders():Headers {
        let headers = new Headers();
        let jwt:string = localStorage.getItem("pathAppId");
        if (jwt != null) {
            headers.append("Authorization", jwt);
        }
        return headers;
    }

}