import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Option } from './option.model';
import { OptionActions, OptionActionTypes } from './option.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectRemoveDoneTodosDisabled } from '@app/examples/todos/todos.selectors';

export interface OptionState extends EntityState<Option> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Option> = createEntityAdapter<Option>();

export const initialState: OptionState = adapter.getInitialState({
  // additional entity state properties
});

export function optionReducer(
  state = initialState,
  action: OptionActions
): OptionState {
  switch (action.type) {
    case OptionActionTypes.AddOption: {
      return adapter.addOne(action.payload.option, state);
    }

    case OptionActionTypes.UpsertOption: {
      return adapter.upsertOne(action.payload.option, state);
    }

    case OptionActionTypes.AddOptions: {
      return adapter.addMany(action.payload.options, state);
    }

    case OptionActionTypes.UpsertOptions: {
      return adapter.upsertMany(action.payload.options, state);
    }

    case OptionActionTypes.UpdateOption: {
      return adapter.updateOne(action.payload.option, state);
    }

    case OptionActionTypes.UpdateOptions: {
      return adapter.updateMany(action.payload.options, state);
    }

    case OptionActionTypes.DeleteOption: {
      return adapter.removeOne(action.payload.id, state);
    }

    case OptionActionTypes.DeleteOptions: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case OptionActionTypes.LoadOptions: {
      return adapter.addAll(action.payload.options, state);
    }

    // case OptionActionTypes.LoadOptionsSuccess: {
    //   return adapter.addAll(action.payload.options, state);
    // }

    case OptionActionTypes.ClearOptions: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}
///***///
export const selectOptionState = createFeatureSelector<OptionState>('option');
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

///***///
export const selectOptionIds = createSelector(selectOptionState, selectIds);
///***///
export const selectOptionEntities = createSelector(
  selectOptionState,
  selectEntities
);
///***///
export const selectAllOptions = createSelector(selectOptionState, selectAll);
