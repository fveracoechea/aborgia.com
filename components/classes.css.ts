import { style } from "@vanilla-extract/css";
import { theme, breakpoints } from "design/theme";
import { scaleIn } from "design/theme/keyframes.css";

export const overlay = style({
  position: "fixed",
  inset: 0,
  zIndex: theme.zIndex.overlay,
});

export const drawer = style({
  backgroundColor: theme.color.common.black,
  color: theme.color.common.white,
  padding: theme.spacing[2],
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  position: "fixed",
  zIndex: theme.zIndex.drawer,
  top: 55,
  left: 0,
  right: 0,
  minHeight: "40vh",
  animationName: scaleIn,
  animationDuration: theme.animation.duration.short,
  animationTimingFunction: theme.animation.easing,
  boxShadow: theme.shadows[6],
});

export const drawerNavLink = style({
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

export const drawerContactLink = style({
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
  padding: theme.spacing[1.5],
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
  width: "100vw",
  boxShadow: theme.shadows[4],
  position: "relative",
  zIndex: theme.zIndex.header,
});

export const navigation = style({
  backgroundColor: theme.color.primary.dark,
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
