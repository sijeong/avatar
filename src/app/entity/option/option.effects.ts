import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FakeService } from '../fake.service';
import { tap, mergeMap, catchError, map, switchMap } from 'rxjs/operators';
import { EMPTY, throwError } from 'rxjs';

import { LoadOptions, OptionActionTypes } from './option.actions';

@Injectable()
export class OptionEffects {
  constructor(private actions$: Actions, private service: FakeService) {}

  @Effect()
  loadOption$ = this.actions$.pipe(
    ofType<LoadOptions>(OptionActionTypes.LoadOptions),
    mergeMap(action => this.service.getOptions()),
    catchError(this.handleError)
  );

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
}
