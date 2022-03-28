import React, { forwardRef } from "react";
import NextImage from "next/image";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const Component = forwardRef((props: any, ref: any) => {
  return (
    <Box
      sx={{
        display: "block",
        width: "100%",
        position: "relative",
        height: '75vh',
      }}
      ref={ref}
    >
      <NextImage
        {...props}
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