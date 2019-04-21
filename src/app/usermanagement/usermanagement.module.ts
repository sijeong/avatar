import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMainComponent } from './user-main/user-main.component';
import { SharedModule } from '@app/shared';
import { UserCardListComponent } from './user-card-list/user-card-list.component';
import { EntityModule } from '../entity/entity.module';

@NgModule({
  declarations: [UserMainComponent, UserCardListComponent],
  imports: [CommonModule, SharedModule, EntityModule],
  exports: [UserMainComponent]
})
export class UsermanagementModule {}
