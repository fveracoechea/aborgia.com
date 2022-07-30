import React, { FC, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Box, Grid, Typography, Link } from "@mui/material";
import createTheme from "createTheme";
import Header from "../Header";
import { useGlobalSettingsCtx } from "context/globalSettingsCtx";
import { ComponentSettingsTheme } from "apollo/generated";
import Seo from "components/Seo";
import Image from "next/image";
import { sx } from "./styles";
import Instagram from "@mui/icons-material/Instagram";
import Email from "@mui/icons-material/Email";
import Copyright from "@mui/icons-material/Copyright";

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
      <Box sx={sx.background}>
        <Box sx={sx.overlay}>
          <Container component="main" disableGutters maxWidth={false}>
            {children}
          </Container>
        </Box>
      </Box>
      <Container
        component="footer"
        disableGutters
        maxWidth={false}
        sx={{ backgroundColor: "#f2f2f2" }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid
              item
              md={3}
              sx={{
                minHeight: 200,
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                layout="fixed"
                width={290}
                height={112}
                src="/dark-logo.png"
              />
            </Grid>
            <Grid item md={9}>
              <Typography variant="h5">
                Obtain the best health coverage with the best benefits, at the
                best price. We take care of your present looking towards the
                future.
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wprap" }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", py: 1, pr: 2 }}
                >
                  <Copyright color="primary" fontSize="medium" sx={{ mr: 1 }} />
                  <Typography>2022 Copyright - Arelys Borgia</Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", py: 1, pr: 2 }}
                >
                  <Instagram color="primary" fontSize="medium" sx={{ mr: 1 }} />
                  <Link
                    href="https://www.instagram.com/aborgia_insurance/"
                    fontSize="1.2rem"
                  >
                    @aborgia_insurance
                  </Link>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", py: 1, pr: 2 }}
                >
                  <Email color="primary" fontSize="medium" sx={{ mr: 1 }} />
                  <Link
                    href="https://www.instagram.com/aborgia_insurance/"
                    fontSize="1.2rem"
                  >
                    aborgiainsurance@gmail.com
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
