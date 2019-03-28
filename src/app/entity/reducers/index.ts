import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromNotice from '../notice/notice.reducer';
import { optionReducer, OptionState } from '../option/option.reducer';

import { AppState } from '@app/core';

export interface EntityState {
  option: OptionState;
}

export const reducers: ActionReducerMap<EntityState> = {
  option: optionReducer
};

export const metaReducers: MetaReducer<EntityState>[] = !environment.production
  ? []
  : [];

export interface State extends AppState {}
