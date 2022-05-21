import React, { FC, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Hero as StrapiHero, useStrapiHeroQuery } from "apollo/generated";
import { Variants, motion } from "framer-motion";
import { useImageAnimation } from "./hooks";
import MotionImage from "./MotionImage";

const variants: Variants = {
  active: {
    opacity: 1,
  },
  inactive: {
    opacity: 0.2,
    transition: { duration: 0.5 },
  },
};

const sentence1: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.04,
    },
  },
};

const sentence2: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.9,
      staggerChildren: 0.04,
    },
  },
};

const letter: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
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
        overflow: "hidden",
        marginLeft: "-20px",
        marginTop: "-20px",
      }}
    >
      <MotionImage
        initial="inactive"
        alt="Hero banner"
        src={image?.url}
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
          backgroundColor: "rgba(0, 0, 0, .5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: (t) => t.spacing(4),
        }}
      >
        <Typography
          component={motion.h2}
          color="#fff"
          variant="h2"
          variants={sentence1}
          initial="hidden"
          animate="visible"
        >
          {hero?.title &&
            hero.title.split("").map((char, i) => (
              <motion.span key={`${char}-${i}`} variants={letter}>
                {char}
              </motion.span>
            ))}
        </Typography>
        <Typography
          component={motion.h3}
          color="#fff"
          variant="h4"
          variants={sentence2}
          initial="hidden"
          animate="visible"
        >
          {hero?.tagline &&
            hero.tagline.split("").map((char, i) => (
              <motion.span key={`${char}-${i}`} variants={letter}>
                {char}
              </motion.span>
            ))}
        </Typography>
      </Box>
    </Box>
  );
};
