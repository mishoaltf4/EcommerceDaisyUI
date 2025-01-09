import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../../interfaces/product.interface';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute} from '@angular/router';
import {CommonModule, NgIf} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  product: IProduct | undefined;

  constructor(private productService: ProductService, private activedRoute: ActivatedRoute){}

  ngOnInit() {
    const productID:number = Number(this.activedRoute.snapshot.params['id']);
    this.product = this.productService.getProductByID(productID);
  }

  protected readonly faStar = faStar;
}
