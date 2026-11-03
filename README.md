# Portfolio — Eduardo Orellana Pomares

Portfolio personal bilingüe (ES/EN) de un desarrollador Full Stack en Marbella.
Construido con Angular 22, Tailwind CSS 4 y GSAP, con prerender estático y despliegue en Vercel.

**Demo:** https://eduardoorellana.vercel.app

![Home del portfolio en tema oscuro](public/images/og-image.png)

## Qué hay dentro

- **Home** con hero, trabajo seleccionado, otros trabajos, trayectoria, stack, sobre mí y contacto.
- **Dos casos de estudio:** La Nueva Era (TFG con Flask + React) y este mismo portfolio.
- **Español e inglés** completos, en rutas propias y prerenderizadas.
- **Tema claro y oscuro** con preferencia del sistema y toggle persistente.
- **Formulario de contacto** con validación en cliente y campo trampa, entregado con Web3Forms desde el navegador.
- **Privacidad y aviso legal** en los dos idiomas.

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Angular 22 standalone, signals, zoneless, `outputMode: "static"` |
| Estilos | Tailwind CSS 4 con tokens CSS-first |
| Animación | GSAP 3 con carga diferida; el revelado en scroll usa IntersectionObserver |
| Tipografía | Archivo Variable, Inter Variable y JetBrains Mono (autoalojadas) |
| Formulario | Web3Forms desde el navegador (plan gratuito) |
| Tests | Vitest (unidad) y Playwright (E2E) |
| Hosting | Vercel, plan gratuito |

## Comandos

```bash
npm install          # dependencias
npm start            # dev en http://localhost:4200
npm run build        # build + prerender en dist/portfolio/browser
npm run test         # tests unitarios
npm run test:e2e     # smoke tests con Playwright (build + servidor estático)
```

## Estructura

```text
src/app/
├─ content/      # SiteContent tipado: types.ts, es.ts, en.ts
├─ core/         # idioma, tema, SEO, guardas, GSAP
├─ layout/       # cabecera y pie
├─ pages/        # home, caso de estudio, legal, 404
└─ shared/       # directivas y componentes de UI
scripts/         # postbuild y generación del CV público
docs/            # brief de contenido, sistema de diseño, constitución
specs/           # especificación, plan y tareas
```

## Decisiones

- **Contenido tipado, no CMS.** Un único modelo `SiteContent` obliga a que ES y EN tengan la misma forma. Si falta una clave, el build falla antes de publicar. Los tests de paridad lo comprueban.
- **Prerender estático.** Cada ruta se genera como HTML en build time; Vercel sirve archivos estáticos y el usuario recibe contenido antes de que arranque JavaScript.
- **GSAP fuera del bundle inicial.** Se importa dinámicamente solo en el navegador y se desactiva con `prefers-reduced-motion`.
- **Sin cookies ni analítica.** Solo se guarda la preferencia de tema en `localStorage`.
- **Formulario sin backend propio.** Web3Forms gratis solo acepta envíos desde el cliente, así que el formulario llama a su API directamente y no hay función serverless que mantener.
- **Contenido verificable.** Las métricas del TFG (18 endpoints, 12 tablas, 10 juegos, 5 categorías) se midieron sobre la API real. No se afirman tests que no existen.
- **CV sin datos de contacto sensibles.** El PDF publicado se genera con `scripts/cv/rebuild-cv.py` a partir del CV original (privado): conserva el diseño y quita el teléfono, dejando email y ubicación.

## Formulario de contacto

No hay secretos ni variables de entorno: Web3Forms solo admite envíos desde el navegador
en su plan gratuito (el envío desde servidor exige Pro). La access key está en
`src/app/core/web3forms.ts`; es un identificador público de formulario, no una
credencial, y el spam se frena con el campo trampa `website`.

## Accesibilidad

Contraste AA, foco visible, navegación completa por teclado, enlace de salto, `aria-live` en el formulario, `aria-expanded` en el menú móvil y respeto a `prefers-reduced-motion`.

## Licencia

El código se publica para consulta y aprendizaje. Los textos, las capturas y la identidad visual del portfolio son de Eduardo Orellana Pomares. Las marcas y capturas de Time At Work, A-Safe Digital y La Nueva Era pertenecen a sus titulares y se muestran con autorización.
