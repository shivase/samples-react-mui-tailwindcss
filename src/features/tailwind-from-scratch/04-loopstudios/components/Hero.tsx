import clsx from 'clsx';
import { useState } from 'react';

import logo from '../images/logo.svg';

export const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="hero"
      className="
    bg-[url('/images/tailwindcss-from-scratch/loopstudios/desktop/image-hero.jpg')]
    bg-cover
    bg-no-repeat px-6 py-12 md:bg-[url('/images/tailwindcss-from-scratch/loopstudios/mobile/image-hero.jpg')]
    ">
      <div className="container mx-auto max-w-6xl">
        <nav className="flex items-center justify-between font-bold text-white">
          <img src={logo} alt="" />
          <div className="hidden h-10 font-alata md:flex md:space-x-8">
            <div className="group">
              <a href="#">About</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Career</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Events</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Products</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="group">
              <a href="#">Support</a>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
          </div>
          {/* hamburger menu here */}
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
                  'absolute top-0 left-0 h-[2px] w-[24px] rotate-0 bg-[#fff] transition-all duration-[0.5s]',
                )}></span>
              <span
                className={clsx(
                  open && 'hidden',
                  'absolute top-0 left-0 h-[2px] w-[24px] translate-y-[7px] rotate-0 bg-[#fff] transition-all duration-[0.5s]',
                )}></span>
              <span
                className={clsx(
                  open && 'translate-y-[6px] translate-x-[-6px] rotate-[-45deg]',
                  'absolute left-0 top-0 h-[2px] w-[24px] translate-y-[14px] rotate-0 bg-[#fff] transition-all duration-[0.5s]',
                )}></span>
            </button>
          </div>
        </nav>

        {open && (
          <div
            id="menu"
            className="absolute inset-y-0 left-0 flex min-h-screen w-full flex-col space-y-3 self-end bg-black py-1 pt-40 pl-12 text-lg uppercase text-white">
            <a href="#" className="hover:text-pink-500">
              About
            </a>
            <a href="#" className="hover:text-pink-500">
              Careers
            </a>
            <a href="#" className="hover:text-pink-500">
              Events
            </a>
            <a href="#" className="hover:text-pink-500">
              Products
            </a>
            <a href="#" className="hover:text-pink-500">
              Supports
            </a>
          </div>
        )}
        <div className="my-32 max-w-lg border-2 p-4 font-sans text-4xl uppercase text-white md:m-32 md:mx-0 md:p-10 md:text-6xl">
          Impressive Experiences That Deliver
        </div>
      </div>
    </section>
  );
};
