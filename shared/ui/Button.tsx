import { ElementType, ForwardedRef, ReactNode, forwardRef } from 'react';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import clsx from 'clsx';

import { OverridableComponent, PolymorphicProps } from './types';

type Props = {
  variant?: 'text' | 'outlined' | 'contained';
  size?: 'sm' | 'md' | 'lg';
  color?: 'light' | 'dark' | 'primary';
};

interface ButtonTypeMap {
  props: Props;
  defaultComponent: 'button';
}

export type ButtonProps<RootComponent extends ElementType = ButtonTypeMap['defaultComponent']> =
  PolymorphicProps<ButtonTypeMap, RootComponent>;

function getClassNames(props: Required<Props>, externalClasses?: string) {
  const { variant, size, color } = props;

  const defaultClasses = clsx(
    'flex flex-row items-center no-underline cursor-pointer font-serif',
    'transition rounded border-solid font-medium outline-none no-underline',
    'ring-current focus:ring-2',
  );

  const sizeClasses = clsx(
    size === 'sm' && 'text-sm py-1 px-2 gap-2',
    size === 'md' && 'text-base py-2 px-3 gap-2.5',
    size === 'lg' && 'text-lg py-4 px-4 gap-3',
  );

  const variantClasses = clsx(
    variant === 'text' && [
      'border-none',
      color === 'light' && 'text-white ring-white hover:bg-transparentLight',
      color === 'dark' && 'text-dark ring-dark hover:bg-transparentDark',
      color === 'primary' && 'text-primaryDark ring-primary hover:bg-transparentPrimary',
    ],
    variant === 'outlined' && [
      'border bg-transparent',
      color === 'light' && 'text-white  border-white hover:bg-white hover:text-dark',
      color === 'dark' && 'text-dark border-dark hover:bg-white hover:text-white',
      color === 'primary' && [
        'text-primary border-2 border-primary',
        'hover:bg-transparentPrimary hover:text-primaryDark hover:border-primaryDark',
      ],
    ],
    variant === 'contained' && [color === 'light' && 'bg-disabled text-white hover:bg-dark'],
  );

  return clsx(defaultClasses, sizeClasses, variantClasses, externalClasses);
}

function ButtonImpl(props: ButtonProps, forwardedRef: ForwardedRef<Element>) {
  const {
    component,
    children,
    className,
    variant = 'text',
    size = 'md',
    color = 'dark',
    ...otherProps
  } = props;

  const Element = component ?? 'button';
  const styles = getClassNames({ variant, size, color }, className);

  return (
    <Element {...otherProps} className={styles} ref={forwardedRef}>
      {children}
    </Element>
  );
}

export const Button = forwardRef(ButtonImpl) as OverridableComponent<ButtonTypeMap>;

type ButtonLinkProps = Props & NextLinkProps & { children?: ReactNode; className?: string };

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>((props, forwardedRef) => {
  const {
    children,
    className,
    variant = 'text',
    size = 'md',
    color = 'dark',
    href,
    ...otherProps
  } = props;

  const styles = getClassNames({ variant, size, color }, className);

  return (
    <NextLink {...otherProps} href={href as string} className={styles} ref={forwardedRef}>
      {children}
    </NextLink>
  );
});

ButtonLink.displayName = 'ButtonLink';
