import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionMainComponent } from './option-main/option-main.component';
import { EntityModule } from '../entity/entity.module';
@NgModule({
  declarations: [OptionMainComponent],
  imports: [CommonModule, EntityModule]
})
export class OptionmanagementModule {}
