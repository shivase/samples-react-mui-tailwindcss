import { DownloadBoxes } from './components/DownloadBoxes';
import { FAQ } from './components/FAQ';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Newsletter } from './components/Newsletter';
import { Tabs } from './components/Tabs';

export const Bookmark = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Tabs />
      <DownloadBoxes />
      <FAQ />
      <Newsletter />
      <Footer />
    </>
  );
};
