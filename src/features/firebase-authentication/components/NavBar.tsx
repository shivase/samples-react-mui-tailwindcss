import { Link } from 'react-router-dom';

import { useUser } from '../hooks/useUser';

import { LogoutButton } from './LogoutButton';

export const NavBar = () => {
  const { user } = useUser();

  return (
    <nav className="flex h-12 items-center justify-between border border-b-[2px] border-[#ccc] bg-blue-300">
      <div className="">
        <Link className="text-2xl font-bold" to="/firebase-authentication/basics">
          Auth Example
        </Link>
      </div>
      <div className="flex gap-8">
        {user ? (
          <div className="flex items-center">
            <p className="text-white">Logged in as {user.email}</p>
            <LogoutButton />
          </div>
        ) : (
          <>
            <Link to="login">
              <button>Log In</button>
            </Link>
            <Link to="create-account">
              <button>Create Account</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};
