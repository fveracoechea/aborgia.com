"use client";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import * as Popover from "@radix-ui/react-popover";
import * as Dialog from "@radix-ui/react-dialog";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonLink } from "design/Button";
import { Dict } from "locales/en";
import { createPortal } from "react-dom";
import { ReactNode, useEffect, useRef, useState, useCallback } from "react";
import {
  overlay,
  mobileContactLink,
  mobileNavLink,
  mobileNav,
} from "./classes.css";
import { Link } from "design/Link";
import { Text } from "design/Text";
import { Stack } from "design/Stack";
import { mediaQueries, theme } from "design/theme";
import { useMediaQuery } from "shared/hooks/useMediaQuery";
import { useEscapePress } from "shared/hooks/useEscapePress";

function lockBodyScroll() {
  document.body.style.position = "fixed";
  document.body.style.top = `0`;
}

function unlockBodyScroll() {
  document.body.style.position = "";
  document.body.style.top = "";
  window.scrollTo(0, 0);
}

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

type NavState = "idle" | "open" | "close";

export function MobileNav(props: Props) {
  const { dict } = props;
  const [state, setState] = useState<NavState>("idle");

  function handleToggleNav() {
    const nextState = state === "open" ? "close" : "open";
    if (nextState === "open") lockBodyScroll();
    else unlockBodyScroll();
    setState(nextState);
  }

  const onClose = useCallback(() => {
    if (state !== "close") {
      unlockBodyScroll();
      setState("close");
    }
  }, [state]);

  useEscapePress(onClose);

  useMediaQuery(mediaQueries.isMobile, (event) => {
    if (!event.matches) onClose();
  });

  return (
    <>
      <Button color="light" size="sm" onClick={handleToggleNav}>
        <VisuallyHidden.Root>
          {state !== "open" ? "Open" : "Close"} Navigation
        </VisuallyHidden.Root>
        <FontAwesomeIcon
          fontSize="1.2rem"
          color="white"
          icon={state === "open" ? faClose : faBars}
        />
      </Button>
      {createPortal(
        <>
          <div className={overlay} data-state={state} onClick={onClose} />
          <div className={mobileNav} data-state={state}>
            {props.nav.map((link) => (
              <Link
                key={link.key}
                color="light"
                href={link.href}
                className={mobileNavLink}
              >
                {link.text}
              </Link>
            ))}

            <Text component="span" className={mobileNavLink}>
              Contact
            </Text>

            {props.contact.map((link) => (
              <Link
                key={link.key}
                color="light"
                href={link.href}
                className={mobileContactLink}
              >
                {link.icon}
                {link.text}
              </Link>
            ))}

            <Stack
              direction="row"
              justify="end"
              style={{ padding: theme.spacing[4], marginTop: theme.spacing[8] }}
            >
              <ButtonLink variant="outlined" href="/#contact">
                {dict.header.quote}
              </ButtonLink>
            </Stack>
          </div>
        </>,
        document.body
      )}
    </>
  );
}
