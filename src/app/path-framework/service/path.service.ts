import {Injectable, Inject} from "@angular/core";
import {TranslationService} from "./translation.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class PathService {

    private _requestCount: number;
    private _alertStack: Alert[] = [];

    constructor(@Inject(HttpClient) private http: HttpClient, private translationService: TranslationService) {
        this._requestCount = 0;
    }

    public async getModel(): Promise<any> {
        let model:any = await this.http.get("assets/model.json").toPromise();
        console.log("path-framework ui model loaded:",model.application.pageList.length,"page(s),",model.application.formList.length,"form(s)");
        return model;
    }

    public isLoading(): boolean {
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

    serverGet(server: string, url: string, processor: (data: any) => any, errorHandler: (err: any) => any) {
        if (url != null) {
            // fetch json data from url
            this.showLoading();
            this.http.get(server + url, {observe: "response", headers: this.appendHeaders()})
                .subscribe(
                    data => {
                        const jwt = data.headers.get("Authorization");
                        if (jwt != null && jwt !== "") {
                            sessionStorage.setItem("pathAppId", <any>data.headers.get("Authorization"));
                        } else {
                            sessionStorage.removeItem("pathAppId");
                        }
                        processor(data.body);
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
                        console.log("server GET to " + server + url + " finished");
                    }
                );
        } else {
            // no url provided, therefore call processor without data
            processor(null);
        }

    }

    serverPost(server: string, url: string, data: any, processor: (data: any) => any, errorHandler: (err: any) => any) {
        if (url != null) {
            this.showLoading();
            this.http.post(server + url, data, {observe: "response", headers: this.appendHeaders()})
                .subscribe(
                    responseData => {
                        sessionStorage.setItem("pathAppId", <any>responseData.headers.get("Authorization"));
                        console.log(responseData);
                        processor(responseData.body);
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
                        console.log("server POST to " + server + url + " finished:");
                        console.log(data);
                    }
                );
        } else {
            // no url provided, therefore call processor without data
            processor(null);
        }
    }

    serverPut(server: string, url: string, data: any, processor: (data: any) => any) {
        if (url != null) {
            this.showLoading();
            this.http.put(server + url, data, {observe: "response", headers: this.appendHeaders()})
                .subscribe(
                    responseData => {
                        sessionStorage.setItem("pathAppId", <any>responseData.headers.get("Authorization"));
                        console.log(responseData);
                        processor(responseData.body);
                    },
                    err => {
                        this.handleError(err);
                    },
                    () => {
                        this.hideLoading();
                        console.log("server PUT to " + server + url + " finished:");
                        console.log(data);
                    }
                );
        } else {
            // no url provided, therefore call processor without data
            processor(null);
        }
    }

    serverDelete(server: string, url: string, processor: (data: any) => any) {
        if (url != null) {
            this.showLoading();
            this.http.delete(server + url, {observe: "response", headers: this.appendHeaders()})
                .subscribe(
                    data => {
                        sessionStorage.setItem("pathAppId", <any>data.headers.get("Authorization"));
                        console.log(data);
                        processor(data.body);
                    },
                    err => {
                        this.handleError(err);
                    },
                    () => {
                        this.hideLoading();
                        console.log("server DELETE to " + server + url + " finished:");
                    }
                );
        } else {
            // no url provided, therefore call processor without data
            processor(null);
        }
    }

    private handleError(err: any) {
        this.hideLoading();
        if (err.status === 405 && err.error["messageKey"] != null) {
            alert(this.translationService.getText(err.error["messageKey"], err.error["parameters"]));
        } else if (err.status === 401) {
            alert("Unauthorized. Please login again.");
            location.reload();
        } else {
            // general error
            if (err.error["error"] == null && err.error["title"] == null) {
                this.addAlert("Unkwown Error", "Please check server and internet connection: " + err.error);
            } else {
                this.addAlert(err.error["title"], err.error["error"]);
            }
            console.error(err);
        }
    }

    private appendHeaders(): HttpHeaders {
        let headers = new HttpHeaders();
        headers = headers.append("Content-Type", "application/json");
        const jwt: string = <any>sessionStorage.getItem("pathAppId");
        if (jwt != null) {
            headers = headers.append("Authorization", jwt);
        }
        return headers;
    }

    public getAlerts(): Alert[] {
        return this._alertStack;
    }

    public addAlert(title: string, text: string) {
        const alert = new Alert();
        alert.title = title;
        alert.text = text;
        this._alertStack.push(alert);
    }

    public clearAlert(id: number) {
        for (let i = 0; i < this._alertStack.length; i++) {
            if (this._alertStack[i].id === id) {
                this._alertStack.splice(i, 1);
                break;
            }
        }
    }

}

export class Alert {

    private _title!: string;
    private _text!: string;
    private _id: number = Date.now();

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
