import { Theme } from "@mui/material";
import { SxStyles } from "theme";

type Styles = {
  innerWrapper: SxStyles;
  overlay: SxStyles;
  item: any;
};

export const sx: Styles = {
  innerWrapper: {
    height: {
      md: 300,
      sm: 250,
      xs: 220,
    },
    position: "relative",
    "& img": {
      zIndex: 1,
    },
  },
  item: {
    zIndex: 2,
    position: "absolute",
    transition: "all .4s ease",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    padding: (t: Theme) => t.spacing(2),
    alignItems: "center",
  },
  overlay: (t) => ({
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    minHeight: "100vh",
    paddingTop: {
      xs: t.spacing(6),
      sm: t.spacing(8),
    },
    paddingBottom: t.spacing(4),
  }),
};
