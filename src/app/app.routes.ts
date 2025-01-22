import { Routes } from '@angular/router';
import {HomeComponent} from './pages/user/home/home.component';
import {ListingComponent} from './pages/user/listing/listing.component';
import {ProductComponent} from './pages/user/product/product.component';
import {CartComponent} from './pages/user/cart/cart.component';
import {CheckoutComponent} from './pages/user/checkout/checkout.component';
import {SignupComponent} from './pages/user/authentication/signup/signup.component';
import {LoginComponent} from './pages/user/authentication/login/login.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'listing', component: ListingComponent},
  {path: 'listing/:id', component: ProductComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: SignupComponent},
  {path: '**', component: HomeComponent}
];
