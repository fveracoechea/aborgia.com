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

export const PolicySchema = z.object({
  data: z.object({
    id: z.number().int().nonnegative(),
    attributes: z.object({
      title: z.string().nonempty(),
      content: z.string().nonempty(),
      locale: z.enum(LOCALES),
    }),
  }),
});
