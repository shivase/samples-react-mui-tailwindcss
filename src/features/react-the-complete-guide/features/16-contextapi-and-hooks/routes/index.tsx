import { Route, Routes } from 'react-router-dom';

import { FavoritesPage } from '../containers/Favorites';
import { ProductsPage } from '../containers/Products';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
};
