import { ComplexStyleRule } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

import { theme } from "design/theme/vars.css";

type RepeatVariants = Record<keyof typeof theme.gridRepeat, ComplexStyleRule>;

const repeat = Object.fromEntries(
  Object.entries(theme.gridRepeat).map(([key, value]) => [
    key,
    {
      gridTemplateColumns: value,
    },
  ])
) as RepeatVariants;

export const gridRecipe = recipe({
  base: {
    display: "grid",
  },
  variants: {
    repeat,
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
    },
  },
  defaultVariants: {
    repeat: "2x",
    gap: "2",
  },
});

export type GridVariants = RecipeVariants<typeof gridRecipe>;
