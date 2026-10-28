const TO_EN: Record<string, string> = {
  '/': '/en',
  '/proyectos/la-nueva-era': '/en/projects/la-nueva-era',
  '/proyectos/portfolio': '/en/projects/portfolio',
  '/privacidad': '/en/privacy',
  '/aviso-legal': '/en/legal-notice',
};

const TO_ES: Record<string, string> = Object.fromEntries(
  Object.entries(TO_EN).map(([es, en]) => [en, es]),
);

export function alternatePath(url: string): string {
  const clean = url.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';

  if (clean === '/en') {
    return '/';
  }

  if (clean.startsWith('/en')) {
    return TO_ES[clean] ?? '/';
  }

  return TO_EN[clean] ?? '/en';
}
