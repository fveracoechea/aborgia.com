import { gql } from "@apollo/client";

export const homepage = gql`
  fragment StrapiFile on UploadFileEntityResponse {
    data {
      attributes {
        url
        width
        height
        size
      }
    }
  }

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

  query Homepage {
    homepage {
      data {
        id
        attributes {
          Insurance {
            title
            coverages {
              id
              name
              description
              content
              image {
                ...StrapiFile
              }
            }
          }
        }
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
        id
        attributes {
          icon
          title
          description
        }
      }
    }
  }
`;
