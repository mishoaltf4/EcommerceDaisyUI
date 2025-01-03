
import {inject, Injectable, signal} from '@angular/core';
import {DOCUMENT} from '@angular/common';

export type Theme = 'dim' | 'light';
@Injectable({
  providedIn: 'root'
})


export class ThemeService {

  private readonly document = inject(DOCUMENT);
  private readonly currentTheme= signal<Theme>('light')
  private readonly themeKey = 'preferred-theme';
  private readonly dataTheme = 'data-theme'

  constructor() {
    this.setTheme(this.getThemeFromLocalStorage());
  }


  toggleTheme(){
    if(this.currentTheme() === 'light'){
      this.setTheme('dim');
    }else{
      this.setTheme('light');
    }
  }

  private setTheme(theme: Theme) {
    this.currentTheme.set(theme)
    this.document.documentElement.setAttribute(this.dataTheme, theme);
    this.setThemeInLocalStorage(theme);
  }

  private setThemeInLocalStorage(theme: Theme) {
    localStorage.setItem(this.themeKey, theme)
  }

  private getThemeFromLocalStorage() {
    return localStorage.getItem(this.themeKey) as Theme ?? 'light';
  }

}
