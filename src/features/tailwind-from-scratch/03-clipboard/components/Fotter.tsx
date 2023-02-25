import facebook from '../images/icon-facebook.svg';
import instagram from '../images/icon-instagram.svg';
import twitter from '../images/icon-twitter.svg';
import logo from '../images/logo.svg';

export const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto mt-20 max-w-6xl p-20 px-10 text-center">
        <div className="flex flex-col items-center justify-between space-y-10 md:flex-row">
          <img src={logo} alt="" />
          <div className="mb-10 flex flex-1 flex-col items-center justify-between space-y-6 text-grayishBlue md:mb-0 md:flex-row md:space-y-0">
            {/* Menus */}
            <div className="flex flex-col space-y-4 md:ml-24 md:flex-row md:space-x-24 md:space-y-0">
              {/* Menu1 */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    FAQs
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Contact Us
                  </a>
                </div>
              </div>
              {/* Menu2 */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Press Kit
                  </a>
                </div>
              </div>
              {/* Menu3 */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Install Guide
                  </a>
                </div>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex w-32 justify-between py-1">
              <a href="#">
                <img src={facebook} alt="" className="ficon duration-200" />
              </a>
              <a href="#">
                <img src={twitter} alt="" className="ficon duration-200" />
              </a>
              <a href="#">
                <img src={instagram} alt="" className="ficon duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
