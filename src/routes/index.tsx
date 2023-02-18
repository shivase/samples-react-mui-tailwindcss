import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { MainLayout } from '@/components/Layout';
import { NotFound, ErrorPage } from '@/features/misc';
//import { lazyImport } from '@/utils/lazyImport';
// <Route index element={<CalendarApp />}></Route>
//const { CalendarApp } = lazyImport(() => import('@/features/calendar'), 'CalendarApp');

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
      <Route path="*" element={<NotFound />}></Route>
    </Route>,
  ),
  { basename: import.meta.env.BASE_URL },
);
