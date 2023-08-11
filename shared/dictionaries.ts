import 'server-only';

import { Dict } from './locales/en';

const en = () => import('./locales/en').then(module => module.en);
const es = () => import('./locales/es').then(module => module.es);
const pt = () => import('./locales/pt').then(module => module.pt);

export function getDictionary(locale: string): Promise<Dict> {
  switch (locale) {
    case 'en':
      return en();
    case 'es':
      return es();
    case 'pt':
      return pt();

    default:
      return en();
  }
}
