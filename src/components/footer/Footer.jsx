import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center px-10 bg-gray-400 py-10 text-white text-md font-semibold">
      <p>&copy; 2024 ED'S Blog | All rights reserved</p>
      <nav
        aria-label="Footer Navigation"
        className="flex space-x-5 mt-4 md:mt-0"
      >
        <Link to="/terms" className="hover:underline">
          Terms and Conditions
        </Link>
        <Link to="/privacy" className="hover:underline">
          Privacy Policy
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
