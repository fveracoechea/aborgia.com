import { FC } from "react";
import { BannerEntity, ComponentBannerImages } from "apollo/generated";
import { Grid, SxProps, Theme } from "@mui/material";
import { getBannerImages } from "helpers/images";
import Section from "./section";

type Props = {
  data: BannerEntity;
};

const Banner: FC<Props> = ({ data }) => {
  if (!data) return null;

  console.log("Banner data => ", data?.attributes);

  const wrapperStyles: SxProps<Theme> = {
    position: "relative",
    backgroundColor: data.attributes?.backgroundColor || "transparent",
    px: `${data?.attributes?.spacing?.horizontal || 0}rem`,
    py: `${data?.attributes?.spacing?.vertical || 0}rem`,
    backgroundImage: getBannerImages(data?.attributes?.images),
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

  return (
    <Grid item sm sx={wrapperStyles}>
      {data?.attributes?.content &&
        data.attributes.content.map((item) => {
          if (item?.__typename === "ComponentBannerSection") {
            return <Section key={`ComponentBannerSection-${item.id}`} data={item} />;
          }
          return null;
        })}
    </Grid>
  );
};

export default Banner;
