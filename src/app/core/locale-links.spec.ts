import { describe, expect, it } from 'vitest';
import { alternatePath } from './locale-links';

describe('alternatePath', () => {
  it('traduce la home en los dos sentidos', () => {
    expect(alternatePath('/')).toBe('/en');
    expect(alternatePath('/en')).toBe('/');
  });

  it('traduce las rutas de proyecto', () => {
    expect(alternatePath('/proyectos/la-nueva-era')).toBe('/en/projects/la-nueva-era');
    expect(alternatePath('/en/projects/la-nueva-era')).toBe('/proyectos/la-nueva-era');
    expect(alternatePath('/proyectos/portfolio')).toBe('/en/projects/portfolio');
    expect(alternatePath('/en/projects/portfolio')).toBe('/proyectos/portfolio');
  });

  it('traduce las páginas legales', () => {
    expect(alternatePath('/privacidad')).toBe('/en/privacy');
    expect(alternatePath('/en/privacy')).toBe('/privacidad');
    expect(alternatePath('/aviso-legal')).toBe('/en/legal-notice');
    expect(alternatePath('/en/legal-notice')).toBe('/aviso-legal');
  });

  it('ignora query, hash y barra final', () => {
    expect(alternatePath('/proyectos/la-nueva-era/?x=1#top')).toBe('/en/projects/la-nueva-era');
  });

  it('cae en una ruta válida cuando no conoce la página', () => {
    expect(alternatePath('/ruta-inexistente')).toBe('/en');
    expect(alternatePath('/en/ruta-inexistente')).toBe('/');
  });
});
