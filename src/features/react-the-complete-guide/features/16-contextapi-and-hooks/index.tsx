import { Navigation } from './components/Nav/Navigation';
//import { ProductsProvider } from './context/products';
import { Router } from './routes';
import { ProductsStore } from './store/products-store';

ProductsStore();

export const ContextApiAndHooks = () => {
  return (
    <>
      <Navigation />
      <main>
        <Router />
      </main>
    </>
  );
  // ContextAPI
  //return (
  //  <ProductsProvider>
  //    <Navigation />
  //    <main>
  //      <Router />
  //    </main>
  //  </ProductsProvider>
  //);
};
