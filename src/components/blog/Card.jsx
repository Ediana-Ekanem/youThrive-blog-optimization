import React from "react";

const Card = ({ title, body, handleClick }) => {
  return (
    <>
      <div
        className="shadow-lg w-[350px] border-t-4 border-gray-500 bg-white p-10 cursor-pointer"
        onClick={handleClick}
      >
        <h3 className="font-bold mb-10">{title}</h3>
        <p>{body}</p>
      </div>
    </>
  );
};

export default Card;
