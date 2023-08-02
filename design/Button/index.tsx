import { ElementType, forwardRef, ForwardedRef } from "react";
import { ButtonVariants, buttonRecipe } from "./button.css";

import { OverridableComponent, PolymorphicProps } from "design/theme";
import { TextProps, Text } from "design/Text";
import clsx from "clsx";

type Props = ButtonVariants & {};

interface ButtonTypeMap {
  props: Props;
  defaultComponent: "button";
}

export type ButtonProps<
  RootComponent extends ElementType = ButtonTypeMap["defaultComponent"]
> = PolymorphicProps<ButtonTypeMap, RootComponent>;

function ButtonImpl(props: ButtonProps, forwardedRef: ForwardedRef<Element>) {
  const { component, children, className, variant, size, ...otherProps } =
    props;

  const Element = component ?? "button";
  const styles = buttonRecipe({ variant, size });

  return (
    <Element
      {...otherProps}
      className={clsx(styles, className)}
      ref={forwardedRef}
    >
      {children}
    </Element>
  );
}

export const Button = forwardRef(
  ButtonImpl
) as OverridableComponent<ButtonTypeMap>;
