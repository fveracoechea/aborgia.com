/* eslint-disable @next/next/no-img-element */
import React, { MouseEventHandler, useRef, useState } from "react";
import Link from "next/link";
import {
  useTranslation,
  LanguageSwitcher,
  useLanguageQuery,
} from "next-export-i18n";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import MuiLink from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import Instagram from "@mui/icons-material/Instagram";
import Phone from "@mui/icons-material/Phone";
import Translate from "@mui/icons-material/Translate";
import styled from "@mui/system/styled";

const PhoneIcon = styled(Phone)`
  display: flex;
  margin-right: ${({ theme }) => theme.spacing(1)};
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-right: 0;
  }
`;

const ResponsiveAppBar = () => {
  const [lang, setLang] = useState(false);
  const [query] = useLanguageQuery();
  const langRef = useRef(null);
  const { t } = useTranslation();
  const [anchorElNav, setAnchorElNav] = React.useState<Element | null>(null);

  const handleOpenNavMenu: MouseEventHandler<HTMLButtonElement> = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
    <AppBar
      position="fixed"
      sx={(t) => ({
        backgroundImage: `linear-gradient(to right, ${t.palette.primary.main}, ${t.palette.secondary.dark})`,
      })}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="h1"
            noWrap
            color="textSecondary"
            sx={{ display: "none" }}
          >
            {t("siteName")}
          </Typography>
          <Link href="/" passHref>
            <MuiLink sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
              <img
                alt={t("siteName")}
                src="/logov2.png"
                style={{ width: 145, height: "auto" }}
              />
            </MuiLink>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "text.secondary" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {links.map((link) => (
                <MenuItem key={link.id} onClick={handleCloseNavMenu}>
                  <Link key={link.id} href={link.href} passHref>
                    <MuiLink
                      onClick={handleCloseNavMenu}
                      sx={{
                        py: "4px",
                        color: (t) => t.palette.text.primary,
                        display: "block",
                      }}
                    >
                      {link.text}
                    </MuiLink>
                  </Link>
                </MenuItem>
              ))}
              <MenuItem>
                <Button
                  sx={{
                    color: (t) => t.palette.text.primary,
                  }}
                  color="primary"
                  href="tel:+1 (404) 513-1683"
                  startIcon={<PhoneIcon />}
                >
                  +1 (404) 513-1683
                </Button>
              </MenuItem>
            </Menu>
          </Box>
          <Link href="/" passHref>
            <MuiLink
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                alt={t("siteName")}
                style={{ width: "80%", height: "auto" }}
                width={145}
                height={56}
                src="/logov2.png"
              />
            </MuiLink>
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {links.map((link) => (
              <Link key={link.id} href={link.href} passHref>
                <MuiLink
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: (t) => t.palette.text.secondary,
                    display: "block",
                    padding: "0 1rem",
                  }}
                >
                  {link.text}
                </MuiLink>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <Tooltip arrow title={t("header.follow")}>
              <MuiLink
                href="https://www.instagram.com/aborgia_insurance/"
                target="_blank"
                sx={{
                  color: (t) => t.palette.text.secondary,
                  display: "flex",
                  alignItems: "center",
                  p: 1,
                }}
              >
                <Instagram aria-label={t("header.follow")} />
              </MuiLink>
            </Tooltip>
            <Tooltip arrow title={t("header.lang")}>
              <Button
                sx={{
                  color: (t) => t.palette.text.secondary,
                }}
                ref={langRef}
                onClick={() => setLang(true)}
                startIcon={<Translate />}
              >
                {query?.lang}
              </Button>
            </Tooltip>
            <Menu
              anchorEl={langRef.current}
              open={lang}
              onClose={() => setLang(false)}
            >
              <MenuItem onClick={() => setLang(false)}>
                <LanguageSwitcher lang="es">Español</LanguageSwitcher>
              </MenuItem>
              <MenuItem onClick={() => setLang(false)}>
                <LanguageSwitcher lang="en">English</LanguageSwitcher>
              </MenuItem>
              <MenuItem onClick={() => setLang(false)}>
                <LanguageSwitcher lang="pt">Português</LanguageSwitcher>
              </MenuItem>
            </Menu>
            <Button
              sx={{
                color: (t) => t.palette.text.secondary,
                display: { xs: "none", sm: "none", md: "flex" },
              }}
              color="primary"
              href="tel:+1 (404) 513-1683"
              startIcon={<PhoneIcon />}
            >
              +1 (404) 513-1683
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
