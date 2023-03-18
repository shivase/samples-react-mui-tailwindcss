import { Outlet } from 'react-router-dom';

import { NavBar } from '../components/NavBar';
import { useUser } from '../hooks/useUser';

export const MainLayout = () => {
  const { isLoading } = useUser();

  return (
    <>
      <NavBar />
      {isLoading ? <p>Loading...</p> : <Outlet />}
    </>
  );
};
