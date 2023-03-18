import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

export const CreateAccountPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { error, createAccount } = useAuth();

  return (
    <div className="">
      <div className="mt-4 flex flex-col items-center space-y-4">
        <h1 className="text-lg font-bold">Create Account</h1>
        {error && <p className="italic text-red-300">{error}</p>}
        <input
          className="w-60 rounded-md border border-black px-4 py-2"
          type="email"
          placeholder="enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-60 rounded-md border border-black px-4 py-2"
          placeholder="enter a new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="w-60 rounded-md border border-black px-4 py-2"
          placeholder="re-enter a new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          onClick={() => createAccount(email, password, confirmPassword)}
          className="rounded-md bg-blue-300 py-2 px-4 text-white">
          Create Account
        </button>
        <Link to="../login">Already have an account? Log In</Link>
      </div>
    </div>
  );
};
