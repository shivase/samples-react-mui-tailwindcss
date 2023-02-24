import headphone from './images/headphone.png';
import heart from './images/heart.png';
import weight from './images/weight.png';

export const ProductModal = () => {
  return (
    <body>
      {/* Global Container */}
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        {/* Card Container */}
        <div className="m-3 flex flex-col space-y-10 rounded-2xl bg-white p-6 shadow-2xl md:m-0 md:flex-row md:space-y-0 md:space-x-10 md:p-16">
          {/* Image Div */}
          <div>
            <img src={headphone} alt="" className="mx-auto w-60 duration-200 hover:scale-105" />
          </div>

          {/* Content */}
          <div className="flex flex-col space-y-6">
            {/* Label & Title Container */}
            <div className="mb-4 flex flex-col space-y-3 text-center md:text-left">
              <div>
                <div className="inline-block rounded-full bg-black px-3 py-1 text-sm text-white">
                  Free Shipping
                </div>
              </div>

              {/* Title */}
              <div className="max-w-sm text-2xl font-medium">
                Razer Kraken Kitty Edt Gaming Headset Quartz
              </div>
              {/* Price Container */}
              <div className="mb-4 flex flex-col space-y-3 text-center md:text-left">
                <p className="line-through">$799</p>
                <p className="text-5xl font-bold">$599</p>
                <p className="text-sm font-light text-gray-400">
                  This offer is valid until April 3rd or as long as stock lasts!
                </p>
              </div>

              {/* Button Group */}
              <div className="group">
                <button className="w-full rounded-lg border-b-8 border-b-blue-700 bg-blue-700 text-white transition-all duration-150 group-hover:border-t-8 group-hover:border-b-0 group-hover:border-t-blue-700 group-hover:bg-blue-700 group-hover:shadow-lg">
                  <div className="rounded-lg bg-blue-500 px-8 py-4 duration-150 group-hover:bg-blue-700">
                    Add to cart
                  </div>
                </button>
              </div>

              {/* Stock */}
              <div className="group flex items-center space-x-3">
                <div className="h-3 w-3 rounded-full bg-green-400 group-hover:animate-ping"></div>
                <div className="text-sm">50+ pcs. in stock</div>
              </div>

              {/* Bottom Buttons Container */}
              <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                <button className="flex items-center justify-center space-x-3 rounded-lg border-2 border-gray-300 py-3 px-5 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:opacity-30 hover:shadow-lg">
                  <img src={weight} alt="" className="w-8" />
                  <span>Add to cart</span>
                </button>

                <button className="flex items-center justify-center space-x-3 rounded-lg border-2 border-gray-300 py-3 px-5 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:opacity-30 hover:shadow-lg">
                  <img src={heart} alt="" className="w-8" />
                  <span>Add to wishlist</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};
