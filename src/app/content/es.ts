import type { SiteContent } from './types';

export const ES: SiteContent = {
  lang: 'es',
  locale: 'es_ES',
  meta: {
    home: {
      title: 'Eduardo Orellana — Desarrollador Full Stack',
      description:
        'Desarrollador Full Stack en Marbella. React, React Native y Ruby on Rails en producción; Angular y Flask en proyectos propios.',
      path: '/',
      alternatePath: '/en',
    },
    laNuevaEra: {
      title: 'La Nueva Era — Caso de estudio | Eduardo Orellana',
      description:
        'Marketplace de cosméticos para videojuegos: API REST en Flask, 18 endpoints, 12 tablas MySQL, JWT y frontend React.',
      path: '/proyectos/la-nueva-era',
      alternatePath: '/en/projects/la-nueva-era',
    },
    portfolio: {
      title: 'Este portfolio — Caso de estudio | Eduardo Orellana',
      description:
        'Cómo está construido este portfolio: Angular 22 con signals, Tailwind 4, GSAP, prerender estático y despliegue en Vercel.',
      path: '/proyectos/portfolio',
      alternatePath: '/en/projects/portfolio',
    },
    privacy: {
      title: 'Política de privacidad | Eduardo Orellana',
      description: 'Qué datos recoge este portfolio, para qué se usan y cómo ejercer tus derechos.',
      path: '/privacidad',
      alternatePath: '/en/privacy',
    },
    legal: {
      title: 'Aviso legal | Eduardo Orellana',
      description: 'Titular, condiciones de uso y propiedad intelectual de este portfolio.',
      path: '/aviso-legal',
      alternatePath: '/en/legal-notice',
    },
    notFound: {
      title: 'Página no encontrada | Eduardo Orellana',
      description: 'La página que buscas no existe.',
      path: '/404',
      alternatePath: '/en/404',
    },
  },

  nav: [
    { label: 'Trabajo', href: '/#work' },
    { label: 'Experiencia', href: '/#experience' },
    { label: 'Stack', href: '/#stack' },
    { label: 'Sobre mí', href: '/#about' },
    { label: 'Contacto', href: '/#contact' },
  ],

  header: {
    status: 'Disponible ahora',
    menu: 'Abrir menú',
    close: 'Cerrar menú',
    theme: 'Cambiar tema',
    skip: 'Saltar al contenido',
  },

  hero: {
    eyebrow: 'Portfolio · 2026',
    name: ['Eduardo', 'Orellana'],
    specTitle: 'Ficha técnica',
    role: 'Desarrollador Full Stack',
    lede: 'Dos años construyendo producto real: apps móviles, frontend, APIs y un asistente de IA. Ahora también Angular y Flask, con proyectos propios que enseño aquí.',
    ctas: [
      { label: 'Ver trabajo', href: '#work' },
      { label: 'Hablemos', href: '#contact' },
    ],
    spec: [
      { label: 'Rol', value: 'Full Stack' },
      { label: 'Base', value: 'Marbella, ES' },
      { label: 'Foco', value: 'Producto web y móvil' },
      { label: 'Idiomas', value: 'ES nativo · EN técnico' },
      { label: 'Estado', value: 'Disponible' },
    ],
  },

  work: {
    label: '01 — Trabajo',
    title: 'Trabajo seleccionado',
    intro:
      'Tres contextos distintos: un TFG que es un producto completo, un SaaS en producción y un CRM interno. Cada ficha dice qué hice y con qué.',
    featuredCta: 'Leer el caso completo',
    allLabel: 'Otros trabajos',
    featured: {
      slug: 'la-nueva-era',
      index: '01',
      kicker: 'TFG · DAM 2025',
      title: 'La Nueva Era',
      year: '2025',
      role: 'Diseño, backend, frontend y despliegue',
      summary:
        'Marketplace para comprar, vender e intercambiar cosméticos de videojuegos. API REST propia en Flask, 12 tablas relacionales y frontend React, desplegado y funcionando.',
      stack: ['Flask', 'MySQL', 'JWT', 'React 19'],
      metrics: [
        { value: 18, label: 'endpoints REST' },
        { value: 12, label: 'tablas' },
        { value: 10, label: 'juegos' },
      ],
      links: [{ label: 'Ver demo', href: 'https://edufuengirola1.eu.pythonanywhere.com', external: true }],
      image: '/images/la-nueva-era/logo.webp',
      imageAlt: 'Logo de La Nueva Era: cabeza de lobo con corona de colores sobre fondo oscuro',
    },
    others: [
      {
        slug: 'time-at-work',
        index: '02',
        kicker: 'Producto SaaS · 2025–2026',
        title: 'Time At Work',
        year: '2025–2026',
        role: 'Full Stack',
        summary:
          'Control horario empresarial. Apps iOS y Android completas, frontend web, API en Ruby on Rails y un asistente de IA que automatiza consultas dentro de la plataforma.',
        stack: ['React Native', 'React', 'Rails', 'PostgreSQL'],
        links: [
          { label: 'Web', href: 'https://timeatwork.net/', external: true },
          {
            label: 'App Store',
            href: 'https://apps.apple.com/es/app/time-at-work/id6745813497',
            external: true,
          },
          {
            label: 'Google Play',
            href: 'https://play.google.com/store/apps/details?id=com.timeatwork.generalapp&hl=es',
            external: true,
          },
        ],
      },
      {
        slug: 'a-safe',
        index: '03',
        kicker: 'Prácticas · 2023–2024',
        title: 'A-Safe Digital',
        year: '2023–2024',
        role: 'Frontend',
        summary:
          'Primero la web corporativa; después un CRM interno a medida para la empresa, con su biblioteca de componentes reutilizables y nuevas funcionalidades.',
        stack: ['Next.js', 'React', 'Tailwind'],
        links: [{ label: 'Web', href: 'https://www.asafedigital.com/', external: true }],
      },
      {
        slug: 'portfolio',
        index: '04',
        kicker: 'Proyecto propio · 2026',
        title: 'Este portfolio',
        year: '2026',
        role: 'Diseño y desarrollo',
        summary:
          'Angular 22 con signals, Tailwind 4, GSAP y prerender estático en Vercel. Dos idiomas, dos temas y cero cookies.',
        stack: ['Angular 22', 'Tailwind 4', 'GSAP', 'Vercel'],
        links: [{ label: 'Leer el caso', href: '/proyectos/portfolio' }],
      },
      {
        slug: 'pruebas-tecnicas',
        index: '05',
        kicker: 'Repos públicos',
        title: 'Pruebas técnicas',
        year: '2024–2026',
        role: 'Desarrollo',
        summary:
          'Dos pruebas técnicas publicadas: una SPA en React y Redux, y una suite de testing con Playwright en Python.',
        stack: ['React', 'Redux', 'Playwright', 'Python'],
        links: [
          {
            label: 'Frontend test',
            href: 'https://github.com/edu444477/frontend-developer-test',
            external: true,
          },
          {
            label: 'Playwright test',
            href: 'https://github.com/edu444477/playwright-technical-test',
            external: true,
          },
        ],
      },
    ],
  },

  experience: {
    label: '02 — Trayectoria',
    title: 'Dónde he trabajado',
    intro: 'Tres etapas, tres formas de construir: producto en producción, agencia y prácticas internacionales.',
    items: [
      {
        period: 'Jun. 2025 — Jun. 2026',
        role: 'Desarrollador Full Stack',
        company: 'VoIPer Telecom',
        context: 'Presencial · Indefinido',
        bullets: [
          'Desarrollé TAW de punta a punta: apps iOS y Android, frontend web y API REST.',
          'Implementé el asistente de IA que automatiza consultas dentro de la plataforma.',
          'Participé en la web comercial y en las decisiones técnicas del producto.',
        ],
        stack: ['React Native', 'React', 'Ruby on Rails', 'PostgreSQL'],
      },
      {
        period: 'Nov. 2023 — May. 2024',
        role: 'Desarrollador Frontend',
        company: 'A-Safe Digital',
        context: 'Prácticas · Málaga · Híbrido',
        bullets: [
          'Construí la web corporativa con React, Next.js y Tailwind.',
          'Desarrollé un CRM interno a medida y su biblioteca de componentes reutilizables.',
          'Colaboré en nuevas funcionalidades y en el mantenimiento de la plataforma.',
        ],
        stack: ['React', 'Next.js', 'Tailwind'],
      },
      {
        period: 'Abr. 2023 — Jun. 2023',
        role: 'Desarrollador Full Stack',
        company: 'Elitech Lab',
        context: 'Prácticas · Londres · Teletrabajo',
        bullets: [
          'Añadí funcionalidades a aplicaciones de gestión empresarial con CodeIgniter 3.',
          'Automaticé procesos de inserción y actualización de datos en MySQL.',
          'Trabajé en remoto con un equipo en Londres.',
        ],
        stack: ['PHP', 'CodeIgniter', 'Bootstrap', 'MySQL'],
      },
    ],
  },

  skills: {
    label: '03 — Herramientas',
    title: 'Con qué trabajo',
    intro:
      'Cada tecnología lleva su contexto. Sin barras de porcentaje: importa dónde y para qué la he usado.',
    groups: [
      {
        title: 'Frontend',
        items: [
          { name: 'React', evidence: 'producción' },
          { name: 'React Native', evidence: 'producción' },
          { name: 'TypeScript', evidence: 'producción' },
          { name: 'Next.js', evidence: 'producción' },
          { name: 'Tailwind CSS', evidence: 'producción' },
          { name: 'Angular 22', evidence: 'proyecto propio' },
        ],
      },
      {
        title: 'Backend',
        items: [
          { name: 'Ruby on Rails', evidence: 'producción' },
          { name: 'Flask', evidence: 'TFG' },
          { name: 'PHP / CodeIgniter', evidence: 'prácticas' },
          { name: 'Node.js', evidence: 'proyecto propio' },
        ],
      },
      {
        title: 'Datos',
        items: [
          { name: 'PostgreSQL', evidence: 'producción' },
          { name: 'MySQL', evidence: 'producción · TFG' },
          { name: 'SQLAlchemy', evidence: 'TFG' },
          { name: 'JWT + Bcrypt', evidence: 'TFG' },
        ],
      },
      {
        title: 'Producto',
        items: [
          { name: 'Figma', evidence: 'TFG · día a día' },
          { name: 'Git / GitHub', evidence: 'día a día' },
          { name: 'Jira', evidence: 'día a día' },
          { name: 'IA aplicada', evidence: 'producción' },
        ],
      },
    ],
  },

  about: {
    label: '04 — Sobre mí',
    title: 'Quién está detrás',
    paragraphs: [
      'Empecé en DAW, seguí en DAM y cerré el ciclo con un TFG que era un marketplace completo. Desde entonces no he parado de construir: primero en A-Safe, después en VoIPer, donde TAW se convirtió en mi proyecto de referencia.',
      'Me gusta entender el producto entero. He tocado apps móviles, frontend, APIs, bases de datos y un asistente de IA, y no me incomoda moverme entre capas. Aprendo rápido y prefiero entregar algo real antes que algo perfecto sobre el papel.',
      'Ahora mismo estoy profundizando en Angular y Flask con proyectos propios, y buscando un equipo donde seguir creciendo como desarrollador de producto.',
    ],
    photoAlt: 'Retrato de Eduardo Orellana Pomares',
    educationTitle: 'Formación',
    education: [
      {
        period: '2024 — 2025',
        title: 'CFGS Desarrollo de Aplicaciones Multiplataforma',
        place: 'I.E.S. Fuengirola Nº 1',
      },
      {
        period: '2021 — 2023',
        title: 'CFGS Desarrollo de Aplicaciones Web',
        place: 'I.E.S. Mar de Alborán',
        note: 'Diploma de Honor',
      },
      {
        period: '2017 — 2019',
        title: 'Bachillerato de Ciencias Tecnológicas',
        place: 'I.E.S. Vega de Mar',
      },
    ],
    coursesTitle: 'Cursos',
    courses: ['Python 3, NumPy y Pandas', 'WordPress, WooCommerce y SEO', 'Figma aplicado a producto'],
    languagesTitle: 'Idiomas',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'Técnico · lectura y escritura' },
    ],
  },

  contact: {
    label: '05 — Contacto',
    title: 'Hablemos',
    text: '¿Tienes un proyecto, una vacante o una duda? Escríbeme y te respondo en 24–48 horas.',
    form: {
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      namePlaceholder: 'Cómo te llamas',
      emailPlaceholder: 'tu@email.com',
      messagePlaceholder: 'Cuéntame qué tienes en mente',
      submit: 'Enviar mensaje',
      sending: 'Enviando…',
      success: 'Mensaje enviado. Te respondo en 24–48 horas.',
      error: 'No se pudo enviar. Escríbeme directamente a eduardoorellanapomares@gmail.com.',
      privacyPrefix: 'Al enviar aceptas la',
      privacyLink: 'política de privacidad',
      required: 'Este campo es obligatorio',
    },
    direct: [
      { label: 'eduardoorellanapomares@gmail.com', href: 'mailto:eduardoorellanapomares@gmail.com' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eduardoorellanapomares/', external: true },
      { label: 'GitHub', href: 'https://github.com/edu444477', external: true },
    ],
  },

  footer: {
    note: 'Diseñado y construido por Eduardo Orellana.',
    built: 'Angular 22 · Tailwind 4 · GSAP · Vercel',
    links: [
      { label: 'Descargar CV', href: '/cv/eduardo-orellana-cv.pdf' },
      { label: 'GitHub', href: 'https://github.com/edu444477', external: true },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eduardoorellanapomares/', external: true },
      { label: 'Privacidad', href: '/privacidad' },
      { label: 'Aviso legal', href: '/aviso-legal' },
    ],
    backToTop: 'Volver arriba',
    copyright: '© 2026 Eduardo Orellana Pomares',
  },

  caseStudies: {
    laNuevaEra: {
      slug: 'la-nueva-era',
      seo: {
        title: 'La Nueva Era — Caso de estudio | Eduardo Orellana',
        description:
          'Marketplace de cosméticos para videojuegos: API REST en Flask, 18 endpoints, 12 tablas MySQL, JWT y frontend React.',
        path: '/proyectos/la-nueva-era',
        alternatePath: '/en/projects/la-nueva-era',
      },
      kicker: 'TFG · DAM 2025',
      title: 'La Nueva Era',
      lede: 'Un marketplace para comprar, vender e intercambiar cosméticos de videojuegos. API REST propia en Flask, base de datos MySQL de 12 tablas y frontend React, desplegado y funcionando.',
      facts: [
        { label: 'Rol', value: 'Diseño, backend, frontend y despliegue' },
        { label: 'Año', value: '2025' },
        { label: 'Contexto', value: 'TFG individual · I.E.S. Fuengirola Nº 1' },
        { label: 'Estado', value: 'Demo online' },
      ],
      links: [
        {
          label: 'Abrir demo',
          href: 'https://edufuengirola1.eu.pythonanywhere.com',
          external: true,
        },
        {
          label: 'Repositorio',
          href: 'https://github.com/edu444477/LaNuevaEra-Flask-React-App',
          external: true,
        },
        {
          label: 'Figma',
          href: 'https://www.figma.com/design/kISXqmAsysdjhPKFwqN86O/TFG---La-Nueva-Era?node-id=0-1&t=qHXMN0s4QUrsdAUu-1',
          external: true,
        },
      ],
      metrics: [
        { value: 18, label: 'endpoints REST' },
        { value: 12, label: 'tablas MySQL' },
        { value: 10, label: 'juegos' },
        { value: 5, label: 'categorías' },
      ],
      sections: [
        {
          id: 'problema',
          index: '01',
          title: 'El problema',
          paragraphs: [
            'El mercado de cosméticos de videojuegos está repartido en tiendas cerradas, foros y grupos de mensajería. Cada juego tiene su propio circuito, sus propias normas y su propia forma de pagar. Comprar una skin fuera de tu juego habitual suele ser más difícil que conseguirla dentro.',
            'La Nueva Era nace para centralizar ese mercado: un catálogo multijuego donde comprar, vender e intercambiar artículos cosméticos con una cuenta, un saldo virtual y un historial común. El objetivo del TFG era demostrar que se podía construir el producto completo —no solo la pantalla— con un stack que dominara de principio a fin.',
          ],
        },
        {
          id: 'producto',
          index: '02',
          title: 'Qué construí',
          paragraphs: [
            'El alcance funcional cubre el recorrido principal de un marketplace. Todo lo que aparece aquí está implementado y se puede probar en la demo.',
          ],
          bullets: [
            'Registro, login y sesión persistente con JWT.',
            'Catálogo con filtros por juego, categoría, precio y calidad.',
            'Ficha de producto, cesta y lista de deseos.',
            'Compra con saldo virtual y generación de pedidos.',
            'Inventario por usuario y flujo de venta de artículos.',
            'Perfil editable, cambio de contraseña y valoraciones.',
          ],
        },
        {
          id: 'arquitectura',
          index: '03',
          title: 'Cómo está montado',
          paragraphs: [
            'La aplicación se separa en dos piezas desplegadas juntas en PythonAnywhere: una SPA en React que consume una API REST en Flask. La base de datos es MySQL, con SQLAlchemy como ORM y Alembic para las migraciones.',
            'Separar frontend y API me obligó a definir contratos claros y a tratar los errores como estados de la interfaz, no como excepciones invisibles. Es la parte del proyecto de la que más he aprendido.',
          ],
          cards: [
            {
              title: 'SPA + API REST',
              body: '18 endpoints organizados por recurso: autenticación, productos, carrito, pedidos, inventario, deseos, perfil, intercambio y newsletter. Cada uno con sus códigos HTTP y validación de entrada.',
            },
            {
              title: 'Autenticación JWT',
              body: 'El login devuelve un token firmado; las rutas privadas lo validan en cada petición. Las contraseñas se guardan con hash Bcrypt, nunca en texto plano.',
            },
            {
              title: 'Modelo relacional',
              body: '12 tablas con claves foráneas y claves compuestas en carrito y deseos. Las migraciones permiten evolucionar el esquema sin perder los datos existentes.',
            },
          ],
        },
        {
          id: 'diseno',
          index: '04',
          title: 'Diseño',
          paragraphs: [
            'Antes de escribir el frontend prototipé la interfaz en Figma: flujos, pantallas de escritorio y móvil, y una paleta propia. La estética parte del mundo del videojuego —magenta, cian, negro— sin caer en el aspecto de tienda genérica.',
            'El logo, la paleta y las pantallas son míos. Es una de las partes del TFG que mejor explican cómo entiendo el producto: la interfaz no se dejó para el final.',
          ],
          gallery: [
            {
              src: '/images/la-nueva-era/logo.webp',
              alt: 'Logo de La Nueva Era con cabeza de lobo y corona de colores',
              caption: 'Identidad y logo',
              fit: 'contain',
            },
            {
              src: '/images/la-nueva-era/home-desktop.webp',
              alt: 'Pantalla de inicio de La Nueva Era en escritorio',
              caption: 'Home en escritorio',
            },
            {
              src: '/images/la-nueva-era/home-mobile.webp',
              alt: 'Pantalla de inicio de La Nueva Era en móvil',
              caption: 'Home en móvil',
              fit: 'contain',
            },
            {
              src: '/images/la-nueva-era/palette.webp',
              alt: 'Paleta de color del proyecto: magenta, negro, azul, cian y amarillo',
              caption: 'Paleta del proyecto',
              fit: 'contain',
            },
            {
              src: '/images/la-nueva-era/data-model.webp',
              alt: 'Diagrama entidad-relación con las tablas de La Nueva Era',
              caption: 'Modelo de datos',
              wide: true,
              fit: 'contain',
            },
          ],
        },
        {
          id: 'aprendizajes',
          index: '05',
          title: 'Lo que haría distinto',
          paragraphs: [
            'Un TFG se termina con el tiempo justo, y eso se nota en las decisiones que quedan a medias. Estas son las tres que hoy tomaría de otra forma:',
          ],
          bullets: [
            'Tests desde el primer endpoint. No hay ninguno, y el README original decía que sí; es la deuda más cara del proyecto.',
            'Secretos fuera del código. `config.py` acabó con credenciales y claves por defecto en un repositorio público. Hoy estarían en variables de entorno desde el primer commit.',
            'Un alcance más corto. Pase de batalla, suscripciones e intercambio quedaron incompletos; con menos funciones y más profundidad el producto habría sido mejor.',
          ],
        },
      ],
      closing: {
        title: 'La app sigue online',
        body: 'Puedes registrarte o entrar con el usuario de prueba y recorrer el catálogo, la cesta y el inventario. Si algo falla, la demo vive en un plan gratuito de PythonAnywhere y puede tardar en despertar.',
        cta: {
          label: 'Abrir La Nueva Era',
          href: 'https://edufuengirola1.eu.pythonanywhere.com',
          external: true,
        },
      },
    },

    portfolio: {
      slug: 'portfolio',
      seo: {
        title: 'Este portfolio — Caso de estudio | Eduardo Orellana',
        description:
          'Cómo está construido este portfolio: Angular 22 con signals, Tailwind 4, GSAP, prerender estático y despliegue en Vercel.',
        path: '/proyectos/portfolio',
        alternatePath: '/en/projects/portfolio',
      },
      kicker: 'Proyecto propio · 2026',
      title: 'Este portfolio',
      lede: 'El sitio que estás leyendo: Angular 22 con signals, Tailwind 4, GSAP y prerender estático en Vercel. También es la excusa para demostrar Angular en algo real.',
      facts: [
        { label: 'Rol', value: 'Diseño y desarrollo' },
        { label: 'Año', value: '2026' },
        { label: 'Stack', value: 'Angular 22 · Tailwind 4 · GSAP' },
        { label: 'Estado', value: 'Online' },
      ],
      links: [
        {
          label: 'Repositorio',
          href: 'https://github.com/edu444477/portfolio',
          external: true,
        },
      ],
      metrics: [
        { value: 2, label: 'idiomas' },
        { value: 2, label: 'temas' },
        { value: 0, label: 'cookies' },
      ],
      sections: [
        {
          id: 'por-que',
          index: '01',
          title: 'Por qué Angular',
          paragraphs: [
            'Mi experiencia profesional es React, y este proyecto no pretende ocultarlo. Angular entra como apuesta deliberada: quería aprender un framework con opiniones fuertes sobre arquitectura, tipado y herramientas, y hacerlo construyendo algo que se pudiera enseñar.',
            'El resultado usa Angular 22 standalone, signals, detección de cambios zoneless y prerender estático. No hay CMS ni backend propio: el contenido vive en TypeScript tipado y se renderiza en build time.',
          ],
        },
        {
          id: 'arquitectura',
          index: '02',
          title: 'Arquitectura',
          paragraphs: [
            'La estructura separa contenido, estado y presentación. Los componentes no inventan textos ni métricas: leen de un objeto tipado que existe en español e inglés.',
          ],
          cards: [
            {
              title: 'Prerender estático',
              body: 'Cada ruta se genera como HTML en el build. Vercel sirve archivos estáticos, sin servidor Node en el camino crítico, y el usuario recibe contenido antes de que arranque JavaScript.',
            },
            {
              title: 'Contenido tipado',
              body: 'Un único modelo `SiteContent` define todo lo que se puede decir. Si falta un campo en un idioma, TypeScript falla antes de publicar.',
            },
            {
              title: 'Animación con límites',
              body: 'GSAP se carga solo en el navegador, de forma diferida. Las animaciones se desactivan con `prefers-reduced-motion` y nunca bloquean la lectura.',
            },
          ],
        },
        {
          id: 'diseno',
          index: '03',
          title: 'Sistema de diseño',
          paragraphs: [
            'La dirección visual se llama “Taller”: un dossier técnico, con retícula visible, reglas de un píxel y fichas de proyecto en lugar de tarjetas decorativas. Archivo Expanded para titulares, Inter para lectura y JetBrains Mono para datos.',
            'Todo el color vive en tokens CSS. Cambiar el acento cobalto por otro es una línea; el tema claro y oscuro comparten la misma estructura.',
          ],
        },
        {
          id: 'calidad',
          index: '04',
          title: 'Accesibilidad y rendimiento',
          paragraphs: [
            'No es un portfolio perfecto, pero las decisiones de calidad son explícitas y verificables:',
          ],
          bullets: [
            'Contraste AA, foco visible y navegación completa por teclado.',
            'Enlace de salto al contenido y jerarquía de encabezados coherente.',
            'Fuentes autoalojadas, sin peticiones a Google Fonts.',
            'Cero cookies y cero analítica en la primera versión.',
            'Presupuesto de rendimiento medido con Lighthouse antes de cada deploy.',
          ],
        },
        {
          id: 'como',
          index: '05',
          title: 'Cómo se hizo',
          paragraphs: [
            'El andamiaje y parte del código se aceleraron con asistencia de IA; las decisiones de producto, el contenido, la dirección visual y la revisión son míos. Me parece honesto decirlo: la habilidad está en dirigir el proceso y saber qué se publica, no en teclear cada línea a mano.',
            'El repositorio es público. Si algo no te cuadra, puedes abrir un issue o escribirme.',
          ],
        },
      ],
      closing: {
        title: 'Código abierto',
        body: 'El repositorio incluye la estructura completa, el sistema de contenido y las decisiones técnicas documentadas.',
        cta: {
          label: 'Ver el repositorio',
          href: 'https://github.com/edu444477/portfolio',
          external: true,
        },
      },
    },
  },

  legal: {
    privacy: {
      seo: {
        title: 'Política de privacidad | Eduardo Orellana',
        description: 'Qué datos recoge este portfolio, para qué se usan y cómo ejercer tus derechos.',
        path: '/privacidad',
        alternatePath: '/en/privacy',
      },
      kicker: 'Legal',
      title: 'Política de privacidad',
      updated: 'Última actualización: 27 de octubre de 2026',
      intro:
        'Este sitio no usa cookies de analítica ni publicidad. Solo se recogen los datos que envías voluntariamente a través del formulario de contacto.',
      sections: [
        {
          title: '1. Responsable del tratamiento',
          paragraphs: [
            'Eduardo Orellana Pomares, con domicilio en Marbella (Málaga, España). Puedes contactar en eduardoorellanapomares@gmail.com.',
          ],
        },
        {
          title: '2. Datos que se tratan',
          paragraphs: [
            'Nombre, dirección de email y el contenido del mensaje que escribas en el formulario. No se solicita ningún otro dato personal.',
          ],
        },
        {
          title: '3. Finalidad y base legal',
          paragraphs: [
            'Los datos se usan únicamente para responder a tu consulta. La base legal es tu consentimiento al enviar el formulario (artículo 6.1.a del RGPD).',
          ],
        },
        {
          title: '4. Conservación',
          paragraphs: [
            'Se conservan el tiempo necesario para atender la consulta y, como máximo, doce meses. Después se eliminan.',
          ],
        },
        {
          title: '5. Destinatarios',
          paragraphs: [
            'El formulario se procesa mediante Web3Forms y el sitio se aloja en Vercel. Ambos actúan como encargados del tratamiento y no reciben los datos para fines propios. No se ceden datos a terceros salvo obligación legal.',
          ],
        },
        {
          title: '6. Tus derechos',
          paragraphs: [
            'Puedes solicitar acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo al email indicado. También puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).',
          ],
        },
        {
          title: '7. Cookies y almacenamiento local',
          paragraphs: [
            'No se usan cookies de terceros ni de analítica. Solo se guarda en el almacenamiento local del navegador la preferencia de tema (claro u oscuro). Es un dato técnico que no identifica a nadie y puedes borrarlo desde la configuración del navegador.',
          ],
        },
        {
          title: '8. Seguridad',
          paragraphs: [
            'El sitio se sirve por HTTPS y el acceso al correo está protegido. No se transmiten datos a través de conexiones no cifradas.',
          ],
        },
        {
          title: '9. Cambios',
          paragraphs: [
            'Si cambia esta política, se actualizará la fecha del encabezado. Los cambios relevantes se anunciarán en esta misma página.',
          ],
        },
      ],
    },
    notice: {
      seo: {
        title: 'Aviso legal | Eduardo Orellana',
        description: 'Titular, condiciones de uso y propiedad intelectual de este portfolio.',
        path: '/aviso-legal',
        alternatePath: '/en/legal-notice',
      },
      kicker: 'Legal',
      title: 'Aviso legal',
      updated: 'Última actualización: 27 de octubre de 2026',
      intro:
        'Este es un sitio personal de carácter informativo. No se realizan ventas ni se prestan servicios a través de él.',
      sections: [
        {
          title: '1. Titular',
          paragraphs: [
            'Eduardo Orellana Pomares, persona física con domicilio en Marbella (Málaga, España). Contacto: eduardoorellanapomares@gmail.com.',
          ],
        },
        {
          title: '2. Objeto',
          paragraphs: [
            'El sitio muestra el portfolio profesional de su titular: experiencia, proyectos y formas de contacto. Su uso es gratuito y no requiere registro.',
          ],
        },
        {
          title: '3. Propiedad intelectual',
          paragraphs: [
            'Los textos, el diseño y el código de este portfolio son de Eduardo Orellana Pomares, salvo donde se indique lo contrario. Las marcas, logos y capturas de Time At Work, A-Safe Digital y La Nueva Era pertenecen a sus respectivos titulares y se muestran con autorización o con fines de identificación profesional.',
          ],
        },
        {
          title: '4. Responsabilidad',
          paragraphs: [
            'Los enlaces externos se ofrecen como referencia. No me hago responsable del contenido de sitios de terceros ni de las condiciones de sus servicios.',
          ],
        },
        {
          title: '5. Legislación aplicable',
          paragraphs: [
            'Este aviso se rige por la legislación española. Cualquier controversia se someterá a los juzgados y tribunales competentes conforme a la normativa aplicable.',
          ],
        },
      ],
    },
  },

  notFound: {
    title: 'Esta página no existe',
    text: 'Puede que el enlace esté mal o que la página se haya movido. Vuelve al inicio y sigue desde allí.',
    cta: { label: 'Volver al inicio', href: '/' },
  },
};
