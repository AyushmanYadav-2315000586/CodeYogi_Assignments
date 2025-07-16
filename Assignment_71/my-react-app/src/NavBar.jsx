import React from "react";
import { Link } from "react-router-dom";
import { memo } from "react";
import { FaCartArrowDown } from "react-icons/fa";

function NavBar({ productCount }) {
  return (
    <div className="bg-white px-10 py-5 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/">
          <img
            src="https://static.vecteezy.com/system/resources/previews/014/018/563/non_2x/amazon-logo-on-transparent-background-free-vector.jpg"
            alt="Amazon Logo"
            className="h-14"
          />
        </Link>
        <div className="flex gap-5">
          <button className="bg-amber-200 px-2 py-1 rounded-md text-purple-600">
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-purple-600 px-2 py-1 rounded-md text-amber-200">
            <Link to="/signup">Sign Up</Link>
          </button>
          <Link
            to="/cart"
            className="flex items-center gap-2 text-red-600 hover:text-red-800 font-semibold relative"
          >
            <FaCartArrowDown className="text-2xl" />
            View Cart
            {productCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {productCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(NavBar);
// The memoization helps to prevent unnecessary re-renders of the NavBar component when its props haven't changed.
// This is particularly useful if the NavBar is part of a larger component tree that frequently updates
// but the NavBar itself does not need to re-render unless the productCount changes.
