import { Component, signal } from '@angular/core';
import { DynamicHeaderComponent } from '../../../components/dynamic-header/dynamic-header.component';

import { ProductCardComponent } from '../../../components/product-card/product-card.component';
import { products } from '../../../models/random.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [DynamicHeaderComponent, ProductCardComponent, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  visibleCount = signal(4);

  products = products;

  get visibleProducts() {
    return this.products().slice(0, this.visibleCount());
  }

  toggleShowMore() {
    const current = this.visibleCount();
    const total = this.products().length;

    if (current < total) {
      this.visibleCount.set(Math.min(current + 4, total));
    } else {
      this.visibleCount.set(4);
    }
  }
  get showButtonLabel() {
    return this.visibleCount() < this.products().length
      ? 'Show More'
      : 'Show Less';
  }
  compare() {
    console.log('compare');
  }

  addToFavourite() {}
  addToCart() {}
}
