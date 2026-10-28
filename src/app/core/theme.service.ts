import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platform = inject(PLATFORM_ID);
  private readonly current = signal<Theme>('dark');
  private media?: MediaQueryList;

  readonly theme = this.current.asReadonly();

  init(): void {
    if (!isPlatformBrowser(this.platform)) {
      return;
    }

    const stored = this.readStored();
    const view = this.document.defaultView;
    this.media =
      typeof view?.matchMedia === 'function'
        ? view.matchMedia('(prefers-color-scheme: dark)')
        : undefined;

    this.apply(stored ?? (this.media?.matches ? 'dark' : 'light'));

    this.media?.addEventListener('change', (event) => {
      if (!this.readStored()) {
        this.apply(event.matches ? 'dark' : 'light');
      }
    });
  }

  toggle(): void {
    if (!isPlatformBrowser(this.platform)) {
      return;
    }

    const next: Theme = this.current() === 'dark' ? 'light' : 'dark';
    this.apply(next);
    try {
      this.document.defaultView?.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* almacenamiento bloqueado */
    }
  }

  private apply(theme: Theme): void {
    this.current.set(theme);
    const root = this.document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
  }

  private readStored(): Theme | null {
    try {
      const value = this.document.defaultView?.localStorage.getItem(STORAGE_KEY);
      return value === 'light' || value === 'dark' ? value : null;
    } catch {
      return null;
    }
  }
}
