import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { useState } from 'react';

type errorMessagesType = {
  [key: string]: string;
};

const errorMessages: errorMessagesType = {
  'Firebase: Error (auth/invalid-email).': 'Invalid email address',
  'Firebase: Error (auth/wrong-password).': 'Wrong Password',
  'Firebase: Error (auth/user-not-found).': 'User Not Found',
  'Firebase: Password should be at least 6 characters (auth/weak-password).':
    'Password should be at least 6 characters',
  'Firebase: Error (auth/email-already-in-use).': 'This Email is taken',
};

export const useAuth = () => {
  const [error, setError] = useState('');

  const logIn = async (email: string, password: string) => {
    setError('');
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      alert('successfully logged in!');
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(errorMessages[e.message] || `Something went wrong : ${e.message}`);
      }
    }
  };

  const logOut = async () => {
    const auth = getAuth();
    await signOut(auth);
  };

  const createAccount = async (email: string, password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      setError('Password and Confirm Password must match!');

      return;
    }
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Successfully created an account!');
    } catch (e) {
      if (e instanceof Error) {
        setError(errorMessages[e.message] || `Something went wrong : ${e.message}`);
      }
    }
  };

  return {
    error,
    logIn,
    logOut,
    createAccount,
  };
};
