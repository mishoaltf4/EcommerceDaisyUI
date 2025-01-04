import {Component, inject, model} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ThemeService} from './services/theme.service';
import {HeaderComponent} from './components/layout/header/header.component';
import {FooterComponent} from './components/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  themeService = inject(ThemeService);

  isLight = model(true)
}
