import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Notice } from './notice.model';
import { NoticeActions, NoticeActionTypes } from './notice.actions';

export interface State extends EntityState<Notice> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Notice> = createEntityAdapter<Notice>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(state = initialState, action: NoticeActions): State {
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

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();
