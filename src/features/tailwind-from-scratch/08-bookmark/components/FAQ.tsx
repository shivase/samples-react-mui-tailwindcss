/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/tabindex-no-positive */
export const FAQ = () => {
  return (
    <>
      <section id="faq">
        <div className="container mx-auto">
          <h2 className="mb-6 text-center text-3xl font-semibold md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-lg px-6 text-center text-grayishBlue2">
            Here are some of our FAQs. If you have any other questions you'd like answered please
            feel free to email us.
          </p>
        </div>
      </section>
      <section id="faq-accordion">
        <div className="container mx-auto mb-32 px-6">
          <div className="m-8 mx-auto max-w-2xl overflow-hidden">
            <div className="group border-b py-1 outline-none" tabIndex={1}>
              <div className="ease group flex cursor-pointer items-center justify-between py-3 text-gray-500 transition duration-500">
                <div className="ease transition duration-500 group-hover:text-red-500">
                  What is Bookmark?
                </div>
                <div className="ease transition duration-500 group-focus:-rotate-180 group-focus:text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                    <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8" />
                  </svg>
                </div>
              </div>
              <div className="ease max-h-0 overflow-hidden transition duration-500 group-focus:max-h-screen">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut cumque neque magni
                  facilis optio nisi repellat possimus. Voluptas eum natus fugiat aliquid,
                  consequatur voluptatum pariatur sint nihil voluptatem corporis recusandae.
                </p>
              </div>
            </div>
            <div className="group border-b py-1 outline-none" tabIndex={2}>
              <div className="ease group flex cursor-pointer items-center justify-between py-3 text-gray-500 transition duration-500">
                <div className="ease transition duration-500 group-hover:text-red-500">
                  How can I request a new browser?
                </div>
                <div className="ease transition duration-500 group-focus:-rotate-180 group-focus:text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                    <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8" />
                  </svg>
                </div>
              </div>
              <div className="ease max-h-0 overflow-hidden transition duration-500 group-focus:max-h-screen">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut cumque neque magni
                  facilis optio nisi repellat possimus. Voluptas eum natus fugiat aliquid,
                  consequatur voluptatum pariatur sint nihil voluptatem corporis recusandae.
                </p>
              </div>
            </div>
            <div className="group border-b py-1 outline-none" tabIndex={3}>
              <div className="ease group flex cursor-pointer items-center justify-between py-3 text-gray-500 transition duration-500">
                <div className="ease transition duration-500 group-hover:text-red-500">
                  Is there a mobile app?
                </div>
                <div className="ease transition duration-500 group-focus:-rotate-180 group-focus:text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                    <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8" />
                  </svg>
                </div>
              </div>
              <div className="ease max-h-0 overflow-hidden transition duration-500 group-focus:max-h-screen">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut cumque neque magni
                  facilis optio nisi repellat possimus. Voluptas eum natus fugiat aliquid,
                  consequatur voluptatum pariatur sint nihil voluptatem corporis recusandae.
                </p>
              </div>
            </div>
            <div className="group border-b py-1 outline-none" tabIndex={4}>
              <div className="ease group flex cursor-pointer items-center justify-between py-3 text-gray-500 transition duration-500">
                <div className="ease transition duration-500 group-hover:text-red-500">
                  What about other Chromium browsers?
                </div>
                <div className="ease transition duration-500 group-focus:-rotate-180 group-focus:text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                    <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8" />
                  </svg>
                </div>
              </div>
              <div className="ease max-h-0 overflow-hidden transition duration-500 group-focus:max-h-screen">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut cumque neque magni
                  facilis optio nisi repellat possimus. Voluptas eum natus fugiat aliquid,
                  consequatur voluptatum pariatur sint nihil voluptatem corporis recusandae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
