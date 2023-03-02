import { FavoriteItem } from '../components/Favorites/FavoriteItem';
import { useStore } from '../store/store';

export const FavoritesPage = () => {
  // useContext
  //const favoriteProducts = useContext(ProductsContext).products.filter(
  //  (p) => p.isFavorite,
  //);

  const state = useStore()[0];

  const favoriteProducts = state.products.filter((p: any) => p.isFavorite);

  let content = <p className="m-16 text-center">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="m-12 list-none p-0">
        {favoriteProducts.map((prod: any) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }

  return content;
};
