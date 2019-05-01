import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SignalRService } from '../signal-r.service';
import { HttpClient } from '@angular/common/http';
import { ChartModel } from '../chart-model';
import { Observable } from 'rxjs';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'anms-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  data$: Observable<ChartModel[]>;
  public chartOptions: ChartOptions = {
    // scaleShowVerticalLines:true,
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };
  public chartLabels: string[] = ['Real time data for the chart'];
  public chartType: string = 'bar';
  public chartLegend: boolean = true;
  public colors: any[] = [
    { backgroundColor: '#5491DA' },
    { backgroundColor: '#E74C3C' },
    { backgroundColor: '#82E0AA' },
    { backgroundColor: '#E5E7E9' }
  ];

  constructor(
    public signalRService: SignalRService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListner();
    this.startHttpRequest();
    //this.data$ = this.signalRService.getChartData();
  }
  private startHttpRequest = () => {
    this.http.get('https://localhost:44351/api/chart').subscribe(res => {
      console.log(res);
    });
  };
  chartClicked(event) {}
}
