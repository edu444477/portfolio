import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../core/language.service';
import { SeoService } from '../../core/seo.service';

import { Metric } from '../../shared/ui/metric';

type CaseKey = 'laNuevaEra' | 'portfolio';

@Component({
  selector: 'app-project',
  imports: [Metric],
  templateUrl: './project.page.html',
})
export class ProjectPage {
  private readonly route = inject(ActivatedRoute);
  private readonly language = inject(LanguageService);
  private readonly seo = inject(SeoService);

  readonly content = this.language.content;

  private readonly caseKey = (): CaseKey =>
    (this.route.snapshot.data['case'] as CaseKey | undefined) ?? 'laNuevaEra';

  readonly project = computed(() => this.content().caseStudies[this.caseKey()]);
  readonly backHref = computed(() =>
    this.language.lang() === 'en' ? '/en#work' : '/#work',
  );

  constructor() {
    this.seo.apply(this.project().seo, this.content().locale);
  }

  scrollTo(id: string, event: Event): void {
    event.preventDefault();

    const target = document.getElementById(id);
    if (!target) {
      return;
    }

    const header = document.querySelector('header');
    const offset = (header?.getBoundingClientRect().height ?? 0) + 24;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    const behavior: ScrollBehavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth';

    window.scrollTo({ top, behavior });
    history.replaceState(null, '', `${location.pathname}${location.search}#${id}`);
  }
}
