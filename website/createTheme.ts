import {
  createTheme,
  SxProps,
  PaletteColorOptions,
  responsiveFontSizes,
  Theme
} from "@mui/material/styles";
import { ComponentSettingsTheme } from "apollo/generated";

// Create a theme instance.
const theme = (theme: ComponentSettingsTheme) => {
  const primary = (theme?.primary || {}) as PaletteColorOptions;
  const secondary = (theme?.secondary || {}) as PaletteColorOptions;
  const success = theme?.success || {};
  const error = theme?.error || {};
  const info = theme?.info || {};
  const warning = theme?.warning || {};

  const text = {
    primary: theme?.textPrimary?.main || undefined,
    secondary: theme?.textSecondary?.main || undefined,
  };

  return responsiveFontSizes(
    createTheme({
      palette: {
        primary,
        secondary,
        success,
        error,
        info,
        warning,
        text,
      },
    })
  );
};

export type SxStyles = SxProps<Theme>;

export default theme;
