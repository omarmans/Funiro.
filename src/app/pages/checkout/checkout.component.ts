import { Component } from '@angular/core';
import { TitlePageRoutingComponent } from '../../components/title-page-routing/title-page-routing.component';
import { FormsModule } from '@angular/forms';
import { BenefitsComponent } from '../shop/benefits/benefits.component';

@Component({
  selector: 'app-checkout',
  imports: [TitlePageRoutingComponent, FormsModule, BenefitsComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  paymentMethod: string = '';
}
