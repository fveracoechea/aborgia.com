import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Variants, motion } from "framer-motion";
import { useImageAnimation } from "./hooks";
import MotionImage from "./MotionImage";
import { useTranslation } from "next-export-i18n";

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
  const { t } = useTranslation();
  const { image, animation } = useImageAnimation();

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
        aria-hidden="true"
        src={image}
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
          sx={{ textAlign: "center", mb: 2 }}
        >
          {t("hero.title")
            .split("")
            .map((char: any, i: number) => (
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
          sx={{ textAlign: "center" }}
        >
          {t("hero.tagline")
            .split("")
            .map((char: any, i: number) => (
              <motion.span key={`${char}-${i}`} variants={letter}>
                {char}
              </motion.span>
            ))}
        </Typography>
      </Box>
    </Box>
  );
};
