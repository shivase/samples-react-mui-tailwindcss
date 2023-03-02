import { Link } from 'react-router-dom';

import { CartButton } from '../Cart/CartButton';

export const MainHeader = () => {
  return (
    <header className="fixed top-0 left-0 z-10 flex h-[4rem] w-full items-center justify-between bg-[#252424] py-0 px-[10%]">
      <h1 className="text-white">
        <Link to="/">ReduxCart</Link>
      </h1>
      <nav>
        <ul className="m-0 list-none p-0">
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};
