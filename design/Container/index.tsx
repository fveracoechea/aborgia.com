import { ElementType, forwardRef, ForwardedRef } from "react";
import { containerRecipe, ContainerVariants } from "./container.css";

import { OverridableComponent, PolymorphicProps } from "design/theme";
import clsx from "clsx";

type Props = ContainerVariants & {};

interface ContainerTypeMap {
  props: Props;
  defaultComponent: "div";
}

export type ContainerProps<
  RootComponent extends ElementType = ContainerTypeMap["defaultComponent"]
> = PolymorphicProps<ContainerTypeMap, RootComponent>;

function ContainerImpl(
  props: ContainerProps,
  forwardedRef: ForwardedRef<Element>
) {
  const { component, children, className, variant, ...otherProps } = props;

  const Element = component ?? "div";
  const styles = containerRecipe({ variant });

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

export const Container = forwardRef(
  ContainerImpl
) as OverridableComponent<ContainerTypeMap>;
