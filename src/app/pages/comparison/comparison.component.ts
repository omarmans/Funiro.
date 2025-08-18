import { Component, OnInit, signal } from '@angular/core';
import { RatingStarsComponent } from '../../components/rating-stars/rating-stars.component';
import { productsComparison } from '../../models/product-compariosn';
import { TitlePageRoutingComponent } from '../../components/title-page-routing/title-page-routing.component';

@Component({
  selector: 'app-comparison',
  imports: [RatingStarsComponent, TitlePageRoutingComponent],
  templateUrl: './comparison.component.html',
  styleUrl: './comparison.component.scss',
})
export class ComparisonComponent implements OnInit {
  ngOnInit(): void {}
  productsComparison = productsComparison;
  objectKeys = Object.keys;
  getValue(obj: Record<string, any>, key: string): string {
    return obj[key];
  }
}
