import React, { FC } from "react";
import Head from "next/head";
import { useTranslation } from "next-export-i18n";

const appUrl = "https://www.aborgia.app";

const Seo: FC = () => {
  const { t } = useTranslation();

  return (
    <Head>
      <title>{t("siteName")}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta name="description" content={t("hero.title")} />
      <meta name="robots" content="all" />
      <meta
        name="keywords"
        content="health, life, insurance, ObamaCare, coverage"
      />
      <link rel="canonical" href={appUrl} />
      <link rel="icon" href="/favicon.ico" />

      {/* OG metatags */}
      <meta property="og:url" content={appUrl} />
      <meta
        property="og:title"
        content={`${t("siteName")}: ${t("hero.title")}.`}
      />
      <meta property="og:description" content={t("coverages.title")} />
      <meta property="og:image" content={`${appUrl}/profile.jpg`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="es_ES" />
      <meta property="og:locale:alternate" content="pt_PT" />

      {/* twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="aborgia.com" />
      <meta property="twitter:url" content={appUrl} />
      <meta
        name="twitter:title"
        content={`${t("siteName")}: ${t("hero.title")}.`}
      />
      <meta name="twitter:description" content={t("coverages.title")} />
      <meta name="twitter:image" content={`${appUrl}/profile.jpg`} />
    </Head>
  );
};

export default Seo;
