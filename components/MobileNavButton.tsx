'use client';

import { ReactNode, useCallback, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import dynamic from 'next/dynamic';

import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useEscapePress } from 'shared/hooks/useEscapePress';
import { useMediaQuery } from 'shared/hooks/useMediaQuery';
import { Dict } from 'shared/locales/en';
import { Button } from 'shared/ui/Button';
import theme from 'shared/ui/theme';

const MobileNavigation = dynamic(() => import('./MobileNavigation'), { ssr: false });

function lockBodyScroll() {
  document.body.style.position = 'fixed';
  document.body.style.top = `0`;
}

function unlockBodyScroll() {
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, 0);
}

type NavLink = {
  key: string;
  icon?: ReactNode;
  href: string;
  text: string;
};

type Props = {
  dict: Dict;
  nav: NavLink[];
  contact: NavLink[];
};

type NavState = 'idle' | 'open' | 'close';

export function MobileNavButton(props: Props) {
  const [state, setState] = useState<NavState>('idle');
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  function handleToggleNav() {
    const nextState = state === 'open' ? 'close' : 'open';
    if (nextState === 'open') {
      lockBodyScroll();
      dialogRef.current?.show();
    } else {
      unlockBodyScroll();
      dialogRef.current?.close();
    }
    setState(nextState);
  }

  const onClose = useCallback(() => {
    if (state !== 'close') {
      unlockBodyScroll();
      dialogRef.current?.close();
      setState('close');
    }
  }, [state]);

  useEscapePress(onClose);

  useMediaQuery(`screen and (max-width: ${theme.screens.md})`, event => {
    if (!event.matches) onClose();
  });

  return (
    <>
      <Button color="light" size="sm" className="md:hidden" onClick={handleToggleNav}>
        <span className="sr-only">{state !== 'open' ? 'Open' : 'Close'} Navigation</span>
        <FontAwesomeIcon
          fontSize="1.4rem"
          color="white"
          icon={state === 'open' ? faClose : faBars}
        />
      </Button>
      <MobileNavigation {...props} state={state} onClose={onClose} dialogRef={dialogRef} />
    </>
  );
}
