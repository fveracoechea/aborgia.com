import { FC } from "react";
import {
  BannerEntity,
  ComponentBannerImages,
  ComponentBannerSection,
} from "apollo/generated";
import { Grid, SxProps, Theme, Typography } from "@mui/material";
import { getBannerImages } from "helpers/images";

type Props = {
  data: ComponentBannerSection;
};

const Section: FC<Props> = ({ data }) => {
  if (!data) return null;

  console.log("Section data => ", data);

  const wrapperStyles: SxProps<Theme> = {
    position: "relative",
    backgroundColor: data?.backgroundColor || "transparent",
    px: `${data?.spacing?.horizontal || 0}rem`,
    py: `${data?.spacing?.vertical || 0}rem`,
    backgroundImage: getBannerImages(data?.images),
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
  };

  return (
    <Grid item sm sx={wrapperStyles}>
      {data?.primaryText && (
        <Typography sx={{ textAlign: "center" }} variant="h3">
          {data.primaryText}
        </Typography>
      )}
      {data?.secondaryText && (
        <Typography variant="h5">{data.secondaryText}</Typography>
      )}
    </Grid>
  );
};

export default Section;
