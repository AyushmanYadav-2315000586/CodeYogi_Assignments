import React from "react";
import { Link } from "react-router-dom";

function NotFound(){
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-white">
        <img
          src="/NotFound.jpg"
          alt="404 Not Found"
          className="w-80 h-auto mb-6"
        />
        <p className="text-xl text-gray-600 font-semibold mb-2">
          We're sorry, the page you requested could not be found
          <br />
          Please go back to homepage
        </p>
        <button className="border rounded-full px-5 py-1 mt-4 bg-blue-500 text-white hover:bg-blue-700 active:scale-90">
          <Link to="/">Go Home</Link>
        </button>
      </div>
    );
}

export default NotFound;