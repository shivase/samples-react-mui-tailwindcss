import clsx from 'clsx';
import { useState } from 'react';

import logo from '../images/logo.svg';

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="container relative mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <img src={logo} alt="" />
          <div className="hidden space-x-8 font-bold lg:flex">
            <a href="#" className="text-grayishViolet hover:text-veryDarkViolet">
              Features
            </a>
            <a href="#" className="text-grayishViolet hover:text-veryDarkViolet">
              Pricing
            </a>
            <a href="#" className="text-grayishViolet hover:text-veryDarkViolet">
              Resources
            </a>
          </div>
        </div>
        <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
          <div className="hover:text-veryDarkViolet">Login</div>
          <a
            href="#"
            className="rounded-full bg-cyan-400 px-8 py-3 font-bold text-white hover:opacity-70">
            Sign up
          </a>
        </div>
        <div className="md:hidden">
          <button
            id="menu-btn"
            type="button"
            onClick={() => setOpen(!open)}
            className={clsx(
              open && 'rotate-[90deg]',
              'relative z-40 block h-[24px] w-[24px] cursor-pointer transition-all duration-[0.25s] focus:outline-none md:hidden',
            )}>
            <span
              className={clsx(
                open && 'translate-y-[6px] translate-x-[-6px] rotate-[45deg]',
                'absolute top-0 left-0 h-[2px] w-[24px] rotate-0 bg-[#000] transition-all duration-[0.5s]',
              )}></span>
            <span
              className={clsx(
                open && 'hidden',
                'absolute top-0 left-0 h-[2px] w-[24px] translate-y-[7px] rotate-0 bg-[#000] transition-all duration-[0.5s]',
              )}></span>
            <span
              className={clsx(
                open && 'translate-y-[6px] translate-x-[-6px] rotate-[-45deg]',
                'absolute left-0 top-0 h-[2px] w-[24px] translate-y-[14px] rotate-0 bg-[#000] transition-all duration-[0.5s]',
              )}></span>
          </button>
        </div>
        {open && (
          <div id="menu" className="absolute inset-x-6 top-20 z-50 rounded-lg bg-darkViolet p-6">
            <div className="flex w-full flex-col items-center justify-center space-y-6 rounded-sm font-bold text-white">
              <a href="#" className="w-full text-center">
                Features
              </a>
              <a href="#" className="w-full text-center">
                Pricing
              </a>
              <a href="#" className="w-full text-center">
                Resources
              </a>
              <a href="#" className="w-full border-t border-gray-400 pt-6 text-center">
                Login
              </a>
              <a href="#" className="w-full rounded-full bg-cyan-400 py-3 text-center">
                Sign Up
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
