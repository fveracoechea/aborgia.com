'use client';

import React from 'react';

import * as RLabel from '@radix-ui/react-label';

import { Text } from 'shared/ui/Text';

import { DefaultComponentProps } from './types';

type Props = {
  required?: boolean;
};

interface LabelTypeMap {
  props: Props;
  defaultComponent: 'label';
}

export type LabelProps = DefaultComponentProps<LabelTypeMap>;

export function Label(props: LabelProps) {
  const { required, children, ...labelProps } = props;
  return (
    <Text variant="label" className="cursor-pointer" component={RLabel.Root} {...labelProps}>
      {children}
      &nbsp;
      {required && <span className="text-error text-base leading-none select-none">*</span>}
    </Text>
  );
}
