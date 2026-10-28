import type { SiteContent } from './types';

export const EN: SiteContent = {
  lang: 'en',
  locale: 'en_US',
  meta: {
    home: {
      title: 'Eduardo Orellana — Full Stack Developer',
      description:
        'Full Stack developer based in Marbella. React, React Native and Ruby on Rails in production; Angular and Flask in personal projects.',
      path: '/en',
      alternatePath: '/',
    },
    laNuevaEra: {
      title: 'La Nueva Era — Case study | Eduardo Orellana',
      description:
        'A marketplace for video game cosmetics: Flask REST API, 18 endpoints, 12 MySQL tables, JWT and a React frontend.',
      path: '/en/projects/la-nueva-era',
      alternatePath: '/proyectos/la-nueva-era',
    },
    portfolio: {
      title: 'This portfolio — Case study | Eduardo Orellana',
      description:
        'How this portfolio is built: Angular 22 with signals, Tailwind 4, GSAP, static prerendering and Vercel.',
      path: '/en/projects/portfolio',
      alternatePath: '/proyectos/portfolio',
    },
    privacy: {
      title: 'Privacy policy | Eduardo Orellana',
      description: 'What data this portfolio collects, why, and how to exercise your rights.',
      path: '/en/privacy',
      alternatePath: '/privacidad',
    },
    legal: {
      title: 'Legal notice | Eduardo Orellana',
      description: 'Owner, terms of use and intellectual property of this portfolio.',
      path: '/en/legal-notice',
      alternatePath: '/aviso-legal',
    },
    notFound: {
      title: 'Page not found | Eduardo Orellana',
      description: 'The page you are looking for does not exist.',
      path: '/en/404',
      alternatePath: '/404',
    },
  },

  nav: [
    { label: 'Work', href: '/en#work' },
    { label: 'Experience', href: '/en#experience' },
    { label: 'Stack', href: '/en#stack' },
    { label: 'About', href: '/en#about' },
    { label: 'Contact', href: '/en#contact' },
  ],

  header: {
    status: 'Available now',
    menu: 'Open menu',
    close: 'Close menu',
    theme: 'Toggle theme',
    skip: 'Skip to content',
  },

  hero: {
    eyebrow: 'Portfolio · 2026',
    name: ['Eduardo', 'Orellana'],
    specTitle: 'Spec sheet',
    role: 'Full Stack Developer',
    lede: 'Two years building real products: mobile apps, frontend, APIs and an AI assistant. Now also Angular and Flask, through personal projects I show here.',
    ctas: [
      { label: 'See work', href: '#work' },
      { label: "Let's talk", href: '#contact' },
    ],
    spec: [
      { label: 'Role', value: 'Full Stack' },
      { label: 'Base', value: 'Marbella, ES' },
      { label: 'Focus', value: 'Web and mobile product' },
      { label: 'Languages', value: 'Spanish · Technical English' },
      { label: 'Status', value: 'Available' },
    ],
  },

  work: {
    label: '01 — Work',
    title: 'Selected work',
    intro:
      'Three different contexts: a final project that is a full product, a SaaS in production and an internal CRM. Every sheet says what I did and with what.',
    featuredCta: 'Read the full case',
    allLabel: 'Other work',
    featured: {
      slug: 'la-nueva-era',
      index: '01',
      kicker: 'Final project · DAM 2025',
      title: 'La Nueva Era',
      year: '2025',
      role: 'Design, backend, frontend and deployment',
      summary:
        'A marketplace to buy, sell and trade video game cosmetics. Its own Flask REST API, 12 relational tables and a React frontend, deployed and running.',
      stack: ['Flask', 'MySQL', 'JWT', 'React 19'],
      metrics: [
        { value: 18, label: 'REST endpoints' },
        { value: 12, label: 'tables' },
        { value: 10, label: 'games' },
      ],
      links: [{ label: 'Live demo', href: 'https://edufuengirola1.eu.pythonanywhere.com', external: true }],
      image: '/images/la-nueva-era/logo.webp',
      imageAlt: 'La Nueva Era logo: a wolf head with a colourful crown on a dark background',
    },
    others: [
      {
        slug: 'time-at-work',
        index: '02',
        kicker: 'SaaS product · 2025–2026',
        title: 'Time At Work',
        year: '2025–2026',
        role: 'Full Stack',
        summary:
          'Enterprise time tracking. Complete iOS and Android apps, web frontend, Ruby on Rails API and an AI assistant that automates queries inside the platform.',
        stack: ['React Native', 'React', 'Rails', 'PostgreSQL'],
        links: [
          { label: 'Website', href: 'https://timeatwork.net/', external: true },
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
        kicker: 'Internship · 2023–2024',
        title: 'A-Safe Digital',
        year: '2023–2024',
        role: 'Frontend',
        summary:
          'First the corporate website; then a custom internal CRM for the company, with its own reusable component library and new features.',
        stack: ['Next.js', 'React', 'Tailwind'],
        links: [{ label: 'Website', href: 'https://www.asafedigital.com/', external: true }],
      },
      {
        slug: 'portfolio',
        index: '04',
        kicker: 'Personal project · 2026',
        title: 'This portfolio',
        year: '2026',
        role: 'Design and development',
        summary:
          'Angular 22 with signals, Tailwind 4, GSAP and static prerendering on Vercel. Two languages, two themes and zero cookies.',
        stack: ['Angular 22', 'Tailwind 4', 'GSAP', 'Vercel'],
        links: [{ label: 'Read the case', href: '/en/projects/portfolio' }],
      },
      {
        slug: 'technical-tests',
        index: '05',
        kicker: 'Public repos',
        title: 'Technical tests',
        year: '2024–2026',
        role: 'Development',
        summary:
          'Two published technical tests: a React and Redux SPA, and a Playwright testing suite in Python.',
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
    label: '02 — Track record',
    title: 'Where I have worked',
    intro: 'Three stages, three ways of building: a product in production, an agency and an international internship.',
    items: [
      {
        period: 'Jun 2025 — Jun 2026',
        role: 'Full Stack Developer',
        company: 'VoIPer Telecom',
        context: 'On-site · Permanent',
        bullets: [
          'Built TAW end to end: iOS and Android apps, web frontend and REST API.',
          'Implemented the AI assistant that automates queries inside the platform.',
          'Contributed to the commercial website and to product technical decisions.',
        ],
        stack: ['React Native', 'React', 'Ruby on Rails', 'PostgreSQL'],
      },
      {
        period: 'Nov 2023 — May 2024',
        role: 'Frontend Developer',
        company: 'A-Safe Digital',
        context: 'Internship · Málaga · Hybrid',
        bullets: [
          'Built the corporate website with React, Next.js and Tailwind.',
          'Developed a custom internal CRM and its reusable component library.',
          'Collaborated on new features and platform maintenance.',
        ],
        stack: ['React', 'Next.js', 'Tailwind'],
      },
      {
        period: 'Apr 2023 — Jun 2023',
        role: 'Full Stack Developer',
        company: 'Elitech Lab',
        context: 'Internship · London · Remote',
        bullets: [
          'Added features to enterprise management applications with CodeIgniter 3.',
          'Automated MySQL data insertion and update processes.',
          'Worked remotely with a team based in London.',
        ],
        stack: ['PHP', 'CodeIgniter', 'Bootstrap', 'MySQL'],
      },
    ],
  },

  skills: {
    label: '03 — Tools',
    title: 'What I work with',
    intro: 'Every technology carries its context. No percentage bars: what matters is where and why I used it.',
    groups: [
      {
        title: 'Frontend',
        items: [
          { name: 'React', evidence: 'production' },
          { name: 'React Native', evidence: 'production' },
          { name: 'TypeScript', evidence: 'production' },
          { name: 'Next.js', evidence: 'production' },
          { name: 'Tailwind CSS', evidence: 'production' },
          { name: 'Angular 22', evidence: 'personal project' },
        ],
      },
      {
        title: 'Backend',
        items: [
          { name: 'Ruby on Rails', evidence: 'production' },
          { name: 'Flask', evidence: 'final project' },
          { name: 'PHP / CodeIgniter', evidence: 'internship' },
          { name: 'Node.js', evidence: 'personal project' },
        ],
      },
      {
        title: 'Data',
        items: [
          { name: 'PostgreSQL', evidence: 'production' },
          { name: 'MySQL', evidence: 'production · final project' },
          { name: 'SQLAlchemy', evidence: 'final project' },
          { name: 'JWT + Bcrypt', evidence: 'final project' },
        ],
      },
      {
        title: 'Product',
        items: [
          { name: 'Figma', evidence: 'final project · daily' },
          { name: 'Git / GitHub', evidence: 'daily' },
          { name: 'Jira', evidence: 'daily' },
          { name: 'Applied AI', evidence: 'production' },
        ],
      },
    ],
  },

  about: {
    label: '04 — About',
    title: 'Who is behind this',
    paragraphs: [
      'I started with DAW, continued with DAM and closed the cycle with a final project that was a complete marketplace. Since then I have not stopped building: first at A-Safe, then at VoIPer, where TAW became my reference project.',
      'I like to understand the whole product. I have worked on mobile apps, frontend, APIs, databases and an AI assistant, and I am comfortable moving between layers. I learn fast and would rather ship something real than something perfect on paper.',
      'Right now I am going deeper into Angular and Flask through personal projects, and looking for a team where I can keep growing as a product developer.',
    ],
    photoAlt: 'Portrait of Eduardo Orellana Pomares',
    educationTitle: 'Education',
    education: [
      {
        period: '2024 — 2025',
        title: 'Higher Technician in Multiplatform Application Development',
        place: 'I.E.S. Fuengirola Nº 1',
      },
      {
        period: '2021 — 2023',
        title: 'Higher Technician in Web Application Development',
        place: 'I.E.S. Mar de Alborán',
        note: 'Honours Diploma',
      },
      {
        period: '2017 — 2019',
        title: 'Science and Technology Baccalaureate',
        place: 'I.E.S. Vega de Mar',
      },
    ],
    coursesTitle: 'Courses',
    courses: ['Python 3, NumPy and Pandas', 'WordPress, WooCommerce and SEO', 'Figma for product'],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'Technical · reading and writing' },
    ],
  },

  contact: {
    label: '05 — Contact',
    title: "Let's talk",
    text: 'Do you have a project, a role or a question? Write to me and I will reply within 24–48 hours.',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@email.com',
      messagePlaceholder: 'Tell me what you have in mind',
      submit: 'Send message',
      sending: 'Sending…',
      success: 'Message sent. I will reply within 24–48 hours.',
      error: 'The message could not be sent. Email me directly at eduardoorellanapomares@gmail.com.',
      privacyPrefix: 'By sending you accept the',
      privacyLink: 'privacy policy',
      required: 'This field is required',
    },
    direct: [
      { label: 'eduardoorellanapomares@gmail.com', href: 'mailto:eduardoorellanapomares@gmail.com' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eduardoorellanapomares/', external: true },
      { label: 'GitHub', href: 'https://github.com/edu444477', external: true },
    ],
  },

  footer: {
    note: 'Designed and built by Eduardo Orellana.',
    built: 'Angular 22 · Tailwind 4 · GSAP · Vercel',
    links: [
      { label: 'Download CV', href: '/cv/eduardo-orellana-cv.pdf' },
      { label: 'GitHub', href: 'https://github.com/edu444477', external: true },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/eduardoorellanapomares/', external: true },
      { label: 'Privacy', href: '/en/privacy' },
      { label: 'Legal notice', href: '/en/legal-notice' },
    ],
    backToTop: 'Back to top',
    copyright: '© 2026 Eduardo Orellana Pomares',
  },

  caseStudies: {
    laNuevaEra: {
      slug: 'la-nueva-era',
      seo: {
        title: 'La Nueva Era — Case study | Eduardo Orellana',
        description:
          'A marketplace for video game cosmetics: Flask REST API, 18 endpoints, 12 MySQL tables, JWT and a React frontend.',
        path: '/en/projects/la-nueva-era',
        alternatePath: '/proyectos/la-nueva-era',
      },
      kicker: 'Final project · DAM 2025',
      title: 'La Nueva Era',
      lede: 'A marketplace to buy, sell and trade video game cosmetics. Its own Flask REST API, a 12-table MySQL database and a React frontend, deployed and running.',
      facts: [
        { label: 'Role', value: 'Design, backend, frontend and deployment' },
        { label: 'Year', value: '2025' },
        { label: 'Context', value: 'Individual final project · I.E.S. Fuengirola Nº 1' },
        { label: 'Status', value: 'Live demo' },
      ],
      links: [
        {
          label: 'Open demo',
          href: 'https://edufuengirola1.eu.pythonanywhere.com',
          external: true,
        },
        {
          label: 'Repository',
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
        { value: 18, label: 'REST endpoints' },
        { value: 12, label: 'MySQL tables' },
        { value: 10, label: 'games' },
        { value: 5, label: 'categories' },
      ],
      sections: [
        {
          id: 'problem',
          index: '01',
          title: 'The problem',
          paragraphs: [
            'The video game cosmetics market is split across closed stores, forums and messaging groups. Every game has its own circuit, its own rules and its own way of paying. Buying a skin outside your usual game is often harder than getting it inside.',
            'La Nueva Era was created to centralise that market: a multi-game catalogue where you can buy, sell and trade cosmetic items with one account, one virtual balance and one shared history. The goal of the final project was to prove that the whole product could be built — not just the screen — with a stack I understood from end to end.',
          ],
        },
        {
          id: 'product',
          index: '02',
          title: 'What I built',
          paragraphs: [
            'The functional scope covers the main journey of a marketplace. Everything listed here is implemented and can be tested in the demo.',
          ],
          bullets: [
            'Registration, login and persistent session with JWT.',
            'Catalogue with filters by game, category, price and quality.',
            'Product detail, shopping cart and wishlist.',
            'Purchase with virtual balance and order generation.',
            'Per-user inventory and item selling flow.',
            'Editable profile, password change and ratings.',
          ],
        },
        {
          id: 'architecture',
          index: '03',
          title: 'How it is put together',
          paragraphs: [
            'The application is split into two pieces deployed together on PythonAnywhere: a React SPA consuming a Flask REST API. The database is MySQL, with SQLAlchemy as the ORM and Alembic for migrations.',
            'Separating frontend and API forced me to define clear contracts and to treat errors as interface states, not invisible exceptions. It is the part of the project I learned the most from.',
          ],
          cards: [
            {
              title: 'SPA + REST API',
              body: '18 endpoints organised by resource: authentication, products, cart, orders, inventory, wishlist, profile, trading and newsletter. Each with its own HTTP codes and input validation.',
            },
            {
              title: 'JWT authentication',
              body: 'Login returns a signed token; private routes validate it on every request. Passwords are stored with a Bcrypt hash, never in plain text.',
            },
            {
              title: 'Relational model',
              body: '12 tables with foreign keys and composite keys in cart and wishlist. Migrations allow the schema to evolve without losing existing data.',
            },
          ],
        },
        {
          id: 'design',
          index: '04',
          title: 'Design',
          paragraphs: [
            'Before writing the frontend I prototyped the interface in Figma: flows, desktop and mobile screens, and a custom palette. The visual language comes from gaming — magenta, cyan, black — without falling into the look of a generic store.',
            'The logo, palette and screens are mine. It is one of the parts of the project that best explains how I understand product: the interface was not left for the end.',
          ],
          gallery: [
            {
              src: '/images/la-nueva-era/logo.webp',
              alt: 'La Nueva Era logo with a wolf head and a colourful crown',
              caption: 'Identity and logo',
              fit: 'contain',
            },
            {
              src: '/images/la-nueva-era/home-desktop.webp',
              alt: 'La Nueva Era home screen on desktop',
              caption: 'Desktop home',
            },
            {
              src: '/images/la-nueva-era/home-mobile.webp',
              alt: 'La Nueva Era home screen on mobile',
              caption: 'Mobile home',
              fit: 'contain',
            },
            {
              src: '/images/la-nueva-era/palette.webp',
              alt: 'Project colour palette: magenta, black, blue, cyan and yellow',
              caption: 'Project palette',
              fit: 'contain',
            },
            {
              src: '/images/la-nueva-era/data-model.webp',
              alt: 'Entity-relationship diagram with the La Nueva Era tables',
              caption: 'Data model',
              wide: true,
              fit: 'contain',
            },
          ],
        },
        {
          id: 'learnings',
          index: '05',
          title: 'What I would do differently',
          paragraphs: [
            'A final project is finished on a tight deadline, and that shows in the decisions left half-done. These are the three I would take differently today:',
          ],
          bullets: [
            'Tests from the first endpoint. There are none, and the original README said there were; it is the most expensive debt in the project.',
            'Secrets out of the code. `config.py` ended up with credentials and default keys in a public repository. Today they would live in environment variables from the first commit.',
            'A shorter scope. Battle pass, subscriptions and trading were left incomplete; with fewer features and more depth the product would have been better.',
          ],
        },
      ],
      closing: {
        title: 'The app is still online',
        body: 'You can sign up or use the test account and browse the catalogue, cart and inventory. If something fails, the demo runs on a free PythonAnywhere plan and may take a while to wake up.',
        cta: {
          label: 'Open La Nueva Era',
          href: 'https://edufuengirola1.eu.pythonanywhere.com',
          external: true,
        },
      },
    },

    portfolio: {
      slug: 'portfolio',
      seo: {
        title: 'This portfolio — Case study | Eduardo Orellana',
        description:
          'How this portfolio is built: Angular 22 with signals, Tailwind 4, GSAP, static prerendering and Vercel.',
        path: '/en/projects/portfolio',
        alternatePath: '/proyectos/portfolio',
      },
      kicker: 'Personal project · 2026',
      title: 'This portfolio',
      lede: 'The site you are reading: Angular 22 with signals, Tailwind 4, GSAP and static prerendering on Vercel. It is also the excuse to prove Angular on something real.',
      facts: [
        { label: 'Role', value: 'Design and development' },
        { label: 'Year', value: '2026' },
        { label: 'Stack', value: 'Angular 22 · Tailwind 4 · GSAP' },
        { label: 'Status', value: 'Online' },
      ],
      links: [
        {
          label: 'Repository',
          href: 'https://github.com/edu444477/portfolio',
          external: true,
        },
      ],
      metrics: [
        { value: 2, label: 'languages' },
        { value: 2, label: 'themes' },
        { value: 0, label: 'cookies' },
      ],
      sections: [
        {
          id: 'why',
          index: '01',
          title: 'Why Angular',
          paragraphs: [
            'My professional experience is React, and this project does not try to hide it. Angular is a deliberate bet: I wanted to learn a framework with strong opinions about architecture, typing and tooling, and do it by building something I could show.',
            'The result uses Angular 22 standalone components, signals, zoneless change detection and static prerendering. There is no CMS or custom backend: content lives in typed TypeScript and is rendered at build time.',
          ],
        },
        {
          id: 'architecture',
          index: '02',
          title: 'Architecture',
          paragraphs: [
            'The structure separates content, state and presentation. Components do not invent copy or metrics: they read from a typed object that exists in Spanish and English.',
          ],
          cards: [
            {
              title: 'Static prerendering',
              body: 'Every route is generated as HTML at build time. Vercel serves static files, with no Node server on the critical path, and users get content before JavaScript starts.',
            },
            {
              title: 'Typed content',
              body: 'A single `SiteContent` model defines everything that can be said. If a field is missing in one language, TypeScript fails before publishing.',
            },
            {
              title: 'Animation with limits',
              body: 'GSAP is loaded lazily, only in the browser. Animations are disabled under `prefers-reduced-motion` and never block reading.',
            },
          ],
        },
        {
          id: 'design',
          index: '03',
          title: 'Design system',
          paragraphs: [
            'The visual direction is called “Workshop”: a technical dossier with a visible grid, one-pixel rules and project sheets instead of decorative cards. Archivo Expanded for headlines, Inter for reading and JetBrains Mono for data.',
            'All colour lives in CSS tokens. Changing the cobalt accent is one line; light and dark themes share the same structure.',
          ],
        },
        {
          id: 'quality',
          index: '04',
          title: 'Accessibility and performance',
          paragraphs: [
            'It is not a perfect portfolio, but the quality decisions are explicit and verifiable:',
          ],
          bullets: [
            'AA contrast, visible focus and full keyboard navigation.',
            'Skip link and a coherent heading hierarchy.',
            'Self-hosted fonts, no requests to Google Fonts.',
            'Zero cookies and zero analytics in the first version.',
            'A performance budget measured with Lighthouse before every deploy.',
          ],
        },
        {
          id: 'how',
          index: '05',
          title: 'How it was made',
          paragraphs: [
            'Scaffolding and part of the code were accelerated with AI assistance; product decisions, content, visual direction and review are mine. I think it is honest to say so: the skill is in directing the process and knowing what gets published, not in typing every line by hand.',
            'The repository is public. If something does not add up, you can open an issue or write to me.',
          ],
        },
      ],
      closing: {
        title: 'Open source',
        body: 'The repository includes the full structure, the content system and the documented technical decisions.',
        cta: {
          label: 'View repository',
          href: 'https://github.com/edu444477/portfolio',
          external: true,
        },
      },
    },
  },

  legal: {
    privacy: {
      seo: {
        title: 'Privacy policy | Eduardo Orellana',
        description: 'What data this portfolio collects, why, and how to exercise your rights.',
        path: '/en/privacy',
        alternatePath: '/privacidad',
      },
      kicker: 'Legal',
      title: 'Privacy policy',
      updated: 'Last updated: 27 October 2026',
      intro:
        'This site does not use analytics or advertising cookies. It only collects the data you voluntarily send through the contact form.',
      sections: [
        {
          title: '1. Data controller',
          paragraphs: [
            'Eduardo Orellana Pomares, based in Marbella (Málaga, Spain). You can contact me at eduardoorellanapomares@gmail.com.',
          ],
        },
        {
          title: '2. Data processed',
          paragraphs: [
            'Name, email address and the content of the message you write in the form. No other personal data is requested.',
          ],
        },
        {
          title: '3. Purpose and legal basis',
          paragraphs: [
            'Data is used only to reply to your enquiry. The legal basis is your consent when submitting the form (Article 6.1.a GDPR).',
          ],
        },
        {
          title: '4. Retention',
          paragraphs: [
            'Data is kept for as long as necessary to handle the enquiry and for a maximum of twelve months. It is then deleted.',
          ],
        },
        {
          title: '5. Recipients',
          paragraphs: [
            'The form is processed through Web3Forms and the site is hosted on Vercel. Both act as data processors and do not receive the data for their own purposes. No data is shared with third parties except where legally required.',
          ],
        },
        {
          title: '6. Your rights',
          paragraphs: [
            'You can request access, rectification, erasure, objection, restriction and portability by writing to the email above. You can also complain to the Spanish Data Protection Agency (www.aepd.es).',
          ],
        },
        {
          title: '7. Cookies and local storage',
          paragraphs: [
            'No third-party or analytics cookies are used. Only your theme preference (light or dark) is stored in the browser local storage. It is a technical value that identifies nobody, and you can clear it from your browser settings.',
          ],
        },
        {
          title: '8. Security',
          paragraphs: [
            'The site is served over HTTPS and email access is protected. No data is transmitted over unencrypted connections.',
          ],
        },
        {
          title: '9. Changes',
          paragraphs: [
            'If this policy changes, the date in the header will be updated. Relevant changes will be announced on this same page.',
          ],
        },
      ],
    },
    notice: {
      seo: {
        title: 'Legal notice | Eduardo Orellana',
        description: 'Owner, terms of use and intellectual property of this portfolio.',
        path: '/en/legal-notice',
        alternatePath: '/aviso-legal',
      },
      kicker: 'Legal',
      title: 'Legal notice',
      updated: 'Last updated: 27 October 2026',
      intro:
        'This is a personal, informational website. No sales are made and no services are provided through it.',
      sections: [
        {
          title: '1. Owner',
          paragraphs: [
            'Eduardo Orellana Pomares, an individual based in Marbella (Málaga, Spain). Contact: eduardoorellanapomares@gmail.com.',
          ],
        },
        {
          title: '2. Purpose',
          paragraphs: [
            'The site shows its owner’s professional portfolio: experience, projects and ways to get in touch. Use is free and requires no registration.',
          ],
        },
        {
          title: '3. Intellectual property',
          paragraphs: [
            'The text, design and code of this portfolio belong to Eduardo Orellana Pomares unless stated otherwise. The brands, logos and screenshots of Time At Work, A-Safe Digital and La Nueva Era belong to their respective owners and are shown with permission or for professional identification purposes.',
          ],
        },
        {
          title: '4. Liability',
          paragraphs: [
            'External links are provided for reference. I am not responsible for the content of third-party sites or the terms of their services.',
          ],
        },
        {
          title: '5. Applicable law',
          paragraphs: [
            'This notice is governed by Spanish law. Any dispute will be submitted to the competent courts and tribunals under applicable regulations.',
          ],
        },
      ],
    },
  },

  notFound: {
    title: 'This page does not exist',
    text: 'The link may be wrong or the page may have moved. Go back home and start from there.',
    cta: { label: 'Back home', href: '/en' },
  },
};
