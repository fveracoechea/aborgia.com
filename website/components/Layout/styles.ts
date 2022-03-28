import { SxStyles } from "createTheme";

type Styles = {
  background: SxStyles;
  overlay: SxStyles;
};

export const sx: Styles = {
  background: {
    backgroundImage: "url(/patterns/colorful.png)",
    backgroundRepeat: "repeat",
  },
  overlay: (t) => ({
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    minHeight: "100vh",
    paddingTop: {
      xs: t.spacing(6),
      sm: t.spacing(8),
    },
  }),
};
