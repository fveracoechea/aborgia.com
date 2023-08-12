'use client';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as RS from '@radix-ui/react-select';
import clsx from 'clsx';

import { Button, ButtonProps } from './Button';
import { Text } from './Text';
import { DefaultComponentProps } from './types';

type Props = {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  options: Array<{
    key: string;
    label: string;
    value: string;
  }>;
  icon?: IconProp;
  buttonProps?: ButtonProps;
};

type SelectTypeMap = {
  props: Props;
  defaultComponent: 'select';
};

export type SelectProps = DefaultComponentProps<SelectTypeMap>;

export function Select(props: SelectProps) {
  const {
    value,
    placeholder,
    name,
    defaultValue,
    options,
    icon,
    onValueChange,
    buttonProps = {},
  } = props;

  const size = buttonProps.size ?? 'md';

  const sizeClasses = clsx(
    size === 'sm' && 'text-sm',
    size === 'md' && 'text-base',
    size === 'lg' && 'text-lg',
    'leading-none',
  );

  return (
    <RS.Root value={value} name={name} defaultValue={defaultValue} onValueChange={onValueChange}>
      <RS.Trigger asChild>
        <Button className="relative" {...buttonProps}>
          {icon && <FontAwesomeIcon icon={icon} />}
          <RS.Value placeholder={placeholder} />
          <RS.Icon>
            <FontAwesomeIcon fontSize="0.8rem" icon={faChevronDown} />
          </RS.Icon>
        </Button>
      </RS.Trigger>
      <RS.Portal>
        <RS.Content
          position="popper"
          className="overflow-hidden rounded bg-white border border-greyDark shadow-xl p-2 z-50"
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
                  <Text className={sizeClasses} component="span">
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
