import { z } from 'zod';

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
