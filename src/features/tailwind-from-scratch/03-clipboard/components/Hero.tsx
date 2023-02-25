import logo_svg from '../images/logo.svg';

import { Button } from './Button/Button';
import { Header } from './Header/Header';

export const Hero = () => {
  return (
    <section id="hero">
      <div className="mx-auto mb-40 max-w-6xl px-10 pt-16 text-center">
        <img src={logo_svg} className="mx-auto my-16" alt="logo" />
        <Header type="h3">A history of everything you copy</Header>
        <p className="mx-auto mb-10 max-w-3xl text-2xl text-grayishBlue">
          Clipboard allows you to track and organize everything you copy. Instantly access your
          clipboard on all your devices.
        </p>
        <div className="flex w-full flex-col justify-center space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
          <Button color="cyan">Download for iOS</Button>
          <Button color="blue">Download for Mac</Button>
        </div>
      </div>
    </section>
  );
};
