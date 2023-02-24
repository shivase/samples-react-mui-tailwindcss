import { Route, Routes } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';

const { TailwindcssSandbox } = lazyImport(
  () => import('../01-tailwindcss-sandbox'),
  'TailwindcssSandbox',
);

const { MiniProjects } = lazyImport(() => import('../02-mini-projects'), 'MiniProjects');

export const TailwindFromScratch = () => {
  return (
    <Routes>
      <Route path="sandbox/*" element={<TailwindcssSandbox />} />
      <Route path="mini-projects/*" element={<MiniProjects />} />
    </Routes>
  );
};
