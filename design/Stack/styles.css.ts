import { RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { theme } from "design/theme";

export const stackRecipe = recipe({
  base: {
    display: "flex",
  },
  variants: {
    direction: {
      column: {
        flexDirection: "column",
      },
      row: {
        flexDirection: "row",
      },
    },
    justify: {
      start: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "flex-end",
      },
    },
    align: {
      stretch: {
        alignItems: "stretch",
      },
      start: {
        alignItems: "flex-start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "flex-end",
      },
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
    },
  },

  defaultVariants: {
    gap: "4",
    align: "stretch",
    justify: "start",
    direction: "column",
  },
});

export type StackVariants = RecipeVariants<typeof stackRecipe>;
