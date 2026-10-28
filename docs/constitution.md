# Constitución del proyecto

Seis principios verificables. Si una decisión los incumple, no entra.

## 1. Veracidad
Cada afirmación de la web tiene fuente en `docs/content-brief.md`.
**Verificación:** no hay métricas, tecnologías ni experiencia sin respaldo. Los tests solo se mencionan si existen.

## 2. Contenido antes que interfaz
El copy se aprueba antes de animarlo o maquetarlo.
**Verificación:** ningún componente define texto propio; todo sale de `src/app/content`.

## 3. Accesibilidad AA
Teclado, foco visible, contraste suficiente, jerarquía de encabezados y movimiento reducido.
**Verificación:** recorrido completo con Tab, `prefers-reduced-motion` respetado y sin trampas de foco.

## 4. Presupuesto de rendimiento
LCP, CLS e INP son criterios de aceptación, no adornos.
**Verificación:** Lighthouse ≥ 90 en rendimiento y accesibilidad; GSAP fuera del bundle inicial.

## 5. Una sola fuente de verdad
`docs/content-brief.md` para el contenido; `src/styles.css` para los tokens; la spec para el alcance.
**Verificación:** no hay datos duplicados ni colores sueltos en componentes.

## 6. La spec manda
Lo que no está en `specs/001-portfolio/spec.md` no se implementa.
**Verificación:** cada tarea del plan referencia un requisito. Si falta una decisión, se pregunta antes de escribir código.
