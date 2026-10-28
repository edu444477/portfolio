---
name: release-vercel
description: Checklist de publicación del portfolio en Vercel. Úsala antes de cada deploy o cambio de dominio.
---

# Release en Vercel

## Antes del deploy
1. `npm run build` sin errores.
2. Confirmar que se prerenderizan las 10 rutas.
3. `npm run test` y `npm run test:e2e` en verde.
4. Revisar `/` y `/en` en claro y oscuro, a 390, 768 y 1440 px.
5. Comprobar que no hay secretos en el diff.

## Variables de entorno
- `WEB3FORMS_ACCESS_KEY` en Production y Preview.
- Nunca en `.env` versionado ni en el cliente.

## Configuración
- Build command: `npm run build`.
- Output: `dist/portfolio/browser`.
- Node 22.
- Función `api/contact.ts` con Node runtime.

## Después del deploy
1. Abrir `/`, `/en`, los dos casos y las dos legales.
2. Probar el formulario y confirmar recepción.
3. Comprobar `sitemap.xml`, `robots.txt` y OG image.
4. Lighthouse en móvil: ≥ 90 en rendimiento y accesibilidad.
5. Actualizar `MEMORY.md` con la URL y la fecha.

## Rollback
Vercel → Deployments → seleccionar el anterior → Promote to Production.
