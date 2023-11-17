import { z } from 'zod';

import { LOCALES } from './constants';

export const MediaDataSchema = z.object({
  id: z.number().int().nonnegative(),
  attributes: z.object({
    name: z.string().min(1),
    alternativeText: z.string().nullable(),
    caption: z.string().nullable(),
    width: z.number().int().nonnegative(),
    height: z.number().int().nonnegative(),
    url: z.string().url(),
  }),
});

export const SingleMediaSchema = z.object({
  data: MediaDataSchema,
});

export const MultiMediaSchema = z.object({
  data: z.array(MediaDataSchema).catch([]),
});

export const StrapiLocaleSchema = z.object({
  id: z.number().int().nonnegative(),
  name: z.string().min(1),
  code: z.enum(LOCALES),
  isDefault: z.boolean(),
});

export const StrapiLocaleArraySchema = z.array(StrapiLocaleSchema);

export type StrapiLocale = z.infer<typeof StrapiLocaleSchema>;

export const LinkSchema = z.object({
  id: z.number().int().nonnegative(),
  text: z.string().min(1),
  url: z.string().min(1),
});

export const PolicySchema = z.object({
  data: z.object({
    id: z.number().int().nonnegative(),
    attributes: z.object({
      content: z.string().min(1),
      locale: z.enum(LOCALES),
      link: LinkSchema,
    }),
  }),
});

export const InsuranceSchema = z.object({
  data: z.object({
    id: z.number().int().nonnegative(),
    attributes: z.object({
      content: z.string().min(1),
      locale: z.enum(LOCALES),
    }),
  }),
});

export const CoverageListSchema = z.object({
  data: z.array(
    z.object({
      id: z.number().int().nonnegative(),
      attributes: z.object({
        title: z.string().min(1),
        description: z.string().min(1),
        content: z.string().min(1),
        locale: z.enum(LOCALES),
        link: LinkSchema,
        image: SingleMediaSchema,
      }),
    }),
  ),
});

export const ClientListSchema = z.object({
  data: z.array(
    z.object({
      id: z.number().int().nonnegative(),
      attributes: z.object({
        email: z.string().email(),
        phone: z.string(),
        status: z.string(),
      }),
    }),
  ),
});

export type CoverageList = z.infer<typeof CoverageListSchema>;
