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
- Ninguna. La access key de Web3Forms vive en `src/app/core/web3forms.ts`:
  es un identificador público de formulario, no una credencial.

## Configuración
- Build command: `npm run build`.
- Output: `dist/portfolio/browser`.
- Node 22.

## Después del deploy
1. Abrir `/`, `/en`, los dos casos y las dos legales.
2. Probar el formulario y confirmar recepción.
3. Comprobar `sitemap.xml`, `robots.txt` y OG image.
4. Lighthouse en móvil: ≥ 90 en rendimiento y accesibilidad.
5. Actualizar `MEMORY.md` con la URL y la fecha.

## Rollback
Vercel → Deployments → seleccionar el anterior → Promote to Production.
