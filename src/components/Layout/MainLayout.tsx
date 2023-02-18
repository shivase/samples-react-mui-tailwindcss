import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <Suspense fallback={<div className="flex h-full w-full items-center justify-center"></div>}>
      <header className="fixed top-0 left-0 flex h-14 w-full items-center justify-between bg-teal-500 py-0 px-8">
        <div className="mr-6 flex shrink-0 items-center text-white">
          <span className="text-xl font-semibold tracking-tight">
            <Link to="/">TOPページ</Link>
          </span>
        </div>
      </header>
      <main className="pt-16">
        <Outlet />
      </main>
    </Suspense>
  );
};
