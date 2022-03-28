import React, { FC } from "react";
import { Grid, Container } from "@mui/material";
import { useStrapiValuesQuery } from "apollo/generated";

export const Values: FC = () => {
  const { data } = useStrapiValuesQuery();
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid sm></Grid>
      </Grid>
    </Container>
  );
};
