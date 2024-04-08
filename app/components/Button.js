import React from "react";

export default function Button({ children, onClick, className }) {
  return (
    <button
      className={` hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
