import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  template: `
    <div class="border-t border-line pt-6">
      <span class="label">{{ label() }}</span>
      <h2 class="display mt-4 text-4xl md:text-6xl">{{ title() }}</h2>
      @if (intro()) {
        <p class="mt-5 max-w-2xl text-base text-muted md:text-lg">{{ intro() }}</p>
      }
      <ng-content />
    </div>
  `,
})
export class SectionHeading {
  readonly label = input.required<string>();
  readonly title = input.required<string>();
  readonly intro = input('');
}
