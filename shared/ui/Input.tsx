import { ForwardedRef, ReactNode, forwardRef } from 'react';

import clsx from 'clsx';

import { Label } from './Label';
import { Text } from './Text';
import { DefaultComponentProps } from './types';

type Props = {
  id: string;
  label: ReactNode;
  containerClassname?: string;
  error?: boolean | string | null;
};

interface InputTypeMap {
  props: Props;
  defaultComponent: 'input';
}

export type InputProps = DefaultComponentProps<InputTypeMap>;

function InputImpl(props: InputProps, forwardedRef: ForwardedRef<HTMLInputElement>) {
  const { children, className, id, label, required, containerClassname, error, ...otherProps } =
    props;

  const input = clsx(
    'font-serif text-dark outline-none py-2 px-4 rounded border transition ring-0',
    error
      ? 'ring-error border-error hover:border-errorDark focus:border-error'
      : 'border-greyDark ring-primary hover:border-dark focus:border-primary',
    '  focus:ring-1',
    className,
  );

  const wrapper = clsx('flex flex-col', containerClassname);
  const errorId = `${id}-error-hint`;
  if (error) otherProps['aria-describedby'] = errorId;

  return (
    <div className={wrapper}>
      <Label htmlFor={id} required={required} className="pl-1">
        {label}
      </Label>
      <input id={id} required={required} className={input} {...otherProps} ref={forwardedRef} />
      {error && typeof error === 'string' && (
        <Text id={errorId} variant="caption" className="!text-error pl-1">
          {error}
        </Text>
      )}
    </div>
  );
}

export const Input = forwardRef(InputImpl);
