import { EarlyAccess } from './components/EarlyAccess';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Productive } from './components/Productive';
import { Testimonials } from './components/Testimonials';

export const Fylo = () => {
  return (
    <div className="h-full w-full font-opensans dark:bg-darkBlue dark:text-white">
      <Header />
      <Hero />
      <Features />
      <Productive />
      <Testimonials />
      <EarlyAccess />
      <Footer />
    </div>
  );
};
