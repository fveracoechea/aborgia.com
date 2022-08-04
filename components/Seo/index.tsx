import React, { FC } from "react";
import Head from "next/head";
import { useTranslation } from "next-export-i18n";

const appUrl = "https://aborgia.netlify.app";

const Seo: FC = () => {
  const { t } = useTranslation();

  return (
    <Head>
      <title>{t("siteName")}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta name="description" content="Health and Life Insurance Agent" />
      <meta name="robots" content="all" />
      <meta name="keywords" content="health, life, insurance, agent" />
      <link rel="canonical" href={appUrl} />
      <link rel="icon" href="/favicon.ico" />

      {/* OG metatags */}
      <meta property="og:url" content={appUrl} />
      <meta
        property="og:title"
        content={`${t("siteName")}: Health and Life Insurance Agent.`}
      />
      <meta
        property="og:description"
        content="Obtain the best coverage with the best benefits at the best price."
      />
      <meta property="og:image" content={`${appUrl}/about-me.jpeg`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="es_ES" />
      <meta property="og:locale:alternate" content="pt_PT" />

      {/* twitter */}
      <meta name="twitter:card" content="summary"></meta>
    </Head>
  );
};

export default Seo;
