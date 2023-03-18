import { useUser } from '../hooks/useUser';

export const HomePage = () => {
  const { user } = useUser();

  return (
    <>
      <h1>Home</h1>
      <p>Your logged in at {user?.metadata.lastSignInTime}</p>
      <p>Your user id is {user?.uid}</p>
    </>
  );
};
