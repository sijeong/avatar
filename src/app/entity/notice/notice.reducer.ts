import {
  EntityState,
  EntityAdapter,
  createEntityAdapter,
  Dictionary
} from '@ngrx/entity';
import { Notice } from './notice.model';
import { NoticeActions, NoticeActionTypes } from './notice.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterState } from '@angular/router';
import { RouterStateUrl, selectRouterState } from '@app/core';

export interface NoticeState extends EntityState<Notice> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Notice> = createEntityAdapter<Notice>();

export const initialState: NoticeState = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: NoticeActions
): NoticeState {
  switch (action.type) {
    case NoticeActionTypes.AddNotice: {
      return adapter.addOne(action.payload.notice, state);
    }

    case NoticeActionTypes.UpsertNotice: {
      return adapter.upsertOne(action.payload.notice, state);
    }

    case NoticeActionTypes.AddNotices: {
      return adapter.addMany(action.payload.notices, state);
    }

    case NoticeActionTypes.UpsertNotices: {
      return adapter.upsertMany(action.payload.notices, state);
    }

    case NoticeActionTypes.UpdateNotice: {
      return adapter.updateOne(action.payload.notice, state);
    }

    case NoticeActionTypes.UpdateNotices: {
      return adapter.updateMany(action.payload.notices, state);
    }

    case NoticeActionTypes.DeleteNotice: {
      return adapter.removeOne(action.payload.id, state);
    }

    case NoticeActionTypes.DeleteNotices: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case NoticeActionTypes.LoadNotices: {
      return adapter.addAll(action.payload.notices, state);
    }

    case NoticeActionTypes.ClearNotices: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const selectNoticeState = createFeatureSelector<NoticeState>('notice');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectAllNotices = createSelector(selectNoticeState, selectAll);

export const selectNoticeEntities = createSelector(
  selectNoticeState,
  selectEntities
);

export const selectSelectedNotice = createSelector(
  selectNoticeEntities,
  selectRouterState,
  (entities, params) => params && entities[params.state.params.id]
);
// export const getEntityById = (id: string) => {
//   return createSelector(
//     getEntities,
//     (entities: Dictionary<Notice>, props: {id: string}) => {
//       return entities[props.id];
//     }
//   )
// }
// export const getEntityById = (id: string) =>
//   (state: NoticeState) =>
//     state.entities[id];

// export const getUserState = createFeatureSelector<UserState>('users');

// export const getUserEntities = createSelector(getUserState, selectUserEntities);

// export const getUserEntityById = () => {
//   return createSelector(
//     getUserEntities,
//     (entities: Dictionary<User>, props: { id: string }) => {
//       return entities[props.id];
//     },
//   );
// };
// export const selectNotice = createSelector(
//   selectNoticeState,
//   selectAll,
//   notices => (id: string) => notices[id]
// )
// export const selectRouterState = createFeatureSelector<RouterStateUrl>('router');
// export const selectRouteParameters = createSelector(
//   selectRouterState,
//   router => router.params.id
// )
// export const selectCurrentNotice = createSelector(
//   selectAll,
//   selectRouteParameters,
//   (notices, route) => notices[route.id]
// )
// export const getNotices = (state: NoticeState) => state
// export const selectById = (id) => createSelector(
//   selectAllNotices
//   (notices) => notices[id]
// )
