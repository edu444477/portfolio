# Sistema de diseño — “Taller”

## Concepto
Dossier técnico de un taller: retícula visible, reglas de 1 px, fichas de proyecto y metadatos en mono. Preciso, industrial, sin pastel ni glassmorphism.

## Tokens
Todos en `src/styles.css`. El tema oscuro es la clase `.dark` en `<html>`.

| Token | Oscuro | Claro |
|---|---|---|
| `--bg` | `#0A0B0D` | `#F4F2EC` |
| `--surface` | `#121418` | `#FFFFFF` |
| `--line` | `#24272E` | `#D8D3C7` |
| `--text` | `#ECEAE4` | `#0E1013` |
| `--muted` | `#8B8F98` | `#5C6068` |
| `--accent` | `#3D5AFE` | `#2447D6` |
| `--accent-text` | `#8C9BFF` | `#1B36A8` |

Cambiar el acento = cambiar `--accent` y `--accent-text`. Nada más.

## Tipografía
- **Display:** Archivo Variable, `font-stretch: 108–112%`, peso 700, tracking negativo.
- **Cuerpo:** Inter Variable, 16–18 px, interlineado 1.6.
- **Datos:** JetBrains Mono, 10–12 px, mayúsculas, tracking 0.1–0.14 em.
- Máximo tres familias. Fuentes autoalojadas con Fontsource.

## Retícula y espaciado
- Ancho máximo 78 rem (1248 px), padding 1.25 / 2 / 2.5 rem.
- Secciones: 4–6 rem vertical en móvil, 6–7 rem en escritorio.
- Reglas horizontales de 1 px entre bloques. Sin sombras salvo `--shadow` en casos concretos.
- Radios de 2 px. Nada de píldoras gigantes.

## Componentes
- `.sheet` — superficie con borde.
- `.label` — metadato mono.
- `.btn` + `.btn-primary` / `.btn-ghost`.
- `.link-arrow` — enlace con línea que crece.
- `.field` — input/textarea con foco de 2 px.
- `app-section-heading` — etiqueta + titular + intro.
- `app-metric` — cifra animada + etiqueta.
- `app-tag` — tecnología o evidencia.
- `app-project-card` — fila de ficha, no tarjeta decorativa.

## Movimiento
- GSAP + ScrollTrigger, carga diferida.
- Intro del hero: líneas con `yPercent` y máscara.
- Scroll: `opacity` + `y` de 24 px, una sola vez, `expo.out`.
- Botones magnéticos solo con puntero fino.
- Todo desactivado con `prefers-reduced-motion`.

## Accesibilidad
- Contraste mínimo AA; `--accent-text` existe para texto pequeño.
- Foco visible con `outline` de 2 px.
- `skip-link`, `aria-live` en el formulario y `aria-expanded` en el menú.
- Imágenes con alt real; iconos decorativos con `aria-hidden`.
