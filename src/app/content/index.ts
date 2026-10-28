import { EN } from './en';
import { ES } from './es';
import type { Lang, SiteContent } from './types';

export const CONTENT: Record<Lang, SiteContent> = { es: ES, en: EN };

export type { Lang, SiteContent } from './types';
