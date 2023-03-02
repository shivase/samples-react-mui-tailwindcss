import { forwardRef } from 'react';

type InputProps = JSX.IntrinsicElements['input'] & {
  label: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, ...input } = props;

  return (
    <div className="mb-2 flex items-center">
      <label htmlFor={input.id} className="mr-4 font-bold">
        {label}
      </label>
      <input
        ref={ref}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...input}
        className="w-12 rounded-md border-solid border-[#ccc] pl-2"
      />
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
