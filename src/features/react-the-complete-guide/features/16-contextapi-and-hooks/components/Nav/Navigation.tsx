import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <header className="fixed left-0 top-0 flex h-[3.5rem]  w-full items-center justify-center bg-[#ff2058]">
      <nav className="flex h-full items-center justify-center">
        <ul className="m-0 flex list-none items-center justify-center p-0">
          <li className="my-0 mx-8 p-0">
            <NavLink
              className="font-bold text-white hover:text-[#560061] active:text-[#560061]"
              to="./">
              All Products
            </NavLink>
          </li>
          <li className="my-0 mx-8 p-0">
            <NavLink
              className="font-bold text-white hover:text-[#560061] active:text-[#560061]"
              to="./favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
