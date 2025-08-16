import { Component, Input, input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!:Product;
    compare() {
    console.log('compare');
  }

  addToFavourite() {}
  addToCart() {}

}
