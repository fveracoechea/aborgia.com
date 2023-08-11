import { redirect } from 'next/navigation';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { StrapiLocale } from 'typings/strapi';

import { api } from 'shared/api';
import SvgLogo from 'shared/assets/Logo.svg';
import { Dict } from 'shared/locales/en';
import { ButtonLink } from 'shared/ui/Button';
import { Container } from 'shared/ui/Container';
import { Link } from 'shared/ui/Link';
import { Stack } from 'shared/ui/Stack';

import { LanguageSelector } from './LanguageSelector';
import { MobileNavButton } from './MobileNavButton';

type Props = {
  dict: Dict;
  lang: string;
};

export async function Header({ dict, lang }: Props) {
  const locales = (await api.get('/api/i18n/locales').json()) as StrapiLocale[];
  const currentLocale = locales.find(l => l.code === lang);

  if (!currentLocale) redirect('/');

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
      href: '/',
      text: dict.header.aboutMe,
    },
    {
      key: 'nav-service',
      href: '/',
      text: dict.header.services,
    },
    {
      key: 'nav-news',
      href: '/',
      text: dict.header.blog,
    },
  ];

  return (
    <header className="w-full shadow-md relative">
      <h1 className="sr-only">Arelys Borgia</h1>
      <Container
        disablePadding
        className="hidden md:flex bg-dark flex-row justify-between gap-4 py-1.5 px-3"
        component="nav"
        aria-label={dict.header.nav2}
      >
        <LanguageSelector locales={locales} currentLocale={currentLocale} />

        <ul className="flex flex-row md:gap-2 lg:gap-4">
          {contact.map(link => (
            <li key={link.key}>
              <ButtonLink size="sm" color="light" variant="text" href={link.href}>
                {link.icon}
                {link.text}
              </ButtonLink>
            </li>
          ))}
        </ul>
      </Container>

      <div className="relative bg-white z-40 text-primary">
        <Container
          disablePadding
          component="nav"
          aria-label={dict.header.nav1}
          className="p-3 flex flex-row items-center justify-between gap-4"
        >
          <Stack component="ul" direction="row" align="center" className="gap-4">
            <li>
              <Link underline="none" href="/" className="block w-60">
                <SvgLogo aria-label={dict.siteName} className="fill-current" />
              </Link>
            </li>
            {nav.map(link => (
              <li key={link.key} className="hidden md:flex">
                <ButtonLink
                  className={clsx('lg:text-base lg:py-2 lg:px-3 lg:gap-2.5')}
                  size="sm"
                  color="primary"
                  variant="text"
                  href={link.href}
                >
                  {link.text}
                </ButtonLink>
              </li>
            ))}
          </Stack>

          <ButtonLink
            color="primary"
            size="sm"
            href="/"
            variant="outlined"
            className="hidden uppercase md:flex lg:text-base lg:py-2 lg:px-3 lg:gap-2.5"
          >
            {dict.header.quote}
          </ButtonLink>

          <MobileNavButton dict={dict} contact={contact} nav={nav} />
        </Container>
      </div>
    </header>
  );
}
