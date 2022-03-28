import React, { FC, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Box } from "@mui/material";
import createTheme from "createTheme";
import Header from "../Header";
import { useGlobalSettingsCtx } from "context/globalSettingsCtx";
import { ComponentSettingsTheme } from "apollo/generated";
import Seo from "components/Seo";
import { sx } from './styles'

type Props = {};

const Layout: FC<Props> = ({ children }) => {
  const { theme: strapiTheme } = useGlobalSettingsCtx();
  const theme = useMemo(
    () => createTheme(strapiTheme as ComponentSettingsTheme),
    [strapiTheme]
  );
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Seo />
      <Header />
      <Box
        sx={sx.background}
      >
        <Box
          sx={sx.overlay}
        >
          <Container component="main" disableGutters maxWidth={false}>
            {children}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
