import { PropsWithChildren } from 'react';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import clsx from 'clsx';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Metadata } from 'next';

import { APP_URL, LOCALES } from 'shared/constants';
import { getDictionary } from 'shared/dictionaries';
import { lora } from 'shared/fonts';
import theme from 'shared/ui/theme';

import './global.css';

config.autoAddCss = false;

type LayoutProps = { params: { lang: string } };

type LangMap = Record<(typeof LOCALES)[number], string>;

export async function generateMetadata({ params: { lang } }: LayoutProps): Promise<Metadata> {
  const dict = await getDictionary(lang);

  const languages = LOCALES.reduce((languages, lang) => {
    languages[lang] = `/${lang}`;
    return languages;
  }, {} as LangMap);

  const metadataBase =
    process.env.NODE_ENV === 'production'
      ? new URL('https://www.aborgia.com/')
      : new URL('http://localhost:3000');

  return {
    metadataBase,
    title: dict.siteName,
    description: dict.hero.title,
    keywords: dict.keywords,
    openGraph: {
      siteName: dict.siteName,
      type: 'website',
      title: `${dict.siteName}: ${dict.hero.title}.`,
      description: dict.coverages.title,
      url: `${APP_URL}/profile.jpg`,
      locale: 'en',
      alternateLocale: LOCALES.filter(l => l !== 'en'),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${dict.siteName}: ${dict.hero.title}.`,
      description: dict.coverages.title,
      images: [`${APP_URL}/profile.jpg`],
    },
    robots: 'all',
    themeColor: theme.colors.primary,
    viewport: { width: 'device-width', initialScale: 1 },
    alternates: {
      canonical: '/',
      languages,
    },
    other: {
      charset: 'UTF-8',
    },
  };
}

export async function generateStaticParams() {
  return LOCALES.map(lang => {
    lang;
  });
}

export default async function RootLayout(props: PropsWithChildren<LayoutProps>) {
  const { children, params } = props;
  const dict = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <body className={clsx(lora.variable, 'font-serif bg-dark w-[100vw] overflow-x-hidden')}>
        <Header dict={dict} lang={params.lang} />
        <main className="pt-0 md:pt-10 w-full bg-white text-dark flex flex-col gap-12">
          {children}
        </main>
        <Footer dict={dict} />
      </body>
    </html>
  );
}
