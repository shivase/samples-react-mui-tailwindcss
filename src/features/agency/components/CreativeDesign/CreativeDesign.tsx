import { Stack, Typography, Box } from '@mui/material';

import development_svg from '../../assets/img/code-coding-development-programming-web-webpage-svgrepo-com.svg';
import strategy_svg from '../../assets/img/strategy.svg';
import design_svg from '../../assets/img/vector-art-and-design-svgrepo-com.svg';
import { Card } from '../Card';

const list = ['Product Management', 'Mpv Definition', 'Product Strategy'];

const data = [
  { title: 'strategy', image: strategy_svg, list: list },
  { title: 'product design', image: design_svg, list: list },
  { title: 'development', image: development_svg, list: list },
];

export const CreativeDesign = () => {
  return (
    <Box className="px-[20px] pt-[60px] pb-[88px] text-center md:flex md:justify-center md:py-[192px] md:px-[20px]">
      <Box className="w-full md:max-w-[1240px] md:items-center md:gap-[35px]">
        <Typography variant="h2">Creative Design Solutions</Typography>
        <Typography variant="body1" className="my-[25px] mx-0 capitalize">
          Professional Design Agency To Provide Solutions
        </Typography>
        <Stack className="mt-[44px] flex w-full flex-initial flex-row flex-wrap justify-center gap-[44px] lg:gap-[15px]">
          {data.map((d, index) => (
            <Card key={index} title={d.title} image={d.image} list={d.list} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
