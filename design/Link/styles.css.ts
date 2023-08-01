import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { theme } from "design/theme";

export const linkRecipe = recipe({
  base: {
    cursor: "pointer",
    opacity: "0.85",
    transition: `opacity ${theme.animation.duration.short} ${theme.animation.easing}`,
    selectors: {
      "&:hover": {
        opacity: "1",
      },
    },
  },
  variants: {
    underline: {
      none: {
        textDecoration: "none",
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
      },
    },
  },

  defaultVariants: {
    underline: "always",
  },
});

export type LinkVariants = RecipeVariants<typeof linkRecipe>;
