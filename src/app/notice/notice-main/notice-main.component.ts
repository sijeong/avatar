import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiTestComponent } from '../../entity/api-test/api-test.component';
import { Observable } from 'rxjs';
import { Notice } from '@app/entity/notice/notice.model';
import { FakeService } from '@app/entity/fake.service';
import {
  selectAllNotices,
  NoticeState
} from '@app/entity/notice/notice.reducer';
import { Store, select } from '@ngrx/store';
import * as fromNotice from '../../entity/notice/notice.reducer';
import { RequestNotices } from '@app/entity/notice/notice.actions';

@Component({
  selector: 'anms-notice-main',
  templateUrl: './notice-main.component.html',
  styleUrls: ['./notice-main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoticeMainComponent implements OnInit {
  notice$: Observable<Notice[]> = this.store.pipe(
    select(fromNotice.selectAllNotices)
  );
  constructor(private store: Store<fromNotice.NoticeState>) {}

  ngOnInit() {
    // this.store.dispatch(new RequestNotices());
  }
}
