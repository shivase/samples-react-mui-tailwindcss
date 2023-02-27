import { Route, Routes } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';

const { TailwindcssSandbox } = lazyImport(
  () => import('../01-tailwindcss-sandbox'),
  'TailwindcssSandbox',
);

const { MiniProjects } = lazyImport(() => import('../02-mini-projects'), 'MiniProjects');
const { Clipboard } = lazyImport(() => import('../03-clipboard'), 'Clipboard');
const { LoopStudios } = lazyImport(() => import('../04-loopstudios'), 'LoopStudios');
const { Shortly } = lazyImport(() => import('../05-shortly'), 'Shortly');

export const TailwindFromScratch = () => {
  return (
    <Routes>
      <Route path="sandbox/*" element={<TailwindcssSandbox />} />
      <Route path="mini-projects/*" element={<MiniProjects />} />
      <Route path="clipboard" element={<Clipboard />} />
      <Route path="loopstudios" element={<LoopStudios />} />
      <Route path="shortly" element={<Shortly />} />
    </Routes>
  );
};
