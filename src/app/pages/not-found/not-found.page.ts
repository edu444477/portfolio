import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
})
export class NotFoundPage {
  readonly content = inject(LanguageService).content;

  constructor() {
    inject(SeoService).apply(this.content().meta.notFound, this.content().locale);
  }
}
