/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { Container, Box, Grid, Typography, Link } from "@mui/material";
import Header from "../Header";
import Seo from "components/Seo";
import { sx } from "./styles";
import Instagram from "@mui/icons-material/Instagram";
import Phone from "@mui/icons-material/Phone";
import Place from "@mui/icons-material/Place";
import Email from "@mui/icons-material/Email";
import Copyright from "@mui/icons-material/Copyright";
import { useTranslation } from "next-export-i18n";

type Props = {};

const Layout: FC<Props> = ({ children }) => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <>
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
              <img
                style={{ width: "100%", height: "auto" }}
                alt={t("siteName")}
                width={290}
                height={112}
                src="/dark-logo-v2.png"
              />
            </Grid>
            <Grid item md={9}>
              <Box sx={{ pb: 2 }}>
                <Typography variant="subtitle1" fontSize="1.2rem">
                  {t("footer.p1")}
                </Typography>
                <Typography variant="subtitle1" fontSize="1.2rem">
                  {t("footer.p2")}
                </Typography>
              </Box>

              <Box sx={{ pb: 4 }}>
                {/* Localtion */}
                <Box
                  sx={{ display: "flex", alignItems: "center", py: 1, pr: 2 }}
                >
                  <Place color="primary" fontSize="medium" sx={{ mr: 1 }} />
                  Smyrna, GA.
                </Box>

                {/* Phone */}
                <Box
                  sx={{ display: "flex", alignItems: "center", py: 1, pr: 2 }}
                >
                  <Phone color="primary" fontSize="medium" sx={{ mr: 1 }} />
                  <Link href="tel:+1 (404) 513-1683" fontSize="1.2rem">
                    +1 (404) 513-1683
                  </Link>
                </Box>

                {/* Instagram */}
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

                {/* Email */}
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

                {/* Copyright */}
                <Box
                  sx={{ display: "flex", alignItems: "center", py: 1, pr: 2 }}
                >
                  <Copyright color="primary" fontSize="medium" sx={{ mr: 1 }} />
                  <Typography>
                    {year} Copyright, Arelys Borgia. All Rights Reserved.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default Layout;
