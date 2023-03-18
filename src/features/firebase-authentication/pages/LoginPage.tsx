import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn, error } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <h1 className="ml-2 py-4 text-lg font-bold">Login</h1>
      {error && <p className="italic text-red-300">{error}</p>}
      <input
        className="mx-2 rounded-md border border-black py-2 px-4"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="mx-2 rounded-md border border-black py-2 px-4"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => logIn(email, password)} className="rounded-md bg-blue-300 px-4 py-2">
        Log In
      </button>
      <Link to="../create-account" className="underline">
        Don't have an account? Create one
      </Link>
    </div>
  );
};
