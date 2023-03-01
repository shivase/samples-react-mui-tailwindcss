import icon_access_anywhere from '../images/icon-access-anywhere.svg';
import icon_any_file from '../images/icon-any-file.svg';
import icon_collaboration from '../images/icon-collaboration.svg';
import icon_security from '../images/icon-security.svg';

export const Features = () => {
  return (
    <section id="features" className="pt-12.bg-gray-50.dark:bg-darkBlue1">
      <div className="container mx-auto px-6 pb-32">
        <div className="flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="mb-6 flex h-24 items-center justify-center">
              <img src={icon_access_anywhere} alt="" />
            </div>
            <h3 className="text-xl font-bold">Access your file from anywhere</h3>
            <p className="max-w-md">
              The ability to use a smartphone, tablet, or computer to access your account means your
              files follow you everywhere.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="mb-6 flex h-24 items-center justify-center">
              <img src={icon_security} alt="" />
            </div>
            <h3 className="text-xl font-bold">Security you can trust</h3>
            <p className="max-w-md">
              2-factor authentication and user-controlled encryption are just a couple of the
              security features we allow to help secure your files.
            </p>
          </div>
        </div>
        <div className="mt-28 flex flex-col space-y-24 text-center md:flex-row md:space-y-0">
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="mb-6 flex h-24 items-center justify-center">
              <img src={icon_collaboration} alt="" />
            </div>
            <h3 className="text-xl font-bold">Access your file from anywhere</h3>
            <p className="max-w-md">
              The ability to use a smartphone, tablet, or computer to access your account means your
              files follow you everywhere.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 md:w-1/2">
            <div className="mb-6 flex h-24 items-center justify-center">
              <img src={icon_any_file} alt="" />
            </div>
            <h3 className="text-xl font-bold">Security you can trust</h3>
            <p className="max-w-md">
              2-factor authentication and user-controlled encryption are just a couple of the
              security features we allow to help secure your files.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
