/* eslint-disable @next/next/no-img-element */
import { Container, Grid, Typography, Box, styled } from "@mui/material";
import { sx } from "./styles";
import { useTranslation } from "next-export-i18n";

const Img = styled("img")`
  display: block;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Insurance = () => {
  const { t } = useTranslation();

  const coverages = [
    {
      id: "c-1",
      image: "/coverages/1.jpeg",
      name: t("coverages.1.name"),
      description: t("coverages.1.description"),
    },
    {
      id: "c-2",
      image: "/coverages/2.jpeg",
      name: t("coverages.2.name"),
      description: t("coverages.2.description"),
    },
    {
      id: "c-3",
      image: "/coverages/3.jpeg",
      name: t("coverages.3.name"),
      description: t("coverages.3.description"),
    },
    {
      id: "c-4",
      image: "/coverages/4.jpeg",
      name: t("coverages.4.name"),
      description: t("coverages.4.description"),
    },
  ];

  return (
    <Box paddingBottom={12}>
      <Grid container id="services" sx={{ scrollMarginTop: 20 }} spacing={8}>
        <Grid item xs={12}>
          <Typography textAlign="center" variant="h4">
            {t("coverages.title")}
          </Typography>
        </Grid>
        {coverages.map(({ id, name, image, description }) => (
          <Grid key={id} item xs={12} sm={12} md={6}>
            <Box sx={sx.innerWrapper}>
              <Img alt={name} src={image} />
              <Box
                sx={(t) => ({
                  ...sx.item,
                  backgroundColor: "rgba(0,0,0,.6)",
                })}
              >
                <Typography
                  aria-hidden="true"
                  color="textSecondary"
                  variant="h5"
                >
                  {name}
                </Typography>
              </Box>
              <Box
                sx={(t) => ({
                  ...sx.item,
                  backgroundImage: `linear-gradient(to right, ${t.palette.primary.main}, ${t.palette.secondary.dark})`,
                  flexDirection: "column",
                  opacity: "0",
                  "&:hover": {
                    opacity: "1",
                  },
                })}
              >
                <Typography
                  color="textSecondary"
                  variant="h6"
                  sx={{ textAlign: "center" }}
                >
                  {name}
                </Typography>
                <Typography
                  sx={{ textAlign: "center" }}
                  color="textSecondary"
                  variant="body1"
                >
                  {description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
