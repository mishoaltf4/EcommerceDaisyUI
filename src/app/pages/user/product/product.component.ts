import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../../interfaces/product.interface';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {CommonModule, NgIf} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {DetailComponent} from '../../../components/product/detail/detail.component';

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
  protected quantity: number = 1;

  constructor(private productService: ProductService, private activedRoute: ActivatedRoute){}

  ngOnInit() {
    const productID:number = Number(this.activedRoute.snapshot.params['id']);
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

  protected readonly faStar = faStar;
  protected readonly faHeart = faHeart;
}
