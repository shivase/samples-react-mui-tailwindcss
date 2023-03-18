import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

export const useUser = () => {
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(!auth.currentUser);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
  }, [auth]);

  return {
    isLoading,
    user,
  };
};
