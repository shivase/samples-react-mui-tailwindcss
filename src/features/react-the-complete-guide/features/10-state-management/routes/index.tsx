import { Auth } from '../components/Auth';
import { Counter } from '../components/Counter';
import { Header } from '../components/Header';
import { UserProfile } from '../components/UserProfile';
import { useAuthStore } from '../stores/auth';

export const StateManagement = () => {
  const { isAuthenticated } = useAuthStore();

  return (
    <>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </>
  );
};
