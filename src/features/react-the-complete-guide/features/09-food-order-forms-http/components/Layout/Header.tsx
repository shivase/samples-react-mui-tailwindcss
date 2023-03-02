import { FC } from 'react';
import { Link } from 'react-router-dom';

import mealsImage from '../../../../images/meals.jpg';

import HeaderCartButton from './HeaderCartButton';

type HeaderProps = {
  onShowCart: () => void;
};

const Header: FC<HeaderProps> = (props) => {
  const { onShowCart } = props;

  return (
    <>
      <header className="fixed top-0 left-0 z-10 flex h-20 w-full items-center justify-between bg-[#8a2b06] py-0 px-[10%]  text-white shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
        <h1>
          <Link to="/">ReactMeals</Link>
        </h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className="z-0 h-96 w-full overflow-hidden">
        <img
          alt="mealsImage"
          src={mealsImage}
          className="h-full w-[110%] -translate-y-16 -translate-x-4 -rotate-6 object-cover"
        />
      </div>
    </>
  );
};

export default Header;
