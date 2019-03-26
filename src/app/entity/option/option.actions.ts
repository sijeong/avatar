import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Option } from './option.model';

export enum OptionActionTypes {
  LoadOptions = '[Option] Load Options',
  AddOption = '[Option] Add Option',
  UpsertOption = '[Option] Upsert Option',
  AddOptions = '[Option] Add Options',
  UpsertOptions = '[Option] Upsert Options',
  UpdateOption = '[Option] Update Option',
  UpdateOptions = '[Option] Update Options',
  DeleteOption = '[Option] Delete Option',
  DeleteOptions = '[Option] Delete Options',
  ClearOptions = '[Option] Clear Options'
}

export class LoadOptions implements Action {
  readonly type = OptionActionTypes.LoadOptions;

  constructor(public payload: { options: Option[] }) {}
}

export class AddOption implements Action {
  readonly type = OptionActionTypes.AddOption;

  constructor(public payload: { option: Option }) {}
}

export class UpsertOption implements Action {
  readonly type = OptionActionTypes.UpsertOption;

  constructor(public payload: { option: Option }) {}
}

export class AddOptions implements Action {
  readonly type = OptionActionTypes.AddOptions;

  constructor(public payload: { options: Option[] }) {}
}

export class UpsertOptions implements Action {
  readonly type = OptionActionTypes.UpsertOptions;

  constructor(public payload: { options: Option[] }) {}
}

export class UpdateOption implements Action {
  readonly type = OptionActionTypes.UpdateOption;

  constructor(public payload: { option: Update<Option> }) {}
}

export class UpdateOptions implements Action {
  readonly type = OptionActionTypes.UpdateOptions;

  constructor(public payload: { options: Update<Option>[] }) {}
}

export class DeleteOption implements Action {
  readonly type = OptionActionTypes.DeleteOption;

  constructor(public payload: { id: string }) {}
}

export class DeleteOptions implements Action {
  readonly type = OptionActionTypes.DeleteOptions;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearOptions implements Action {
  readonly type = OptionActionTypes.ClearOptions;
}

export type OptionActions =
  | LoadOptions
  | AddOption
  | UpsertOption
  | AddOptions
  | UpsertOptions
  | UpdateOption
  | UpdateOptions
  | DeleteOption
  | DeleteOptions
  | ClearOptions;
