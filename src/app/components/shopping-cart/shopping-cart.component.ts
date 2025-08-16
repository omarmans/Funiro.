import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  isShown = true;
  close() {
    this.isShown = false;
  }
  shoppingProducts = signal([
    {
      img: 'imgs/single-product/main.png',
      name: 'Asgaard sofa',
      price: 'Rs. 250,000.00',
      amount: 1,
    },
    {
      img: 'imgs/single-product/cart2.png',
      name: 'Casaliving Wood',
      price: 'Rs. 270,000.00',
      amount: 1,
    },
  ]);
}
