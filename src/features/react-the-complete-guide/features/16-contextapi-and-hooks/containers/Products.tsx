//import { useContext } from 'react';

//import { ProductsContext } from '../context/products';
import { ProductItem } from '../components/Products/ProductItem';
import { useStore } from '../store/store';

export const ProductsPage = () => {
  //const productsList = useContext(ProductsContext).products;

  const state = useStore()[0];

  return (
    <ul className="m-12 list-none p-0">
      {state.products.map((prod: any) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};
