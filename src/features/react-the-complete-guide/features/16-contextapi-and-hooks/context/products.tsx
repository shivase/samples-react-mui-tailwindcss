import { useState, FC, createContext } from 'react';

import type { Product } from '../types';

export const ProductsContext = createContext({
  products: [] as Product[],
  toggleFav: (_id: string) => {},
});

type ProductProviderProps = {
  children: React.ReactNode;
};

export const ProductsProvider: FC<ProductProviderProps> = (props) => {
  const [productsList, setProductsList] = useState<Product[]>([
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isFavorite: false,
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'A pretty blue t-shirt.',
      isFavorite: false,
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers.',
      isFavorite: false,
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (productId: string) => {
    setProductsList((currentProductList) => {
      const prodIndex = currentProductList.findIndex((p: Product) => p.id === productId);
      const newFavStatus = !currentProductList[prodIndex].isFavorite;
      const updatedProducts = [...currentProductList];
      updatedProducts[prodIndex] = {
        ...currentProductList[prodIndex],
        isFavorite: newFavStatus,
      };

      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider value={{ products: productsList, toggleFav: toggleFavorite }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
