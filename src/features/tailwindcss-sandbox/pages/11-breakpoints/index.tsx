import { useLayoutEffect, useState } from 'react';

export const Breakpoints = () => {
  const [width, setWidth] = useState<number | null>(null);

  const showBrowserWidth = () => {
    const widthNow = window.innerWidth;
    setWidth(widthNow);
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', showBrowserWidth);
    showBrowserWidth();
  }, []);

  // Tailwind is mobile-first
  return (
    <div className="h-screen w-screen bg-black sm:bg-green-800 md:bg-blue-800 lg:bg-yellow-800 xl:bg-purple-800 2xl:bg-red-800">
      <div className="text-xl text-white md:text-3xl xl:text-5xl">Width: {width}px</div>
    </div>
  );
};

//<!-- Breakpoint Classes
//    sm	640px	  @media (min-width: 640px) { ... }
//    md	768px	  @media (min-width: 768px) { ... }
//    lg	1024px	@media (min-width: 1024px) { ... }
//    xl	1280px	@media (min-width: 1280px) { ... }
//    2xl	1536px	@media (min-width: 1536px) { ... }
//  -->
