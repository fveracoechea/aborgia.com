import {
  createTheme,
  SxProps,
  responsiveFontSizes,
  Theme,
  LinkProps,
  Link as MuiLink,
} from "@mui/material";
import { forwardRef } from "react";
import NextLink from "next/link";

const text = {
  primary: "#4b4b4b",
  secondary: "#FFFFFF",
};

const LinkBehavior = forwardRef<HTMLAnchorElement, LinkProps>(
  function LinkComponent(props, ref) {
    // Map href (Material UI) -> to (react-router)
    return <MuiLink component={NextLink} ref={ref} {...props} />;
  }
);

// Create a theme instance.
const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#3CACAE",
        light: "#C8F4F9",
      },
      secondary: {
        main: "#EEB5EB",
        dark: "#C26DBC",
      },
      text,
    },
    components: {
      MuiAppBar: {
        defaultProps: {
          elevation: 1,
        },
      },
      MuiLink: {
        defaultProps: {
          component: LinkBehavior,
        } as LinkProps,
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehavior,
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: "outlined",
        },
        styleOverrides: {
          root: {
            color: text.primary,
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: text.primary,
          },
        },
      },
    },
  })
);

export type SxStyles = SxProps<Theme>;

export default theme;
