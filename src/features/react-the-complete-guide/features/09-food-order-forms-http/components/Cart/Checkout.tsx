import clsx from 'clsx';
import { FC } from 'react';
import * as z from 'zod';

import { Form, InputField } from '../../../../components/Forms';
import { User } from '../../types';

const schema = z.object({
  name: z.string().min(1, 'Required'),
  street: z.string().min(1, 'Require'),
  postalCode: z.string().min(1, 'Required'),
  city: z.string().min(1, 'Require'),
});

type CheckoutProps = {
  onCancel: () => void;
  onConfirm: (v: User) => void;
};

export const Checkout: FC<CheckoutProps> = (props) => {
  return (
    <Form<User, typeof schema> onSubmit={(e) => props.onConfirm(e)} schema={schema}>
      {({ register, formState }) => (
        <>
          <InputField
            type="text"
            label="Your Name"
            error={formState.errors['name']}
            registration={register('name')}
          />
          <InputField
            type="text"
            label="Street"
            error={formState.errors['street']}
            registration={register('street')}
          />
          <InputField
            type="text"
            label="Postal Code"
            error={formState.errors['postalCode']}
            registration={register('postalCode')}
          />
          <InputField
            type="text"
            label="City"
            error={formState.errors['city']}
            registration={register('city')}
          />
          <div className="flex justify-end gap-4">
            {' '}
            <button
              className={clsx(
                `cursor-pointer rounded-3xl border-none bg-transparent py-2 px-8 text-[#5a1a01]`,
                `hover:bg-[#ffe6dc] active:bg-[#ffe6dc]`,
              )}
              type="button"
              onClick={props.onCancel}>
              Cancel
            </button>
            <button
              type="submit"
              className={clsx(
                `cursor-pointer rounded-3xl py-2 px-8 `,
                `border-[1px] border-solid border-[#5a1a01] bg-[#5a1a01] text-white`,
                `hover:bg-[#7a2706] active:bg-[#7a2706]`,
              )}>
              Confirm
            </button>
          </div>
        </>
      )}
    </Form>
  );
};
