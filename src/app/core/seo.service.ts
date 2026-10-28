import { DOCUMENT, inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import type { PageMeta } from '../content/types';

export const SITE_URL = 'https://eduardoorellana.vercel.app';


@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  apply(page: PageMeta, locale: 'es_ES' | 'en_US'): void {
    const url = `${SITE_URL}${page.path}`;
    const alternate = `${SITE_URL}${page.alternatePath}`;

    this.title.setTitle(page.title);

    this.setTag('name', 'description', page.description);
    this.setTag('property', 'og:title', page.title);
    this.setTag('property', 'og:description', page.description);
    this.setTag('property', 'og:type', 'website');
    this.setTag('property', 'og:url', url);
    this.setTag('property', 'og:locale', locale);
    this.setTag('property', 'og:site_name', 'Eduardo Orellana');
    this.setTag('property', 'og:image', `${SITE_URL}/images/og-image.png`);
    this.setTag('name', 'twitter:card', 'summary_large_image');
    this.setTag('name', 'twitter:title', page.title);
    this.setTag('name', 'twitter:description', page.description);

    this.setLink('canonical', url);
    this.setHreflang('es', locale === 'es_ES' ? url : alternate);
    this.setHreflang('en', locale === 'en_US' ? url : alternate);
    this.setHreflang('x-default', locale === 'es_ES' ? url : alternate);
  }

  private setTag(attr: 'name' | 'property', key: string, value: string): void {
    const selector = `${attr}="${key}"`;
    if (this.meta.getTag(selector)) {
      this.meta.updateTag({ [attr]: key, content: value });
    } else {
      this.meta.addTag({ [attr]: key, content: value });
    }
  }

  private setLink(rel: string, href: string): void {
    let link = this.doc.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
    if (!link) {
      link = this.doc.createElement('link');
      link.rel = rel;
      this.doc.head.appendChild(link);
    }
    link.href = href;
  }

  private setHreflang(lang: string, href: string): void {
    let link = this.doc.head.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${lang}"]`);
    if (!link) {
      link = this.doc.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      this.doc.head.appendChild(link);
    }
    link.href = href;
  }
}
