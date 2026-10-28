import { inject } from '@angular/core';
import type { CanActivateFn } from '@angular/router';
import type { Lang } from '../content/types';
import { LanguageService } from './language.service';

export const languageGuard = (lang: Lang): CanActivateFn => () => {
  inject(LanguageService).set(lang);
  return true;
};

export const urlLanguageGuard: CanActivateFn = (_route, state) => {
  inject(LanguageService).set(state.url.startsWith('/en') ? 'en' : 'es');
  return true;
};
