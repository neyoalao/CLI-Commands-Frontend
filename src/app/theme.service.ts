import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  // @ts-ignore
  private colorTheme: string;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  // tslint:disable-next-line:typedef
  initTheme() {
    this.getColorTheme();
    this.renderer.addClass(document.body, this.colorTheme);
  }

  // tslint:disable-next-line:typedef
  update(theme: 'dark-mode' | 'light-mode') {
    this.setColorTheme(theme);
    const previousColorTheme =
      theme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    this.renderer.removeClass(document.body, previousColorTheme);
    this.renderer.addClass(document.body, theme);
  }

  // tslint:disable-next-line:typedef
  isDarkMode() {
    return this.colorTheme === 'dark-mode';
  }

  // tslint:disable-next-line:typedef
  private setColorTheme(theme: string) {
    this.colorTheme = theme;
    localStorage.setItem('user-theme', theme);
  }

  // tslint:disable-next-line:typedef
  private getColorTheme() {
    if (localStorage.getItem('user-theme')) {
      // @ts-ignore
      this.colorTheme = localStorage.getItem('user-theme');
    } else {
      this.colorTheme = 'light-mode';
    }
  }
}
