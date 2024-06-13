'use client';

import { ReactNode } from 'react';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as RS from '@radix-ui/react-select';
import clsx from 'clsx';

import { Button, ButtonProps } from './Button';
import { Label } from './Label';
import { Text } from './Text';
import theme from './theme';
import { DefaultComponentProps } from './types';

type Props = {
  variant?: 'text' | 'outlined';
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  prefix?: string;
  options: Array<{
    key: string;
    label: string;
    value: string;
  }>;
  icon?: IconProp;
  buttonProps?: ButtonProps;
  required?: boolean;
  label?: ReactNode;
  containerClassname?: string;
  error?: string | null;
};

type SelectTypeMap = {
  props: Props;
  defaultComponent: 'select';
};

export type SelectProps = DefaultComponentProps<SelectTypeMap>;

export function Select(props: SelectProps) {
  const {
    variant = 'text',
    value,
    placeholder,
    name,
    defaultValue,
    options,
    icon,
    onValueChange,
    prefix = '',
    required,
    label,
    id,
    buttonProps = {},
    containerClassname,
    error,
  } = props;

  let selectBtnProps: ButtonProps = {};

  if (variant === 'text')
    selectBtnProps = { size: 'sm', color: 'light', variant: 'text', ...buttonProps };

  if (variant === 'outlined')
    selectBtnProps = {
      variant: 'custom',
      size: 'md',
      className: clsx(
        'font-serif text-dark outline-none rounded border transition ring-0',
        'justify-between bg-transparent focus:ring-1',
        error && '!border-error !ring-error',
        'border-greyDark ring-primary hover:border-dark focus:border-primary',
      ),
      ...buttonProps,
    };

  const wrapper = clsx('flex flex-col', containerClassname);

  const size = selectBtnProps.size ?? 'sm';

  const isPlaceholder = !value && !defaultValue;

  const optionClassnames = clsx(
    size === 'sm' && 'text-sm',
    size === 'md' && 'text-base',
    size === 'lg' && 'text-lg',
    variant === 'outlined' && '!text-dark',
    'leading-none',
  );

  const errorId = `${id}-error-hint`;
  if (error) selectBtnProps['aria-describedby'] = errorId;

  return (
    <RS.Root
      required={required}
      value={value}
      name={name}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
    >
      <div className={wrapper}>
        {label && (
          <Label htmlFor={id} required={required}>
            {label}
          </Label>
        )}
        <RS.Trigger asChild>
          <Button
            {...selectBtnProps}
            className={clsx(selectBtnProps.className, isPlaceholder && 'btn-placeholder')}
          >
            {icon && <FontAwesomeIcon icon={icon} />}
            {prefix}
            <RS.Value id={id} placeholder={placeholder} />
            <RS.Icon>
              <FontAwesomeIcon fontSize="0.8rem" icon={faChevronDown} />
            </RS.Icon>
          </Button>
        </RS.Trigger>
        {error && typeof error === 'string' && (
          <Text id={errorId} variant="caption" className="!text-error pl-1">
            {error}
          </Text>
        )}
      </div>
      <RS.Portal>
        <RS.Content
          position="popper"
          sideOffset={4}
          className="overflow-hidden rounded bg-white border-2 border-grey p-2 z-50"
          style={{ minWidth: 'var(--radix-select-trigger-width)' }}
        >
          <RS.ScrollUpButton className="flex items-center justify-center cursor-default">
            <FontAwesomeIcon fontSize="1rem" icon={faChevronUp} />
          </RS.ScrollUpButton>
          <RS.Viewport>
            {options.map(opt => (
              <RS.Item
                key={opt.key}
                value={opt.value}
                className={clsx(
                  'py-1 px-3 outline-none relative select-none rounded',
                  'data-[highlighted]:bg-transparentPrimary',
                  'data-[state=checked]:font-semibold data-[state=checked]:text-primaryDark',
                )}
              >
                <RS.ItemText asChild>
                  <Text className={optionClassnames} component="span">
                    {opt.label}
                  </Text>
                </RS.ItemText>
              </RS.Item>
            ))}
          </RS.Viewport>
          <RS.ScrollDownButton className="flex items-center justify-center cursor-default">
            <FontAwesomeIcon fontSize="1rem" icon={faChevronDown} />
          </RS.ScrollDownButton>
        </RS.Content>
      </RS.Portal>
    </RS.Root>
  );
}
