import { ElementType, forwardRef, ForwardedRef } from "react";
import { textRecipe, TextVariants } from "./styles.css";

import { OverridableComponent, PolymorphicProps } from "design/theme";
import clsx from "clsx";

const ComponentVariantMap: Record<
  NonNullable<NonNullable<TextVariants>["variant"]>,
  ElementType
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  label: "label",
  body1: "p",
  body2: "p",
  display: "span",
  caption: "span",
  subtitle1: "span",
  subtitle2: "span",
  micro: "span",
  custom: "span",
};

type Props = TextVariants & {};

interface TextTypeMap {
  props: Props;
  defaultComponent: "p";
}

export type TextProps<RootComponent extends ElementType = "p"> =
  PolymorphicProps<TextTypeMap, RootComponent>;

function TextImpl(props: TextProps, forwardedRef: ForwardedRef<Element>) {
  const {
    component,
    variant = "body1",
    fontWeight,
    color,
    children,
    className,
    ...otherProps
  } = props;

  const recipe = textRecipe({ color, variant, fontWeight });
  const Element = component ?? ComponentVariantMap[variant];

  return (
    <Element
      {...otherProps}
      ref={forwardedRef}
      className={clsx(recipe, className)}
    >
      {children}
    </Element>
  );
}

export const Text = forwardRef(TextImpl) as OverridableComponent<TextTypeMap>;
