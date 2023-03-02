import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '../components/Layout/Layout';
import { UserProfile } from '../components/Profile/UserProfile';
import { useAuth } from '../hooks/useAuth';
import { AuthPage } from '../pages/AuthPage';
import { HomePage } from '../pages/HomePage';

export const Authentication = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {!isLoggedIn && <Route path="auth" element={<AuthPage />} />}
        {isLoggedIn && <Route path="profile" element={<UserProfile />} />}
        <Route path="*" element={<Navigate to="." />} />;
      </Routes>
    </Layout>
  );
};
