import { PropsWithChildren } from 'react';

import { faCheck, faWarning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

export type AlertProps = PropsWithChildren<{
  variant: 'success' | 'error';
  clasName?: string;
}>;

export function Alert(props: AlertProps) {
  const { variant, children, clasName } = props;

  const styles = clsx(
    'col-span-2 flex gap-4 px-4 py-2 rounded items-center border-2',
    variant === 'success' && 'bg-transparentPrimary border-primary text-primaryDark',
    variant === 'error' && 'bg-transparentError border-errorLight text-errorDark',
    clasName,
  );

  const icon = variant === 'error' ? faWarning : faCheck;

  return (
    <div className={styles}>
      <FontAwesomeIcon icon={icon} fontSize="1.6rem" color="currentColor" />
      {children}
    </div>
  );
}
