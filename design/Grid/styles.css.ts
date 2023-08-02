import { ComplexStyleRule } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

import { breakpoints, theme } from "design/theme/vars.css";

export const gridRecipe = recipe({
  base: {
    display: "grid",
  },
  variants: {
    repeat: {
      "1x": { gridTemplateColumns: "repeat(1, 1fr)" },
      "2x": {
        gridTemplateColumns: "repeat(2, 1fr)",
        "@media": {
          [`screen and (max-width: ${breakpoints.md})`]: {
            gridTemplateColumns: "1fr",
          },
        },
      },
      "3x": { gridTemplateColumns: "repeat(3, 1fr)" },
      "4x": { gridTemplateColumns: "repeat(4, 1fr)" },
      "5x": { gridTemplateColumns: "repeat(5, 1fr)" },
      "6x": { gridTemplateColumns: "repeat(6, 1fr)" },
    },
    gap: {
      none: {
        gap: "0px",
      },
      "2": {
        gap: theme.spacing[2],
      },
      "4": {
        gap: theme.spacing[4],
      },
      "6": {
        gap: theme.spacing[6],
      },
      "8": {
        gap: theme.spacing[8],
      },
      "10": {
        gap: theme.spacing[10],
      },
      "12": {
        gap: theme.spacing[12],
      },
      "14": {
        gap: theme.spacing[14],
      },
      "16": {
        gap: theme.spacing[16],
      },
    },
  },
  defaultVariants: {
    repeat: "2x",
    gap: "2",
  },
});

export type GridVariants = RecipeVariants<typeof gridRecipe>;
