import { FC } from 'react';

type InputProps = {
  type: string;
  id: string;
  value: string;
  isValid: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
};

const Input: FC<InputProps> = (props) => {
  const { type, id, value, isValid, onChange, onBlur } = props;

  return (
    <input
      className={`${isValid ? '' : 'border-red-500 bg-[#fbdada] '}
        block flex-[3] rounded-md border-solid border-[#ccc] p-1
        focus:border-[#4f005f] focus:bg-[#f6dbfc] focus:outline-none
        `}
      type={type}
      id={id}
      value={value}
      onChange={(e) => onChange(e)}
      onBlur={onBlur}
    />
  );
};

export default Input;
