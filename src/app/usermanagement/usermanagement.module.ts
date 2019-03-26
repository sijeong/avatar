import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMainComponent } from './user-main/user-main.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [UserMainComponent],
  imports: [CommonModule, SharedModule],
  exports: [UserMainComponent]
})
export class UsermanagementModule {}
