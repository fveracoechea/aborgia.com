import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { breakpoints, theme } from "design/theme";

export const linkRecipe = recipe({
  base: {
    cursor: "pointer",
  },
  variants: {
    navLink: {
      dark: {
        transition: `background-color ${theme.animation.duration.short} ${theme.animation.easing}`,
        color: theme.color.common.white,
        fontSize: theme.fontSize.base,
        fontWeight: theme.fontWeight.medium,
        textDecoration: "none",
        display: "flex",
        padding: `${theme.spacing[2]} ${theme.spacing[3]}`,
        outline: "none",
        borderRadius: theme.borderRadius.base,
        selectors: {
          "&:focus": {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.2)",
            textDecoration: "none",
          },
        },
      },
      outlined: {
        transition: `all ${theme.animation.duration.short} ${theme.animation.easing}`,
        border: theme.border["1px"],
        borderColor: theme.color.common.white,
        color: theme.color.common.white,
        fontSize: theme.fontSize.base,
        fontWeight: theme.fontWeight.normal,
        backgroundColor: "transparent",
        textDecoration: "none",
        textTransform: "capitalize",
        display: "flex",
        padding: `${theme.spacing[2]} ${theme.spacing[3]}`,
        outline: "none",
        borderRadius: theme.borderRadius.base,
        selectors: {
          "&:focus": {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.2)",
            textDecoration: "none",
          },
        },
        "@media": {
          [`screen and (max-width: ${breakpoints.md})`]: {
            padding: `${theme.spacing[1]} ${theme.spacing[2]}`,
            fontSize: theme.fontSize.xs,
          },
        },
      },
      light: {
        transition: `background-color ${theme.animation.duration.short} ${theme.animation.easing}`,
        color: theme.color.common.white,
        fontSize: theme.fontSize.sm,
        fontWeight: theme.fontWeight.medium,
        textDecoration: "none",
        display: "flex",
        padding: `${theme.spacing[1]} ${theme.spacing[2]}`,
        outline: "none",
        borderRadius: theme.borderRadius.base,
        selectors: {
          "&:focus": {
            backgroundColor: "rgba(255,255,255,.2)",
          },
          "&:hover": {
            backgroundColor: "rgba(255,255,255,.2)",
            textDecoration: "none",
          },
        },
      },
    },
    underline: {
      never: {},
      none: {
        textDecoration: "none",
        opacity: "0.80",
        selectors: {
          "&:hover": {
            opacity: "1",
          },
        },
      },
      hover: {
        textDecoration: "none",
        selectors: {
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
      always: {
        textDecoration: "underline",
        opacity: "0.80",
        selectors: {
          "&:hover": {
            opacity: "1",
          },
        },
      },
    },
  },

  defaultVariants: {
    underline: "hover",
  },
});

export type LinkVariants = RecipeVariants<typeof linkRecipe>;
