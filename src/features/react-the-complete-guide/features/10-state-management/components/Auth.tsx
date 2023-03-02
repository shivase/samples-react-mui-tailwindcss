import * as z from 'zod';

import { Button } from '../../../components/Elements/Button/Button';
import { Form, InputField } from '../../../components/Forms';
import { useAuthStore } from '../stores/auth';

const schema = z.object({
  email: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Require'),
});

type AuthForm = {
  email: string;
  password: string;
};

export const Auth = () => {
  const submitHandler = () => {};
  const { login } = useAuthStore();

  return (
    <main className="my-20 mx-auto w-[25rem] rounded-lg bg-[#f4f0fa] p-4 text-center shadow-[0_1px_8px_rgba(0,0,0,0.2)]">
      <section>
        <Form<AuthForm, typeof schema> onSubmit={submitHandler} schema={schema}>
          {({ register, formState }) => (
            <>
              <InputField
                type="text"
                label="Email"
                error={formState.errors['email']}
                registration={register('email')}
                labelClassName="mb-2 uppercase text-[#616161]"
                fieldClassName="m-auto w-[20rem] rounded-md border-[1px] border-solid border-[#ccc] p-1"
              />
              <InputField
                type="password"
                label="Password"
                error={formState.errors['password']}
                registration={register('password')}
                labelClassName="mb-2 uppercase text-[#616161]"
                fieldClassName="m-auto w-[20rem] rounded-md border-[1px] border-solid border-[#ccc] p-1"
              />
              <Button type="submit" onClick={login}>
                Login
              </Button>
            </>
          )}
        </Form>
      </section>
    </main>
  );
};
