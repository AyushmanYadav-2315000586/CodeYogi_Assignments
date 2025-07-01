import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-80 h-screen top-0 sticky bg-gray-400 p-2 flex flex-col space-y-3 text-xl">
      <Link to="/">Home Page</Link>
      <Link to="/products/1">Product Detail</Link>
    </div>
  );
}
export default Sidebar