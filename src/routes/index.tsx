import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { MainLayout } from '@/components/Layout';
import { NotFound, ErrorPage } from '@/features/misc';
import { lazyImport } from '@/utils/lazyImport';

const { TopPageApp } = lazyImport(() => import('@/pages/TopPage'), 'TopPageApp');

const { CreativeAgencyApp } = lazyImport(
  () => import('@/pages/CreativeAgency'),
  'CreativeAgencyApp',
);

const { TailwindcssSandbox } = lazyImport(
  () => import('@/features/tailwindcss-sandbox'),
  'TailwindcssSandbox',
);

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
      <Route index element={<TopPageApp />}></Route>
      <Route path="creative" element={<CreativeAgencyApp />}></Route>
      <Route path="tailwindcss-sandbox/*" element={<TailwindcssSandbox />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>,
  ),
  { basename: import.meta.env.BASE_URL },
);
