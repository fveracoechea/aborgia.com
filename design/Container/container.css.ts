import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { theme } from "design/theme";

export const containerRecipe = recipe({
  base: {
    margin: "0 auto",
  },
  variants: {
    spacing: {
      sm: {
        padding: `${theme.spacing[1.5]} ${theme.spacing[3]}`,
      },
      md: {
        padding: theme.spacing["3"],
      },
      lg: {
        padding: `${theme.spacing[4]} ${theme.spacing[3]}`,
      },
    },
    maxWidth: {
      md: {
        maxWidth: theme.breakpoints.md,
      },
      lg: {
        maxWidth: theme.breakpoints.lg,
      },
      xl: {
        maxWidth: theme.breakpoints.xl,
      },
    },
  },

  defaultVariants: {
    maxWidth: "md",
    spacing: "md",
  },
});

export type ContainerVariants = RecipeVariants<typeof containerRecipe>;
