'use client';

import { ReactNode, useCallback, useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useEscapePress } from 'shared/hooks/useEscapePress';
import { useMediaQuery } from 'shared/hooks/useMediaQuery';
import { Dict } from 'shared/locales/en';
import { Button } from 'shared/ui/Button';
import theme from 'shared/ui/theme';

let scrollY = '0px';

const MobileNavigation = dynamic(() => import('./MobileNavigation'), { ssr: false });

function lockBodyScroll() {
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}`;
}

function unlockBodyScroll() {
  scrollY = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo({
    top: parseInt(scrollY || '0') * -1,
    left: 0,
    behavior: 'instant',
  });
}

function onScroll() {
  scrollY = `${window.scrollY}px`;
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
  lang: string;
};

type NavState = 'idle' | 'open' | 'close';

export function MobileNavButton(props: Props) {
  const [state, setState] = useState<NavState>('idle');

  function handleToggleNav() {
    const nextState = state === 'open' ? 'close' : 'open';
    if (nextState === 'open') {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
    }
    setState(nextState);
  }

  const onClose = useCallback(() => {
    if (state !== 'close') {
      unlockBodyScroll();
      setState('close');
    }
  }, [state]);

  useEscapePress(onClose);

  const isMobile = useMediaQuery(`screen and (max-width: ${theme.screens.md})`, event => {
    if (!event.matches) onClose();
  });

  useEffect(() => {
    if (!isMobile) return;
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobile]);

  return (
    <>
      <Button
        color="primary"
        size="sm"
        aria-expanded={state === 'open' ? 'true' : 'false'}
        aria-controls="mobile-nav"
        className="md:hidden"
        onClick={handleToggleNav}
      >
        <span className="sr-only">{state !== 'open' ? 'Open' : 'Close'} Navigation</span>
        <FontAwesomeIcon
          fontSize="1.4rem"
          color="currentColor"
          icon={state === 'open' ? faClose : faBars}
        />
      </Button>
      <MobileNavigation {...props} state={state} onClose={onClose} />
    </>
  );
}
