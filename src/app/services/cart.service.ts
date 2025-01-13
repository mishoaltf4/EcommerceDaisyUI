import { Injectable } from '@angular/core';
import {IProduct} from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: IProduct[] = [];
  subtotal = 0;
  total = 0;
  tax = 3;

  constructor() { }

  getCart(): IProduct[] {
    return this.cart;
  }

  addToCart(product: IProduct): void {
    let repeatedProduct = this.cart.find(item => item.id === product.id);

    if (repeatedProduct) {
      repeatedProduct.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }

    this.sumCart()

    console.log(this.cart);
  }

  sumCart(): void {
    this.subtotal = this.cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
    this.total = this.subtotal + this.tax;
  }
}
