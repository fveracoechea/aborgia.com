import { ElementType, ForwardedRef, ReactNode, forwardRef } from 'react';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import clsx from 'clsx';

import { OverridableComponent, PolymorphicProps } from './types';

type Props = {
  variant?: 'text' | 'outlined';
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

  return clsx(
    'flex flex-row items-center no-underline cursor-pointer font-serif',
    'transition-colors rounded border border-solid font-medium outline-1',
    {
      'text-sm py-1 px-2 gap-2': size === 'sm',
      'text-base py-2 px-3 gap-2.5': size === 'md',
      'text-lg py-4 px-4 gap-3': size === 'lg',
      // variant = TEXT
      'text-white border-0 hover:bg-transparentLight outline-transparentLight':
        color === 'light' && variant === 'text',
      'text-dar border-0k hover:bg-transparentDark outline-transparentDark':
        color === 'dark' && variant === 'text',
      'text-primary border-0 hover:bg-transparentPrimary outline-transparentPrimary':
        color === 'primary' && variant === 'text',
      // variant = OUTLINED
      'text-white bg-transparent outline-white border-white hover:bg-white hover:text-dark':
        color === 'light' && variant === 'outlined',
      'text-dark bg-transparent outline-dark border-dark hover:bg-white hover:text-white':
        color === 'dark' && variant === 'outlined',
      'text-primary bg-transparent outline-primary border-primary hover:bg-primary hover:text-white':
        color === 'primary' && variant === 'outlined',
    },
    externalClasses,
  );
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
