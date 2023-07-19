import { useRef, useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import { Button, IconButton, Link, Menu, MenuItem } from "@mui/material";

type Props = {
  links: {
    id: string;
    href: string;
    text: any;
  }[];
};

export function MobileNav({ links }: Props) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <IconButton
        size="large"
        aria-label="Navigation menu"
        aria-controls="mobile-nav"
        aria-haspopup="true"
        onClick={onOpen}
        color="inherit"
        className="mobile"
        edge="start"
        ref={anchorRef}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="mobile-nav"
        className="mobile"
        anchorEl={anchorRef.current}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={open}
        onClose={onClose}
      >
        {links.map((link) => (
          <MenuItem key={link.id} onClick={onClose}>
            <Link key={link.id} href={link.href} onClick={onClose}>
              {link.text}
            </Link>
          </MenuItem>
        ))}
        <MenuItem>
          <Button
            color="inherit"
            href="tel:+1 (404) 513-1683"
            startIcon={<PhoneIcon />}
          >
            +1 (404) 513-1683
          </Button>
        </MenuItem>
      </Menu>
    </>
  );
}
