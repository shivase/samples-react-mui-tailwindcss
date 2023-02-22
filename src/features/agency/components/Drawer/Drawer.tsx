import { Box, IconButton } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { FC } from 'react';

import close from '../../assets/img/close.svg';
import { Navbar } from '../Navbar';

type DrawerProps = {
  open: boolean;
  onClose: () => void;
};

export const Drawer: FC<DrawerProps> = ({ open, onClose }) => {
  return (
    <MuiDrawer anchor={'left'} open={open} onClose={onClose} className="w-full">
      <Box className="p-[2px]">
        <IconButton className="p-0">
          <img src={close} alt="close" />
        </IconButton>
      </Box>
      <Box className="p-[44px]">
        <Navbar />
      </Box>
    </MuiDrawer>
  );
};
