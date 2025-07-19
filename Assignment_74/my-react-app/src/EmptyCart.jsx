import React from "react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="p-10 min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cyan-300 to-blue-400 rounded-xl">
      <img src="/EmptyCart.png" alt="Cart is Empty" className="w-4/12" />
      <h1 className="text-3xl font-semibold text-gray-600 mb-4">
        Your cart is empty 😢
      </h1>
      <Link to="/">
        <button className="mt-2 px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}
