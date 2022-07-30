import React, { MouseEventHandler } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import MuiLink from "@mui/material/Link";
import Link from "next/link";
import Image from "next/image";
import usePage from "hooks/usePage";

const links = [
  {
    id: "link-service",
    href: "/#services",
    text: "Services",
  },
  {
    id: "link-contact",
    href: "/#contact",
    text: "Contact",
  },
  {
    id: "link-about",
    href: "/#about-me",
    text: "About Me",
  },
  {
    id: "link-blog",
    href: "/blog",
    text: "Blog",
  },
  // {
  //   id: "link-irs",
  //   href: "/irs",
  //   text: "IRS",
  // },
];

const ResponsiveAppBar = () => {
  const {
    data,
    global: { siteName },
  } = usePage();
  const [anchorElNav, setAnchorElNav] = React.useState<Element | null>(null);

  const handleOpenNavMenu: MouseEventHandler<HTMLButtonElement> = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  if (!data) return null;

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
            {siteName}
          </Typography>
          <Link href="/" passHref>
            <MuiLink sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
              <Image width={145} height={56} src="/logo.png" layout="fixed" />
            </MuiLink>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
            </Menu>
          </Box>
          <Link href="/" passHref>
            <MuiLink sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Image width={145} height={56} src="/logo.png" layout="fixed" />
            </MuiLink>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
          <Box sx={{ flexGrow: 0 }}>
            <MuiLink
              noWrap
              color="textSecondary"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              href="tel:+1 (404) 513-1683"
            >
              +1 (404) 513-1683
            </MuiLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
