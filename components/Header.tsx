import { redirect } from 'next/navigation';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { fetchLocales } from 'shared/api';
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
  title: string;
  lang: string;
};

// TODO fix "
export async function Header(props: Props) {
  const { dict, lang, title } = props;
  const { locales, currentLocale } = await fetchLocales(lang);

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
      href: `/${lang}/#about-me`,
      text: dict.header.aboutMe,
    },
    {
      key: 'nav-insurance',
      href: `/${lang}/insurance`,
      text: dict.header.services,
    },
    {
      key: 'nav-news',
      href: '/',
      text: dict.header.blog,
    },
  ];

  return (
    <header className="relative shadow-md w-[100vw] overflow-x-hidden z-40">
      <div className="bg-dark hidden md:block">
        <Container
          className="flex flex-row items-center justify-between gap-4 !py-1.5"
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
      </div>

      <div className="fixed top-0 left-0 w-full shadow-md md:shadow-none md:relative bg-white z-40 text-primary">
        <Container
          component="nav"
          aria-label={dict.header.nav1}
          className="py-3 flex flex-row items-center justify-stretch gap-4"
        >
          <h1>
            <Link
              underline="none"
              href="/"
              className={clsx(
                'block w-44 xl:w-60 transition-colors rounded-sm',
                'focus:text-primaryDark hover:text-primaryLight',
              )}
            >
              <SvgLogo aria-hidden="true" className="fill-current" />
              <span className="sr-only">{title}</span>
            </Link>
          </h1>
          <Stack component="ul" direction="row" align="center" className="gap-4">
            {nav.map(link => (
              <li key={link.key} className="hidden md:flex">
                <ButtonLink
                  className={clsx('xl:text-base xl:py-2 xl:px-3 xl:gap-2.5')}
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

          <div className="flex-grow" />

          <ButtonLink
            color="primary"
            size="sm"
            href={`/${lang}`}
            variant="outlined"
            className="hidden uppercase self-end md:flex xl:text-base xl:py-2 xl:px-3 xl:gap-2.5"
          >
            {dict.header.quote}
          </ButtonLink>

          <MobileNavButton dict={dict} contact={contact} nav={nav} />
        </Container>
      </div>
    </header>
  );
}
