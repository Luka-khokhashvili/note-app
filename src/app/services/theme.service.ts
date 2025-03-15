// theme.service.ts
import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  applyThemeOnLoad() {
    const isDarkMode =
      localStorage['theme'] === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDarkMode) {
      this.renderer.addClass(document.documentElement, 'dark');
    } else {
      this.renderer.removeClass(document.documentElement, 'dark');
    }
  }

  setTheme(theme: 'light' | 'dark' | 'system') {
    if (theme === 'dark') {
      localStorage.setItem('theme', 'dark');
      this.renderer.addClass(document.documentElement, 'dark');
    } else if (theme === 'light') {
      localStorage.setItem('theme', 'light');
      this.renderer.removeClass(document.documentElement, 'dark');
    } else {
      localStorage.removeItem('theme');
      this.applyThemeOnLoad();
    }
  }

  getCurrentTheme(): 'light' | 'dark' | 'system' {
    if (localStorage['theme'] === 'dark') {
      return 'dark';
    } else if (localStorage['theme'] === 'light') {
      return 'light';
    } else {
      return 'system';
    }
  }
}
