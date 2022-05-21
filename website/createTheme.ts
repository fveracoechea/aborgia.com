import {
  createTheme,
  SxProps,
  PaletteColorOptions,
  responsiveFontSizes,
  Theme,
  experimental_sx as sx,
} from "@mui/material";
import { ComponentSettingsTheme } from "apollo/generated";

// Create a theme instance.
const theme = (theme: ComponentSettingsTheme) => {
  const primary = (theme?.primary || {}) as PaletteColorOptions;
  const secondary = (theme?.secondary || {}) as PaletteColorOptions;

  const text = {
    primary: theme?.textPrimary?.main || undefined,
    secondary: theme?.textSecondary?.main || undefined,
  };

  return responsiveFontSizes(
    createTheme({
      palette: {
        primary,
        secondary,
        text,
      },
      components: {
        MuiTextField: {
          defaultProps: {
            variant: "standard",
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
};

export type SxStyles = SxProps<Theme>;

export default theme;
