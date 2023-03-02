import React from 'react';
import { useNavigate } from 'react-router';

import { Button } from '../../../components/Elements/Button/Button';

export const Dashboard = () => {
  const navigate = useNavigate();

  const base = 'm-4 w-full';

  return (
    <div className="m-4 flex flex-wrap items-center">
      <section className={base}>
        <Button onClick={() => navigate('/expenses')}>Expenses</Button>
      </section>
      <section className={base}>
        <Button onClick={() => navigate('/course-goals')}>Course Goals</Button>
      </section>
      <section className={base}>
        <Button onClick={() => navigate('/modal')}>Section 9: Modal</Button>
      </section>
      <section className={base}>
        <Button onClick={() => navigate('/login-logout')}>Section 10: Login / Logout</Button>
      </section>
      <section className={base}>
        <Button onClick={() => navigate('/food-order')}>Section 11: Food Order</Button>
      </section>
      <section className={base}>
        <Button onClick={() => navigate('/http-request')}>Section 14: Http Request</Button>
      </section>
      <section className={base}>
        <Button onClick={() => navigate('/custom-hooks')}>Section 15: Custom hooks</Button>
      </section>
      <section className={base}>
        <Button onClick={() => navigate('/forms')}>Section 16: Forms</Button>
      </section>
      <section className={base}>
        <Button onClick={() => navigate('/food-order-forms-and-http')}>
          Section 17: Food Order(Forms and Http)
        </Button>
      </section>
      <section className={base}>
        <Button onClick={() => navigate('/state-management')}>
          Section 18: State Management(changed to zustand)
        </Button>
      </section>
      <section className={base}>
        <Button onClick={() => navigate('/state-management-advanced')}>
          Section 19: State Management Advanced
        </Button>
      </section>
      <section className={base}>
        <Button onClick={() => navigate('/react-router')}>Section 20: React Router</Button>
      </section>
      <section className={base}>
        <Button onClick={() => navigate('/react-router-practice')}>
          Section 20: React Router(Practice)
        </Button>
      </section>
      <section className={base}>
        <Button onClick={() => navigate('/authentication')}>Section 22: Authentication</Button>
      </section>
      <section className={base}>
        <Button onClick={() => navigate('/animation')}>Section 24: Animation</Button>
      </section>
      <section className={base}>
        <Button onClick={() => navigate('/contextapi-and-hooks')}>
          Section 25: ContextAPI and Hooks
        </Button>
      </section>
      <section className={base}>
        <Button onClick={() => navigate('/testing')}>Section 26: Testing</Button>
      </section>
    </div>
  );
};
