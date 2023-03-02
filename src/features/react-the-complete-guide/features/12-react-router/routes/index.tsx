import { Navigate, Route, Routes } from 'react-router-dom';

import { MainHeader } from '../components/MainHeader';
import { ProductDetail } from '../components/ProductDetail';
import { Products } from '../components/Products';
import { Welcome } from '../components/Welcome';

export const ReactRouter = () => {
  return (
    <div className="prose fixed z-30 h-full w-full max-w-full bg-[#e0e9f5]">
      <MainHeader />
      <main className="mt-28 text-center">
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/react-the-complete-guide/react-router/welcome" />}
          />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
};
