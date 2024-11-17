import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center min-h-screen space-y-5 font-montserrat">
      <h2 className="text-2xl">Ooppsssss!</h2>
      <h1 className="text-8xl text-red-800">404</h1>
      <p>Page not Found</p>
      <Link to="/">
        <button className="btn bg-green-900 hover:text-green-900 text-white">Go back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
