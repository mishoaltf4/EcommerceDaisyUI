import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ThemeService} from '../../../services/theme.service';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faShoppingCart, faAngleDown, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    FontAwesomeModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {

  logo: string = '/images/site-logo.svg';
  private subscription!: Subscription;

  faAngle = faAngleDown
  faCart = faShoppingCart
  faUser = faUser;
  faMenu = faBars;

  constructor(private themeService: ThemeService) {

  }

  ngOnInit() {
    this.updateLogo();
    this.subscription = this.themeService.themeChange.subscribe(() => {
      this.updateLogo();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateLogo(): void {
    const currentTheme = this.themeService.getCurrentTheme();
    this.logo = currentTheme === 'light' ? 'site-logo.svg' : 'whiteLogo.svg';
  }

  protected readonly faBars = faBars;
}
