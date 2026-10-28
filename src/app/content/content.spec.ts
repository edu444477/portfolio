import { describe, expect, it } from 'vitest';
import { EN } from './en';
import { ES } from './es';
import type { SiteContent } from './types';

type Json = SiteContent | string | number | boolean | Json[] | { [key: string]: Json };

function walk(es: Json, en: Json, path = 'root'): void {
  if (Array.isArray(es) || Array.isArray(en)) {
    expect(Array.isArray(es), `${path}: ES debería ser un array`).toBe(true);
    expect(Array.isArray(en), `${path}: EN debería ser un array`).toBe(true);
    const a = es as Json[];
    const b = en as Json[];
    expect(b.length, `${path}: distinto número de elementos`).toBe(a.length);
    a.forEach((item, index) => walk(item, b[index], `${path}[${index}]`));
    return;
  }

  if (typeof es === 'object' && es !== null) {
    expect(typeof en, `${path}: EN debería ser un objeto`).toBe('object');
    const a = es as Record<string, Json>;
    const b = en as Record<string, Json>;
    expect(Object.keys(b).sort(), `${path}: claves distintas`).toEqual(Object.keys(a).sort());
    for (const key of Object.keys(a)) {
      walk(a[key], b[key], `${path}.${key}`);
    }
    return;
  }

  expect(typeof en, `${path}: tipo distinto`).toBe(typeof es);

  if (typeof es === 'number') {
    // Las cifras son datos verificados: no se traducen ni se redondean.
    expect(en, `${path}: la métrica cambia entre idiomas`).toBe(es);
    return;
  }

  if (typeof es === 'string') {
    expect((en as string).trim().length, `${path}: EN vacío`).toBeGreaterThan(0);
    expect((es as string).trim().length, `${path}: ES vacío`).toBeGreaterThan(0);
  }
}

describe('contenido ES/EN', () => {
  it('mantiene la misma estructura en los dos idiomas', () => {
    walk(ES, EN);
  });

  it('declara el idioma y el locale correctos', () => {
    expect(ES.lang).toBe('es');
    expect(ES.locale).toBe('es_ES');
    expect(EN.lang).toBe('en');
    expect(EN.locale).toBe('en_US');
  });

  it('empareja cada ruta con su alternativa en el otro idioma', () => {
    for (const page of [ES.meta, EN.meta]) {
      for (const meta of Object.values(page)) {
        const other = page === ES.meta ? EN.meta : ES.meta;
        const twin = Object.values(other).find((candidate) => candidate.path === meta.alternatePath);
        expect(twin, `${meta.path}: sin pareja en el otro idioma`).toBeDefined();
        expect(twin?.alternatePath, `${meta.path}: la pareja no apunta de vuelta`).toBe(meta.path);
      }
    }
  });

  it('no publica tests inexistentes en La Nueva Era', () => {
    const text = JSON.stringify(ES.caseStudies.laNuevaEra) + JSON.stringify(EN.caseStudies.laNuevaEra);
    expect(text).not.toMatch(/\bJest\b/i);
    expect(text).not.toMatch(/\bVitest\b/i);
    expect(text).not.toMatch(/tests? unitarios?/i);
  });

  it('no incluye el teléfono en ningún texto visible', () => {
    const text = JSON.stringify(ES) + JSON.stringify(EN);
    expect(text).not.toMatch(/711\s?78\s?22\s?95/);
  });
});
