module.exports = {
  navigation: {
    gql: {
      navigationItemRelated: ["Page", "UploadFile"],
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 12,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  "strapi-colorpicker": {
    enabled: true,
    resolve: "./src/plugins/strapi-colorpicker",
  },
  'wysiwyg': {
    enabled: true,
    resolve: './src/plugins/wysiwyg'
  },
};
