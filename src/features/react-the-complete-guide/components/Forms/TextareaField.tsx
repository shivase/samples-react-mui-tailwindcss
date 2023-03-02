import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from './FieldWrapper';

type TextAreaFieldProps = FieldWrapperPassThroughProps & {
  className?: string;
  labelClassName?: string;
  rows?: number;
  registration: Partial<UseFormRegisterReturn>;
};

export const TextAreaField = (props: TextAreaFieldProps) => {
  const { label, rows, labelClassName, className, registration, error } = props;

  return (
    <FieldWrapper label={label} error={error} className={labelClassName}>
      <textarea
        className={clsx(
          'block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm',
          className,
        )}
        rows={rows}
        {...registration}
      />
    </FieldWrapper>
  );
};
