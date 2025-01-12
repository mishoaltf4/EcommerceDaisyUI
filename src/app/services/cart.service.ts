import { Injectable } from '@angular/core';
import {IProduct} from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: IProduct[] = [];

  constructor() { }

  getCart(): IProduct[] {
    return this.cart;
  }

  addToCart(product: IProduct): void{
    this.cart.push(product);
    console.log(this.cart);
  }
}
