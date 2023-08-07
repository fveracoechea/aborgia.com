'use client';

import { createPortal } from 'react-dom';

import clsx from 'clsx';

import { Dict } from 'shared/locales/en';
import { ButtonLink } from 'shared/ui/Button';
import { Link } from 'shared/ui/Link';
import { Text } from 'shared/ui/Text';

type NavLink = {
  key: string;
  icon?: React.ReactNode;
  href: string;
  text: string;
};

type Props = {
  state: 'idle' | 'open' | 'close';
  onClose: () => void;
  dialogRef: React.MutableRefObject<HTMLDialogElement | null>;
  dict: Dict;
  nav: NavLink[];
  contact: NavLink[];
};

export default function MobileNavigation(props: Props) {
  const { state, onClose, dialogRef, dict, nav, contact } = props;
  return createPortal(
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
                <Link href={link.href} className="flex items-center text-grey py-3 px-6 gap-3">
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
  );
}
