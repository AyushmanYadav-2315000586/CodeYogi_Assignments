import React from "react";

export default function NavBar({ photo }) {
  return (
    <div className="bg-gray-100 px-10 py-5 shadow">
      <img src={photo} alt="Amazon Logo" className="h-10" />
    </div>
  );
}
