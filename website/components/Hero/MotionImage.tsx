import React, { forwardRef } from "react";
import NextImage from "next/image";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

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
      <NextImage
        {...imageProps}
        priority
        layout="fill"
        sizes="100vw"
        objectFit="cover"
        objectPosition="center"
      />
    </Box>
  );
});

Component.displayName = "MotionImage";

export default motion(Component);
