# AGENTS.md

## Proyecto
Portfolio personal de Eduardo Orellana Pomares. Angular 22 standalone con signals, zoneless y prerender estático; Tailwind 4; GSAP; despliegue en Vercel.

## Comandos
- `npm start` — servidor de desarrollo en `http://localhost:4200`.
- `npm run build` — build de producción y prerender en `dist/portfolio/browser`.
- `npm run test` — tests unitarios (Vitest).
- `npm run test:e2e` — smoke tests con Playwright.

## Fuente de verdad
- `docs/content-brief.md` manda sobre cualquier texto, métrica o afirmación.
- Si falta un dato, se pregunta. Nunca se inventa experiencia, cifra o tecnología.
- `docs/private-notes.md` no se versiona ni se copia a la web.

## Reglas
1. Contenido en `src/app/content` (ES y EN con el mismo tipo). Si añades un campo, añádelo a los dos idiomas.
2. Copy visible en español e inglés. Código, nombres de archivo y commits en inglés.
3. No afirmar tests, usuarios o métricas que no estén verificadas en el brief.
4. Accesibilidad AA: foco visible, teclado, contraste, `prefers-reduced-motion`.
5. No añadir dependencias sin justificarlo. GSAP se carga de forma diferida y solo en navegador.
6. Los tokens visuales viven en `src/styles.css`. No hay colores hardcodeados en componentes salvo casos de marca.
7. Nada de secretos en el repo. Variables de entorno en Vercel.
8. No romper el prerender: todo acceso a `window`, `document` o `localStorage` va protegido con `isPlatformBrowser`.

## Estructura
- `src/app/pages` — home, caso de estudio, legal, 404.
- `src/app/layout` — cabecera y pie.
- `src/app/shared` — directivas y componentes reutilizables.
- `src/app/core` — idioma, tema, SEO, guardas y GSAP.
- `api/contact.ts` — función serverless del formulario.
- `docs/` y `specs/` — decisiones y especificación.

## Verificación antes de publicar
`npm run build` sin errores + revisión visual en claro/oscuro y móvil + formulario probado + enlaces externos vivos.
