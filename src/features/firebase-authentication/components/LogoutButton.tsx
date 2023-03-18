import { useAuth } from '../hooks/useAuth';

export const LogoutButton = () => {
  const { logOut } = useAuth();

  return (
    <>
      <button className="rounded-md bg-blue-300 py-2 px-4 text-white" onClick={logOut}>
        Log Out
      </button>
    </>
  );
};
