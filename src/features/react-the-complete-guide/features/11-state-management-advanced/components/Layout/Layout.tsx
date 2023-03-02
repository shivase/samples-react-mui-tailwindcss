import { FC } from 'react';

import { MainHeader } from './MainHeader';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};
