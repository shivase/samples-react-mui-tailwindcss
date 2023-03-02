import { Link, NavLink } from 'react-router-dom';

export const MainNavigation = () => {
  return (
    <header className="fixed top-0 left-0 z-10 flex h-[4rem] w-full items-center justify-between bg-[#008080] py-0 px-[10%]">
      <div className="text-4xl text-white">
        <Link to="/">Great Quotes</Link>
      </div>
      <nav>
        <ul className="m-0 flex list-none p-0">
          <li className="ml-6 text-xl">
            <NavLink
              className="text-[#88dfdf] no-underline hover:text-[#e6fcfc] active:text-[#e6fcfc]"
              to="quotes">
              All Quotes
            </NavLink>
          </li>
          <li className="ml-6 text-xl">
            <NavLink
              className="text-[#88dfdf] no-underline hover:text-[#e6fcfc] active:text-[#e6fcfc]"
              to="new-quote">
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
