import { Container } from "design/Container";
import Image from "next/image";
import NextLink from "next/link";
import { Dict } from "locales/en";
import { header, navigation, toolbar, toolbarContent } from "./classes.css";
import { Stack } from "design/Stack";
import { Link } from "design/Link";
import Logo from "shared/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import clsx from "clsx";
import { MobileNav } from "./MobileNav";
import { theme } from "design/theme";

type Props = {
  dict: Dict;
};

export function Header({ dict }: Props) {
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
      text: "News & Updates",
    },
  ];

  const desktop = (
    <>
      <div className={clsx(toolbar, "desktop")}>
        <Container variant="lg" className={toolbarContent}>
          <Stack direction="row" gap="4">
            <Stack
              align="center"
              component={Link}
              navLink="light"
              underline="never"
              href="/"
              direction="row"
              gap="2"
            >
              <FontAwesomeIcon color="white" icon={faEarthAmericas} />
              English
            </Stack>
          </Stack>
          <Stack direction="row" gap="4">
            {contact.map((c) => (
              <Stack
                component={Link}
                navLink="light"
                align="center"
                underline="never"
                key={c.key}
                href={c.href}
                direction="row"
                gap="2"
              >
                {c.icon}
                {c.text}
              </Stack>
            ))}
          </Stack>
        </Container>
      </div>

      <nav className={clsx(navigation, "desktop")}>
        <Container variant="lg">
          <Stack direction="row" align="center" justify="spaceBetween">
            <Stack direction="row" align="center" gap="4">
              <NextLink
                href={"/" as any}
                style={{ display: "block", width: 194, height: 36 }}
              >
                <Image alt={dict.siteName} src={Logo} width={194} height={36} />
              </NextLink>
              {nav.map((link) => (
                <Link
                  navLink="dark"
                  underline="never"
                  key={link.key}
                  href={link.href}
                >
                  {link.text}
                </Link>
              ))}
            </Stack>

            <Stack direction="row" align="center" gap="4">
              <Link navLink="outlined" underline="never" href="/#contact">
                Request Free Quote
              </Link>
            </Stack>
          </Stack>
        </Container>
      </nav>
    </>
  );

  const mobile = (
    <>
      <nav className={clsx(navigation, "mobile")}>
        <Container variant="lg">
          <Stack
            direction="row"
            align="center"
            justify="spaceBetween"
            style={{
              paddingLeft: theme.spacing[2],
              paddingRight: theme.spacing[2],
            }}
          >
            <NextLink
              href={"/" as any}
              style={{
                display: "block",
                width: 121,
                height: 23,
              }}
            >
              <Image alt={dict.siteName} src={Logo} width={121} height={23} />
            </NextLink>

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
