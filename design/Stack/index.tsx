import { ElementType, forwardRef, ForwardedRef } from "react";
import { stackRecipe, StackVariants } from "./styles.css";

import { OverridableComponent, PolymorphicProps } from "design/theme";
import clsx from "clsx";

type Props = StackVariants & {};

interface StackTypeMap {
  props: Props;
  defaultComponent: "div";
}

export type StackProps<
  RootComponent extends ElementType = StackTypeMap["defaultComponent"]
> = PolymorphicProps<StackTypeMap, RootComponent>;

function StackImpl(props: StackProps, forwardedRef: ForwardedRef<Element>) {
  const {
    component,
    children,
    className,
    direction,
    justify,
    align,
    gap,
    ...otherProps
  } = props;

  const Element = component ?? "div";
  const styles = stackRecipe({ direction, justify, align, gap });

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

export const Stack = forwardRef(
  StackImpl
) as OverridableComponent<StackTypeMap>;
