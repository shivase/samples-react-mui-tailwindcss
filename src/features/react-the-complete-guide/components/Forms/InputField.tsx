import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type InputFieldProps = FieldWrapperPassThroughProps & {
  type?: 'text' | 'email' | 'password' | 'number';
  fieldClassName?: string;
  labelClassName?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const InputField = (props: InputFieldProps) => {
  const { type = 'text', label, fieldClassName, labelClassName, registration, error } = props;

  return (
    <FieldWrapper label={label} error={error} className={labelClassName}>
      <input
        type={type}
        className={clsx(
          'w-80 max-w-full rounded-md border-[1px] border-solid border-[#ccc]',
          fieldClassName,
        )}
        {...registration}
      />
    </FieldWrapper>
  );
};
