import img1 from '../../assets/img/img1.jpg';

export const LayoutPosition = () => {
  return (
    <>
      {/* Positioning */}
      <div className="relative h-12 w-1/2 bg-red-200">
        <p>Parent Element</p>
        <div className="absolute bottom-0 right-0 bg-red-500">
          <p>Absolute child</p>
        </div>
      </div>

      {/* Top left corner */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute left-0 top-0 h-16 w-16 bg-yellow-300"></div>
      </div>

      {/* Top right corner */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute right-0 top-0 h-16 w-16 bg-yellow-300"></div>
      </div>

      {/* Bottom left corner */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute left-0 bottom-0 h-16 w-16 bg-yellow-300"></div>
      </div>

      {/* Bottom right corner */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute right-0 bottom-0 h-16 w-16 bg-yellow-300"></div>
      </div>

      {/* Span top edge */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-x-0 top-0 h-16 bg-yellow-300"></div>
      </div>

      {/* Span left edge */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-y-0 left-0 w-16 bg-yellow-300"></div>
      </div>

      {/* Span right edge */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-y-0 right-0 w-16 bg-yellow-300"></div>
      </div>

      {/* Span bottom edge */}
      <div className="relative h-32 w-32 bg-yellow-100">
        <div className="absolute inset-x-0 bottom-0 h-16 bg-yellow-300"></div>
      </div>

      {/* Display Classes */}
      <div>
        Lorem Ipsum is simply dummy text of the
        <span className="inline font-bold">This is inline</span> printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        <span className="inline-block font-bold">This is inline block</span> when an unknown printer
        took a galley of type and scrambled it to make a type specimen book. It has survived not
        only five<span className="block font-bold">This is block</span> centuries, but also the leap
        into electronic typesetting, remaining essentially unchanged. It was popularised in the
        1960s with the release of<span className="hidden font-bold">This is hidden</span> Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum
      </div>

      {/* Z-Index */}
      <div className="relative h-36">
        <div className="absolute left-10 z-40 h-24 w-24 bg-blue-300">1</div>
        <div className="absolute left-20 h-24 w-24 bg-blue-400">2</div>
        <div className="absolute left-40 z-10 h-24 w-24 bg-blue-500">3</div>
        <div className="absolute left-60 z-20 h-24 w-24 bg-blue-600">4</div>
        <div className="absolute left-80 z-30 h-24 w-24 bg-blue-700">5</div>
      </div>

      {/* Floats */}
      <div className="w-1/2">
        <img className="float-right h-48 w-48" src={img1} alt="" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum
        </p>
      </div>
    </>
  );
};

//{/* Position Classes
//      static	    position: static;
//      fixed	      position: fixed;
//      absolute	  position: absolute;
//      relative	  position: relative;
//      sticky	    position: sticky;
//    */}
//
//{/* Display Classes
//      block	            display: block;
//      inline-block	    display: inline-block;
//      inline	          display: inline;
//      flex	            display: flex;
//      inline-flex	      display: inline-flex;
//      table	            display: table;
//      grid	            display: grid;
//      inline-grid	      display: inline-grid;
//      contents	        display: contents;
//      list-item	        display: list-item;
//      hidden	          display: none;
//    */}
//
//{/* Z-Index
//      z-0	    z-index: 0;
//      z-10	  z-index: 10;
//      z-20	  z-index: 20;
//      z-30	  z-index: 30;
//      z-40	  z-index: 40;
//      z-50	  z-index: 50;
//      z-auto	z-index: auto;
//    */}
//
//{/* Float
//      float-right	  float: right;
//      float-left	  float: left;
//      float-none	  float: none;
//    */}
//
