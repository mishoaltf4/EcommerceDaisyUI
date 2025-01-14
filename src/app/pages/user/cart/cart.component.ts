import { Component } from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {IProduct} from '../../../interfaces/product.interface';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cart: IProduct[];
  protected subtotal: number;
  protected total: number;
  protected tax: number;


  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
    this.subtotal = this.cartService.subtotal;
    this.total = this.cartService.total;
    this.tax = this.cartService.tax;
  }
}
