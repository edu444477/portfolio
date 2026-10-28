import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { prefersReducedMotion } from '../core/gsap';

/**
 * Botones magnéticos sin GSAP: un translate con transición CSS. Así el
 * hero no arrastra la librería de animación en la carga inicial.
 */
@Directive({ selector: '[appMagnetic]' })
export class MagneticDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platform = inject(PLATFORM_ID);
  private cleanup?: () => void;

  ngAfterViewInit(): void {
    if (
      !isPlatformBrowser(this.platform) ||
      prefersReducedMotion() ||
      !window.matchMedia('(pointer: fine)').matches
    ) {
      return;
    }

    const node = this.el.nativeElement;
    let frame = 0;

    const apply = (x: number, y: number): void => {
      node.style.transform = x === 0 && y === 0 ? '' : `translate(${x}px, ${y}px)`;
    };

    const onMove = (event: MouseEvent): void => {
      if (frame) {
        return;
      }

      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = node.getBoundingClientRect();
        apply(
          (event.clientX - rect.left - rect.width / 2) * 0.16,
          (event.clientY - rect.top - rect.height / 2) * 0.22,
        );
      });
    };

    const onLeave = (): void => {
      apply(0, 0);
    };

    node.style.transition = 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)';
    node.addEventListener('mousemove', onMove);
    node.addEventListener('mouseleave', onLeave);

    this.cleanup = () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      node.removeEventListener('mousemove', onMove);
      node.removeEventListener('mouseleave', onLeave);
      node.style.transform = '';
      node.style.transition = '';
    };
  }

  ngOnDestroy(): void {
    this.cleanup?.();
  }
}
