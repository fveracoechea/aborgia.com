import { Fetchtastic } from 'fetchtastic/core';

import {
  ClientListSchema,
  CoverageListSchema,
  InsuranceSchema,
  PolicySchema,
  StrapiLocaleArraySchema,
} from './schema';

export function getImageSrc(path: string) {
  return `${process.env.NEXT_PUBLIC_CMS_URL}${path}`;
}

export const reCAPTCHA = new Fetchtastic('https://www.google.com/recaptcha/api')
  .appendHeader('Content-Type', 'application/json')
  .appendHeader('Accept', 'application/json');

export const strapi = new Fetchtastic(process.env.NEXT_PUBLIC_CMS_URL)
  .appendHeader('Content-Type', 'application/json')
  .appendHeader('Accept', 'application/json')
  .appendHeader('Authorization', `bearer ${process.env.STRAPI_API_TOKEN}`);

export async function fetchPolicies(lang: string) {
  const config = strapi.appendSearchParam('locale', lang).appendSearchParam('populate', 'link');
  const [privacy, terms] = await Promise.all([
    config.get('/api/privacy-policy').json(PolicySchema.parse),
    config.get('/api/terms-and-conditions-page').json(PolicySchema.parse),
  ]);

  return { privacy, terms };
}

export function fetchInsurance(lang: string) {
  return strapi.appendSearchParam('locale', lang).get('/api/insurance').json(InsuranceSchema.parse);
}

export async function fetchLocales(lang: string) {
  const locales = await strapi.get('/api/i18n/locales').json(StrapiLocaleArraySchema.parse);
  const currentLocale = locales.find(l => l.code === lang);

  return {
    locales,
    currentLocale,
  };
}

export async function fetchQuoteByEmail(email: string) {
  return strapi
    .appendSearchParam('filters[email][$eq]', email)
    .setOptions({ cache: 'no-cache' })
    .get('/api/quote-requests')
    .json(ClientListSchema.parse);
}

export async function fetchClientByEmail(email: string) {
  return strapi
    .appendSearchParam('filters[email][$eq]', email)
    .setOptions({ cache: 'no-cache' })
    .get('/api/clients')
    .json(ClientListSchema.parse);
}

export async function fetchCoverages(lang: string) {
  return strapi
    .appendSearchParam('locale', lang)
    .appendSearchParam('populate', 'link, image')
    .get('/api/insurance-coverages')
    .json(CoverageListSchema.parse);
}

export async function fetchCoverageByLinkUrl(lang: string, url: string) {
  const results = await strapi
    .appendSearchParam('locale', lang)
    .appendSearchParam('populate', 'link, image')
    .appendSearchParam('filters[link][url][$eq]', url)
    .get('/api/insurance-coverages')
    .json(CoverageListSchema.parse);

  return results.data.length === 1 ? results.data[0] : null;
}
