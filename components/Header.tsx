import Image from 'next/image';
import NextLink from 'next/link';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faCaretDown,
  faEarthAmericas,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dict } from 'locales/en';

import SvgLogo from 'shared/assets/Logo.svg';
import { LangMap } from 'shared/constants';
import { ButtonLink } from 'shared/ui/Button';
import { Container } from 'shared/ui/Container';
import { Link } from 'shared/ui/Link';
import { Stack } from 'shared/ui/Stack';

import { MobileNav } from './MobileNav';

type Props = {
  dict: Dict;
  lang: string;
};

export function Header({ dict, lang }: Props) {
  const contact = [
    {
      key: 'c-phone',
      icon: <FontAwesomeIcon fontSize="1rem" icon={faPhone} />,
      href: 'tel:+1 (404) 513-1683',
      text: '+1 (404) 513-1683',
    },
    {
      key: 'c-email',
      icon: <FontAwesomeIcon fontSize="1rem" icon={faEnvelope} />,
      href: 'mailto:aborgiainsurance@gmail.com',
      text: 'aborgiainsurance@gmail.com',
    },
    {
      key: 'c-insta',
      icon: <FontAwesomeIcon fontSize="1.2rem" icon={faInstagram} />,
      href: 'https://www.instagram.com/aborgia_insurance/',
      text: '@aborgia_insurance',
    },
  ];

  const nav = [
    {
      key: 'nav-about',
      href: '/#about-me',
      text: dict.header.aboutMe,
    },
    {
      key: 'nav-service',
      href: '/#services',
      text: dict.header.services,
    },
    {
      key: 'nav-news',
      href: '/#news-and-updates',
      text: dict.header.blog,
    },
  ];

  return (
    <header className="w-full shadow-md relative">
      <h1 className="sr-only">Arelys Borgia</h1>
      <Container
        disablePadding
        className="hidden md:flex bg-dark flex-row justify-between gap-4 py-1.5 px-3"
      >
        <div className="flex flex-row gap-4">
          <ButtonLink size="sm" color="light" variant="text" href="/">
            <FontAwesomeIcon icon={faEarthAmericas} />
            {LangMap[lang]}
            <FontAwesomeIcon icon={faCaretDown} />
          </ButtonLink>
        </div>
        <div className="flex flex-row md:gap-2 lg:gap-4">
          {contact.map(link => (
            <ButtonLink size="sm" color="light" variant="text" key={link.key} href={link.href}>
              {link.icon}
              {link.text}
            </ButtonLink>
          ))}
        </div>
      </Container>

      <div className="relative bg-primary z-40 text-white">
        <Container
          disablePadding
          component="nav"
          className="p-3 flex flex-row items-center justify-between gap-4"
        >
          <Stack direction="row" align="center" className="gap-4">
            <Link href="/" className="block w-[194px] h-[36px]">
              <SvgLogo className="fill-white" />
            </Link>
            {nav.map(link => (
              <ButtonLink
                className="hidden md:flex lg:text-base lg:py-2 lg:px-3 lg:gap-2.5"
                size="sm"
                color="light"
                variant="text"
                key={link.key}
                href={link.href}
              >
                {link.text}
              </ButtonLink>
            ))}
          </Stack>

          <ButtonLink
            color="light"
            size="sm"
            href="/"
            variant="outlined"
            className="hover:text-primary hidden md:flex lg:text-base lg:py-2 lg:px-3 lg:gap-2.5"
          >
            {dict.header.quote}
          </ButtonLink>
          <MobileNav dict={dict} contact={contact} nav={nav} />
        </Container>
      </div>
    </header>
  );
}
