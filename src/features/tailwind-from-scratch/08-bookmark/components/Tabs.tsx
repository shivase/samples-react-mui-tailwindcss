import clsx from 'clsx';
import { useState } from 'react';

import illustration_features_tab1 from '../images/illustration-features-tab-1.svg';
import illustration_features_tab2 from '../images/illustration-features-tab-2.svg';
import illustration_features_tab3 from '../images/illustration-features-tab-3.svg';

export const Tabs = () => {
  const [tab, setTab] = useState<'panel-1' | 'panel-2' | 'panel-3'>('panel-1');

  const selectedTabClass = 'border-b border-b-4 border-softRed';

  return (
    <section id="tabs">
      <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
        <div className="lg:absolute lg:top-60 lg:right-[60%] lg:h-[300px] lg:w-[2000px] lg:rounded-r-full lg:bg-softBlue"></div>
        <div className="mx-auto mb-6 flex max-w-xl flex-col justify-center border-b md:flex-row md:space-x-10">
          <a
            href="#tabs"
            className="flex justify-center border-b text-center text-gray-600 hover:text-softRed md:border-b-0"
            onClick={() => setTab('panel-1')}>
            <div className={clsx(tab === 'panel-1' && selectedTabClass, 'py-5')}>
              Simple Bookmarking
            </div>
          </a>
          <a
            href="#tabs"
            className="flex justify-center border-b text-center text-gray-600 hover:text-softRed md:border-b-0"
            onClick={() => setTab('panel-2')}>
            <div className={clsx(tab === 'panel-2' && selectedTabClass, 'py-5')}>
              Speedy Searching
            </div>
          </a>
          <a
            href="#tabs"
            className="flex justify-center border-b text-center text-gray-600 hover:text-softRed md:border-b-0"
            onClick={() => setTab('panel-3')}>
            <div className={clsx(tab === 'panel-3' && selectedTabClass, 'py-5')}>Easy Sharing</div>
          </a>
        </div>

        <section id="panels" className="container mx-auto">
          {tab === 'panel-1' && (
            <div className="flex flex-col py-5 md:flex-row md:space-x-7">
              <div className="flex justify-center md:w-1/2">
                <img src={illustration_features_tab1} alt="" className="relative z-10" />
              </div>
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-32 text-center text-3xl font-semibold md:mt-0 md:text-left">
                  Bookmark in one click
                </h3>
                <p className="mx-auto max-w-md text-center text-grayishBlue2 md:text-left">
                  Organize your bookmarks however you like. Our simple drag-and-drop interface gives
                  you complete control over how you manage your favorite sites.
                </p>
                <div className="mx-auto md:mx-0">
                  <a
                    href="#"
                    className=" mt-4 rounded-lg border-2 border-white bg-softBlue px-6 py-3 font-semibold text-white hover:border-2 hover:border-softBlue hover:bg-white hover:text-softBlue md:inline-flex">
                    More Info
                  </a>
                </div>
              </div>
            </div>
          )}
          {tab === 'panel-2' && (
            <div className="flex flex-col py-5 md:flex-row md:space-x-7">
              <div className="flex justify-center md:w-1/2">
                <img src={illustration_features_tab2} alt="" className="relative z-10" />
              </div>
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-14 text-center text-3xl font-semibold md:mt-0 md:text-left">
                  Intelligent search
                </h3>
                <p className="mx-auto max-w-md text-center text-grayishBlue2 md:text-left">
                  Our powerful search feature will help you find saved sites in no time at all. No
                  need to trawl through all of your bookmarks.
                </p>
                <div className="mx-auto md:mx-0">
                  <a
                    href="#"
                    className=" mt-4 rounded-lg border-2 border-white bg-softBlue px-6 py-3 font-semibold text-white hover:border-2 hover:border-softBlue hover:bg-white hover:text-softBlue md:inline-flex">
                    More Info
                  </a>
                </div>
              </div>
            </div>
          )}
          {tab === 'panel-3' && (
            <div className="flex flex-col py-5 md:flex-row md:space-x-7">
              <div className="flex justify-center md:w-1/2">
                <img src={illustration_features_tab3} alt="" className="relative z-10" />
              </div>
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-14 text-center text-3xl font-semibold md:mt-0 md:text-left">
                  Share your bookmarks
                </h3>
                <p className="mx-auto max-w-md text-center text-grayishBlue2 md:text-left">
                  Easily share your bookmarks and collections with others. Create a shareable a link
                  that you can send at the click of a button.
                </p>
                <div className="mx-auto md:mx-0">
                  <a
                    href="#"
                    className=" mt-4 rounded-lg border-2 border-white bg-softBlue px-6 py-3 font-semibold text-white hover:border-2 hover:border-softBlue hover:bg-white hover:text-softBlue md:inline-flex">
                    More Info
                  </a>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </section>
  );
};
