import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FakeService } from '../fake.service';
import { AppState } from '@app/core';
import { OptionActionTypes } from '../option/option.actions';
import { withLatestFrom, mergeMap, map, catchError } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { throwError } from 'rxjs';
import {
  UserActionTypes,
  RequestUsers,
  LoadUsersSuccess
} from './user.actions';
import { selectAllUsers } from './user.reducer';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private service: FakeService,
    private store: Store<AppState>
  ) {}

  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType<RequestUsers>(UserActionTypes.RequestUsers),
    withLatestFrom(this.store.pipe(select(selectAllUsers))),
    mergeMap(() => this.service.getUsers()),
    map(users => new LoadUsersSuccess({ users })),
    catchError(this.handleError)
  );

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
}
