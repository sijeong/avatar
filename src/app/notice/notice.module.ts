import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeMainComponent } from './notice-main/notice-main.component';
import { EntityModule } from '../entity/entity.module';
import { EditorComponent } from './editor/editor.component';
// import { FormComponent } from './form/form.component'
import { SharedModule } from '@app/shared';
import { FormComponent } from '@app/notice/form/form.component';
import { NoticelistComponent } from './noticelist/noticelist.component';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';

@NgModule({
  declarations: [
    NoticeMainComponent,
    EditorComponent,
    FormComponent,
    NoticelistComponent
  ],
  imports: [
    CommonModule,
    EntityModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class NoticeModule {}
