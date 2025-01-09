import {Component, OnDestroy, OnInit} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faGithub, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {Subscription} from 'rxjs';
import {ThemeService} from '../../../services/theme.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnDestroy{

  private subscription!: Subscription;
  protected logo = 'Footer.svg'

  protected readonly faGithub = faGithub;
  protected readonly faInstagram = faInstagram;
  protected readonly faYoutube = faYoutube;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.updateLogo();
    this.subscription = this.themeService.themeChange.subscribe(() => {
      this.updateLogo();
    });
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateLogo(){
    const currentTheme = this.themeService.getCurrentTheme();
    this.logo = currentTheme === 'light' ? 'Footer.svg' : 'Footer-white.svg';
  }
}
