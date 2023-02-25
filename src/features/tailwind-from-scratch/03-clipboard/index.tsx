import { Feature } from './components/Feature';
import { Footer } from './components/Fotter';
import { Hero } from './components/Hero';
import { References } from './components/References';
import { Snippets } from './components/Snippets';
import { Supercharge } from './components/Supercharge';

export const Clipboard = () => {
  return (
    <div
      className="
    bg-[url('/images/tailwindcss-from-scratch/clipboard/bg-header-mobile.png')]
    bg-contain
    bg-no-repeat md:bg-[url('/images/tailwindcss-from-scratch/clipboard/bg-header-desktop.png')]
    ">
      <Hero />
      <Snippets />
      <Feature />
      <Supercharge />
      <References />
      <Footer />
    </div>
  );
};
