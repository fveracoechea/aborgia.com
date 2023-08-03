import { style, keyframes } from "@vanilla-extract/css";
import { theme, breakpoints } from "design/theme";

export const overlay = style({
  position: "fixed",
  inset: 0,
  zIndex: theme.zIndex.overlay,
  backgroundColor: "rgba(0,0,0, .3)",
  display: "none",
  opacity: 0,
  transition: "opacity",
  transitionDuration: theme.animation.duration.standard,
  transitionTimingFunction: theme.animation.easing,
  selectors: {
    '&[data-state="open"]': {
      display: "block",
      opacity: 1,
    },
  },
});

export const mobileNav = style({
  backgroundColor: theme.color.common.black,
  color: theme.color.common.white,
  padding: theme.spacing[2],
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  position: "fixed",
  zIndex: theme.zIndex.drawer,
  top: 60,
  left: 0,
  right: 0,
  transitionProperty: "transform",
  transitionDuration: theme.animation.duration.standard,
  transitionTimingFunction: theme.animation.easing,

  selectors: {
    '&[data-state="idle"]': {
      transform: "translateY(calc(-100% - 60px))",
    },
    '&[data-state="close"]': {
      transform: "translateY(calc(-100% - 60px))",
    },
    '&[data-state="open"]': {
      transform: "translateY(0%)",
      boxShadow: theme.shadows[6],
    },
  },
});

export const mobileNavLink = style({
  display: "flex",
  color: theme.color.grey.light,
  padding: theme.spacing[3],
  selectors: {
    "&:not(:last-of-type)": {
      borderBottom: theme.border["1px"],
      borderColor: theme.color.grey.dark,
    },
  },
});

export const mobileContactLink = style({
  display: "flex",
  alignItems: "center",
  color: theme.color.grey.light,
  gap: theme.spacing[3],
  padding: `${theme.spacing[3]} ${theme.spacing[6]}`,
});

export const toolbar = style({
  backgroundColor: theme.color.common.black,
  "@media": {
    [`screen and (max-width: ${breakpoints.md})`]: {
      padding: theme.spacing[1],
      display: "flex",
      justifyContent: "space-between",
    },
  },
});

export const toolbarContent = style({
  display: "flex",
  justifyContent: "space-between",
});

export const footer = style({
  color: theme.color.grey.main,
  paddingTop: theme.spacing[12],
  paddingBottom: theme.spacing[12],
  backgroundColor: theme.color.common.black,
});

export const header = style({
  width: "100%",
  boxShadow: theme.shadows[4],
  position: "relative",
  zIndex: theme.zIndex.header,
});

export const navigation = style({
  position: "relative",
  backgroundColor: theme.color.primary.dark,
  zIndex: theme.zIndex.header,
});

export const divider = style({
  width: "100%",
  border: theme.border["1px"],
  borderColor: theme.color.grey.dark,
});

export const mobileStack = style({
  "@media": {
    [`screen and (max-width: ${breakpoints.md})`]: {
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  },
});
