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
    <Element {...otherProps} className={styles} ref={forwardedRef}>
      {children}
    </Element>
  );
}

export const Link = forwardRef(LinkImpl) as OverridableComponent<LinkTypeMap>;
