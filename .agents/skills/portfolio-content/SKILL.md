---
name: portfolio-content
description: Mantener el contenido bilingüe del portfolio sin inventar datos. Úsala al añadir proyectos, logros, métricas o textos en español e inglés.
---

# Contenido del portfolio

## Fuente de verdad
`docs/content-brief.md`. Si un dato no está ahí, no se publica. Se pregunta antes de inventar.

## Dónde vive
- `src/app/content/types.ts` — contrato `SiteContent`.
- `src/app/content/es.ts` y `en.ts` — implementaciones.
- `src/app/content/index.ts` — mapa por idioma.

## Reglas
1. Añadir un campo obliga a tocar el tipo y **los dos** idiomas.
2. Nada de cifras redondeadas o marketing: “18 endpoints”, no “decenas de endpoints”.
3. La Nueva Era es TFG; Angular es proyecto propio. No son experiencia de empresa.
4. No afirmar tests en La Nueva Era: no existen.
5. Inglés: “Spanish (native) · English (technical reading and writing)”. Sin niveles MCER.
6. Tono: primera persona, español de España, concreto, sin superlativos.
7. En inglés, frases cortas y naturales. Nada de traducción literal.

## Verificación
- `npm run build` falla si falta una clave.
- Revisar que las rutas `path` y `alternatePath` de cada página sean recíprocas.
- Comprobar que las métricas de la home coinciden con el caso de estudio.
