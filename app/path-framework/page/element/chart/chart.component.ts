import {Component, ViewChild, AfterViewInit, Input, Output} from '@angular/core';
import {PageElement} from "../page-element";

declare var Chart: any;

@Component({
    selector: 'path-radar-chart',
    templateUrl: 'app/path-framework/page/element/chart/chart.component.html'
})
export class ChartComponent implements AfterViewInit {
    @ViewChild('canvasElement') containerElement;
    @Input('chart')
    @Output('chart')
    chart:ChartElement;

    ngAfterViewInit() {
        Chart.defaults.global.defaultFontSize = 16;

        console.log(this.containerElement);

        var ctx = this.containerElement.nativeElement.getContext("2d");
        // TODO workaround for chart.js responsive feature not working
        console.log(this.containerElement.nativeElement.parentElement.parentElement);
        console.log(this.containerElement.nativeElement.parentElement.parentElement.parentElement.clientWidth);
        console.log(this.containerElement.nativeElement.parentElement.parentElement.parentElement.clientHeight);
        ctx.canvas.width = this.containerElement.nativeElement.parentElement.parentElement.parentElement.clientWidth;
        ctx.canvas.height = 600;

        console.log(this.chart.chartType);

        if (this.chart.chartType == 'bar') {
            var data = {
                labels: ["EAM Vision Development", "Roadmap", "Privacy", "Regulation", "EAM Vision Development", "Roadmap", "Privacy"],
                datasets: [
                    {
                        label: "QuickScan One",
                        backgroundColor: "rgba(255,255,255,255)",
                        borderColor: "rgba(255,255,255,255)",
                        borderWidth: 0,
                        hoverBackgroundColor: "rgba(255,255,255,255)",
                        hoverBorderColor: "rgba(255,255,255,255)",
                        data: [20, 20, 15, 35, 20, 25, 20],
                    },
                    {
                        label: "Start Gap",
                        backgroundColor: "rgb(0, 153, 255)",
                        borderColor: "rgba(255,255,255,255)",
                        borderWidth: 0,
                        hoverBackgroundColor: "rgb(0, 153, 255)",
                        hoverBorderColor: "rgba(255,255,255,255)",
                        data: [2,2,2,2,2,2,2],
                    },
                    {
                        label: "Gap",
                        backgroundColor: "rgba(255,99,132,0.2)",
                        borderColor: "rgba(255,99,132,1)",
                        borderWidth: 0,
                        hoverBackgroundColor: "rgba(255,99,132,0.4)",
                        hoverBorderColor: "rgba(255,99,132,1)",
                        data: [65, 59, 80, 81, 56, 55, 40],
                    },
                    {
                        label: "End Gap",
                        backgroundColor: "rgb(51, 204, 51)",
                        borderColor: "rgba(255,255,255,255)",
                        borderWidth: 0,
                        hoverBackgroundColor: "rgb(51, 204, 51)",
                        hoverBorderColor: "rgba(255,255,255,255)",
                        data: [2,2,2,2,2,2,2],
                    },
                ]
            };

            var barChart = new Chart(ctx , {
                type: "horizontalBar",
                data: data,
                options: {
                    responsive: false,
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            stacked: true
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    },
                    legend: {
                        display: false
                    }
                }
            });
            console.log(barChart);

        } else {
            var radarChart = new Chart(ctx , {
                type: "radar",
                data: this.getRadarChartData(),
                options: {
                    responsive: false,
                    maintainAspectRatio: false
                }
            });
            console.log(radarChart);
        }

    }

    getRadarChartData() {
        var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
        var radarChartData = {
            labels : ["Process Definition","Duplication","Timing","Cleansing","Archiving"],
            datasets : [
                {
                    label: "QuickScan One",
                    fillColor : "rgba(220,220,220,0.2)",
                    strokeColor : "rgba(220,220,220,1)",
                    pointColor : "rgba(220,220,220,1)",
                    pointStrokeColor : "#fff",
                    pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(220,220,220,1)",
                    data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
                },
                {
                    label: "QuickScan Two",
                    fillColor : "rgba(151,187,205,0.2)",
                    strokeColor : "rgba(151,187,205,1)",
                    pointColor : "rgba(151,187,205,1)",
                    pointStrokeColor : "#fff",
                    pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(151,187,205,1)",
                    data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
                }
            ],
            pointLabelFontSize: 16

        }
        return radarChartData;
    }
}

export class ChartElement extends PageElement {
    private _chartType:string;

    // Radar
    public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

    public radarChartData:any = [
        {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
        {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
    ];
    public radarChartType:string = 'radar';

    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }

    get chartType():string {
        return this._chartType;
    }

    set chartType(value:string) {
        this._chartType = value;
    }
}