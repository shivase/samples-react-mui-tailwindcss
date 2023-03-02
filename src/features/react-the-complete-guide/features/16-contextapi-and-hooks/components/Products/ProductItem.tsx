import clsx from 'clsx';
import { FC } from 'react';

import { useStore } from '../../store/store';
import { Button } from '../UI/Button';
import Card from '../UI/Card';

type ProductItemProps = {
  id: string;
  isFav: string;
  title: string;
  description: string;
};

export const ProductItem: FC<ProductItemProps> = (props) => {
  //const toggleFav = useContext(ProductsContext).toggleFav;

  const dispatch = useStore()[1];

  const toggleFavHandler = () => {
    //toggleFav(props.id);
    dispatch('TOGGLE_FAV', props.id);
  };

  return (
    <Card style="mb-4">
      <div>
        <h2 className={clsx('my-1 mx-0 text-lg', props.isFav && 'text-[#ff2058]')}>
          {props.title}
        </h2>
        <p className="my-1 mx-0">{props.description}</p>
        <Button outline={!props.isFav ? true : false} onClick={toggleFavHandler}>
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </Button>
      </div>
    </Card>
  );
};
