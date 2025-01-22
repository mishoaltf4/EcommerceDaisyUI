import {Component} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {IProduct} from '../../../interfaces/product.interface';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listing',
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent{
  products: IProduct[];
  appliedFilters: string[] = [];

  selectedFilter: {[key: string]: boolean} = {};

  constructor(private productService: ProductService, private router: Router) {
    this.products = productService.getProducts();
    console.log(this.products);
  }

  protected getCategory(e: any) {
    if(e.target.checked) {
      if(!this.appliedFilters.includes(e.target.name)) {
        this.appliedFilters.push(e.target.name);
        this.products = this.productService.getProductsByCategory(e.target.name);
      }
    }else{
      this.removeFilter(e.target.name);
    }
  }

  value: number = 500;
  tooltipPosition: string = '50%';

  protected updateTooltipPosition(event: Event): void {
    const input = event.target as HTMLInputElement;
    const percent =
      ((+input.value - +input.min) / (+input.max - +input.min)) * 100;
    this.tooltipPosition = `calc(${percent}% - 0px)`;
  }

  protected removeFilter(filter: string): void {
    this.appliedFilters = this.appliedFilters.filter((f) => f !== filter);
    this.selectedFilter[filter] = false;
    if(this.appliedFilters.length === 0){
      this.products = this.productService.getProducts();
    }
  }

  protected readonly faXmark = faXmark;
  protected readonly length = length;

  goToProduct(id: number): void{
    this.router.navigate(['/listing', id]);
  }
}
