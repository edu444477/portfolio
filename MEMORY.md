# MEMORY.md

## Estado (2026-10-28)
- Angular 22.2 + Tailwind 4.3 + GSAP 3.15 funcionando; 12 rutas prerenderizadas.
- Home, dos casos de estudio, legal, 404 (con `404.html` para Vercel) y formulario.
- Contenido ES/EN tipado y unificado; tests de paridad.
- Tests: 12 unitarios (Vitest) y 18 E2E (Playwright, incluye axe).
- Lighthouse local sobre build comprimido: 93 rendimiento, 100 accesibilidad, 100 buenas prácticas, 100 SEO.
- Repo público: `https://github.com/edu444477/portfolio`.
- Deploy en producción: `https://eduardoorellana.vercel.app` (proyecto `portfolio`, cuenta renombrada a `eduardoorellana`, plan hobby).
- Formulario de contacto: Web3Forms desde el navegador (sin función serverless).
- Pendiente: completar bio/web del perfil de GitHub (cosmético).

## Decisiones
- Angular standalone + signals + zoneless + `outputMode: static`.
- Tailwind 4 con tokens CSS y modo oscuro por clase.
- Intro del hero en CSS; GSAP solo se carga al hacer scroll (fuera del camino crítico).
- Contenido en TypeScript; sin CMS.
- Formulario: Web3Forms desde el navegador. Su plan gratuito rechaza el envío desde servidor (403, exige Pro), así que no hay función serverless. La access key es pública y el spam se frena con el honeypot `website` y `botcheck`.
- Español en `/`, inglés en `/en`; rutas de proyecto traducidas.
- Inglés publicado como “técnico (lectura y escritura)”, sin niveles inventados.
- La Nueva Era es TFG, no experiencia de empresa. Angular es proyecto propio.
- Métricas de La Nueva Era verificadas: 18 endpoints, 12 tablas, 10 juegos, 5 categorías, 12 productos. 0 tests.
- TAW y A-Safe se muestran con nombre, enlaces y capturas: permiso confirmado y sin NDA.
- El CV público se genera con `scripts/cv/rebuild-cv.py` desde `CV_2026.pdf` (privado): mismo diseño, sin teléfono, con email y ubicación.

## Riesgos
- El repo público de La Nueva Era expone credenciales de MySQL en el historial. Hay que rotar la contraseña en PythonAnywhere.
- El aviso legal no incluye NIF: se ha decidido dejarlo fuera porque el sitio no vende nada.

## Próximo
1. Probar un envío real desde el formulario y comprobar el correo recibido.
2. Completar el perfil de GitHub: bio, web y ubicación (necesita el scope `user`: `gh auth refresh -h github.com -s user`).
3. Decidir licencia del repo de La Nueva Era y fijar los repos en el perfil.

## Hecho (30 oct 2026)
- Formulario migrado a Web3Forms desde el navegador (la función `/api/contact` se eliminó): probado en producción con un navegador real y respuesta 200. Cloudflare bloquea los envíos de navegadores headless con un reto, así que las pruebas E2E no deben enviar el formulario.
- CV público regenerado sin teléfono con `scripts/cv/rebuild-cv.py`; misma ruta de descarga.
- `LaNuevaEra-Flask-React-App`: secretos movidos a variables de entorno, `.gitignore`, `requirements.txt`, `.env.example`, README corregido (URL de clonado y APK) y 54 archivos generados fuera del control de versiones.
- Perfil `edu444477`: README reescrito con proyectos, experiencia y stack; topics añadidos al repo de La Nueva Era.
