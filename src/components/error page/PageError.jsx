import React from "react";
import { Link } from "react-router-dom";

const PageError = () => {
  return (
    <>
      <div className="flex flex-col  justify-center items-center h-screen">
        <h1 className="text-3xl">404</h1>
        <div className="text-lg mt-5">
          <p>Oops! The page you're looking for doesn't exist.</p>
          <p>It might have been moved or deleted.</p>
        </div>
        <ul className="mt-10 text-blue-700 font-semibold">
          <li>
            <Link to="/"> Go to Homepage</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PageError;
