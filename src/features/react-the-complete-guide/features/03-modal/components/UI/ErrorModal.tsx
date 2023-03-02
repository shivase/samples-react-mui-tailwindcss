import { FC } from 'react';

import Button from './Button';
import Card from './Card';

type ErrorModalProps = {
  title: string;
  message: string;
  onConfirm: () => void;
};

const ErrorModal: FC<ErrorModalProps> = (props) => {
  const { title, message, onConfirm } = props;

  return (
    <div>
      <div className="fixed top-0 left-0 z-10 h-full w-full bg-[rgba(0,0,0,0.75)]" />
      <Card className="fixed top-[30vh] left-[10%] z-[100] w-[80%] overflow-hidden md:left-[calc(50%-20rem)] md:w-[40rem]">
        <header className="bg-[#4f005f] p-4">
          <h2 className="m-0 text-white">{title}</h2>
        </header>
        <div className="p-4">
          <p>{message}</p>
        </div>
        <footer className="flex justify-end p-4">
          <Button type="button" onClick={onConfirm}>
            Okay
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
