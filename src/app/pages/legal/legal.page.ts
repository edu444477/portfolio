import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../core/language.service';
import { SeoService } from '../../core/seo.service';


type LegalKey = 'privacy' | 'notice';

@Component({
  selector: 'app-legal',
  imports: [],
  templateUrl: './legal.page.html',
})
export class LegalPage {
  private readonly route = inject(ActivatedRoute);
  private readonly language = inject(LanguageService);
  private readonly seo = inject(SeoService);

  readonly content = this.language.content;

  private readonly key = (): LegalKey =>
    (this.route.snapshot.data['doc'] as LegalKey | undefined) ?? 'privacy';

  readonly page = computed(() => this.content().legal[this.key()]);

  constructor() {
    this.seo.apply(this.page().seo, this.content().locale);
  }
}
