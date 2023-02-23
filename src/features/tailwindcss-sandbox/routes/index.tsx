import { Route, Routes } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';

const { UtilityFirst } = lazyImport(() => import('../pages/01-utility-first'), 'UtilityFirst');
const { Colors } = lazyImport(() => import('../pages/02-colors'), 'Colors');
const { ContainerSpacing } = lazyImport(
  () => import('../pages/03-container-spacing'),
  'ContainerSpacing',
);
const { Typography } = lazyImport(() => import('../pages/04-typography'), 'Typography');
const { Sizing } = lazyImport(() => import('../pages/05-sizing'), 'Sizing');
const { LayoutPosition } = lazyImport(
  () => import('../pages/06-layout-position'),
  'LayoutPosition',
);
const { BackgroundsShadows } = lazyImport(
  () => import('../pages/07-backgrounds-shadows'),
  'BackgroundsShadows',
);
const { Borders } = lazyImport(() => import('../pages/08-borders'), 'Borders');
const { Filters } = lazyImport(() => import('../pages/09-filters'), 'Filters');
const { Interactivity } = lazyImport(() => import('../pages/10-interactivity'), 'Interactivity');
const { Breakpoints } = lazyImport(() => import('../pages/11-breakpoints'), 'Breakpoints');
const { Columns } = lazyImport(() => import('../pages/12-columns'), 'Columns');
const { Flex } = lazyImport(() => import('../pages/13-flex'), 'Flex');
const { Grid } = lazyImport(() => import('../pages/14-grid'), 'Grid');
const { TransformTransition } = lazyImport(
  () => import('../pages/15-transform-transition'),
  'TransformTransition',
);
const { Animation } = lazyImport(() => import('../pages/16-animation'), 'Animation');
const { Customization } = lazyImport(() => import('../pages/17-customization'), 'Customization');
const { DarkMode } = lazyImport(() => import('../pages/18-dark-mode'), 'DarkMode');

const { TailwindSandboxApp } = lazyImport(() => import('../pages'), 'TailwindSandboxApp');

export const TailwindcssSandbox = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<TailwindSandboxApp />} />
        <Route path="01-utility-first" element={<UtilityFirst />} />
        <Route path="02-colors" element={<Colors />} />
        <Route path="03-container-spacing" element={<ContainerSpacing />} />
        <Route path="04-typography" element={<Typography />} />
        <Route path="05-sizing" element={<Sizing />} />
        <Route path="06-layout-position" element={<LayoutPosition />} />
        <Route path="07-backgrounds-shadows" element={<BackgroundsShadows />} />
        <Route path="08-borders" element={<Borders />} />
        <Route path="09-filters" element={<Filters />} />
        <Route path="10-interactivity" element={<Interactivity />} />
        <Route path="11-breakpoints" element={<Breakpoints />} />
        <Route path="12-columns" element={<Columns />} />
        <Route path="13-flex" element={<Flex />} />
        <Route path="14-grid" element={<Grid />} />
        <Route path="15-transform-transition" element={<TransformTransition />} />
        <Route path="16-animation" element={<Animation />} />
        <Route path="17-customization" element={<Customization />} />
        <Route path="18-dark-mode" element={<DarkMode />} />
      </Route>
    </Routes>
  );
};
