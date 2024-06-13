import { ForwardedRef, ReactNode, forwardRef } from 'react';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import clsx from 'clsx';

import { DefaultComponentProps, OverridableComponent, PolymorphicProps } from './types';

type Props = {
  underline?: 'always' | 'hover' | 'none';
  color?: 'primary' | 'dark' | 'inherit';
} & NextLinkProps;

interface LinkTypeMap {
  props: Props;
  defaultComponent: 'a';
}

export type LinkProps = DefaultComponentProps<LinkTypeMap>;

function LinkImpl(props: LinkProps, forwardedRef: ForwardedRef<HTMLAnchorElement>) {
  const { children, className, underline = 'hover', color = 'inherit', ...otherProps } = props;

  const baseClasses = clsx(
    'font-serif font-normal leading-normal cursor-pointer transition outline-none',
  );

  const colorClasses = clsx(
    color === 'inherit' && 'text-inherit',
    color === 'primary' && 'text-primary',
    color === 'dark' && 'text-dark',
  );

  const underlineClasses = clsx(
    underline === 'always' && 'border-b-current border-b hover:border-b-2',
    underline === 'hover' && 'border-b-transparent border-b-2 hover:border-b-current',
    underline === 'none' && 'border-none',
  );

  const styles = clsx(baseClasses, colorClasses, underlineClasses, className);

  return (
    <NextLink {...otherProps} className={styles} ref={forwardedRef}>
      {children}
    </NextLink>
  );
}

export const Link = forwardRef(LinkImpl) as OverridableComponent<LinkTypeMap>;
