import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FakeService } from '../fake.service';

import { User } from '../user/user.model';
import { Option } from '../option/option.model';
import { Notice } from '../notice/notice.model';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import * as fromNotice from '../notice/notice.reducer';
import * as fromOption from '../option/option.reducer';

import * as fromStore from '../reducers';
@Component({
  selector: 'anms-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiTestComponent implements OnInit {
  users: User[];
  options: Option[];
  //  = this.store.pipe(select(selectAll));
  notices$: Observable<Notice[]>;
  options$: Observable<Option[]>;

  constructor(
    private svc: FakeService,
    private storeoption: Store<fromOption.OptionState>
  ) {}

  ngOnInit() {
    // this.svc.getOptions().subscribe(d => {this.options = d; console.log(d)});
    // this.options = this.svc.getOptions();
    // this.svc.getOptions().subscribe(d => this.options = d);
    // this.options$ = this.storeoption.pipe(select(fromOption.selectAll));
    this.options$ = this.svc.getOptions();
    this.notices$ = this.svc.getNotices();
  }
}
