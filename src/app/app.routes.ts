import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DescriptionComponent } from './pages/single-product/description/description.component';
import { InformationComponent } from './pages/single-product/information/information.component';
import { ReviewsComponent } from './pages/single-product/reviews/reviews.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  {
    path: 'shop',
    loadComponent: () =>
      import('./pages/shop/shop.component').then((mod) => mod.ShopComponent),
    title: 'Shop',
  },
  {
    path: 'comparison',
    loadComponent: () =>
      import('./pages/comparison/comparison.component').then(
        (mod) => mod.ComparisonComponent
      ),
    title: 'Shop',
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/cart/cart.component').then((mod) => mod.CartComponent),
    title: 'Shop',
  },
  { path: '', component: HomeComponent, title: 'Home' },
  {
    path: 'single-product',
    loadComponent: () =>
      import('./pages/single-product/single-product.component').then(
        (mod) => mod.SingleProductComponent
      ),
    title: 'Product',
    children: [
      { path: '', redirectTo: 'description', pathMatch: 'full' },
      { path: 'description', component: DescriptionComponent },
      { path: 'info', component: InformationComponent },
      { path: 'reviews', component: ReviewsComponent },
    ],
  },
];
