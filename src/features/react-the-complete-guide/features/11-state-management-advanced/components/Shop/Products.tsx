import { useProducts } from '../../hooks/useProducts';
import { Product } from '../../types';

import { ProductItem } from './ProductItem';

export const Products = () => {
  const products = useProducts();

  const res: Product[] = [];
  if (products.data) {
    Object.keys(products.data).forEach((key) => {
      res.push({
        id: key,
        title: products.data[key].title,
        price: products.data[key].price,
        description: products.data[key].description,
      });
    });
  }

  return (
    <section>
      <h2 className="my-8 mx-auto text-center font-bold uppercase text-white">
        Buy your favorite products
      </h2>
      {products.isLoading && <p className="text-center text-white">Now Loading...</p>}
      {res && (
        <ul className="m-0 list-none p-0">
          {res.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          ))}
        </ul>
      )}
    </section>
  );
};
