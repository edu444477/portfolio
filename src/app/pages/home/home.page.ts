import {
  Component,
  inject,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/language.service';
import { SeoService } from '../../core/seo.service';
import { MagneticDirective } from '../../shared/magnetic.directive';
import { RevealDirective } from '../../shared/reveal.directive';
import { Metric } from '../../shared/ui/metric';
import { ProjectCard } from '../../shared/ui/project-card';
import { SectionHeading } from '../../shared/ui/section-heading';
import { Tag } from '../../shared/ui/tag';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-home',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    RevealDirective,
    MagneticDirective,
    SectionHeading,
    ProjectCard,
    Metric,
    Tag,
  ],
  templateUrl: './home.page.html',
})
export class HomePage {
  private readonly seo = inject(SeoService);

  readonly language = inject(LanguageService);
  readonly content = this.language.content;

  readonly status = signal<FormStatus>('idle');

  readonly form = inject(FormBuilder).nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    consent: [false, Validators.requiredTrue],
    website: [''],
  });

  constructor() {
    this.seo.apply(this.content().meta.home, this.content().locale);
  }

  onPointerMove(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement | null;
    if (!target) {
      return;
    }

    const rect = target.getBoundingClientRect();
    target.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    target.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }

  async submit(): Promise<void> {
    if (this.form.invalid || this.status() === 'sending') {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(this.form.getRawValue()),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      this.status.set('success');
      this.form.reset();
    } catch {
      this.status.set('error');
    }
  }
}
