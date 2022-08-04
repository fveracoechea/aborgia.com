/* eslint-disable @next/next/no-img-element */
import React, { forwardRef } from "react";
import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";

const HeroImg = styled("img")`
  display: block;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Component = forwardRef((props: any, ref: any) => {
  const { style, ...imageProps } = props;
  return (
    <Box
      sx={{
        display: "block",
        width: "100%",
        position: "relative",
        height: {
          xs: 400,
          sm: 400,
          md: "75vh",
        },
      }}
      ref={ref}
    >
      <HeroImg aria-hidden="true" alt="" {...imageProps} />
    </Box>
  );
});

Component.displayName = "MotionImage";

export default motion(Component);
