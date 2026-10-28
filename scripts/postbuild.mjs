/**
 * Postbuild:
 * 1. Copia el 404 prerenderizado a `404.html`, que es lo que Vercel sirve
 *    para cualquier ruta inexistente en un sitio estático.
 * 2. Completa la precarga de fuentes del primer pantallazo. Angular ya
 *    precarga Archivo y JetBrains Mono; Inter, la fuente del texto, faltaba
 *    y provocaba un cambio de tipografía después del primer paint.
 */
import { copyFile, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = 'dist/portfolio/browser';

await copyFile(join(root, '404', 'index.html'), join(root, '404.html'));

const cssFile = (await readdir(root)).find((file) => /^styles-.*\.css$/.test(file));

if (!cssFile) {
  throw new Error('postbuild: no se encontró la hoja de estilos del build');
}

const css = await readFile(join(root, cssFile), 'utf8');
const wanted = ['archivo-latin-wdth-normal', 'inter-latin-wght-normal'];

const fonts = [...css.matchAll(/url\("\.\/(media\/[^"]+\.woff2)"\)/g)]
  .map((match) => match[1])
  .filter((path) => wanted.some((name) => path.includes(name)));

async function htmlEntryPoints(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const found = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) {
      found.push(...(await htmlEntryPoints(path)));
    } else if (entry.name === 'index.html' || entry.name === '404.html') {
      found.push(path);
    }
  }

  return found;
}

const pages = await htmlEntryPoints(root);
let injected = 0;

for (const page of pages) {
  const html = await readFile(page, 'utf8');
  const missing = fonts.filter((font) => !html.includes(font));

  if (missing.length === 0) {
    continue;
  }

  const links = missing
    .map((font) => `<link rel="preload" href="/${font}" as="font" type="font/woff2" crossorigin>`)
    .join('');

  await writeFile(page, html.replace('</title>', `</title>${links}`), 'utf8');
  injected += missing.length;
}

await stat(join(root, '404.html'));

console.log(
  `postbuild: 404.html listo · ${injected} precargas de fuente añadidas en ${pages.length} páginas`,
);
