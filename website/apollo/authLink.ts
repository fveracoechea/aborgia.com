import { setContext } from "@apollo/client/link/context";

const withToken = setContext(() => ({
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
  },
}));

export default withToken;
