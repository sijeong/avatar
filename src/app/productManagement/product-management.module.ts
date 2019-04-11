import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { ProductMainComponent } from './product-main/product-main.component';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';

@NgModule({
  declarations: [ProductMainComponent, ProductCardListComponent],
  imports: [CommonModule, SharedModule]
})
export class ProductManagementModule {}
