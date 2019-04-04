import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FakeService } from '../fake.service';
import { AppState } from '@app/core';
import {
  RequestNotices,
  NoticeActionTypes,
  LoadNotices
} from './notice.actions';
import { withLatestFrom, mergeMap, map, catchError } from 'rxjs/operators';
import { selectAllNotices } from './notice.reducer';
import { select, Store } from '@ngrx/store';
import { throwError } from 'rxjs';

@Injectable()
export class NoticeEffects {
  handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
  constructor(
    private actions$: Actions,
    private service: FakeService,
    private store: Store<AppState>
  ) {}

  @Effect()
  loadNotices$ = this.actions$.pipe(
    ofType<RequestNotices>(NoticeActionTypes.RequestNotices),
    withLatestFrom(this.store.pipe(select(selectAllNotices))),
    mergeMap(() => this.service.getNotices()),
    map(notices => new LoadNotices({ notices })),
    catchError(this.handleError)
  );
}
