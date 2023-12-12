import { AboutMe } from 'components/AboutMe';
import { Hero } from 'components/Hero';
import { Insurance } from 'components/Insurance';
import { RequestQuote } from 'components/RequestQuote';
import { Values } from 'components/Values';

import { fetchCoverages } from 'shared/api';
// import { LOCALES } from 'shared/constants';
import { getDictionary } from 'shared/dictionaries';

type PageProps = {
  params: { lang: string };
};

export default async function HomePage(props: PageProps) {
  const { params } = props;
  const dict = await getDictionary(params.lang);
  const coverages = await fetchCoverages(params.lang);

  return (
    <>
      <Hero lang={params.lang} />
      <Values dict={dict} />
      <AboutMe lang={params.lang} />
      <Insurance dict={dict} lang={params.lang} />
      <RequestQuote dict={dict} lang={params.lang} coverages={coverages} />
    </>
  );
}
