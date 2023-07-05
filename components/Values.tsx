import React from "react";
import { Typography, Icon, Stack } from "@mui/material";
import { useTranslation } from "next-export-i18n";

export function Values() {
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
    <Stack direction="row" flexWrap="wrap" justifyContent="space-between">
      {values.map((item) => (
        <Stack
          direction="column"
          spacing={1}
          alignItems="center"
          key={item.id}
          padding={2}
          sx={{
            width: {
              xs: `${100 / 2}%`,
              sm: `${100 / 3}%`,
              md: "auto",
            },
          }}
        >
          <Icon sx={{ fontSize: "2.8rem" }}>{item.icon}</Icon>
          <Typography textAlign="center" color="textPrimary">
            {item.text}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}
