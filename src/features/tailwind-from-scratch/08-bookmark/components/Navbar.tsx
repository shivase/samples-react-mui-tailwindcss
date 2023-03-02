import clsx from 'clsx';
import { useState } from 'react';

import logo from '../images/logo-bookmark.svg';

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <nav className="container relative mx-auto p-6">
        <div className="my-6 flex items-center justify-between space-x-20">
          <div className="z-30">
            <img src={logo} alt="" id="logo" />
          </div>
          <div className="hidden items-center space-x-10 uppercase text-grayishBlue2 md:flex">
            <a href="#features" className="tracking-widest hover:text-softRed">
              Features
            </a>
            <a href="#download" className="tracking-widest hover:text-softRed">
              Download
            </a>
            <a href="#faq" className="tracking-widest hover:text-softRed">
              FAQ
            </a>
            <a
              href="#"
              className="rounded-lg border-2 border-softRed bg-softRed px-8 py-2 text-white shadow-md hover:bg-white hover:text-softRed">
              Login
            </a>
          </div>
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
                open && 'translate-y-[6px] translate-x-[-6px] rotate-[45deg] bg-white',
                'absolute top-0 left-0 h-[2px] w-[24px] rotate-0 bg-[#000] transition-all duration-[0.5s]',
              )}></span>
            <span
              className={clsx(
                open && 'hidden',
                'absolute top-0 left-0 h-[2px] w-[24px] translate-y-[7px] rotate-0 bg-[#000] transition-all duration-[0.5s]',
              )}></span>
            <span
              className={clsx(
                open && 'translate-y-[6px] translate-x-[-6px] rotate-[-45deg] bg-white',
                'absolute left-0 top-0 h-[2px] w-[24px] translate-y-[14px] rotate-0 bg-[#000] transition-all duration-[0.5s]',
              )}></span>
          </button>
        </div>
        {open && (
          <div
            id="menu"
            className="fixed inset-0 z-20 flex h-full min-h-screen w-full flex-col items-center divide-y divide-gray-500 self-end bg-veryDarkBlue2 px-6 py-1 pt-24 pb-4 uppercase tracking-widest text-white opacity-90">
            <div className="w-full py-3 text-center">
              <a
                href="#features"
                onClick={() => setOpen(false)}
                className="block hover:text-softRed">
                Features
              </a>
            </div>
            <div className="w-full py-3 text-center">
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="block hover:text-softRed">
                Download
              </a>
            </div>
            <div className="w-full py-3 text-center hover:text-softRed">
              <a onClick={() => setOpen(false)} href="#faq" className="block">
                FAQs
              </a>
            </div>
            <div className="w-full py-3 text-center">
              <a href="" onClick={() => setOpen(false)} className="block hover:text-softRed">
                Login
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
