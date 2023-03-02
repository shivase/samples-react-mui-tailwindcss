import { AuthContextProvider } from '../store/auth-context';

import { MainPage } from './MainPage';

export const LoginLogout = () => {
  return (
    <>
      <AuthContextProvider>
        <MainPage />
      </AuthContextProvider>
    </>
  );
};
