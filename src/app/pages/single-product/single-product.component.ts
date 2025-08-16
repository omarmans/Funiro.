import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DynamicHeaderComponent } from '../../components/dynamic-header/dynamic-header.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { products } from '../../models/random.data';

@Component({
  selector: 'app-single-product',
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    DynamicHeaderComponent,
    ProductCardComponent,
  ],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss',
})
export class SingleProductComponent implements OnInit {
  ngOnInit(): void {
    const full = Math.floor(this.rating);
    const half = this.rating % 1 >= 0.5;

    this.fullStars = Array(full).fill(0);
    this.hasHalfStar = half;
  }
  rating: number = 6.5;
  hasHalfStar = false;
  fullStars: number[] = [];
  visibleCount = signal(4);

  relatedProducts = products;
  get visibleProducts() {
    return this.relatedProducts().slice(0, this.visibleCount());
  }

  toggleShowMore() {
    const current = this.visibleCount();
    const total = this.relatedProducts().length;

    if (current < total) {
      this.visibleCount.set(Math.min(current + 4, total));
    } else {
      this.visibleCount.set(4);
    }
  }
  get showButtonLabel() {
    return this.visibleCount() < this.relatedProducts().length
      ? 'Show More'
      : 'Show Less';
  }
}
