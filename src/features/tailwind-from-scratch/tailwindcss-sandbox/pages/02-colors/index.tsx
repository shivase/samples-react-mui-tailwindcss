export const Colors = () => {
  return (
    <>
      {/* Default colors */}
      {/* white, black, red, green, blue, orange, yellow, purple, lime, emerald, teal, cyan, indigo, violet, fuchsia, pink, rose, sky, gray, slate, zinc, neutral, stone, amber,  */}

      {/* Text Colors */}
      <p className="text-black">Tailwind is awesome</p>
      <p className="text-white">Tailwind is awesome</p>
      <p className="text-red-500">Tailwind is awesome</p>
      <p className="text-green-500">Tailwind is awesome</p>
      <p className="text-emerald-500">Tailwind is awesome</p>
      <p className="text-zinc-300">Tailwind is awesome</p>
      <p className="text-slate-800">Tailwind is awesome</p>

      {/* Background Colors */}
      <p className="bg-slate-800 text-yellow-200">Tailwind is awesome</p>
      <p className="bg-emerald-500">Tailwind is awesome</p>
      <p className="bg-yellow-300">Tailwind is awesome</p>
      <p className="bg-indigo-800 text-white">Tailwind is awesome</p>

      {/* Text Underline */}
      <p className="underline decoration-red-500">Tailwind is awesome</p>
      <p className="underline decoration-emerald-600">Tailwind is awesome</p>
      <p className="underline decoration-yellow-800">Tailwind is awesome</p>

      {/* Border Colors */}
      <input type="text" className="border border-blue-400" />
      <input type="text" className="border border-green-400" />
      <input type="text" className="border border-orange-400" />

      {/* Divide Colors */}
      <div className="divide-y divide-blue-300">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
      </div>

      {/* Outline Colors */}
      <button className="outline outline-red-500">Hello</button>
      <button className="outline outline-blue-200">Hello</button>

      {/* Box Shadow Colors (Opacity defaults to 100, but you can set it)*/}
      <button className="bg-cyan-500 shadow-lg shadow-cyan-500">Subscribe</button>
      <button className="bg-cyan-500 shadow-lg shadow-purple-500/60">Subscribe</button>

      {/* Accent Colors */}
      <input type="checkbox" checked className="accent-purple-500" />
      <input type="checkbox" checked className="accent-cyan-500" />

      {/* Arbitrary Colors */}
      <div className="bg-[#427fab]">Hello</div>
      <div className="bg-[rgb(255,0,0)]">Hello</div>
      <div className="bg-[steelblue]">Hello</div>
    </>
  );
};
