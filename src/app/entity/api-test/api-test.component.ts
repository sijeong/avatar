import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FakeService } from '../fake.service';

import { User } from '../user/user.model';
import { Option } from '../option/option.model';
import { Notice } from '../notice/notice.model';
import { Observable, pairs } from 'rxjs';

import { Store, select } from '@ngrx/store';
import * as fromOption from '../option/option.reducer';

import * as fromStore from '../reducers';
import { LoadOptions, RequestOptions } from '../option/option.actions';
import { Options } from 'selenium-webdriver/opera';
@Component({
  selector: 'anms-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiTestComponent implements OnInit {
  users: User[];

  // options: Option[];

  options$: Observable<Option[]> = this.store.pipe(
    select(fromOption.selectAllOptions)
  );

  //  = this.store.pipe(select(selectAll));
  notices$: Observable<Notice[]>;
  // options$: Observable<Option[]>;

  constructor(
    private svc: FakeService,
    private store: Store<fromOption.OptionState>
  ) {}

  ngOnInit() {
    this.store.dispatch(new RequestOptions());
    // this.svc.getOptions().subscribe(d => {this.options = d; console.log(d)});

    // this.options = this.svc.getOptions();
    // this.svc.getOptions().subscribe(d => this.options = d);
    // this.options$ = this.storeoption.pipe(select(fromOption.selectAll));
    // this.options$ = this.svc.getOptions();
    // this.notices$ = this.svc.getNotices();

    // this.options$ = this.svc.getOptions();
    // this.options$ = this.store.pipe(select(fromOption.selectAllOptions));
  }
}
