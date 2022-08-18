import React, { FC } from "react";
import { Container, Typography, Box, Icon } from "@mui/material";
import { useTranslation } from "next-export-i18n";

export const Values: FC = () => {
  const { t } = useTranslation();

  const values = [
    { id: "v-1", text: t("values.1"), icon: "balance" },
    { id: "v-2", text: t("values.2"), icon: "emoji_events" },
    { id: "v-3", text: t("values.3"), icon: "assured_workload" },
    { id: "v-4", text: t("values.4"), icon: "groups" },
    { id: "v-5", text: t("values.5"), icon: "sentiment_very_satisfied" },
    { id: "v-6", text: t("values.6"), icon: "screen_share" },
  ];

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          pb: 4,
        }}
      >
        {values.map((item) => (
          <Box
            key={item.id}
            sx={{
              width: {
                xs: `${100 / 2}%`,
                sm: `${100 / 3}%`,
                md: "auto",
              },
              height: "8rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Icon
              sx={{ fontSize: "3rem", color: (t) => t.palette.text.primary }}
            >
              {item.icon}
            </Icon>
            <Typography
              sx={{
                fontSize: "1.2rem",
                color: (t) => t.palette.text.primary,
                textAlign: "center",
              }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};
