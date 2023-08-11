import { Fetchtastic } from 'fetchtastic/core';

export const cms = new Fetchtastic(process.env.NEXT_PUBLIC_CMS_URL).appendHeader(
  'Authorization',
  `bearer ${process.env.STRAPI_API_TOKEN}`,
);
