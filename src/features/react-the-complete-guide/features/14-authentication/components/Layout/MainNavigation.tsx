import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

export const MainNavigation = () => {
  const { isLoggedIn, logout } = useAuth();

  const logoutHandler = () => {
    logout();
  };

  return (
    <header className="fixed top-0 left-0 z-10 flex h-20 w-full items-center justify-between bg-[#38015c] py-0 px-[10%] shadow-[0_1px_4px_rgba(0,0,0,0.2)] ">
      <Link to="/">
        <div className="m-0 text-4xl text-white">React Auth</div>
      </Link>
      <nav>
        <ul className="m-0 flex list-none items-baseline p-0">
          {!isLoggedIn && (
            <li className="my-0 mx-4">
              <Link className="font-bold text-white no-underline hover:text-[#c291e2]" to="auth">
                Login
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li className="my-0 mx-4">
              <Link className="font-bold text-white no-underline hover:text-[#c291e2]" to="profile">
                Profile
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li className="my-0 mx-4">
              <button
                onClick={logoutHandler}
                className="cursor-pointer rounded-md border-[1px] border-solid border-white bg-transparent py-2 px-6 font-bold text-white hover:bg-[#c291e2] hover:text-[#38015c]">
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
