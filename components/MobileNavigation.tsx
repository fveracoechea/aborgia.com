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
  lang: string;
  onClose: () => void;
  dict: Dict;
  nav: NavLink[];
  contact: NavLink[];
};

export default function MobileNavigation(props: Props) {
  const { state, onClose, dict, nav, contact, lang } = props;
  return createPortal(
    <>
      <div
        data-state={state}
        onClick={onClose}
        className={clsx([
          'fixed inset-0 z-30 bg-transparentDark',
          'hidden opacity-0 transition-opacity duration-300',
          'data-[state=open]:block data-[state=open]:opacity-1f00 md:hidden',
        ])}
      />
      <div
        data-state={state}
        className={clsx([
          'bg-dark text-white p-2 flex flex-col items-start w-[100vw]',
          'border-primaryDark border border-solid shadow-transparentPrimary05 shadow-2xl',
          'fixed z-30 top-[57px] left-0 right-0 transition-transform duration-300',
          'translate-y-[calc(-100%-57px)] data-[state=open]:translate-y-0 md:hidden',
        ])}
      >
        <nav className="w-full" role="navigation">
          <ul className="w-full" id="mobile-nav" aria-label="Mobile Navigaiton menu">
            {nav.map((link, i) => (
              <li key={link.key} className="border-greyDark border-b">
                <Link
                  href={link.href}
                  onClick={onClose}
                  autoFocus={i === 0}
                  className="flex text-grey p-3"
                >
                  {link.text}
                </Link>
              </li>
            ))}

            <Text component="li" className="flex text-grey p-3">
              Contact
            </Text>

            {contact.map(link => (
              <li key={link.key}>
                <Link href={link.href} className="flex items-center text-grey py-3 px-6 gap-3">
                  {link.icon}
                  {link.text}
                </Link>
              </li>
            ))}
            <li className="flex w-full justify-end p-4 mt-8">
              <ButtonLink
                variant="outlined"
                color="light"
                onClick={onClose}
                href={`/${lang}#quote-request`}
              >
                {dict.header.quote}
              </ButtonLink>
            </li>
          </ul>
        </nav>
      </div>
    </>,
    document.body,
  );
}
