import logoGoogle from '../images/logo-google.png';
import logoHP from '../images/logo-hp.png';
import logoIBM from '../images/logo-ibm.png';
import logoMicrosoft from '../images/logo-microsoft.png';
import logoVG from '../images/logo-vector-graphics.png';

import { Button } from './Button/Button';
import { Header } from './Header/Header';

export const References = () => {
  return (
    <section id="references">
      <div className="mx-auto my-44 flex max-w-6xl flex-col items-center justify-between space-y-16 px-10 md:flex-row md:space-y-0">
        <img src={logoGoogle} alt="" />
        <img src={logoIBM} alt="" />
        <img src={logoMicrosoft} alt="" />
        <img src={logoHP} alt="" />
        <img src={logoVG} alt="" />
      </div>
      <div className="mx-auto mb-40 max-w-6xl px-10 pt-16 text-center">
        <Header type="h3">Clipboard for iOS and Mac OS</Header>
        <p className="mx-auto mb-10 max-w-3xl text-2xl text-grayishBlue">
          Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're
          ready to start adding to your clipboard.
        </p>
        <div className="flex w-full flex-col justify-center space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
          <Button color="cyan">Download for iOS</Button>
          <Button color="blue">Download for Mac</Button>
        </div>
      </div>
    </section>
  );
};
