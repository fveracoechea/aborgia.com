'use client';

import { ChangeEvent, useState } from 'react';

import { Input, InputProps } from './Input';
import { Overwrite } from './types';

function formatPhoneNumber(event: ChangeEvent<HTMLInputElement>) {
  // Filter non numbers
  const value = event.target.value.replace(/[^0-9\.]+/g, '');

  if (value.length < 4) {
    return value;
  }
  if (value.length < 7) {
    return `(${value.slice(0, 3)}) ${value.slice(3, 6)}`;
  }
  return `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
}

export type PhoneInputProps = Overwrite<
  InputProps,
  {
    onChange?: (event: ChangeEvent<HTMLInputElement>, formattedValue: string) => void;
  }
>;

export function PhoneInput(props: PhoneInputProps) {
  const [value, setValue] = useState('');

  function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    const formatted = formatPhoneNumber(event);
    if (props.onChange) {
      props.onChange(event, formatted);
    } else {
      setValue(formatted);
    }
  }

  return <Input {...props} onChange={onChangeHandler} value={value} type="tel" />;
}
