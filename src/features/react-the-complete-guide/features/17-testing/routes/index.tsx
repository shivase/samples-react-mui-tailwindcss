import { Route, Routes } from 'react-router-dom';

import { AppPage } from '../pages/AppPage';

export const Testing = () => {
  return (
    <Routes>
      <Route path="/" element={<AppPage />} />
    </Routes>
  );
};
