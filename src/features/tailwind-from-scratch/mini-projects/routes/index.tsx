import { Route, Routes } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';

const { MiniProjectsApp } = lazyImport(() => import('../pages'), 'MiniProjectsApp');
const { EmailSubscribe } = lazyImport(() => import('../pages/email-subscribe'), 'EmailSubscribe');
const { PricingCards } = lazyImport(() => import('../pages/pricing-cards'), 'PricingCards');
const { ProductModal } = lazyImport(() => import('../pages/product-modal'), 'ProductModal');
const { ImageGallery } = lazyImport(() => import('../pages/image-gallery'), 'ImageGallery');
const { LoginModal } = lazyImport(() => import('../pages/login-modal'), 'LoginModal');

export const MiniProjects = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<MiniProjectsApp />} />
        <Route path="email-subscribe" element={<EmailSubscribe />} />
        <Route path="pricing-cards" element={<PricingCards />} />
        <Route path="product-modal" element={<ProductModal />} />
        <Route path="image-gallery" element={<ImageGallery />} />
        <Route path="login-modal" element={<LoginModal />} />
      </Route>
    </Routes>
  );
};
