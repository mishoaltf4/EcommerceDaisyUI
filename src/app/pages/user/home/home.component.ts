import { Component } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faTruck} from '@fortawesome/free-solid-svg-icons/faTruck';
import {faAward} from '@fortawesome/free-solid-svg-icons/faAward';
import {faShieldHalved} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  protected readonly faTruck = faTruck;
  protected readonly faAward = faAward;
  protected readonly faShieldHalved = faShieldHalved;
}
