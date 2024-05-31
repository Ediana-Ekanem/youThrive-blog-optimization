import React from "react";
import { Link } from "react-router-dom";

const PageError = () => {
  return (
    <main className="flex flex-col justify-center items-center h-screen bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <section className="text-center mb-6">
        <p className="text-lg">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-lg">It might have been moved or deleted.</p>
      </section>
      <nav className="text-blue-700 font-semibold">
        <Link to="/">Go to Homepage</Link>
      </nav>
    </main>
  );
};

export default PageError;
