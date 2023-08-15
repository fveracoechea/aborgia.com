import { Fetchtastic } from 'fetchtastic/core';

import { PolicySchema, StrapiLocaleArraySchema } from './schema';

export const api = new Fetchtastic(process.env.NEXT_PUBLIC_CMS_URL).appendHeader(
  'Authorization',
  `bearer ${process.env.STRAPI_API_TOKEN}`,
);

export async function fetchPolicies(lang: string) {
  const config = api.appendSearchParam('locale', lang);
  const [privacy, terms] = await Promise.all([
    config.get('/api/privacy-policy').json(PolicySchema.parse),
    config.get('/api/terms-and-conditions-page').json(PolicySchema.parse),
  ]);

  return { privacy, terms };
}

export async function fetchLocales(lang: string) {
  const locales = await api.get('/api/i18n/locales').json(StrapiLocaleArraySchema.parse);
  const currentLocale = locales.find(l => l.code === lang);

  return {
    locales,
    currentLocale,
  };
}
