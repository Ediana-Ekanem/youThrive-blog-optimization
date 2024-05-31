import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-between items-center px-10 bg-gray-400 py-10 text-white text-md font-semibold">
        <p>&copy; 2024 ED'S Blog | All rights reserved</p>

        <div className="flex space-x-5">
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
