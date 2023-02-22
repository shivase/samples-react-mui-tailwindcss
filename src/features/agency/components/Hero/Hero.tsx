import { Box, Typography } from '@mui/material';

import photo_banner from '../../assets/img/photo_banner.png';
import { Button } from '../Button';

export const Hero = () => {
  return (
    <Box className="p-[20px] lg:flex lg:justify-center lg:py-[44px] lg:px-[20px]">
      <Box className="p-[20px] md:flex md:max-w-[1240px] md:items-center md:gap-[35px]">
        <Box className="text-left">
          <Typography variant="h2">
            The most
            <br /> Advanced Education
          </Typography>
          <Typography variant="body1" className="my-[25px] mx-0 max-w-[630px] md:mb-[44px]">
            Choose out of 2500+ mentors. Trusted by 250k users.
            <br /> Industry experts and top university professors Runs in a browser. Can be
            downloaded on desktop, tablet and mobiles. Extremely fast loading at 200ms. Updates work
            directory from the website. The most
          </Typography>
          <Button>Join Us</Button>
        </Box>
        <Box
          component="img"
          src={photo_banner}
          className="m-auto my-[44px] block w-full max-w-[509px]"></Box>
      </Box>
    </Box>
  );
};
