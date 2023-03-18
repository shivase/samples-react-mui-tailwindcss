import { FC } from 'react';
import { Navigate } from 'react-router';

import { useUser } from '../hooks/useUser';

type AuthedRouteProps = {
  component: React.ReactNode;
};

export const AuthedRoute: FC<AuthedRouteProps> = (props) => {
  const { user } = useUser();

  return user ? <>{props.component}</> : <Navigate to="login" />;
};
