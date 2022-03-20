import { gql } from "@apollo/client";
import { StrapiBannerFragment } from "./banner";
import { StrapiThemeFragment } from "./theme";

const PageSeoFragment = gql`
  fragment PageSeoFragment on Page {
    seo {
      data {
        attributes {
          pageTile
          canonical
          metaRobots
          metaDescription
          keywords
        }
      }
    }
  }
`;

const PageContentFragment = gql`
  ${StrapiBannerFragment}
  fragment PageContentFragment on Page {
    content {
      ... on ComponentBannerBanner {
        ...StrapiBannerFragment
      }
    }
  }
`;

export const Pages = gql`
  query Pages {
    pages {
      data {
        id
        attributes {
          route
        }
      }
    }
  }
`;

export const SinglePage = gql`
  ${StrapiThemeFragment}
  ${PageSeoFragment}
  ${PageContentFragment}
  query SinglePage($route: String!) {
    renderNavigation(navigationIdOrSlug: "main-navigation", menuOnly: true) {
      title
      path
      id
    }
    globalSetting {
      data {
        __typename
        attributes {
          siteName
          favicon {
            ...StrapiFile
          }
          ...StrapiThemeFragment
        }
      }
    }
    pages(filters: { route: { eq: $route } }) {
      data {
        id
        attributes {
          name
          route
          ...PageSeoFragment
          ...PageContentFragment
        }
      }
    }
  }
`;
