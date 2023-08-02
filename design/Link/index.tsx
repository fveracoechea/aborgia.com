import { ElementType, forwardRef, ForwardedRef } from "react";
import NextLInk from "next/link";
import { LinkVariants, linkRecipe } from "./link.css";

import { OverridableComponent, PolymorphicProps } from "design/theme";
import { TextProps, Text } from "design/Text";
import clsx from "clsx";

type Props = LinkVariants & TextProps & {};

interface LinkTypeMap {
  props: Props;
  defaultComponent: "a";
}

export type LinkProps<
  RootComponent extends ElementType = LinkTypeMap["defaultComponent"]
> = PolymorphicProps<LinkTypeMap, RootComponent>;

function LinkImpl(props: LinkProps, forwardedRef: ForwardedRef<Element>) {
  const { component, children, className, underline, navLink, ...otherProps } =
    props;

  const Element = component ?? NextLInk;
  const styles = linkRecipe({ underline, navLink });

  return (
    <Text
      {...otherProps}
      component={Element}
      className={clsx(styles, className)}
      ref={forwardedRef}
    >
      {children}
    </Text>
  );
}

export const Link = forwardRef(LinkImpl) as OverridableComponent<LinkTypeMap>;
