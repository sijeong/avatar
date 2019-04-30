import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notice } from '@app/entity/notice/notice.model';
import { Store, select } from '@ngrx/store';
import * as fromNotice from '../../entity/notice/notice.reducer';
import { Observable, of } from 'rxjs';
import { map, combineLatest, switchMap, catchError, tap } from 'rxjs/operators';
import { RequestNotices } from '@app/entity/notice/notice.actions';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'anms-notice-detail',
  templateUrl: './notice-detail.component.html',
  styleUrls: ['./notice-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoticeDetailComponent implements OnInit {
  // id: string;
  // notices$: Observable<Notice[]> = this.store.pipe(
  //   select(fromNotice.selectAllNotices)
  // );
  notice$: Observable<Notice> = this.store.pipe(
    select(fromNotice.selectSelectedNotice)
  );

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromNotice.NoticeState>
  ) {}

  ngOnInit() {
    // this.id = this.route.snapshot.params.id;
    // this.store.dispatch(new RequestNotices());
    // this.notices$ =
    // console.log('noticeID:', this.id);
    // this.notice$ = this.notices$[this.id];
    // )
    // this.route.params.pipe(
    //   map(p => p.id),
    //   combineLatest(this.notices$),
    //   switchMap(
    //     ([id, notices]) => notices[id],
    //     catchError(error => of({ error })),
    //     // tap(value => console.log())
    //   )
  }
}
