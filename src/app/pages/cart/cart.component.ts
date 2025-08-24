import { Component } from '@angular/core';
import { TitlePageRoutingComponent } from '../../components/title-page-routing/title-page-routing.component';
import { BenefitsComponent } from '../shop/benefits/benefits.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [TitlePageRoutingComponent, BenefitsComponent, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {}
