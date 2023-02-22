import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Button, Grid, InputBase, List, ListItem, Paper, Typography } from '@mui/material';

import behince from '../../assets/img/behince.svg';
import dribble from '../../assets/img/dribble.svg';
import medium from '../../assets/img/medium.svg';

const services = [
  'UX/UI Design',
  'Web Development',
  'SEO Optimization',
  'Product Design',
  'Logo Design',
  'Brand Design',
];

const links = [
  'About Agency',
  'Latest News & Blog',
  'Meet The Team',
  'Popular Services',
  'Testimonials',
  'Need A Career?',
];

const follows = [
  { title: 'dribble', img: dribble },
  { title: 'instagram', img: <InstagramIcon className="h-[16px] w-[16px] text-[#777FEB]" /> },
  { title: 'twitter', img: <TwitterIcon className="h-[16px] w-[16px] text-[#777FEB]" /> },
  { title: 'behince', img: behince },
  { title: 'facebook', img: <FacebookIcon className="h-[16px] w-[16px] text-[#777FEB]" /> },
  { title: 'medium', img: medium },
];

export const Footer = () => {
  return (
    <Box className="m-auto max-w-[1240px] py-[44px] px-[20px] text-left lg:py-[88px] lg:px-[20px]">
      <Grid
        container
        columns={{ xs: 4, sm: 8, md: 12 }}
        className="gap-y-[24px] border-y-[0.5px] border-y-[#777FEB] py-[44px] px-0 lg:py-[88px] lg:px-0">
        <Grid item xs={6} sm={4} md={3}>
          <Box>
            <Typography variant="h3" className="text-[24px] font-bold leading-[29px]">
              Service
            </Typography>
            <List>
              {services.map((item, index) => (
                <ListItem
                  key={index}
                  className="py-[12px] px-0 text-[16px] font-medium capitalize leading-[20px] text-[#686868]">
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Box>
            <Typography variant="h3" className="text-[24px] font-bold leading-[29px]">
              Links
            </Typography>
            <List>
              {links.map((item, index) => (
                <ListItem
                  key={index}
                  className="py-[12px] px-0 text-[16px] font-medium capitalize leading-[20px] text-[#686868]">
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Box>
            <Typography variant="h3" className="text-[24px] font-bold leading-[29px]">
              Follow
            </Typography>
            <List>
              {follows.map((item, index) => (
                <ListItem
                  key={index}
                  className="py-[12px] px-0 text-[16px] font-medium capitalize leading-[20px] text-[#686868]">
                  {typeof item.img === 'string' ? <Box component="img" src={item.img} /> : item.img}
                  <Box component="span" className="ml-[5px]">
                    {item.title}
                  </Box>
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={3} className="lg:flex lg:justify-end">
          <Box className="w-full max-w-[372px] lg:w-[372px]">
            <Typography
              variant="h3"
              className="mt-[24px] text-[24px] font-medium capitalize leading-[29px] text-[#000000]">
              Subscribe our Newsletter
            </Typography>
            <Typography
              variant="h3"
              className="mt-[24px] text-[16px] font-medium capitalize leading-[28px] text-[#000000]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur. psum dolor sit am
            </Typography>
            <Paper
              component="form"
              className="mt-[20px] flex items-center rounded-lg bg-[#f5f5f5] p-[8px] shadow-none">
              <InputBase
                placeholder="Email address"
                className="ml-1 flex-1 text-[20px] leading-[20px]"
              />
              <Button className="w-[107px] rounded-lg bg-[#777FEB] p-[12px] text-[16px] font-bold capitalize leading-[20px]">
                Sign up
              </Button>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
