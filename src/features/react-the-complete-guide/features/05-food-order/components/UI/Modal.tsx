import { FC } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = () => (
  <div className="fixed top-0 left-0 z-20 h-[100vh] w-full animate-slide-down bg-[rgba(0,0,0,0.75)] " />
);

type ModalOverlayProps = {
  children: React.ReactNode;
};

const ModalOverlay: FC<ModalOverlayProps> = (props) => {
  const { children } = props;

  return (
    <div className="fixed top-[20vh] left-[5%] z-30 w-[90%] rounded-xl bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.25)] md:left-[calc(50%-20rem)] md:w-[40rem]">
      <div className="">{children}</div>
    </div>
  );
};

type ModalProps = {
  children: React.ReactNode;
};

const Modal: FC<ModalProps> = (props) => {
  const { children } = props;
  const portalElement = document.getElementById('overlays');

  return portalElement ? (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  ) : null;
};

export default Modal;
