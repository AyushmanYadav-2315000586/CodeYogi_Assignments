import React from "react";
import { Link } from "react-router-dom";

export default function Product({
  category,
  title,
  price,
  originalPrice,
  image,
  sale,
}) {
  return (
    <div className="border rounded-lg p-4 w-64 shadow-md bg-white relative transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      {sale && (
        <span className="absolute top-2 right-2 bg-red-500 text-white flex items-center justify-center text-xs px-2 py-1 w-10 h-10 rounded-full">
          Sale
        </span>
      )}
      <img
        src={image}
        alt="Product"
        className="w-full h-48 object-cover rounded"
      />
      <p className="text-gray-500 text-sm mt-2">{category}</p>
      <h2 className="text-lg font-semibold">{title}</h2>
      <span className="flex flex-grow"></span>
      <div className="mt-1">
        {originalPrice ? (
          <>
            <span className="text-gray-500 line-through text-sm">
              ${originalPrice}
            </span>
            <span className="ml-2 text-gray-800 font-bold">${price}</span>
          </>
        ) : (
          <span className="text-gray-800 font-bold">${price}</span>
        )}
      </div>
      <div className="flex justify-end mt-3">
        <div className="border border-gray-500 px-3 py-1 rounded-lg bg-red-500 hover:bg-red-700 text-white active:scale-95">
          <Link to="/products/1">View Detail</Link>
        </div>
      </div>
    </div>
  );
}
