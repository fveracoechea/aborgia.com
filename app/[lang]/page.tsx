import Script from 'next/script';

import { AboutMe } from 'components/AboutMe';
import { Hero } from 'components/Hero';
import { Insurance } from 'components/Insurance';
import { RequestQuote } from 'components/RequestQuote';
import { Values } from 'components/Values';

import { getDictionary } from 'shared/dictionaries';

type PageProps = { params: { lang: string } };

export default async function HomePage({ params }: PageProps) {
  const dict = await getDictionary(params.lang);

  return (
    <>
      <Hero lang={params.lang} />
      <Values dict={dict} />
      <AboutMe lang={params.lang} />
      <Insurance dict={dict} lang={params.lang} />
      <RequestQuote dict={dict} lang={params.lang} />
      <Script src="https://www.google.com/recaptcha/api.js" />
    </>
  );
}
