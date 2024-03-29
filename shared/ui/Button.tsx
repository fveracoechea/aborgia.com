import { ElementType, ForwardedRef, forwardRef } from 'react';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { DefaultComponentProps, OverridableComponent, PolymorphicProps } from './types';

type Props = {
  variant?: 'text' | 'outlined' | 'contained' | 'custom';
  size?: 'sm' | 'md' | 'lg';
  color?: 'light' | 'dark' | 'primary' | 'grey';
  loading?: boolean;
  disabled?: boolean;
};

interface ButtonTypeMap {
  props: Props;
  defaultComponent: 'button';
}

export type ButtonProps<RootComponent extends ElementType = ButtonTypeMap['defaultComponent']> =
  PolymorphicProps<ButtonTypeMap, RootComponent>;

function getClassNames(props: Props, externalClasses?: string) {
  const { variant = 'text', size = 'md', color = 'dark', disabled = false } = props;

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

  const disabledCss = clsx('bg-disabled text-white cursor-not-allowed', 'border-2 border-dark');

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
    variant === 'contained' && [
      color === 'light' && 'bg-disabled text-white hover:bg-dark',
      color === 'primary' && [
        'bg-primary text-white hover:bg-primaryDark',
        'ring-offset-white ring-offset-4 ring-primary focus:ring-3',
      ],
    ],
  );

  return clsx(
    defaultClasses,
    sizeClasses,
    disabled ? disabledCss : variantClasses,
    externalClasses,
  );
}

function ButtonImpl(props: ButtonProps, forwardedRef: ForwardedRef<Element>) {
  const { component, children, className, loading = false, ...otherProps } = props;

  const Element = component ?? 'button';
  const styles = getClassNames(otherProps, className);

  return (
    <Element {...otherProps} className={styles} ref={forwardedRef}>
      {loading ? (
        <>
          <FontAwesomeIcon className="animate-spin" fontSize="1.2rem" icon={faSpinner} />
          Loading
        </>
      ) : (
        children
      )}
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
  const { children, className, href, loading = false, ...otherProps } = props;

  const styles = getClassNames(otherProps, className);

  return (
    <NextLink {...otherProps} href={href} className={styles} ref={forwardedRef}>
      {loading ? (
        <>
          <FontAwesomeIcon className="animate-spin" fontSize="1.2rem" icon={faSpinner} />
          Loading
        </>
      ) : (
        children
      )}
    </NextLink>
  );
});

ButtonLink.displayName = 'ButtonLink';
