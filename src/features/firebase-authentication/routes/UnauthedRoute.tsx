import { FC } from 'react';
import { Navigate } from 'react-router';

import { useUser } from '../hooks/useUser';

type UnauthedRouteProps = {
  component: React.ReactNode;
};

export const UnauthedRoute: FC<UnauthedRouteProps> = (props) => {
  const { user } = useUser();

  return user ? <Navigate to="../" /> : <>{props.component}</>;
};
