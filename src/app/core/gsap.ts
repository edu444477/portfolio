type GsapModule = typeof import('gsap');

let loader: Promise<{ gsap: GsapModule['gsap'] }> | null = null;

/**
 * Carga diferida de GSAP. Solo se llama cuando hace falta (scroll o
 * elementos bajo el pliegue), nunca en el arranque de la página.
 */
export function loadGsap(): Promise<{ gsap: GsapModule['gsap'] }> {
  loader ??= import('gsap').then((module) => ({ gsap: module.gsap ?? module.default }));

  return loader;
}

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}
