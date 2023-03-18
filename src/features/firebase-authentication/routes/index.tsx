import { initializeApp } from 'firebase/app';
import { Route, Routes } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';

import { AuthedRoute } from './AuthedRoute';
import { UnauthedRoute } from './UnauthedRoute';

const { MainLayout } = lazyImport(() => import('../pages/MainLayout'), 'MainLayout');
const { HomePage } = lazyImport(() => import('../pages/HomePage'), 'HomePage');
const { LoginPage } = lazyImport(() => import('../pages/LoginPage'), 'LoginPage');
const { CreateAccountPage } = lazyImport(
  () => import('../pages/CreateAccountPage'),
  'CreateAccountPage',
);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_AUTHENTICATION_FIREBASE_API_KEY,
  authDomain: 'study-react-samples.firebaseapp.com',
  projectId: 'study-react-samples',
  storageBucket: 'study-react-samples.appspot.com',
  messagingSenderId: '253531395617',
  appId: '1:253531395617:web:de950e0723a25659f33560',
};

initializeApp(firebaseConfig);

export const FirebaseAuthenticationBasics = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<AuthedRoute component={<HomePage />} />} />
        <Route path="login" element={<UnauthedRoute component={<LoginPage />} />} />
        <Route
          path="create-account"
          element={<UnauthedRoute component={<CreateAccountPage />} />}
        />
      </Route>
    </Routes>
  );
};
