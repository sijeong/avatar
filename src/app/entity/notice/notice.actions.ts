import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Notice } from './notice.model';

export enum NoticeActionTypes {
  RequestNotices = '[Notice] Request Notices',
  LoadNotices = '[Notice] Load Notices',
  AddNotice = '[Notice] Add Notice',
  UpsertNotice = '[Notice] Upsert Notice',
  AddNotices = '[Notice] Add Notices',
  UpsertNotices = '[Notice] Upsert Notices',
  UpdateNotice = '[Notice] Update Notice',
  UpdateNotices = '[Notice] Update Notices',
  DeleteNotice = '[Notice] Delete Notice',
  DeleteNotices = '[Notice] Delete Notices',
  ClearNotices = '[Notice] Clear Notices'
}

export class RequestNotices implements Action {
  readonly type = NoticeActionTypes.RequestNotices;
}

export class LoadNotices implements Action {
  readonly type = NoticeActionTypes.LoadNotices;

  constructor(public payload: { notices: Notice[] }) {}
}

export class AddNotice implements Action {
  readonly type = NoticeActionTypes.AddNotice;

  constructor(public payload: { notice: Notice }) {}
}

export class UpsertNotice implements Action {
  readonly type = NoticeActionTypes.UpsertNotice;

  constructor(public payload: { notice: Notice }) {}
}

export class AddNotices implements Action {
  readonly type = NoticeActionTypes.AddNotices;

  constructor(public payload: { notices: Notice[] }) {}
}

export class UpsertNotices implements Action {
  readonly type = NoticeActionTypes.UpsertNotices;

  constructor(public payload: { notices: Notice[] }) {}
}

export class UpdateNotice implements Action {
  readonly type = NoticeActionTypes.UpdateNotice;

  constructor(public payload: { notice: Update<Notice> }) {}
}

export class UpdateNotices implements Action {
  readonly type = NoticeActionTypes.UpdateNotices;

  constructor(public payload: { notices: Update<Notice>[] }) {}
}

export class DeleteNotice implements Action {
  readonly type = NoticeActionTypes.DeleteNotice;

  constructor(public payload: { id: string }) {}
}

export class DeleteNotices implements Action {
  readonly type = NoticeActionTypes.DeleteNotices;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearNotices implements Action {
  readonly type = NoticeActionTypes.ClearNotices;
}

export type NoticeActions =
  | RequestNotices
  | LoadNotices
  | AddNotice
  | UpsertNotice
  | AddNotices
  | UpsertNotices
  | UpdateNotice
  | UpdateNotices
  | DeleteNotice
  | DeleteNotices
  | ClearNotices;
