import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trends: Trend[];
  constructor() { }

  ngOnInit() {
    this.trends = [
      {
        title: "oil",
        value: 123,
        trend: true
      },
      {
        title: "machinary",
        value: 100,
        trend: true
      },
      {
        title: "mineral",
        value: 188,
        trend: false
      },
      {
        title: "coal",
        value: 109,
        trend: true
      },
      {
        title: "ice",
        value: 456,
        trend: false
      },

    ]

  }
}

export interface Trend {
  title: string;
  value: number;
  trend: boolean;
}