---
description: Auditar contenido, accesibilidad, rendimiento y enlaces
agent: reviewer
---

Audita el estado actual del portfolio:

1. Contenido contra `docs/content-brief.md`: métricas, fechas, tecnologías y atribuciones.
2. Paridad ES/EN: mismas secciones, rutas recíprocas y enlaces correctos.
3. Accesibilidad: encabezados, foco, teclado, alt, contraste y formulario.
4. SSR: accesos a `window`, `document` y `localStorage` sin protección.
5. Rendimiento: GSAP diferido, imágenes dimensionadas, fuentes autoalojadas.
6. Enlaces externos y `rel="noopener noreferrer"`.

Devuelve una lista priorizada (crítico / importante / menor) con archivo y arreglo concreto. No modifiques nada.
