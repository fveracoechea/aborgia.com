import { Lora } from "next/font/google";
import { PropsWithChildren } from "react";
import { themeClassname, theme } from "design/theme";
import "./material-icons.css";
import "design/theme/globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { getDictionary } from "./dictionaries";
import { Metadata } from "next";
import { APP_URL, LOCALES } from "shared/constants";
import { Container } from "design/Container";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import clsx from "clsx";

type LayoutProps = { params: { lang: string } };

type LangMap = Record<(typeof LOCALES)[number], string>;

export async function generateMetadata({
  params: { lang },
}: LayoutProps): Promise<Metadata> {
  const dict = await getDictionary(lang);

  const languages = LOCALES.reduce((languages, lang) => {
    languages[lang] = `/${lang}`;
    return languages;
  }, {} as LangMap);

  return {
    title: dict.siteName,
    description: dict.hero.title,
    keywords: dict.keywords,
    openGraph: {
      siteName: dict.siteName,
      type: "website",
      title: `${dict.siteName}: ${dict.hero.title}.`,
      description: dict.coverages.title,
      url: `${APP_URL}/profile.jpg`,
      locale: "en",
      alternateLocale: LOCALES.filter((l) => l !== "en"),
    },
    twitter: {
      card: "summary_large_image",
      title: `${dict.siteName}: ${dict.hero.title}.`,
      description: dict.coverages.title,
      images: [`${APP_URL}/profile.jpg`],
    },
    robots: "all",
    themeColor: theme.color.primary.main,
    viewport: { width: "device-width", initialScale: 1 },
    alternates: {
      canonical: "/",
      languages,
    },
    icons: {
      icon: "/favicon.ico",
    },
    other: {
      charset: "UTF-8",
    },
  };
}

export async function generateStaticParams() {
  return LOCALES.map((lang) => {
    lang;
  });
}

const font = Lora({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

export default async function RootLayout(
  props: PropsWithChildren<LayoutProps>
) {
  const { children, params } = props;
  const dict = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <body className={clsx(themeClassname, font.className)}>
        <Header dict={dict} />

        <Container component="main" variant="lg">
          {children}
        </Container>

        {/* <div
          style={{
            backgroundImage: `url("${bgImage.src}")`,
            backgroundRepeat: "repeat",
          }}
        >
          <div className={overlay}></div>
        </div> */}

        <Footer dict={dict} />
      </body>
    </html>
  );
}
