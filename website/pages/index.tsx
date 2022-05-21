import type { GetStaticProps, NextPage } from "next";
import { initializeApollo } from "apollo/client";
import Layout from "components/Layout";
import {
  GlobalSettingsCtx,
  GlobalSettingsValue,
} from "context/globalSettingsCtx";
import {
  SinglePageQuery,
  SinglePageDocument,
  SinglePageQueryVariables,
  useSinglePageQuery,
  StrapiHeroQuery,
  StrapiHeroDocument,
  StrapiValuesQuery,
  StrapiValuesDocument,
  AboutMeDocument,
  AboutMeQuery,
} from "apollo/generated";
import { Hero } from "components/Hero";
import { Values } from "components/Values";
import { Insurance } from "components/Insurance";
import { ContactSection } from "components/ContactSection";
import { AboutMe } from "components/AboutMe";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const apolloClient = initializeApollo();
  const route = "/";

  await Promise.all([
    apolloClient.query<SinglePageQuery, SinglePageQueryVariables>({
      query: SinglePageDocument,
      variables: { route },
    }),
    apolloClient.query<StrapiHeroQuery>({ query: StrapiHeroDocument }),
    apolloClient.query<StrapiValuesQuery>({ query: StrapiValuesDocument }),
    apolloClient.query<AboutMeQuery>({ query: AboutMeDocument }),
  ]);

  return {
    props: {
      route,
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

const Home: NextPage<{ route: string }> = ({ route }) => {
  const { data } = useSinglePageQuery({ variables: { route } });
  const global = data?.globalSetting?.data?.attributes;
  const page = data?.pages?.data?.[0]?.attributes;

  if (!global || !page) return <p>Loading...</p>;

  const contextValue: GlobalSettingsValue = {
    route,
    siteName: global.siteName,
    favicon: global?.favicon?.data?.attributes?.url!,
    theme: global?.theme || {},
  };

  return (
    <GlobalSettingsCtx.Provider value={contextValue}>
      <Layout>
        <Hero />
        <Values />
        <Insurance />
        <ContactSection />
        <AboutMe />
      </Layout>
    </GlobalSettingsCtx.Provider>
  );
};

export default Home;
