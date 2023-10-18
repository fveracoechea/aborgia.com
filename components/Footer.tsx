import Image from 'next/image';
import { redirect } from 'next/navigation';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { fetchLocales, fetchPolicies } from 'shared/api';
import SvgLogo from 'shared/assets/Logo.svg';
import { Dict } from 'shared/locales/en';
import { Container } from 'shared/ui/Container';
import { Link } from 'shared/ui/Link';
import { Stack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';

import { LanguageSelector } from './LanguageSelector';

type Props = {
  dict: Dict;
  lang: string;
};

export async function Footer({ dict, lang }: Props) {
  const year = new Date().getFullYear();
  const { privacy, terms } = await fetchPolicies(lang);
  const { locales, currentLocale } = await fetchLocales(lang);

  if (!currentLocale) redirect('/');

  const contact = [
    {
      key: 'c-phone',
      icon: <FontAwesomeIcon fontSize="1.2rem" icon={faPhone} />,
      href: 'tel:+1 (404) 513-1683',
      text: '+1 (404) 513-1683',
    },
    {
      key: 'c-email',
      icon: <FontAwesomeIcon fontSize="1.2rem" icon={faEnvelope} />,
      href: 'mailto:aborgiainsurance@gmail.com',
      text: 'aborgiainsurance@gmail.com',
    },
    {
      key: 'c-insta',
      icon: <FontAwesomeIcon fontSize="1.3rem" icon={faInstagram} />,
      href: 'https://www.instagram.com/aborgia_insurance/',
      text: '@aborgia_insurance',
    },
  ];

  const menu = [
    {
      key: 'm-about',
      href: `/${lang}/#about-me`,
      text: dict.header.aboutMe,
    },
    {
      key: 'm-contact',
      href: `/${lang}/news`,
      text: dict.header.quote,
    },
    {
      key: 'm-service',
      href: `/${lang}/insurance`,
      text: dict.header.services,
    },
  ];

  return (
    <footer className="text-grey pt-12 pb-12 bg-dark">
      <Container className="flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col md:flex-row flex-wrap gap-10 flex-[2] xl:flex-[3] lg:flex-row justify-center md:justify-start">
          <Stack className="gap-4 text-center lg:text-left">
            <Text variant="h6" className="font-bold">
              CONTACT
            </Text>
            {contact.map(link => (
              <div
                key={link.key}
                className="flex flex-row justify-center text-center lg:text-left lg:justify-start gap-2"
              >
                {link.icon}
                <Link
                  underline="none"
                  className="hover:text-greyLight focus:underline underline-offset-4"
                  href={link.href}
                >
                  {link.text}
                </Link>
              </div>
            ))}
          </Stack>
          <Stack className="gap-4 text-center lg:text-left">
            <Text variant="h6" className="font-bold">
              MENU
            </Text>
            {menu.map(link => (
              <Link
                underline="none"
                className="hover:text-greyLight focus:underline underline-offset-4"
                key={link.key}
                href={link.href}
              >
                {link.text}
              </Link>
            ))}
          </Stack>
          <Stack className="gap-4 text-center lg:text-left">
            <Text variant="h6" className="font-bold">
              INFORMATION
            </Text>

            <Link
              underline="none"
              className="hover:text-greyLight focus:underline underline-offset-4"
              href={`/${lang}${privacy.data.attributes.link.url}`}
            >
              {privacy.data.attributes.link.text}
            </Link>
            <Link
              underline="none"
              className="hover:text-greyLight focus:underline underline-offset-4"
              href={`/${lang}${terms.data.attributes.link.url}`}
            >
              {terms.data.attributes.link.text}
            </Link>
            <LanguageSelector
              locales={locales}
              currentLocale={currentLocale}
              buttonProps={{
                color: 'grey',
                className:
                  'justify-center lg:justify-start focus:underline underline-offset-4 !p-0 !ring-0 !text-base',
              }}
            />
          </Stack>
        </div>

        <div className="flex flex-col items-center gap-6 flex-[2] lg:items-end">
          <div className="flex flex-col items-center gap-2 md:items-end">
            <SvgLogo className="fill-current max-w-sm" />
            <Text className="text-center md:text-right font-medium">{dict.footer}</Text>
          </div>

          <div className="flex w-full border-solid border-b-[1px] border-grey" />

          <div className="flex flex-row gap-2 items-center">
            <FontAwesomeIcon fontSize="1.2rem" icon={faCopyright} />
            <Text>{year} Copyright. All Rights Reserved.</Text>
          </div>
        </div>
      </Container>
    </footer>
  );
}
