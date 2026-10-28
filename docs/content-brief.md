# Content Brief — Portfolio de Eduardo Orellana

**Estado:** cerrado. Construcción en curso.
**Fecha:** 27 de octubre de 2026
**Fuente de verdad:** este documento. Nada entra en la web si no está aquí.

---

## 1. Cómo se trabaja

- Este documento sustituye a las respuestas sueltas del chat. Si algo no está aquí, no está aprobado.
- Lo confirmado (sección 2) no se cuestiona; lo decidido (sección 6) no se reabre salvo que lo pidas.
- Solo quedan dos detalles menores en la sección 9; nada bloquea la construcción.

---

## 2. Perfil

| Campo | Dato |
|---|---|
| Nombre | Eduardo Orellana Pomares |
| Ubicación | Marbella, Málaga, 29660 |
| Email | eduardoorellanapomares@gmail.com |
| Teléfono | +34 711 78 22 95 — **solo en el CV, no en la web** |
| LinkedIn | https://www.linkedin.com/in/eduardoorellanapomares/ |
| GitHub | https://github.com/edu444477 |
| Perfil | Desarrollador Full Stack |
| Experiencia | Más de 2 años en aplicaciones web y móviles para entornos empresariales |
| Especialidad | React, React Native, Ruby on Rails |
| Añadidos al portfolio | Angular (proyecto propio), Flask (TFG) |
| Idiomas | Español nativo · Inglés técnico (lectura y escritura) |

**Regla de veracidad:** el CV no incluye Angular ni Flask como experiencia de empresa. En la web aparecen como **proyecto propio** y **TFG**. No se escribirán años de experiencia que no existan.

---

## 3. Experiencia profesional

| Puesto | Empresa | Fechas | Contexto | Qué hizo |
|---|---|---|---|---|
| Desarrollador Full Stack | VoIPer Telecom | Jun. 2025 – Jun. 2026 | Presencial, indefinido | TAW de punta a punta: apps iOS/Android completas con React Native (TAW y Kiosko), frontend web React, API REST en Ruby on Rails con PostgreSQL, asistente de IA íntegro y participación en la web comercial. Decisiones técnicas del producto. |
| Desarrollador Frontend | A-Safe Digital | Nov. 2023 – May. 2024 | Prácticas, Málaga, híbrido | React, Next.js y Tailwind. Primero la web corporativa; después un CRM interno a medida para la empresa, con su biblioteca de componentes y nuevas funcionalidades. |
| Desarrollador Full Stack | Elitech Lab | Abr. 2023 – Jun. 2023 | Prácticas, Londres, teletrabajo | CodeIgniter 3 (PHP), Bootstrap, JavaScript, CSS, MySQL. Automatización de inserción y actualización de datos. |
| Venta al público y stocks | El Corte Inglés | Veranos 2021 y 2022 | Presencial | Atención al cliente y stock. **Fuera del portfolio.** |

---

## 4. Formación y cursos

- **CFGS Desarrollo de Aplicaciones Multiplataforma (DAM)** — I.E.S. Fuengirola Nº 1, sep. 2024 – jun. 2025.
- **CFGS Desarrollo de Aplicaciones Web (DAW)** — I.E.S. Mar de Alborán, sep. 2021 – jun. 2023. **Diploma de Honor.**
- **Bachillerato de Ciencias Tecnológicas** — I.E.S. Vega de Mar, sep. 2017 – jun. 2019.
- **Cursos:** Python 3 con NumPy y Pandas; WordPress, WooCommerce, SEO y marketing digital.
- **Herramientas:** Figma, Jira, GitHub, Bitbucket, Kanban.

---

## 5. La Nueva Era (caso de estudio principal)

### 5.1 Ficha verificada

| Campo | Dato |
|---|---|
| Qué es | Marketplace de cosméticos de videojuegos: catálogo multijuego, compra, venta, inventario, cesta, deseos e intercambio |
| Contexto | TFG del CFGS DAM, I.E.S. Fuengirola Nº 1, 2025 |
| Autoría | Individual |
| Demo | https://edufuengirola1.eu.pythonanywhere.com |
| Repo | https://github.com/edu444477/LaNuevaEra-Flask-React-App (público) |
| Figma | https://www.figma.com/design/kISXqmAsysdjhPKFwqN86O/TFG---La-Nueva-Era?node-id=0-1&t=qHXMN0s4QUrsdAUu-1 |
| Usuario de prueba | Disponible para capturas. Guardado en `docs/private-notes.md`, fuera del repo público |
| Backend | Python 3 + Flask + Flask-RESTful |
| Base de datos | MySQL + SQLAlchemy + Flask-Migrate |
| Auth | JWT (Flask-JWT-Extended) + Bcrypt |
| Frontend | React 19, Vite 6, Tailwind 3, React Router 7, Axios, React Hook Form + Yup, SweetAlert2 |
| Despliegue | PythonAnywhere (frontend y API en el mismo host) |
| Licencia | CC BY-NC-SA 4.0 según la memoria; **falta el archivo LICENSE en el repo** |

### 5.2 Métricas reales (medidas, no inventadas)

| Métrica | Valor | Cómo se comprobó |
|---|---|---|
| Endpoints REST | **18** | `api.add_resource` en `backend/app.py` |
| Modelos / tablas | **12** | módulos de `backend/models` |
| Productos en catálogo | **12** | `GET /api/productos` |
| Juegos | **10** | `GET /api/juegos` |
| Categorías | **5** | `GET /api/categorias` |
| Juegos con producto | 4 (DKO, Overwatch 2, Rainbow Six Siege, Valorant) | respuesta de la API |
| Tests | **0** | no hay archivos de test ni script de test |

**En la web se dirá:** “18 endpoints REST, 12 tablas, JWT + Bcrypt, desplegado en producción”.
**No se dirá:** número de usuarios, tests unitarios, “miles de productos”, ni nada que no esté en esta tabla.

### 5.3 Qué se destaca del caso

1. **API REST propia:** 18 endpoints, códigos HTTP, recursos separados por dominio (auth, productos, carrito, pedidos, inventario, deseos, perfil, intercambio, newsletter).
2. **Modelo relacional:** 12 tablas normalizadas con claves compuestas en carrito y deseos, y migraciones Alembic.
3. **Auth completa:** registro, login, JWT, hash Bcrypt, cambio de contraseña, rutas protegidas.
4. **Lógica de negocio:** saldo virtual, stock, inventario por usuario, cesta, pedidos y valoraciones.
5. **Frontend React moderno:** React 19 + Vite 6, estado de sesión, rutas protegidas, formularios validados con React Hook Form + Yup.
6. **Diseño propio en Figma** y despliegue real, no una demo local.

### 5.4 Deuda técnica que hay que resolver antes de enlazar el repo

Detectado al clonar el repositorio público. No es cosmético:

- **Credenciales reales en `backend/config.py`**: usuario y contraseña de MySQL en texto plano, más `JWT_SECRET_KEY='clave_secreta'` y `DEBUG=True` por defecto.
  → **Rotar la contraseña en PythonAnywhere**, pasar todo a variables de entorno y asumir que la anterior ya está comprometida (está en el historial de Git).
- **`__pycache__` y artefactos compilados versionados.** Añadir `.gitignore`.
- **Código muerto:** `incidencia_resource.py`, `registro_resource.py` y modelos que no se registran en `app.py`.
- **README inexacto:** dice que hay tests y usa una URL de clonado antigua.
- **Sin LICENSE** pese a que la memoria declara CC BY-NC-SA 4.0.

**Decisión:** se enlazan demo y repo, pero el repo se limpia **antes** de publicar el portfolio. La demo se enlaza desde el primer deploy.

---

## 6. Decisiones cerradas

### 6.1 Técnica

| Tema | Decisión |
|---|---|
| Framework | Angular 22.2 standalone, signals, zoneless, SSG con prerender |
| Estilos | Tailwind CSS 4.3 con tokens CSS-first y componentes propios |
| Animación | GSAP 3.15 + ScrollTrigger, carga diferida y respeto a `prefers-reduced-motion` |
| Contenido | TypeScript tipado en `src/content`, sin CMS |
| Formulario | Vercel Function `/api/contact` con validación, honeypot y rate limit; entrega vía API de Web3Forms con la clave en variable de entorno |
| Hosting | Vercel, plan gratuito. Cuenta ya creada con `eduardoorellanapomares@gmail.com` |
| Dominio | Subdominio de Vercel: `eduardoorellana.vercel.app`. Sin pagar nada |
| Analítica | Ninguna en la v1. Sin banner de cookies |
| Legal | Privacidad y aviso legal en ES/EN |
| Testing | Vitest para lógica + Playwright smoke + axe + Lighthouse en CI |
| Repo | Público, con README, `AGENTS.md` y deploy link |
| CV | Descargable en PDF. Se enlaza el CV actual y se regenera al final si aporta |

### 6.2 Idioma

- Rutas `/` (ES) y `/en`, ambas prerenderizadas.
- **Traducción completa**, no un resumen: el sitio en inglés es la prueba de que lee y escribe inglés.
- Nivel publicado: **“Español nativo · Inglés técnico (lectura y escritura)”** / EN: “Spanish (native) · English (technical reading and writing)”.
- No se pondrá B1/B2/C1, ni “fluent”, ni “professional working proficiency”.

### 6.3 Tema

- Claro y oscuro, por defecto el del sistema, con toggle persistente en `localStorage`.
- Sin flash al cargar: script inline que aplica la clase antes del primer paint.

### 6.4 Alcance

- Home con secciones + 2 casos de estudio (La Nueva Era y este portfolio) + legal + 404.
- Sin blog, sin página índice de proyectos separada en la v1 (la home ya lista el trabajo).
- CV descargable.

### 6.5 Arquitectura IA (SDD lite, aprobada)

```text
portfolio/
├─ AGENTS.md                  # reglas permanentes, ≤40 líneas
├─ MEMORY.md                  # estado y decisiones, ≤50 líneas
├─ docs/
│  ├─ constitution.md         # 6 principios verificables
│  ├─ content-brief.md        # este documento
│  └─ design-system.md
├─ specs/001-portfolio/
│  ├─ spec.md
│  ├─ plan.md
│  └─ tasks.md
├─ .agents/skills/
│  ├─ portfolio-content/SKILL.md
│  ├─ angular-ui/SKILL.md
│  └─ release-vercel/SKILL.md
├─ .opencode/
│  ├─ agents/reviewer.md          # QA read-only
│  ├─ agents/content-editor.md    # copy ES/EN sin inventar
│  └─ commands/{feature,audit,release}.md
├─ api/contact.ts
├─ src/
├─ tests/
└─ vercel.json
```

**Principios de la constitución:**

1. **Veracidad:** cada afirmación tiene fuente en este brief.
2. **Contenido antes que UI:** el copy se aprueba antes de animar.
3. **Accesibilidad AA:** teclado, contraste, foco visible, movimiento reducido.
4. **Presupuesto de rendimiento:** LCP, CLS, INP y peso de JS son criterios de aceptación.
5. **Una sola fuente de verdad:** este brief; código en inglés, copy en ES/EN.
6. **La spec manda:** lo que no está en la spec no se implementa; si falta una decisión, se pregunta.

---

## 7. Dirección visual: “Taller”

Portfolio como **dossier técnico de un taller**: preciso, industrial, con la información tratada como ficha de producto. Se aleja del portfolio oscuro genérico y del aire de biblioteca.

### 7.1 Paleta

El acento vive en un único token: cambiarlo es una línea.

| Token | Oscuro | Claro | Uso |
|---|---|---|---|
| `--bg` | `#0A0B0D` | `#F4F2EC` | Fondo |
| `--surface` | `#121418` | `#FFFFFF` | Tarjetas y bloques |
| `--line` | `#24272E` | `#D8D3C7` | Reglas de 1 px, bordes |
| `--text` | `#ECEAE4` | `#0E1013` | Texto principal |
| `--muted` | `#8B8F98` | `#5C6068` | Metadatos |
| `--accent` | `#3D5AFE` | `#2447D6` | Acento principal (cobalto) |
| `--accent-text` | `#8C9BFF` | `#1B36A8` | Enlaces y texto pequeño |
| `--accent-soft` | `rgba(61,90,254,.12)` | `rgba(36,71,214,.08)` | Fondos y hover |

- Sin pasteles, sin degradados decorativos, sin glassmorphism.
- Un solo acento fuerte por pantalla. La Nueva Era conserva su propio magenta/cian dentro de su caso de estudio.
- Textura: retícula de líneas de 1 px y grano muy sutil al 2–3 %.

### 7.2 Tipografía

- **Titulares:** Archivo Expanded, 600–800, tracking negativo. Aspecto de señalización industrial.
- **Cuerpo:** Inter, 400/500, 17–18 px, medida de 65–72 caracteres.
- **Datos y etiquetas:** JetBrains Mono, mayúsculas, 12 px, tracking amplio.
- Escala fluida con `clamp()`; sin más de 3 familias.

### 7.3 Estructura y componentes

- Retícula de 12 columnas, ancho máximo 1240 px, reglas horizontales de 1 px entre secciones.
- Índice de sección numerado (`01 — Trabajo`, `02 — Experiencia`…).
- **Ficha de proyecto** en vez de tarjeta decorativa: título, rol, año, stack, estado y una línea de resultado.
- Timeline vertical con fechas en mono.
- Stack con etiquetas de evidencia: `producción`, `TFG`, `proyecto propio`, `prácticas`.
- Barra superior fija con `ES / EN`, toggle de tema y estado “Disponible · Marbella”.
- Rail lateral en escritorio con progreso de lectura (sustituye al típico menú de puntos).

### 7.4 Home

1. **Hero:** nombre a gran tamaño, rol, una frase de propuesta de valor, dos CTAs (Ver trabajo / Contacto), chip de disponibilidad. Fondo con retícula animada y foco que sigue al cursor.
2. **Trabajo seleccionado:** La Nueva Era como ficha grande con métricas reales (18 endpoints, 12 tablas, JWT).
3. **Otros trabajos:** TAW, A-Safe, repos técnicos.
4. **Experiencia:** timeline con logros concretos.
5. **Stack:** tecnologías con su evidencia.
6. **Sobre mí:** foto, relato breve, formación, cursos.
7. **Contacto:** formulario + email + LinkedIn + GitHub.
8. **Footer:** CV, repo del portfolio, legal, idioma.

### 7.5 Movimiento

- Intro: máscara sobre el nombre y dibujo de líneas de la retícula.
- Scroll: revelados con `clip-path` y desplazamiento corto; sin animar todo.
- Contadores solo en métricas verificadas.
- Botones magnéticos y transición de página tipo barrido.
- Todo desactivado con `prefers-reduced-motion`, y sin animaciones que bloqueen la lectura.

### 7.6 Lo que no se hará

Barras de porcentaje de skills, emojis en el copy, tarjetas con blur, “Hello, I’m”, degradados pastel, ilustraciones 3D genéricas, carruseles automáticos, música o cursores personalizados que rompan la accesibilidad.

---

## 8. Permisos y GitHub

### 8.1 Permisos

- **TAW:** autorizado a mostrar todo (nombre, logo, capturas y enlaces). Es un producto público y la relación con la empresa es buena. Sin NDA.
- **A-Safe:** autorizado a mostrar la web corporativa y el CRM interno. Sin NDA.
- **La Nueva Era:** capturas y demo autorizadas; usuario de prueba disponible.
- **Foto de perfil:** autorizada.

### 8.2 Perfil `edu444477`

- **Bio:** “Desarrollador Full Stack · React, React Native y Ruby on Rails · Angular y Flask en proyectos propios · Marbella”.
- **Website:** URL del portfolio.
- **Ubicación:** Marbella, España.
- **README de perfil** (repo `edu444477/edu444477`): presentación corta, stack, proyectos destacados, enlaces a portfolio, LinkedIn y email.
- **Repos fijados:** `portfolio`, `LaNuevaEra-Flask-React-App`, `frontend-developer-test`, `playwright-technical-test`.
- **Por repo:** descripción, topics (`angular`, `flask`, `react`, `typescript`…), URL de demo y README mínimo decente.

### 8.3 Repos existentes

| Repo | Estado | Acción |
|---|---|---|
| `LaNuevaEra-Flask-React-App` | Público, sin licencia, con secretos | Rotar credenciales, `.gitignore`, limpiar README, añadir LICENSE, borrar código muerto |
| `frontend-developer-test` | Público, React + Redux | Añadir demo o captura y README; prueba de React |
| `playwright-technical-test` | Público, Python | README con qué prueba y cómo se ejecuta |
| `edu444477` | Perfil vacío | Crear README de perfil |

### 8.4 Repo del portfolio

- Nombre: `portfolio`. Público.
- README con stack, decisiones, capturas, URL y comandos.
- Topics: `angular`, `tailwindcss`, `gsap`, `portfolio`, `typescript`, `vercel`.

---

## 9. Estado de las dudas

### Resueltas

| Duda | Respuesta |
|---|---|
| Alcance en TAW | App móvil completa, frontend web, backend Rails, asistente de IA íntegro y web comercial |
| Permiso TAW | Total, sin NDA |
| Alcance en A-Safe | Web corporativa + CRM interno con biblioteca de componentes |
| Permiso A-Safe | Total, sin NDA |
| Demo de La Nueva Era | Autorizada; hay usuario de prueba |
| Android | Publicadas y verificadas: `com.timeatwork.generalapp` y `com.timeatwork.kiosk` |
| Vercel | Cuenta creada; el proyecto se crea al publicar el repo |
| Email del formulario | `eduardoorellanapomares@gmail.com` |
| Teléfono | Solo en el CV |
| Acento | Cobalto `#3D5AFE`; se puede cambiar en un token |

### Pendiente (menor, no bloquea)

1. **CV descargable:** ¿enlazo el `CV_2026.pdf` actual o genero uno nuevo con La Nueva Era, Angular y Flask?
2. **Repos de test:** `frontend-developer-test` y `playwright-technical-test` son dos pruebas técnicas públicas que ya tienes en GitHub. Mi propuesta es enlazarlas en “otros trabajos” como prueba de React/Redux y de testing con Playwright. ¿Las incluimos o las dejamos fuera?

---

## 10. Valores por defecto

- **TAW y A-Safe:** nombre, logo, capturas y enlaces completos.
- **La Nueva Era:** demo y repo enlazados tras la limpieza de la sección 5.4.
- **Contacto:** `eduardoorellanapomares@gmail.com`.
- **Teléfono:** solo en el CV.
- **CV:** se enlaza el actual y se regenera al final.
- **Repos de test:** se incluyen como enlaces.
- **Diseño:** “Taller” con cobalto `#3D5AFE`.
- **Deploy:** `eduardoorellana.vercel.app`.

---

## 11. Orden de trabajo

1. `AGENTS.md`, `MEMORY.md`, `docs/constitution.md`, `specs/001-portfolio/`.
2. Scaffold Angular 22 + Tailwind 4 + GSAP, tokens y componentes base.
3. Contenido ES/EN con los datos de este brief.
4. Home, casos de estudio, legal, 404.
5. `/api/contact`, metadatos, sitemap, `robots.txt`, OG image.
6. Tests, Lighthouse y accesibilidad.
7. Deploy en Vercel.
8. Limpieza del repo de La Nueva Era y actualización del perfil de GitHub.
