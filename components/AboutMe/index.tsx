/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import { useTranslation } from "next-export-i18n";

import { Container, Grid, Typography } from "@mui/material";

export const AboutMe: FC = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg">
      <Grid container sx={{ py: 10 }} spacing={4} id="about-me">
        <Grid item md={4}>
          <img
            style={{ width: "100%", height: "auto" }}
            src="/about-me.jpeg"
            alt="Arelys Borgia"
            width={380}
            height={380}
          />
        </Grid>
        <Grid item md={8}>
          <Typography variant="h4">{t("siteName")}</Typography>
          <Typography variant="subtitle1">{t("hero.tagline")}</Typography>
          <Typography sx={{ py: 2, fontWeight: "600" }} variant="subtitle1">
            {t("aboutMe.subtitle1")}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {t("aboutMe.p1")}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {t("aboutMe.p2")}
          </Typography>
          <Typography variant="body1">{t("aboutMe.p3")}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
