import clsx from 'clsx';
import { z } from 'zod';

import { api } from 'shared/api';
import { LOCALES } from 'shared/constants';
import { MultiMediaSchema } from 'shared/schema';
import { Slider } from 'shared/ui/Slider';
import { Text } from 'shared/ui/Text';

const HeroSchema = z.object({
  data: z.object({
    id: z.number().int().nonnegative(),
    attributes: z.object({
      title: z.string().nullable().default('Medical coverage at your fingertips'),
      description: z.string().nullable().default('WE GUIDE YOU IN EVERY STEP'),
      locale: z.enum(LOCALES),
      images: MultiMediaSchema,
    }),
  }),
});

function fetchHero(lang: string) {
  return api
    .get('/api/hero')
    .appendSearchParam('locale', lang)
    .appendSearchParam('populate[images]', '*')
    .json(HeroSchema.parse);
}

export async function Hero({ lang }: { lang: string }) {
  const hero = await fetchHero(lang);
  const images = hero.data.attributes.images.data.map(img => img.attributes.url);
  return (
    <section
      className={clsx(
        'w-full relative my-0 mx-auto overflow-hidden aspect-square',
        'h-[40vh] md:h-[55vh] lg:h-[calc(100vh-118px)]',
      )}
    >
      <Slider images={images}>
        <Text variant="h2" component="h2" className="capitalize font-medium lg:text-6xl">
          {hero.data.attributes.title}
        </Text>
        <Text variant="h5" component="h3" className="font-semibold xl:text-2xl">
          {hero.data.attributes.description}
        </Text>
      </Slider>
    </section>
  );
}
