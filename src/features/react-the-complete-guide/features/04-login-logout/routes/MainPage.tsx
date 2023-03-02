import React from 'react';

import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import MainHeader from '../components/MainHeader/MainHeader';
import { useAuth } from '../store/auth-context';

export const MainPage = () => {
  const ctx = useAuth();

  return (
    <>
      <MainHeader />
      <main className="mt-24">
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </>
  );
};
