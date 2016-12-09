import {Injectable, Inject} from "@angular/core";
import {Headers, Response, Http} from "@angular/http";
import {TranslationService} from "./translation.service";

@Injectable()
export class PathService {

    private _requestCount:number;
    private _alertStack:Alert[] = [];

    constructor(@Inject(Http) private http:Http, private translationService:TranslationService) {
        this._requestCount = 0;
    }

    public isLoading():boolean {
        return this._requestCount > 0;
    }

    private showLoading() {
        window.setTimeout(() => {
            this._requestCount++;
        }, 1);
    }

    public hideLoading() {
        window.setTimeout(() => {
            this._requestCount--;
        }, 1);
    }

    serverGet(server:string, url:string, processor:(data:any) => any, errorHandler:(err:any) => any) {
        if (url != null) {
            // fetch json data from url
            this.showLoading();
            this.http.get(server + url, { headers: this.appendHeaders() })
                .subscribe(
                    data => {
                        let jwt = data.headers.get("Authorization");
                        if (jwt != null && jwt != "") {
                            sessionStorage.setItem("pathAppId", data.headers.get("Authorization"));
                        } else {
                            sessionStorage.clear();
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
                        this.hideLoading();
                        console.log('server GET to ' + server + url + ' finished')
                    }
                );
        } else {
            // no url provided, therefore call processor without data
            processor(null);
        }

    }

    serverPost(server:string, url:string, data:any, processor:(data:any) => any, errorHandler:(err:any) => any) {
        if (url != null) {
            this.showLoading();
            this.http.post(server + url, JSON.stringify(data), { headers: this.appendHeaders() })
                .subscribe(
                    data => {
                        sessionStorage.setItem("pathAppId", data.headers.get("Authorization"));
                        console.log(data);
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
                        this.hideLoading();
                        console.log('server POST to ' + server + url + ' finished:')
                        console.log(data);
                    }
            );
        } else {
            // no url provided, therefore call processor without data
            processor(null);
        }
    }

    serverPut(server:string, url:string, data:any, processor:(data:any) => any) {
        if (url != null) {
            this.showLoading();
            this.http.put(server + url, JSON.stringify(data), { headers: this.appendHeaders() })
                .subscribe(
                    data => {
                        sessionStorage.setItem("pathAppId", data.headers.get("Authorization"));
                        console.log(data);
                        processor(data.json());
                    },
                    err => {
                        this.handleError(err);
                    },
                    () => {
                        this.hideLoading();
                        console.log('server PUT to ' + server + url + ' finished:')
                        console.log(data);
                    }
                );
        } else {
            // no url provided, therefore call processor without data
            processor(null);
        }
    }

    serverDelete(server:string, url:string, processor:(data:any) => any) {
        if (url != null) {
            this.showLoading();
            this.http.delete(server + url, { headers: this.appendHeaders() })
                .subscribe(
                    data => {
                        sessionStorage.setItem("pathAppId", data.headers.get("Authorization"));
                        console.log(data);
                        processor(data.json());
                    },
                    err => {
                        this.handleError(err);
                    },
                    () => {
                        this.hideLoading();
                        console.log('server DELETE to ' + server + url + ' finished:')
                    }
                );
        } else {
            // no url provided, therefore call processor without data
            processor(null);
        }
    }

    private handleError(err) {
        this.hideLoading();
        if (err.status == 405 && err.json()["messageKey"] != null) {
            alert(this.translationService.getText(err.json()["messageKey"], err.json()["parameters"]));
        }
        else if (err.status == 401) {
            alert("Unauthorized. Please login again.");
            location.reload();
        } else {
            // general error
            if (err.json()["error"] == null && err.json()["title"] == null) {
                this.addAlert("Unkwown Error", "Please check server and internet connection: " + err.json());
            } else {
                this.addAlert(err.json()["title"], err.json()["error"]);
            }
            console.error(err)
        }
    }

    private appendHeaders():Headers {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let jwt:string = sessionStorage.getItem("pathAppId");
        if (jwt != null) {
            headers.append("Authorization", jwt);
        }
        return headers;
    }

    public getAlerts():Alert[] {
        return this._alertStack;
    }

    public addAlert(title:string, text:string) {
        let alert = new Alert();
        alert.title = title;
        alert.text = text;
        this._alertStack.push(alert);
    }

    public clearAlert(id:number) {
        for (let i=0; i < this._alertStack.length; i++) {
            if (this._alertStack[i].id == id) {
                this._alertStack.splice(i, 1);
                break;
            }
        }
    }

}

export class Alert {

    private _title:string;
    private _text:string;
    private _id:number = Date.now();

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }

    get id(): number {
        return this._id;
    }
}