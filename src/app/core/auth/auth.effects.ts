import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, first, switchMap } from 'rxjs/operators';

import { LocalStorageService } from '../local-storage/local-storage.service';

import {
  ActionAuthLogin,
  ActionAuthLogout,
  AuthActionTypes
} from './auth.actions';
import { OidcFacade } from 'ng-oidc-client';
import { of } from 'rxjs';

export const AUTH_KEY = 'AUTH';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService,
    private router: Router,
    private oidcFacade: OidcFacade
  ) { }

  @Effect({ dispatch: false })
  login = this.actions$.pipe(
    ofType<ActionAuthLogin>(AuthActionTypes.LOGIN),

    tap(() => this.oidcFacade.signinPopup()),
    tap(() => {
      this.oidcFacade.identity$.pipe(
        first(),
        switchMap(user => {
          if (user && !user.expired) {
            console.log('authenticated');
            this.localStorageService.setItem(AUTH_KEY, { isAuthenticated: true });
            return of(true);
          } else {
            console.log('failed');
            this.localStorageService.setItem(AUTH_KEY, { isAuthenticated: false });
            return of(false);
          }
        })
      )
    })
  )
  @Effect({ dispatch: false })
  logout = this.actions$.pipe(
    ofType<ActionAuthLogout>(AuthActionTypes.LOGOUT),
    tap(() => this.oidcFacade.signoutPopup()),
    tap(() => {
      this.router.navigate(['']);
      this.localStorageService.setItem(AUTH_KEY, { isAuthenticated: false });
    })
  );
}
