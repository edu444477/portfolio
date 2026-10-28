import { Component, input } from '@angular/core';
import { CountUpDirective } from '../count-up.directive';

@Component({
  selector: 'app-metric',
  imports: [CountUpDirective],
  template: `
    <div class="flex flex-col">
      <span class="display text-4xl md:text-5xl" [appCountUp]="value()"></span>
      <span class="label mt-2">{{ label() }}</span>
    </div>
  `,
})
export class Metric {
  readonly value = input.required<number>();
  readonly label = input.required<string>();
}
