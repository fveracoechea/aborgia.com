'use client';

import React from 'react';

import * as RLabel from '@radix-ui/react-label';
import clsx from 'clsx';

import { Text, TextProps } from 'shared/ui/Text';

import { DefaultComponentProps } from './types';

type Props = {
  required?: boolean;
} & TextProps<'label'>;

interface LabelTypeMap {
  props: Props;
  defaultComponent: 'label';
}

export type LabelProps = DefaultComponentProps<LabelTypeMap>;

export function Label(props: LabelProps) {
  const { required, variant = 'label', children, ...labelProps } = props;
  const classNames = clsx('cursor-pointer select-none', labelProps.className);
  return (
    <Text variant={variant} {...labelProps} className={classNames} component={RLabel.Root}>
      {children}
      &nbsp;
      {required && <span className="text-error text-base leading-none select-none">*</span>}
    </Text>
  );
}
