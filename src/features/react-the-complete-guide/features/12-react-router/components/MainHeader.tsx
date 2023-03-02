import { Link } from 'react-router-dom';

export const MainHeader = () => {
  return (
    <header className="fixed left-0 top-0 h-20 w-full bg-[#044599] py-0 px-[10%]">
      <nav className="h-full">
        <ul className="m-0 flex h-full list-none items-center justify-center p-0">
          <li className="my-0 mx-4">
            <Link
              className="text-white no-underline hover:border-b-4 hover:border-solid hover:border-[#95bcf0] hover:pb-1 hover:text-[#95bcf0] active:border-b-4 active:border-solid active:border-[#95bcf0] active:pb-1 active:text-[#95bcf0]"
              to="./welcome">
              Welcome
            </Link>
          </li>
          <li className="my-0 mx-4">
            <Link
              className="text-white no-underline hover:border-b-4 hover:border-solid hover:border-[#95bcf0] hover:pb-1 hover:text-[#95bcf0] active:border-b-4 active:border-solid active:border-[#95bcf0] active:pb-1 active:text-[#95bcf0]"
              to="./products">
              Products
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
