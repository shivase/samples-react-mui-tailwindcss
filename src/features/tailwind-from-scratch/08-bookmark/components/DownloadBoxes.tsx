import logo_chrome_svg from '../images/logo-chrome.svg';
import logo_firefox_svg from '../images/logo-firefox.svg';
import logo_opera_svg from '../images/logo-opera.svg';

export const DownloadBoxes = () => {
  return (
    <>
      <section id="download">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-center text-3xl font-semibold md:text-4xl">
            Download the extension
          </h2>
          <p className="mx-auto max-w-lg text-center text-grayishBlue2">
            We've got more browsers in the pipeline. Please do let us know if you've got a favorite
            you'd like us to prioritize.
          </p>
        </div>
      </section>

      <section id="download-boxes" className="py-32">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center space-y-10 px-10 md:flex-row md:space-y-0 md:space-x-7 md:px-6">
          <div className="flex w-full flex-col space-y-4 rounded-lg py-6 text-center shadow-lg md:w-1/3">
            <div className="flex justify-center">
              <img src={logo_chrome_svg} alt="" />
            </div>
            <h5 className="pt-6 text-xl font-bold">Add to Chrome</h5>
            <p className="text-gray-400">Minimum Version 62</p>
            <div className="bg-[url('/images/tailwindcss-from-scratch/bookmark/bg-dots.svg')] bg-repeat-x px-6 pt-6 capitalize">
              <a
                href=""
                className="block w-full rounded-lg border-2 border-softBlue bg-softBlue py-3 text-white duration-200 hover:bg-white hover:text-softBlue">
                Add & Install Extension
              </a>
            </div>
          </div>
          <div className="flex w-full flex-col space-y-4 rounded-lg py-6 text-center shadow-lg md:mt-8 md:w-1/3">
            <div className="flex justify-center">
              <img src={logo_firefox_svg} alt="" />
            </div>
            <h5 className="pt-6 text-xl font-bold">Add to Firefox</h5>
            <p className="text-gray-400">Minimum Version 55</p>
            <div className="bg-[url('/images/tailwindcss-from-scratch/bookmark/bg-dots.svg')] bg-repeat-x px-6 pt-6 capitalize">
              <a
                href=""
                className="block w-full rounded-lg border-2 border-softBlue bg-softBlue py-3 text-white duration-200 hover:bg-white hover:text-softBlue">
                Add & Install Extension
              </a>
            </div>
          </div>
          <div className="flex w-full flex-col space-y-4 rounded-lg py-6 text-center shadow-lg md:mt-8 md:w-1/3">
            <div className="flex justify-center">
              <img src={logo_opera_svg} alt="" />
            </div>
            <h5 className="pt-6 text-xl font-bold">Add to Opera</h5>
            <p className="text-gray-400">Minimum Version 46</p>
            <div className="bg-[url('/images/tailwindcss-from-scratch/bookmark/bg-dots.svg')] bg-repeat-x px-6 pt-6 capitalize">
              <a
                href=""
                className="block w-full rounded-lg border-2 border-softBlue bg-softBlue py-3 text-white duration-200 hover:bg-white hover:text-softBlue">
                Add & Install Extension
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
