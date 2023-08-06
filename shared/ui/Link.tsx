import { ElementType, ForwardedRef, forwardRef } from 'react';

import NextLInk from 'next/link';

import clsx from 'clsx';

import { OverridableComponent, PolymorphicProps } from './types';

type Props = {
  underline?: 'always' | 'hover' | 'none';
  color?: 'primary' | 'dark' | 'inherit';
};

interface LinkTypeMap {
  props: Props;
  defaultComponent: 'a';
}

export type LinkProps<RootComponent extends ElementType = LinkTypeMap['defaultComponent']> =
  PolymorphicProps<LinkTypeMap, RootComponent>;

function LinkImpl(props: LinkProps, forwardedRef: ForwardedRef<Element>) {
  const {
    component,
    children,
    className,
    underline = 'hover',
    color = 'inherit',
    ...otherProps
  } = props;

  const Element = component ?? NextLInk;

  const styles = clsx(
    'font-serif font-normal cursor-pointer transition-colors underline-offset-2 outline-primaryLight outline-1',
    {
      'underline underline-offset-1': underline === 'always',
      'hover:underline underline-offset-1': underline === 'hover',
      'no-underline': underline === 'none',
      'text-inherit': color === 'inherit',
      'text-primary hover:text-primaryDark': color === 'primary',
      'text-dark': color === 'dark',
    },
    className,
  );

  return (
    <Element {...otherProps} className={styles} ref={forwardedRef}>
      {children}
    </Element>
  );
}

export const Link = forwardRef(LinkImpl) as OverridableComponent<LinkTypeMap>;
