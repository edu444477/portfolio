---
name: angular-ui
description: Patrones de Angular 22, Tailwind 4 y GSAP de este portfolio. Úsala al crear componentes, rutas, animaciones o estilos.
---

# Angular UI

## Convenciones
- Componentes standalone. Sin `standalone: true` (es el valor por defecto).
- Estado con `signal`, `computed` y `input()`. Sin `BehaviorSubject` para estado local.
- Zoneless: no depender de `setTimeout` para actualizar la vista.
- Control de flujo `@if`, `@for` (siempre con `track`) y `@switch`.
- Archivos: `feature.ts` + `feature.html`. Selector `app-feature`.

## SSR y prerender
- `outputMode: "static"`. Cualquier acceso a `window`, `document`, `navigator` o `localStorage` va detrás de `isPlatformBrowser(inject(PLATFORM_ID))`.
- GSAP se importa con `loadGsap()` dentro de `ngAfterViewInit`, nunca en el ámbito del módulo.
- El HTML prerenderizado debe tener contenido real: nada de datos que solo existan en cliente.

## Estilos
- Tailwind 4 con tokens de `src/styles.css`: `bg-bg`, `text-ink`, `border-line`, `text-muted`, `text-accent-text`.
- No usar colores literales salvo el fondo de una imagen de marca.
- Clases reutilizables: `shell`, `sheet`, `label`, `display`, `btn`, `field`, `link-arrow`.
- Radios de 2 px. Sin sombras decorativas ni blur.

## Accesibilidad
- Un solo `h1` por página.
- `aria-label` en botones con icono.
- `aria-live="polite"` para estados de formulario.
- Foco visible siempre; nunca `outline: none` sin sustituto.
- Imágenes con `alt`; decorativas con `alt=""` y `aria-hidden`.

## Animación
- `appReveal` para entradas al hacer scroll.
- `appMagnetic` solo en CTAs.
- `appCountUp` solo en cifras verificadas.
- Respetar `prefers-reduced-motion` sin excepciones.

## Antes de terminar
`npm run build` y revisar que el número de rutas prerenderizadas no baje.
