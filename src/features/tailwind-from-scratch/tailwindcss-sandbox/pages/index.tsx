import { Link } from 'react-router-dom';

export const TailwindSandboxApp = () => {
  return (
    <div className="bg-blue-800">
      <div className="container h-full max-w-lg bg-gray-50 p-6">
        <h1 className="text-3xl text-blue-800">Tailwind CSS Sandbox</h1>
        <ul className="mt-6">
          <li className="my-4 border border-blue-200 p-2 text-lg">
            <Link className="text-blue-500 hover:text-blue-300" to="01-utility-first">
              Utility First Example
            </Link>
          </li>
          <li className="my-4 border border-blue-200 p-2 text-lg">
            <Link className="text-blue-500 hover:text-blue-300" to="02-colors">
              Colors
            </Link>
          </li>
          <li className="my-4 border border-blue-200 p-2 text-lg">
            <Link className="text-blue-500 hover:text-blue-300" to="03-container-spacing">
              Container & Spacing
            </Link>
          </li>
          <li className="my-4 border border-blue-200 p-2 text-lg">
            <Link className="text-blue-500 hover:text-blue-300" to="04-typography">
              Typography
            </Link>
          </li>
          <li className="my-4 border border-blue-200 p-2 text-lg">
            <Link className="text-blue-500 hover:text-blue-300" to="05-sizing">
              Sizing
            </Link>
          </li>
          <li className="my-4 border border-blue-200 p-2 text-lg">
            <Link className="text-blue-500 hover:text-blue-300" to="06-layout-position">
              Layout & Position
            </Link>
          </li>
          <li className="my-4 border border-blue-200 p-2 text-lg">
            <Link className="text-blue-500 hover:text-blue-300" to="07-backgrounds-shadows">
              Backgrounds & Shadows
            </Link>
          </li>
          <li className="my-4 border border-blue-200 p-2 text-lg">
            <Link className="text-blue-500 hover:text-blue-300" to="08-borders">
              Borders & Border Radius
            </Link>
          </li>
          <li className="my-4 border border-blue-200 p-2 text-lg">
            <Link className="text-blue-500 hover:text-blue-300" to="09-filters">
              Filters
            </Link>
          </li>
          <li className="my-4 border border-blue-200 p-2 text-lg">
            <Link className="text-blue-500 hover:text-blue-300" to="10-interactivity">
              Interactivity
            </Link>
          </li>
          <li className="my-4 border border-blue-200 p-2 text-lg">
            <Link className="text-blue-500 hover:text-blue-300" to="11-breakpoints">
              Breakpoints
            </Link>
          </li>
          <li className="my-4 border border-blue-200 p-2 text-lg">
            <Link className="text-blue-500 hover:text-blue-300" to="12-columns">
              Column Layouts
            </Link>
          </li>
          <li className="my-4 border border-blue-200 p-2 text-lg">
            <Link className="text-blue-500 hover:text-blue-300" to="13-flex">
              Flexbox
            </Link>
          </li>
          <li className="my-4 border border-blue-200 p-2 text-lg">
            <Link className="text-blue-500 hover:text-blue-300" to="14-grid">
              Grid
            </Link>
          </li>
          <li className="my-4 border border-blue-200 p-2 text-lg">
            <Link className="text-blue-500 hover:text-blue-300" to="15-transform-transition">
              Transform & Transitions
            </Link>
          </li>
          <li className="my-4 border border-blue-200 p-2 text-lg">
            <Link className="text-blue-500 hover:text-blue-300" to="16-animation">
              Animation
            </Link>
          </li>
          <li className="my-4 border border-blue-200 p-2 text-lg">
            <Link className="text-blue-500 hover:text-blue-300" to="17-customization">
              Customization & Config
            </Link>
          </li>
          <li className="my-4 border border-blue-200 p-2 text-lg">
            <Link className="text-blue-500 hover:text-blue-300" to="18-dark-mode">
              Dark Mode
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
