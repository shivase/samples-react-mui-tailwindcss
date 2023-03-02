import { Link } from 'react-router-dom';

import Navigation from './Navigation';

const MainHeader = () => (
  <header className="fixed top-0 left-0 flex h-20 w-full items-center justify-between bg-[#741188] py-0 px-8">
    <h1 className="text-white">
      <Link to="/">A Typical Page</Link>
    </h1>
    <Navigation />
  </header>
);

export default MainHeader;
