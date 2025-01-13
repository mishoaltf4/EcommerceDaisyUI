import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../../interfaces/product.interface';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {CommonModule, NgIf} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {DetailComponent} from '../../../components/product/detail/detail.component';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-product',
  imports: [
    CommonModule,
    FontAwesomeModule,
    DetailComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  product: IProduct | undefined;
  products: IProduct[] | null = null;
  protected quantity: number = 1;

  constructor(
    private productService: ProductService,
    private activedRoute: ActivatedRoute,
    private cartService: CartService
  ){}

  ngOnInit() {
    const productID:number = Number(this.activedRoute.snapshot.params['id']);
    this.product = this.productService.getProductByID(productID);
    this.products = this.productService.getProducts();
  }

  getProduct(productID:number){
    this.product = this.productService.getProductByID(productID);
  }

  protected quantityIncrement():void{
    this.quantity++;
  }

  protected quantityDecrement():void{
    if(this.quantity != 1){
      this.quantity--;
    }
  }

  addToCart(product:IProduct){
    this.cartService.addToCart(product);
  }

  protected readonly faStar = faStar;
  protected readonly faHeart = faHeart;
}
