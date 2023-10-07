import React, { ForwardedRef, ReactNode, forwardRef } from 'react';

import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { Label } from './Label';
import { Text } from './Text';
import theme from './theme';
import { DefaultComponentProps } from './types';

type Props = {
  label: ReactNode;
  iconSize?: keyof (typeof theme)['spacing'];
  error?: string | null;
};

type CheckboxTypeMap = {
  props: Props;
  defaultComponent: 'input';
};

export type CheckboxProps = DefaultComponentProps<CheckboxTypeMap>;

function CheckboxImpl(props: CheckboxProps, forwardedRef: ForwardedRef<HTMLInputElement>) {
  const { required, checked, label, iconSize = '6', error, ...otherProps } = props;
  const checkIconSize = '1.6rem';

  const iconStyles = clsx(error ? 'text-error' : 'text-primaryDark');

  return (
    <div className="flex flex-col gap-0">
      <Label
        required={required}
        variant="body1"
        className={clsx(
          'flex gap-2 items-center transition-colors rounded outline-offset-4 outline-grey',
          'focus-within:outline-dashed hover:text-primaryDark',
        )}
      >
        <input
          required={required}
          checked={checked}
          type="checkbox"
          className="appearance-none sr-only peer"
          ref={forwardedRef}
          {...otherProps}
        />
        <span
          style={{ height: checkIconSize }}
          className={clsx(iconStyles, 'hidden peer-checked:inline-block')}
        >
          <FontAwesomeIcon fontSize={checkIconSize} icon={faSquareCheck} />
        </span>
        <span
          style={{ height: checkIconSize }}
          className={clsx(iconStyles, 'inline-block peer-checked:hidden')}
        >
          <FontAwesomeIcon fontSize={checkIconSize} icon={faSquare} />
        </span>
        {label}
      </Label>
      {error && typeof error === 'string' && (
        <Text variant="caption" className="!text-error pl-1">
          {error}
        </Text>
      )}
    </div>
  );
}

export const Checkbox = forwardRef(CheckboxImpl);
