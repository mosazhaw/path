import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {PageElement} from "../../page-element";

declare var Chart: any;

@Component({
    selector: 'path-radar-chart',
    templateUrl: 'app/path-framework/page/element/chart/radar-chart/radar-chart.component.html'
})
export class RadarChartComponent implements AfterViewInit {
    @ViewChild('canvasElement') containerElement;

    ngAfterViewInit() {
        console.log(this.containerElement);

        let lineChartData = this.initializeData();
        var ctx = this.containerElement.nativeElement.getContext("2d");
        // TODO workaround for chart.js responsive feature not working
        console.log(this.containerElement.nativeElement.parentElement.parentElement);
        console.log(this.containerElement.nativeElement.parentElement.parentElement.parentElement.clientWidth);
        console.log(this.containerElement.nativeElement.parentElement.parentElement.parentElement.clientHeight);
        ctx.canvas.width = this.containerElement.nativeElement.parentElement.parentElement.parentElement.clientWidth;
        ctx.canvas.height = 600;

        console.log(ctx);
        var thisChart = new Chart(ctx , {
            type: "radar",
            data: lineChartData,
            options: {
                responsive: false,
                maintainAspectRatio: false
            }
        });
        console.log(thisChart);
    }

    initializeData() {
        var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
        var lineChartData = {
            labels : ["January","February","March","April","May","June","July"],
            datasets : [
                {
                    label: "My First dataset",
                    fillColor : "rgba(220,220,220,0.2)",
                    strokeColor : "rgba(220,220,220,1)",
                    pointColor : "rgba(220,220,220,1)",
                    pointStrokeColor : "#fff",
                    pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(220,220,220,1)",
                    data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
                },
                {
                    label: "My Second dataset",
                    fillColor : "rgba(151,187,205,0.2)",
                    strokeColor : "rgba(151,187,205,1)",
                    pointColor : "rgba(151,187,205,1)",
                    pointStrokeColor : "#fff",
                    pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(151,187,205,1)",
                    data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
                }
            ]

        }
        return lineChartData;
    }
}

export class RadarChartElement extends PageElement {

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

}