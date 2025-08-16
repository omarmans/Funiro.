import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-benefits',
  imports: [],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss',
})
export class BenefitsComponent {
  benefits = signal([
    {
      title: 'High Quality',
      subtitle: 'crafted from top materials',

      icon: 'imgs/shop/Benefits/high-quality.png',
    },
    {
      title: 'Warranty Protection',
      subtitle: 'Over 2 years',
      icon: 'imgs/shop/Benefits/warranty-protection.png',
    },
    {
      title: 'Free Shipping',
      subtitle: 'Order over 150 $',
      icon: 'imgs/shop/Benefits/free-shipping.png',
    },
    {
      title: '24 / 7 Support',
      subtitle: 'Dedicated support',
      icon: 'imgs/shop/Benefits/high-quality.png',
    },
  ]);
}
