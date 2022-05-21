import { FC } from "react";
import { ComponentBannerSection } from "apollo/generated";
import { Grid, SxProps, Theme, Typography } from "@mui/material";
import { getBannerImages } from "helpers/images";

type Props = {
  data: ComponentBannerSection;
};

const Section: FC<Props> = ({ data }) => {
  if (!data) return null;

  const wrapperStyles: SxProps<Theme> = {
    position: "relative",
    width: "100%",
    backgroundColor: data?.backgroundColor || "transparent",
    px: `${data?.spacing?.horizontal || 0}rem`,
    py: `${data?.spacing?.vertical || 0}rem`,
    backgroundImage: getBannerImages(data?.images),
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    textAlign: data?.textAlign,
  };

  return (
    <Grid item md sx={wrapperStyles}>
      {data?.primaryText && (
        <Typography color="textSecondary" variant="h2">
          {data.primaryText}
        </Typography>
      )}
      {data?.secondaryText && (
        <Typography color="textSecondary" variant="h4">
          {data.secondaryText}
        </Typography>
      )}
    </Grid>
  );
};

export default Section;
