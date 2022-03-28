import { gql } from "@apollo/client";

export const homepage = gql`
  fragment StrapiFileCollection on UploadFileRelationResponseCollection {
    data {
      attributes {
        url
        width
        height
        size
      }
    }
  }

  query StrapiHero {
    hero {
      data {
        attributes {
          title
          tagline
          images {
            ...StrapiFileCollection
          }
        }
      }
    }
  }

  query StrapiValues {
    values {
      data {
        attributes {
          icon
          title
          description
        }
      }
    }
  }
`;
