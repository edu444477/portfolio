import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { prefersReducedMotion } from '../core/gsap';

@Directive({ selector: '[appCountUp]' })
export class CountUpDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platform = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;
  private frame?: number;

  readonly value = input.required<number>({ alias: 'appCountUp' });

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;
    const target = this.value();

    if (!isPlatformBrowser(this.platform) || prefersReducedMotion() || !('IntersectionObserver' in window)) {
      node.textContent = String(target);
      return;
    }

    node.textContent = '0';

    this.observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) {
          return;
        }

        this.observer?.disconnect();
        this.animate(target);
      },
      { threshold: 0.6 },
    );

    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.frame) {
      cancelAnimationFrame(this.frame);
    }
  }

  private animate(target: number): void {
    const node = this.el.nativeElement;
    const duration = 900;
    const start = performance.now();

    const tick = (now: number): void => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(2, -10 * progress);
      node.textContent = String(Math.round(target * eased));

      if (progress < 1) {
        this.frame = requestAnimationFrame(tick);
      } else {
        node.textContent = String(target);
      }
    };

    this.frame = requestAnimationFrame(tick);
  }
}
