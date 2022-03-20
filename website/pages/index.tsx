import { Link, Typography, Button } from "@mui/material";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
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
} from "apollo/generated";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const apolloClient = initializeApollo();
  const route = "/";

  await apolloClient.query<SinglePageQuery, SinglePageQueryVariables>({
    query: SinglePageDocument,
    variables: { route },
  });

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
        <Typography variant="h1">
          {global?.siteName} <Link href="/">Insurance Broker!</Link>
        </Typography>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
      </Layout>
    </GlobalSettingsCtx.Provider>
  );
};

export default Home;
