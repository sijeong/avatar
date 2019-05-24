import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectIsAuthenticated } from './auth.selectors';
import { AppState } from '../core.state';
import { OidcFacade } from 'ng-oidc-client'
import { OidcState, isLoggedIn } from 'ng-oidc-client/lib/reducers/oidc.reducer';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private store: Store<AppState>) {}
  // constructor(private store: Store<OidcState>) { }
  canActivate(): Observable<boolean> {
    // return this.store.pipe(select(isLoggedIn));
    return this.store.pipe(select(selectIsAuthenticated));
  }
}
