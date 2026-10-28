import { computed, DOCUMENT, inject, Injectable, signal } from '@angular/core';
import { CONTENT, type SiteContent } from '../content';
import type { Lang } from '../content/types';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly doc = inject(DOCUMENT);
  private readonly current = signal<Lang>('es');

  readonly lang = this.current.asReadonly();
  readonly content = computed<SiteContent>(() => CONTENT[this.current()]);

  set(lang: Lang): void {
    this.current.set(lang);
    this.doc.documentElement.lang = lang;
  }
}
