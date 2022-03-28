import { FC } from "react";
import { ComponentBannerText } from "apollo/generated";
import { Grid, SxProps, Theme, Typography, Box } from "@mui/material";

type Props = {
  data: ComponentBannerText;
};

const Section: FC<Props> = ({ data }) => {
  if (!data) return null;

  console.log("TextContent data => ", data);

  const wrapperStyles: SxProps<Theme> = {
    position: "relative",
    backgroundColor: data?.backgroundColor || "transparent",
    px: `${data?.spacing?.horizontal || 0}rem`,
    py: `${data?.spacing?.vertical || 0}rem`,
  };

  return (
    <Grid item md sx={wrapperStyles}>
      {data?.text && (
        <Box
          sx={{ color: data?.textColor || null }}
          dangerouslySetInnerHTML={{ __html: data.text }}
        />
      )}
    </Grid>
  );
};

export default Section;
