import { Feature } from './components/Feature';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ShortenForm } from './components/ShortenForm';

export const Shortly = () => {
  return (
    <>
      <Header />
      <Hero />
      <ShortenForm />
      <Feature />
      <Footer />
    </>
  );
};
