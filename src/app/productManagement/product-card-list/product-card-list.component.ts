import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@app/entity/product/product.model';

@Component({
  selector: 'anms-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.css']
})
export class ProductCardListComponent implements OnInit {
  @Input()
  products: Product[];

  constructor() {}

  ngOnInit() {}
}
