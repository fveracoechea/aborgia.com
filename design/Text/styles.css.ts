import { ComplexStyleRule } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

import { theme } from "design/theme";

type ColorKeys =
  | keyof typeof theme.color.text
  | "primary"
  | "secondary"
  | "grey"
  | "inherit"
  | "error";

type ColorVariants = Record<ColorKeys, ComplexStyleRule>;

const color = Object.fromEntries(
  Object.entries({
    ...theme.color.text,
    primary: theme.color.primary.dark,
    grey: theme.color.grey.main,
    secondary: theme.color.secondary.dark,
    error: theme.color.error,
    inherit: "inherit",
  }).map(([key, value]) => [
    key,
    {
      color: value,
    },
  ])
) as ColorVariants;

type FontWeightVariants = Record<
  keyof typeof theme.fontWeight,
  ComplexStyleRule
>;

const fontWeight = Object.fromEntries(
  Object.entries(theme.fontWeight).map(([key, value]) => [
    key,
    {
      fontWeight: value,
    },
  ])
) as FontWeightVariants;

export const textRecipe = recipe({
  base: {
    textUnderlineOffset: theme.spacing[0.5],
  },
  variants: {
    variant: {
      display: {
        fontSize: theme.fontSize["6xl"],
        lineHeight: theme.lineHeight["5xl"],
      },
      h1: {
        fontSize: theme.fontSize["5xl"],
        lineHeight: theme.lineHeight.sm,
      },
      h2: {
        fontSize: theme.fontSize["4xl"],
        lineHeight: theme.lineHeight.xs,
      },
      h3: {
        fontSize: theme.fontSize["3xl"],
        lineHeight: theme.lineHeight.md,
      },
      h4: {
        fontSize: theme.fontSize["2xl"],
        lineHeight: theme.lineHeight["3xl"],
      },
      h5: {
        fontSize: theme.fontSize.xl,
        lineHeight: theme.lineHeight.xl,
      },
      h6: {
        fontSize: theme.fontSize.lg,
        lineHeight: theme.lineHeight["2xl"],
      },
      subtitle1: {
        fontSize: theme.fontSize.base,
        lineHeight: theme.lineHeight["6xl"],
      },
      subtitle2: {
        fontSize: theme.fontSize.sm,
        lineHeight: theme.lineHeight["2xl"],
      },
      body1: {
        fontSize: theme.fontSize.base,
        lineHeight: theme.lineHeight.lg,
      },
      body2: {
        fontSize: theme.fontSize.sm,
        lineHeight: theme.lineHeight["4xl"],
      },
      caption: {
        fontSize: theme.fontSize.xs,
        lineHeight: theme.lineHeight["2xl"],
      },
      micro: {
        fontSize: theme.fontSize["2xs"],
        lineHeight: theme.lineHeight["7xl"],
      },
      label: {
        fontSize: theme.fontSize?.sm,
        lineHeight: theme.lineHeight["8xl"],
        fontWeight: theme.fontWeight.medium,
      },
      custom: {},
    },
    fontWeight,
    color,
  },

  defaultVariants: { variant: "body1", color: "inherit", fontWeight: "normal" },
});

export type TextVariants = RecipeVariants<typeof textRecipe>;
