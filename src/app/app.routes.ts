import { Routes } from '@angular/router';
import {HomeComponent} from './pages/user/home/home.component';
import {ListingComponent} from './pages/user/listing/listing.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'listing', component: ListingComponent},
  {path: '**', component: HomeComponent}
];
