import { Container } from "design/Container";
import Image from "next/image";
import NextLink from "next/link";
import { Dict } from "locales/en";
import { header, navigation, toolbar, toolbarContent } from "./classes.css";
import { Stack } from "design/Stack";
import Logo from "shared/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faEnvelope,
  faPhone,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import clsx from "clsx";
import { MobileNav } from "./MobileNav";
import { theme } from "design/theme";
import { Button, ButtonLink } from "design/Button";
import { LangMap } from "shared/constants";

type Props = {
  dict: Dict;
  lang: string;
};

export function Header({ dict, lang }: Props) {
  const contact = [
    {
      key: "c-phone",
      icon: <FontAwesomeIcon fontSize="1rem" icon={faPhone} />,
      href: "tel:+1 (404) 513-1683",
      text: "+1 (404) 513-1683",
    },
    {
      key: "c-email",
      icon: <FontAwesomeIcon fontSize="1rem" icon={faEnvelope} />,
      href: "mailto:aborgiainsurance@gmail.com",
      text: "aborgiainsurance@gmail.com",
    },
    {
      key: "c-insta",
      icon: <FontAwesomeIcon fontSize="1.2rem" icon={faInstagram} />,
      href: "https://www.instagram.com/aborgia_insurance/",
      text: "@aborgia_insurance",
    },
  ];

  const nav = [
    {
      key: "nav-about",
      href: "/#about-me",
      text: dict.header.aboutMe,
    },
    {
      key: "nav-service",
      href: "/#services",
      text: dict.header.services,
    },
    {
      key: "nav-news",
      href: "/#news-and-updates",
      text: dict.header.blog,
    },
  ];

  const logo = (
    <NextLink
      href={"/" as any}
      style={{ display: "block", width: 194, height: 36 }}
    >
      <Image alt={dict.siteName} src={Logo} width={194} height={36} />
    </NextLink>
  );

  const desktop = (
    <>
      <div className={clsx(toolbar, "desktop")}>
        <Container maxWidth="lg" spacing="sm" className={toolbarContent}>
          <Stack direction="row" gap="4">
            <ButtonLink size="sm" href="/">
              <FontAwesomeIcon color="white" icon={faEarthAmericas} />
              {LangMap[lang]}
              <FontAwesomeIcon color="white" icon={faCaretDown} />
            </ButtonLink>
          </Stack>
          <Stack direction="row" gap="4">
            {contact.map((link) => (
              <ButtonLink size="sm" key={link.key} href={link.href}>
                {link.icon}
                {link.text}
              </ButtonLink>
            ))}
          </Stack>
        </Container>
      </div>

      <nav className={clsx(navigation, "desktop")}>
        <Container maxWidth="lg">
          <Stack direction="row" align="center" justify="spaceBetween">
            <Stack direction="row" align="center" gap="4">
              {logo}
              {nav.map((link) => (
                <ButtonLink size="md" key={link.key} href={link.href}>
                  {link.text}
                </ButtonLink>
              ))}
            </Stack>

            <ButtonLink color="light" size="md" href="" variant="outlined">
              {dict.header.quote}
            </ButtonLink>
          </Stack>
        </Container>
      </nav>
    </>
  );

  const mobile = (
    <>
      <nav className={clsx(navigation, "mobile")}>
        <Container>
          <Stack
            direction="row"
            align="center"
            justify="spaceBetween"
            style={{
              paddingLeft: theme.spacing[2],
              paddingRight: theme.spacing[2],
            }}
          >
            {logo}

            <MobileNav dict={dict} contact={contact} nav={nav} />
          </Stack>
        </Container>
      </nav>
    </>
  );

  return (
    <header className={header}>
      {desktop}
      {mobile}
    </header>
  );
}
