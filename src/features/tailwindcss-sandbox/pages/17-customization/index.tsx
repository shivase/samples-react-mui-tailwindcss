export const Customization = () => {
  const showBrowserWidth = () => {
    const width =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (document?.querySelector('h1') !== null) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.querySelector('h1')!.innerHTML = `Width: ${width}`;
    }
  };

  window.onload = showBrowserWidth;
  window.onresize = showBrowserWidth;

  return (
    <div className="bg-black sm:bg-green-800 lg:bg-yellow-800 xl:bg-purple-800 2xl:bg-orange-800">
      {/* md:bg-primary */}
      <h1 className="text-xl text-white md:text-3xl xl:text-5xl">Tailwind is awesome</h1>
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
//
