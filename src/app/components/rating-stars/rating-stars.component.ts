import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  imports: [],
  templateUrl: './rating-stars.component.html',
  styleUrl: './rating-stars.component.scss',
})
export class RatingStarsComponent {
  @Input() rate: number = 0;
  get fullStars(): number {
    if (this.rate >= 4.5) return 5;
    return Math.floor(this.rate);
  }

  get halfStar(): boolean {
    if (this.rate >= 4.25 && this.rate < 4.5) return false;

    return this.rate % 1 >= 0.5 && this.rate < 4.5;
  }

  get emptyStars(): number {
    return 5 - this.fullStars - (this.halfStar ? 1 : 0);
  }
}
