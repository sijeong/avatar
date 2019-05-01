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
    this.multi = multi;
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

export const multi = [
  {
    "name": "Vatican City",
    "series": [
      {
        "value": 4978,
        "name": "2016-09-19T06:03:36.147Z"
      },
      {
        "value": 5955,
        "name": "2016-09-21T22:13:49.272Z"
      },
      {
        "value": 2627,
        "name": "2016-09-13T19:27:30.795Z"
      },
      {
        "value": 4732,
        "name": "2016-09-22T03:34:21.206Z"
      },
      {
        "value": 5314,
        "name": "2016-09-19T17:52:16.975Z"
      }
    ]
  },
  {
    "name": "Sao Tome and Principe",
    "series": [
      {
        "value": 6532,
        "name": "2016-09-19T06:03:36.147Z"
      },
      {
        "value": 5289,
        "name": "2016-09-21T22:13:49.272Z"
      },
      {
        "value": 6630,
        "name": "2016-09-13T19:27:30.795Z"
      },
      {
        "value": 4764,
        "name": "2016-09-22T03:34:21.206Z"
      },
      {
        "value": 6903,
        "name": "2016-09-19T17:52:16.975Z"
      }
    ]
  },
  {
    "name": "Turkey",
    "series": [
      {
        "value": 2690,
        "name": "2016-09-19T06:03:36.147Z"
      },
      {
        "value": 4149,
        "name": "2016-09-21T22:13:49.272Z"
      },
      {
        "value": 4680,
        "name": "2016-09-13T19:27:30.795Z"
      },
      {
        "value": 4998,
        "name": "2016-09-22T03:34:21.206Z"
      },
      {
        "value": 3443,
        "name": "2016-09-19T17:52:16.975Z"
      }
    ]
  },
  {
    "name": "Seychelles",
    "series": [
      {
        "value": 3300,
        "name": "2016-09-19T06:03:36.147Z"
      },
      {
        "value": 4895,
        "name": "2016-09-21T22:13:49.272Z"
      },
      {
        "value": 6260,
        "name": "2016-09-13T19:27:30.795Z"
      },
      {
        "value": 2029,
        "name": "2016-09-22T03:34:21.206Z"
      },
      {
        "value": 4766,
        "name": "2016-09-19T17:52:16.975Z"
      }
    ]
  },
  {
    "name": "Macao",
    "series": [
      {
        "value": 2396,
        "name": "2016-09-19T06:03:36.147Z"
      },
      {
        "value": 4373,
        "name": "2016-09-21T22:13:49.272Z"
      },
      {
        "value": 2968,
        "name": "2016-09-13T19:27:30.795Z"
      },
      {
        "value": 4717,
        "name": "2016-09-22T03:34:21.206Z"
      },
      {
        "value": 4664,
        "name": "2016-09-19T17:52:16.975Z"
      }
    ]
  }
]
