export const Flex = () => {
  return (
    <>
      {/* Flex and alignment */}
      <div className="flex h-72 w-full flex-wrap items-center justify-between bg-gray-100">
        <div className="border-blue-300 bg-blue-100 p-10">01</div>
        <div className="border-blue-300 bg-blue-100 p-10">02</div>
        <div className="border-blue-300 bg-blue-100 p-10">03</div>
        <div className="border-blue-300 bg-blue-100 p-10">04</div>
      </div>

      {/* Flex Column, Gap and Order */}
      <div className="flex h-auto w-full flex-col items-center justify-between gap-4 bg-gray-200">
        <div className="order-3 border-blue-300 bg-blue-100 p-10">01</div>
        <div className="order-2 border-blue-300 bg-blue-100 p-10">02</div>
        <div className="order-4 border-blue-300 bg-blue-100 p-10">03</div>
        <div className="order-1 border-blue-300 bg-blue-100 p-10">04</div>
      </div>

      {/* Grow and shrink */}
      <div className="flex w-full bg-gray-400">
        <div className="w-64 flex-initial border border-blue-300 bg-blue-100 p-10">01</div>
        <div className="w-64 flex-none border border-blue-300 bg-blue-100 p-10">02</div>
        <div className="w-64 flex-auto border border-blue-300 bg-blue-100 p-10">03</div>
        <div className="w-64 flex-1 border border-blue-300 bg-blue-100 p-10">04</div>
        <div className="border border-blue-300 bg-blue-100 p-10">05</div>
        <div className="border border-blue-300 bg-blue-100 p-10">06</div>
        <div className="border border-blue-300 bg-blue-100 p-10">07</div>
      </div>

      <div className="flex text-center">
        <div className="flex-1 bg-blue-100">Hello</div>
        <div className="flex-1 bg-blue-100">Hello</div>
        <div className="flex-1 bg-blue-100">Hello</div>
      </div>
    </>
  );
};

//{/* Justify Content
//      justify-start	      justify-content: flex-start;
//      justify-end	        justify-content: flex-end;
//      justify-center	    justify-content: center;
//      justify-between	    justify-content: space-between;
//      justify-around	    justify-content: space-around;
//      justify-evenly	    justify-content: space-evenly;
//    */}
//
//{/*
//      items-start	align-items: flex-start;
//      items-end	align-items: flex-end;
//      items-center	align-items: center;
//      items-baseline	align-items: baseline;
//      items-stretch	align-items: stretch;
//     */}
//
//{/* Flex Direction
//      flex-row	        flex-direction: row;
//      flex-row-reverse	flex-direction: row-reverse;
//      flex-col	        flex-direction: column;
//      flex-col-reverse	flex-direction: column-reverse;
//    */}
//
//{/*
//      flex-wrap	        flex-wrap: wrap;
//      flex-wrap-reverse	flex-wrap: wrap-reverse;
//      flex-nowrap	      flex-wrap: nowrap;
//     */}
//
//{/* Flex Properties
//      flex-none	    flex: none;
//      Prevent item from growing or shrinking
//
//      flex-initial	flex: 0 1 auto;
//      Allow item to shrink but not grow, taking into account its initial size
//
//      flex-auto	    flex: 1 1 auto;
//      Allow item to grow and shrink, taking into account its initial size
//
//      flex-1	      flex: 1 1 0%;
//      Allow item to grow and shrink as needed, ignoring its initial size
//    */}
//
