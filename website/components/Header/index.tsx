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
import usePage from "hooks/usePage";

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
          <Link href="/" passHref>
            <Typography
              variant="h6"
              noWrap
              color="textPrimary"
              component={MuiLink}
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              {siteName}
            </Typography>
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
              {data?.renderNavigation.map((page) => (
                <MenuItem key={page?.id!} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page?.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            {siteName}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {data?.renderNavigation.map((page) => (
              <Link key={page!.id} href={page?.path!} passHref>
                <MuiLink
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    padding: "0 1rem",
                  }}
                >
                  {page!.title}
                </MuiLink>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Typography
              variant="h6"
              noWrap
              color="textPrimary"
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              +1 (404) 513-1683
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
