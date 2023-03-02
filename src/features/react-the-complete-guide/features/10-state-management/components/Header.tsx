import { Link } from 'react-router-dom';

import { Button } from '../../../components/Elements/Button/Button';
import { useAuthStore } from '../stores/auth';

export const Header = () => {
  const { isAuthenticated, logout } = useAuthStore();

  return (
    <header className="fixed left-0 top-0 flex h-[4rem] w-full items-center justify-between bg-[#3c0080] py-0 px-[10%] text-white">
      <h1>
        <Link to="/">Redux Auth</Link>
      </h1>
      <nav>
        <ul className="m-0 flex list-none items-center p-0">
          {isAuthenticated && (
            <>
              <li className="my-0 mx-4">
                <a
                  className="text-xl text-white no-underline hover:text-[#b864da] active:text-[#b864da]"
                  href="/">
                  My Products
                </a>
              </li>
              <li className="my-0 mx-4">
                <a
                  className="text-xl text-white no-underline hover:text-[#b864da] active:text-[#b864da]"
                  href="/">
                  My Sales
                </a>
              </li>
              <li className="my-0 mx-4">
                <Button
                  onClick={logout}
                  className="border-[1px] border-solid border-[#ffbb00] bg-[#ffbb00] py-2 px-6 text-xl text-[#2c2922] shadow-[0_1px_4px_rgba(0,0,0,0.2)] hover:border-[#ffa600] hover:bg-[#ffa600] active:border-[#ffa600] active:bg-[#ffa600]">
                  Logout
                </Button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
