import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { theme } from "design/theme";

export const containerRecipe = recipe({
  base: {
    margin: "0 auto",
    padding: theme.spacing["3"],
  },
  variants: {
    variant: {
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
    variant: "md",
  },
});

export type ContainerVariants = RecipeVariants<typeof containerRecipe>;
