import { Component } from '@angular/core';
import { TitlePageRoutingComponent } from '../../components/title-page-routing/title-page-routing.component';
import { DynamicHeaderComponent } from '../../components/dynamic-header/dynamic-header.component';
import { BenefitsComponent } from '../shop/benefits/benefits.component';

@Component({
  selector: 'app-contact',
  imports: [
    TitlePageRoutingComponent,
    DynamicHeaderComponent,
    BenefitsComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
