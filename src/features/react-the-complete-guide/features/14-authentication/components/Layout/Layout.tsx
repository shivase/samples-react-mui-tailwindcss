import { FC, Fragment } from 'react';

import { MainNavigation } from './MainNavigation';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};
