import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

@Injectable()
export class NoticeEffects {
  constructor(private actions$: Actions) {}

  // @Effect()
  // loadNotices$ = this.actions$.pipe();
}
