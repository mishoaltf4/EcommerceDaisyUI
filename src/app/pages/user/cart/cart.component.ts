import { Component } from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {IProduct} from '../../../interfaces/product.interface';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [
    CommonModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cart: IProduct[];

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
  }


  protected readonly length = length;
}
