import iconBlacklist from '../images/icon-blacklist.svg';
import iconPreview from '../images/icon-preview.svg';
import iconText from '../images/icon-text.svg';

import { Header } from './Header/Header';

export const Supercharge = () => {
  return (
    <section id="supercharge">
      <div className="mx-auto my-20 max-w-6xl px-10 text-center">
        <Header type="h3">Supercharge your workflow</Header>
        <p className="mx-auto mb-16 max-w-3xl text-center text-xl leading-9 text-grayishBlue">
          We've got the tools to boost your productivity.
        </p>
        <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
          <div className="flex flex-col items-center space-y-5">
            <img src={iconBlacklist} alt="" className="mb-6" />
            <Header type="h5">Create Blacklists</Header>
            <p className="max-w-md text-grayishBlue">
              Easily search your snippets by content, category, web address, application, and more.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <img src={iconText} alt="" className="mb-6" />
            <Header type="h5">Plain Text Snippets</Header>
            <p className="max-w-md text-grayishBlue">
              Remove unwanted formatting form copied text for a consistent look.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <img src={iconPreview} alt="" className="mb-6" />
            <Header type="h5">Sneak Preview</Header>
            <p className="max-w-md text-grayishBlue">
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
