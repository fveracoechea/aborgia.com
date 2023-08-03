import {
  ElementType,
  forwardRef,
  ForwardedRef,
  LegacyRef,
  PropsWithoutRef,
  ReactNode,
} from "react";

import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { ButtonVariants, buttonRecipe } from "./button.css";

import { OverridableComponent, PolymorphicProps } from "design/theme";
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
  const {
    component,
    children,
    className,
    variant,
    color,
    size,
    ...otherProps
  } = props;

  const Element = component ?? "button";
  const styles = buttonRecipe({ variant, size, color });

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

type LinkProps = ButtonVariants &
  NextLinkProps & { children?: ReactNode; className?: string };

export const ButtonLink = forwardRef<HTMLAnchorElement, LinkProps>(
  (props, forwardedRef) => {
    const { children, className, variant, size, color, href, ...otherProps } =
      props;
    const styles = buttonRecipe({ variant, size, color });

    return (
      <NextLink
        {...otherProps}
        href={href as any}
        className={clsx(styles, className)}
        ref={forwardedRef}
      >
        {children}
      </NextLink>
    );
  }
);

ButtonLink.displayName = "ButtonLink";
