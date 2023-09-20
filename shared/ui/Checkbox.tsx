import React, { ForwardedRef, ReactNode, forwardRef } from 'react';

import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Label } from './Label';
import { DefaultComponentProps } from './types';

type Props = {
  label: ReactNode;
};

type CheckboxTypeMap = {
  props: Props;
  defaultComponent: 'input';
};

export type CheckboxProps = DefaultComponentProps<CheckboxTypeMap>;

function CheckboxImpl(props: CheckboxProps, forwardedRef: ForwardedRef<HTMLInputElement>) {
  const { required, checked, label, ...otherProps } = props;
  return (
    <Label required={required}>
      <input
        required={required}
        checked={checked}
        type="checkbox"
        className="appearance-none sr-only"
        ref={forwardedRef}
        {...otherProps}
      />
      <span className="text-primaryDark mr-2 checkbox-checked">
        <FontAwesomeIcon fontSize="1.2rem" icon={faSquareCheck} />
      </span>
      <span className="text-primaryDark mr-2 checkbox-not-checked">
        <FontAwesomeIcon fontSize="1.2rem" icon={faSquare} />
      </span>
      {label}
    </Label>
  );
}

export const Checkbox = forwardRef(CheckboxImpl);
