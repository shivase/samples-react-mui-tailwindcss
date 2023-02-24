import img1 from '../../assets/img/img1.jpg';

export const BackgroundsShadows = () => {
  return (
    <>
      {/* Background Classes */}
      <div
        className="h-64 w-72 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img1})` }}></div>

      {/* Gradients */}
      <div className="h-24 bg-gradient-to-r from-cyan-500 to-blue-500"></div>

      {/* Shadows */}
      <div className="mt-6 ml-4 w-96 p-3 shadow">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into el
      </div>
      <div className="mt-6 ml-4 w-96 p-3 shadow-md">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into el
      </div>
      <div className="mt-6 ml-4 w-96 p-3 shadow-lg">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into el
      </div>
      <div className="mt-6 ml-4 w-96 p-3 shadow-xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into el
      </div>
      <div className="mt-6 ml-4 w-96 p-3 shadow-2xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into el
      </div>
      <div className="mt-6 ml-4 w-96 p-3 shadow-inner">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into el
      </div>
      <div className="mt-6 ml-4 w-96 p-3 shadow-2xl shadow-blue-500/50">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into el
      </div>
      <div className="mt-6 ml-4 w-96 p-3 shadow-2xl shadow-red-500/50">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into el
      </div>

      {/* Mix Blend */}
      <div className="flex justify-center -space-x-24">
        <div className="bg-blue-400 mix-blend-multiply">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a t
        </div>
        <div className="bg-pink-400 mix-blend-multiply">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a t
        </div>
      </div>
    </>
  );
};

//{/* Background Size
//  bg-auto	    background-size: auto;
//  bg-cover	  background-size: cover;
//  bg-contain	background-size: contain;
//*/}
// //
//{/* Background Repeat
//  bg-repeat	      background-repeat: repeat;
//  bg-no-repeat	  background-repeat: no-repeat;
//  bg-repeat-x	    background-repeat: repeat-x;
//  bg-repeat-y	    background-repeat: repeat-y;
//  bg-repeat-round	background-repeat: round;
//  bg-repeat-space	background-repeat: space;
//*/}
// //
//{/* Background Position
//  bg-bottom	      background-position: bottom;
//  bg-center	      background-position: center;
//  bg-left	        background-position: left;
//  bg-left-bottom	background-position: left bottom;
//  bg-left-top	    background-position: left top;
//  bg-right	      background-position: right;
//  bg-right-bottom	background-position: right bottom;
//  bg-right-top	  background-position: right top;
//  bg-top	        background-position: top;
//*/}
// //
//{/* Background Attachment
//  bg-fixed	  background-attachment: fixed;
//  bg-local	  background-attachment: local;
//  bg-scroll	  background-attachment: scroll;
//*/}
// //
//{/*
//  Shadows
//  shadow-sm	    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
//  shadow	      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
//  shadow-md	    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
//  shadow-lg	    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
//  shadow-xl	    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
//  shadow-2xl	  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
//  shadow-inner	box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
//  shadow-none	  box-shadow: 0 0 #0000;
// */}
//
