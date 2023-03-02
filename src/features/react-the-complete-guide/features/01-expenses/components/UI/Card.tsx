type Props = {
  className?: string;
  children: React.ReactNode;
};

const Card: React.FC<Props> = (props) => {
  const { className, children } = props;

  let classNames = 'shadow-[0_1px_8px_rgba[0,0,0,0.25] rounded-xl';

  if (className) {
    classNames += ` ${className}`;
  }

  return <div className={classNames}>{children}</div>;
};

export default Card;
