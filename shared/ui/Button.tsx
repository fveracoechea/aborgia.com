import { ElementType, ForwardedRef, forwardRef } from 'react';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import clsx from 'clsx';

import { DefaultComponentProps, OverridableComponent, PolymorphicProps } from './types';

type Props = {
  variant?: 'text' | 'outlined' | 'contained' | 'custom';
  size?: 'sm' | 'md' | 'lg';
  color?: 'light' | 'dark' | 'primary' | 'grey';
  // loading?: boolean;
};

interface ButtonTypeMap {
  props: Props;
  defaultComponent: 'button';
}

function getClassNames(props: Required<Props>, externalClasses?: string) {
  const { variant, size, color } = props;

  const defaultClasses = clsx(
    variant === 'custom'
      ? [
          'flex flex-row no-underline cursor-pointer font-serif',
          'transition rounded border-solid font-medium outline-none no-underline',
        ]
      : [
          'flex flex-row items-center no-underline cursor-pointer font-serif',
          'transition rounded border-solid font-medium outline-none no-underline',
          'ring-current focus:ring-2',
        ],
  );

  const sizeClasses = clsx(
    size === 'sm' && 'text-sm py-1 px-2 gap-2',
    size === 'md' && 'text-base py-2 px-4 gap-2.5',
    size === 'lg' && 'text-lg py-4 px-6 gap-3',
  );

  const variantClasses = clsx(
    variant === 'text' && [
      'ring-0',
      color === 'light' && 'text-white ring-white hover:bg-transparentLight',
      color === 'dark' && 'text-dark ring-dark hover:bg-transparentDark',
      color === 'primary' && 'text-primaryDark ring-primary hover:bg-transparentPrimary',
      color === 'grey' && 'text-grey ring-grey hover:text-greyLight',
    ],
    variant === 'outlined' && [
      'bg-transparent',
      color === 'light' && [
        'ring-2 text-white  ring-white hover:bg-transparentDark6',
        'focus:ring-4',
      ],
      color === 'dark' && 'text-dark border-dark hover:bg-white hover:text-white',
      color === 'primary' && [
        'text-primary ring-offset-white ring-offset-4 ring-primary border-2 border-primary',
        'hover:bg-primary focus:bg-primary hover:text-white focus:text-white',
        'focus:ring-2',
      ],
    ],
    variant === 'contained' && [color === 'light' && 'bg-disabled text-white hover:bg-dark'],
  );

  return clsx(defaultClasses, sizeClasses, variantClasses, externalClasses);
}

export type ButtonProps<RootComponent extends ElementType = ButtonTypeMap['defaultComponent']> =
  PolymorphicProps<ButtonTypeMap, RootComponent>;

function ButtonImpl(props: ButtonProps, forwardedRef: ForwardedRef<Element>) {
  const {
    component,
    children,
    className,
    variant = 'text',
    size = 'md',
    color = 'dark',
    // loading = false,
    ...otherProps
  } = props;

  const Element = component ?? 'button';
  const styles = getClassNames({ variant, size, color }, className);
  // const child

  return (
    <Element {...otherProps} className={styles} ref={forwardedRef}>
      {children}
    </Element>
  );
}

export const Button = forwardRef(ButtonImpl) as OverridableComponent<ButtonTypeMap>;

interface ButtonLinkTypeMap {
  props: Props & NextLinkProps<unknown>;
  defaultComponent: 'a';
}

export type ButtonLinkProps = DefaultComponentProps<ButtonLinkTypeMap>;

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
    <NextLink {...otherProps} href={href} className={styles} ref={forwardedRef}>
      {children}
    </NextLink>
  );
});

ButtonLink.displayName = 'ButtonLink';
