import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updatePassword,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

import { firebaseApp } from '../../../config/firebase';
import { useNotificationStore } from '../../../stores/notifications';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { addNotification } = useNotificationStore();
  const fireauth = firebaseApp.fireauth;

  useEffect(() => {
    const unsubscribed = fireauth.onAuthStateChanged(() => {
      setIsLoggedIn(!!fireauth.currentUser);
    });

    return () => {
      unsubscribed();
    };
  }, [fireauth]);

  const signup = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(fireauth, email, password);
      addNotification({
        type: 'success',
        title: 'Sign up Success',
        autoClose: 2000,
      });
    } catch (e: any) {
      throw new Error(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const signin = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(fireauth, email, password);
      addNotification({
        type: 'success',
        title: 'Login Success',
        autoClose: 2000,
      });
    } catch (e: any) {
      throw new Error(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const changePassword = async (password: string) => {
    setIsLoading(true);
    if (fireauth.currentUser) {
      try {
        await updatePassword(fireauth.currentUser, password);
        addNotification({
          type: 'success',
          title: 'Password change Success',
          autoClose: 2000,
        });
      } catch (e: any) {
        throw new Error(e.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await fireauth.signOut();
    } catch (e: any) {
      addNotification({
        type: 'error',
        title: 'Logout Failed: ' + e.message,
      });
    }
    setIsLoading(false);
  };

  return { isLoggedIn, isLoading, signup, signin, changePassword, logout };
};
