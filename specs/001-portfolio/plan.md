# Plan técnico — Portfolio

## Stack
- Angular 22.2 standalone, signals, zoneless.
- `@angular/build:application` con `outputMode: "static"` → HTML prerenderizado.
- Tailwind CSS 4.3 vía `@tailwindcss/postcss`, tokens en `src/styles.css`.
- GSAP 3.15 + ScrollTrigger con import dinámico.
- Vercel: estáticos + una función Node en `api/contact.ts`.
- Web3Forms como proveedor de correo (plan gratuito, sin dominio propio).

## Rutas
| ES | EN | Componente |
|---|---|---|
| `/` | `/en` | `HomePage` |
| `/proyectos/la-nueva-era` | `/en/projects/la-nueva-era` | `ProjectPage` |
| `/proyectos/portfolio` | `/en/projects/portfolio` | `ProjectPage` |
| `/privacidad` | `/en/privacy` | `LegalPage` |
| `/aviso-legal` | `/en/legal-notice` | `LegalPage` |
| `**` | `**` | `NotFoundPage` |

Cada ruta declara su idioma con `languageGuard`, que actualiza `LanguageService` y `<html lang>` antes de renderizar. Así el prerender sale con el idioma correcto.

## Contenido
- `src/app/content/types.ts` define `SiteContent`.
- `es.ts` y `en.ts` implementan el mismo contrato. TypeScript falla si falta un campo.
- `LanguageService` expone `content()` como signal derivado del idioma.

## Estado y servicios
- `ThemeService`: clase `.dark`, `localStorage`, `prefers-color-scheme`.
- `SeoService`: title, description, canonical, hreflang y Open Graph por ruta.
- `LanguageService`: idioma activo y contenido.
- `gsap.ts`: singleton de carga diferida.

## Animación
- `RevealDirective`: entrada al hacer scroll, una vez.
- `MagneticDirective`: solo puntero fino.
- `CountUpDirective`: cifras de métricas con `IntersectionObserver`.
- Hero: timeline GSAP con líneas enmascaradas.

## Formulario
1. Cliente valida con Reactive Forms.
2. `POST /api/contact` con JSON.
3. Función: método, rate limit por IP, honeypot, longitudes, consentimiento.
4. Envía a Web3Forms con `WEB3FORMS_ACCESS_KEY`.
5. Devuelve `{ ok: true }` o error controlado.

## SEO y rendimiento
- Prerender de las 10 rutas.
- `sitemap.xml`, `robots.txt`, `humans.txt`, OG image 1200×630.
- Fuentes autoalojadas y precargadas por Angular.
- Sin analítica ni cookies.

## Despliegue
- Repo público `edu444477/portfolio`.
- Vercel: build `npm run build`, output `dist/portfolio/browser`.
- Variable `WEB3FORMS_ACCESS_KEY` en Production/Preview.
- Dominio `eduardoorellana.vercel.app`.

## Riesgos
- **Secretos de La Nueva Era** en el historial del repo público → rotar contraseña.
- **PythonAnywhere** puede tardar en despertar → aviso en el caso de estudio.
- **Imágenes del TFG** con baja resolución → sustituir por capturas nuevas si se puede.
- **NIF** ausente en el aviso legal → confirmar necesidad.
