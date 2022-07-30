import { Container, Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import { useHomepageQuery } from "apollo/generated";

import { getStrapiImage } from "helpers/images";
import { SectionTitle } from "components/Styled";
import { sx } from "./styles";

export const Insurance = () => {
  const { data } = useHomepageQuery();
  const insurance = data?.homepage?.data?.attributes?.Insurance;
  if (!insurance) return null;
  return (
    <Container maxWidth="lg">
      <Grid
        container
        id="services"
        sx={{ scrollMarginTop: (t) => t.spacing(10) }}
      >
        <Grid item xs={12}>
          <SectionTitle>{insurance.title}</SectionTitle>
        </Grid>
        {insurance.coverages.map((coverage) => (
          <Grid key={coverage?.id} item xs={12} sm={6}>
            <Box sx={sx.innerWrapper}>
              <Image
                alt={coverage?.name}
                src={getStrapiImage(coverage?.image?.data?.attributes?.url!)}
                layout="fill"
                sizes="100vw"
                objectFit="cover"
                objectPosition="center"
              />
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
                  {coverage?.name}
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
                <Typography color="textSecondary" variant="h6">
                  {coverage?.name}
                </Typography>
                <Typography
                  sx={{ textAlign: "justify" }}
                  color="textSecondary"
                  variant="body1"
                >
                  {coverage?.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
