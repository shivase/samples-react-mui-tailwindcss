import { FC } from 'react';

type ImageContainerProps = {
  desktop_image: string;
  mobile_image: string;
  children: React.ReactNode;
};

export const ImageContainer: FC<ImageContainerProps> = (props) => {
  return (
    <div className="group relative overflow-hidden md:w-1/4">
      <img
        src={props.desktop_image}
        alt=""
        className="hidden w-full duration-200 group-hover:scale-110 md:block"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
      <img src={props.mobile_image} alt="" className="w-full md:hidden" />
      <h5 className="absolute bottom-4 w-52 px-6 duration-200 group-hover:scale-110 group-hover:text-black md:bottom-8 md:px-10">
        {props.children}
      </h5>
    </div>
  );
};
