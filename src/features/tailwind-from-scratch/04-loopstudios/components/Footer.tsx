import facebook from '../images/icon-facebook.svg';
import instagram from '../images/icon-instagram.svg';
import pinterest from '../images/icon-pinterest.svg';
import twitter from '../images/icon-twitter.svg';
import logo from '../images/logo.svg';

export const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container mx-auto max-w-6xl py-10">
        <div className="mb-8 flex flex-col items-center space-y-6 md:flex-row md:items-start md:justify-between md:space-y-0">
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            <div className="h-8">
              <img src={logo} alt="" className="w-44 md:ml-3" />
            </div>
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:ml-3 md:flex-row md:space-y-0 md:space-x-6">
              <div className="group h-10">
                <a href="#">About</a>
                <div className="mx-2 group-hover:border-2 group-hover:border-blue-50"></div>
              </div>
              <div className="group h-10">
                <a href="#">Careers</a>
                <div className="mx-2 group-hover:border-2 group-hover:border-blue-50"></div>
              </div>
              <div className="group h-10">
                <a href="#">Events</a>
                <div className="mx-2 group-hover:border-2 group-hover:border-blue-50"></div>
              </div>
              <div className="group h-10">
                <a href="#">Products</a>
                <div className="mx-2 group-hover:border-2 group-hover:border-blue-50"></div>
              </div>
              <div className="group h-10">
                <a href="#">Support</a>
                <div className="mx-2 group-hover:border-2 group-hover:border-blue-50"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
            <div className="mx-auto flex items-center justify-center space-x-4 md:mx-0 md:justify-end">
              <div className="group h-8">
                <a href="#">
                  <img className="h-6" src={facebook} alt="" />
                </a>
              </div>
              <div className="group h-8">
                <a href="#">
                  <img className="h-6" src={twitter} alt="" />
                </a>
              </div>
              <div className="group h-8">
                <a href="#">
                  <img className="h-6" src={pinterest} alt="" />
                </a>
              </div>
              <div className="group h-8">
                <a href="#">
                  <img className="h-6" src={instagram} alt="" />
                </a>
              </div>
            </div>

            <div className="font-bold">&copy; 2022 Loopstudios. All Rights Reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
