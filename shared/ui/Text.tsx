import { ElementType, ForwardedRef, ReactNode, forwardRef } from 'react';

import clsx from 'clsx';

import { OverridableComponent, PolymorphicProps } from './types';

const ComponentVariantMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  label: 'label',
  body1: 'p',
  body2: 'p',
  display: 'span',
  caption: 'span',
  subtitle1: 'span',
  subtitle2: 'span',
  custom: 'span',
} as const;

type Props = {
  variant?: keyof typeof ComponentVariantMap;
};

interface TextTypeMap {
  props: Props;
  defaultComponent: 'p';
}

export type TextProps<RootComponent extends ElementType = 'p'> = PolymorphicProps<
  TextTypeMap,
  RootComponent
>;

function TextImpl(props: TextProps, forwardedRef: ForwardedRef<Element>) {
  const { component, variant = 'body1', children, className, ...otherProps } = props;

  const Element = component ?? ComponentVariantMap[variant];

  const styles = clsx(
    'text-inherit font-serif',
    {
      'text-6xl leading-normal': variant === 'display',
      'text-5xl leading-normal': variant === 'h1',
      'text-4xl leading-normal': variant === 'h2',
      'text-3xl leading-relaxed': variant === 'h3',
      'text-2xl leading-relaxed': variant === 'h4',
      'text-xl leading-relaxed': variant === 'h5',
      'text-base leading-relaxed': variant === 'h6',
      'text-base leading-loose': variant === 'subtitle1',
      'text-sm leading-normal': variant === 'subtitle2',
      'text-base leading-normal': variant === 'body1',
      'text-sm leading-loose': variant === 'body2',
      'text-sx leading-normal': variant === 'caption',
      'text-sm leading-loose font-medium': variant === 'label',
    },
    className,
  );

  return (
    <Element {...otherProps} ref={forwardedRef} className={styles}>
      {children}
    </Element>
  );
}

export const Text = forwardRef(TextImpl) as OverridableComponent<TextTypeMap>;
