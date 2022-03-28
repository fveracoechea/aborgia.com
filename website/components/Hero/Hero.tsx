import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Hero as StrapiHero, useStrapiHeroQuery } from "apollo/generated";
import { Variants } from "framer-motion";
import { useImageAnimation } from './hooks'
import MotionImage from './MotionImage'

const variants: Variants = {
  active: {
    opacity: 1,
  },
  inactive: {
    opacity: 0.2,
    transition: { duration: 0.5 },
  },
};

export const Hero: FC = () => {
  const { data } = useStrapiHeroQuery();
  const hero = (data?.hero?.data?.attributes || null) as StrapiHero | null;
  const { image, animation } = useImageAnimation(hero);

  return (
    <Box
      sx={{
        margin: "0 auto",
        position: "relative",
      }}
    >
      <MotionImage
        initial="inactive"
        alt="Hero banner"
        src={image?.url}
        width={image?.width}
        height={image?.height}
        variants={variants}
        animate={animation}
      />
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          flexDirection: "column",
          backgroundColor: "rgba(0, 0, 0, .4)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: (t) => t.spacing(4),
        }}
      >
        <Typography color="#fff" variant="h2">
          {hero?.title}
        </Typography>
        <Typography color="#fff" variant="h4" component="h3">
          {hero?.tagline}
        </Typography>
      </Box>
    </Box>
  );
};
