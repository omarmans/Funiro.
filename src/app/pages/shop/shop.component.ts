import { Component, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { TitlePageRoutingComponent } from '../../components/title-page-routing/title-page-routing.component';

@Component({
  selector: 'app-shop',
  imports: [
    PaginationComponent,
    BenefitsComponent,
    RouterLink,
    ProductCardComponent,
    TitlePageRoutingComponent,
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent {
  products = signal<Product[]>([
    {
      name: 'Pingky',
      description: 'Cute bed set',
      mainPrice: 14000000,
      discountPrice: 7000000,
      isNew: false,
      commission: 50,
      img: 'imgs/home/Products/7.png',
    },
    {
      name: 'Potty',
      description: 'Minimalist flower pot',
      mainPrice: 500000,
      isNew: true,

      img: 'imgs/home/Products/8.png',
    },
    {
      name: 'Pingky',
      description: 'Cute bed set',
      mainPrice: 14000000,
      discountPrice: 7000000,
      isNew: false,
      commission: 50,
      img: 'imgs/home/Products/7.png',
    },
    {
      name: 'Syltherine',
      description: 'Stylish cafe chair',
      mainPrice: 3500000,
      discountPrice: 2500000,
      isNew: false,
      commission: 30,
      img: 'imgs/home/Products/1.png',
    },
    {
      name: 'Leviosa',
      description: 'Stylish cafe chair',
      mainPrice: 2500000,

      isNew: false,

      img: 'imgs/home/Products/2.png',
    },

    {
      name: 'Lolito',
      description: 'Luxury big sofa',
      mainPrice: 14000000,
      discountPrice: 7000000,
      isNew: false,
      commission: 50,
      img: 'imgs/home/Products/3.png',
    },
    {
      name: 'Respira',
      description: 'Outdoor bar table and stool',
      mainPrice: 500000,

      isNew: true,

      img: 'imgs/home/Products/4.png',
    },
    {
      name: 'Pingky',
      description: 'Cute bed set',
      mainPrice: 14000000,
      discountPrice: 7000000,
      isNew: false,
      commission: 50,
      img: 'imgs/home/Products/7.png',
    },
    {
      name: 'Grifo',
      description: 'Night lamp',
      mainPrice: 1500000,

      isNew: false,

      img: 'imgs/home/Products/5.png',
    },
    {
      name: 'Muggo',
      description: 'Small mug',
      mainPrice: 150000,

      isNew: true,

      img: 'imgs/home/Products/6.png',
    },
    {
      name: 'Respira',
      description: 'Outdoor bar table and stool',
      mainPrice: 500000,

      isNew: true,

      img: 'imgs/home/Products/4.png',
    },
    {
      name: 'Pingky',
      description: 'Cute bed set',
      mainPrice: 14000000,
      discountPrice: 7000000,
      isNew: false,
      commission: 50,
      img: 'imgs/home/Products/7.png',
    },
    {
      name: 'Grifo',
      description: 'Night lamp',
      mainPrice: 1500000,

      isNew: false,

      img: 'imgs/home/Products/5.png',
    },
    {
      name: 'Pingky',
      description: 'Cute bed set',
      mainPrice: 14000000,
      discountPrice: 7000000,
      isNew: false,
      commission: 50,
      img: 'imgs/home/Products/7.png',
    },
    {
      name: 'Potty',
      description: 'Minimalist flower pot',
      mainPrice: 500000,
      isNew: true,

      img: 'imgs/home/Products/8.png',
    },
    {
      name: 'Pingky',
      description: 'Cute bed set',
      mainPrice: 14000000,
      discountPrice: 7000000,
      isNew: false,
      commission: 50,
      img: 'imgs/home/Products/7.png',
    },
  ]);
}
