import { CircularProgress, ThemeProvider } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import theme from '@/config/theme';
import { queryClient } from '@/lib/react-query';
import { AppRouter } from '@/routes';

export const AppProvider = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <CircularProgress />
        </div>
      }>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={AppRouter} />
        </QueryClientProvider>
      </ThemeProvider>
    </Suspense>
  );
};
