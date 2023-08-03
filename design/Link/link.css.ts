import { ComplexStyleRule } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { theme } from "design/theme";

export const linkRecipe = recipe({
  base: {
    cursor: "pointer",
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
