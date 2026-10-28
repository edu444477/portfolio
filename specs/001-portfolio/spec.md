# Spec 001 — Portfolio de Eduardo Orellana

## Objetivo
Publicar un portfolio profesional bilingüe que demuestre experiencia Full Stack, el TFG La Nueva Era y el dominio de Angular 22, con despliegue gratuito en Vercel.

## Requisitos (EARS)

### Contenido e idioma
- **R1.** El sistema DEBE servir la home en español en `/` y en inglés en `/en`, ambas prerenderizadas.
- **R2.** Cada caso de estudio DEBE existir en ambos idiomas con rutas traducidas.
- **R3.** Todo texto visible DEBE provenir de `src/app/content`; ningún componente DEBE inventar copy.
- **R4.** Las afirmaciones y métricas DEBEN coincidir con `docs/content-brief.md`.

### Interfaz
- **R5.** El sitio DEBE ofrecer tema claro y oscuro, con preferencia del sistema y toggle persistente.
- **R6.** La home DEBE incluir hero, trabajo seleccionado, otros trabajos, experiencia, stack, sobre mí y contacto.
- **R7.** La navegación DEBE ser usable con teclado y anunciar el estado del menú móvil.
- **R8.** Las animaciones DEBEN desactivarse con `prefers-reduced-motion`.

### Casos de estudio
- **R9.** La Nueva Era DEBE mostrar 18 endpoints, 12 tablas, 10 juegos y 5 categorías, con demo, repo y Figma.
- **R10.** El caso del portfolio DEBE explicar Angular, el prerender y la separación contenido/vista.

### Contacto y legal
- **R11.** El formulario DEBE validar nombre, email, mensaje y consentimiento, y responder con estados de envío, éxito y error.
- **R12.** El formulario DEBE entregarse mediante `/api/contact` con honeypot y límite de peticiones.
- **R13.** DEBE existir política de privacidad y aviso legal en ambos idiomas.

### Calidad
- **R14.** El build DEBE prerenderizar todas las rutas sin errores.
- **R15.** DEBE haber tests unitarios del contenido y smoke tests E2E de navegación, tema y formulario.
- **R16.** Lighthouse DEBE dar ≥ 90 en rendimiento y accesibilidad en la home.

## Fuera de alcance (v1)
- Blog, CMS, analítica, comentarios, modo offline, área privada.

## Criterios de aceptación
1. `npm run build` termina sin errores y genera 10 rutas.
2. `/` y `/en` tienen `lang` correcto y metadatos propios.
3. El formulario envía un correo real y muestra error si falla.
4. Navegación completa con Tab y foco visible.
5. Sin cookies ni peticiones a terceros en carga inicial.
