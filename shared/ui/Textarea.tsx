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

interface TextareaTypeMap {
  props: Props;
  defaultComponent: 'textarea';
}

export type TextareaProps = DefaultComponentProps<TextareaTypeMap>;

function TextareaImpl(props: TextareaProps, forwardedRef: ForwardedRef<HTMLTextAreaElement>) {
  const { children, className, id, label, required, containerClassname, error, ...otherProps } =
    props;

  const Textarea = clsx(
    'font-serif text-dark outline-none py-2 px-4 rounded border transition ring-0 resize-none h-28',
    error
      ? 'ring-error border-errorLight hover:border-error'
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
      <textarea
        id={id}
        required={required}
        className={Textarea}
        {...otherProps}
        ref={forwardedRef}
      />
      {error && typeof error === 'string' && (
        <Text id={errorId} variant="caption" className="!text-error pl-1">
          {error}
        </Text>
      )}
    </div>
  );
}

export const Textarea = forwardRef(TextareaImpl);
