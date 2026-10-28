import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tag',
  template: `<span
    class="inline-flex items-center border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
    >{{ label() }}</span
  >`,
})
export class Tag {
  readonly label = input.required<string>();
}
