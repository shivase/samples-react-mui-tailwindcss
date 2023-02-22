import { AppBar, Box, Container, IconButton, Toolbar } from '@mui/material';
import { useState } from 'react';

import burger_menu from '../../assets/img/burger_menu.svg';
import logo_desk from '../../assets/img/logo_desc.svg';
import logo_mob from '../../assets/img/logo_mob.svg';
import { Drawer } from '../Drawer';
import { Navbar } from '../Navbar';

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <AppBar
      position="static"
      className="m-auto max-w-[1240px] bg-[#fff] px-0 shadow-none lg:border-b-[0.5px] lg:py-[20px]">
      <Container maxWidth="xl" className="lg:m-0 lg:p-0">
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
        <Toolbar disableGutters>
          <Box component="a" href="/" className="mr-2 hidden grow lg:flex">
            <img src={logo_desk} alt="logo_desk" />
          </Box>
          <Box className="grow sm:flex lg:hidden">
            <IconButton
              size="large"
              color="inherit"
              aria-label="menu"
              onClick={() => setOpenDrawer(true)}>
              <img src={burger_menu} alt="burger_menu" />
            </IconButton>
          </Box>
          <Box component="a" href="/" className="flex lg:hidden">
            <img src={logo_mob} alt="logo_mob" />
          </Box>
          <Box className="hidden grow lg:flex">
            <Navbar />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
