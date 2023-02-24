import { Link } from 'react-router-dom';

export const MiniProjectsApp = () => {
  return (
    <div>
      <div className="container m-auto bg-gray-50 p-6">
        <h1 className="text-center text-3xl text-blue-800">Mini Projects</h1>
        <ul className="mt-6">
          <li className="my-4 border border-blue-200 p-2 text-center text-lg">
            <Link className=" text-blue-500 hover:text-blue-300" to="email-subscribe">
              Email Subscribe Card
            </Link>
          </li>
          <li className="my-4 border border-blue-200 p-2 text-center text-lg">
            <Link className=" text-blue-500 hover:text-blue-300" to="pricing-cards">
              Pricing Cards
            </Link>
          </li>
          <li className="my-4 border border-blue-200 p-2 text-center text-lg">
            <Link className=" text-blue-500 hover:text-blue-300" to="product-modal">
              Product Modal
            </Link>
          </li>
          <li className="my-4 border border-blue-200 p-2 text-center text-lg">
            <Link className=" text-blue-500 hover:text-blue-300" to="image-gallery">
              Image Gallery
            </Link>
          </li>
          <li className="my-4 border border-blue-200 p-2 text-center text-lg">
            <Link className=" text-blue-500 hover:text-blue-300" to="login-modal">
              Login Modal
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
