import brand_recognition from '../images/icon-brand-recognition.svg';
import detailed_records from '../images/icon-detailed-records.svg';
import fully_customizable from '../images/icon-fully-customizable.svg';

export const Feature = () => {
  return (
    <>
      <section id="stats" className="bg-gray-100 py-24">
        <div className="container mx-auto px-3">
          <h2 className="mb-6 text-center text-4xl font-bold">Advanced Statistics</h2>
          <p className="mx-auto max-w-xs text-center text-gray-400 md:max-w-md">
            Track how your links are performing acrss the web with our advanced statistics
            dashboard.
          </p>
        </div>
      </section>
      <section id="features" className="bg-gray-100 pb-32">
        <div className="container relative mx-auto flex flex-col items-start px-6 md:flex-row md:space-x-7">
          <div className="absolute top-24 left-16 hidden h-3 w-10/12 bg-cyan-500 md:block"></div>
          <div className="absolute left-1/2 -ml-1 h-full w-2 bg-cyan-500 md:hidden"></div>

          <div className="relative  mt-24 flex flex-col space-y-6 rounded-lg bg-white p-6 md:mt-0 md:w-1/3">
            <div className="absolute -top-10 left-1/2 -ml-10 md:left-16">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-veryDarkViolet p-4">
                <img src={brand_recognition} alt="" />
              </div>
            </div>
            <h5 className="pt-6 text-center text-xl font-bold capitalize md:text-left">
              Brand Recognition
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Boost your brand recognition with each click. Generic links don't mean a thing.
              Branded links help instil confidence in your content.
            </p>
          </div>
          <div className="relative mt-24 flex flex-col space-y-6 rounded-lg bg-white p-6 md:mt-8 md:w-1/3">
            <div className="absolute -top-10 left-1/2 -ml-10 md:left-16">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-veryDarkViolet p-4">
                <img src={detailed_records} alt="" />
              </div>
            </div>
            <h5 className="pt-6 text-center text-xl font-bold capitalize md:text-left">
              Detailed records
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Gain insights into who is clicking your links. Knowing when an where people engage
              with your content helps inform better decisions.
            </p>
          </div>
          <div className="relative mt-24 flex flex-col space-y-6 rounded-lg bg-white p-6 md:mt-16 md:w-1/3">
            <div className="absolute -top-10 left-1/2 -ml-10 md:left-16">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-veryDarkViolet p-4">
                <img src={fully_customizable} alt="" />
              </div>
            </div>
            <h5 className="pt-6 text-center text-xl font-bold capitalize md:text-left">
              Fully Customizable
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Improve brand awereness and content discoverability through customizable links,
              supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
