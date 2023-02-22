import { Box, Button, CardActions, CardContent, List, ListItem, Typography } from '@mui/material';
import MuiCard from '@mui/material/Card';
import { FC } from 'react';

import arrow_right from '../../assets/img/arrow-right.svg';

type CardProps = {
  title: string;
  image: string;
  list: string[];
};

export const Card: FC<CardProps> = ({ title, image, list }) => {
  return (
    <MuiCard className="box-border w-[353px] rounded-xl border-[0.5px] border-solid border-[#777FEB] p-[35px] text-left shadow-[0_4_4_rgba(0,0.0,0.2)] md:max-w-[353px]">
      <CardContent>
        <Box component="img" src={image} />
        <Typography variant="h3" className="text-[24px] font-bold capitalize">
          {title}
        </Typography>
        <List>
          {list.map((li) => (
            <ListItem
              key={li}
              className="py-[12px] px-0 font-montserrat text-[16px] font-medium capitalize leading-[20px] text-[#686868]">
              <Box component="img" src={arrow_right} />
              {li}
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions className="p-0">
        <Button className="font-montserrat text-xl font-medium capitalize leading-[20px] text-[#777FEB] underline">
          Read More
          <Box component="img" src={arrow_right} />
        </Button>
      </CardActions>
    </MuiCard>
  );
};
