import clsx from 'clsx';
import { FC } from 'react';

const colors = {
  purple: {
    bg: 'bg-purple-700',
    ring: 'ring-purple-300',
    text: '',
  },
  gray: {
    bg: 'bg-gray-600',
    ring: 'ring-purple-300',
    text: '',
  },
  white: {
    bg: 'bg-white',
    ring: 'ring-purple-300',
    text: 'text-gray-900',
  },
};

type BoxProps = {
  name: string;
  image: string;
  verified: boolean;
  large_text: string;
  small_text: string;
  color: keyof typeof colors;
  quotes_images?: string;
  className?: string;
};

export const Box: FC<BoxProps> = (props) => {
  return (
    <div
      className={clsx(
        props.className,
        props.quotes_images && 'relative',
        colors[props.color].bg,
        colors[props.color].text,
        'rounded-xl p-10',
      )}>
      {props.quotes_images && (
        <img
          src={props.quotes_images}
          alt=""
          className="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150"
        />
      )}
      <div className={clsx(props.quotes_images && 'z-10', 'flex space-x-4')}>
        <img
          src={props.image}
          alt=""
          className={clsx(colors[props.color].ring, 'h-10 w-10 rounded-full ring-2')}
        />
        <div className="text-sm">
          <h4 className="opacity-90">{props.name}</h4>
          {props.verified && <p className="opacity-50">Verified Graduate</p>}
        </div>
      </div>
      <p className={clsx(props.quotes_images && 'relative z-10', 'mt-6 text-xl')}>
        {props.large_text}
      </p>
      <p className="mt-6 opacity-50 line-clamp-5">{props.small_text}</p>
    </div>
  );
};
