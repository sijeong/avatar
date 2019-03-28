import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FakeService } from '../fake.service';
import {
  tap,
  mergeMap,
  catchError,
  map,
  switchMap,
  withLatestFrom
} from 'rxjs/operators';
import { EMPTY, throwError } from 'rxjs';

import {
  LoadOptions,
  OptionActionTypes,
  LoadOptionsSuccess,
  RequestOptions
} from './option.actions';
// import { AppState } from '@app/core/core.state';
import { AppState } from '../../core/core.state';
import { select, Store } from '@ngrx/store';
import { selectAllOptions } from './option.reducer';
@Injectable()
export class OptionEffects {
  constructor(
    private actions$: Actions,
    private service: FakeService,
    private store: Store<AppState>
  ) {}

  @Effect()
  loadOptions$ = this.actions$.pipe(
    ofType<RequestOptions>(OptionActionTypes.RequestOptions),
    withLatestFrom(this.store.pipe(select(selectAllOptions))),
    mergeMap(() => this.service.getOptions()),
    map(options => new LoadOptions({ options })),
    catchError(this.handleError)
  );

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
}
