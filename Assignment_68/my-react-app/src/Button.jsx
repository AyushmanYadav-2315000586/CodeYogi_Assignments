import React from "react";

export default function Button({ children }) {
  return (
    <button className="bg-gradient-to-r from-pink-500 to-violet-800 w-3/4 mt-3 rounded-lg py-2">
      {children}
    </button>
  );
}
