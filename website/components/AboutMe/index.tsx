import React, { FC } from "react";
import Image from "next/image";

import { Container, Grid, Box, Typography } from "@mui/material";
import { useAboutMeQuery } from "apollo/generated";
import { getStrapiImage } from "helpers/images";

export const AboutMe: FC = () => {
  const { data } = useAboutMeQuery();

  const content = data?.aboutMe?.data?.attributes;
  const image = content?.picture?.data?.attributes;

  return (
    <Container maxWidth="lg">
      <Grid container sx={{ pt: 8, pb: 2 }} spacing={4}>
        <Grid item md={4}>
          {image && (
            <Box>
              <Image
                layout="responsive"
                src={getStrapiImage(image.url)}
                alt="Arelys Borgia"
                width={image.width!}
                height={image.height!}
              />
            </Box>
          )}
        </Grid>
        <Grid item md={8}>
          {content && (
            <Box>
              <Typography variant="h4">{content.name}</Typography>
              <Typography variant="h5">{content.tagline}</Typography>
              <Box dangerouslySetInnerHTML={{ __html: content.description }} />
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};
