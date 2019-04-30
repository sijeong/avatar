import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anms-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  single: any[] = single;
  multi: any[];

  view: any[] = [600, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() { }

  ngOnInit() {
    this.single = single;
  }

  onSelect(data) {
    console.log('Item clicked', data);
  }
  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }


}
export const single = [
  {
    name: 'Germany',
    value: 40632
  },
  {
    name: 'United States',
    value: 49737
  },
  {
    name: 'France',
    value: 36745
  },
  {
    name: 'United Kingdom',
    value: 36240
  },
  {
    name: 'Spain',
    value: 33000
  },
  {
    name: 'Italy',
    value: 35800
  }
];
