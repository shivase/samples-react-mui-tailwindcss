import { Box } from '@mui/material';
import MuiButton from '@mui/material/Button';

import arrow from '../../assets/img/chevron-down.svg';

const pages = [
  { title: 'Demos', arrow: true },
  { title: 'Services', arrow: true },
  { title: 'Pages', arrow: true },
  { title: 'Portfolio', arrow: true },
  { title: 'Blog', arrow: true },
  { title: 'Contact', arrow: false },
];

export const Navbar = () => {
  return (
    <Box className="grow justify-end lg:flex">
      {pages.map((page) => (
        <MuiButton
          key={page.title}
          className="mr-[44px] flex px-0 font-montserrat text-[18px] font-medium capitalize leading-[22px] text-[#000000]">
          {page.title} {page.arrow && <img alt="arrow" src={arrow} className="ml-[5px]" />}
        </MuiButton>
      ))}
    </Box>
  );
};
