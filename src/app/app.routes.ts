import { Routes } from '@angular/router';
import {HomeComponent} from './pages/user/home/home.component';
import {ListingComponent} from './pages/user/listing/listing.component';
import {ProductComponent} from './pages/user/product/product.component';
import {CartComponent} from './pages/user/cart/cart.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'listing', component: ListingComponent},
  {path: 'listing/:id', component: ProductComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', component: HomeComponent}
];
