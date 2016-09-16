import {Component, ViewChild, AfterViewInit, Input, Output} from '@angular/core';
import {PageElement} from "../page-element";
import {PathService} from "../../../service/path.service";
import {IPathApp} from "../../../pathinterface";

declare var Chart: any;

@Component({
    selector: 'path-radar-chart',
    templateUrl: 'app/path-framework/page/element/chart/chart.component.html'
})
export class ChartComponent implements AfterViewInit {
    @Input('chart')
    @Output('chart')
    chart:ChartElement;

    ngAfterViewInit() {
        this.chart.load((data:any) => {
            console.log(data);
            this.chart.data = data;
        });
    }
}

export class ChartElement extends PageElement {
    private _chartType:string;
    private _url:string;
    private _data:any;

    constructor(private pathService:PathService, app:IPathApp) {
        super(app);
    }

    public load(loader:(data:any) => any) {
        this.pathService.serverGet(this.app.getBackendUrl(), this.url, loader, (err:any) => {
            console.log("error" + err);
        })
    }

    get chartType():string {
        return this._chartType;
    }

    set chartType(value:string) {
        this._chartType = value;
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    get data(): any {
        return this._data;
    }

    set data(value: any) {
        this._data = value;
    }
}