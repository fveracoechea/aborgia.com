import React from 'react';

import Image from 'next/image';

import { z } from 'zod';

import { api } from 'shared/api';
import { LOCALES } from 'shared/constants';
import { SingleMediaSchema } from 'shared/schema';
import { Container } from 'shared/ui/Container';

const AboutMeSchema = z.object({
  data: z.object({
    id: z.number().int().nonnegative(),
    attributes: z.object({
      content: z.string().nonempty(),
      avatar: SingleMediaSchema,
      locale: z.enum(LOCALES),
    }),
  }),
});

function fetchAboutMe(lang: string) {
  return api
    .get('/api/about-me')
    .appendSearchParam('locale', lang)
    .appendSearchParam('populate[avatar]', '*')
    .json(AboutMeSchema.parse);
}

export async function AboutMe({ lang }: { lang: string }) {
  const aboutMe = await fetchAboutMe(lang);
  return (
    <Container
      component="section"
      id="about-me"
      className="flex flex-col justify-center items-center lg:flex-row gap-12"
    >
      <Image
        src={aboutMe.data.attributes.avatar.data.attributes.url}
        alt="Profile avatar"
        width={288}
        height={288}
        className="block rounded ring-grey ring-offset-4 ring-offset-white ring-2 w-72"
      />

      <article
        className="cms-content text-justify"
        dangerouslySetInnerHTML={{ __html: aboutMe.data.attributes.content }}
      />
    </Container>
  );
}
