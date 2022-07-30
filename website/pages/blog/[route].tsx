
import type { GetStaticProps, NextPage, GetStaticPaths } from "next";
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
  PagesDocument,
  PagesQuery,
  Page,
  useSinglePageQuery,
} from "apollo/generated";
import PageContent from "components/PageContent";

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();
  const result = await apolloClient.query<PagesQuery>({
    query: PagesDocument,
  });
  return {
    paths: result?.data!.pages!.data!.map(({ attributes, id }) => ({
      params: {
        route: attributes?.route.replace("/", ""),
      },
    })),
    fallback: false, // false or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const apolloClient = initializeApollo();
  const route = `/${ctx!.params!.route}`;

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

const Page: NextPage<{ route: string }> = ({ route }) => {
  const { data } = useSinglePageQuery({ variables: { route } });
  const global = data?.globalSetting?.data?.attributes;
  const page = data?.pages?.data?.[0]?.attributes as Page;

  if (!global || !page) return <p>Loading...</p>;

  const contextValue: GlobalSettingsValue = {
    siteName: global.siteName,
    route,
    favicon: global?.favicon?.data?.attributes?.url!,
    theme: global?.theme || {},
  };

  return (
    <GlobalSettingsCtx.Provider value={contextValue}>
      <Layout>
        {/* <Typography variant="h1">
          {page.name} <Link href="/">Insurance Broker!</Link>
        </Typography> */}
        {/* <PageContent content={page.content} /> */}
      </Layout>
    </GlobalSettingsCtx.Provider>
  );
};

export default Page;
