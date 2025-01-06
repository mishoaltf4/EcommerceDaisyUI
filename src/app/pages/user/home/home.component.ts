import {Component} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faTruck} from '@fortawesome/free-solid-svg-icons/faTruck';
import {faAward} from '@fortawesome/free-solid-svg-icons/faAward';
import {faShieldHalved} from '@fortawesome/free-solid-svg-icons';
import {ProductService} from '../../../services/product.service';
import {IProduct} from '../../../interfaces/product.interface';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{

  products: IProduct[];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }


  protected readonly faTruck = faTruck;
  protected readonly faAward = faAward;
  protected readonly faShieldHalved = faShieldHalved;
}
