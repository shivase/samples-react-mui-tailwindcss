import illustration_intro from '../images/illustration-intro.png';

export const Hero = () => {
  return (
    <section id="hero" className="bg-contain bg-bottom bg-no-repeat">
      <div className="container mx-auto px-6 pb-52 text-center md:pt-20">
        <img src={illustration_intro} alt="" className="mx-auto" />
        <h1 className="mx-auto mb-10 mt-14 max-w-2xl text-3xl font-bold leading-normal md:text-4xl">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="mx-auto mb-10 max-w-sm text-sm md:max-w-xl md:text-lg">
          Fylo stores all your most important files in one secure location. Access them wherever you
          need, share and collaborate with friends family, and co-workers.
        </p>
        <button className="w-52 rounded-full bg-accentCyan p-3 hover:scale-95">Get Started</button>
      </div>
    </section>
  );
};
