import facebook from '../images/facebook.svg';
import icon_email from '../images/icon-email.svg';
import icon_phone from '../images/icon-phone.svg';
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';

export const Footer = () => {
  return (
    <footer className="bg-darkBlue2 text-white">
      <div className="container mx-auto px-5 pt-12 pb-10">
        <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
          <div className="mt-10 space-y-6">
            <div className="flex items-center space-x-3 md:-mt-10">
              <div className="w-6">
                <img src={icon_phone} alt="" className="scale-110" />
              </div>
              <div>+1-543-123-4567</div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6">
                <img src={icon_email} alt="" className="scale-110" />
              </div>
              <div>example@fylo.com</div>
            </div>
          </div>
          <div className="flex flex-col space-y-10 text-xl md:flex-row md:space-x-20 md:space-y-0 md:text-base">
            <div className="flex flex-col space-y-3">
              <a href="#">About</a>
              <a href="#">Jobs</a>
              <a href="#">Press</a>
              <a href="#">Blog</a>
            </div>
            <div className="flex flex-col space-y-3">
              <a href="#">Contact us</a>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>
          <div className="flex justify-center space-x-3 pb-10">
            <div>
              <a href="#">
                <img src={facebook} alt="" className="ficon rounded-full bg-darkBlue p-2" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={twitter} alt="" className="ficon rounded-full bg-darkBlue p-2" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={instagram} alt="" className="ficon rounded-full bg-darkBlue p-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
