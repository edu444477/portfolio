import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  computed,
  DOCUMENT,
  effect,
  HostListener,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { alternatePath } from '../core/locale-links';
import { LanguageService } from '../core/language.service';
import { ThemeService } from '../core/theme.service';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.html',
})
export class SiteHeader {
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly platform = inject(PLATFORM_ID);

  readonly language = inject(LanguageService);
  readonly theme = inject(ThemeService);
  readonly content = this.language.content;

  readonly menuOpen = signal(false);
  readonly progress = signal(0);

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  readonly altHref = computed(() => alternatePath(this.currentUrl() ?? '/'));
  readonly homeHref = computed(() => (this.language.lang() === 'en' ? '/en' : '/'));

  constructor() {
    effect(() => {
      if (!isPlatformBrowser(this.platform)) {
        return;
      }

      this.document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platform)) {
      return;
    }

    const element = this.document.documentElement;
    const max = element.scrollHeight - element.clientHeight;
    this.progress.set(max > 0 ? element.scrollTop / max : 0);
  }

  @HostListener('document:keydown.escape')
  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
