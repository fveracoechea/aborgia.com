import React, { FC, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import createTheme from "createTheme";
import Header from "../Header";
import { useGlobalSettingsCtx } from "context/globalSettingsCtx";
import { ComponentSettingsTheme } from "apollo/generated";
import Seo from "components/Seo";

type Props = {};

const Layout: FC<Props> = ({ children }) => {
  const { theme: strapiTheme } = useGlobalSettingsCtx();
  const theme = useMemo(() => createTheme(strapiTheme as ComponentSettingsTheme), [strapiTheme]);
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Seo />
      <Header />
      <Container component="main" maxWidth="xl">
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
