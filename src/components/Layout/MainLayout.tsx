import HomeIcon from '@mui/icons-material/Home';
import { Link, Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <>
      <div className="absolute top-4 right-4 z-50 h-7 w-7 rounded-full bg-red-500 text-center">
        <Link to="/">
          <HomeIcon className="text-white" />
        </Link>
      </div>
      <Outlet />
    </>
  );
};
