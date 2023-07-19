import React from "react";

import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";
import Instagram from "@mui/icons-material/Instagram";
import Phone from "@mui/icons-material/Phone";
import Email from "@mui/icons-material/Email";
import Copyright from "@mui/icons-material/Copyright";
import { useTranslation } from "next-export-i18n";
import Image from "next/image";

const year = new Date().getFullYear();

export function Footer() {
  const { t } = useTranslation();
  return (
    <Container
      component="footer"
      maxWidth={false}
      sx={{ backgroundColor: "#f2f2f2", paddingBottom: 6 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid container item md={12} spacing={2}>
            {/* Phone */}
            <Grid item md={4} sm={12} xs={12}>
              <Stack spacing={2} alignItems="center">
                <Phone sx={{ fontSize: "2.8rem" }} />
                <Link
                  href="tel:+1 (404) 513-1683"
                  fontSize="1.2rem"
                  fontWeight="bold"
                >
                  +1 (404) 513-1683
                </Link>
              </Stack>
            </Grid>

            {/* Instagram */}
            <Grid item md={4} sm={12} xs={12}>
              <Stack flex="1" spacing={1} alignItems="center">
                <Instagram sx={{ fontSize: "2.8rem" }} />
                <Link
                  href="https://www.instagram.com/aborgia_insurance/"
                  fontSize="1.2rem"
                  fontWeight="bold"
                >
                  @aborgia_insurance
                </Link>
              </Stack>
            </Grid>

            {/* Email */}
            <Grid item md={4} sm={12} xs={12}>
              <Stack spacing={1} alignItems="center">
                <Email sx={{ fontSize: "2.8rem" }} />
                <Link
                  href="https://www.instagram.com/aborgia_insurance/"
                  fontSize="1.2rem"
                  fontWeight="bold"
                >
                  aborgiainsurance@gmail.com
                </Link>
              </Stack>
            </Grid>
          </Grid>

          <Grid container item md={12} spacing={2}>
            <Grid item md={8}>
              <Stack textAlign="left" spacing={2}>
                <Typography fontWeight="medium">{t("footer.p1")}</Typography>
                <Typography fontWeight="medium">{t("footer.p2")}</Typography>
              </Stack>
            </Grid>
            <Grid item md={4}>
              <Image
                style={{ width: "100%", height: "auto" }}
                alt={t("siteName")}
                width={290}
                height={112}
                src="/dark-logo-v2.png"
              />
              <Box display="flex" alignItems="center">
                <Copyright color="primary" fontSize="medium" sx={{ mr: 1 }} />
                <Typography>{year} Copyright. All Rights Reserved.</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
