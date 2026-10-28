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
import { loadGsap, prefersReducedMotion } from '../core/gsap';

/**
 * Revelado al entrar en pantalla. GSAP se carga en ese momento y no en el
 * arranque: la home no paga la librería hasta que el usuario baja.
 */
@Directive({ selector: '[appReveal]' })
export class RevealDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platform = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;
  private context?: { revert(): void };
  private destroyed = false;

  readonly delay = input<number | string>(0, { alias: 'appReveal' });
  readonly distance = input(24);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platform) || prefersReducedMotion()) {
      return;
    }

    const node = this.el.nativeElement;

    this.observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) {
          return;
        }

        this.observer?.disconnect();
        void this.reveal(node);
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );

    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    this.observer?.disconnect();
    this.context?.revert();
  }

  private async reveal(node: HTMLElement): Promise<void> {
    const { gsap } = await loadGsap();

    if (this.destroyed) {
      return;
    }

    this.context = gsap.context(() => {
      gsap.from(node, {
        opacity: 0,
        y: this.distance(),
        duration: 0.9,
        ease: 'expo.out',
        delay: Number(this.delay()) || 0,
        clearProps: 'transform,opacity',
      });
    });
  }
}
