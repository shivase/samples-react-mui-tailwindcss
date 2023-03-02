import { useAuth } from '../../store/auth-context';

const Navigation = () => {
  const ctx = useAuth();

  return (
    <nav>
      <ul className="m-0 flex list-none items-center p-0">
        {ctx.isLoggedIn && (
          <li className="m-0 ml-8">
            <a
              href="/"
              className="text-white no-underline hover:text-[#f3cafb] active:text-[#f3cafb]">
              Users
            </a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li className="m-0 ml-8">
            <a
              href="/"
              className="text-white no-underline hover:text-[#f3cafb] active:text-[#f3cafb]">
              Admin
            </a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li className="m-0 ml-8">
            <button
              type="button"
              onClick={ctx.onLogout}
              className="cursor-pointer rounded-3xl border-[1px] border-solid border-[#dd0db0] bg-[#dd0db0] py-2 px-6 text-white shadow-[0_2px_4px_rgba(0,0,0,0.26)] hover:text-[#f3cafb] hover:shadow-[0_2px_10px_rgba(0,0,0,0.26)] focus:outline-none active:text-[#f3cafb] active:shadow-[0_2px_10px_rgba(0,0,0,0.26)]">
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
