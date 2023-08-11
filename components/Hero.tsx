import { ApiHeroHero } from 'typings/generated/contentTypes';

import { api } from 'shared/api';
import { Slider } from 'shared/ui/Slider';
import { Text } from 'shared/ui/Text';

async function fetchHero(lang: string): Promise<{ data: ApiHeroHero }> {
  return api
    .get('/api/hero')
    .appendSearchParam('locale', lang)
    .appendSearchParam('populate[images]', '*')
    .json();
}

export async function Hero({ lang }: { lang: string }) {
  const hero = await fetchHero(lang);
  const images = hero.data.attributes;
  console.log('images = ', images.data)
  return (
    <section className="h-[45vh] w-full relative my-0 mx-auto overflow-hidden sm:h-[75vh]">
      <Slider images={[]}>
        <Text variant="h2" component="h2" className="text-primaryDark font-semibold xl:text-6xl">
          {(hero.data.attributes.title as any) ?? null}
        </Text>
        <Text variant="h4" className="text-primaryDark font-medium">
          {(hero.data.attributes.description as any) ?? null}
        </Text>
      </Slider>
    </section>
  );
}
