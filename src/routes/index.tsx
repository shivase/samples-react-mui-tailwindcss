import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { MainLayout } from '@/components/Layout';
import { ErrorPage, NotFound } from '@/features/misc';
import { lazyImport } from '@/utils/lazyImport';

const { TopPageApp } = lazyImport(() => import('@/pages/TopPage'), 'TopPageApp');

const { CreativeAgencyApp } = lazyImport(
  () => import('@/pages/CreativeAgency'),
  'CreativeAgencyApp',
);

const { TailwindFromScratch } = lazyImport(
  () => import('@/features/tailwind-from-scratch'),
  'TailwindFromScratch',
);
const { ReactTheCompleteGuide } = lazyImport(
  () => import('@/features/react-the-complete-guide'),
  'ReactTheCompleteGuide',
);

const { FirebaseAuthenticationBasics } = lazyImport(
  () => import('@/features/firebase-authentication'),
  'FirebaseAuthenticationBasics',
);

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
      <Route index element={<TopPageApp />}></Route>
      <Route path="creative" element={<CreativeAgencyApp />}></Route>
      <Route path="tailwindcss-from-scratch/*" element={<TailwindFromScratch />}></Route>
      <Route path="react-the-complete-guide/*" element={<ReactTheCompleteGuide />}></Route>
      <Route path="firebase-authentication/*" element={<FirebaseAuthenticationBasics />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>,
  ),
  { basename: import.meta.env.BASE_URL },
);
