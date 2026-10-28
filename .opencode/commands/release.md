---
description: Preparar y verificar un deploy en Vercel
agent: build
---

Prepara el release:

1. Ejecuta `npm run build` y confirma el número de rutas prerenderizadas.
2. Ejecuta los tests unitarios y E2E.
3. Revisa que no haya secretos ni archivos privados en el diff.
4. Comprueba `vercel.json`, la función `api/contact.ts` y la variable `WEB3FORMS_ACCESS_KEY`.
5. Verifica metadatos, `sitemap.xml`, `robots.txt` y OG image.
6. Si hay CLI de Vercel autenticada, despliega en preview; si no, deja las instrucciones exactas.
7. Actualiza `MEMORY.md` con URL, fecha y resultado.

No publiques en producción sin confirmación explícita.
