import { Outlet } from 'react-router-dom';

import { MainNavigation } from './MainNavigation';

export const Layout = () => {
  return (
    <div className="h-screen w-screen bg-[#e7f8f8]">
      <MainNavigation />
      <main className="my-12 mx-auto w-[90%] max-w-[40rem]">
        <Outlet />
      </main>
    </div>
  );
};
