import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { BrowseComponent } from './browse/browse.component';
import { ProductsComponent } from './products/products.component';
import { RoomsComponent } from './rooms/rooms.component';
import { FuniroFurnitureComponent } from './funiro-furniture/funiro-furniture.component';

@Component({
  selector: 'app-home',
  imports: [
    LandingComponent,
    BrowseComponent,
    ProductsComponent,
    RoomsComponent,
    FuniroFurnitureComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
