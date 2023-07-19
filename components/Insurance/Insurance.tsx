import { Grid, Typography, Box, styled } from "@mui/material";
import { useTranslation } from "next-export-i18n";
import Image from "next/image";

const InnerWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  [theme.breakpoints.up("md")]: {
    height: 350,
  },
  [theme.breakpoints.down("md")]: {
    height: 280,
  },
  "& img": {
    zIndex: 1,
    display: "block",
    position: "absolute",
    width: "100%",
    left: 0,
    top: 0,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
}));

const Content = styled(Box)(({ theme }) => ({
  zIndex: 2,
  position: "absolute",
  transition: "all .4s ease",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(2),
  alignItems: "center",
  "&.overlay": {
    backgroundColor: "rgba(0,0,0,.6)",
  },
  "&.active": {
    backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.dark})`,
    flexDirection: "column",
    opacity: "0",
    "&:hover": {
      opacity: "1",
    },
  },
}));

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
            <InnerWrapper>
              <Image alt={name as string} src={image} fill />
              <Content className="overlay">
                <Typography
                  aria-hidden="true"
                  color="textSecondary"
                  variant="h5"
                >
                  {name}
                </Typography>
              </Content>
              <Content className="active">
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
              </Content>
            </InnerWrapper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
