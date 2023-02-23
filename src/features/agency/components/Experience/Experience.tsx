import { Typography, Box, Link, Grid } from '@mui/material';

import dashboard_photo from '../../assets/img/dashborad-photo.svg';
import illustration_page_photo from '../../assets/img/ilustraton-page-photo.svg';
import landing_page_photo from '../../assets/img/landing-page-photo.svg';

const buttonTitle = ['Show All', 'Design', 'Branding', 'Development', 'Seo', 'UX/UI Design'];

export const Experience = () => {
  return (
    <Box className="flex justify-center bg-[#f5f5f5] py-[44px] px-[20px] text-center sm:text-left lg:py-[88px] lg:px-[20px]">
      <Box className="max-w-[1240px]">
        <Typography variant="h2">Professional Experience</Typography>
        <Typography variant="body1" className="my-[25px] mx-0 capitalize">
          Professional Design Agency To Provide Solutions
        </Typography>
        <Box className="flex max-w-[240px] grow flex-wrap sm:max-w-full sm:gap-[44px]">
          {buttonTitle.map((button, index) => (
            <Link
              key={index}
              className="block font-montserrat text-[14px] font-medium capitalize leading-[17px] text-[#000000] no-underline md:text-[24px] md:leading-[29px]">
              {button}
            </Link>
          ))}
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          className="justify-center">
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box
                component="img"
                src={dashboard_photo}
                className="mt-[24px] w-full max-w-[402px] sm:mt-[44px]"
              />
              <Typography
                variant="body1"
                className="my-[12px] mx-auto max-w-[402px] text-left text-[14px] leading-[17px] lg:text-[24px] lg:leading-[29px]">
                Dashboard Design
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box
                component="img"
                src={landing_page_photo}
                className="mt-[24px] w-full max-w-[402px] sm:mt-[44px]"
              />
              <Typography
                variant="body1"
                className="my-[12px] mx-auto max-w-[402px] text-left text-[14px] leading-[17px] lg:text-[24px] lg:leading-[29px]">
                Landing Pages
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Box>
              <Box
                component="img"
                src={illustration_page_photo}
                className="mt-[24px] w-full max-w-[402px] sm:mt-[44px]"
              />
              <Typography
                variant="body1"
                className="my-[12px] mx-auto max-w-[402px] text-left text-[14px] leading-[17px] lg:text-[24px] lg:leading-[29px]">
                Illustration Design
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
