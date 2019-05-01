import { Component, OnInit } from '@angular/core';
import { timer, Observable, interval, of, from } from 'rxjs';
import * as faker from 'faker';
import { flatMap, pairwise, bufferCount, map, take } from 'rxjs/operators';

// import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'anms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // faArrowUp = faArrowUp;
  // faArrowDown = faArrowDown;
  trends: Trend[];
  constructor() { }
  onClick(obj) {
    console.log(obj)
  }
  ngOnInit() {

    // const m2 = interval(3000).pipe(
    //   // of(faker.random.number()),
    //   pairwise(),
    //   map(([a, b]) => { return b - a })
    // ).subscribe(val => console.log(val))


    const source = Observable.create(function (observer) {
      let seed = 100;
      const interval = setInterval(() => {
        let res = faker.random.number(100000);
        seed++;
        faker.seed(seed);
        observer.next(res);
      }, 3000);
      return () => clearInterval(interval);
    }).pipe(
      pairwise(),
      map(([a, b]) => { return { value: a, trend: b - a } })
    ).subscribe(val => {
      console.log(val);
      this.trends[faker.random.number(4)].value = val.value;
      this.trends[faker.random.number(4)].trend = val.trend > 0 ? true : false;
    });

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