'use client';

import { ReactNode, useCallback, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { Dict } from 'locales/en';
import { useEscapePress } from 'shared/hooks/useEscapePress';
import { useMediaQuery } from 'shared/hooks/useMediaQuery';
import { Button, ButtonLink } from 'shared/ui/Button';
import { Link } from 'shared/ui/Link';
import { Text } from 'shared/ui/Text';
import theme from 'shared/ui/theme';

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

export function MobileNav(props: Props) {
  const { dict } = props;
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
      {typeof window !== 'undefined'
        ? createPortal(
            <>
              <div
                data-state={state}
                onClick={onClose}
                className={clsx([
                  'fixed inset-0 z-30 bg-transparentDark',
                  'hidden opacity-0 transition-opacity duration-300',
                  'data-[state=open]:block data-[state=open]:opacity-100 md:hidden',
                ])}
              />
              <dialog
                ref={dialogRef}
                open={state === 'open'}
                data-state={state}
                className={clsx([
                  'bg-dark text-white p-2 flex flex-col items-start w-[100vw]',
                  'fixed z-30 top-[60px] left-0 right-0 transition-transform duration-300',
                  'translate-y-[calc(-100%-60px)] data-[state=open]:translate-y-0 md:hidden',
                ])}
              >
                <nav className="w-full">
                  <ul className="w-full" aria-label="Mobile Navigaiton menu">
                    {props.nav.map((link, i) => (
                      <li key={link.key} className="border-greyDark border-b">
                        <Link href={link.href} autoFocus={i === 0} className="flex text-grey p-3">
                          {link.text}
                        </Link>
                      </li>
                    ))}

                    <Text component="li" className="flex text-grey p-3">
                      Contact
                    </Text>

                    {props.contact.map(link => (
                      <li key={link.key}>
                        <Link
                          href={link.href}
                          className="flex items-center text-grey py-3 px-6 gap-3"
                        >
                          {link.icon}
                          {link.text}
                        </Link>
                      </li>
                    ))}
                    <li className="flex w-full justify-end p-4 mt-8">
                      <ButtonLink variant="outlined" color="light" href="/#contact">
                        {dict.header.quote}
                      </ButtonLink>
                    </li>
                  </ul>
                </nav>
              </dialog>
            </>,
            document.body,
          )
        : null}
    </>
  );
}
