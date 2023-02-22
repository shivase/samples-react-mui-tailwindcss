import { ThemeProvider } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';

import theme from '@/config/theme';
import { queryClient } from '@/lib/react-query';
import { AppRouter } from '@/routes';

export const AppProvider = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={AppRouter} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};
