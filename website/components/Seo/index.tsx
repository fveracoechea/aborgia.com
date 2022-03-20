import React, { FC } from "react";
import Head from "next/head";
import usePage from "hooks/usePage";

const Seo: FC = () => {
  const {
    data,
    global: { siteName },
  } = usePage();

  const pageSeo = data?.pages?.data?.[0]?.attributes?.seo?.data?.attributes;
  
  if (!pageSeo) return null;
  return (
    <Head>
      <title>{`${pageSeo.pageTile} | ${siteName}`}</title>
      <meta charSet="UTF-8" />
      <meta name="description" content={pageSeo.metaDescription} />
      <meta name="robots" content={pageSeo.metaRobots} />
      <meta name="keywords" content={pageSeo.keywords} />
      <link rel="canonical" href={pageSeo.canonical} />
    </Head>
  );
};

export default Seo;
