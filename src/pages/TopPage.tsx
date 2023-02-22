import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const TopPageApp = () => {
  return (
    <Box className="mt-[100px] flex justify-center">
      <Button variant="contained" color="primary" component={Link} to="/creative">
        CreativeAgency
      </Button>
    </Box>
  );
};
