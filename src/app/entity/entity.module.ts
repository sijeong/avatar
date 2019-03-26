import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './user/user.reducer';
import * as fromOption from './option/option.reducer';
import * as fromNotice from './notice/notice.reducer';
// import { User } from './user/user.model'
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('user', fromUser.reducer),
    StoreModule.forFeature('option', fromOption.reducer),
    StoreModule.forFeature('notice', fromNotice.reducer)
  ],
  exports: []
})
export class EntityModule {}
