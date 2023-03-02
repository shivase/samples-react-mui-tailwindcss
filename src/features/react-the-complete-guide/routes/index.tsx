import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImport';

import { Dashboard } from '../features/misc';

const { ExpensesApp } = lazyImport(() => import('../features/01-expenses'), 'ExpensesApp');

const { CourseGoals } = lazyImport(() => import('../features/02-course-goals'), 'CourseGoals');
const { Modal } = lazyImport(() => import('../features/03-modal'), 'Modal');
const { LoginLogout } = lazyImport(() => import('../features/04-login-logout'), 'LoginLogout');

const { FoodOrder } = lazyImport(() => import('../features/05-food-order'), 'FoodOrder');
const { HttpRequest } = lazyImport(
  () => import('../features/06-movie-sending-http-request'),
  'HttpRequest',
);

const { CustomHooks } = lazyImport(() => import('../features/07-custom-hooks'), 'CustomHooks');

const { Forms } = lazyImport(() => import('../features/08-forms'), 'Forms');

const { FoodOrderFormsAndHttp } = lazyImport(
  () => import('../features/09-food-order-forms-http'),
  'FoodOrderFormsAndHttp',
);

const { StateManagement } = lazyImport(
  () => import('../features/10-state-management'),
  'StateManagement',
);

const { StateManagementAdvanced } = lazyImport(
  () => import('../features/11-state-management-advanced'),
  'StateManagementAdvanced',
);

const { ReactRouter } = lazyImport(() => import('../features/12-react-router'), 'ReactRouter');

const { ReactRouterPractice } = lazyImport(
  () => import('../features/13-react-router-practice'),
  'ReactRouterPractice',
);

const { Authentication } = lazyImport(
  () => import('../features/14-authentication'),
  'Authentication',
);

const { Animation } = lazyImport(() => import('../features/15-animations'), 'Animation');

const { ContextApiAndHooks } = lazyImport(
  () => import('../features/16-contextapi-and-hooks'),
  'ContextApiAndHooks',
);

const { Testing } = lazyImport(() => import('../features/17-testing'), 'Testing');

export const ReactTheCompleteGuideRouter = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />}></Route>
      <Route path="expenses" element={<ExpensesApp />} />
      <Route path="course-goals" element={<CourseGoals />} />
      <Route path="modal" element={<Modal />} />
      <Route path="login-logout" element={<LoginLogout />} />
      <Route path="food-order" element={<FoodOrder />} />
      <Route path="http-request" element={<HttpRequest />} />
      <Route path="custom-hooks" element={<CustomHooks />} />
      <Route path="forms" element={<Forms />} />
      <Route path="food-order-forms-and-http" element={<FoodOrderFormsAndHttp />} />
      <Route path="state-management" element={<StateManagement />} />
      <Route path="state-management-advanced" element={<StateManagementAdvanced />} />
      <Route path="react-router/*" element={<ReactRouter />} />
      <Route path="react-router-practice/*" element={<ReactRouterPractice />} />
      <Route path="authentication/*" element={<Authentication />} />
      <Route path="animation" element={<Animation />} />
      <Route path="contextapi-and-hooks/*" element={<ContextApiAndHooks />} />
      <Route path="testing/*" element={<Testing />} />
    </Routes>
  );
};
