import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const pages = [
  { path: '/', name: 'home ES' },
  { path: '/en', name: 'home EN' },
  { path: '/proyectos/la-nueva-era', name: 'caso La Nueva Era' },
  { path: '/privacidad', name: 'privacidad' },
  { path: '/404', name: '404' },
];

for (const page of pages) {
  test(`${page.name} sin violaciones críticas de accesibilidad`, async ({ browser }) => {
    const context = await browser.newContext();
    const tab = await context.newPage();
    await tab.goto(page.path);

    const results = await new AxeBuilder({ page: tab })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const serious = results.violations.filter(
      (violation) => violation.impact === 'critical' || violation.impact === 'serious',
    );

    expect(
      serious.map((violation) => ({
        id: violation.id,
        impact: violation.impact,
        nodes: violation.nodes.map((node) => node.target.join(' ')),
      })),
    ).toEqual([]);

    await context.close();
  });
}
