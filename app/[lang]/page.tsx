import { AboutMe } from 'components/AboutMe';
import { Hero } from 'components/Hero';
import { Insurance } from 'components/Insurance';
import { Values } from 'components/Values';

import { getDictionary } from 'shared/dictionaries';
import { Container } from 'shared/ui/Container';

type PageProps = { params: { lang: string } };

export default async function HomePage({ params }: PageProps) {
  const dict = await getDictionary(params.lang);

  return (
    <>
      <Hero lang={params.lang} />
      <Values dict={dict} />
      <AboutMe lang={params.lang} />
      <Insurance dict={dict} />
      <Container />
    </>
  );
}
