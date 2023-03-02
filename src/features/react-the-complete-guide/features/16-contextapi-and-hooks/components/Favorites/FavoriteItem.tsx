import { FC } from 'react';

import Card from '../UI/Card';

type FavoriteItemProps = {
  title: string;
  description: string;
  id: string;
};

export const FavoriteItem: FC<FavoriteItemProps> = (props) => {
  return (
    <Card style="mb-4">
      <div>
        <h2 className="my-1 mx-0 text-lg">{props.title}</h2>
        <p className="my-1 mx-0">{props.description}</p>
      </div>
    </Card>
  );
};
