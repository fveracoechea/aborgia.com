import { ElementType, ForwardedRef, forwardRef } from 'react';

import clsx from 'clsx';

import { OverridableComponent, PolymorphicProps } from './types';

type Props = {
  disablePadding?: boolean;
};

interface ContainerTypeMap {
  props: Props;
  defaultComponent: 'div';
}

export type ContainerProps<
  RootComponent extends ElementType = ContainerTypeMap['defaultComponent'],
> = PolymorphicProps<ContainerTypeMap, RootComponent>;

function ContainerImpl(props: ContainerProps, forwardedRef: ForwardedRef<Element>) {
  const { component, children, className, disablePadding = false, ...otherProps } = props;

  const Element = component ?? 'div';
  const styles = clsx(
    'container my-0 mx-auto',
    !disablePadding && 'pl-4 pr-4 py-1.5 md:py-3 md:pr-5 lg:py-4',
    className,
  );

  return (
    <Element {...otherProps} className={styles} ref={forwardedRef}>
      {children}
    </Element>
  );
}

export const Container = forwardRef(ContainerImpl) as OverridableComponent<ContainerTypeMap>;
