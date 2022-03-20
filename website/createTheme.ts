import { createTheme, SxProps } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { ComponentSettingsTheme } from "apollo/generated";

// Create a theme instance.
const theme = (theme: ComponentSettingsTheme) => {
  const primary = theme?.primary || {};
  const secondary = theme?.secondary || {};
  const success = theme?.success || {};
  const error = theme?.error || {};
  const info = theme?.info || {};
  const warning = theme?.warning || {};

  const text = {
    primary: theme?.textPrimary?.main || undefined,
    secondary: theme?.textSecondary?.main || undefined,
  };

  return createTheme({
    palette: {
      primary,
      secondary,
      success,
      error,
      info,
      warning,
      text,
    },
  });
};

export type SxStyles = SxProps<typeof theme>;

export default theme;
