import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { resetDb } from '@/test/server/db';

import { Spinner } from '../Elements';
import { Button } from '../Elements/Button/Button';

export const MainLayout = () => {
  const resetDatabase = () => {
    resetDb();
    window.location.reload();
  };

  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <Spinner size="xl" />
        </div>
      }>
      <header className="fixed top-0 left-0 flex h-14 w-full items-center justify-between bg-teal-500 py-0 px-8">
        <div className="mr-6 flex shrink-0 items-center text-white">
          <span className="text-xl font-semibold tracking-tight">
            <Link to="/">React Apps</Link>
          </span>
        </div>
        {import.meta.env.VITE_REACT_APP_API_MOCKING && (
          <Button onClick={resetDatabase}>Reset Database</Button>
        )}
      </header>
      <main className="pt-16">
        <Outlet />
      </main>
    </Suspense>
  );
};
