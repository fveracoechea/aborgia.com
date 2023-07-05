import {
  createTheme,
  SxProps,
  responsiveFontSizes,
  Theme,
} from "@mui/material";

const text = {
  primary: "#4b4b4b",
  secondary: "#FFFFFF",
};

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
