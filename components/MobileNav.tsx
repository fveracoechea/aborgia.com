"use client";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import * as Popover from "@radix-ui/react-popover";
import * as Dialog from "@radix-ui/react-dialog";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "design/Button";
import { Dict } from "locales/en";
import { ReactNode, useState } from "react";
import {
  drawer,
  overlay,
  drawerContactLink,
  drawerNavLink,
} from "./classes.css";
import { Link } from "design/Link";
import { Text } from "design/Text";
import { Stack } from "design/Stack";
import { theme } from "design/theme";

type NavLink = {
  key: string;
  icon?: ReactNode;
  href: string;
  text: string;
};

type Props = {
  dict: Dict;
  nav: NavLink[];
  contact: NavLink[];
};

export function MobileNav(props: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        color="light"
        size="sm"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <VisuallyHidden.Root>
          {open ? "Open" : "Close"} Navigation
        </VisuallyHidden.Root>
        <FontAwesomeIcon
          fontSize="1.2rem"
          color="white"
          icon={open ? faClose : faBars}
        />
      </Button>
      {open && (
        <div className={drawer}>
          {props.nav.map((link) => (
            <Link
              key={link.key}
              color="light"
              href={link.href}
              className={drawerNavLink}
            >
              {link.text}
            </Link>
          ))}

          <Text component="span" className={drawerNavLink}>
            Contact
          </Text>

          {props.contact.map((link) => (
            <Link
              key={link.key}
              color="light"
              href={link.href}
              className={drawerContactLink}
            >
              {link.icon}
              {link.text}
            </Link>
          ))}

          <Stack
            direction="row"
            justify="end"
            style={{ padding: theme.spacing[4] }}
          >
            <Link navLink="outlined" underline="never" href="/#contact">
              Request Free Quote
            </Link>
          </Stack>
        </div>
      )}
    </>
  );
}
