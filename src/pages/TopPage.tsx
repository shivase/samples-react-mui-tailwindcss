import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const TopPageApp = () => {
  return (
    <Box className="mt-[50px] flex flex-col items-center">
      <Box className="mb-[50px]">
        <Box className="mb-[24px]">Material-UI and React Learn by building projects</Box>
        <Box className="flex flex-col gap-y-3">
          <Button variant="contained" color="primary" component={Link} to="/creative">
            Creative Agency
          </Button>
        </Box>
      </Box>
      <Box>
        <Box className="mb-2">Tailwind CSS From Scratch Learn By Building Projects</Box>
        <Box className="flex flex-col gap-y-3">
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/tailwindcss-from-scratch/sandbox">
            TailwindCSS Sandbox
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/tailwindcss-from-scratch/mini-projects">
            Mini Projects
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/tailwindcss-from-scratch/clipboard">
            Clipboard Website
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/tailwindcss-from-scratch/loopstudios">
            Loopstudios Website
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/tailwindcss-from-scratch/shortly">
            Shortly Website
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
