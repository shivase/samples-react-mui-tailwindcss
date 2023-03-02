import clsx from 'clsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as z from 'zod';

import { Form, InputField } from '../../../../components/Forms';
import { useAuth } from '../../hooks/useAuth';
import { User } from '../../types';

const schema = z.object({
  email: z.string().min(1, 'Required'),
  password: z.string().min(6, 'Require at least six characters'),
});

export const AuthForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const { signup, signin, isLoading } = useAuth();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (user: User) => {
    try {
      if (isLogin) {
        await signin(user.email, user.password);
      } else {
        await signup(user.email, user.password);
      }
      navigate('../');
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <>
      {error && (
        <section className="my-8 mx-auto text-center font-bold text-red-500">{error}</section>
      )}
      <section className="my-8 mx-auto w-[95%] max-w-[25rem] rounded-md bg-[#38015c] p-2 text-center shadow-[0_1px_4px_rgba(0,0,0,0.2)]">
        <h1 className="text-center text-white">{isLogin ? 'Login' : 'Sign Up'}</h1>
        <Form<User, typeof schema>
          onSubmit={(e) => {
            submitHandler(e);
          }}
          schema={schema}>
          {({ register, formState }) => (
            <>
              <InputField
                type="text"
                label="Your Email"
                labelClassName="mb-2 block font-bold text-white"
                fieldClassName="w-full rounded-md border-[1px] border-solid border-white bg-[#f1e1fc] p-1  text-left text-[#38015c]"
                error={formState.errors['email']}
                registration={register('email')}
              />
              <InputField
                type="password"
                label="Your Password"
                labelClassName="mb-2 block font-bold text-white"
                fieldClassName="w-full rounded-md border-[1px] border-solid border-white bg-[#f1e1fc] p-1  text-left text-[#38015c]"
                error={formState.errors['password']}
                registration={register('password')}
              />
              <div className="mt-6 flex flex-col items-center">
                {!isLoading && (
                  <button className="cursor-pointer rounded-md border-[1px] border-solid border-[#9f5ccc] bg-[#9f5ccc] py-2 px-10 text-white hover:border-[#873abb] hover:bg-[#873abb]">
                    {isLogin ? 'Login' : 'Create Account'}
                  </button>
                )}
                {isLoading && <p className="font-bold text-white">Sending Request...</p>}
                <button
                  type="button"
                  className={clsx(
                    'cursor-pointer rounded-md hover:border-[#873abb]',
                    'mt-4 border-none bg-transparent py-1 px-6 text-[#9f5ccc] hover:bg-transparent hover:text-[#ae82cc]',
                  )}
                  onClick={switchAuthModeHandler}>
                  {isLogin ? 'Create new account' : 'Login with existing account'}
                </button>
              </div>
            </>
          )}
        </Form>
      </section>
    </>
  );
};
