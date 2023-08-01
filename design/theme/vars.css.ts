import { createTheme, style } from "@vanilla-extract/css";

export const [themeClassname, theme] = createTheme({
  // https://m2.material.io/design/layout/responsive-layout-grid.html#breakpoints
  breakpoints: {
    sm: "600px",
    md: "900px",
    lg: "1200px",
    xl: "1536px",
    "2xl": "1920px",
  },

  // https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale
  spacing: {
    auto: "auto",
    "0": "0px",
    px: "1px",
    "0.5": "0.125rem", // 2px
    "1": "0.25rem", // 4px
    "1.5": "0.375rem", // 6px
    "2": "0.5rem", // 8px
    "2.5": "0.625rem", // 10px
    "3": "0.75rem", // 12px
    "3.5": "0.875rem", // 14px
    "4": "1rem", // 16px
    "4.5": "1.125rem", // 18px
    "5": "1.25rem", // 20px
    "6": "1.5rem", // 24px
    "7": "1.75rem", // 28px
    "8": "2rem", // 32px
    "9": "2.25rem", // 36px
    "10": "2.5rem", // 40px
    "11": "2.75rem", // 44px
    "12": "3rem", // 48px
    "13": "3.25rem", // 52px
    "14": "3.5rem", // 56px
    "15": "3.75rem", // 60px
    "16": "4rem", // 64px
    "18": "4.5rem", // 72px
    "20": "5rem", // 80px
    "22": "5.5rem", // 88px
    "24": "6rem", // 96px
    "28": "7rem", // 112px
    "32": "8rem", // 128px
    "36": "9rem", // 144px
    "40": "10rem", // 160px
    "44": "11rem", // 176px
    "48": "12rem", // 192px
    "52": "13rem", // 208px
    "56": "14rem", // 224px
    "60": "15rem", // 240px
    "64": "16rem", // 256px
    "72": "18rem", // 288px
    "80": "20rem", // 320px
    "96": "24rem", // 384px
    "100": "25rem", // 400px
    "112.5": "28.125rem", // 450px
    "125": "31.25rem", // 500px
    "150": "37.5rem", // 600px
    "200": "50rem", // 800px
    "256": "64rem", // 1024px
    "285": "71.25", // 1140px
    "360": "90rem", // 1440px
    "480": "120rem", // 1920px
  },

  color: {
    common: {
      black: "#2B2B2B",
      white: "#FFFFFF",
    },
    primary: {
      main: "#3CACAE",
      light: "#C8F4F9",
      // dark: ???
    },
    secondary: {
      main: "#EEB5EB",
      // light: ???
      dark: "#C26DBC",
    },
    text: {
      dark: "#333333",
      light: "#FFFFFF",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    grey: {
      main: "#BDBDBD",
      light: "#EEEEEE",
      dark: "#616161",
    },
    error: {
      main: "#EB0014",
      light: "#FF99A2",
      dark: "#C70011",
    },
    success: {
      main: "#1AA251",
      light: "#6AE79C",
      dark: "#1AA251",
    },
    warning: {
      main: "#DEA500",
      light: "#FFDC48",
      dark: "#AB6800",
    },
    info: {
      main: "#0288d1",
      light: "#03a9f4",
      dark: "#01579b",
    },
    current: "currentColor",
  },

  fontFamily: `Work Sans, sans-serif`,

  fontSize: {
    "2xs": "0.625rem", // 10px
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.3125rem", // 21px
    "2xl": "1.5rem", // 24px
    "3xl": "1.75rem", // 28px
    "4xl": "2rem", // 32px
    "5xl": "2.5rem", // 40px
    "6xl": "3rem", // 48px
  },

  fontWeight: {
    // light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },

  lineHeight: {
    xs: "1.08em",
    sm: "1.1em",
    md: "1.19em",
    lg: "1.25em",
    xl: "1.29em",
    "2xl": "1.33em",
    "3xl": "1.36em",
    "4xl": "1.43em",
    "5xl": "1.48em",
    "6xl": "1.5em",
    "7xl": "1.6em",
    "8xl": "1.71em",
    none: "1em",
  },

  wordSpacing: {
    normal: "0",
    base: "0.0125rem",
    wide: "0.025em",
    wider: "0.05rem",
    widest: "0.0625rem",
  },

  /** Borders & radius */
  border: {
    none: "0",
    "0px": "0px",
    "1px": "1px solid",
    "2px": "2px solid",
  },

  borderRadius: {
    base: "4px",
    round: "6px",
  },

  shadows: {
    none: "none",
    "1": "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    "2": "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "3": "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "4": "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "5": "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "6": "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "7": "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "8": "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "9": "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "10": "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "11": "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "12": "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "13": "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "14": "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "15": "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "16": "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "17": "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "18": "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "19": "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "20": "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "21": "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "22": "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "23": "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "24": "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
  },

  gridRepeat: {
    "1x": "repeat(1, 1fr)",
    "2x": "repeat(2, 1fr)",
    "3x": "repeat(3, 1fr)",
    "4x": "repeat(4, 1fr)",
    "5x": "repeat(5, 1fr)",
    "6x": "repeat(6, 1fr)",
  },

  zIndex: {
    "-1": "-1",
    "0": "0",
    "10": "10",
    "20": "20",
    "30": "30",
    "40": "40",
    "50": "50",
    header: "1100",
    modal: "1200",
    notification: "1300",
    tooltip: "1400",
  },

  animation: {
    easing: "cubic-bezier(0.4, 0, 1, 1)",
    duration: {
      short: "200ms",
      standard: "300ms",
    },
  },
});
