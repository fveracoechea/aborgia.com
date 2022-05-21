import { gql } from "@apollo/client";

const ThemeColorFragment = gql`
  fragment ThemeColorFragment on ComponentSettingsColor {
    main
    light
    dark
  }
`;

export const StrapiThemeFragment = gql`
  ${ThemeColorFragment}
  fragment StrapiThemeFragment on GlobalSetting {
    theme {
      primary {
        ...ThemeColorFragment
      }
      secondary {
        ...ThemeColorFragment
      }
      textPrimary {
        ...ThemeColorFragment
      }
      textSecondary {
        ...ThemeColorFragment
      }
    }
  }
`;
