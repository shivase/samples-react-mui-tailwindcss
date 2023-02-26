import image_interactive from '../images/desktop/image-interactive.jpg';

export const Feature = () => {
  return (
    <section id="feature">
      <div className="container relative mx-auto my-32 flex max-w-6xl flex-col px-6 text-gray-900 md:flex-row md:px-0">
        <img src={image_interactive} alt="" />
        <div className="top-48 mx-auto bg-white pr-0 text-center md:absolute md:right-0 md:py-20 md:pl-20">
          <h2 className="mt-10 mb-6 max-w-lg text-center font-sans text-4xl uppercase text-gray-900 md:mt-0 md:text-left md:text-5xl">
            The Leader in interactive vr
          </h2>
          <p className="max-w-md text-center md:text-left">
            Founded in 2011, Loopstudios has been producing world-class virtual reality projects for
            some of the best companies around the globe. Our award-winning creations have
            transformed businesses through digital experiences that bind to their brands.
          </p>
        </div>
      </div>
    </section>
  );
};
