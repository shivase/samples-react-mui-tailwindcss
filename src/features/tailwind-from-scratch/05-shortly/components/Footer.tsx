import facebook from '../images/icon-facebook.svg';
import instagram from '../images/icon-instagram.svg';
import pinterest from '../images/icon-pinterest.svg';
import twitter from '../images/icon-twitter.svg';
import logo from '../images/logo.svg';

export const Footer = () => {
  return (
    <>
      <section
        id="cta"
        className="
      bg-darkViolet
      bg-[url('/images/tailwindcss-from-scratch/shortly/bg-boost-desktop.svg')] bg-cover
      bg-no-repeat py-24">
        <div className="flex flex-col space-y-6 p-2">
          <h5 className="mx-auto space-y-10 text-center text-4xl font-bold text-white">
            Boost your links today
          </h5>
          <button className="mx-auto rounded-full bg-cyan-400 px-10 py-5 text-2xl font-bold text-white hover:bg-cyanLight focus:outline-none md:py-3 md:text-base">
            Get Started
          </button>
        </div>
      </section>
      <section id="footer" className="bg-veryDarkViolet py-16">
        <div className="container mx-auto flex flex-col items-center justify-between space-y-16 md:flex-row md:items-start md:space-y-0">
          <img src={logo} alt="" />
          <div className="flex flex-col space-y-16 md:flex-row md:space-x-20 md:space-y-0">
            <div className="flex w-full flex-col items-center md:items-start">
              <div className="mb-5 font-bold capitalize text-white">Features</div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan-400">
                  Link shortening
                </a>
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan-400">
                  Branded Links
                </a>
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan-400">
                  Analytics
                </a>
              </div>
            </div>
            <div className="flex w-full flex-col items-center md:items-start">
              <div className="mb-5 font-bold capitalize text-white">Resources</div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan-500">
                  Blog
                </a>
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan-500">
                  Developers
                </a>
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan-500">
                  Support
                </a>
              </div>
            </div>
            <div className="flex w-full flex-col items-center md:items-start">
              <div className="mb-5 font-bold capitalize text-white">Company</div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan-500">
                  About
                </a>
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan-500">
                  Our Team
                </a>
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan-500">
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
            <div className="mx-auto flex items-center justify-center space-x-4 md:mx-0 md:justify-end">
              <div className="group h-8">
                <a href="#">
                  <img className="ficon h-6" src={facebook} alt="" />
                </a>
              </div>
              <div className="group h-8">
                <a href="#">
                  <img className="ficon h-6" src={twitter} alt="" />
                </a>
              </div>
              <div className="group h-8">
                <a href="#">
                  <img className="ficon h-6" src={pinterest} alt="" />
                </a>
              </div>
              <div className="group h-8">
                <a href="#">
                  <img className="ficon h-6" src={instagram} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
