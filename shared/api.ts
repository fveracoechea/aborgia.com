import { Fetchtastic } from 'fetchtastic/core';

import {
  CoverageListSchema,
  InsuranceSchema,
  PolicySchema,
  StrapiLocaleArraySchema,
} from './schema';
import { data } from './ui/theme';

export const api = new Fetchtastic(process.env.NEXT_PUBLIC_CMS_URL).appendHeader(
  'Authorization',
  `bearer ${process.env.STRAPI_API_TOKEN}`,
);

export async function fetchPolicies(lang: string) {
  const config = api.appendSearchParam('locale', lang).appendSearchParam('populate', 'link');
  const [privacy, terms] = await Promise.all([
    config.get('/api/privacy-policy').json(PolicySchema.parse),
    config.get('/api/terms-and-conditions-page').json(PolicySchema.parse),
  ]);

  return { privacy, terms };
}

export function fetchInsurance(lang: string) {
  return api.appendSearchParam('locale', lang).get('/api/insurance').json(InsuranceSchema.parse);
}

export async function fetchLocales(lang: string) {
  const locales = await api.get('/api/i18n/locales').json(StrapiLocaleArraySchema.parse);
  const currentLocale = locales.find(l => l.code === lang);

  return {
    locales,
    currentLocale,
  };
}

export async function fetchCoverages(lang: string) {
  return api
    .appendSearchParam('locale', lang)
    .appendSearchParam('populate', 'link, image')
    .get('/api/insurance-coverages')
    .json(CoverageListSchema.parse);
}

export async function fetchCoverageByLinkUrl(lang: string, url: string) {
  const results = await api
    .appendSearchParam('locale', lang)
    .appendSearchParam('populate', 'link, image')
    .appendSearchParam('filters[link][url][$eq]', url)
    .get('/api/insurance-coverages')
    .json(CoverageListSchema.parse);

  console.log('results ', results);

  return results.data.length === 1 ? results.data[0] : null;
}
