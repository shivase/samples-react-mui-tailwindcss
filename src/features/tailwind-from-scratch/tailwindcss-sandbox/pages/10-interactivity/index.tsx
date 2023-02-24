export const Interactivity = () => {
  return (
    <div className="scroll-smooth">
      {/* Hover State Styling */}
      <button className="m-3 rounded-lg bg-black py-3 px-5 text-white hover:bg-orange-500 hover:text-white">
        submit
      </button>

      {/* Focus State Styling */}
      <button className="m-3 rounded-lg bg-black py-3 px-5 text-white focus:bg-green-500 focus:text-white">
        submit
      </button>

      {/* Active State Styling */}
      <button className="m-3 rounded-lg bg-black py-3 px-5 text-white active:bg-yellow-500 active:text-white">
        submit
      </button>

      {/* Styling based on parent state */}
      <a
        href="."
        className="group mx-auto block max-w-xs space-y-3 rounded-lg bg-white p-6 shadow-lg hover:bg-sky-500">
        <h3 className="group-hover:text-white">Card Title</h3>
        <p className="group-hover:text-white">This is the card text</p>
      </a>

      {/* Pseudo Classes */}
      <ul>
        <li className="first:bg-red-200 odd:bg-orange-500 even:bg-green-500">Items 1</li>
        <li className="first:bg-red-200 odd:bg-orange-500 even:bg-green-500">Items 2</li>
        <li className="first:bg-red-200 odd:bg-orange-500 even:bg-green-500">Items 3</li>
        <li className="first:bg-red-200 odd:bg-orange-500 even:bg-green-500">Items 4</li>
        <li className="first:bg-red-200 odd:bg-orange-500 even:bg-green-500">Items 5</li>
        <li className="first:bg-red-200 odd:bg-orange-500 even:bg-green-500">Items 6</li>
      </ul>

      {/* Appearance */}
      {/* Use appearance-none to reset any browser specific styling on an element. This utility is often used when creating custom form components. */}

      <select className="appearance-none">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <br />

      {/* Cursor */}
      <button className="cursor-not-allowed rounded-lg bg-black py-3 px-5 text-white active:bg-yellow-500 active:text-white">
        submit
      </button>

      {/* Resize */}

      {/* User Select */}
      <div className="select-none">
        Sint mollit enim pariatur elit sunt et tempor cillum aliquip tempor.
      </div>
      <div className="select-text">
        Sint mollit enim pariatur elit sunt et tempor cillum aliquip tempor.
      </div>
      <div className="select-all">
        Sint mollit enim pariatur elit sunt et tempor cillum aliquip tempor.
      </div>
      <div className="select-auto">
        Sint mollit enim pariatur elit sunt et tempor cillum aliquip tempor.
      </div>

      <a href="#item" className="my-6 block">
        Go To Item
      </a>

      {/* Smooth Scroll Example */}
      <p>
        Nulla ipsum veniam duis adipisicing ex cupidatat ad eiusmod quis do. Incididunt Lorem quis
        aliquip cupidatat est commodo veniam amet minim nulla magna esse et dolore. Incididunt culpa
        aliqua in pariatur esse commodo quis nisi. In proident ex est veniam anim enim ea eu et anim
        laboris sint ipsum. Adipisicing nulla consequat qui labore minim in eiusmod aliqua irure et
        deserunt ut consectetur quis. Aliquip nostrud ullamco aliqua labore in non quis aliquip enim
        non est ex nisi. Nulla quis pariatur nulla id velit laboris velit in.
      </p>
    </div>
  );
};

//{/* Cursor
//  cursor-auto	          cursor: auto;
//  cursor-default	      cursor: default;
//  cursor-pointer	      cursor: pointer;
//  cursor-wait	          cursor: wait;
//  cursor-text	          cursor: text;
//  cursor-move	          cursor: move;
//  cursor-help	          cursor: help;
//  cursor-not-allowed	  cursor: not-allowed;
//  cursor-none	          cursor: none;
//  cursor-context-menu	  cursor: context-menu;
//  cursor-progress	      cursor: progress;
//  cursor-cell	          cursor: cell;
//  cursor-crosshair	    cursor: crosshair;
//  cursor-vertical-text	cursor: vertical-text;
//  cursor-alias	        cursor: alias;
//  cursor-copy	          cursor: copy;
//  cursor-no-drop	      cursor: no-drop;
//  cursor-grab	          cursor: grab;
//  cursor-grabbing	      cursor: grabbing;
//  cursor-all-scroll	    cursor: all-scroll;
//  cursor-col-resize	    cursor: col-resize;
//  cursor-row-resize	    cursor: row-resize;
//  cursor-n-resize	      cursor: n-resize;
//  cursor-e-resize	      cursor: e-resize;
//  cursor-s-resize	      cursor: s-resize;
//  cursor-w-resize	      cursor: w-resize;
//  cursor-ne-resize	    cursor: ne-resize;
//  cursor-nw-resize	    cursor: nw-resize;
//  cursor-se-resize	    cursor: se-resize;
//  cursor-sw-resize	    cursor: sw-resize;
//  cursor-ew-resize	    cursor: ew-resize;
//  cursor-ns-resize	    cursor: ns-resize;
//  cursor-nesw-resize	  cursor: nesw-resize;
//  cursor-nwse-resize	  cursor: nwse-resize;
//  cursor-zoom-in	      cursor: zoom-in;
//  cursor-zoom-out	      cursor: zoom-out;
//*/}
//
