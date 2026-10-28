import { expect, test } from '@playwright/test';

test.describe('home', () => {
  test('carga en español con el nombre y las secciones principales', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Eduardo');
    await expect(page.locator('#work')).toBeVisible();
    await expect(page.locator('#experience')).toBeVisible();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('se prerenderiza con contenido real', async ({ request }) => {
    const response = await request.get('/');
    const html = await response.text();

    expect(response.status()).toBe(200);
    expect(html).toContain('Eduardo Orellana');
    expect(html).toContain('La Nueva Era');
  });

  test('cambia a inglés con su propia ruta y metadatos', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'EN', exact: true }).click();

    await expect(page).toHaveURL(/\/en$/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Eduardo');
    await expect(page).toHaveTitle(/Full Stack Developer/);
  });

  test('alterna el tema y lo conserva al recargar', async ({ page }) => {
    await page.goto('/');
    const root = page.locator('html');
    const before = await root.getAttribute('class');

    await page.getByRole('button', { name: /Cambiar tema|Toggle theme/ }).click();
    const after = await root.getAttribute('class');
    expect(after).not.toBe(before);

    await page.reload();
    await expect(root).toHaveAttribute('class', after ?? '');
  });

  test('abre el caso de estudio desde la home', async ({ page }) => {
    await page.goto('/');
    await page.locator('#work a[href="/proyectos/la-nueva-era"]').first().click();

    await expect(page).toHaveURL(/\/proyectos\/la-nueva-era$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('La Nueva Era');
    await expect(page.getByText('TFG individual', { exact: false }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /Abrir demo/ })).toBeVisible();
  });

  test('valida el formulario antes de enviar', async ({ page }) => {
    await page.goto('/#contact');

    await page.getByRole('button', { name: 'Enviar mensaje' }).click();

    await expect(page.getByText('Este campo es obligatorio').first()).toBeVisible();
  });
});

test.describe('navegación y rutas', () => {
  test('el menú móvil se abre, anuncia el estado y se cierra con Escape', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const toggle = page.locator('button[aria-controls="mobile-menu"]');
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('#mobile-menu')).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(page.locator('#mobile-menu')).toHaveCount(0);
  });

  test('la 404 mantiene la cabecera y ofrece volver', async ({ page }) => {
    await page.goto('/404');

    await expect(page.getByRole('heading', { level: 1 })).toContainText('no existe');
    await expect(page.locator('app-site-header header')).toBeVisible();
  });

  test('el fallback 404.html existe para Vercel', async ({ request }) => {
    const response = await request.get('/404.html');

    expect(response.status()).toBe(200);
    expect(await response.text()).toContain('no existe');
  });

  test('una ruta inexistente acaba en la página 404', async ({ page }) => {
    await page.goto('/esta-pagina-no-existe');

    await expect(page.getByRole('heading', { level: 1 })).toContainText('no existe');
  });

  test('las páginas legales existen en los dos idiomas', async ({ page }) => {
    for (const path of ['/privacidad', '/aviso-legal', '/en/privacy', '/en/legal-notice']) {
      const response = await page.goto(path);
      expect(response?.status(), path).toBe(200);
      await expect(page.locator('h1')).toBeVisible();
    }
  });

  test('las imágenes principales cargan', async ({ page }) => {
    await page.goto('/');

    const portrait = page.locator('#about img');
    await portrait.scrollIntoViewIfNeeded();
    await expect
      .poll(() => portrait.evaluate((image) => (image as HTMLImageElement).naturalWidth))
      .toBeGreaterThan(0);

    const logo = page.locator('#work img').first();
    await logo.scrollIntoViewIfNeeded();
    await expect
      .poll(() => logo.evaluate((image) => (image as HTMLImageElement).naturalWidth))
      .toBeGreaterThan(0);
  });
});

test('sin enlaces externos que rompan la pestaña de origen', async ({ page }) => {
  await page.goto('/');

  const unsafe = await page.evaluate(() =>
    Array.from(document.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]'))
      .filter((link) => !(link.rel || '').includes('noopener'))
      .map((link) => link.href),
  );

  expect(unsafe).toEqual([]);
});
