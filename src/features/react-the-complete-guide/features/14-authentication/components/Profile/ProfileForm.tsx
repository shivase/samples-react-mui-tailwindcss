import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as z from 'zod';

import { Form, InputField } from '../../../../components/Forms';
import { useAuth } from '../../hooks/useAuth';

const schema = z.object({
  password: z.string().min(6, 'Require at least six characters'),
});

export const ProfileForm = () => {
  const { changePassword } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const submitHandler = async (data: { password: string }) => {
    try {
      await changePassword(data.password);
      navigate('../');
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <>
      <Form<{ password: string }, typeof schema>
        onSubmit={(data) => {
          submitHandler(data);
        }}
        schema={schema}
        className="my-8 mx-auto w-[95%] max-w-[25rem]">
        {({ register, formState }) => (
          <>
            <InputField
              type="password"
              label="New Password"
              labelClassName="font-bold mb-2 text-[#353336] block"
              fieldClassName="w-full rounded-md border-[1px] border-solid border-[#38015c] bg-[#f7f0fa] p-1"
              error={formState.errors['password']}
              registration={register('password')}
            />
            {error && <div className="mt-6 text-center font-bold text-red-500">{error}</div>}
            <div className="mt-6">
              <button className="cursor-pointer rounded-md border-[1px]  border-solid border-[#38015c] bg-[#38015c] py-2 px-6 text-white hover:border-[#540d83] hover:bg-[#540d83]">
                Change Password
              </button>
            </div>
          </>
        )}
      </Form>
    </>
  );
};
