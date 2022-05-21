import { gql } from "@apollo/client";

export const StrapiFileFragment = gql`
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
`;

const StrapiImagesFragment = gql`
  ${StrapiFileFragment}
  fragment StrapiImages on ComponentBannerImages {
    mobile {
      ...StrapiFile
    }
    desktop {
      ...StrapiFile
    }
  }
`;

const StrapiSpacingFragment = gql`
  fragment StrapiSpacing on ComponentBannerSpacing {
    vertical
    horizontal
  }
`;

export const StrapiBannerFragment = gql`
  ${StrapiImagesFragment}
  ${StrapiSpacingFragment}
  fragment StrapiBannerFragment on ComponentBannerBanner {
    __typename
    id
    banner {
      data {
        id
        attributes {
          locale
          title
          backgroundColor
          fullWidth
          displaySettings
          spacing {
            ...StrapiSpacing
          }
          images {
            ...StrapiImages
          }
          content {
            ... on ComponentBannerText {
              __typename
              text
              textColor
              backgroundColor
              spacing {
                ...StrapiSpacing
              }
            }
            ... on ComponentBannerSection {
              __typename
              primaryText
              secondaryText
              textAlign
              textColor
              backgroundColor
              spacing {
                ...StrapiSpacing
              }
              images {
                ...StrapiImages
              }
            }
          }
        }
      }
    }
  }
`;
