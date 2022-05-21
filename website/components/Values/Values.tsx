import React, { FC } from "react";
import { Container, Typography, Box, Icon } from "@mui/material";
import { useStrapiValuesQuery } from "apollo/generated";

export const Values: FC = () => {
  const { data } = useStrapiValuesQuery();
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {data &&
          data?.values?.data.map((item) => (
            <Box
              key={item?.id}
              sx={{
                width: {
                  xs: `${100 / 2}%`,
                  sm: `${100 / 3}%`,
                  md: "auto",
                },
                height: "12rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Icon
                sx={{ fontSize: "3rem", color: (t) => t.palette.text.primary }}
              >
                {item?.attributes?.icon}
              </Icon>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  color: (t) => t.palette.text.primary,
                }}
              >
                {item?.attributes?.title}
              </Typography>
            </Box>
          ))}
      </Box>
    </Container>
  );
};
