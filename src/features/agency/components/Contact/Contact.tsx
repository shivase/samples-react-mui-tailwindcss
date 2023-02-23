import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Typography, Box, TextareaAutosize, TextField } from '@mui/material';

import photo_send from '../../assets/img/photo_send.png';
import { Button } from '../Button';

export const Contact = () => {
  return (
    <Box className="py-[44px] px-[20px] text-left lg:flex lg:justify-center lg:px-[20px] lg:pt-[200px] lg:pb-[190px]">
      <Box className="lg:flex lg:max-w-[1240px] lg:items-center lg:gap-[120px]">
        <Box className="max-w-[613px] sm:m-auto">
          <Typography variant="h2">Mind! Contact Us</Typography>
          <Typography variant="body1" className="my-[24px] mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum, sagittis eget
            facilisi in in urna tristique risus. Tortor consectetur nulla pretium malesuada
            porttitor.
          </Typography>
          <Box className="md:flex md:items-center md:justify-between md:gap-[20px]">
            <Box className="mb-[24px] flex-1">
              <Box className="mt-[3px] text-[16px] font-medium leading-[20px] text-[#777FEB]">
                <MailOutlineIcon /> Email Us
              </Box>
              <Box className="mt-[3px] text-[16px] font-medium leading-[20px] text-[#000000]">
                support@gmail.com
              </Box>
            </Box>
            <Box className="mb-[24px] flex-1">
              <Box className="mt-[3px] text-[16px] font-medium leading-[20px] text-[#777FEB]">
                <LocalPhoneIcon /> Phone Us
              </Box>
              <Box className="mt-[3px] text-[16px] font-medium leading-[20px] text-[#000000]">
                +123 (345) 67 89
              </Box>
            </Box>
          </Box>
          <Box className="flex flex-col gap-[25px] lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-[20px]">
            <TextField
              placeholder="Full Name"
              className="w-[300px] placeholder:text-[20px] placeholder:leading-[20px]"
            />
            <TextField
              placeholder="Email Address"
              className="w-[300px] placeholder:text-[20px] placeholder:leading-[20px]"
            />
          </Box>
          <TextareaAutosize
            minRows={6}
            placeholder="write message"
            className="my-[24px] mx-0 box-border w-full rounded-xl border-[0.5px] border-solid border-[#777FEB] p-[12px] text-[20px] leading-[20px] outline-none"
          />
          <Button>Send Us Message</Button>
        </Box>
        <Box
          component="img"
          src={photo_send}
          className="my-[44px] mx-auto block w-full max-w-[509px]"></Box>
      </Box>
    </Box>
  );
};
