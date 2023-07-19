import React, { MouseEventHandler, useRef, useState } from "react";
import Image from "next/image";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  Link,
  styled,
  Stack,
  IconButton,
  Box,
} from "@mui/material";

import Tooltip from "@mui/material/Tooltip";
import Instagram from "@mui/icons-material/Instagram";
import Phone from "@mui/icons-material/Phone";

import { LanguageSelector } from "components/LanguageSwitcher";
import { MobileNav } from "components/MobileNav";

const PhoneIcon = styled(Phone)`
  display: flex;
  margin-right: ${({ theme }) => theme.spacing(1)};
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-right: 0;
  }
`;

const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: theme.typography.fontWeightMedium,
  padding: theme.spacing(1),
  display: "block",
}));

const Navbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: theme.palette.text.secondary,

  ".responsive-wrapper": {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      gap: theme.spacing(0),
    },
  },

  ".desktop": {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  ".mobile": {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const StyledAppbar = styled(AppBar)(({ theme }) => ({
  backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.dark})`,
}));

const ResponsiveAppBar = () => {
  const { t } = useTranslation();

  const links = [
    {
      id: "link-about",
      href: "/#about-me",
      text: t("header.aboutMe"),
    },
    {
      id: "link-contact",
      href: "/#contact",
      text: t("header.contact"),
    },
    {
      id: "link-service",
      href: "/#services",
      text: t("header.services"),
    },
  ];

  return (
    <StyledAppbar position="sticky">
      <Container maxWidth="xl">
        <Navbar disableGutters>
          <Typography
            component="h1"
            noWrap
            color="textSecondary"
            visibility="hidden"
            position="absolute"
          >
            {t("siteName")}
          </Typography>

          <Box className="responsive-wrapper">
            <MobileNav links={links} />

            <Link href="/" display="block" width={145} height={26}>
              <Image
                alt={t("siteName")}
                src="/logov2.png"
                width={145}
                height={26}
              />
            </Link>

            {links.map((link) => (
              <NavLink
                className="desktop"
                key={link.id}
                href={link.href}
                underline="hover"
              >
                {link.text}
              </NavLink>
            ))}
          </Box>

          <Box className="responsive-wrapper">
            <Button
              className="desktop"
              color="inherit"
              href="tel:(404) 513-1683"
              startIcon={<PhoneIcon />}
            >
              (404) 513-1683
            </Button>
            <Tooltip arrow title={t("header.follow")}>
              <IconButton
                href="https://www.instagram.com/aborgia_insurance/"
                target="_blank"
                color="inherit"
              >
                <Instagram aria-label={t("header.follow")} />
              </IconButton>
            </Tooltip>

            <LanguageSelector />
          </Box>
        </Navbar>
      </Container>
    </StyledAppbar>
  );
};

export default ResponsiveAppBar;
