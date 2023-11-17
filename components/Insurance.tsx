import Image from 'next/image';
import { redirect } from 'next/navigation';

import clsx from 'clsx';

import { fetchCoverages, getImageSrc } from 'shared/api';
import { Dict } from 'shared/locales/en';
import { ButtonLink } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import theme from 'shared/ui/theme';

type Props = {
  dict: Dict;
  lang: string;
};

export async function Insurance(props: Props) {
  const { dict, lang } = props;
  const coverages = await fetchCoverages(lang);

  const gridCss = clsx('grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4');

  return (
    <section
      id="insurance"
      className="p-5 md:p-0 w-full text-center text-white flex flex-col gap-12"
    >
      <Text variant="h3" component="h4" className="text-primary capitalize">
        {dict.coverages.title}
      </Text>

      <div className={gridCss}>
        {coverages.data.map(({ id, attributes }) => (
          <figure
            key={id}
            className="aspect-video 2xl:aspect-[3/2] relative flex justify-center items-center"
          >
            <Image
              className="object-cover"
              aria-hidden="true"
              alt=""
              src={getImageSrc(attributes.image.data.attributes.url)}
              fill
              sizes={`100vw, (min-width: ${theme.screens.md}) 50vw, (min-width: ${theme.screens['2xl']}) 25vw`}
            />
            <figcaption className="absolute inset-0 flex items-center justify-center p-8 bg-transparentDark6">
              <ButtonLink
                href={attributes.link.url}
                variant="outlined"
                color="light"
                className="font-semibold uppercase text-lg"
              >
                {attributes.title}
              </ButtonLink>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
