import { ElementType, ForwardedRef, forwardRef } from 'react';

import clsx from 'clsx';

import { OverridableComponent, PolymorphicProps } from './types';

type Props = {
  direction?: 'column' | 'row';
  justify?: 'between' | 'start' | 'end' | 'center';
  align?: 'stretch' | 'start' | 'end' | 'center';
};

interface StackTypeMap {
  props: Props;
  defaultComponent: 'div';
}

export type StackProps<RootComponent extends ElementType = StackTypeMap['defaultComponent']> =
  PolymorphicProps<StackTypeMap, RootComponent>;

function StackImpl(props: StackProps, forwardedRef: ForwardedRef<Element>) {
  const {
    component,
    children,
    className,
    direction = 'column',
    justify = 'start',
    align,
    ...otherProps
  } = props;

  const Element = component ?? 'div';

  const styles = clsx(
    'flex',
    {
      'flex-col': direction === 'column',
      'flex-row': direction === 'row',
      'justify-start': justify === 'start',
      'justify-end': justify === 'end',
      'justify-center': justify === 'center',
      'justify-between': justify === 'between',
      'items-start': align === 'start',
      'items-end': align === 'end',
      'items-center': align === 'center',
      'items-stretch': align === 'stretch',
    },
    className,
  );

  return (
    <Element {...otherProps} className={styles} ref={forwardedRef}>
      {children}
    </Element>
  );
}

export const Stack = forwardRef(StackImpl) as OverridableComponent<StackTypeMap>;
