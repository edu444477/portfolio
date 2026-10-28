import type { Routes } from '@angular/router';
import { languageGuard, urlLanguageGuard } from './core/language.guard';

const notFound = () => import('./pages/not-found/not-found.page').then((m) => m.NotFoundPage);

export const routes: Routes = [
  {
    path: '',
    canActivate: [languageGuard('es')],
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'en',
    canActivate: [languageGuard('en')],
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'proyectos/la-nueva-era',
    canActivate: [languageGuard('es')],
    data: { case: 'laNuevaEra' },
    loadComponent: () => import('./pages/project/project.page').then((m) => m.ProjectPage),
  },
  {
    path: 'en/projects/la-nueva-era',
    canActivate: [languageGuard('en')],
    data: { case: 'laNuevaEra' },
    loadComponent: () => import('./pages/project/project.page').then((m) => m.ProjectPage),
  },
  {
    path: 'proyectos/portfolio',
    canActivate: [languageGuard('es')],
    data: { case: 'portfolio' },
    loadComponent: () => import('./pages/project/project.page').then((m) => m.ProjectPage),
  },
  {
    path: 'en/projects/portfolio',
    canActivate: [languageGuard('en')],
    data: { case: 'portfolio' },
    loadComponent: () => import('./pages/project/project.page').then((m) => m.ProjectPage),
  },
  {
    path: 'privacidad',
    canActivate: [languageGuard('es')],
    data: { doc: 'privacy' },
    loadComponent: () => import('./pages/legal/legal.page').then((m) => m.LegalPage),
  },
  {
    path: 'aviso-legal',
    canActivate: [languageGuard('es')],
    data: { doc: 'notice' },
    loadComponent: () => import('./pages/legal/legal.page').then((m) => m.LegalPage),
  },
  {
    path: 'en/privacy',
    canActivate: [languageGuard('en')],
    data: { doc: 'privacy' },
    loadComponent: () => import('./pages/legal/legal.page').then((m) => m.LegalPage),
  },
  {
    path: 'en/legal-notice',
    canActivate: [languageGuard('en')],
    data: { doc: 'notice' },
    loadComponent: () => import('./pages/legal/legal.page').then((m) => m.LegalPage),
  },
  // Página 404 real, prerenderizada y copiada a /404.html para Vercel.
  { path: '404', canActivate: [languageGuard('es')], loadComponent: notFound },
  { path: 'en/404', canActivate: [languageGuard('en')], loadComponent: notFound },
  { path: '**', canActivate: [urlLanguageGuard], loadComponent: notFound },
];
