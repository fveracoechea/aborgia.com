import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { color, hexToRgbA, theme } from "design/theme";

export const buttonRecipe = recipe({
  base: {
    display: "flex",
    cursor: "pointer",
    textDecoration: "none",
    border: "unset",
    borderRadius: theme.borderRadius.base,
    backgroundColor: "transparent",
    transitionDuration: theme.animation.duration.short,
    transitionTimingFunction: theme.animation.easing,
    transitionProperty: "background-color, border",
  },

  variants: {
    color: {
      light: {},
      dark: {},
      primary: {},
    },
    variant: {
      text: {},
      outlined: {},
      contained: {},
    },
    size: {
      sm: {
        fontSize: theme.fontSize.sm,
        padding: `${theme.spacing[1.5]} ${theme.spacing[3]}`,
      },
      md: {
        fontSize: theme.fontSize.base,
        padding: `${theme.spacing[2.5]} ${theme.spacing[4]}`,
      },
      lg: {
        fontSize: theme.fontSize.lg,
        padding: `${theme.spacing[3]} ${theme.spacing[5]}`,
      },
    },
  },

  compoundVariants: [
    {
      variants: { color: "light", variant: "text" },
      style: {
        color: theme.color.common.white,
        selectors: {
          "&:focus": {
            backgroundColor: "rgba(255,255,255,0.2)",
          },
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.2)",
          },
        },
      },
    },
    {
      variants: { color: "dark", variant: "text" },
      style: {
        color: theme.color.common.black,
        selectors: {
          "&:focus": {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        },
      },
    },
    {
      variants: { color: "primary", variant: "text" },
      style: {
        color: theme.color.primary.dark,
        selectors: {
          "&:focus": {
            backgroundColor:
              hexToRgbA(color.primary.main, 0.2) ?? color.primary.main,
          },
          "&:hover": {
            backgroundColor:
              hexToRgbA(color.primary.main, 0.2) ?? color.primary.main,
          },
        },
      },
    },

    {
      variants: { color: "primary", variant: "contained" },
      style: {
        color: theme.color.common.white,
        backgroundColor: theme.color.primary.dark,
        selectors: {
          "&:focus": {
            backgroundColor: theme.color.primary.main,
          },
          "&:hover": {
            backgroundColor: theme.color.primary.main,
          },
        },
      },
    },
  ],

  defaultVariants: {
    variant: "text",
    color: "light",
    size: "md",
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
