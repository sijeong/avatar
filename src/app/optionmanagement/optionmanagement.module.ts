import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionMainComponent } from './option-main/option-main.component';
import { EntityModule } from '../entity/entity.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';
@NgModule({
  declarations: [OptionMainComponent],
  imports: [CommonModule, EntityModule, NgxChartsModule]
})
export class OptionmanagementModule {}
