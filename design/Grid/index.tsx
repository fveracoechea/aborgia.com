import { ElementType, forwardRef, ForwardedRef } from "react";
import { gridRecipe, GridVariants } from "./styles.css";

import { OverridableComponent, PolymorphicProps } from "design/theme";
import clsx from "clsx";

type Props = GridVariants & {};

interface GridTypeMap {
  props: Props;
  defaultComponent: "div";
}

export type GridProps<
  RootComponent extends ElementType = GridTypeMap["defaultComponent"]
> = PolymorphicProps<GridTypeMap, RootComponent>;

function GridImpl(props: GridProps, forwardedRef: ForwardedRef<Element>) {
  const { component, children, className, repeat, gap, ...otherProps } = props;

  const Element = component ?? "div";
  const styles = gridRecipe({ gap, repeat });

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

export const Grid = forwardRef(GridImpl) as OverridableComponent<GridTypeMap>;
