import Image from 'next/image';

import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SvgLogo from 'shared/assets/Logo.svg';
import { Dict } from 'shared/locales/en';
import { Container } from 'shared/ui/Container';
import { Link } from 'shared/ui/Link';
import { Stack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';

type Props = {
  dict: Dict;
};

export function Footer({ dict }: Props) {
  const year = new Date().getFullYear();
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
      href: '/#about-me',
      text: dict.header.aboutMe,
    },
    {
      key: 'm-contact',
      href: '/#contact',
      text: dict.header.quote,
    },
    {
      key: 'm-service',
      href: '/#services',
      text: dict.header.services,
    },
  ];

  return (
    <footer className="text-grey pt-12 pb-12 bg-dark">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-row justify-center md:justify-start gap-8 lg:gap-20">
          <Stack className="gap-4 text-center md:text-left">
            <Text variant="h6" className="font-bold">
              CONTACT
            </Text>
            {contact.map(link => (
              <div key={link.key} className="flex flex-row justify-center md:justify-start gap-2">
                {link.icon}
                <Link underline="none" className="hover:text-greyLight" href={link.href}>
                  {link.text}
                </Link>
              </div>
            ))}
          </Stack>
          <Stack className="gap-4 hidden md:flex">
            <Text variant="h6" className="font-bold">
              MENU
            </Text>
            {menu.map(link => (
              <Link
                underline="none"
                className="hover:text-greyLight"
                key={link.key}
                href={link.href}
              >
                {link.text}
              </Link>
            ))}
          </Stack>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex flex-col items-center gap-2 md:items-end">
            <SvgLogo className="fill-current max-w-xs" />
            <Text className="text-center md:text-right font-medium">
              {dict.footer.p1} <br className="hidden xl:block" /> {dict.footer.p2}
            </Text>
          </div>

          <div className="hidden md:flex w-full border-solid border-b-[1px] border-grey" />

          <div className="flex flex-row gap-2 items-center">
            <FontAwesomeIcon fontSize="1.2rem" icon={faCopyright} />
            <Text>{year} Copyright. All Rights Reserved.</Text>
          </div>
        </div>
      </Container>
    </footer>
  );
}
