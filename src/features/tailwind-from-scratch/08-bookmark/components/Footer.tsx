import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import logo from '../images/logo-bookmark-footer.svg';

export const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue2 py-16">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-16 px-6 md:flex-row md:space-y-0">
        <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light text-grayishBlue2 md:flex-row md:space-y-0 md:space-x-14">
          <img src={logo} alt="" className="mb-1" />
          <a href="#features" className="uppercase hover:text-softRed">
            Features
          </a>
          <a href="#download" className="uppercase hover:text-softRed">
            download
          </a>
          <a href="#faq" className="uppercase hover:text-softRed">
            FAQs
          </a>
        </div>
        <div className="flex space-x-10">
          <a href="#">
            <img src={facebook} alt="" className="ficon h-6" />
          </a>
          <a href="#">
            <img src={twitter} alt="" className="ficon h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};
