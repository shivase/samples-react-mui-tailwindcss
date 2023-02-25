import image_computer from '../images/image-computer.png';
import image_devices from '../images/image-devices.png';

import { Header } from './Header/Header';

export const Feature = () => {
  return (
    <>
      <section id="features">
        <div className="mx-auto my-20 max-w-6xl px-10 text-center">
          <div className="relative flex flex-col md:flex-row md:space-x-32">
            <div className="md:w-1/2">
              <img src={image_computer} alt="" className="top-0 right-[50%] md:absolute" />
            </div>
            <div className="mt-16 mb-24 flex flex-col space-y-12 text-xl md:mb-60 md:w-1/2 md:pl-16 md:text-left">
              <div>
                <Header type="h5">Quick Search</Header>
                <p className="max-w-md text-grayishBlue">
                  Easily search your snippets by content, category, web address, application, and
                  more.
                </p>
              </div>
              <div>
                <Header type="h5">iCloud Sync</Header>
                <p className="max-w-md text-grayishBlue">
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>
              <div>
                <Header type="h5">Completely History</Header>
                <p className="max-w-md text-grayishBlue">
                  Retrieve any snippets from the first moment you started using the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="access">
        <div className="mx-auto my-20 max-w-6xl px-10 text-center">
          <Header type="h3">Access Clipboard anywhere</Header>
          <p className="mx-auto mb-24 max-w-3xl text-center text-xl leading-9 text-grayishBlue">
            Whether you're on the go, or at your computer, you can access all your Clipboard
            snippets in a few simple clicks.
          </p>
          <img src={image_devices} alt="" className="mx-auto" />
        </div>
      </section>
    </>
  );
};
