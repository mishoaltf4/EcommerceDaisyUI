import {Component} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faTruck} from '@fortawesome/free-solid-svg-icons/faTruck';
import {faAward} from '@fortawesome/free-solid-svg-icons/faAward';
import {faShieldHalved} from '@fortawesome/free-solid-svg-icons';
import {ProductService} from '../../../services/product.service';
import {IProduct} from '../../../interfaces/product.interface';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{

  products: IProduct[];

  constructor(private productService: ProductService, private router: Router) {
    this.products = this.productService.getProducts();
  }

  goToProduct(productId: number) {
    this.router.navigate(['/listing/'+productId]);
  }

  goToListing(){
    this.router.navigate(['/listing']);
  }


  protected readonly faTruck = faTruck;
  protected readonly faAward = faAward;
  protected readonly faShieldHalved = faShieldHalved;
}
