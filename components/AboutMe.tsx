import React from 'react';

import Image from 'next/image';

import clsx from 'clsx';
import { z } from 'zod';

import { getImageSrc, strapi } from 'shared/api';
import { LOCALES } from 'shared/constants';
import { SingleMediaSchema } from 'shared/schema';
import { Container } from 'shared/ui/Container';

const AboutMeSchema = z.object({
  data: z.object({
    id: z.number().int().nonnegative(),
    attributes: z.object({
      content: z.string().min(1),
      avatar: SingleMediaSchema,
      locale: z.enum(LOCALES),
    }),
  }),
});

function fetchAboutMe(lang: string) {
  return strapi
    .get('/api/about-me')
    .appendSearchParam('locale', lang)
    .appendSearchParam('populate[avatar]', '*')
    .json(AboutMeSchema.parse);
}

export async function AboutMe({ lang }: { lang: string }) {
  const aboutMe = await fetchAboutMe(lang);
  const image = getImageSrc(aboutMe.data.attributes.avatar.data.attributes.url);

  const containerClasses = clsx(
    'flex flex-col justify-center items-center !py-20',
    'lg:flex-row gap-16 scroll-mt-20 md:scroll-mt-8',
  );

  const imageClasses = clsx(
    'block rounded ring-grey ring-offset-4',
    'ring-offset-white ring-2 w-[280px] h-auto',
  );

  return (
    <Container component="section" id="about-me" className={containerClasses}>
      <Image src={image} alt="Profile avatar" width={280} height={420} className={imageClasses} />
      <article
        className="prose !text-center lg:!text-left max-w-none"
        dangerouslySetInnerHTML={{ __html: aboutMe.data.attributes.content }}
      />
    </Container>
  );
}
