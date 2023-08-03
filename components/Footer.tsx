import Image from "next/image";
import { Dict } from "locales/en";
import { footer, divider, mobileStack } from "./classes.css";
import { Container } from "design/Container";
import { Grid } from "design/Grid";
import { Stack } from "design/Stack";
import { Link } from "design/Link";
import { Text } from "design/Text";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import Logo from "shared/assets/logo.png";

type Props = {
  dict: Dict;
};

export function Footer({ dict }: Props) {
  const year = new Date().getFullYear();
  const contact = [
    {
      key: "c-phone",
      icon: <FontAwesomeIcon fontSize="1.2rem" icon={faPhone} />,
      href: "tel:+1 (404) 513-1683",
      text: "+1 (404) 513-1683",
    },
    {
      key: "c-email",
      icon: <FontAwesomeIcon fontSize="1.2rem" icon={faEnvelope} />,
      href: "mailto:aborgiainsurance@gmail.com",
      text: "aborgiainsurance@gmail.com",
    },
    {
      key: "c-insta",
      icon: <FontAwesomeIcon fontSize="1.3rem" icon={faInstagram} />,
      href: "https://www.instagram.com/aborgia_insurance/",
      text: "@aborgia_insurance",
    },
  ];

  const menu = [
    {
      key: "m-about",
      href: "/#about-me",
      text: dict.header.aboutMe,
    },
    {
      key: "m-contact",
      href: "/#contact",
      text: dict.header.quote,
    },
    {
      key: "m-service",
      href: "/#services",
      text: dict.header.services,
    },
  ];

  const desktop = (
    <>
      <Stack gap="12" direction="row" className="desktop">
        <Stack gap="4">
          <Text fontWeight="bold">CONTACT</Text>
          {contact.map((link) => (
            <Stack key={link.key} align="center" direction="row" gap="2">
              {link.icon}
              <Link href={link.href}>{link.text}</Link>
            </Stack>
          ))}
        </Stack>
        <Stack gap="4">
          <Text fontWeight="bold">MENU</Text>
          {menu.map((link) => (
            <Link key={link.key} href={link.href}>
              {link.text}
            </Link>
          ))}
        </Stack>
      </Stack>

      <Stack gap="4" align="end" className="desktop">
        <Stack gap="2" align="end">
          <Image
            style={{ maxWidth: "290px", height: "auto" }}
            alt={dict.siteName}
            width={290}
            height={112}
            src={Logo}
          />
          <Text fontWeight="medium" className="text-right">
            {dict.footer.p1} {dict.footer.p2}
          </Text>
        </Stack>

        <div className={divider} />

        <Stack gap="2" direction="row" className={mobileStack}>
          <FontAwesomeIcon fontSize="1.2rem" icon={faCopyright} />
          <Text>{year} Copyright. All Rights Reserved.</Text>
        </Stack>
      </Stack>
    </>
  );

  const mobile = (
    <>
      <Stack gap="4" justify="center" align="center" className="mobile">
        <Text fontWeight="bold">CONTACT</Text>
        {contact.map((link) => (
          <Stack key={link.key} align="center" direction="row" gap="2">
            {link.icon}
            <Link href={link.href}>{link.text}</Link>
          </Stack>
        ))}
      </Stack>

      <Stack gap="4" justify="center" align="center" className="mobile">
        <Stack gap="2" justify="center" align="center">
          <Image
            style={{ maxWidth: "200px", height: "auto" }}
            alt={dict.siteName}
            width={200}
            src={Logo}
          />
          <Text fontWeight="medium" className="text-center">
            {dict.footer.p1} {dict.footer.p2}
          </Text>
        </Stack>

        <div className={divider} />

        <Stack gap="2" direction="row" className="text-center">
          <FontAwesomeIcon fontSize="1.2rem" icon={faCopyright} />
          <Text>{year} Copyright. All Rights Reserved.</Text>
        </Stack>
      </Stack>
    </>
  );

  return (
    <footer className={footer}>
      <Container maxWidth="lg">
        <Grid repeat="2x" gap="12">
          {/* DESKTOP */}
          {desktop}
          {/* MOBILE */}
          {mobile}
        </Grid>
      </Container>
    </footer>
  );
}
