import React from "react";
import { Link } from "react-router-dom";
import { memo } from "react";

function NavBar() {
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
        <div className="space-x-4">
          <button className="bg-amber-200 px-2 py-1 rounded-md text-purple-600">
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-purple-600 px-2 py-1 rounded-md text-amber-200">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(NavBar);
// The memoization helps to prevent unnecessary re-renders of the NavBar component when its props haven't changed.
// This is particularly useful if the NavBar is part of a larger component tree that frequently updates
// but the NavBar itself does not need to re-render unless the productCount changes.
