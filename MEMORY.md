# MEMORY.md

## Estado (2026-10-28)
- Angular 22.2 + Tailwind 4.3 + GSAP 3.15 funcionando; 12 rutas prerenderizadas.
- Home, dos casos de estudio, legal, 404 (con `404.html` para Vercel) y formulario.
- Contenido ES/EN tipado y unificado; tests de paridad.
- Tests: 12 unitarios (Vitest) y 18 E2E (Playwright, incluye axe).
- Lighthouse local sobre build comprimido: 93 rendimiento, 100 accesibilidad, 100 buenas prácticas, 100 SEO.
- Repo público: `https://github.com/edu444477/portfolio`.
- Deploy en producción: `https://portfolio-sooty-zeta-11.vercel.app` (proyecto `portfolio`, plan hobby).
- `/api/contact` responde en producción: `GET` → 405, `POST` inválido → 400, `POST` válido → 500 `not_configured` hasta que exista la clave.
- Pendiente: `WEB3FORMS_ACCESS_KEY`, dominio `eduardoorellana.vercel.app`, limpieza del repo de La Nueva Era y perfil de GitHub.

## Decisiones
- Angular standalone + signals + zoneless + `outputMode: static`.
- Tailwind 4 con tokens CSS y modo oscuro por clase.
- Intro del hero en CSS; GSAP solo se carga al hacer scroll (fuera del camino crítico).
- Contenido en TypeScript; sin CMS.
- Formulario: `/api/contact` en Vercel → Web3Forms (clave en entorno).
- La función usa la firma `fetch` de Vercel (`export function GET/POST` que devuelven `Response`) y el repo declara `"type": "module"`; con `export default (req, res)` el runtime `nodejs24.x` cargaba el `.js` como CommonJS y fallaba.
- Español en `/`, inglés en `/en`; rutas de proyecto traducidas.
- Inglés publicado como “técnico (lectura y escritura)”, sin niveles inventados.
- La Nueva Era es TFG, no experiencia de empresa. Angular es proyecto propio.
- Métricas de La Nueva Era verificadas: 18 endpoints, 12 tablas, 10 juegos, 5 categorías, 12 productos. 0 tests.
- TAW y A-Safe se muestran con nombre, enlaces y capturas: permiso confirmado y sin NDA.

## Riesgos
- El repo público de La Nueva Era expone credenciales de MySQL en el historial. Hay que rotar la contraseña en PythonAnywhere.
- El CV descargable incluye teléfono; decidir si se publica así o se genera una versión sin él.
- El aviso legal no incluye NIF. Confirmar si hace falta.

## Próximo
1. Crear `WEB3FORMS_ACCESS_KEY` en web3forms.com y añadirla en Vercel (Production y Preview).
2. Probar un envío real desde el formulario y comprobar el correo recibido.
3. Cambiar el usuario de Vercel a `eduardoorellana` y asignar `eduardoorellana.vercel.app`; actualizar `SITE_URL`, sitemap, robots, README y este archivo.
4. Limpiar `LaNuevaEra-Flask-React-App` y actualizar perfil de GitHub y repos fijados.
