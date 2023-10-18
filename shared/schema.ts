import { z } from 'zod';

import { LOCALES } from './constants';

export const MediaDataSchema = z.object({
  id: z.number().int().nonnegative(),
  attributes: z.object({
    name: z.string().nonempty(),
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
  name: z.string().nonempty(),
  code: z.enum(LOCALES),
  isDefault: z.boolean(),
});

export const StrapiLocaleArraySchema = z.array(StrapiLocaleSchema);

export type StrapiLocale = z.infer<typeof StrapiLocaleSchema>;

export const LinkSchema = z.object({
  id: z.number().int().nonnegative(),
  text: z.string().nonempty(),
  url: z.string().nonempty(),
});

export const PolicySchema = z.object({
  data: z.object({
    id: z.number().int().nonnegative(),
    attributes: z.object({
      content: z.string().nonempty(),
      locale: z.enum(LOCALES),
      link: LinkSchema,
    }),
  }),
});

export const InsuranceSchema = z.object({
  data: z.object({
    id: z.number().int().nonnegative(),
    attributes: z.object({
      content: z.string().nonempty(),
      locale: z.enum(LOCALES),
    }),
  }),
});

export const CoverageListSchema = z.object({
  data: z.array(
    z.object({
      id: z.number().int().nonnegative(),
      attributes: z.object({
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        content: z.string().nonempty(),
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
